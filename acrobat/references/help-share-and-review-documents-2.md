# Use Stamps, Manage Reviews

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add or modify stamps; Create custom stamps; Create custom dynamic stamps; Delete custom stamps and categories; Update digital stamp identities; View comments; Add reactions to comments; Reply to comments; Mark comments as unread or resolved; Find comments; Check for new comments; Unlock comments; Spell-check comments; Publish comments from other reviewers; Manage shared files; Track shared PDF reviews.

## Add or modify stamps

### Working with stamps in Adobe Acrobat — applying, tailoring, and organizing them to signal document status and convey important details to signers and reviewers.

Choose All tools > View more > Add a stamp.

Choose Stamp, then pick a stamp from one of the listed categories.

Drop the stamp by clicking wherever you want it on the document.

Stamp your PDF to mark approvals, reviews, or signatures.

Stamp your PDF to mark approvals, reviews, or signatures.

Make sure Select is active on the Quick action toolbar, then adjust the stamp however you need.

- Move: Pull the stamp over to wherever you want it.
- Resize: With the stamp selected, tug one of its corner handles.
- Rotate: Select the stamp, float the pointer above the center handle, and drag once the rotate icon shows up.
- Delete: Bring up the stamp's right-click menu and choose Delete.
- Change opacity: Right-click the stamp, choose Properties, and dial in a value for Opacity on the Appearance tab.
- Change color: Right-click the stamp, choose Properties, and pick the color you want on the Appearance tab.
- Add to favorites: Highlight the stamp, then choose Stamp > Add Current Stamp To Favorites.

## Create custom stamps

### Building your own stamps from images in Adobe Acrobat.

Acrobat lets you build custom stamps from a range of image types, including PDF, JPEG, PSD, AI, and DWG. Over in Acrobat Reader, custom stamps can only be built from PDF files.

Choose All tools > Add a stamp.

From the left pane, choose Custom stamps > Create.

Choose Browse, pick the file you'd like to turn into a stamp, then choose Open.

Note

A preview of the chosen file appears. When a PDF spans several pages, scroll to the one you want as the stamp and choose OK.

Within the Create Custom Stamp dialog box, pick an existing category from the dropdown or type out a new one, then give your stamp a name in the Name field.

Build a custom stamp by picking an image, giving the stamp a name, and selecting or creating a category in the Create Custom Stamp dialog.

Build a custom stamp by picking an image, giving the stamp a name, and selecting or creating a category in the Create Custom Stamp dialog.

Choose OK.

## Create custom dynamic stamps

### Building custom dynamic stamps that refresh on their own with details such as date, time, and user info in Adobe Acrobat. Stamping documents with live data every time helps keep your workflow accurate and efficient.

Before you begin

Settle on the image for your stamp — whether you create it or already have it — and store it in a supported format like PDF, JPEG, or PNG. A logo, signature, or other graphic all work well.

### Windows

Off the All tools menu, choose Add a stamp > Custom stamps > Create.

When the dialog box appears, choose Browse to track down the image file, then choose Open.

After the image finishes loading, choose OK.

Within the Create Custom Stamp dialog box, set the Category field to Dynamic, type a name for the stamp, then choose OK.

Head to the directory below and open the PDF stamp file you just created:

C:\Users<username>\AppData\Roaming\Adobe\Acrobat\DC\Stamps

Choose All tools > Prepare a form > Create form.

Choose Text field, drop it onto the stamp, switch over to the Select tool, then double-click that text field.

Within the Text Field Properties dialog box, choose Calculate > Custom calculation script, then choose Edit.

The custom calculation script option in the Text Field Properties panel lets you wire dynamic behaviour into form fields with JavaScript.

The custom calculation script option in the Text Field Properties panel lets you wire dynamic behaviour into form fields with JavaScript.

Inside the JavaScript Editor, enter the script below and choose OK: event.value = util.printd("h:MM tt, mmm dd yyyy", new Date)

Choose Close on the Text Field Properties dialog box and save the stamp file you edited.

Open whichever PDF you want to stamp and head to All tools > Add a stamp > Custom stamps.

Pick your dynamic stamp and click the spot in the document where it should go.

The stamp you set up shows up on its own.

### macOS

Off the All tools menu, choose Add a stamp > Custom stamps > Create.

When the dialog box appears, choose Browse to track down the image file, then choose Open.

After the image finishes loading, choose OK.

Within the Create Custom Stamp dialog box, set the Category field to Dynamic, type a name for the stamp, then choose OK.

Head to the directory below and open the PDF stamp file you just created:

/Users/<username>/Library/Application Support/Adobe/Acrobat/DC/Stamps

Choose All tools > Prepare a form > Create form.

Choose Text field, drop it onto the stamp, switch over to the Select tool, then double-click that text field.

Within the Text Field Properties dialog box, choose Calculate > Custom calculation script, then choose Edit.

The custom calculation script option in the Text Field Properties panel lets you wire dynamic behaviour into form fields with JavaScript.

The custom calculation script option in the Text Field Properties panel lets you wire dynamic behaviour into form fields with JavaScript.

Inside the JavaScript Editor, enter the script below and choose OK: event.value = util.printd("h:MM tt, mmm dd yyyy", new Date)

Choose Close on the Text Field Properties dialog box and save the stamp file you edited.

Open whichever PDF you want to stamp and head to All tools > Add a stamp > Custom stamps.

Pick your dynamic stamp and click the spot in the document where it should go.

The stamp you set up shows up on its own.

## Delete custom stamps and categories

### Removing custom stamps along with their categories in Adobe Acrobat.

Choose All tools > View more > Add a stamp.

From the left pane, choose Custom stamps > Manage.

Pick the custom stamp or category you'd like gone, then choose Delete.

Note

Removing a stamp takes it out of the menu, yet your files stay untouched. Clearing every stamp inside a category wipes out the category along with them.

Choose OK.

## Update digital stamp identities

### Adding to or revising the details tied to digital stamp identities in Adobe Acrobat.

A digital stamp carries details such as your name, title, email, and organization. Editing the digital stamp identities lets you refresh those details or give your stamps a personal touch.

Choose All tools > View more > Add a stamp > Stamps palette.

Pick the category holding the stamp you want to revise, right-click that stamp, then choose Edit Identity.

Reach for the Edit Identity option to set up or fine-tune a stamp's credentials.

Reach for the Edit Identity option to set up or fine-tune a stamp's credentials.

Within the Identity Setup dialog box, complete the Name, Title, Company, Department, and Email Address fields.

Choose Complete.

## View comments

### Browsing and narrowing down comments while reviewing PDFs in Adobe Acrobat.

Open a document from the home view and the Comments list shows up along the right side of the document window. Every comment in the PDF is listed there, alongside a toolbar offering sorting, filtering, and other ways to work through your comments.

From the right panel, choose Comments.

Off the Options menu of the Comments panel, pick whichever of these you need:

- Showing or hiding every comment is done with Expand All or Collapse All in the Comments list options menu.
- A printed rundown of the comments comes from Print with Comment Summary.
- Building a rundown of the comments is done with Create Comment Summary
- Sending the data out to a given file type is handled by Export All To Data File
- Sending out only certain data is handled by Export Selected To Data File
- Pushing the summary into a Word document is done with Export to Word.
- Specify Commenting Preferences.
- Ordering comments by page, author, date, type, unread status, or color is done with Sort comments.

Narrowing your comments starts by choosing Filter comments from the Comments pane, then picking any of these:

- Wiping out every filter is done with Clear all. The shortcut Ctrl + 8 (Windows) or Command + 8 (Mac OS) does the same.
- Flip the toggle switch to reveal or hide all comments. The shortcut Ctrl + Shift + 8 (Windows) or Command + Shift + 8 (Mac OS) does the same.
- Narrowing comments down by kind, like sticky note or highlight, is done by choosing Sticky Note or Highlight from the Type drop-down menu.
- Narrowing comments down by state, like read or unread, is done by choosing Read or Unread from the Status drop-down menu.
- Expanding every pop-up note is done by right-clicking an annotation and choosing Open all Pop-Ups.
- Collapsing every pop-up note is done by right-clicking an annotation and choosing Minimize Pop-Ups.

Tip

Need the Comments pane wider or narrower? Line your cursor up with the pane's left edge, then press and drag it left or right.

## Add reactions to comments

### Reacting to comments with emojis in Acrobat.

On shared PDFs in Acrobat, tacking reaction emojis onto comments makes your reviews livelier and more engaging.

Pull up the shared PDF, then choose Comment from the right panel.

Pick the comment you'd like to react to.

Pull an emoticon from the dialog box, or type into the search bar to track down the reaction you want.

Reacting to a comment means choosing the emoticon sitting beneath it.

Reacting to a comment means choosing the emoticon sitting beneath it.

## Reply to comments

### Responding to comments inside PDFs with Adobe Acrobat.

From the right panel, choose Comment.

Beneath the comment you'd like to answer, choose Reply.

Enter your response in the text box.

Mention a reviewer by typing @ followed by that reviwer's name in the reply field.

Mention a reviewer by typing @ followed by that reviwer's name in the reply field.

Choose Post.

Removing a reply is done by opening the Options menu on the replied comment and choosing Delete.

## Mark comments as unread or resolved

### Handling the status of comments in Adobe Acrobat by tagging them read or unread.

Tracking comment status helps you stay on top of what you've gone through, settled, or still need to act on. Setting a review status signals to the other participants how you plan to deal with each comment.

Start by opening the PDF that holds the comments.

From the right panel, choose Comment.

Pick a comment, then go with whichever of these fits:

- Settling a comment is done by clicking the tick mark on it.
- Tagging a comment unread is done by opening the Options menu and choosing Mark as Unread.
- Flagging a comment with a check mark is done by opening the Options menu and choosing Add Checkmark

## Find comments

### Tracking down comments by a specific word or phrase inside PDFs with Adobe Acrobat.

From the right panel, choose Comments.

Within the Comments pane, choose Search comments

Type the word or phrase you're after into the Search comments field. The Comments pane then shows the matching comments, with the count displayed up in the panel header.

## Check for new comments

### How to look for fresh comments inside documents with Acrobat.

During a shared review, any comments you publish to your local drive get reconciled by Adobe Acrobat against the copies held on the server. Whenever fresh comments arrive, Acrobat lets you know.

Begin by opening the file whose comments you'd like to review.

From the panel on the right, choose Edit, delete, or reply to comments.

Within the Comments pane, choose Filter comments, then pick whichever option surfaces the newly added comments.

## Unlock comments

### Steps for unlocking comments with Adobe Acrobat.

From the panel on the right, choose Comments.

On the comment you'd like to free up, right-click it and choose Properties.

Clear the Locked checkbox.

## Spell-check comments

### How to run a spelling check over comments in a PDF with Adobe Acrobat.

From the panel on the right, choose Comments.

Pick the comment you'd like to verify, choose Options, then choose Edit.

Highlight and right-click the text of the comment, after which you choose Check Spelling.

Choose Start.

Pick one of the proposed fixes, then choose Change.

Where a word is misspelled, Acrobat lists candidate replacements beneath Suggestions; a correctly spelled word instead shows <No Misspellings>.

Where a word is misspelled, Acrobat lists candidate replacements beneath Suggestions; a correctly spelled word instead shows <No Misspellings>.

Choose Done.

## Publish comments from other reviewers

### How to publish comments while running a shared review with Adobe Acrobat.

Reviews let other participants send their feedback back to you. A reviewer can hand back their own copy of the PDF carrying their comments, and you're able to take ownership of those comments so the rest of the review group can see them.

From the panel on the right, choose Comments.

Pick the comment you'd like to publish and choose OKAY. Once you take it on, the commenter shown becomes your name, while the reviewer's name gets appended inside the comment box, prefixed by On behalf of.

If you'd rather merge the comment, choose Yes, or use Merge Comments in the document message bar.

Note

Hiding the On behalf of text is done by going to Menu > Preferences > Reviewing (Windows) or Acrobat > Preferences > Reviewing (macOS) and turning off Show “On Behalf of” text in comment when user takes ownership of comments in a shared review.

## Manage shared files

### How to handle shared files inside Adobe Acrobat.

Both the files you've sent to other people and the ones others have sent your way can be administered straight from Acrobat. Pulling back access, ending a share, or flagging a problem with a shared file are all handled in one place. These controls keep your shared documents in check and help your team or organization collaborate safely.

### Manage files shared by you

Launch Acrobat and, in the Home view, choose Shared by You beneath Files.

Pick whichever file you'd like to administer. This brings up a pane on the left.

Within that left pane, pick any of these to act on the file:

- Copy shared link: Grabs the file's shareable link.
- Unshare file: Strips away every bit of shared access to the file.
- Delete: Wipes the file out of your Adobe cloud storage for good.

When asked, confirm what you've chosen.

### Manage files shared by others

OpenAcrobat and, in the Home view, choose Shared by others beneath Files.

Pick whichever file you'd like to administer. This brings up a pane on the left.

Within that left pane, pick any of these to act on the file:

- Copy shared link: Grabs the file's current shareable link.
- Remove me: Takes away your own access to the shared file.
- Report abuse: Flags any unsuitable content or misuse of the file.

When asked, confirm what you've chosen.

## Track shared PDF reviews

### How to keep an eye on shared PDF reviews with Adobe Acrobat.

Choose Home .

Beneath Adobe cloud storage, go with one of these:

- Select Shared by you to see the files you sent out for review.
- Select Shared by others to see the files that came to you for review.

A column sitting beside each file name indicates whether that file is shared or restricted to you alone.

A column sitting beside each file name indicates whether that file is shared or restricted to you alone.

Every PDF circulated for review appears together with these details:

- NAME: Gives the name of the PDF circulated for review.
- SHARING: Indicates whether the file is shared or kept private to you.
- OPENED: Gives the timestamp of the most recent action taken on the PDF.

Selecting a PDF brings up its details, and a thumbnail of it appears in the pane on the right.

The arrow key expands the list so you can see review status and who the reviewers are. Whether you started the review or are reviewing it determines which of these you can do:

- Select View Activity to see a detailed log of what's happened on the review file.
- Select Invite Person and type in reviewer names to add reviewers to the PDF, or select Copy Shared Link to pass the link along to recipients over email.
- Select Unshare File to halt sharing of the review.
- Select Delete Shared File to close out the review.
- Select Remove Me to take yourself off the review.
- Select Report Abuse to flag content that's inappropriate or infringing.

Double-clicking the file brings up the comments; the review PDF opens and the comments list shows in the pane on the right.
