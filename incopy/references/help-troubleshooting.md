# Troubleshoot Corrupt Incopy Documents, Unable To Open Icap Files

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Troubleshoot corrupt InCopy documents; Unable to open .icap files — Issue.

## Troubleshoot corrupt InCopy documents

With random InCopy documents (Old/New), periodic Check In and Check Out activity can damage the underlying structure of `.icml` files. The problem occurs when an extra `<xml></xml>` node is added automatically at an unpredictable location inside an `.icml` document.

### To fix these corrupt InCopy documents follow below steps

Close InCopy and the file you are currently editing.

Download UltraEdit or TextEdit on Mac/Windows.

Open the corrupted icml file in TextEdit or UltraEdit.

Press Ctrl+F and search for this node entry:

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>

When this same node entry appears a second time:

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>

delete the text beginning with the second instance of the tag

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>

and continue deleting through the first instance of the tag </Document>

Save the icml file, then open the icml file in InCopy or place it in InDesign so work on the document can continue.

## Unable to open .icap files — Issue

In InCopy CC 2019, opening a package (.icap) file may fail with this message:

An error occurred opening the package file.

### Unable to open .icap files — Windows

Close Adobe InCopy CC 2019.

Download CopyPlugin_Win.zip, then extract its contents to the desktop.

In the extracted folder, locate CopyPlugin.vbs and double-click it.

When the browser prompt appears, choose the Adobe InCopy CC 2019 application folder.

Select OK.

After InCopy updates successfully, the plug-in is installed and a message appears. Select OK.

Start InCopy CC 2019 and open the package (.icap) file.

### Unable to open .icap files — macOS

Close Adobe InCopy CC 2019.

Download CopyPlugin_MAC.zip, then extract its contents to the desktop.

From the extracted folder, locate CopyPlugin_MAC.app and double-click it.

When prompted to browse, select Adobe InCopy CC 2019.app.

Select Choose.

After InCopy updates successfully, the plug-in is installed and a message appears. Select OK.

Start InCopy CC 2019 and open the package (.icap) file.
