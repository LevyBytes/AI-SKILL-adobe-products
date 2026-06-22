# About Frameio, Upload Media To Frameio, Add Comments On Shared Projects, Add Collaborators Using The Frameio Panel ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Frame.io overview; Upload media to Frame.io; Add comments on shared projects; Add collaborators using the Frame.io panel; Remove collaborators using the Frame.io panel; Share for review with Frame.io; Import comments as markers; Integrate Adobe Workfront with Frame.io; About cloud rendering; Cloud rendering with Frame.io; Cloud rendering in Premiere FAQ; Set up cloud rendering.

## Frame.io overview

### Collaborating on video edits and collecting feedback with Frame.io.

Note

This article covers resources for the Review with Frame.io (Legacy) panel in Premiere. For Frame.io Version 4 (V4), note the following:

- Frame.io V4 accounts do not work with this panel.
- In Premiere 25.6 or later, open the new Frame.io V4 panel with Window > Frame.io > Frame.io V4. Learn more via this support article.
- In Premiere v25.6 and later, users who need the Frame.io (Legacy) panel can find the extension under Window > Frame.io > Frame.io (Legacy).

Frame.io is a cloud platform for sharing video projects, collecting feedback, and collaborating with a team. It includes a Frame.io panel built into Premiere and After Effects, a full-featured web app, and tools for managing review media, comments, and versions. Whether teammates work together in one office or remotely, Frame.io helps keep the review process organized and connected.

### Frame.io panel in Premiere and After Effects

Frame.io can be used directly inside Premiere or After Effects. It is included with a Creative Cloud subscription and lets you:

- Open and arrange media files
- Invite collaborators into projects
- Send timelines and media out for review
- Share projects using presentation mode
- Bring comments and annotations straight into your timeline

The Frame.io panel gives quick access to projects, media transfer, collaborators, and sharing.

Open the Frame.io panel to work with projects, uploads, downloads, collaborators, and shared files.

A. Select an available project or add a project B. Download and upload media C. Manage versions D. Add collaborators E. Share projects

Start in the Frame.io panel in Premiere or After Effects for quick access, then switch to the Frame.io web app for advanced collaboration features.

### Frame.io web app

In the Frame.io web app, teams can manage versions, share projects, and exchange real-time feedback. Camera to Cloud is also included, providing a secure direct upload path from cameras to Frame.io.

Frame.io supports organizing, managing, sharing, and collaborating on media projects.

Use Frame.io as the workspace for media-project organization, management, sharing, and collaboration.

A. Project list B. All media C. Review links for all sent projects D. Links for all branded presentations E. All Camera to Cloud connections F. Project sharing option G. File upload and folder creation option

## Upload media to Frame.io

### Uploading media to the Frame.io panel in Premiere and After Effects for team review.

Note

This article covers resources for the Review with Frame.io (Legacy) panel in Premiere. For Frame.io Version 4 (V4), note the following:

- Frame.io V4 accounts do not work with this panel.
- In Premiere 25.6 or later, open the new Frame.io V4 panel with Window > Frame.io > Frame.io V4. Learn more via this support article.
- In Premiere v25.6 and later, users who need the Frame.io (Legacy) panel can find the extension under Window > Frame.io > Frame.io (Legacy).

Frame.io supports many file types, including common video, image, audio, and PDF formats. Files uploaded to a project can be viewed and reviewed when their format is supported.

Frame.io uses an accelerated uploader for large media files without compression. It encodes files into H.264 videos for smooth web playback while leaving the original file available for download.

Before you begin

Review Frame.io and its collaboration capabilities.

### Upload media in Premiere

Open the Frame.io panel with Window > Workspaces > Review.

Sign in with your Frame.io account.

To send the sequence currently being edited to Frame.io, choose Upload > Active Sequence.

Use the Active Sequence option when the active sequence you are working on needs to be uploaded to Frame.io.

Use the Active Sequence option when the active sequence you are working on needs to be uploaded to Frame.io. Note

In the Frame.io web app, media can be uploaded by dragging a file or folder and dropping it anywhere inside the project.

### Upload media in After Effects

Open the Frame.io panel from Window > Workspaces > Review.

Sign in to Frame.io with your account.

Choose Upload.

In the Frame.io panel, choose Upload > Active Comp (or any other option).

In the Frame.io panel, choose Upload > Active Comp (or any other option).

Use Active Comp to upload selected comps from the Timeline panel, or use Queued Comps to upload compositions that are already waiting in the Render Queue.

Add the required information, then choose Upload.

The Upload Sequence dialog box is where the uploaded file's settings are entered.

The Upload Sequence dialog box is where the uploaded file's settings are entered.

- Name: enter the filename to use in Frame.io.
- Preset: choose the render preset.
- Range: choose the entire sequence or only the section between the In and Out points for export.
- Render to: set the disk location for the exported file.
- Export markers at comments: convert timeline markers into Frame.io comments during upload.

Tip

For details on how each upload option behaves, read the upload options information for Framie.io.

### Upload Active Sequence and Active Comp

Premiere's Active Sequence option, plus After Effects options Active Comp and Queued Comps, let you render the Timeline and upload it straight to Frame.io for sharing while staying in the application.

Open the Frame.io panel through Window > Workspaces > Review.

Sign in with your Frame.io account.

In the Frame.io panel, choose Upload > Active Sequence in Premiere, or choose Active Comp or Queued Comps in After Effects.

Fill in the requested information, then select Upload.

Use the Upload Sequence dialog box for the settings that describe the file being uploaded.

Use the Upload Sequence dialog box for the settings that describe the file being uploaded.

- Name: enter the name the file should have in Frame.io.
- Preset: pick the render preset to apply.
- Range: decide whether export covers the full sequence or only the span from In to Out.
- Render to: choose the disk destination for the exported file.
- Export markers at comments: upload timeline markers as Frame.io comments.
- Keep rendered file: leave the exported file on disk in the folder chosen in Render to. Clearing this option removes the files after the upload finishes.
- Auto-version: place new sequence versions into a Frame.io version stack.

After the upload finishes, Frame.io immediately generates hover scrubs for video files and thumbnails for still images. Other file types use a file icon.

Using Active Sequence in Premiere or Active Comp in After Effects makes Frame.io preserve the folder hierarchy automatically.

## Add comments on shared projects

### Add comments tied to exact frames while reviewing video in shared projects.

Note

This article covers resources for Premiere's Review with Frame.io (Legacy) panel. If you use Frame.io Version 4 (V4), note the following:

- Frame.io V4 accounts are not compatible with this panel.
- For the new Frame.io V4 panel in Premiere 25.6 or later, open Window > Frame.io > Frame.io V4. More information is available in this support article.
- In Premiere v25.6 and later, users who need the Frame.io (Legacy) panel can find the extension at Window > Frame.io > Frame.io (Legacy).

Reviewers add frame-specific notes with the text field below the composition window. The timeline shows those comments immediately. Before posting, reviewers can use annotation tools such as font color, shapes, or highlights to customize the feedback.

Before you begin

To open the Frame.io panel, select Window > Review with Frame.io, and verify that the shared project or file is present in the Frame.io panel.

Open the player in the Frame.io panel by double-clicking the shared project.

Play the media, then pause on the frame that needs a comment.

Enter the comment in the comment field and select Send.

For editor feedback, play or scrub through the shared video, pause at the right point, and add review comments and annotations.

For editor feedback, play or scrub through the shared video, pause at the right point, and add review comments and annotations.

Collaborators can view all reviewer feedback by selecting Show comments in the Frame.io panel. Each comment includes a timestamp, and you can reply, delete comments, or mark them complete. The annotation options include multiple colors, helping make review notes clearer and more complete.

Tip

Review comments make Timeline panel navigation direct: selecting a comment moves automatically to the exact video frame where it was placed.

## Add collaborators using the Frame.io panel

### Add Frame.io collaborators so projects can be shared, reviewed, annotated, and developed together.

Note

This article covers resources for Premiere's Review with Frame.io (Legacy) panel. If you use Frame.io Version 4 (V4), note the following:

- Frame.io V4 accounts are not compatible with this panel.
- For the new Frame.io V4 panel in Premiere 25.6 or later, open Window > Frame.io > Frame.io V4. More information is available in this support article.
- In Premiere v25.6 and later, users who need the Frame.io (Legacy) panel can find the extension at Window > Frame.io > Frame.io (Legacy).

Frame.io lets you add collaborators and share projects for review, with comments and annotations collected directly inside the project.

### Add collaborators using the Frame.io web app

Before you begin

After opening the project in the Frame.io web app, authenticate with your Frame.io account.

Use the Add collaborator icon.

Create a collaborator entry for the project.

For the new project collaborator, use the Project members dialog box to type the email address for the person you want to invite. The Project members dialog box is used to add the new email address and send the collaboration invitation.

The Project members dialog box is used to add the new email address and send the collaboration invitation.

Select Invite to send the email notification.

Note

The invited person must sign in with the same email address that received the invitation.

Before you begin

In Premiere, open the project, open the Frame.io panel through Window > Workspaces > Review, and sign in to your Frame.io account.

In the Frame.io panel, choose the Add collaborator icon.

Use the Add Collaborator icon to begin inviting someone and add that collaborator to the project.

Use the Add Collaborator icon to begin inviting someone and add that collaborator to the project.

In the Project Members dialog box, type the email address for the user you want to invite.

Select Invite to send the email notification.

The collaborator receives the invitation at that email address. Notification centers in both the Frame.io web app and the Frame.io panel also show the invitation.

Tip

The Invite via link option can also create a project invitation link that users can follow to add themselves to the project.

## Remove collaborators using the Frame.io panel

### Remove collaborators when people no longer participating in the project should not make unintended changes.

Note

This article covers resources for Premiere's Review with Frame.io (Legacy) panel. If you use Frame.io Version 4 (V4), note the following:

- Frame.io V4 accounts are not compatible with this panel.
- For the new Frame.io V4 panel in Premiere 25.6 or later, open Window > Frame.io > Frame.io V4. More information is available in this support article.
- In Premiere v25.6 and later, users who need the Frame.io (Legacy) panel can find the extension at Window > Frame.io > Frame.io (Legacy).

In Premiere, the Frame.io panel can remove collaborators from projects so they cannot view or comment, upload or download files, join reviews, or receive notifications.

Caution

After removal, a collaborator loses access to the media and cannot edit it.

Select the project in the Frame.io panel.

In the Frame.io panel, select Show collaborators.

Select Remove collaborator.

The Remove collaborator option removes collaborators' access to the shared project while keeping their edits and comments.

The Remove collaborator option removes collaborators' access to the shared project while keeping their edits and comments.

Select Do it.

## Share for review with Frame.io

### Use Share for review to send edits through Frame.io for feedback and approval.

Note

This article covers resources for Premiere's Review with Frame.io (Legacy) panel. If you use Frame.io Version 4 (V4), note the following:

- Frame.io V4 accounts are not compatible with this panel.
- For the new Frame.io V4 panel in Premiere 25.6 or later, open Window > Frame.io > Frame.io V4. More information is available in this support article.
- In Premiere v25.6 and later, users who need the Frame.io (Legacy) panel can find the extension at Window > Frame.io > Frame.io (Legacy).

With Share for review, reviewers open the newest edit from a shared link and add comments or annotations on exact video frames in the timeline.

Every Adobe Premiere and Creative Cloud subscription includes Frame.io. The included entitlement is two users, five concurrent projects, 100GB storage, plus Camera to Cloud functionality.

Note

In the project, create a sequence and finish the needed edits.

Use the Share button in the Premiere header bar.

Under Share for review, choose Select Frame.io Location to set where the active sequence should be exported, uploaded, and stored.

Note

Selecting the location requires you to be signed in to your Frame.io account.

Select Frame.io Location lets you choose the Frame.io destination that will hold the active sequence.

Select Frame.io Location lets you choose the Frame.io destination that will hold the active sequence.

Choose a destination in Frame.io, then select Choose.

Use the Preset Settings dropdown menu to choose video resolution from the presets provided.

- Web 1080: 1920x1080-pixel video resolution; Full HD output with higher-quality resolution, sharper detail, and smoother visuals
- Web 720: 1280x720-pixel video resolution; HD output balancing quality and file size, appropriate for streaming even with low internet connectivity
- ProRes 4444: video codec capable of encoding videos at any resolution up to ultra-high definition (UHD) and beyond.

Select Share to start Adobe Media Encoder so it can export the sequence and upload it to Frame.io.

Copy the shareable link, then send it to the reviewer.

Copy the generated review link and share it with the reviewers.

Copy the generated review link and share it with the reviewers.

When more edits are made, Premiere tracks the active sequence changes. Choose Share > Update shared content to send the revised version to Frame.io while keeping the same review link.

Premiere tracks all changes in the active sequence, and Update shared content pushes those updates to Frame.io for review.

Premiere tracks all changes in the active sequence, and Update shared content pushes those updates to Frame.io for review. Note

To create a separate review link for a new version, select the icon beside the active sequence name, then choose Create new link.

## Import comments as markers

### Import reviewer comments as timeline markers in Frame.io so feedback points map to specific video moments.

Note

This article covers resources for Premiere's Review with Frame.io (Legacy) panel. If you use Frame.io Version 4 (V4), note the following:

- Frame.io V4 accounts are not compatible with this panel.
- For the new Frame.io V4 panel in Premiere 25.6 or later, open Window > Frame.io > Frame.io V4. More information is available in this support article.
- In Premiere v25.6 and later, users who need the Frame.io (Legacy) panel can find the extension at Window > Frame.io > Frame.io (Legacy).

To open the player from the Frame.io panel, double-click a clip. Existing review comments for that clip appear below the play bar.

Select a comment to move to the video frame where that comment was added.

Link Playheads shows reviewers' comments inside the Frame.io panel.

Link Playheads shows reviewers' comments inside the Frame.io panel. Note

For a commented video frame, use Show comments in the Frame.io panel, or use Link Playheads below the player.

A purple badge on a clip shows that the clip is linked to your sequence.

In the Frame.io panel, a purple badge on the clip indicates that it is linked to the sequence.

In the Frame.io panel, a purple badge on the clip indicates that it is linked to the sequence.

After linking the sequences, choose Show comments > Download comments > Import Comments.

The purple badge below the clip thumbnail marks it as linked to the sequence.

The purple badge below the clip thumbnail marks it as linked to the sequence.

After import, timeline markers display the comments, collaborators, and comment times.

## Integrate Adobe Workfront with Frame.io

### Connect Workfront, Frame.io, and Adobe Premiere to streamline production, coordinate team workflows, and simplify reviews and approvals.

Video production requires project management activity to stay aligned with reviews, edits, and approvals. By integrating Adobe Workfront with Adobe Frame.io, teams can combine those processes. Creative teams can send video sequences from Adobe Premiere directly to Frame.io to collect feedback and content approvals, while marketing teams use Workfront to monitor production progress separately.

Workfront and Frame.io together make cross-team activity more aligned and video production simpler.

See additional guidance on accelerating video production reviews by integrating Adobe Workfront and Frame.io.

## About cloud rendering

### Understand Adobe Premiere cloud rendering, where rendering is offloaded to the cloud so multiple sequences can process without interrupting editing.

Premiere cloud rendering sends project sequence renders to the cloud. The feature moves render processing away from local resources, which can speed rendering and allow multiple render jobs to run at the same time. Because those render tasks process in the cloud, editing can continue while they run, helping you finish more work without reducing output quality.

## Cloud rendering with Frame.io

### Prepare Adobe Premiere project media in Frame.io for cloud rendering so assets upload properly and workflows stay uninterrupted.

Before you begin:

Store the media assets in Frame.io; before creating the sequence, bring the needed assets into the Project panel from Adobe Premiere's Frame.io panel.

Choose one of these methods for uploading assets:

- Upload by using Frame.io Camera to Cloud.
- Send the assets with the Frame.io Transfer app.
- Upload the files through the Frame.io website.

From Adobe Premiere, another route is Windows > Frame.io > Frame.io (Legacy), followed by Upload > Files in the Frame.io panel.

## Cloud rendering in Premiere FAQ

### Find answers about Adobe Premiere cloud rendering, supported assets, media behavior, and workflow limits.

If the project includes locally stored assets:

- Fix the errors and come back
- Ignore and continue

- Choosing Ignore and continue with cloud rendering shows a missing-media screen in the rendered output where that local asset would be.

Sequences of any duration or size are supported by cloud rendering when they include:

- All fonts, including custom fonts used by project components, such as text graphics inside MOGRTs and captions.
- MOGRTs, both built-in and custom.
- Video or audio effects and transitions supplied with Premiere.
- LUTs from the Lumetri panel, built-in LUTs, or LUTs applied through the Interpret Footage method.

If the sequence uses a non-Adobe font, custom MOGRT, or any effects or transitions from a third-party sequence (any non-media asset):

- Fix the errors and come back
- Ignore and continue

- If you choose Ignore and continue for the cloud rendering service, the output will not include the font, MOGRT, effects, or transitions from the third-party plug-in. When the service cannot interpret a non-Adobe font, it renders that text with the Lucida Grande font.

Rendered output can be saved to a project-level or folder-level location on Frame.io.

Open the Export tab and choose Frame.io as the destination.

In the Publish section, choose Select Frame.io Location from the Frame.io location dropdown list.

Choose any project-level or folder-level location.

You can choose any project folder as the Frame.io output location.

Frame.io output may be directed to any folder in the project.

No. Media size is not limited. Cloud rendering is intended to support every type of Premiere-supported video output, from short promos and social media posts through long-form videos.

Cloud rendering works with both Premiere projects and Team Projects.

Some listed items are not currently relevant to the cloud rendering workflow, and some others are not currently supported for cloud rendering.

The file version imported from the Frame.io panel into the project, original or proxy, is the version used for cloud rendering during export. The result should therefore match local rendering and the cloud-rendered output.

Cloud rendering does not currently support ProRes-RAW or HEIF/HEIC formats. Other formats supported by Premiere should work correctly. If a supported format does not produce the expected output, report the issue.

To open the Adobe Fonts page, use the Creative Cloud icon next to Add Adobe Fonts in the Essential Graphics panel.

Add a new font family with Add Adobe Fonts.

Select Add Adobe Fonts when another font family is needed.

Browse, then use Add Family for the font families you want to add.

In the Creative Cloud desktop app, go to Resource Link and select Manage Fonts.

Manage Fonts is available in the Adobe Creative Cloud desktop app.

The Adobe Creative Cloud desktop app includes a Manage Fonts option.

Use Install family to install the font families that were recently added.

The fonts just installed appear in the fonts drop-down list under the Text section.

Premiere filters the font menu to Adobe Fonts when Show fonts from Adobe is enabled at the upper-left corner of the font drop-down list.

Enable Show fonts from Adobe to filter the list to Adobe Fonts.

Use Show fonts from Adobe when the menu should display only Adobe Fonts.

Follow the cloud rendering setup instructions. At the Unlock Feature dialog, enter the feature unlock code, then select Disable.

For more help with Premiere, visit the Premiere community forums to connect with other users and Adobe experts.

## Set up cloud rendering

Enable the cloud rendering feature in Adobe Premiere so the project is ready for render tasks handled in the cloud.

Before you begin:

Use the Adobe Creative Cloud FAQ page to learn how beta apps are installed and to find other beta-related answers.

From Creative Cloud, launch the latest Premiere (Beta).

Create a new Adobe Premiere project or Team Projects, or open an existing one.

While holding the Shift key, choose the What's new in Betaicon in the app's upper-right corner.

Use the Unlock Feature dialog box to supply the feature unlock code (for example, CloudRendering), then select Enable. Premiere Pro restarts automatically, which enables the feature and activates cloud rendering in the build.
