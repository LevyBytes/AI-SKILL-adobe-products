# HTTP Cookie

CEP supports these two cookie types:

- Session Cookies - temporary in-memory cookies; they expire and disappear when the user closes the extension
- Persistent Cookies - cookies stored in the user's file system without an expiry date or validity interval

Persistent Cookies location:

     - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
     - macOS: `/Users/<USERNAME>/Library/Caches/CSXS/cep_cache/`

Each persistent cookie is stored as a file named with `HostID_HostVersion_ExtensionName`, such as `PHXS_15`.0.0_com.adobe.extension1.
