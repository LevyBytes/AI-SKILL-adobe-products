# Cep 12.X — Debugging Handbook, Issues

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_12`_x_Documentation_Debugging_20Handbook_md — 1. Mac; raw_githubusercontent_com_Adobe_`CEP_CEP_R`esources*master*`CEP_12`\_x_Documentation_Issues_md.

## raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_12`\_x_Documentation_Debugging_20Handbook_md — 1. Mac

### 1.1 Checking & Editing Logging Settings

- **Set Log Level to 6:** `defaults write com.adobe.CSXS.12 LogLevel 6`
- **Check Log Level:** `defaults read com.adobe.CSXS.12 LogLevel`

### 1.2. Extension Folders

- **System Extension Folder:** `/Library/Application Support/Adobe/CEP/extensions`
- **User Extension Folder:** `~/Library/Application Support/Adobe/CEP/extensions`
- **Product Extension Folders:** `${PP}/CEP/extensions`

### 1.3. Logs Folder

- **CEP Logs Folder:** `~/Library/Logs/CSXS`
- **CEP Log Name Format:** CEP`<Version Number>`-`<Product ID>`.log
  - **Example:** CEP12-ILST.log
- **CEPHTMLEngine Broser Log Name Format:** CEPHTMLEngine-`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`.log
  - **Example:** CEPHtmlEngine12-ILST-26.0.3-com.adobe.illustrator.OnBoarding.log
- **CEPHTMLEngine Renderer Log Name Format:** CEPHTMLEngine-`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`-renderer.log
  - **Example:** CEPHtmlEngine12-ILST-26.0.3-com.adobe.illustrator.OnBoarding-renderer.log

### 1.4. Crash Dump

- Crash dumps are available in the [Console application](https://support.apple.com/guide/console/welcome/mac).

### raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_12`\_x_Documentation_Debugging_20Handbook_md — 2. Windows

### 2.1. Checking & Editing Logging Settings

- **Set Log Level to 6:** `regedit` > `HKEY_CURRENT_USER/Software/Adobe/CSXS.12` > Set `LogLevel` as `6`
- **Check Log Level:** `regedit` > `HKEY_CURRENT_USER/Software/Adobe/CSXS.12`

### 2.2. Extensions Folders

- **System Extension Folder:** `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`
- **User Extension Folder:** `%AppData%\Roaming\Adobe\CEP\extensions`
- **Product Extension Folders:** `${PP}\CEP\extensions`

### 2.3. Logs Folders

- **CEP Logs Folder:** `%temp%`
- **CEP Log Name Format:** CEP`<Version Number>`-`<Product ID>`.log e.g CEP12-ILST.log
- **CEPHTMLEngine Broser Log Name Format:** CEPHTMLEngine-`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`.log
  - **Example:** CEPHtmlEngine12-ILST-26.0.3-com.adobe.illustrator.OnBoarding.log
- **CEPHTMLEngine Renderer Log Name Format:** CEPHTMLEngineCEPHTMLEngine-`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`-renderer.log
  - **Example:** CEPHtmlEngine12-ILST-26.0.3-com.adobe.illustrator.OnBoarding-renderer.log

### 2.4 Crash Dump

- `%AppData%\Roaming\Adobe\CRLogs\dumps`

## raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_12`\_x_Documentation_Issues_md

# CEP 12 Known Issues & FAQ

### Known CEP issues to account for when building extensions

### Issue 1 (CEP 12) : CSInterface's version specific APIs show incorrect Operating System Version

CSInterfaces API cannot detect the OS version accurately for Win 11, Mac OS 12(only arm), and Mac OS 13 (both intel and arm), due to limitations in the underlying CEF layer. On those platforms, CEP 12 will not show correct OS version details.

### Note:

Win 10 and Mac OS versions earlier than v11 are not affected.

### Issue 2 (CEP 12): SharedArrayBuffer changes can't be accessed if Cross-Origin isolation is disabled

Extensions may render blank when they use SharedArrayBuffer while Cross-Origin isolation is disabled. The issue began in CEF 91 and is also present in CEF 99.
More detail is available [here](https://github.com/browserify/node-util/issues/58)

### Issue 3 (CEP 12) : Flicker during a resize around the corners of a CEP Panel

CEP drawing has moved from OpenGL to Metal. With Metal, panel content is rescaled by default whenever panel size changes.
Most clients, however, preferred the earlier CEP behavior, where panel resizing did not rescale content and pixels beyond bounds were simply filled. Back-porting that behavior to Metal creates some side effects, so flicker can appear around a panel corner during resize in some cases.

---

### FAQ

- **Use the migration Guidelines for [CEP 11 to CEP 12](cep-12-html-extension-cookbook.md)**

- **When a similar error appears in the debug console, confirm\verfiy these items**

  [Figure: require not function](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/`CEP_12`.x/Documentation/images/issues/requireNotFunction.png)

  - Confirm that CEPEngine_extensions.js is NOT integrated in your extension
  - Node might be crashing. Update node_modules to the CEP 12 supported [node version](cep-12-html-extension-cookbook.md).

- **Known issues from CEP 11 also apply to CEP 12. Refer [here](cep-documentation-2.md)**
