# Acrobat Distiller Overview, Manage Conversion Queue, Set Watched Folders, Pdf Presets Overview ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Acrobat Distiller overview; Create PDFs using Acrobat Distiller; Create Watched Folders in Acrobat Pro; Adobe PDF presets overview; PostScript to PDF conversion guidelines.

## Acrobat Distiller overview

### Learn about Acrobat Distiller for converting PostScript files into PDFs.

The job of Acrobat Distiller is to turn PostScript files into PDF documents. Beyond the basic conversion, it hands you fine-grained control: conversion settings are yours to adjust, security choices are yours to manage, and the whole process can be wired up to run automatically.

Configuration of the PDF conversion settings is spread across the several regions of the Acrobat Distiller window (Windows).

Configuration of the PDF conversion settings is spread across the several regions of the Acrobat Distiller window (Windows).

A. Menus B. Adobe PDF settings files C. Files in job queue D. Failed job E. Context menu F. Status window

### Key features

- Conversion settings: Pick one of the ready-made Adobe PDF settings or build your own to govern items such as image resolution, color management, and compatibility level.
- Security options: Fold protection straight into the conversion. During PDF creation you can require a password, define permissions, and switch on encryption.
- Font management: Hold a consistent look from one system to the next by embedding fonts, trim file size by subsetting them, and step in to handle font substitution whenever it's called for.
- Queue management: Stack up a series of PostScript files for batch processing so that converting many files happens automatically instead of one at a time, which lifts productivity.

### Watched Folders

With Watched Folders in Acrobat Distiller, PDF creation runs on its own whenever a stack of PostScript files needs converting. Drop or save a PostScript file into a Watched Folder and Distiller turns it into a PDF without further prompting. Every Watched Folder pairs an In folder, which receives the PostScript files, with an Out folder, which holds the finished PDFs.

As many as 100 Watched Folders can be tracked by Acrobat Distiller at once. Its own Adobe PDF Settings and security settings can be assigned to each watched folder and apply to everything processed there. Where they conflict, a watched folder's security settings win out over Distiller's. To illustrate, a PostScript file flagged read-only that lands in a watched folder will not be converted by Distiller.

## Create PDFs using Acrobat Distiller

### Learn how to convert PostScript files to PDF using Acrobat Distiller.

For turning files into PDFs, Acrobat Distiller gives you advanced control, letting you tune PDF quality, file size, and security to taste. Because it handles a lone file or a whole batch and lets you manage a conversion queue, it suits both one-off documents and high-volume PDF production.

### Windows

Choose Start > All Programs > Acrobat Distiller.

Within Acrobat Distiller, go to Settings > Security to adjust the encryption level to whatever you need.

Go to File > Open and pick the file you intend to convert.

Down at the bottom, the Acrobat Distiller pane reports on the conversion — start time, distill time, and where the converted file ended up.

Down at the bottom, the Acrobat Distiller pane reports on the conversion — start time, distill time, and where the converted file ended up.

Choose Open.

In the Confirm Security dialog box, choose OK.

Queued multiple files for conversion? Reach for any of these controls to manage them:

- Choose Pause to halt processing for the moment.
- Choose Resume to pick processing back up.
- To pull a file out of the queue, select it and then choose Cancel Job(s).
- Right-click the job queue and choose Explore to open the folder that holds the selected files.
- Double-click an entry in the job queue to open a converted PDF.
- Right-click the job queue and choose Clear History to empty it.
- Right-click the job queue and choose Save list to keep a record of the queue history.

### macOS

Choose Finder > Applications > Adobe Acrobat > Acrobat Distiller.

Within Acrobat Distiller, go to Settings > Security to adjust the encryption level to whatever you need.

Go to File > Open and pick the file you intend to convert.

Choose Open.

In the Confirm Security dialog box, choose OK.

Queued multiple files for conversion? Reach for any of these controls to manage them:

- Choose Pause to halt processing for the moment.
- Choose Resume to pick processing back up.
- To pull a file out of the queue, select it and then choose Cancel Job(s).
- Double-click it in the job queue to open a converted PDF.
- Choose Clear List to empty the queue.

## Create Watched Folders in Acrobat Pro

### How to have Acrobat Distiller turn PostScript files into PDFs on its own through Watched Folders.

Set a PostScript file down in a Watched folder and the sequence runs itself: Acrobat Distiller spots the file, converts it to a PDF, and relocates that PDF to an output folder. Each such folder accepts its own security settings, conversion parameters, and file-handling choices, giving you an automated yet tailorable route from PostScript to PDF.

Within Acrobat Distiller, go to Settings > Watched Folders.

Choose Add Folder, then point to the folder you want to watch.

Inside that target folder, Distiller sets up an In folder alongside an Out folder.

When a folder needs its own security rules, select it and choose Edit Security.

Dial in the security preferences you want and choose OK.

Note

Should you want to undo a folder's security preference, select that folder and choose Clear Security.

Adobe PDF conversion settings for a watch folder come from selecting the folder and then choosing Edit Settings.

Adjust whatever you need in the Adobe PDF Settings dialog box and choose OK. Your choices are written out as a folder.joboptions file inside the watched folder.

Already have Adobe PDF Settings saved? Select the folder, choose Load Settings, pick the setting you want, and choose Load.

To stop watching a folder, select it and choose Remove folder.

Note

Pulling a watched folder from the list leaves the in and out folders and the folder.joboptions file untouched on your system; clear them out yourself if you wish.

Choose OK.

## Adobe PDF presets overview

### A look at the ready-made setting groups that weigh quality against file size as Acrobat Distiller builds PDFs.

A preset bundles together settings that steer how a PDF gets built, and Adobe PDF presets are exactly that. The point of each bundle is to weigh file size against quality according to where the PDF will end up. They keep every PDF turned out across an organization, or for one project, holding to the same quality and compatibility baseline. Custom presets are yours to build and pass around to match your own output needs. Here is what Adobe PDF presets govern as a PDF is made:

- How widely the result stays compatible across Adobe Acrobat releases
- The way images are compressed and downsampled
- Whether fonts get embedded and subset
- Conversion of color
- The output intent — print production or on-screen viewing, for example

### Types of Adobe PDF presets

Several ready-made presets ship with Acrobat Distiller, each tuned to a particular job:

- High-Quality Print: Aimed at desktop printers and proofing, this keeps images crisp, embeds every font, and holds colors steady — the right pick for printing documents whose graphics carry fine detail.
- Oversized Pages: Built for big drawings such as blueprints; it handles documents larger than 200 x 200 inches and keeps the detail sharp when output goes to large format.
- PDF/A-1b: 2005 (CMYK and RGB): Meant for long-term storage, this embeds all fonts and pins colors to CMYK or RGB — well suited to keeping documents for years to come.
- PDF/X-1a (2001 and 2003): Geared to professional printing, it embeds all fonts and locks down color sets for top-grade output — ideal where colors must come out exactly right.
- Press Quality: Turns out high-grade PDFs for digital printing, keeping images sharp and setting colors for professional presses — the choice for commercial print runs.
- Rich Content PDF: Produces PDFs carrying extras like links and bookmarks; it embeds all fonts and reads well on screen, making it fit for interactive documents and stronger accessibility.
- Smallest File Size: Makes compact PDFs bound for websites or email by dropping image quality and possibly leaving some fonts out — best when files must load quickly online.
- Standard: Targets office printers or handoff on a CD, striking a middle ground between quality and file size for routine use where you want respectable quality without bulky files.

### About PDF/X, PDF/E, and PDF/A standards

The International Organization for Standardization (ISO) authored the specialized PDF/X, PDF/E, and PDF/A standards so that PDFs would satisfy particular requirements. Reliable printing for the publishing trade is the aim of PDF/X; PDF/E targets the exchange of engineering documents; and PDF/A serves the long-term archiving of electronic files. Convert a file to PDF under one of these standards and Acrobat tests whether it satisfies the standard you picked. Where a PDF falls short of compliance, the choice is yours: fix the file or go ahead and produce a version that isn't compliant. By following them you keep your PDFs fit for their purpose — be that high-quality printing, joint engineering work, or lasting digital preservation.

## PostScript to PDF conversion guidelines

### Best practices for putting PostScript files through Adobe Acrobat Distiller on the way to PDF.

Following the PostScript-to-PDF conversion guidelines sharpens the whole process, so the PDFs you end up with stay high in quality while file size stays in check and the document stays intact.

### Guidelines for creating PostScript files

Keep these best practices in mind as you ready PostScript files for PDF conversion in Adobe Acrobat Pro:

- Reach for PostScript Language Level 3 so the richest PostScript features are available to you.
- Set the Adobe PDF printer as the PostScript printer you print to, which keeps compatibility at its best through the conversion.
- On Windows, make sure every font the document relies on travels with the PostScript file so the text stays faithful.
- Give the PostScript file the same name as the source document, only with a .ps extension tacked on; certain applications turn out a .prn extension in its place.
- Stick with the color and custom page sizes from the Adobe Acrobat Distiller PPD file — lean on a different PPD and you risk wrong colors, fonts, or page sizes in the finished PDF.
- Ship PostScript files as 8-bit binary data whenever they move between machines, all the more so across unlike platforms; doing so heads off the trouble that comes when line feeds and carriage returns get swapped.

### Guidelines for compressing and downsampling images

As you prepare PostScript files for PDF conversion, lean on these best practices to keep image compression and resolution under control:

- Reach for ZIP compression on text, line art, and pictures dominated by flat areas of solid color, which holds their clarity and sharpness.
- Reach for JPEG compression on photographs and images whose colors shade gently, trimming file size while the visual quality survives.
- Reach for CCITT Group 3 or 4 compression on scanned monochrome documents, and Run Length compression on black-and-white images carrying broad solid areas.
- Reach for bicubic downsampling on photographic images, where weighted pixel averaging yields smoother gradients.
- Reach for subsampling when image quality matters less and speed matters more, since it grabs one representative pixel out of each sample area.
- Hold the resolution near 300 dpi at low compression for print output, which keeps image quality high.
- Drop the resolution to somewhere between 72 and 150 dpi at higher compression for screen or web output, which shrinks file size.
- Give individual images their own compression and downsampling settings when it helps, so background and foreground elements can be tuned apart from each other.
- Drop Distiller parameters into the PostScript file to steer how images are treated — for instance, set the resolution through the ImageResolution parameter ahead of each image.

Note

For the inserted Distiller parameters to take effect, head to the Advanced panel within Distiller's Adobe PDF Settings dialog box and switch on Allow PostScript file to override Adobe PDF settings. With it on, those parameters take precedence over whatever you chose in the Adobe PDF dialog box.
