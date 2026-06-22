# Use Protected View, Mitigate Security Risks

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Protected View and Protected Mode overview; Enable or disable protected view; Bypass protected view restrictions; Acrobat and PDF content security overview; Security warnings in PDFs; Security warning triggers; Respond to security warnings; Allow or block links to other websites; Restrict access to JavaScript APIs; Allow attachments to start applications; Block or allow file attachments; Reset attachment permissions.

## Protected View and Protected Mode overview

Find out how Acrobat's Protected View and Protected Mode shield both your documents and your machine from possible attacks.

Inside Adobe Acrobat Pro, Protected View and Protected Mode are the security pieces that keep your system away from PDFs that might be malicious. To harden your setup, Acrobat switches Protected Mode on for you automatically. Leaving Protected Mode running is what Adobe advises. Switch it off only for a short while when you need to troubleshoot or test.

### About Protected View

Whenever you open a PDF from somewhere that might not be safe, Protected View layers on extra security. With it on, the PDF loads inside a walled-off space known as a sandbox, and that space caps what the file is allowed to do.

These are the main protections it brings:

- Loads PDFs you don't trust in a mode where nothing can be written
- A warning bar surfaces in Acrobat the moment an untrusted PDF is opened
- Holds back actions that could do harm until you go on record as trusting the file
  - Drag-and-drop into the reading or navigation pane
  - Printing and saving
  - Pan & Zoom, Loupe tool
  - Reading mode or full-screen View
  - PDF creation from untrusted sources
  - JavaScript execution and form filling

### Protected View in stand-alone applications

When it runs in the desktop applications, Protected View brings these traits:

- Acts much like the Protected View you'd see in Microsoft Office
- Puts up a yellow warning bar as untrusted files are opened
- A document can be trusted and Protected View left behind once the user picks Enable All Features

Provided you trust both the PDF and its origin, choose Enable All Features.

Provided you trust both the PDF and its origin, choose Enable All Features.

### Protected View in browsers

Within a browser, Protected View pares things down, and its main traits are:

- Puts up no warning bar
- Delivers a trimmed-down experience that feels like Reader
  - Signing form fields
  - Adding signature fields
  - Saving form data

Note

When Protected View runs inside a browser, you lose access to advanced printing, the zoom tools, and the attachment options.

Want to confirm a browser-opened PDF is under Protected View? Head to Menu > Document Properties > Advanced tab and look at the Protected Mode: On status.

To dig deeper, stop by Adobe's Security Blog or consult the Acrobat security overview.

### About Protected Mode

A comparable sandboxing piece, Protected Mode quietly runs behind the scenes to blunt security holes. Acrobat turns Protected Mode on for you by default.

- Works silently out of sight
- Clamps down on how far untrusted PDFs can reach into files and the system

## Enable or disable protected view

### Steps for switching protected view on or off in Adobe Acrobat.

Whereas Adobe Acrobat Reader ships with Protected Mode active, Acrobat leaves Protected View switched off to start with. Turn it on and your system gets a shield against PDFs that could do harm, though a few features stay locked down until you flag the document as trusted.

Select Menu > Preferences.

Beneath Categories, pick Security (Enhanced).

Settle on one of these Protected View choices:

- Off: turns protected view off
- Files from potentially unsafe locations: switches protected view on and flags every file that comes from a location you don't trust
- All files: switches protected view on for each file you open

Note

Anything you list in the Privileged Locations area of the Enhanced Security panel sits outside Protected View.

Tune Protected View together with privileged locations in the security preferences so you decide how files from risky origins behave and how trust gets handled.

Tune Protected View together with privileged locations in the security preferences so you decide how files from risky origins behave and how trust gets handled.

To commit the changes, select OK.

## Bypass protected view restrictions

### Steps for working past protected view limits on content you trust in Adobe Acrobat.

While Protected View is switched on, Acrobat drops PDFs into a locked-down sandbox where functionality is curtailed. That's good for safety, yet awkward when the document is one you trust. For particular files, folders, or locations you rely on, you can lift those limits.

Go to Menu > Preferences.

Beneath Categories, pick Security (Enhanced).

Under Enhanced Security, clear the Enable Enhanced Security checkbox.

Clearing the Enable Enhanced Security option is what lets you slip past Protected View.

Clearing the Enable Enhanced Security option is what lets you slip past Protected View.

Drop the files, folders, and locations into the Privileged Locations section.

Note

See how to Specify privileged locations for trusted content.

Select OK.

## Acrobat and PDF content security overview

### A rundown of the security feature categories Adobe Acrobat Pro uses to guard PDF content and govern access.

To counter possible weak points and keep PDF content safe, Acrobat brings strong security capabilities. Those safeguards work across two tiers: Application security and content security. Once you grasp these security contexts, you can shape the settings to hold a document's integrity intact and govern who reaches sensitive material.

### Application security

What application security comes down to is shaping the security features so Acrobat itself stays guarded against weak points, hostile attacks, and similar dangers. Through the user interface, seasoned users can tailor the application.

### Content security

Content security is about leaning on product features to keep PDF content whole. Such features fend off unwanted edits to PDFs, hold sensitive material private, block PDFs from being printed, and do more besides.

## Security warnings in PDFs

### A closer look at the ways Adobe Acrobat guards you against possible dangers lurking in PDF documents.

One key capability of Adobe Acrobat Pro, security warnings keep users clear of the risks that PDF content can carry. Acting as a safeguard, they flag for you any action or material inside a PDF that might put your system's security or privacy in jeopardy. Standing as an early line of defense against possible dangers, they work to:

- Let users know when an action could be risky
- Hand you the chance to decide with the facts in hand
- Keep system resources from being reached without permission
- Hold document integrity and security in place

### Types of security warnings

Acrobat puts forward several kinds of security warning, with each one built for a distinct job:

- Document-Level warnings: showing up as colored bars, typically yellow or red, across the top of the PDF, they call out the different degrees of security risk.
- Action-Specific warnings: surfacing as a pop-up dialog box when a PDF moves to carry out a particular action, like reaching an outside website or running a script.
- Trust notifications: arriving as alerts that check whether you'd like to trust a given document or source for what comes next.

### Common causes for security warnings

A number of things can set off security warnings in PDFs:

- Tries to reach outside resources or websites
- JavaScript or other runnable content being present
- Calls to play multimedia content
- Moves to send in form data
- Tries to reach or change system settings

## Security warning triggers

### A look at how Adobe Acrobat spots and flags possible security dangers within your PDFs.

What security warning triggers are is the particular events or conditions that lead Adobe Acrobat Pro to put a warning message in front of the user. By flagging content or actions inside a PDF that might be unsafe, these triggers let users choose with the facts in hand how they want to move forward.

### Common types of security warning triggers

To pin down possible security dangers, Adobe Acrobat Pro keeps watch over several parts of how a PDF behaves:

- Blacklisted JavaScript: raises a warning once a PDF moves to run JavaScript that's known to be exploitable or malicious.
- Security settings updates: raises a warning once Acrobat spots certificate updates coming from sources that are unfamiliar or untrusted.
- External content access: raises a warning once a PDF reaches for outside resources, images or websites among them.
- Data injection attempts: raises a warning once an untrusted source moves to add or change data inside a PDF form.
- Silent printing: raises a warning once a PDF moves to print with no user involvement or go-ahead.
- Hidden web links: raises a warning once a PDF holds buried links that could steer toward malicious sites or data harvesting.

### Importance of security warning triggers

Within Acrobat Pro's defensive playbook, security warning triggers carry real weight:

- User awareness: keeps users clued in on possible risks and nudges them toward careful habits.
- Threat prevention: stops actions that could do harm unless the user signs off on them outright.
- Customizable security: lets users shape the security settings to fit their own needs and appetite for risk.
- Organizational protection: backs system-wide security across enterprise settings to guard data and infrastructure.

## Respond to security warnings

### A guide to dealing with security alerts that pop up when you open PDFs in Adobe Acrobat.

Inside Adobe Acrobat Pro, security warnings keep your system clear of content in PDF files that might do harm. They turn up whenever a PDF moves to do something that could be risky, like running scripts or reaching outside resources. Once you know how to handle these warnings, you can work with PDFs safely while keeping your security measures doing their job.

### For trusted sources

Open the PDF.

Once a security warning shows up, give the message a careful read.

Within the warning dialog box, click the Options, Allow, or Play button. The exact labels can shift with the specific warning.

Answer any further prompts so the PDF features come fully online.

Note

Should no options show up, reach out to your IT administrator for help.

### For untrusted sources

Launch the PDF you want to view.

Should a security warning surface, take the time to read what it says before acting.

To clear the warning without proceeding, choose either Close or Cancel.

## Allow or block links to other websites

### Tighten security over outbound links by deciding which external sites a PDF is permitted to reach.

### Windows

Open Menu > Preferences.

Under Categories, pick Trust Manager.

On the right side of the window, choose Change settings.

A dialog appears; from it, pick whichever of these settings fits your need:

- Choose Allow PDF files to access all web sites to grant access to every site.
- Choose Block PDF files’ access to all web sites to deny access to every site.
- Choose Custom setting to limit access to a list of sites you nominate.
- Enter a site's address in the Host name text box, then choose Allow or Block, to register a new site.
- Highlight a site in the list and choose Delete to drop it.
- For sites missing from your custom list, decide the default behavior by choosing Always ask, Allow access, or Block access.

Choose OK.

Note

When a protected PDF prompts you to permit or deny a URL, choosing Remember this action for this site for all PDF documents writes that URL into the stored list.

### macOS

Open Acrobat > Preferences.

Under Categories, pick Trust Manager.

On the right side of the window, choose Change settings.

A dialog appears; from it, pick whichever of these settings fits your need:

- Choose Allow PDF files to access all web sites to grant access to every site.
- Choose Block PDF files’ access to all web sites to deny access to every site.
- Choose Custom setting to limit access to a list of sites you nominate.
- Enter a site's address in the Host name text box, then choose Allow or Block, to register a new site.
- Highlight a site in the list and choose Delete to drop it.
- For sites missing from your custom list, decide the default behavior by choosing Always ask, Allow access, or Block access.

Choose OK.

## Restrict access to JavaScript APIs

### Dial in the JavaScript security options inside Adobe Acrobat so that particular APIs stay off-limits.

How JavaScript executes inside Acrobat is something you can tune, which puts the security level in your hands. Narrowing what the JavaScript APIs can reach is one such tuning, and it shields your machine from possible threats.

### Windows

Open Menu > Preferences.

Under Categories, pick JavaScript.

Within the JavaScript Security panel, set these options as needed:

- Enable Acrobat JavaScript: Toggle this box to switch JavaScript off altogether.
- Enable menu items JavaScript execution privileges: Toggle this box to stop menu items from running JavaScript.
- Enable global object security policy: Toggle this box to permit JavaScript globally by way of APIs, or to extend trust to particular documents that carry JavaScripts.

Choose OK.

### macOS

Open Acrobat > Preferences.

Under Categories, pick JavaScript.

Within the JavaScript Security panel, set these options as needed:

- Enable Acrobat JavaScript: Toggle this box to switch JavaScript off altogether.
- Enable menu items JavaScript execution privileges: Toggle this box to stop menu items from running JavaScript.
- Enable global object security policy: Toggle this box to permit JavaScript globally by way of APIs, or to extend trust to particular documents that carry JavaScripts.

Choose OK.

## Allow attachments to start applications

### Decide, inside Adobe Acrobat, whether attachments that aren't PDFs are allowed to launch in the apps they belong to.

### Windows

Open Menu > Preferences.

Under Categories, pick Trust Manager.

Locate the PDF File Attachments section and tick the checkbox labeled Allow opening of non-PDF file attachments with external applications.

Choose OK.

### macOS

Open Acrobat > Preferences.

Under Categories, pick Trust Manager.

Locate the PDF File Attachments section and tick the checkbox labeled Allow opening of non-PDF file attachments with external applications.

Choose OK.

## Block or allow file attachments

### Govern attachment safety in Adobe Acrobat by deciding which kinds of files are allowed to open or be saved.

To keep your machine safe without stripping away useful behavior, Acrobat already permits some attachment types and refuses others — for instance files carrying .BIN, .EXE, and .BAT extensions. Reworking those allow and block lists lets you tailor the security posture and clear trusted formats to open as PDF attachments.

From the global bar, choose Edit, and then choose More > Attach file.

Pick the file you want to attach, and choose Open.

In the Attachments pane, right-click that file, then choose Open Attachment.

A dialog appears; from it, choose one of these:

- Open this file: Opens it and leaves the registry list untouched.
- Always allow opening files of this type: Puts the file type onto the allowlist.
- Never allow opening files of this type: Puts the file type onto the blocklist.

Choose OK.

## Reset attachment permissions

### Bring back the out-of-the-box set of permitted and forbidden attachment types within Adobe Acrobat.

### Windows

Open Menu > Preferences.

Under Categories, pick Trust Manager.

Inside the PDF File Attachments section, choose Restore.

Note

Only after you have altered the attachment settings does the Restore button become active.

In the confirmation dialog, choose Yes.

Choose OK.

### macOS

Open Acrobat > Preferences.

Under Categories, pick Trust Manager.

Inside the PDF File Attachments section, choose Restore.

Note

Only after you have altered the attachment settings does the Restore button become active.

In the confirmation dialog, choose Yes.

Choose OK.
