# Manage Adobe Cloud Files, Manage Third Party Storage

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Manage cloud storage; Adobe cloud storage data centers; File size storage limitations; Manage files and folders; Migration to Adobe cloud storage; Preview files; Sort and search files; Upload files; View agreements and templates; View files; Access Box storage files; Access Google Drive files; Access OneDrive files.

## Manage cloud storage

### Manage Adobe cloud files

View files

View agreements and templates

Upload files

Manage files and folders

Preview files

Sort and search files

File size storage limitations

Adobe cloud storage data centers

Migration to Adobe cloud storage

### Manage third party storage

Access Box storage files

Access Google Drive files

Access OneDrive files

## Adobe cloud storage data centers

### Find out where Adobe cloud storage lives and which data centers host it.

### Hosting and infrastructure

- Amazon Web Services (AWS) is what powers Adobe cloud storage, running across several active data centers spread over different regions.
- Built for resilience and high availability, each data center can absorb hardware or system failures while barely affecting service.

### Data center locations

Three regions host the data centers for Adobe cloud storage: Japan, EMEA, and North America.

Adobe cloud storage data center locations in the world.

Adobe cloud storage data center locations in the world.

### Document storage and management

- Adobe cloud storage holds your documents securely.
- To deliver the best performance and stay compliant with local data-residency rules, the storage site is chosen by the region you're in. That keeps your information inside your region and in line with what regulators require. So a user based in Japan, for instance, has their documents kept in the Tokyo Adobe cloud storage data center.
- Generative AI use does not place your documents in Microsoft Azure OpenAI.
- Before anything reaches Microsoft Azure OpenAI for processing, content pulled from your documents is broken apart and encrypted. So that responses come back quickly, that encrypted data sits briefly in Adobe Cloud Storage for as long as 12 hours.
- Working on your input as it arrives, the generative AI tools hold none of your document content once the session is over.
- Nothing leaves Adobe's secure environment, and your data never feeds the training of AI models.

Based on your region, documents live securely in Adobe cloud storage rather than in Microsoft Azure OpenAI, so your content stays inside Adobe's trusted environment.

Based on your region, documents live securely in Adobe cloud storage rather than in Microsoft Azure OpenAI, so your content stays inside Adobe's trusted environment.

### Migration and account management

- The closest regional data center is assigned automatically to any new enterprise account.
- Should you have an older account, reach out to your account admins to arrange migration.
- Discussions about migrating can also be supported by Customer Success Managers (CSMs).

### Applicability and solutions

- Behind Adobe Document Cloud and Adobe Creative Cloud — Adobe Acrobat and PDF Services in particular — sits Adobe cloud storage.
- Separate data centers run Acrobat Sign; for the details, refer to Acrobat Sign data centers.

### Additional information and support

Reach out to your Adobe Customer Success Manager (CSM) when you need more help.

Have a security question? Head to the Adobe Trust Center or the Adobe Acrobat with Acrobat Services Security Overview.

### More like this

- File size storage limitations
- Manage files and folders
- Migration to Adobe cloud storage
- Preview files

## File size storage limitations

### A primer on Adobe cloud storage plans, the caps on uploads, and how much space you get.

### Storage options

Here is how much room each Adobe cloud storage tier gives you:

- 5 GB free storage
- 100 GB with an Acrobat Pro subscription
- 20 GB with Adobe Acrobat Export PDF subscription
- 20 GB with Adobe Acrobat PDF Pack subscription

### Compress PDF limit

When you compress a PDF, the document can be no larger than 2 GB.

Note

Staying under that 2 GB ceiling does not guarantee a clean conversion — how fast your connection is and how intricate the document gets both play a part. Files that are highly complex might fail to convert.

### Storage quota

Hit the ceiling on your free or paid plan and you can keep browsing, downloading, and opening what is already there; the moment you try to upload, a quota message appears.

A quota message can be set off by any of these:

- Sending documents up to Adobe cloud storage.
- Reaching for the PDF Convert, Combine, or Organize tools inside Adobe cloud storage web or Acrobat Reader.
- Turning PSD, INDD, and AI files into PDFs within Acrobat.
- Turning PDFs around on the Acrobat Reader mobile app.
- Capturing pages with Adobe Scan.

Note

Storage caps leave Adobe Acrobat Sign alone. Going over your quota will not stop you from sending or signing agreements through Acrobat Sign.

### More like this

- Cloud storage data centers
- Manage files and folders
- Migration to Adobe cloud storage
- Preview files

## Manage files and folders

### A walkthrough for handling your files and folders in Adobe cloud storage.

Organizing, opening, renaming, or sharing the contents of Adobe cloud storage is straightforward once you work from Acrobat on the web.

Open the Acrobat on the web homepage and choose Documents > Your documents.

Reaching tools like Rename, Delete, or Move starts with the More menu icon beside the file's row. Which tools show up varies with the file's type and current status.

Reaching tools like Rename, Delete, or Move starts with the More menu icon beside the file's row. Which tools show up varies with the file's type and current status.

Renaming works through More menu > Rename. A dialog box appears — edit the file name there and choose Save.

Pulling down a copy is done through More menu > Download.

Shifting a file into a different folder uses More menu > Move. When the dialog box appears, pick the destination folder and choose Move.

Spinning up a folder begins with Create a folder at the top right. In the dialog box, type a name for it and choose Create.

Removing a file or folder runs through More menu > Delete. Confirm by choosing Delete in the dialog box.

Note

Delete a shared file and it disappears for you and for everyone you handed it to. There is no undo — the removal sticks.

Whatever you change in a file or folder syncs to Adobe cloud storage on its own.

Alert

The free Adobe plans, Adobe cloud storage included, only keep paying off when the account stays in use. Let an account sit idle and its content can be removed. Read up on the Adobe cloud storage retention policy that covers inactive free accounts.

### More like this

- Sort and search files
- Upload files
- View agreements and templates
- View files

## Migration to Adobe cloud storage

### A look at what migrating to Adobe cloud storage gives you and what it changes.

Adobe is moving Document Cloud storage over to Adobe cloud storage — the very platform that backs Adobe Creative Cloud. With it, file storage in Acrobat becomes leaner and more efficient, opening the door to richer collaboration and tight third-party app hooks so PDF services can roll out across an entire enterprise.

Alert

The free Adobe plans, Adobe cloud storage included, only keep paying off when the account stays in use. Let an account sit idle and its content can be removed. Read up on the Adobe cloud storage retention policy that covers inactive free accounts.

### Impact of migration to Adobe cloud storage

- Unified access: When Acrobat users move to Adobe cloud storage, their supported Creative Cloud files turn up in shared storage. The reverse holds too — Creative Cloud users reach Acrobat files through Cloud docs on the desktop and the website.
- File access workflow: Nothing shifts for Recents, Favorites, or Reopen on the last closed page.
- Search functionality: Searching by metadata keywords, shared links, and full text all keeps working as before.
- Storage Limits: Whether you pay or not, your storage cap stays the same.
- Automatic migration: Every asset moves over on its own, and none of it is lost.
- Storage allocation: How much storage you get still tracks your product entitlements.
- Impact on users: New users already have Adobe cloud storage, and existing ones will be moved onto it by Adobe.
- Geographic coverage: This migration reaches users everywhere.

### Network endpoint updates for enterprise admin usage

Running the Document Cloud services on Adobe cloud storage means your network firewall policy has to permit these endpoints:

- https://send-asr.acrobat.com
- https://adobesearch.adobe.io
- https://adobesearch-sec-uss.adobe.io
- https://uss-content-search.adobe.io
- https://dc-api-v2.adobe.io
- https://cloud-asr.acrobat.com
- https://files-asr.acrobat.com
- https://createpdf-asr.acrobat.com
- https://fillsign-asr.acrobat.com
- https://upload2-asr.files.acrobat.com
- https://files-download2-asr.acrocomcontent.com
- https://dc-api.adobecontent.io
- https://dc-api-v2.adobecontent.io

There is more to learn about blocking HTTPS endpoints.

### More like this

- Adobe cloud storage data centers
- File size storage limitations
- Manage files and folders
- Upload files

## Preview files

### A quick guide to glancing at a file and acting on it right away.

In the Recents or Documents list, tick the checkbox for whichever file you want to preview.

Only one file can be previewed at a time.

A preview slides into the right pane — look there for the file type, when it was last modified, and the commands you can run.

Note

Which commands appear hinges on the file type you picked. A PDF, for instance, shows every command but Convert to PDF. With a Word, Excel, or PowerPoint file, an Edit command turns up, letting you work on the Office document right in the browser.

Choosing a file's name or thumbnail opens it in full preview mode.

Full preview mode lays out the file's content alongside every operation you can carry out on it.

To leave full preview and head back to the documents view, click the back arrow at the top left of the browser window.

How much of the file you see — part of it or all of it — depends on what you selected.

### More like this

- File size storage limitations
- Sort and search files
- Upload files
- View files

## Sort and search files

### A rundown on searching the files in Adobe cloud storage and sorting them by Name, Date Modified, or Size.

From the Acrobat on the web homepage, pick Search and look up a file by its name or what is inside it.

Among the search results, pick the file you want to open, or pick See more results to pull up everything tied to your search term.

Any file in the results can be opened with a click, and the search history is yours to clear whenever you like.

Any file in the results can be opened with a click, and the search history is yours to clear whenever you like. Note

As of April 2025, the Search tool surfaces a match only when the keyword sits in the file name or its metadata. A file holding the keyword solely in its body no longer shows up in the results.

What drives this is a pause on indexing that applies just to freshly uploaded or updated assets in Adobe Document Cloud storage. Search still behaves normally for files kept on your own device, and the files already living in Adobe cloud storage are likewise untouched.

### More like this

- Preview files
- Upload files
- View agreements and templates
- View files

## Upload files

### A guide to pushing your own files up to Adobe cloud storage by hand.

Keeping your files safe and reachable online is as simple as uploading them to Adobe cloud storage from Acrobat on the web.

From the Acrobat on the web homepage, pick Upload files and then point to the file you mean to send.

A fast route is to drag files onto the Recent section, which drops them straight into Adobe cloud storage.

A fast route is to drag files onto the Recent section, which drops them straight into Adobe cloud storage.

You can also drag and drop the files onto the Recent section.

When the target is a new or empty folder, open it first and then pick Upload files.

A dialog box opens — pick the file you want to send and then pick Open.

That file then lands in Adobe cloud storage.

### More like this

- View files
- File size storage limitations
- Manage files and folders
- Migration to Adobe cloud storage

## View agreements and templates

### A guide to reaching and viewing the agreements and templates kept on Adobe cloud storage.

From the Acrobat on the web homepage, pick Documents > All agreements.

Narrowing agreements by status is done by picking one of these from the left pane:

- In progress
- Waiting for you
- Completed
- Canceled
- Expired
- Archived
- Draft

For templates, web forms, or agreements you sent in bulk, pick the matching option from the left pane.

For templates, web forms, or agreements you sent in bulk, pick the matching option from the left pane.

To see the agreement templates you have built, pick See More > Templates.

### More like this

- Preview files
- Upload files
- View files
- Manage files and folders

## View files

### How to reach and look through the files held in Adobe cloud storage.

Open the Acrobat on the web homepage.

To narrow down which files appear, pick one of these filter choices:

- Recent
- Starred
- Shared

Note

Recent is the tab that opens first by default.

Choosing the Recent, Starred, or Shared tab brings up whichever files fall into that group.

Choosing the Recent, Starred, or Shared tab brings up whichever files fall into that group.

Open the main menu and choose Documents > Your documents.

Want a fast action on a document? Pick the file, then grab the option you need from the pane on the right.

Note

Which commands show up depends on the kind of file. A PDF, for instance, exposes every command apart from Create PDF. A Word, Excel, or PowerPoint file instead surfaces the Edit command, which opens the file for editing right inside the browser.

The file you picked then appears in the document pane within Acrobat on the web.

Alert

Getting the full value of the free Adobe plans, Adobe cloud storage among them, depends on keeping your free account in active use. Content tied to dormant accounts may be removed. The Adobe cloud storage retention policy for inactive free accounts has the details.

### More like this

- Upload files
- View agreements and templates
- File size storage limitations
- Manage files and folders

## Access Box storage files

### How to reach your Box storage files through Acrobat on the web.

When you reach Box files straight from the Acrobat on the web application, PDFs kept in Box can be opened, edited, and saved with no need to download them and send them back up. Tying the two together keeps everything current and makes the workflow smoother.

Note

Acrobat for Box runs on every current browser, Chrome, Firefox, Safari, and Microsoft Edge included.

Head to your Box storage files and right-click whichever file you'd like to bring into Acrobat on the web.

Select Open with > Adobe Acrobat (web).

Prefer the Acrobat Desktop app for a Box file? Right-click it, then choose Open with > Open on Desktop App.

Prefer the Acrobat Desktop app for a Box file? Right-click it, then choose Open with > Open on Desktop App.

When the Adobe Acrobat for Box dialog box appears, select Okay.

At the permissions page, choose Grant access to Box.

Opening a Box file in Adobe Acrobat first requires that you give Adobe Acrobat permission to access it.

Opening a Box file in Adobe Acrobat first requires that you give Adobe Acrobat permission to access it.

The Box file then shows up in the preview pane of Acrobat on the web, where editing, sharing, or requesting signatures all become available.

### More like this

- Access Google Drive files
- Access OneDrive files

## Access Google Drive files

### How to reach your Google Drive files through Acrobat on the web.

Reaching Google Drive files from Acrobat on the web lets you open, edit, and save the PDFs kept in Google Drive without any extra steps.

Note

Every current browser, Microsoft Edge, Chrome, Firefox, and Safari among them, runs Adobe Acrobat for Google Drive.

At the Acrobat on the web homepage, select Documents.

In the left pane, choose Add an account.

Select Sign in with Google.

Reaching the Google Drive account from Acrobat on the web means signing in to that Google account first.

Reaching the Google Drive account from Acrobat on the web means signing in to that Google account first.

Type your login credentials whenever you're asked for them.

When the Permissions dialog box appears, select Continue.

At the Google Drive account page, mark the files you'd like to reach.

Note

More than one Google Drive account can be tied to Acrobat on the web.

From now on your Google Drive account shows under Other Storage, and any file there is yours to open straight from Acrobat on the web.

From now on your Google Drive account shows under Other Storage, and any file there is yours to open straight from Acrobat on the web.

Within the left pane, the Other Storage section is where your Google Drive account lands.

Note

Making Adobe Acrobat the default viewer over in Google Drive works like this: sign in to Google Drive, then from the top-right corner pick the settings icon > Settings. Once the Settings page loads, choose Manage apps, followed by Use by default for Adobe Acrobat.

### More like this

- Access OneDrive files
- Access Box storage files

## Access OneDrive files

### How to reach your OneDrive files through Acrobat on the web.

At the Acrobat on the web homepage, select Documents.

In the left pane, choose Add an account.

Select Sign into OneDrive.

Reaching your OneDrive account from Acrobat on the web means signing in to that OneDrive account first.

Reaching your OneDrive account from Acrobat on the web means signing in to that OneDrive account first.

Type your login credentials whenever you're asked for them.

When the Request permissions dialog box appears, select Accept.

At the OneDrive account page, mark the files you'd like to reach.

Note

More than one OneDrive account can be tied to Acrobat on the web.

Reaching a OneDrive file is a matter of choosing the OneDrive option in the left pane, under Other Storage.

Reaching a OneDrive file is a matter of choosing the OneDrive option in the left pane, under Other Storage.

Within the left pane, the Other Storage section is where your OneDrive account lands.

### More like this

- Access Google Drive files
- Access Box storage files
