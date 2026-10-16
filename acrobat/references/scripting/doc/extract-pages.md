# extractPages

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Builds a fresh document out of pages lifted from the current one. Leave the page range unspecified and the method lifts every page in the document.

Compare deletePages, insertPages, and replacePages.

Note

Whenever the cPath parameter is given, this method may run only during a batch and console event, or by way of an external call (OLE, for instance). See Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| nStart | (optional) A 0-based index marking where the range of pages to lift from the source document begins. Give only nStart and the range collapses to the single page nStart names. |
| nEnd | (optional) A 0-based index marking where the range of pages to lift from the source document ends. Give only nEnd and the range runs from 0 through nEnd. |
| cPath | (optional) The device-independent path the new document is saved to. The path name may be taken relative to where the current document sits. - The cPath parameter is required to be a safe path (refer to Safe path) and to carry a .pdf extension. Failing those security conditions, this method raises a NotAllowedError (refer to Error object) exception and does not complete. |

Returns

With cPath left unspecified, the Doc for the new document comes back; otherwise the return is the null object.

Example: The batch sequence below walks each selected file, lifts out every page, and saves each one into a folder under a unique name. It might serve, say, when a client’s one-page bills come off an application bundled together in a single PDF file. The client wants the pages split apart for distribution or for separate print runs.


```javascript
/* Extract pages to folder */
// Regular expression used to acquire the base name of file
var re = /.pdf$/i;
// filename is the base name of the file Acrobat is working on
var filename = this.documentFileName.replace(re,"");
try {for (var i = 0; i < this.numPages; i++)
        this.extractPages({
            nStart: i,
            cPath: "/F/temp/"+filename+"_" + i +".pdf"
        });
} catch (e) { console.println("Aborted: " + e) }
```
