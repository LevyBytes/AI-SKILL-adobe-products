# HTTP Cookie

CEP handles two cookie types:

- Session Cookies - temporary in-memory cookies that expire and disappear when the user closes the extension
- Persistent Cookies - cookies stored in the user's file system without an expiry date or validity interval

Persistent Cookies location:

- CEP 4.x
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cookies\`
  - macOS: `/Users/<USERNAME>/Library/Logs/CSXS/cep_cookies/`
- CEP 5.x
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
  - macOS: `/Users/<USERNAME>/Library/Logs/CSXS/cep_cache/`
- CEP 6.x and later releases
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
  - macOS: `/Users/<USERNAME>/Library/Caches/CSXS/cep_cache/`

Each persistent cookie is stored as a file. The file name format is `HostID_HostVersion_ExtensionName`, for example `PHXS_15`.0.0_com.adobe.extension1.
