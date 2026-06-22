# Acrobat For Sharepoint And Onedrive, Acrobat For Microsoft Outlook, Acrobat For Microsoft 365, Adobe Pdf Services Connector

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Acrobat for SharePoint and OneDrive overview; AI powered document summaries and insights; Configure browsers for Acrobat in SharePoint and OneDrive; Use Acrobat to update files in SharePoint and OneDrive; Access Acrobat admin settings; Append emails to existing PDFs; Acrobat for Microsoft Outlook overview; Send Acrobat files as links in emails; Convert emails to PDFs; Deploy Acrobat for Microsoft 365 as admins or individuals; Convert online files to PDFs; Delete Acrobat for Microsoft 365; Deploy Acrobat for Microsoft 365 as enterprise admins; Adobe PDF Services Actions; Connect Adobe PDF Services for PowerApps; Connect Adobe PDF Services for Power Automate; Migrate existing flows; Set up Adobe PDF services connector.

## Acrobat for SharePoint and OneDrive overview

### Explore what Adobe Acrobat for SharePoint and OneDrive offers and the benefits it brings.

Bundling PDF services together into one integrated package, Adobe Acrobat for SharePoint and OneDrive lets you run a range of operations on your PDFs. Accessibility is covered too, with read-out-loud functionality, keyboard tabbing, and high-contrast support all on board. This PDF experience gives you the ability to:

- Preview PDFs on the web through Adobe's advanced online previewer.
- Lean on the AI Assistant feature to make sense of dense PDF documents fast and with little effort.
- Reshape PDFs by editing text and by adding or removing images.
- Build PDFs that hold onto their original fonts, formatting, and layouts, with password protection available if you want it.
- Reorder, remove, or rotate pages, or break one PDF apart into several documents.
- Combine Microsoft files with PDFs into a single PDF, then shrink the file size to make archiving or sharing simpler.
- Turn PDFs into editable Word, Excel, PowerPoint, or RTF files from any location while keeping the original design intact.
- Mark up PDFs using sticky notes, highlights, and freehand drawing to take notes effectively.
- Keep things accessible through screen reader support, keyboard navigation, and High Contrast mode support that assists users with visual impairments.

### File name restrictions

A handful of file names won't be accepted:

- Special directory names: "." and ".."
- Specific extensions: CON, PRN, AUX, NUL, COM0-COM9, LPT0-LPT9
- File names ending with a space or period
- File names beginning with a period
- File names containing the '#' character

### File name and path length limitations

In OneDrive or SharePoint, a lengthy file name or path can trip up the Adobe cloud storage PDF Experience, which then shows the message: "There's some problem while processing your files."

The fix is to trim the file name or path down and have another go.

Note

The root of this is Microsoft's Graph API, and Adobe and Microsoft are working together on a fix.

### Visibility in OneDrive and SharePoint

Only the modern view of OneDrive and SharePoint surfaces the Adobe cloud storage PDF experience. If you're on the classic view, choose Exit Classic Experience to move across.

### Data handling and privacy

Paid features such as Organize Pages or Export PDF generate transient copies of your files. Those copies last for as long as 24 hours before being deleted, and they stay out of reach of both Adobe and Microsoft.

Learn more about Adobe Acrobat with Document Cloud Services Security Overview.

### More like this

- Install Acrobat for SharePoint and OneDrive
- Configure browsers for Acrobat in SharePoint and OneDrive
- Acrobat for SharePoint and OneDrive installation overview

## AI powered document summaries and insights

### Produce document summaries plus handy insights by way of the Adobe Acrobat AI Assistant and Generative Summary tools.

Drawing on what's in the PDF, the AI Assistant tool rapidly returns thorough answers to your questions. It ties those answers back to text and data tables in the document and proposes follow-up questions to ask.

For its part, the Generative Summary tool builds a document outline of headings plus summaries that call out the main points. It surfaces key insights and works through PDF content in chunks so summaries come back faster.

Producing document summaries or insights via the AI Assistant tool is easy to do without leaving the SharePoint or OneDrive interface. For details on how Generative AI features behave, their standards, and where they fall short in Adobe Acrobat and Acrobat Reader, see the relevant guidance.

## Configure browsers for Acrobat in SharePoint and OneDrive

### Set up your browsers so they work with the Acrobat in SharePoint and OneDrive integration.

Adobe Acrobat for SharePoint and OneDrive runs on every modern browser, Microsoft Edge, Chrome, Firefox, and Safari among them.

Note

Block third-party cookies in your browser and the Adobe Acrobat integration stops working. Make sure third-party cookies are unblocked in whichever browser you're on.

### Configure Microsoft Edge Legacy

Trouble with security zones can come up when your Microsoft Office 365 server and the Document Cloud server sit in two separate security zones and only one of them runs in protected mode. Set up that way, the Microsoft server has no way to reach the Adobe server, and the session cookie can't validate your session.

Clearing it up means putting one of these solutions in place:

- Take any server URLs out of the trusted zone. Either admins push this configuration to everyone, or each user changes their own browser settings by hand.
- Walk through these steps to set up your browser:

Launch Control Panel > Internet Options, and switch to the Security tab.

From there, pick Trusted Sites > Sites, then add the entries below to the Trusted Zone wherever they aren't present yet:

- \*.microsoftonline.com

Adobe server addresses:

- \*.adobe.com
- \*.acrobat.com
- \*.adobe.io
- \*.adobelogin.com

Close the Trusted Sites dialog and select Ok

### Configure chromium-based Microsoft Edge

Within the Edge browser, head to More options > Settings.

From the left-hand menu, choose Privacy, search, and services, then open Exceptions.

Within Exceptions, use Add a Site, type in the address https://adobe.io, and confirm with Add.

Tracking prevention in Microsoft Edge can be turned off by listing the site address in Exceptions, found under Privacy, search, and services.

Tracking prevention in Microsoft Edge can be turned off by listing the site address in Exceptions, found under Privacy, search, and services.

With third-party cookies now unblocked, you're set to run Acrobat for SharePoint and OneDrive on the browsers you've configured.

### More like this

- Acrobat for SharePoint and OneDrive installation overview
- AI-powered document summaries and insights
- Use Acrobat to update files in SharePoint and OneDrive

## Use Acrobat to update files in SharePoint and OneDrive

### Editing files online with Acrobat across SharePoint and OneDrive.

Right inside these two cloud storage services, Acrobat on the web lets you handle files without leaving the platform. The PDF operations on offer span converting, editing, combining, exporting, and organizing, plus securing, compressing, signing, and annotating.

Head to SharePoint or OneDrive, then right-click whichever file you intend to open.

For PDF files, select Open > Open in browser.

When you'd rather work in the desktop application, pick the 'Open in Adobe Acrobat' option from the context menu instead.

Should that 'Open in Adobe Acrobat' entry be absent from the context menu, reach out to your admin and confirm that both SharePoint and OneDrive have been provisioned for your account in the organization. Note

For non-PDF files, select Adobe Document Cloud > Create PDF by Adobe.

After the PDF is open in Acrobat, reach for the tools provided to carry out any of these tasks:

- Edit text
- Edit images
- Combine files into a single PDF
- Export PDF to Word, Excel, or PowerPoint
- Organize a PDF
- Protect a PDF
- Compress a PDF
- Share and collaborate on files
- Fill and sign documents
- Send for signature

Whatever you alter happens to the online PDF, and Acrobat writes those edits back automatically.

### More like this

- Acrobat for SharePoint and OneDrive overview
- AI-powered document summaries and insights
- Uninstall Acrobat for SharePoint and OneDrive

## Access Acrobat admin settings

### Reaching the Acrobat admin settings from within SharePoint and OneDrive.

Sign in to your SharePoint or OneDrive account with your admin credentials.

Open a document in Acrobat.

Up in the top-right corner, click the profile icon, then choose Admin settings.

Adjusting how Acrobat behaves across SharePoint and OneDrive is done from those admin settings, where you set whatever preferences you need.

When the prompt appears, authenticate with your Adobe admin credentials.

Note

Whatever you change in the Admin portal rolls out to Acrobat automatically, covering Microsoft Teams, Outlook, OneDrive, SharePoint, and the Microsoft 365 app for every user.

### More like this

- Customize Acrobat for Microsoft integrations
- Configure browsers for Acrobat in SharePoint and OneDrive

## Append emails to existing PDFs

### Adding emails onto PDFs you already have, using Acrobat for Microsoft Outlook.

Keeping a thread of related correspondence together is easy when you tack emails onto existing PDFs. The approach pays off for staying on top of project updates or client exchanges without scattering them.

Open the email that you want to append to a PDF.

Note

Appending emails onto existing PDFs requires an Acrobat Pro or Standard subscription.

Select More options > Adobe Acrobat for Microsoft Teams and Outlook.

From the right panel, select Append email to PDF.

Acrobat for Microsoft Teams and Outlook is what lets you attach emails onto your PDFs.

Within the dialog box that appears, pick whichever of these options suits you, then choose the file the email should be appended to:

- Select from OneDrive
- Select from My Computer

Acrobat appends the email to the PDF you chose and shows a confirmation message.

Tip

That confirmation dialog gives you the choice to download the PDF or store it on OneDrive. Opening the new PDF lets you confirm the email landed.

### More like this

- Acrobat for Microsoft Outlook overview
- Install Acrobat app on Microsoft Outlook
- Send Acrobat files as links in emails

## Acrobat for Microsoft Outlook overview

### A look at why Adobe Acrobat for Microsoft Outlook is useful and what it does.

Adobe Acrobat for Microsoft Outlook turns emails into PDFs and lets you hand off PDFs as links straight from email.

### Supported features

Coverage in Acrobat for Microsoft Outlook extends to:

- 19 languages
- Dark mode
- High contrast
- Keyboard tabbing
- Screen reader accessibility

### Supported platforms

Coverage in Acrobat for Microsoft Outlook extends to:

- New Microsoft Outlook on Windows
- Microsoft Outlook on MacOS
- Microsoft Outlook Web app
- Classic Outlook on Windows

Note

On Legacy Microsoft Outlook for MacOS, the Acrobat integration does not work.

### Document links in emails

Over in the Email Compose view, Adobe Acrobat surfaces the Attach File via Link feature. Public links get created by this tool for a single attachment or several at once. Every one of those attachment links shows up in the body of the email, where recipients can reach them.

Getting documents uploaded is a matter of opening the task pane and clicking the notification prompt that pops up the moment you attach a document to the email.

### Emails to PDFs

- Supported email types: Every kind of email can be turned into a PDF with the Adobe Acrobat app.

  - Padding differences
  - Missing images
  - Font variations

- Embedded forms: Converting an email that contains embedded forms to PDF can strip out the interactive pieces, including text fields, checkboxes, and dropdown menus.

### Converted documents

- Filename generation: Whatever sits in the email's subject line becomes the name of the converted PDF.
- Character removal: Any disallowed characters from the subject line get stripped so the file saves cleanly to OneDrive and the Desktop.

### More like this

- Install Acrobat for Microsoft Outlook
- Send Acrobat files as links in emails
- Convert emails to PDFs

## Send Acrobat files as links in emails

### Sharing Adobe Acrobat files as email links.

Passing Acrobat files along as links keeps sharing simple, trims down attachment size, and gives recipients secure access to the newest version. The result is smoother collaboration along with easier tracking.

From the top menu, select New mail.

Open Adobe Acrobat for Microsoft Teams and Outlook from the Apps dialog box.

Select All Apps from the top menu and then select Adobe Acrobat for Microsoft Teams and Outlook.

When prompted, select Sign in and then enter your account credentials.

From the Adobe Acrobat panel, select Share as link.

Within the dialog box that appears, choose whichever option fits your situation:

- Select from OneDrive
- Select from My Computer

Sharing PDFs as email links is handled through Acrobat for Microsoft Teams and Outlook.

Select a PDF file that you want to share.

As soon as the file finishes uploading to Adobe cloud storage, it shows up as a link in the email. Note

Sharing PDFs as links is open to free Acrobat users. Those on an Acrobat Pro or Standard subscription get the added ability to turn non-PDF files into PDFs and share those as links too.

Wrap up the email, fill in the recipients, and send it off.

The people receiving the email can then review the attached PDF and collaborate on it.

Note

Attaching a PDF to an email draft triggers a prompt asking whether to convert it into a shared link. In that message, select Yes to send the attached file as a shared link.

### More like this

- Acrobat for Microsoft Outlook overview
- Install Acrobat for Microsoft Outlook
- Convert emails to PDFs

## Convert emails to PDFs

### Turning emails into PDFs with Acrobat for Microsoft Outlook.

Saving emails as PDFs makes it straightforward to archive and securely pass along important messages. Because formatting and attachments stay intact, the approach suits anyone preserving a trail of client messages or legal paperwork.

Start by opening whichever email you plan to turn into a PDF.

Note

Converting emails into PDFs requires an Acrobat Pro or Standard subscription.

In the email's top menu, choose More options > Adobe Acrobat .

Note

Should the Adobe Acrobat icon be missing from the top menu, select More Apps > Adobe Acrobat for Microsoft Teams and Outlook.

From the Acrobat panel, select Convert email to PDF.

In the dialog that appears, pick whichever of these options is right for you:

- Download
- Save to OneDrive

That email becomes a PDF, and a confirmation message follows.

Tip

With the email now a PDF, you can grab the download or send it to OneDrive.

### More like this

- Install Acrobat app on Microsoft Outlook
- Send Acrobat files as links in emails
- Append emails to existing PDFs

## Deploy Acrobat for Microsoft 365 as admins or individuals

### How either admins or individual users install Acrobat for Microsoft 365.

Head to Microsoft AppSource and sign in to your account.

Search for Adobe Acrobat.

Within the search results, find Adobe Acrobat for Microsoft 365 and select Get it now.

For a rundown of the add-ins bundled with Adobe Acrobat for Microsoft 365, select Included add-in and browse what's listed.

When the confirmation dialog box pops up, choose Get it now.

Admins should select Microsoft Admin in the Administrators section, then walk through the steps to deploy Adobe Acrobat for Microsoft 365 out of Microsoft Admin Center.

Installing the app as an admin means choosing the Microsoft Admin option. Everyone else picks the appropriate app and follows the prompts to get it installed.

Those without admin rights go to the Not an administrator? Install Adobe Acrobat add-ins for yourself section and select whichever of these apps they want:

- Microsoft OneDrive and SharePoint
- Microsoft Teams
- Microsoft Word, Excel & PowerPoint

For the selected app, select Get it now.

Follow the on-screen instructions to install Adobe Acrobat for Microsoft 365.

### More like this

- Deploy Acrobat for Microsoft 365 as enterprise admins
- Install Adobe Create PDF add-in
- Convert online files to PDFs

## Convert online files to PDFs

### Converting Word, PowerPoint, or Excel documents into PDFs through Acrobat for Microsoft 365.

Document handling stays smooth and quick with Acrobat for Microsoft 365. Files convert right from the web browser, so there's no downloading required.

Launch a supported browser of your choice and load the file you intend to turn into a PDF.

Over on the Home ribbon, pick Document Cloud.

Once the Create PDF panel appears, hit Convert.

Ahead of converting the Word file to PDF, you can tick the 'Add Password Protection' checkbox to lock down the document.

Sign in with your Adobe ID and password if you're asked, and the conversion goes ahead.

After the confirmation message appears, pick Download or Save to OneDrive.

The file is converted to PDF.

### More like this

- Deploy Acrobat for Microsoft 365 as enterprise admins
- Deploy Acrobat for Microsoft 365 as admins or individuals
- Install Adobe Create PDF add-in

## Delete Acrobat for Microsoft 365

### Learn how to delete the Acrobat for Microsoft 365 application.

Sign in to the Microsoft 365 administrator center with your admin account.

Head to Settings > Integrated apps.

Pick Azure Active Directory.

In the left pane, navigate through Identity > Applications > Enterprise applications.

Within the displayed apps, choose Adobe Document Cloud.

In the left pane, open Properties.

Click Delete.

Rather than removing it, you can keep Acrobat for the Microsoft 365 application and instead walk through each setting, adjusting whatever needs changing.

If you would prefer to retain the app, examine the available options for Acrobat for the Microsoft 365 application and revise them however your needs dictate, instead of deleting.

When the confirmation dialog box appears, click Delete.

At this point the Adobe Acrobat for Microsoft 365 app has been removed.

## Deploy Acrobat for Microsoft 365 as enterprise admins

### Learn how enterprise admins can install Acrobat for Microsoft 365.

Sign in to the Microsoft 365 Admin center, then in the left pane go to Settings > Integrated apps.

Choose Get apps.

Adding Acrobat for Microsoft 365 starts by choosing Get apps and looking up the application.

Locate the app you want to add by choosing Get apps and running a search for Acrobat for Microsoft 365.

When the AppSource dialog box appears, look up Adobe Acrobat. Within the results, find Adobe Acrobat for Microsoft 365 and click Get it now.

For a rundown of which add-ins ship with Adobe Acrobat for Microsoft 365, click Included add-in and consult the listing.

Curious which add-ins come bundled with Adobe Acrobat for Microsoft 365? Click Included add-in to browse the list.

When the Confirm to continue dialog box appears, click Get it now.

Choose Adobe Acrobat for Microsoft 365, then click Deploy.

Work through the onscreen prompts to bring in users and grant permissions. When asked, authenticate with your Microsoft login credentials.

On the Review and finish deployment page, click Finish deployment.

Click Done.

Deployment is complete, and the Adobe Acrobat for Microsoft 365 app now appears beneath Integrated apps.

### More like this

- Deploy Acrobat for Microsoft 365 as admins or individuals
- Install Adobe Create PDF add-in
- Delete Acrobat for Microsoft 365

## Adobe PDF Services Actions

### Learn about the Adobe PDF Services Actions.

Once a workflow fires, an action defines whatever should happen next. Through actions, users gain operations for building or reshaping PDF documents by way of Adobe PDF Services.

For any action to run properly, one or more inputs — some required, some optional — have to be supplied by the user. By picking an optional input within an action, a user designates the region where their request gets handled. At present, two choices exist: Europe (Ireland) and US East (N. Virginia)—Default.

What an action yields is a document. Turn a Word file into a PDF, for instance, and you receive that document as a PDF; export a PDF to PowerPoint and the result comes back in PowerPoint format.

A list of the Actions available right now is available for reference.

Note

Within the Adobe PDF Services Connector action, the chosen region points to the processing units that host Adobe PDF Services, which need not coincide with the region of the Microsoft Power Platform environment running your Power Automate flows. Suppose you set up a Microsoft environment in the Canada region yet pick Europe from the dropdown in Adobe PDF Services Connector's Action: every flow and all other Connector operations stay in the Canada region, while only the work tied to Adobe PDF Services Connector is handled over in the Europe region.

### More like this

- Connect Adobe PDF Services for Power Automate
- Connect Adobe PDF Services for PowerApps

## Connect Adobe PDF Services for PowerApps

### Learn how to connect Adobe PDF Services for PowerApps.

A collection of tools, PowerApps lets you spin up tailored business apps in short order. Its connections reach data held in Microsoft Dataverse, SharePoint, Excel, Office 365, Dynamics 365, SQL Server, and elsewhere, whether that data sits online or on-premises. With PowerApps, hand-run procedures become digital, automated workflows. Whatever you build adapts responsively and runs smoothly across browsers, phones, and tablets. No coding is required for users to assemble capable, custom apps with PowerApps.

Head to the Microsoft PowerApps homepage and sign in using your credentials.

Note

Confirm that a suitable PowerApps license is in place. Should you lack one, reach out to your Microsoft 365 administrator.

In the left pane, choose Data > Connections.

Within the Search field, enter Adobe PDF Services.

Pick the Adobe PDF Services connector.

The PDF Services connector now sits inside PowerApps, ready for you to build canvas and model-driven apps there.

### More like this

- Connect Adobe PDF Services for Power Automate
- Set up Adobe PDF Services connector
- Migrate existing flows

## Connect Adobe PDF Services for Power Automate

### Learn how to connect Adobe PDF Services for Power Automate.

Linking assorted apps and services together into orchestrated, multi-step workflows is what Microsoft Power Automate does, letting repetitive jobs run automatically without the need for intricate API coding.

Every workflow rests on three Power Automate ideas. To begin, any service can surface its API by way of a connector to that service. Triggers, which a connector may carry, are what kick workflows off. Actions, which a connector must carry, are what propel the events inside a workflow. Sitting between actions are common logical connectors that steer the workflow according to parameters that earlier actions produced.

Before you begin

Access to the Adobe PDF Services connector for Microsoft Power Automate calls for credentials. Get started for free now. Our usage limits and licensing page covers the finer points. Should you want to grow your operations, our pricing page lays out purchase options along with volume discounts.

Head to the Microsoft Power Automate homepage and log in using your credentials.

In the left pane, choose Connectors.

Within the Search field, enter Adobe PDF Services.

Pick the Adobe PDF Services connector.

The PDF Services connector now sits inside Power Automate.

### More like this

- Connect Adobe PDF Services for PowerApps
- Set up Adobe PDF Services connector
- Adobe PDF Services Actions

## Migrate existing flows

### Learn how to migrate your existing flows.

Your present Power Automate workflows can be shifted over to a different authentication method. Do this by establishing a fresh connection through the OAuth method, then pointing all actions in your existing flows at that new connection — which keeps the workflows running properly under the updated credentials.

Set up a fresh Oauth Server-to-Server connection within Power Automate.

Note

Two paths are open to you: carry your current JWT Service Account Credentials across to Oauth Server-to-Server credentials, or generate brand-new Oauth Server-to-Server Credentials.

Build a fresh Power Automate connection that relies on the Oauth Server-to-Server credentials.

Should you wish to rename the connection, click its name and then click Edit.

Bring up your flow and point every one of your actions at the connection you just made.

Note

When a sizable amount of data is involved, export the flow and bring it back in. As that import runs, pick the connections for each of the flow's connectors. Doing so refreshes the connections across all actions at once.

This moves your current Power Automate workflows onto a fresh authentication method spanning every action.

### More like this

- Connect Adobe PDF Services for Power Automate
- Connect Adobe PDF Services for PowerApps
- Set up Adobe PDF Services connector

## Set up Adobe PDF services connector

### Obtaining the Adobe account credentials needed to configure the PDF services connector.

Head to the Adobe PDF Services API page.

Note

Make sure you hold the permission needed to create a credential.

Beneath Create new credentials, type in a credentials name and tick the developer terms checkbox.

Click Create credentials.

This produces your Client ID and Client Secret credentials and pulls down a JSON file holding those credentials.

Enter a credential name that is both valid and free, and a green check mark shows up in the field.

A valid, available credential name causes a green check mark to appear within the field.

Attach the credentials to the Adobe PDF Services connector.

From here, any PDF Services connector actions can be dropped into your flow.

### More like this

- Connect Adobe PDF Services for Power Automate
- Migrate existing flows
- Adobe PDF Services Actions
