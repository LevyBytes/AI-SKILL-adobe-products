# Known Fixed Issues, Compatibility Warning Macos

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Known and fixed issues in Adobe Acrobat; Acrobat compatibility warning for Rosetta on Mac with Apple Silicon.

## Known and fixed issues in Adobe Acrobat

Get up to speed on where Acrobat's known and fixed issues currently stand.

Acrobat launches in minimized state

Fixed

| App version | Acrobat 25.001.21223 |
| --- | --- |
| Impacted device types | Windows |
| Last updated | - |

Summary

At startup, Acrobat shows up minimized and only the Quick action toolbar is visible.

Next steps

Bring Acrobat up to its newest version.

Acrobat crashes while using Seclore Desktop Client

Open

| App version | Acrobat DC 2023 |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | - |

Summary

Pairing Acrobat with a Seclore Desktop Client below version 3.21.8.0 makes it crash.

Next steps

Move the Seclore client up to its newest build; should the crash continue, remove the client entirely.

Acrobat crashes while using IntoWords plugin

Open

| App version | Acrobat DC 2023 |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | - |

Summary

A crash occurs when the IntoWords build in use predates version 1.16.7.1.

Next steps

Clear it up by bringing IntoWords to version 1.16.7.1 or newer; otherwise, take the plugin off.

Acrobat crashes while using Pitstop Pro plugin

Open

| App version | Acrobat DC 2023 |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | - |

Summary

Having the Pitstop Pro plugin in place makes Acrobat crash.

Next steps

Switch off or remove the Pitstop Pro plugin and open Acrobat again to settle this.

Acrobat crashes while using an ImageRight plugin

Open

| App version | Acrobat DC 2023 |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | - |

Summary

When an ImageRight plugin older than version 25.1.1.206 is present, Acrobat crashes.

Next steps

Get ImageRight onto version 25.1.1.206 or newer to clear this. Where the crash sticks around, switch the plugin off or remove it, then open Acrobat afresh.

- Turning the ImageRight plugin off starts with getting Acrobat to its newest version; from there go to Menu > Preferences, select Plugins from the left menu, select the Disable ImageRight Plugin checkbox, and then select OK.
- Removing ImageRight is done from Control Panel > Programs > Programs and Features, where you select ImageRight Adobe Plug-In, and select Uninstall.

Content credentials missing after Firefly workflows

Open

| App version | Acrobat DC 2024 |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | - |

Summary

After a generate image or generative fill workflow, redacting, protecting, compressing, or optimising the document leaves content credentials off at the document level, even though they remain at the image level.

Next steps

A fix is underway on our side; look back here before long for the latest.

PDF email actions open old Outlook

Open

| App version | Acrobat DC 2024 |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | - |

Summary

Triggering a PDF email action in Acrobat brings up the old Microsoft Outlook rather than the new one. Even with the new Outlook chosen as your default mail handler, it is the old Outlook that still launches.

Next steps

We are actively resolving this; revisit this page shortly for any news.

Delay in opening web links in Acrobat sandbox version on macOS

Open

| App version | Acrobat DC 2024 |
| --- | --- |
| Impacted device types | macOS |
| Last updated | - |

Summary

From the sandboxed Acrobat build on macOS releases before Sonoma, web links are slow to open. Clicking a link meant to launch in an outside browser leaves users waiting noticeably.

Next steps

The advice from Apple is to move up to the newest macOS release. Failing that, bring up Activity Monitor, find the Apple appleeventsd process, and end it. Learn more about how to resolve the delay in opening web links on macOS sandbox.

Slow advanced search on cloud documents

Open

| App version | Acrobat DC 2024 |
| --- | --- |
| Impacted device types | Windows, macOS |
| Last updated | - |

Summary

On a document pulled from the cloud, advanced search runs very slowly.

Next steps

Engineering is working through a fix; check again soon for an update.

## Acrobat compatibility warning for Rosetta on Mac with Apple Silicon

Understand the reason macOS flags an Acrobat compatibility warning on Apple silicon Macs, what the message signifies, and how to move between native and Rosetta modes.

Launching Acrobat on an Apple Silicon Mac that runs macOS 26.4 or later may bring up this system notification:

The wording can throw you off, giving the impression that Acrobat won't run on Apple Silicon. In reality Acrobat keeps working as usual on your Mac, and there is nothing you need to do.

Applies to

Acrobat DC and Acrobat Classic 2024 versions.

### Cause

Acrobat does run natively on Apple Silicon Macs. That said, a few circumstances can push it into Rosetta emulation instead:

- While Acrobat is installing or updating
- When older third‑party plug‑ins or scanner drivers are in play
- When compatibility settings have followed over from a Mac built on Intel
- Whenever the Acrobat features in use have no native-mode support yet
- With Open using Rosetta switched on for the Acrobat app

In any of those cases, macOS might surface a Rosetta or compatibility warning even while Acrobat runs fine on your system.

### Check whether Acrobat is running in native Apple Silicon mode or Rosetta

In Finder, choose Applications from the panel on the left.

Open the folder named Adobe Acrobat DC.

Give Adobe Acrobat a right-click and choose Get info.

Beneath General, look at the Open using Rosetta option:

Unchecked: the app is running as a native Apple Silicon build.

Checked: the app is going through Rosetta emulation.

### Switch Acrobat to native Apple Silicon mode

From Finder's left-hand panel, pick Applications.

Browse to the Adobe Acrobat DC folder and open it up.

Control-click Adobe Acrobat, then pick Get info.

Clear the Open using Rosetta checkbox.

Quit Acrobat and start it again.
