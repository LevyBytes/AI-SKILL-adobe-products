# Share Documents, Manage Comment Preferences, Review Documents

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Share and review documents; Share links to PDFs; Manage access to the shared file; Share PDFs via email; About reviewing on internal servers; Send PDFs for review via internal servers; Enable commenting for Reader users in Acrobat Pro; Change author name on comments; Set comment properties; Set or change text box properties; Insert text; Replace text; Add attachments as comments; Add comments in callouts; Add comments to selected text or images; Add markups; Change markup colors; Add comments using sticky notes or chat bubbles.

## Share and review documents

### Share documents

Share links to PDFs

Manage access to the shared file

Share PDFs via email

About reviewing on internal servers

Send PDFs for review via internal servers

Enable commenting for Reader users in Acrobat Pro

### Manage comment preferences

Change author name on comments

Set comment properties

Set or change text box properties

### Review documents

Insert text

Replace text

Add attachments as comments

Add comments in callouts

Add comments to selected text or images

Add markups

Change markup colors

Add comments using sticky notes or chat bubbles

Add comments in text boxes

Add comments to videos in Acrobat Pro

Add shapes, lines, and freeform drawings

Delete comments

Edit comments

Group and ungroup comments

Join PDF reviews

### Use stamps

Add or modify stamps

Create custom stamps

Create custom dynamic stamps

Delete custom stamps and categories

Update digital stamp identities

### Manage reviews

View comments

Add reactions to comments

Reply to comments

Mark comments as unread or resolved

Find comments

Check for new comments

Unlock comments

Spell-check comments

Publish comments from other reviewers

Manage shared files

Track shared PDF reviews

## Share links to PDFs

### Generate and pass along PDF links in Acrobat while staying in charge of the access settings.

A link to a PDF can go out to others so they can read it or weigh in with comments. The shared file opens on whatever device they're using and stays safe in Adobe cloud storage. An email reaches each recipient carrying a link that lets them view and comment on the document right in a browser, no sign-in needed.

Take legal teams, for instance: they can hand off contracts, NDAs, and compliance documents securely. The links you share carry access controls such as passwords, and they let recipients review, comment, and sign straight inside the PDF. Whoever sent the file can watch views and activity, which smooths collaboration and keeps documents secure across reports, proposals, or manager approvals.

Pass your PDFs along by spinning up a link others can follow to reach the file. You can also dictate exactly who is allowed to view or comment on your documents.

Open a PDF and select Share in the global bar.

In the dialog box that opens, select Link Setting and then choose one of the following share settings:

- Anyone on the internet with the link: Whoever has the link can reach the file.
- Anyone in <your-organization> with the link: Reach to the PDF is held to staff inside your company. Enterprise accounts get this one by default.
- Invited people only: The file stays reachable only by users who were invited.

Keep things private and locked down by inviting only the specific people you choose.

Keep things private and locked down by inviting only the specific people you choose. Note

For a view-only PDF, switch off the People can comment on this file toggle.

Select Apply or Next as applicable.

Select the appropriate option to share the PDF:

- Invite people: Enter the recipient's name or email and select Invite. You can also add a message and a deadline.
- Share via third-party apps: Select any third-party app, such as Outlook, Gmail, Teams, or WhatsApp, and follow the onscreen instructions.
- Create a link to share: Select Create a link to share and share the copied link with recipients.
- Send via email: Select Send a link or attach this file to an email and follow the onscreen instructions.

Each recipient gets a link to the shared document and can open it in a browser to read and comment. As reviewers leave comments on the PDF, a notification reaches you in Acrobat. Select the notification message. Acrobat opens the review PDF.

Keeping an eye on the files you've shared and received makes access and collaboration simple to manage. Here's how to track and handle PDF reviews.

## Manage access to the shared file

### Handle the access requests that come in for your shared PDFs, right within Acrobat on desktop.

When you own a shared PDF, Acrobat lets you know two ways — by email and through an in-app notification — the moment someone asks for access to it.

Select the email or the Acrobat notification.

You can manage access to the shared file from the Email or In-app notification.

You can manage access to the shared file from the Email or In-app notification.

Select Manage Access in the email received or the app notification.

Select Accept or Decline to respond to the access request.

## Share PDFs via email

### A fast way to hand off PDF files to other people through email from desktop Acrobat.

The simplest route is to have Acrobat build a protected link and drop it straight into a fresh email draft for you. Kick off review mode and ping collaborators by dropping an @mention into a comment. Confirm the file's review settings are right before you pass it along.

Launch a PDF, then click Share over in the top-right.

From the Share dialog box, pick Share link via email.

From the dropdown, choose which mail service you'd like to use — that could be the email program set as your default or a webmail provider instead.

Note

When more than one mail app is present on the machine, designate the one you want inside your system settings, and Acrobat needs a restart afterward for that choice to take effect.

Flip on the Send as link toggle so the PDF goes out as a link.

Note

Want others to mark up the file together? Switch on the People can comment on this file toggle.

Click Next, and a draft email carrying the PDF link opens up.

Fill in the recipient's email address, jot down a note, and click Send.

## About reviewing on internal servers

### How to circulate PDFs for review through the internal servers your organization runs, using desktop Acrobat.

A shared internal server is a handy channel for routing PDFs out to reviewers whenever your group operates behind a firewall and everyone connects to one common box. Going this route keeps the review file reachable and protected for every person on the list.

### Supported internal server locations include:

- Network folders: When every reviewer sits on the same local area network, lean toward network folders and SharePoint servers as your comment server. Of the options, network folders tend to be the least expensive and the most dependable.
- Microsoft SharePoint workspace (Windows only): A private server spot of your own — say a Microsoft SharePoint site — works when the people reviewing are all behind a firewall and tied into one shared server. Additional details live under Hosting shared reviews on SharePoint.
- Web server folders (Not available for form distribution): Reach for WebDAV servers — web servers running the WebDAV protocol — chiefly in cases where reviewers fall outside a firewall or local area network. Steps for pointing Acrobat at a WebDAV service appear in Hosting a Shared Review: An Alternative to Acrobat.com.

Once comments are published, Acrobat pushes them up to the internal server so the whole review group can work together without friction.

### Internal server set up for PDF review

For internal-server reviews, settle on a single spot every recipient can open. Any of three will serve: a network folder, the SharePoint workspace option (Windows only), or alternatively a web server folder. Reviewers then collaborate without fuss, whether they open a shared link or get the PDF dropped into their inbox as an attachment.

During setup, Acrobat asks you to stash a profile holding the server location you picked plus your distribution choices. Keeping that profile around streamlines the next round, sparing you from dialing in the same settings over and over.

## Send PDFs for review via internal servers

### How to circulate PDFs for review through the internal servers your organization runs, using desktop Acrobat.

Spinning up a shared review off an internal server takes little effort. The approach pays off for groups that have to keep confidential files inside their firewall, and for teams that lean on one shared server to mark up PDFs day in and day out. For hosting, you can hand the job to Acrobat — letting it build and wire up a document library inside your SharePoint subsite — or point it at a subsite and library you already maintain.

Before you begin

The legacy file-sharing experience has to be switched on first. Open the Preferences dialog box, click Reviewing, clear the Share for review using Adobe's cloud storage option, and click OK.

Launch the PDF and pick All tools > Send for comments > Send for shared commenting.

When the dialog box appears, choose how you'd like comments gathered from the dropdown menu, then click Next.

Depending on your setup, pick one of these server options:

- Network folder
- SharePoint subsite
- Web server folder

Note

Confirm that every reviewer can reach the shared network folder, SharePoint workspace, or web server folder, and that read and write permissions are granted to them on it.

Into the Type the URL… field, key in the URL of the server site you chose and click Next.

Pick the network folder, SharePoint subsite, or web server folder that will host the shared review file. Access gets checked by Acrobat, which then builds a document library for the shared reviews.

Pick the network folder, SharePoint subsite, or web server folder that will host the shared review file. Access gets checked by Acrobat, which then builds a document library for the shared reviews. Note

To get the shared review going, Acrobat stands up a document library (AcrobatSharedReviews) inside your subsite. Prefer a library that already exists? Click Choose subsite.

When the dialog box asks whether to trust the location, click Yes.

Choose how the file gets distributed and how it should look on arrival, then click Next.

To hang on to this shared review profile down the road, give it a name and click Next.

## Enable commenting for Reader users in Acrobat Pro

### How to switch on commenting rights inside a PDF so Reader users gain access to the commenting tools.

Anyone running Reader 8 or a newer build can leave comments and join reviews once a PDF has commenting rights switched on. Inside Reader, the document message bar and the commenting tools surface only after those rights are present.

Starting a managed review flips commenting rights on by itself. When a PDF travels outside a managed review — over email, for instance — you can grant those rights by hand.

Launch the PDF whose commenting rights you'd like to switch on.

Note

Turning on Reader commenting in a document that's been digitally signed will void the signature.

Pick Menu > Save as other > Reader extended PDF > Enable Commenting & Measuring.

When the dialog box appears, click OK.

## Change author name on comments

### How to make a name other than your own show up as the comment author in Adobe Acrobat.

### Windows

Pick Menu > Preferences.

Click Commenting, clear the Always use Log-in Name for Author name option, and click OK.

Over in the right panel, click Comment.

Find the comment whose author name you want to change, right-click it, and choose Properties.

Inside the Comment properties dialog box, click General and type a new value into the Author field.

Want that author name to carry over going forward? Tick the Make Properties Default option.

Click OK.

### macOS

Pick Acrobat > Preferences.

Click Commenting, clear the Always use Log-in Name for Author name option, and click OK.

Over in the right panel, click Comment.

Find the comment whose author name you want to change, right-click it, and choose Properties.

Inside the Comment properties dialog box, click General and type a new value into the Author field.

Want that author name to carry over going forward? Tick the Make Properties Default option.

Click OK.

## Set comment properties

### How to dial in a comment's color, look, and other properties in Adobe Acrobat.

Launch a PDF and click Comments over in the right panel.

Right-click whichever comment you mean and choose Properties.

When the dialog box appears, tweak whichever of these you need:

- General: Edit the comment's author name and its subject.
- Appearance: Tune settings like color, opacity, and the icon style on note comments. Which settings show up varies with the comment type.
- Review History: Look back at how the comment's status shifted over the course of a review.
- Locked: Keep the comment from being changed or removed.
- Make Properties Default: Carry these same properties forward to every later comment of the same type.

Click OK.

### Set the default look for a tool

Right-click the comment and choose Properties.

Dial in whatever you'd like under the Appearance tab.

Lock that look in as the default by clicking Make Current Properties Default.

Click OK.

## Set or change text box properties

### How to fine-tune the look and layout of comment text boxes in Adobe Acrobat

Grab the Select text tool off the Quick action toolbar and double-click the text box comment.

To adjust the text's color, alignment, and font styling, click Set or change properties for the selected text.

Draping over the words or a stretch of the page, text boxes make your comment stand out and easier to spot.

Draping over the words or a stretch of the page, text boxes make your comment stand out and easier to spot.

Need a different size? Grab the Select text tool and drag one edge of the text box in or out.

When you want a text box gone, select it and press Delete.

## Insert text

### How to drop text notes into your PDFs without touching the underlying content, using Adobe Acrobat.

From the Quick action toolbar, click Add a comment, then click Insert text.

In the pop-up box, key in whatever text you'd like to add.

Click Post.

## Replace text

### How to float replacement-text suggestions by leaving comments in Adobe Acrobat.

From the Quick action toolbar, click Add a comment.

To float a text swap, head to Add a comment and click Replace selected text.

To float a text swap, head to Add a comment and click Replace selected text.

Click Replace selected text.

Highlight whatever text you'd like swapped. A strikethrough lands on the chosen text and a pop-up box opens.

Into the pop-up box, key in the replacement wording.

Click Post.

## Add attachments as comments

### How to attach files, pictures, or audio clips to your comments so the PDF carries extra context, using Adobe Acrobat.

From the Quick action toolbar, click Add a comment, then pick Attach file off the menu.

Click the spot where the attachment should sit.

Pick the file you'd like to attach. On the PDF, the comment turns up marked with an attachment icon.

To get rid of the attachment, right-click it and choose Delete.

## Add comments in callouts

### How to drop callout comments with Adobe Acrobat so a particular spot or feature in your PDF stands out.

From the Quick action toolbar, click Draw freehand , then pick Text callout.

Click once to drop the endpoint, then click a second time to drop the text box.

Three pieces make up a callout text box: the text box itself, a knee line, and an end-point line.

Three pieces make up a callout text box: the text box itself, a knee line, and an end-point line.

Want to change the color and look? Click Set or change properties for the selected text on the Quick action toolbar and dial in the settings you like.

Key your comment into the text box. Once the words hit the box's edge, they wrap on their own.

Click any spot in the document to lay down the callout.

When the text box needs resizing, go with whichever of these fits:

- Resize a callout by selecting it, then dragging whichever handles pop up.
- Reposition the text box by clicking inside it and dragging it where you want.
- Shift the whole callout by holding on the endpoint until the cursor shifts, then dragging it into place.

To get rid of the callout, right-click it and choose Delete.

## Add comments to selected text or images

### How to attach comments to text or images you've picked out in the document, using Adobe Acrobat.

With the Select text tool on the Quick action toolbar, pick the text or the image.

A range of tools for editing the chosen PDF text sits on the floating toolbar.

A range of tools for editing the chosen PDF text sits on the floating toolbar.

On the floating toolbar, click Add a comment.

Key in your comment and click Post.

## Add markups

### How to mark up, highlight, and sketch on your PDFs with the markup tools in Adobe Acrobat.

On the Global bar, click Edit.

Pick the text with the Select text tool from the Quick action toolbar.

Off the markup toolbar, go with whichever of these you need:

- Highlight a stretch of text by clicking Highlight text
- Put a line through text by clicking Strikethrough text
- Underscore text by clicking Underline text
- Black out text by clicking Redact text
- Duplicate the text by clicking Copy Text
- Rework the chosen text by clicking Edit a PDF

Click outside the textbox to lock in the changes.

## Change markup colors

### How to set your own colors for highlight, underline, and strikethrough inside Adobe Acrobat.

With the Select text tool from the Quick action toolbar, pick the highlight.

On the floating bar, click the Choose a color for highlight icon.

Pick whichever color you want, and the markup takes on that color.

## Add comments using sticky notes or chat bubbles

### How to leave comments through sticky notes or chat bubbles on PDF documents, using Adobe Acrobat.

Off the Quick action toolbar, pick the Add a comment tool.

Click the spot in the document where the note should go.

Key your comment into the pop-up note that shows up.

Click Post.

## Add comments in text boxes

### How to drop text-box annotations onto PDF documents with Adobe Acrobat.

From the Quick action toolbar, click Add a comment, then pick Add text comment.

Drag out a rectangle wherever the text box should land on the page.

Key your comment into the text box. The moment the words reach the box's right edge, they wrap on their own.

Click outside the box to lock in the comment.

When you want the text box gone, select it and press Delete.

## Add comments to videos in Acrobat Pro

### Annotating video clips embedded in PDFs with Adobe Acrobat.

From the Quick action toolbar, choose Add a comment.

Start playback, then pause on the exact frame you want to annotate.

Click the paused frame to attach your note there.

Enter your remark in the pop-up note, then choose Post.

## Add shapes, lines, and freeform drawings

### Drawing markup in PDFs with Adobe Acrobat is a handy way to call attention to key details.

From the Quick action toolbar, pick the Draw freehand tool.

Depending on the markup you need, choose from these tools:

- For basic geometry, reach for the Line, Arrow, Rectangle, or Circle tool.
- When you need an enclosed multi-segment outline, go with the Cloud or Polygon tool.
- For an open path made of several segments, use the Connected lines tool.
- Sketching by hand is done with the Draw tool.
- Clearing away drawn markup is handled by Erase a drawing.

Reshaping or resizing is done by selecting the markup and pulling on one of its corner handles.

Attaching a note works like this: select the markup, then choose Add a comment from the Quick action toolbar.

Removing a drawn markup is a matter of selecting it and pressing Delete.

## Delete comments

### Clearing annotations out of your PDFs in Adobe Acrobat.

Start by opening the PDF whose comments you intend to clear.

From the right panel, choose Comment.

Within the Comments pane, pick the comment you intend to remove.

On that comment, choose Options, followed by Delete.

## Edit comments

### Adjusting comments that already exist in your PDFs through Adobe Acrobat.

From the right panel, choose Comment.

Within the Comments pane, pick the comment you'd like to change.

On that comment, choose Options, then Edit.

Revise the wording however you need.

Choose Post.

## Group and ungroup comments

### Keeping feedback tidy by bundling related comments together in your PDFs through Adobe Acrobat.

Bundling several comments lets you keep them together as a set or shift them all at once. It comes in handy when you're gathering related notes or wrangling input from a mix of reviewers.

Start by opening the PDF that holds the comments.

Hold Ctrl + click (Windows) or Command + click (macOS) to pick out the comments you'd like to bundle.

Within the highlighted set, right-click to apply the change you need:

- Bundling them together is done with Group.
- Splitting them back apart is done with Ungroup.

Note

Text edit markups can't be bundled this way.

## Join PDF reviews

### Taking part in PDF reviews through Adobe Acrobat.

### Join a review

Find the review invitation that landed in your email and open it.

Click the email's link, which opens the PDF inside your web browser.

Choose Options > Open in desktop app.

On your desktop, go over the shared file in Acrobat or Acrobat Reader.

On your desktop, go over the shared file in Acrobat or Acrobat Reader.

Should a prompt appear, choose Open Adobe Acrobat so the desktop app starts up.

Mark up the document with the commenting tools found on the Quick action toolbar.

Fresh comments show up when you choose Comment from the right panel.

### Rejoin a review

Choose Menu > View > Tracker (Windows) or View > Tracker (macOS).

Locate the PDF you want to return to for review and double-click it.

Mark up the document with the commenting tools found on the Quick action toolbar.
