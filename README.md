# YouTube Comments Extractor

This project is a web application built with Google Apps Script that allows users to extract comments from a YouTube video and save them in a Google Sheet. The extracted comments are sorted based on the number of likes in descending order, and the Google Sheet is automatically created and shared with the user via email.


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
   - Replace the placeholder `API_KEY` in the `Code.gs` file with your actual API key.

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

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).