# HTTP Cookie

CEP works with two cookie types:

- Session Cookies - temporary in-memory cookies that expire and vanish when the user closes the extension
- Persistent Cookies - cookies with no expiry date or validity interval; CEP stores them on disk

Persistent Cookies location:

     - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
     - macOS: `/Users/<USERNAME>/Library/Caches/CSXS/cep_cache/`

CEP stores each persistent cookie in its own file. The naming pattern is `HostID_HostVersion_ExtensionName`, for example `PHXS_15`.0.0_com.adobe.extension1.
