# Access The App, Preferences And Settings

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Download font and spelling packs; Update Acrobat automatically; Update Adobe Acrobat manually; Acrobat Express for enterprise and teams; Set Acrobat as the default PDF program; Change display themes; Change Acrobat language; Customize side panels; Customize Quick action toolbar; Keyboard shortcuts; Turn the new Acrobat on or off; Set Acrobat update preferences.

## Download font and spelling packs

### Getting font and spelling dictionary packs onto your version of Acrobat — download and install steps.

With font and spelling packs in place, you can read and work in documents whose languages aren't on your system, and they let you edit, comment, or fill out forms in cases where the document carries no embedded fonts.

Pin down your Acrobat track, version, and release year, then grab the font and spelling pack that matches.

Select Menu > Help > About Adobe Acrobat.

Note

Which product name turns up in your menu comes down to your subscription.

Within the product details dialog box, read the Version number to work out the release year and the track ID.

Look up your product's release year and track in the table that follows, then pull down the packs you need.

Product

Release year

Track

Download links

Acrobat Reader 64-bit on Windows

2023

Continuous

Font and spelling pack

2022

Continuous

Font and spelling pack

2021

Continuous

Font and spelling pack

Acrobat Reader 32-bit on Windows

2023

Continuous

Font pack

Spelling pack

2022

Continuous

Font pack

Spelling pack

2021

Continuous

Font pack

Spelling pack

2020 and 2019

Continuous

Font pack

Spelling pack

2018, 2017, and 2015

Continuous

Font pack

Spelling pack

Acrobat or Acrobat Reader on macOS

2023

Continuous

Font pack

Spelling pack

2023 Rosetta Independent on ARM machines

Continuous

Font pack

Spelling pack

2022

Continuous

Font pack

Spelling pack

2022 with Mac M1 support

Continuous

Font pack

Spelling pack

2021

Continuous

Font pack

Spelling pack

2020 and 2019

Continuous

Font pack

Spelling pack

2018, 2017, and 2015

Continuous

Font pack

Spelling pack

2020.20 and later

Classic

Font pack

Spelling pack

2020.18 and earlier

Classic

Font pack

Spelling pack

2017.19 and later

Classic

Font pack

Spelling pack

2017.18 and earlier

Classic

Font pack

Spelling pack

2015

Classic

Font pack

Spelling pack

| --- | --- | --- | --- | --- |

## Update Acrobat automatically

### Turning on automatic updates for Acrobat — here's how.

Launch Adobe Acrobat.

Select Menu (Windows) or Acrobat (macOS) > Preferences > Updater.

Select the Automatically install updates checkbox.

Select OK.

From here on, Acrobat looks for the important updates and puts them in by itself, which keeps your software current and protected.

## Update Adobe Acrobat manually

### Checking for and installing Acrobat updates by hand, so you get the newest features and security fixes.

On a regular basis, Adobe Acrobat and Acrobat Reader can look for the important updates and install them on your behalf. When automatic updating is switched off, checking for the newest updates by hand is still an option.

Note

Out of the box, Acrobat Reader updates itself automatically. The preferences offer no UI control to change that behavior.

### Windows

Launch Adobe Acrobat.

Select Menu > Help > Check for updates.

Select Download if an update is available.

Follow the on-screen instructions to download the update.

If prompted, select Quit Acrobat and then select Retry to complete the update.

Once the update finishes installing, select Close from the Update successful dialog box.

### macOS

Launch Adobe Acrobat.

Go to Help > Check for updates.

When an update is offered, choose Yes.

Once the Update successful dialog box appears, click OK.

## Acrobat Express for enterprise and teams

This walkthrough covers rolling out Adobe Acrobat Express across enterprise and teams setups — what you need in place beforehand, how licenses get handed out, and the configuration controls available to administrators.

Aimed at working professionals, Adobe Acrobat Express is a subscription bundle that folds Adobe Express Premium, Acrobat AI Assistant, and PDF Spaces into a single product. It ships in English to users everywhere and runs on desktop, web, and mobile. The bundle pulls together the following capabilities so you can move quicker and work more effectively:

- Unified platform: brings document handling, AI-driven insights, and creative content production under one roof.
- AI Assistant and PDF Spaces: lets you summarize documents fast, work together with others, and set up intelligent workspaces.
- Adobe Express Premium: backs on-brand content production with templates plus generative AI for imagery and presentations.

### Deploying licenses for Acrobat Express

Start by making sure the newest build of Acrobat is in place and configured for English — the only language supported right now — before any Acrobat Express rollout. If you need them, the basic configuration settings and the Adobe Acrobat installation guide cover the setup steps.

The rollout itself runs through the Admin Console. Bring users in with any supported method, bulk upload included. Once you've built the product profiles you need, hand Acrobat Express out to those users. Packaging apps via the Admin Console has the full details.

With the rollout complete, users sign in using the email address tied to their enterprise or teams account, which activates their license. From inside Acrobat, they can reach Adobe Express, AI Assistant, and PDF Spaces directly.

### User access management

Both user access and licensing are handled by administrators from the Admin Console.

Customizing Product Profiles

A Product Profile is what ties a license to a given user and opens up Acrobat Express features along with cloud services for that person.

Turning off particular features means filing a request with Adobe Customer Support. Be aware that such changes stick permanently — to switch a feature back on later, you'd have to build fresh assignments and hand out the licenses again.

Automatic Provisioning

Rules that assign licenses on their own are configured from the Admin Console at Products > Products Access Automation > Automatic Assignment Rules.

### Identity types and authentication

User authentication runs on Adobe's identity management system. These are the identity types it supports:

- Federated ID: owned by the organization and tied to its enterprise directory through SAML2 Identity Provider (IdP) single sign-on.
- Enterprise ID: owned by the organization but hosted on Adobe's side, with Adobe carrying out the authentication.
- Adobe ID: owned by the individual end user, with Adobe carrying out the authentication.

To get at Acrobat Express features, a user has to sign in with either an enterprise ID or a federated ID.

### Data handling and security

For Acrobat Express, Adobe puts robust data-handling and security practices in place:

- Responsible AI Ethics: every feature — even ones that lean on third-party LLMs — falls under Adobe's Responsible AI Ethics governance, anchored in accountability, responsibility, and transparency. Our blog has more.
- Data encryption: data stays encrypted both at rest and in transit. Through the Adobe Privacy Policy, enterprises may ask for their data to be deleted ahead of schedule.
- Feedback mechanism: in-app like/dislike buttons let users weigh in on the AI's responses.

For the particulars on how it works — data handling, storage, processing, data flow, and encryption — see our Security factsheet.

## Set Acrobat as the default PDF program

This guide shows you how to make Adobe Acrobat or Acrobat Reader the program that opens PDFs by default on Windows and macOS.

When both Acrobat and Acrobat Reader are present, point the default at Acrobat. Any version you've installed will do, though moving up to the newest one gives you the smoothest experience.

### Windows

Right-click the name of a PDF file and pick Properties.

When the <file-name> Properties dialog box appears, choose Change.

That Change button can be greyed out if an administrator controls these settings — in that case sign in with an admin account or reach out to your administrator.

That Change button can be greyed out if an administrator controls these settings — in that case sign in with an admin account or reach out to your administrator.

Pick Adobe Acrobat out of the app list, then choose Set default.

Note

Should Acrobat Reader be the only one installed, pick Acrobat Reader instead.

Back in the <file-name> Properties dialog box, choose OK.

### macOS

Right-click the name of a PDF file and pick Open With > Other.

When the dialog box opens, drill into Acrobat DC > Adobe Acrobat.

Tick the Always Open With checkbox, then choose Open.

Either Adobe Acrobat or Acrobat Reader can serve as your default PDF viewer.

Either Adobe Acrobat or Acrobat Reader can serve as your default PDF viewer.

From now on, your PDFs open in Acrobat or Acrobat Reader without further prompting.

## Change display themes

This guide walks through tailoring how Adobe Acrobat looks by switching its display themes.

### Windows

Open Acrobat and select Menu > View > Display theme.

Pick whichever of these themes suits you:

- System theme: the default choice. Acrobat mirrors whatever theme your operating system uses, and if you flip the OS theme while Acrobat is running, Acrobat shifts along with it automatically.
- Light grey: renders every interface element plus the document background in light grey.
- Dark grey: easier on the eyes, clearer in dim surroundings, and gentler on battery life. Its coverage spans the whole interface — top menu, context menus, scroll bar, and comments pane included.

### macOS

Open Acrobat and select View > Display theme.

Pick whichever of these themes suits you:

- System theme: the default choice. Acrobat mirrors whatever theme your operating system uses, and if you flip the OS theme while Acrobat is running, Acrobat shifts along with it automatically.
- Light grey: renders every interface element plus the document background in light grey.
- Dark grey: easier on the eyes, clearer in dim surroundings, and gentler on battery life. Its coverage spans the whole interface — top menu, context menus, scroll bar, and comments pane included.

## Change Acrobat language

This guide explains how to set up the language preferences for Acrobat on the desktop.

### Windows

Select Control Panel > Programs > Programs and Features.

Find Acrobat in the application list, select it, then select Change.

When the dialog box opens, choose Modify followed by Next.

Open up the list to see the available languages, then mark the one you'd like to add.

Choose This feature will be installed on the local hard drive.

This adds Acrobat in whichever language you prefer.

This adds Acrobat in whichever language you prefer.

Select Install.

Select Finish.

### macOS

Launch Adobe Acrobat.

Select Acrobat > Preferences > Language.

From the Application Language drop-down menu, pick the language you'd like, then select OK.

For the change to take effect, restart Acrobat.

## Customize side panels

This guide covers tailoring the side panels in Acrobat on the desktop so the experience fits how you work.

Acrobat lets you arrange the side panels so the tools you reach for most while working in a document stay within easy reach.

Open a PDF and right-click anywhere on the right panel to bring up the customization menu.

Out of the options shown, check the panels you'd like visible and uncheck the ones you'd rather hide.

Through the side panel settings, you control which tools show up in the right-hand pane — among them AI Assistant, Generative Summary, and Comment.

Through the side panel settings, you control which tools show up in the right-hand pane — among them AI Assistant, Generative Summary, and Comment.

Selecting Reset side panels returns everything to the default layout.

## Customize Quick action toolbar

This guide explains how to tailor the Quick action toolbar in Adobe Acrobat.

Tools you use often sit close at hand on the Quick action toolbar. To match it to the way you work, you can add tools, take them away, and shuffle their order.

On the Quick action toolbar, choose Add, remove, or reorder tools > Customize toolbar.

Within the Customize toolbar dialog box:

- Adding a tool: select it in the right pane, then choose Add to Toolbar
- Removing a tool: select it in the toolbar list, then choose Remove from Toolbar
- Reordering tools: select a tool and move it with the up and down arrow keys
- Grouping tools: choose Add Divider to Toolbar to drop in a separator

The Customize Toolbar dialog is where you add, remove, or reorder tools.

The Customize Toolbar dialog is where you add, remove, or reorder tools.

Select Save.

## Keyboard shortcuts

Here you'll find the key keyboard shortcuts for moving through tools, task panes, documents, forms, comments, and more in Acrobat on the desktop.

For a full rundown, turn to the tables grouped by category — they lay out the keyboard shortcuts that let you get around and work faster in desktop Acrobat. The categorized tables cover shortcuts for tools, task panes, documents, forms, accessibility, and beyond.

Note

Single-key shortcuts have to be switched on first: go to Menu (Window) or Acrobat (macOS) > Preferences. In the Preferences dialog box, choose General, then enable the option labeled Use single-key accelerators to access tools.

### Keys for navigating tools on the tools pane

### Keys for accessing and switching between tools

### Keys for navigating task panes

### Keys for adding, selecting, and navigating comments

### Keys for scrolling, zooming and jumping between PDF pages

### Keys for filling out and navigating forms

### Keys for managing and navigating PDF portfolios

### Keys for general navigation

### Keys for working with navigation panels

### Keys for searching and browsing the Help window

### Keys for improving accessibility and screen reader navigation

### Keys for working with forms

Aside from a handful of exceptions flagged here and there in Help, Acrobat behaves the same on Windows as on macOS. Beyond that, keep the following differences in mind.

### Common keyboard functions on Windows and macOS

### Expand a nested list

Things like Bookmarks may show up in nested lists you can open or close. On macOS, clicking the right-pointing triangle beside the icon expands a list; the down-pointing triangle collapses it. To open or close every level of a multilevel list at once, option - click the triangle.

## Turn the new Acrobat on or off

This guide explains how to switch the new Acrobat experience on or off.

With the redesigned Adobe Acrobat experience, tools are easier to find and common PDF jobs are streamlined — the aim being to boost productivity and keep things easy to use. Depending on what suits your workflow, you can move back and forth between the new look and the classic one.

### Switch to new Acrobat experience

Select View > Enable new Acrobat.

When the Restart Acrobat dialog box appears, choose Restart to bring up the new experience.

### Revert to the classic Acrobat experience

Going back to the experience you had before takes one menu choice:

- Windows: Select Menu > Disable new Acrobat
- macOS: Select View > Disable new Acrobat

A Restart Acrobat dialog box then appears; choose Restart and the older experience loads.

## Set Acrobat update preferences

### Walk through configuring automatic-update behavior and adding the optional components you want installed.

### Windows

Start by opening Acrobat.

Select Menu > Preferences > Updater.

Updates install on their own out of the box; clear Automatically install updates if you'd rather they didn't.

Want the extras? Select Install optional components to pull in pieces such as Preflight, 3D plugin, XPS2PDF, multimedia plugin, and AutoCAD PDFM.

Select OK.

### macOS

Start by opening Acrobat.

Select Acrobat > Preferences > Updater.

Select Automatically Install Updates to let updates apply on their own.

Select OK.
