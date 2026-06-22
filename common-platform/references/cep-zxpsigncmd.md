# 4.1.103, 4.1.2, 4.1.3, Knownissue2024

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master_ZXPSign`CMD_4_1_103_R`eleaseNotes_md; raw_githubusercontent_com_Adobe*`CEP_CEP_R`esources_master_ZXPSign`CMD_4_1_2_R`eleaseNotes_md; Installation Instructions; November 2024 Cross-platform ZXP Signing Compatibility Known Issue and Workaround.

## raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources_master_ZXPSign`CMD_4_1_103_R`eleaseNotes_md

Build Number: 4.1.103
**Build Information**

Product : ZXPSign

Subproducts : Command Line-OpenSSL1.1, Library-minimal-OpenSSL1.1, Library-OpenSSL1.1, Dynamic-library-OpenSSL1.1, Dynamic-lib-minimal-OpenSSL1.1

Version : 4.1

Build : 103

The ZXPSignLib Windows build was produced with Visual Studio 2015 and MT Flags.

**Changes In this build**

This build moves OpenSSL from 1.0.2t to 1.1.0l, using Visual Studio 2015 and MT Flags.

**Background**

The main background change is the OpenSSL move from 1.0.2t to 1.1.0l with MT Flags.

## raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources_master_ZXPSign`CMD_4_1_2_R`eleaseNotes_md

Build Number: 4.1.2
**Build Information**

Codex Entry -

Product : ZXPSign

Subproducts : Library-64bit-OpenSSL1.1, Dynamic-lib-64-OpenSSL1.1, Library-minimal-64-OpenSSL1.1, CommandLine-64bit-OpenSSL1.1, Dynamic-lib-min-64-OpenSSL1.1

Version : 4.1

Build : 2

The Mac ZXPSignLib build uses OpenSSL1.1.0l and Xcode10 ( sdk 10.14 ); support is limited to 64-bit binaries.

**Changes In this build**

OpenSSL changed from 1.0.2t to 1.1.0l in a build made with Xcode10 ( sdk 10.14 ).

**Background**

This release is a major OpenSSL update, moving from 1.0.2t to 1.1.0l.

## Installation Instructions

macOS security settings can affect this tool. Sequoia may use a different sequence of steps.

If `"permission denied ./ZXPSignCmd"` appears, try these actions:

- Set permissions on the ZXPSignCmd file with `chmod 777`, or use comparable permission changes.
- On macOS Sonoma, open Settngs -> Privacy and Security, then choose Allow

![macOS cannot verify the
developer of "ZXPSignCmd". Are you sure you want to open it?](SonomaSecurity1.png "macOS cannot verify the developer of ZXPSignCmd. Are you sure you want to open it?")
!["ZXPSignCmd was blocked from use because it is not from an identified developer."
](SonomaSecurity2.png "ZXPSignCmd was blocked from use because it is not from an identified developer.")

- "macOS cannot verify the developer of ZXPSignCmd. Are you sure you want to open it?"
- "ZXPSignCmd was blocked from use because it is not from an identified developer."

## November 2024 Cross-platform ZXP Signing Compatibility Known Issue and Workaround

- [The Problem](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/ZXPSignCMD/KnownIssue2024.md#the-problem)
- [The Workaround](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/ZXPSignCMD/KnownIssue2024.md#the-workaround)
  - [Plugin Users](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/ZXPSignCMD/KnownIssue2024.md#plugin-users)
  - [Plugin Developers](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/ZXPSignCMD/KnownIssue2024.md#plugin-developers)
- [Why is this happening?](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/ZXPSignCMD/KnownIssue2024.md#why-is-this-happening)
- [FAQ](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/ZXPSignCMD/KnownIssue2024.md#faq)
  - [Q. Which versions of Creative Cloud apps are affected?](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/ZXPSignCMD/KnownIssue2024.md#q-which-versions-of-creative-cloud-apps-are-affected)
  - [Q. Does this happen with plugins installed via the Adobe Exchange Marketplace?](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/ZXPSignCMD/KnownIssue2024.md#q-does-this-happen-with-plugins-installed-via-the-adobe-exchange-marketplace)
  - [Q. Is a fix on the way?](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/ZXPSignCMD/KnownIssue2024.md#q-is-a-fix-on-the-way)

### The Problem

Some users see blank panels even though a ZXP plugin installation finishes successfully. ZXP certificate signatures may be treated as invalid after the signing step appeared to complete without error.

**Expected Behavior:** In the historical workflow, ZXP files signed by ZXPSignCmd could be installed and then used successfully through ExManCmd, [UPIA](https://helpx.adobe.com/in/creative-cloud/help/working-from-the-command-line.html), or widely used installers that rely on those tools (e.g., [ZXPInstaller](https://aescripts.com/learn/zxp-installer/), [Anastasiy's Extension Manager](https://install.anastasiy.com/), and others).

### The Workaround

Multiple workarounds are known.

### Plugin Users

Plugin end users can choose either workaround below:

1. Launch the host application, such as Premiere Pro, in administrator mode. Installing the plugin while the host runs with those privileges may let it keep working later without administrator mode.

2. [Set the Debug mode](https://github.com/Adobe-CEP/Getting-Started-guides/tree/master/Client-side%20Debugging#set-the-debug-mode)

**Windows:** Open regedit > `HKEY_CURRENT_USER`/Software/Adobe/CSXS.8, then create a PlayerDebugMode entry with type "string" and value "1". Regedit is located in (C:\Windows\regedit), and CMD can open it too.
[Figure: image](https://github.com/user-attachments/assets/25f9cde0-fc01-44dd-b49a-f3bf57820c48)

**On macOS:** In the Terminal, type: `defaults write com.adobe.CSXS.11 PlayerDebugMode 1`

Terminal is located in (Applications > Utilities > Terminal).

### Plugin Developers

As a plugin developer, replace symlinks in your folders with file paths. Because some node modules use symlinks too, inspect any `node_modules` folders and replace their symlinks as well.

**Other Steps:**

- For now, sign ZXPs on the platform where they will run. Create macOS-bound ZXPs on a macOS machine, and create Windows-bound ZXPs on Windows devices.
- Remove all `.DS_Store` and `__MACOSX` folders/files from your extension directory and its subdirectories. (This connection to the issue has not been confirmed, but distribution through [Adobe's Marketplace](https://exchange.adobe.com/apps/browse/cc) requires this cleanup. [Distribution guidance](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/) describes that process.)

### Why is this happening?

When CEP loads a plugin inside the host application, signature checking is handled through `ZXPSignLib`. If the package was installed through [UPIA](https://helpx.adobe.com/in/creative-cloud/help/working-from-the-command-line.html) or through a UPIA-based installer such as "ZXPInstaller", that verification can fail and the plugin is blocked from loading.

During UPIA installation, any symbolic links (symlinks) inside the plugin package are expanded as ordinary text files that store the path to the original file, rather than the original file's actual contents.

For signature verification, ZXPSignLib replaces symlinks in the extension directory with the files those links target. Because plugin installation occurs in system space, ZXPSignLib needs administrator privileges for that replacement. Running the host application in administrator mode lets the symlinks be replaced with the original files, which clears the issue. After that replacement has happened, signature verification passes and the extension can load even when the application is later started by a non-administrative user.

With ExManCmd-based installs, ZXPSignLib signature verification also ran during installation. Since ExManCmd used elevated permissions, ZXPSignLib could reproduce the symlinks correctly at install time, so the load-time failure did not occur.

### FAQ

### Q. Which versions of Creative Cloud apps are affected?

A. The full affected set is not yet certain, but reports appear more frequently with 2025 versions of application and with plugins that are new or recently updated. Please help track the issue by posting details in [this discussion](https://community.adobe.com/t5/exchange-bugs/cross-platform-zxp-signing-compatibility-known-issue-and-workaround-2024/idi-p/14961412).

### Q. Does this happen with plugins installed via the Adobe Exchange Marketplace?

A. It appears to be less common there. If you run into it, please add a report in [that community discussion](https://community.adobe.com/t5/exchange-bugs/cross-platform-zxp-signing-compatibility-known-issue-and-workaround-2024/idi-p/14961412).

### Q. Is a fix on the way?

A. The team responsible for UPIA is developing a fix. UPIA updates usually ship with the Creative Cloud desktop app, which is at 6.4 at the time this was written. The fix may arrive with 6.5 or earlier. Check this document for updates, or [follow that forum thread](https://community.adobe.com/t5/exchange-bugs/cross-platform-zxp-signing-compatibility-known-issue-and-workaround-2024/idi-p/14961412).
