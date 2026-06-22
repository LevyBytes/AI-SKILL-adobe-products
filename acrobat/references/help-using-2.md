# Reading Pdfs Reflow Accessibility Features, Notifications, Access Acrobat Across Web Mobile Desktop, Mobile Create Pdf Spaces ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Reading PDFs with reflow and accessibility features; Acrobat notifications; Install Acrobat; Create PDF Spaces on mobile; Create podcasts in Acrobat on mobile.

## Reading PDFs with reflow and accessibility features

Search Last updated on Feb 26, 2026 | Also applies to Adobe Acrobat 2017, Adobe Acrobat 2020

### Setting accessibility preferences

To make PDFs easier to consume for readers with visual or motor limitations, Acrobat ships with a set of dedicated preferences. What they govern is twofold: the on-screen rendering of a PDF and the way a screen reader voices its contents.

The Accessibility Setup Assistant is where the bulk of these accessibility-related preferences live, and it walks you through each one with on-screen guidance. A handful, however, sit outside the assistant — those in the Reading, Forms, and Multimedia categories, for instance. Every preference remains reachable through the Preferences dialog box regardless.

Be aware that a preference can carry one label inside the Accessibility Setup Assistant and a different label inside the Preferences dialog box. Throughout Acrobat Help, the Preferences dialog box wording is the one used.

For more information about accessibility features, see www.adobe.com/accessibility.

### Set accessibility preferences with the Accessibility Setup Assistant

To launch the Accessibility Setup Assistant, go to All tools > Prepare for accessibility > Use setup assistant.

Based on whichever option you pick, the assistant narrows the list down to the preferences that suit your particular assistive software and hardware.

Work through the on-screen prompts. Selecting Cancel partway through leaves Acrobat to apply default values for whatever preferences the assistant would have configured — an outcome that isn't advised.

### Set accessibility preferences with the Preferences dialog box

To reach the Preferences dialog box, use the hamburger menu (windows), or pick Acrobat at the top left (macOS) followed by Preferences.

Across the dialog box's several panels, adjust each preference to match your assistive software and hardware.

### Accessibility preferences

Accessibility preferences in Accessibility panel

Replace Document Colors

Turning this on lets you pick from a set of high-contrast text-and-background color pairings, or build a combination of your own. The equivalent control inside the Accessibility Setup Assistant is the Use High Contrast Colors For Document Text option.

Always Use Page Layout Style

Maps to the Override Page Layout Style option in the Accessibility Setup Assistant.

Always Use Zoom Setting

Maps to the Override Document Zoom option in the Accessibility Setup Assistant.

Use Document Structure For Tab Order When No ExplicitTab Order Is Specified

Makes links and form fields easier to move through in documents that leave their tab order undefined.

Always Display The Keyboard Selection Cursor

Turn this on when a screen magnifier is in play. Its counterpart in the Accessibility Setup Assistant is the Always Display The Keyboard Selection Cursor option.

Always Use The System Selection Color

With this enabled, the standard blue selection color gives way to whatever color the system dictates.

Show Portfolios In Files Mode

Enabling this lists a PDF Portfolio's component files together with their file details. For readers facing mobility impairments, blindness, or low vision, Files mode delivers a smoother reading experience.

Accessibility preferences in Documents panel

Automatically Save Document Changes To Temporary File Every

Clear this and auto-save stops running. The consequence: every save of a PDF forces the screen reader or magnifier to load the document again. Inside the Accessibility Setup Assistant the matching control is the Disable Document Auto-Save option.

Accessibility preferences in Forms panel

Fields Highlight Color and Required Fields Highlight Color

These set which colors mark fillable form fields on screen. Their equivalents in the Accessibility Setup Assistant are the Field Highlight Color and Required Field Highlight Color options.

Auto-Complete

Lets Acrobat propose finishing certain form-field entries for you, cutting down the keystrokes a form takes to fill. No matching control exists for it in the Accessibility Setup Assistant.

Accessibility preferences in Multimedia panel

Show Subtitles When Available

Play Dubbed Audio When Available

Show Supplemental Text Captions When Available

Show Audio Description (Or Video Description, Or Descriptive Video) When Available

None of these four map to anything in the Accessibility Setup Assistant.

Accessibility preferences in Page Display panel

Zoom

Controls how large documents appear on screen, helping low-vision readers handle reflowed PDFs with less effort. The Override Document Zoom option in the Accessibility Setup Assistant is its counterpart.

Smooth Text

Governs text anti-aliasing. Pick None to switch smoothing off, which sharpens text and makes it more legible under a screen magnifier. In the Accessibility Setup Assistant this same control is the Disable Text Smoothing option.

Accessibility preferences in Reading panel

Reading Order

Sets the sequence in which documents are read. These same reading-order choices show up in the Accessibility Setup Assistant as well.

Infer Reading Order From Document (Recommended)

Works out the reading order of untagged documents through a sophisticated structure-inference layout analysis.

Left-To-Right, Top-To-Bottom Reading Order

Hands over the text by its position on the page — left to right, then top to bottom. It runs faster than Infer Reading Order From Document. Only text is examined here; form fields get skipped and tables go unrecognized.

Use Reading Order In Raw Print Stream

Hands over text in whatever order the print stream recorded it. It runs faster than Infer Reading Order From Document. Only text is examined here; form fields get skipped and tables go unrecognized.

Override The Reading Order In Tagged Documents

Applies the reading order from the Reading preferences rather than whatever the document's tag structure calls for. Reserve this for poorly tagged PDFs that are giving you trouble. The matching control in the Accessibility Setup Assistant is the Override The Reading Order In Tagged Documents option.

Page Vs Document

How much of a document reaches a screen reader in one pass is what this preference controls. When a PDF carries no tags, Acrobat may study it and try to deduce both its structure and its reading order. On a lengthy document that analysis can drag on. A useful tactic is to have Acrobat hand over only the page currently on screen, so it works through just a small slice at a time. The right choice shifts with the document's size and complexity and with what the screen reader itself can do. As Acrobat passes content to a screen reader, screen magnifier, or other assistive tool, it writes that content into a memory buffer the assistive software can read directly. How much goes into that buffer influences how quickly Acrobat handles operations like opening the file, moving to the following page, switching views, and running commands.

Only Read The Currently Visible Pages

A screen magnifier usually pairs best with this option. By sparing the software from chewing through the off-screen portions of a document, it speeds things up. Once Acrobat forwards only a PDF's visible pages to the memory buffer, the assistive technology can reach those pages and no others. Moving to a different page isn't possible until that page comes into view and Acrobat has pushed its information to the buffer. So with this option on, you have to rely on Acrobat's own navigation controls rather than the assistive technology's to travel between pages. Acrobat forwards information for every visible page, which means the assistive technology also picks up pages that are only partly on screen — the foot of one page or the head of the next — alongside the fully visible ones. Should you run a page display mode other than Single Page, such as Continuous, then advance to the next page, the technology can lose track of which slice of an earlier page it already spoke aloud. So it's worth setting the Default Page Layout option to Single Page whenever you let Acrobat forward only the visible pages. Preferences for viewing PDFs explains how to make Single Page the default page layout.

This option lines up with the Only Read The Currently Visible Pages option in the Accessibility Setup Assistant.

Read The Entire Document

Reach for this when your screen reader carries its own navigation and search tools and you know them better than Acrobat's. Inside the Accessibility Setup Assistant, its equivalent is the Read The Entire Document At Once option.

For Large Documents, Only Read The Currently Visible Pages

On by default, this one generally suits screen-reader users tackling long or intricate PDFs. It lets Acrobat serve up a short document whole while falling back on page-by-page delivery once the document grows large. The For Large Documents, Only Read The Currently Visible Pages option in the Accessibility Setup Assistant is its match.

Confirm Before Tagging Documents

Switch this on and you get to approve the chosen options before Acrobat readies an untagged document for reading. Tagging eats time, all the more so on bigger documents. Within the Accessibility Setup Assistant, this maps to the Confirm Before Tagging Documents option.

Read Out Loud Options

Adjust preferences here to govern the volume, speed, and pitch of the Read Out Loud voice. The default voice is one option, or you can switch to any voice your operating system makes available. The up and down arrows let you step through blocks of text too. There are no equivalents for these in the Accessibility Setup Assistant.

### Navigate and control the application with the keyboard

The keyboard can stand in for the mouse when you move around. Mac OS offers a number of keyboard access features; consult your operating system's documentation for specifics. Over on Windows, a few of the keyboard shortcuts for getting around Acrobat aren't the same as those in other Windows programs.

Launch Acrobat inside a web browser and keyboard commands route to the browser before anything else. As a result, certain shortcuts either won't function in Acrobat or only kick in once you've moved the focus onto the PDF.

For information about accessibility features, see www.adobe.com/accessibility.

### Enable single-key accelerators

A handful of tools and actions can be triggered with single-key accelerators. That said, most of Acrobat's keyboard shortcuts work whether or not single-key accelerators are switched on.

Reach the Preferences dialog box through the hamburger menu (windows), or by picking Acrobat at the top left (macOS). Under Categories, choose General, then turn on Use single-key accelerators to access tools.

Note

Acrobat's single-key accelerators don't function with every screen reader.

### Scroll automatically

Skimming long PDFs — reflowed ones above all — gets simpler with the automatic scrolling feature. Pages advance on their own, no keystrokes or mouse moves required.

- From the hamburger menu (Windows), select View > Page display > Automatically scroll.
- From the top left (macOS), select View > Page display > Automatically scroll.

### Stop automatic scroll

While a PDF is scrolling on its own, here's how to halt it:

- From the hamburger menu (Windows), select View > Page display > Automatically scroll.
- From the top left (macOS), select View > Page display > Automatically scroll.

### Automatically scroll settings

Want a particular scrolling speed? Press a number key — 9 runs fastest, 0 runs slowest.

The Up Arrow and Down Arrow keys speed the scroll up or slow it down, which one depending on the direction it's moving.

Press the minus sign (-) key to flip the scrolling direction.

The Left Arrow and Right Arrow keys jump you to the previous or next page.

### Save as accessible text for a braille printer

Note

Throughout this document, "braille printer" stands for any device that turns accessible text into a format usable by someone who is blind or has low vision.

A PDF can be saved as accessible text for output on a braille printer. From there, a braille translation application can import that accessible text and print it as formatted grade 1 or grade 2 braille. Details are in the documentation that ships with the braille translator.

No images or multimedia objects survive in a text version of a PDF. That said, where alternate text descriptions were supplied for such objects, the text version of an accessible PDF preserves them.

Select the hamburger Menu (Windows), or the File menu (macOS) > Export a PDF > Text (Accessible).

### Reflow a PDF

Reflowing a PDF lets you show it, for the moment, as one column matching the document pane's width. Reading then becomes easier on a mobile device, or under magnification on an ordinary monitor, with no need to scroll sideways to follow the text.

Saving, editing, and printing are all off the table while a document sits in Reflow view.

Generally only readable text turns up in the reflow view. The text that stays put covers forms, comments, digital signature fields, and page artifacts like page numbers, headers, and footers. A page mixing readable text with form or digital signature fields won't reflow at all. Vertical text comes out flowing horizontally.

Before reflowing an untagged document, Acrobat tags it temporarily. As the author, you can prepare your PDFs for reflow by tagging them in advance. Tagging keeps text blocks reflowing properly and holds content to the right sequence, so a reader can trace a story across separate pages and columns without other stories breaking in.

For a fast look at a document's reading order, open it in Reflow view.

(Acrobat Pro) When a tagged PDF won't reflow the way you intend, look for inconsistencies in the file's content order or reading order. Examine the tagging too. The Content pane and the Reading Order tool are both available for sorting out reflow trouble.

Headings and columns (left) reflow in a logical reading order (right).

Headings and columns (left) reflow in a logical reading order (right)

### Reflow a tagged PDF

Open the hamburger Menu (Windows) and head to View, or choose View at the top left (macOS). Then pick Zoom > Reflow.

Choosing Reflow view while the Page Display setting sits at Two Page View flips that setting to Single Page View on its own once the document reflows. Likewise, if the Page Display setting is Two Page Scrolling when you choose Reflow view, it switches automatically to Enable Scrolling as the document reflows.

### Return to unreflowed view

From Reflow view, open the hamburger Menu (Windows) and head to View, or choose View at the top left (macOS). Then pick Zoom > Reflow.

### Reading a PDF with a screen reader

Assistive software and hardware — screen readers and screen magnifiers among them — let visually impaired users work with computer programs, and Acrobat supports them. To boost readability while such tools are running, Acrobat attaches temporary tags to open PDFs. Tuning how Acrobat behaves with the particular assistive software and hardware you rely on is the job of the Accessibility Setup Assistant. With a screen reader active, you can revise the reading settings for the document at hand by going to All tools > Prepare for accessibility > Change reading options.

Look over the documentation that came with your assistive software or device. The vendor is another resource — reach out for details on system and compatibility requirements and on pairing the software or device with Acrobat.

A deeper guide to working with screen readers lives at www.adobe.com/accessibility/pdfs/accessing-pdf-sr.pdf.

### Read a PDF with Read Out Loud

Text inside a PDF — comments and the alternate text descriptions for images and fillable fields included — gets voiced aloud by the Read Out Loud feature. With tagged PDFs, the order of reading follows the document's logical structure tree. For untagged documents, that order is deduced, unless the Reading preferences already spell one out.

Whatever voices sit installed on your system are what Read Out Loud draws on. Should you have SAPI 4 or SAPI 5 voices on hand from text-to-speech or language software, they're available to read your PDFs.

Note

Read Out Loud is no screen reader, and certain operating systems offer no support for it.

### Activate or deactivate Read Out Loud

Read out loud has to be switched on before it will work. You can switch it back off to give system resources back and help other operations run more smoothly.

Open the hamburger Menu (Windows) and head to View, or choose View at the top left (macOS). From there, pick either:

Read out loud > Activate Read Out Loud.

Read out loud > Deactivate Read Out Loud.

The Select Object tool offers another way to find text. Move through the document with the up, down, left, and right arrow keys. Wherever the Select Object tool lands — on a heading or a paragraph, say — you'll hear it.

### Read a PDF with Read Out Loud

1. Navigate to the page that you want to read.
   Open the hamburger Menu (Windows) and head to View, or choose View at the top left (macOS). From there, pick either:

Read out loud > Read this page only.

Read out loud > Read to end of document.

### Read PDF form fields out loud

Open the Preferences dialog, switch to its Reading panel, and within the Read Out Loud Options section turn on Read Form Fields.

Once you are in the PDF form, a press of Tab lands you on its first field.

Fill in or pick values wherever the form calls for them, then advance field by field with Tab, repeating until nothing is left to complete. For checkboxes and radio buttons, the current on/off state gets spoken aloud as you reach each one.

Whatever you type is not voiced back as you go. A screen reader is what you need if you want your typed input read to you.

### Interrupt reading out loud

Open the hamburger Menu (Windows), or on macOS choose View from the top-left, to reach the View commands. From there, pick either of these:

Read out loud > Pause.

Read out loud > Stop.

### About operating system accessibility tools

Accessibility tools in Windows

Bundled into the Windows operating system are utilities that broaden or substitute the ways you reach what's shown on screen. Narrator serves as a pared-down screen reader, while Magnifier handles on-screen enlargement.

The Microsoft accessibility website goes into greater depth on what Windows offers here.

Accessibility tools in macOS

macOS likewise ships with utilities that broaden or substitute the ways you reach what's shown on screen.

The Apple® Inc. accessibility website goes into greater depth on what macOS offers here.

### More like this

- Keys for navigating a PDF
- Keys for selecting tools
- Keys for working with comments
- Keys for general navigating
- Keys for working with navigation panels
- Keys for navigating the Help window
- Keys for accessibility
- Accessibility features

## Acrobat notifications

Search Last updated on Feb 26, 2026 | Also applies to Acrobat Reader, Document Cloud

What Acrobat notifications usually carry is news that a document you put up for viewing, reviewing, or signing has shifted in status. Any move made on such a document triggers an alert, covering every request for documents going out from you or arriving to you. The instant a document's status or workflow activity changes, both parties — sender and recipient alike — get the word. On top of that, a once-a-day summary of your notifications arrives by email.

### Notification bell icon

Across three places — the Acrobat desktop app, plus the mobile Acrobat Reader and the web-based Document Cloud — the bell sits beside the Profile menu in the top-right corner. A red badge appears on it whenever fresh notifications are waiting, and clicking it pulls up the full list.

Note

The notifications are visible to Creative Cloud members from within the Creative Cloud desktop app as well.

### OS notifications

### Notifications on Windows

On Windows 10, every system notification and quick action is gathered together in Action Center, and that includes alerts from Acrobat or Acrobat Reader.

Clicking such a notification inside Action Center brings up Acrobat or Acrobat Reader and carries out whatever action goes with it — a review notification, for instance, opens the review file in the app.

Note

Showing Acrobat or Acrobat Reader notifications in Action Center works on Windows 10 RS1 and later.

### Notifications on macOS

On macOS, Notification Center gives you a single view of application alerts, holding each one until you finish the action tied to it. Every Acrobat or Acrobat Reader notification turns up there.

Clicking a notification in Notification Center brings up Acrobat or Acrobat Reader and runs the matching action — say, a review notification opens the review file in the app.

Note

Support for Acrobat or Reader notifications in Action Center covers macOS v10.11, 10.12, and 10.13.

### Notification panel

Clicking the bell brings your notifications up in the Notification panel. So that anything arriving since you last looked stands out, the newest ones are highlighted. Every notification takes the form of a card carrying the relevant details.

What gets shown for each kind of workflow is laid out in the tables that follow.

### Review workflow

Workflow

Notification

Document sent or shared: (invitation to review)

Take action

@mention tags

Take action (for the named reviewer)

Recipient comment activity: comments and replies added, modified, resolved, or deleted

Task completed

The recipient clicks Done to indicate that the review is finished

Task completed

| --- | --- |

### Share and track

Workflow

Notification

Document shared or sent: delivered

Take action

| --- | --- |

### Sign workflow

Workflow

Notification

Document sent for signature

Take action (for the recipient)

Signer either approves, declines, delegates, accepts, fills, or acknowledges the agreement

Task completed (for the sender)

Reminder to take action (Sign or Approve)

Take action

Signer viewed email

The document was opened by signer (for the sender)

Document sent to signer email bounced

Email to signer bounced. Check email address (for the sender)

Agreement expired

The deadline for the document has expired (for both sender and the signer)

| --- | --- |

Note

- Acrobat desktop - Sign notifications for enterprise users are not currently available.
- Acrobat Reader Mobile - Sign notifications for agreements that you send for signature using the mobile app is not currently available. However, you receive notifications for sign agreements that you receive for signing.

### Fill, sign, and send workflow

Workflow

Notification

Document shared/sent

Take action (for recipient)

Recipient views the document

Task completed (for the sender)

| --- | --- |

## Install Acrobat

Walk through downloading and setting up Adobe Acrobat on your machine by way of either the Acrobat 64-bit Installer or the Acrobat Unified Installer.

On Windows, the Acrobat 64-bit Installer puts Acrobat in place on its own. The Acrobat Unified Installer instead bundles Acrobat and Reader into one package, which streamlines deployment and management. That unified package suits anyone wanting both applications side by side, though serial number-based licensing isn't something it handles.

Getting Adobe Acrobat onto your system comes down to two downloads depending on platform — on Windows the Acrobat 64-bit Installer, on macOS the Acrobat Unified Installer — followed by the install steps. Once it's installed, signing in with your Adobe ID unlocks the features your subscription covers — whether that's Acrobat Standard or Acrobat Pro.

Note

For a full Acrobat install that forces a mandatory sign-in, the package can be pulled down through the Adobe Creative Cloud Desktop Application (CCDA).

## Create PDF Spaces on mobile

Find out how PDF Spaces let you organize content intelligently and run AI-powered analysis inside Acrobat on mobile.

With PDF Spaces, all your files sit together in a single location while AI pulls the important insights forward, sparing you from reading every word. Drop in PDFs, documents, links, or text, then pose questions or build summaries that draw on your content alone for sharper results. Shape the Overview to steer recipients toward what counts most and help them grasp your material faster.

## Create podcasts in Acrobat on mobile

Find out how to convert your documents into lively audio podcasts.

Read on to learn more about podcasts in Adobe Acrobat and the way PDF Spaces become podcasts.
