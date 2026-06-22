# Cep 11.X — Debugging Handbook, Issues

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_11`_x_Documentation_Debugging_20Handbook_md — 1. Mac; raw_githubusercontent_com_Adobe_`CEP_CEP_R`esources*master*`CEP_11`\_x_Documentation_Issues_md.

## raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_11`\_x_Documentation_Debugging_20Handbook_md — 1. Mac

### 1.1 Checking & Editing Logging Settings

- **Set Log Level to 6:** `defaults write com.adobe.CSXS.11 LogLevel 6`
- **Check Log Level:** `defaults read com.adobe.CSXS.11 LogLevel`

### 1.2. Extension Folders

- **System Extension Folder:** `/Library/Application Support/Adobe/CEP/extensions`
- **User Extension Folder:** `~/Library/Application Support/Adobe/CEP/extensions`
- **Product Extension Folders:** `${PP}/CEP/extensions`

### 1.3. Logs Folder

- **CEP Logs Folder:** `~/Library/Logs/CSXS`
- **CEP Log Name Format:** CEP`<Version Number>`-`<Product ID>`.log
  - **Example:** CEP11-ILST.log
- **CEPHTMLEngine Broser Log Name Format:** CEPHTMLEngine-`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`.log
  - **Example:** CEPHtmlEngine11-ILST-26.0.3-com.adobe.illustrator.OnBoarding.log
- **CEPHTMLEngine Renderer Log Name Format:** CEPHTMLEngine-`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`-renderer.log
  - **Example:** CEPHtmlEngine11-ILST-26.0.3-com.adobe.illustrator.OnBoarding-renderer.log

### 1.4. Crash Dump

- Locate crash dumps in the [Console application](https://support.apple.com/guide/console/welcome/mac).

### raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_11`\_x_Documentation_Debugging_20Handbook_md — 2. Windows

### 2.1. Checking & Editing Logging Settings

- **Set Log Level to 6:** `regedit` > `HKEY_CURRENT_USER/Software/Adobe/CSXS.11` > Set `LogLevel` as `6`
- **Check Log Level:** `regedit` > `HKEY_CURRENT_USER/Software/Adobe/CSXS.11`

### 2.2. Extensions Folders

- **System Extension Folder:** `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`
- **User Extension Folder:** `%AppData%\Roaming\Adobe\CEP\extensions`
- **Product Extension Folders:** `${PP}\CEP\extensions`

### 2.3. Logs Folders

- **CEP Logs Folder:** `%temp%`
- **CEP Log Name Format:** CEP`<Version Number>`-`<Product ID>`.log e.g CEP11-ILST.log
- **CEPHTMLEngine Broser Log Name Format:** CEPHTMLEngine-`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`.log
  - **Example:** CEPHtmlEngine11-ILST-26.0.3-com.adobe.illustrator.OnBoarding.log
- **CEPHTMLEngine Renderer Log Name Format:** CEPHTMLEngineCEPHTMLEngine-`<versionNumber>`-`<HostID>`-`<HostVersion>`-`<ExtensionID>`-renderer.log
  - **Example:** CEPHtmlEngine11-ILST-26.0.3-com.adobe.illustrator.OnBoarding-renderer.log

### 2.4 Crash Dump

- `%AppData%\Roaming\Adobe\CRLogs\dumps`

### raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_11`\_x_Documentation_Debugging_20Handbook_md — 3. Debugging Tools

- Add a file named [.debug](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/`CEP_11`.x/Documentation/.debug) at the root of the extension folder. Put that folder in one of these locations:
  - **Mac:** `/Library/Application Support/Adobe/CEP/extensions`
  - **Windows:** `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`
- Example contents:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  ```

## raw*githubusercontent_com_Adobe*`CEP_CEP_R`esources*master*`CEP_11`\_x_Documentation_Issues_md

# CEP 11 Known Issues & FAQ

### The items below list known CEP issues. Keep them in view while building an extension...

### Issue 1 (CEP 11) : evalScript callback is not triggered in cross-site iFrames

Beginning with CEP-11, JavaScript cannot access a cross-origin `<iframe>`. The browser same-origin policy blocks scripts from reaching frames that use a different origin.

An origin counts as Cross-Site when any of these address components differs:
`protocol://hostname:port/...`
To access a frame, your domain must match protocol, hostname, and port.

**Workaround**
Although the same-origin policy prevents direct script access to content from another origin, pages that you control on both sides can exchange messages with window.postMessage and the related message event:

In the Cross-Site `<iframe>` child, call:

`mainFrameWindow.postMessage(/*any variable or object or evalscript*/, 'http://your-main-site.com');`

The second argument to postMessage() may be '\*' when no destination-origin preference is specified. Prefer an explicit target origin whenever possible, so the data you send is not exposed to an unintended site.

In your main page:

```
window.addEventListener('message', event => {
    // IMPORTANT: check the origin of the data!
    if (event.origin.startsWith('http://your-cross-site-iframe.com')) {
        // The data was sent from your site.
        // Data sent with postMessage is stored in event.data:
        console.log(event.data);
        // We can also invoke evalScript sent from Cross-site frame [CEP]
        var script=event.data;
        CSInterface.evalScript(script);
    }
    else {
        // The data was NOT sent from your site!
        // Be careful! Do not use it. This else branch is
        // here just for clarity, you usually shouldn't need it.
        return;
    }
});
```

The same messaging pattern works in both directions by adding a listener in the cross-site child frame and returning responses from the Mainframe. It can also be used to run CEP EvalScript from cross-site child frames: send the EvalScript as an event from the Cross-Site child frame to the Main Page, then invoke EvalScript from the Main Page/Frame.

### Issue 2 (CEP 11): UI issues with cross-site iFrames

Recent CEF versions introduced [Site Isolation](https://www.chromium.org/Home/chromium-security/site-isolation), so **cross site iframes** run in their own CEF renderer process.

Some inter-process communication from that renderer process does not reach the browser process. This can cause UI glitches such as tabbing, hover, shortcuts, and clipboard problems. `dispatchEvent` is affected as well.

**Workaround**: Extensions that hit these problems can add the `--disable-site-isolation-trials` command line parameter to the manifest. This turns off Site Isolation features. As a side effect, some checks for **cross origin iframes** might not run, which can allow parent-frame access to the cross origin iframe.

```
+ <Parameter>--disable-site-isolation-trials</Parameter>

```

**Note**: Treat this as temporary; a future CEF update may disable this parameter.

### Issues existing in CEP 9 and above

### Issue 3 : Drag events not fired while debugging an extension.

    Workaround: Turn off screencast by choosing "Toggle device Toolbar" in the chrome inspect window.
    After that, drag operations can still work while the extension is being debugged.

[Figure: Toggle device Toolbar](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/`CEP_11`.x/Documentation/images/issues/dragDebug.png)

### Issue 4:

On Windows, cep.fs.stat() cannot access a file larger than 4GB.

### Issue 5: CEP capped to 30fps

On Mac, CEF clamps frame rate to 30 fps. For performance reasons, CEP does not alter that configuration.
One possible workaround is to add --disable-frame-rate-limit as CEFCommandLineArgs in manifest.xml, but this is not recommended because it turns vsync off and can generate an uncontrolled number of frames. CPU and GPU usage can be maxed out, causing display hangs and stutter.

---

### FAQ

- **CEP 10 to CEP 11 migration Guidelines: [CEP 10 to CEP 11](cep-11-1-html-extension-cookbook.md)**

- **When a similar error appears in the debug console, confirm\verfiy these items**

  [Figure: require not function](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/`CEP_11`.x/Documentation/images/issues/requireNotFunction.png)

  - Verify that CEPEngine_extensions.js is NOT integrated in your extension

  - Node may be crashing. Update node_modules with the CEP 11-supported [node release](cep-11-1-html-extension-cookbook.md).
