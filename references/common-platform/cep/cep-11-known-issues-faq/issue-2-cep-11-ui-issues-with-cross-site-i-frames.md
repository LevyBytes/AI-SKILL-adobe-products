# Issue 2 (CEP 11): UI issues with cross-site iFrames

Recent CEF versions introduced [Site Isolation](https://www.chromium.org/Home/chromium-security/site-isolation), so **cross site iframes** run in their own CEF renderer process.

Some inter-process communication from that renderer process does not reach the browser process. This can cause UI glitches such as tabbing, hover, shortcuts, and clipboard problems. `dispatchEvent` is affected as well.

**Workaround**: Extensions that hit these problems can add the `--disable-site-isolation-trials` command line parameter to the manifest. This turns off Site Isolation features. As a side effect, some checks for **cross origin iframes** might not run, which can allow parent-frame access to the cross origin iframe.

These are version-specific parameter excerpts under CEFCommandLine.

```xml
<Parameter>--disable-site-isolation-trials</Parameter>
```

**Note**: Treat this as temporary; a future CEF update may disable this parameter.
