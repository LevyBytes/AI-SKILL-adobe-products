# exportXFAData

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | F |

Draws out the document’s XFA data, if there is any, and writes it to an XDP file.

Note

To export XFA data from Adobe Reader, the document is required to carry export form rights.

Whenever the cPath parameter is given, batch, console, and menu events are the only contexts in which this method may run. See Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| cPath | (optional) A device-independent path for the file. The path may be taken relative to the document. Omit this parameter and a dialog box lets the user pick the file. These conditions must hold for the path: - It has to be a safe path (refer to Safe path). - When bXDP is true, the file name must carry an .xdp extension. - When bXDP is false, the file name must carry an .xml extension. Failing these conditions, this method raises a NotAllowedError (refer to Error object) exception. |
| bXDP | (optional) When true (the default), the data goes out in XDP format. Otherwise it goes out as plain XML data. |
| aPackets | (optional) An array of strings naming which packets the XDP export includes. This parameter matters only when bXDP is true. The allowed strings are: template datasets stylesheet xfdf sourceSet pdf config _ Naming pdf embeds the PDF file; otherwise the XDP file carries only a link to it. Naming xfdf brings annotations into the XDP file (since that packet relies on XFDF format). The _ entry pulls every packet into the XDP file. Even so, the pdf packet defaults to being included by reference . Embedding the PDF file inside the XDP file requires naming pdf among the packets outright. - (Save rights required) Exporting in XDP format from Adobe Reader calls for document save rights solely when pdf is named explicitly. This parameter defaults to: ["datasets", "xfdf"]. |

Example: Export XFA data. Every packet figures in the following example; the PDF document, though, is referenced rather than embedded:

```javascript
this.exportXFAData({
    cPath: "/c/temp/myData.xdp",
    bXDP: true,
    aPackets: ["*"]
})
```

Here every packet figures in, and this time the PDF document is embedded inside the XDP file.

```javascript
this.exportXFAData({
    cPath: "/c/temp/myData.xdp",
    bXDP: true,
    aPackets: ["*","pdf"]
})
```
