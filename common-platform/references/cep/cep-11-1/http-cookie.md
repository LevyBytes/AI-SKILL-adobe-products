# HTTP Cookie

CEP handles two cookie types:

- Session Cookies - temporary in-memory cookies that expire and disappear when the user closes the extension
- Persistent Cookies - cookies without an expiry date or validity interval; they are saved on disk under the user's file area

Persistent Cookies are stored here:

     - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
     - macOS: `/Users/<USERNAME>/Library/Caches/CSXS/cep_cache/`

A persistent cookie is written as a file. Its name follows `HostID_HostVersion_ExtensionName`, for example `PHXS_15`.0.0_com.adobe.extension1.
