# FAQs - How can I fix a server error encountered on the Exchange portal?

_Answer:_ Clear cache and cookies before signing in to the Exchange Developer Portal, including at least the adobe.com cookies. If the problem continues, follow this sequence:

1. Remove the browser cache and cookies.

2. Sign out of the Exchange Portal, then sign back in.

3. Use the process below to capture browser network logs and console logs while reproducing the publishing issue.
   ** Browser network and console log capture:**

Launch Chrome and reproduce the error.

     Use Cmd+Option+I on Mac or F12 on Windows to open Chrome Developer Tools.
      Leave Developer Tools open while you inspect the error.

     Open the Network tab, then use the Name column to choose the Name tied to the server error.

From Headers, send the displayed values (Request URL, Response Header, Request Headers etc.)

     Next, open the Console tab and send any logs that report errors.

        Use this article to generate a HAR file: https://support.zendesk.com/hc/en-us/articles/204410413-Generating-a-HAR-file-for-troubleshooting

     Send both the network logs and HAR file through Google Drive or Dropbox.

When possible, include a video too, either as a shared link or in that Google Drive or Dropbox folder.

5. Send the logs described above to ccintrev@adobe.com, including the HAR file and a screenshot of network/console logs. Logs, with optional video, help the Adobe Engineering team resolve the issue faster.
