# importXFAData

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | Yes | F |

Brings in the XFA file you name. importAnXFDF and importTextData are also worth a look.

Note

Batch and console events alone permit this method. See Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| cPath | (optional) The XFA file's device-independent path. That path may sit relative to where the current document is. Leave this parameter off and a dialog box opens for the user to pick the file. |

insertPages

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Drops pages from a source document into the current one. Skip the page range and the method takes every page the source document holds.

deletePages and replacePages are also worth a look.

Note

Batch and console events alone permit this method. See Privileged context. A discussion of JavaScript events sits in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) The 0-based index of the page that the source document pages get inserted after. Pass -1 to slot the pages ahead of the document's first page. |
| cPath | The device-independent path leading to the PDF file that supplies the inserted pages. That path may sit relative to where the current document is. |
| nStart | (optional) A 0-based index setting where an inclusive range of source-document pages to insert begins. Give only nStart and the range narrows to the single page nStart names. |
| nEnd | (optional) A 0-based index setting where an inclusive range of source-document pages to insert ends. Give only nEnd and the range runs from 0 through nEnd. |

Example: Slot a cover page onto the document in play.

```javascript
this.insertPages ({
    nPage: -1,
    cPath: "/c/temp/myCoverPage.pdf",
    nStart: 0
});
```
