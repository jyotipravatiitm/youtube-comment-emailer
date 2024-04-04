
function loadEnvVariables() {
  var envFile = DriveApp.getFilesByName('.env').next().getBlob().getDataAsString();
  var envVariables = envFile.split('\n');

  var scriptProperties = PropertiesService.getScriptProperties();

  for (var i = 0; i < envVariables.length; i++) {
    var [key, value] = envVariables[i].split('=');
    scriptProperties.setProperty(key.trim(), value.trim());
  }
}
function doGet() {
  loadEnvVariables();
  return HtmlService.createHtmlOutputFromFile('index');
}



function fetchYouTubeComments(videoUrl, numComments, emailAddress) {
  // Replace with your YouTube API key
  var apiKey = PropertiesService.getScriptProperties().getProperty("API KEY");


  // Replace with the URL of the YouTube video
  var videoUrl = videoUrl;

  // Extract the video ID from the URL
  var videoId = videoUrl.split("v=")[1];

  // Make a request to the YouTube Data API to retrieve video details
  var videoUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=" + videoId + "&key=" + apiKey;
  var videoResponse = UrlFetchApp.fetch(videoUrl);
  var videoData = JSON.parse(videoResponse.getContentText());

  var videoTitle = "";
  var channelName = "";
  var viewCount = "";
  var uploadTime = "";

  if (videoData.items && videoData.items.length > 0) {
    videoTitle = videoData.items[0].snippet.title;
    channelName = videoData.items[0].snippet.channelTitle;
    viewCount = videoData.items[0].statistics.viewCount;
    uploadTime = videoData.items[0].snippet.publishedAt;
  }

  // Make a request to the YouTube Data API to retrieve base comments
  var commentsUrl = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=" + videoId + "&key=" + apiKey + "&maxResults=" + numComments + "&order=relevance";
  var commentsResponse = UrlFetchApp.fetch(commentsUrl);
  var commentsData = JSON.parse(commentsResponse.getContentText());

  // Create a new Google Sheet for the user
  var userSheet = SpreadsheetApp.create("YouTube Comments - " + videoTitle);
  var sheet = userSheet.getActiveSheet();
  userSheet.addEditor(emailAddress);

  var subject = "YouTube Comments - " + videoTitle;
  var body = "Please find the extracted YouTube comments in the following Google Sheet: " + userSheet.getUrl();
  MailApp.sendEmail(emailAddress, subject, body);
  

  // Set the headers in the Google Sheet
  sheet.appendRow(["Video Title", "Channel Name", "Video URL", "View Count", "Upload Time"]);
  sheet.appendRow([videoTitle, channelName, videoUrl, viewCount, uploadTime]);
  sheet.appendRow(["Comment", "Likes"]);

  // Extract the comments and likes from the API response
  var comments = [];
  for (var i = 0; i < commentsData.items.length; i++) {
    var comment = commentsData.items[i].snippet.topLevelComment.snippet.textDisplay;
    var likes = commentsData.items[i].snippet.topLevelComment.snippet.likeCount;
    comments.push([comment, likes]);
  }

  // Sort the comments based on the number of likes in descending order
  comments.sort(function(a, b) {
    return b[1] - a[1];
  });

  // Append the sorted comments to the sheet
  for (var i = 0; i < comments.length; i++) {
    sheet.appendRow(comments[i]);
  }

  // Return the URL of the newly created Google Sheet
  return userSheet.getUrl();
}