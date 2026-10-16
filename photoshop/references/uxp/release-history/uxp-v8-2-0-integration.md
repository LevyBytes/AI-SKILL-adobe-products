# UXP v8.2.0 Integration

> #### New
>
> - **File System Stream Support**
>   UXP now supports [`fs.createReadStream`](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/fs/index.md), so large file uploads can stream without requiring the full file in memory.
>
> #### Updated
>
> - **[`XMLHttpRequest`](../network-and-data/xml-http-request/reference-index.md) Enhancement**
>   The standard states are available for `XMLHttpRequest`: `UNSENT`, `OPENED`, `HEADERS_RECEIVED`, `LOADING`, `DONE`. Access to XMLHttpRequest state variables works in these forms.
>   XMLHttpRequest.`HEADERS_RECEIVED` -> It should not return undefined but return 2.
>   XMLHttpRequest.prototype.OPENED -> It should return 1.
>   (new XMLHttpRequest()).LOADING -> It should return 3.
> - **File System Improvements**
>   UXP filesystem support now covers all valid characters, including special characters such as pound(#), improving compatibility with varied file naming conventions.
