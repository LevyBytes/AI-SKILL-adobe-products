# Known And Fixed Issues

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Troubleshoot; Known and fixed issues.

## Troubleshoot

### Launch and crash issues

Submit a crash report

Crash or Error 2 when saving documents

Launch issues after Windows update

InDesign Rosetta version won't open in future macOS releases

App launch issues on Windows

App running slower than usual

Damaged fonts crash errors

Corrupt VCRuntime crash error

Crash during print setup on Windows

Crash while working with remote libraries

Crash while using GPU rendering on macOS

Crash, freeze, or app open issues at launch

Authentication failure

Crash due to font issues

Crash on lost network connection

Access denied errors

Startup crash loop

Crash on launch while recovering a damaged document

### File and output issues

Can't open PDF files created in InDesign

File already open error

Damaged or corrupt documents

Insufficient system memory errors

Unable to export InDesign files to PDF

Recover InDesign documents

Printing and PDF export errors

PDF export fails when downsampling large images

Graphics appear pixelated, fuzzy, or grainy

Received an error when working with HEIF or HEIC files

Adobe Print Engine output failures

Page and layout options unavailable

Can't open documents in previous versions

Error codes while using publish online

InDesign PDF export hangs in the background

InDesign documents won't print

### Font and plugin issues

Missing font error

Third-party plugin issues

### Settings, interface, and feature issues

Feature keyboard shortcuts don't work

InDesign preferences and support file locations

Data merge fails with absolute paths on macOS

Pages panel scroll bar missing or UI elements disappear

Missing user dictionaries

Error 195 during InDesign installation

InDesign Server activates as Developer Edition

InDesign Server license fails after VM move

InDesign Server licensing issues

### Cloud collaboration and web issues

Creative Cloud issues with InDesign

Issues sharing documents for review

HTML preview unavailable

Known and fixed issues

## Known and fixed issues

Use the InDesign known-issues page to check active bug status and find remedies for reported failures.

The page lists Adobe InDesign bugs that the development team is still working on, plus items that have recently been fixed.

As releases address problems or new reports become known, the status information is refreshed, so return regularly when you need the newest update.

### System-wide issues

Can't view the outdated Alt Text icon for cropped images in existing documents

Resolved

| App version | All versions |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

Existing documents with cropped images do not show the outdated Alt Text icon.

Next steps

Apply the available workaround in that article.

InDesign crashes or encounters Error 2 on Windows

Resolved

| App version | All versions |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

On Windows, InDesign may crash or show Error 2.

Next steps

Apply the available workaround in that article.

InDesign crash issues with Egnyte on macos

Resolved

| App version | All versions |
| --- | --- |
| Impacted device types | macOS |
| Last updated | None |

Summary

Working from documents saved on Egnyte can cause InDesign to crash.

Next steps

When opening a cloud-storage file from Egnyte causes a crash, package the InDesign file on the desktop and continue from the local copy.

GIF item, when anchored to a text frame, the img.\_idGenObjectAttribute has a height value in px.

Resolved

| App version | Adobe InDesign 21.1 and later |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

For a GIF anchored to a text frame, img.\_idGenObjectAttribute records its height in px.

Next steps

In Sigil, replace the px value manually with a percentage value.

Interactive elements are dropped from the EPUB Reflowable format for None object option.

Resolved

| App version | Adobe InDesign 21.1 and later |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

The EPUB Reflowable export omits interactive content such as Animation, object state, and buttons when None object option is used.

Next steps

Use Relative to Text Flow object option when exporting.

InDesign 2025 (version 20.0) and later crashes when launched using Rosetta2.

Resolved

| App version | Adobe InDesign 20.0 and later |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

Launching InDesign 2025 (version 20.0) and later through Rosetta2 on M1/M2/M3 Max Apple Silicon leads to a crash because Rosetta2 is unsupported.

Next steps

- Workaround 1: On Mac, run InDesign 2025 (version 20.0) and later on Apple silicon or Intel-based Mac.
- Workaround 2: Move macOS to Sequoia before running InDesign 2025 (version 20.0).
- Workaround 3: If the Mac remains on older macOS Ventura and Sonoma, return to InDesign 2024.

For smooth operation of InDesign 2025 (version 20.0) and later, consult the current Adobe InDesign technical requirements and the revised macOS specifications.

InCopy crashes while working with Assignments.

Resolved

| App version | Adobe InCopy 20.0 and later |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

Assignments work in InCopy can trigger crashes.

Next steps

macOS 15.6 includes the fix.

InCopy 2025 (version 20.0) and later crashes when launched using Rosetta2.

Resolved

| App version | Adobe InCopy 20.0 and later |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

Launching InCopy 2025 (version 20.0) and later with Rosetta2 on M1/M2/M3 Max Apple Silicon crashes because Rosetta2 is not supported.

Next steps

- Workaround 1: On Mac, run InCopy 2025 (version 20.0) and later on Apple silicon or Intel-based Mac.
- Workaround 2: Update macOS to Sequoia before working with InDesign 2025 (version 20.0).
- Workaround 3: On older macOS Ventura and Sonoma systems, go back to InCopy 2024.

For stable operation of InCopy 2025 (version 20.0) and later, review the Adobe InCopy system requirements with the updated macOS specifications.

InDesign crashes when text with paragraph style and shading attribute is viewed in Copy Editor.

Resolved

| App version | Adobe InDesign 19.2 and later |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

Viewing text in Copy Editor can crash InDesign when that text uses a paragraph style with a paragraph shading attribute.

Next steps

Install macOS Sonoma14.5 or later.

InDesign crashes intermittently when Story Editor is opened for a long text document.

Resolved

| App version | Adobe InDesign 19.2 and later |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

Opening Story Editor for a long text document can intermittently crash InDesign.

Next steps

Install macOS Sonoma14.5 or later.

InCopy crashes intermittently for InDesign and InCopy assignment workflow.

Resolved

| App version | Adobe InCopy 19.2 and later |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

The InDesign and InCopy assignment workflow can produce intermittent InCopy crashes.

Next steps

Install macOS Sequoia15 or later.

InDesign 2024 and InDesign 2023 have the same GUID when installed in Windows.

Resolved

| App version | Adobe InDesign 19.0 |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

On Windows installations, InDesign 2024 and InDesign 2023 share the same GUID.

Next steps

After installing InDesign 19.0.1, upgrade to InDesign 18.5.1 so the configuration is corrected.

The screen turns white when selecting text in CPU Preview and Overprint Preview modes in macOS Sonoma.

Resolved

| App version | Adobe InDesign 18.x and 19.0 |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | None |

Summary

In macOS Sonoma, the screen may go white when marquee-selecting layout objects or selecting text with the Text tool while using CPU Preview and Overprint Preview modes.

InDesign 2024 and InDesign 2023 have the same GUID when installed in Windows.

Next steps

After installing InDesign 19.0.1, upgrade to InDesign 18.5.1 so the configuration is corrected.
