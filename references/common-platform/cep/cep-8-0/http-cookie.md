# HTTP Cookie

CEP supports two cookie categories:

- Session Cookies - Temporary in-memory cookies that expire and disappear when the user closes the extension.
- Persistent Cookies - Cookies stored on the user's file system without an expiry date or validity interval.

Persistent Cookies location:

- CEP 4.x
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cookies\`
  - Mac: `/Users/<USERNAME>/Library/Logs/CSXS/cep_cookies/`
- CEP 5.x
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
  - Mac: `/Users/<USERNAME>/Library/Logs/CSXS/cep_cache/`
- CEP 6.x and later releases
  - Windows: `C:\Users\<USERNAME>\AppData\Local\Temp\cep_cache\`
  - Mac: `/Users/<USERNAME>/Library/Caches/CSXS/cep_cache/`

Each persistent cookie is stored as a file. The file name uses `HostID_HostVersion_ExtensionName`, such as `PHXS_15`.0.0_com.adobe.extension1.
