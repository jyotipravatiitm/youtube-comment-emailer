# YouTube Comments Extractor

This project is a web application built with Google Apps Script that allows users to extract comments from a YouTube video and save them in a Google Sheet. The extracted comments are sorted based on the number of likes in descending order, and the Google Sheet is automatically created and shared with the user via email.

## Features

- Enter a YouTube video URL to extract comments from
- Specify the number of comments to extract (up to 100)
- Provide an email address to receive the Google Sheet link
- Automatically create a new Google Sheet with the extracted comments
- Sort comments based on the number of likes in descending order
- Send an email to the provided email address with the Google Sheet link

## Usage

1. Open the YouTube Comments Extractor web application.
2. Enter the YouTube video URL from which you want to extract comments.
3. Specify the number of comments you want to extract (maximum 100).
4. Enter your email address where you want to receive the Google Sheet link.
5. Click the "Extract Comments" button.
6. Wait for the application to process the request and extract the comments.
7. Once the extraction is complete, you will receive an email with the link to the generated Google Sheet.
8. Open the Google Sheet to view the extracted comments sorted by the number of likes.

## Configuring the API Key

To use the YouTube Comments Extractor, you need to configure the YouTube Data API key. Follow these steps to set up the API key:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Enable the YouTube Data API v3 for your project.
4. Create an API key:
   - Go to the "Credentials" page in the Google Cloud Console.
   - Click on "Create credentials" and select "API key".
   - Copy the generated API key.
5. Create a `.env` file in your project's root directory.
6. Open the `.env` file and add the following line:
   ```
   API_KEY=YOUR_API_KEY
   ```
   Replace `YOUR_API_KEY` with the API key you copied in step 4.
7. Save the `.env` file.

The YouTube Comments Extractor will automatically load the API key from the `.env` file when running the application.

### Obtaining the YouTube API Key

To obtain a YouTube API key, follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Enable the YouTube Data API v3 for your project.
4. Go to the "Credentials" page in the Google Cloud Console.
5. Click on "Create credentials" and select "API key".
6. Copy the generated API key.

Once you have the API key, make sure to add it to the `.env` file as mentioned in the "Configuring the API Key" section.

## Benefits

- Save time and effort in manually collecting YouTube comments
- Easily analyze and review comments for a specific video
- Sort comments based on popularity (number of likes) to identify top comments
- Automatically create a Google Sheet with the extracted comments for further analysis or sharing
- Receive the Google Sheet link via email for convenient access
- Customize the number of comments to extract based on your requirements

## Requirements

- A web browser with internet access
- A valid YouTube video URL
- A Google account to receive the Google Sheet link via email

## Installation

This project is built using Google Apps Script and can be easily deployed as a web application. To set up the project, follow these steps:

1. Create a new Google Apps Script project.
2. Copy the code from the `Code.gs` file into the Google Apps Script editor.
3. Create a new HTML file named `index.html` and copy the code from the provided HTML file.
4. Deploy the project as a web application.
5. Grant necessary permissions to allow the application to create and send emails.

## Support

If you encounter any issues or have any questions, please feel free to contact the project maintainer at [your email address].

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes.

Please ensure that your code follows the existing coding style and conventions used in the project.

## Code Explanation

The project consists of two main files: `Code.gs` and `index.html`. Here's an explanation of what each function does:

### Code.gs

- `doGet()`: This function is the entry point of the web application. It is triggered when the application URL is accessed and returns the HTML content of the `index.html` file.

- `fetchYouTubeComments(videoUrl, numComments, emailAddress)`: This function takes the YouTube video URL, the number of comments to extract, and the user's email address as parameters. It performs the following tasks:
  - Extracts the video ID from the URL.
  - Makes a request to the YouTube Data API to retrieve video details.
  - Makes a request to the YouTube Data API to retrieve comments.
  - Creates a new Google Sheet and writes the video details and comments to it.
  - Sorts the comments based on the number of likes in descending order.
  - Sends an email to the provided email address with the link to the generated Google Sheet.

### index.html

- The HTML file contains the user interface of the web application. It includes a form where the user can enter the YouTube video URL, the number of comments to extract, and their email address.
- The form submission is handled using JavaScript. When the form is submitted, the `google.script.run` method is used to call the `fetchYouTubeComments()` function in the server-side code (`Code.gs`).
- The JavaScript code also handles displaying a loading spinner while the comments are being extracted and showing success or error messages to the user.

## How to Use the Code in Google Apps Script

To use this code in Google Apps Script, follow these steps:

1. Create a new Google Apps Script project:
   - Go to [script.google.com](https://script.google.com/) and click on "New Project".
   - Give your project a name and click "Create".

2. Add the necessary files:
   - In the Google Apps Script editor, create a new script file and name it `Code.gs`.
   - Copy the content of the `Code.gs` file from this project and paste it into the newly created file.
   - Create a new HTML file and name it `index.html`.
   - Copy the content of the `index.html` file from this project and paste it into the newly created file.

3. Set up the YouTube Data API:
   - Enable the YouTube Data API in your Google Cloud Console project.
   - Create API credentials (API key) for your project.
   - Add the API key to the `.env` file as mentioned in the "Configuring the API Key" section.

4. Deploy the project as a web application:
   - Click on the "Deploy" button in the Google Apps Script editor.
   - Select "New deployment" and choose "Web app" as the deployment type.
   - Set the project version and description.
   - Choose the appropriate access settings (e.g., "Anyone, even anonymous" for public access).
   - Click "Deploy".
   - Copy the web app URL provided after deployment.

5. Test the application:
   - Open the web app URL in a web browser.
   - Enter a YouTube video URL, the number of comments to extract, and your email address.
   - Click the "Extract Comments" button.
   - Wait for the process to complete and check your email for the Google Sheet link.

That's it! You can now use the YouTube Comments Extractor in your own Google Apps Script project.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).