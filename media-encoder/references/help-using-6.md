# Publish Settings, Match Audio Channelization, Automatic Loudness Correction

> Adobe Media Encoder reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Publish settings in Adobe Media Encoder; Match audio channelization in Media Encoder; Automatic loudness correction — Overview.

## Publish settings in Adobe Media Encoder

Search Last updated on Mar 4, 2024

The Publish tab lets you send files to different social media platforms through a range of system presets.

Note

Beginning December 11, 2023, Creative Cloud Synced files are unavailable to new users and organizations. For personal accounts created before December 11, 2023, Creative Cloud Synced files end on February 1, 2024 (learn more here). For business accounts tied to organizations already in place before December 11, 2023, Creative Cloud Synced files end on October 1, 2024 (learn more here).

Files can be uploaded to destinations including Behance, Facebook, and others.

Note

When a publishing destination cannot accept a given format, that destination does not appear in the Publish tab.

### Behance

Select the box beside Behance.

Choose Sign in. You are redirected to the Behance login page.

Enter your credentials so Adobe Media Encoder can manage your Behance videos.

Enter an upload description in the Description field.

Use the Tag field to create keywords for the uploaded video, separating words with commas. Because this field is required, it cannot be blank.

To remove the local file after the Behance upload finishes, select Delete local file after upload.

### Facebook

To send an encoded file to Facebook, select the box beside Facebook.

Choose Sign in. You are redirected to the Facebook login page.

Enter your credentials to let Adobe Media Encoder manage your Facebook videos.

In the Pages field, review the pages available for your Facebook account. Choose a page from the menu as the video upload target.

In the Title field, type a name for the uploaded file. If this field is empty, the output filename is used as the title.

In the Description field, type the upload description.

To remove the local file after the Facebook upload finishes, select Delete local file after upload.

### FTP

A File Transfer Protocol (FTP) server allocates storage for sharing files. FTP is a common network file-transfer method and is especially helpful for sharing fairly large files over an Internet connection. The server administrator supplies the connection details.

To upload an encoded file to an FTP destination, select the box beside FTP.

In the Username field, type the username provided by the server administrator.

In the Password field, type the password needed to log in to the server.

In the Server field, type the DNS or IP address for the server hosting the FTP site.

In the Port field, type the number assigned to the FTP server's command port. The default value is 21.

In the Remote Path, type the access location on the FTP. It is written as a file path.

In the Retries field, type the number of attempts to contact the server when no connection is established.

After the Facebook upload, select Delete local file after upload when the local file should be removed.

### X

To send an encoded file to X, enable the checkbox beside X.

Click Sign in. Adobe Media Encoder opens the login page.

Enter the account credentials, then grant Adobe Media Encoder permission to manage your videos.

Choose Status and enter the video's description text.

To remove the local copy after the transfer finishes, enable Delete local file after upload.

Note

Videos must be no longer than 2 minutes and 20 seconds. Status text allows up to 280 characters, except Japanese, Korean, and Chinese, which allow 140 characters.

### Vimeo

To publish an encoded file on Vimeo, enable the checkbox beside Vimeo.

Click Sign in. The login screen opens.

Enter the Vimeo credentials and allow Adobe Media Encoder to manage your Vimeo videos.

Close the browser. Under Account settings, Adobe Media Encoder shows the Vimeo account used for sign-in.

Use the Channel field to name the channel that should receive the exported video.

In the Title field, type a name for the uploaded file. When this field is empty, the output filename becomes the title.

Use the Description field for the uploaded video's description.

In Viewable by, choose who can view the videos:

- Only me (default)
- Anybody
- Anybody with a password

In the Tags field, add comma-separated words to create keywords for the uploaded video.

To remove the local copy after upload, select Delete local file after upload.

Note

If Adobe Media Encoder is not allowed to manage Vimeo videos, an "Authorization denied" message appears and the workflow returns to Adobe Media Encoder.

### YouTube

To publish an encoded file on YouTube, enable the checkbox beside YouTube.

Click Sign in. Adobe Media Encoder opens the Log in screen on the YouTube/Google site.

Enter the credentials, then allow Adobe Media Encoder to manage your YouTube videos.

After closing the browser, Adobe Media Encoder displays the YouTube account used for login under Account settings.

In the Channel field, choose the channel that should receive the exported video.

To publish to another channel, click Add and choose a different existing channel from the YouTube account. Every added channel appears in the Channel menu.

In the Playlist field, pick one playlist from the available Playlist menu in the YouTube account.

In the Title field, type a name for the uploaded file. If nothing is entered, the output filename is used as the title.

Use the Description field to add the uploaded video's description.

In the Privacy field, choose who can see the video:

- Private
- Public
- Unlisted (default)

In the Tags field, create uploaded-video keywords by entering words separated with commas.

In the Custom Thumbnail field, choose whether to upload a custom thumbnail for your YouTube Video. Available choices are:

- None- YouTube picks the uploaded video's thumbnail automatically.
- Frame from source video - Enter a timecode to use one video frame as the custom thumbnail. Click Use Current Frame to choose the frame currently visible in the Export Settings preview.
- From Image File - Select an external image file for the custom thumbnail. Choose Choose a file... from the Thumbnail File menu, then specify the image file to use.

Custom thumbnail uploads on YouTube require a verified YouTube account. Related YouTube Help guidance is Add Video Thumbnails.

To remove the local copy after upload, enable Delete local file after upload.

Note

If permission for Adobe Media Encoder to manage YouTube videos is denied, an "Authorization denied" message appears and Adobe Media Encoder becomes active again.

## Match audio channelization in Media Encoder

Search. Last updated: Jan 21, 2026

### Match source audio channel configuration while encoding with Adobe Media Encoder.

Use new beta features

Testing and feedback are now open for Match Audio Source support. Try it in Media Encoder (beta).

Get started

When video projects include audio, keeping the source channel layout helps preserve the intended balance and sound quality. Source audio might be mono, stereo, or a more complex surround configuration. Adobe Media Encoder (Beta) adds flexible controls for matching the encoded file's audio layout to the source, giving control over channel handling during export.

The match source audio update in Adobe Media Encoder (Beta) includes these capabilities:

- Matches sample rate and channelization: Aligns automatically with the source audio setup, including stereo, 5.1, or 8-channel.
- Format support: Supports QuickTime, HEVC, and H.264 when the format allows it, plus Waveform Audio and MP3. A future release is planned to add MXF support.
- Fallback behavior: When a selected format cannot use the source channelization, such as H.264 with only mono, stereo, or 5.1 support, Media Encoder falls back to the nearest supported choice.
- Preserving all channels: For full channelization beyond 5.1, choose a multi-channel-capable format such as QuickTime.

The match source controls can be enabled manually in the Export Settings dialog box, or they can be stored in an encoding preset.

### Enable match source controls in Export Settings

Add video or audio files to the encoding queue.

In the item's row in the Queue panel, click the text under Format, Preset, or Output File path to open the Export Settings dialog box.

Open the Audio tab. In Basic Audio Settings, enable the checkbox next to the Sample Rate dropdown so exported audio uses the source sample rate.

To match channelization, enable the checkbox next to the Channels dropdown menu so the export uses the source audio channel configuration.

4. Turn on the Channels checkbox so the export follows the source configuration.
   Another route is to open the Audio tab and select Match Source.

- Source-audio matching can be constrained by the chosen output format, including bit rate, sample rate, or channel configuration limits.
- Changes made only in the Video section do not match audio-related settings. Those settings are controlled only by Match Source in the Audio section.

Select OK.

### Create an encoding preset

Create encoding presets in Adobe Media Encoder with match source audio options enabled when each export should automatically use the original audio's sample rate and channel layout. This avoids repeated audio-setting adjustments and helps prevent incorrect sample rates or channel mismatches.

In the Preset Browser panel, use Create Encoding Preset to open the Preset Settings dialog box.

Go to the Audio tab. Under Basic Audio Settings, enable the checkboxes for these options:

- Sample Rate
- Channels

2. Enable Sample Rate and Channels so export audio follows the source.
   You can also open the Video tab and select Match Source under Basic Video Settings. That changes these Basic Video Settings options to Based on Source:

- Frame size (width and height)
- Frame Rate
- Field Order
- Aspect ratio

3. Select Match Source so every option under Basic Video Settings changes to Based on Source.
   Select OK.

## Automatic loudness correction — Overview

In Media Encoder CC, broadcast loudness standards can be checked for video and audio projects. You can also adjust those standards, set True Peak Limits, and review a loudness-values report.

### Automatic loudness correction — Applying loudness correction

Bring the media files into AME and place them in the Queue panel.

1. Queue panel
   For a queued file, open its preset to turn on loudness correction.

2. Apply loudness correction
   On the Effects tab, enable the Loudness Normalization check-box.

3. Effects settings
   Use the Loudness Standard drop-down list to pick the standard required for your region. The available choices are:

- ATSC A/85
- EBU R128
- ITU BS.1770-3

Only ITU BS.1770-3 allows its loudness value to be edited; the other standards keep their loudness fixed.

To create a media loudness standards report, enable the Write Loudness Report check-box. AME writes an xml file containing the loudness value and true peak level.

Select OK.

Built-in loudness normalization supports mono, stereo, and 5.1ch audio. For channel layouts outside those types, including 4ch, 8ch, 16ch, and similar layouts, AME shows the Channel Configuration screen.

In this interface, define multiple audio streams and assign each channel stream to mono, stereo, or 5.1. Successful normalization requires the channel count assigned here to equal the source file's channel count.
