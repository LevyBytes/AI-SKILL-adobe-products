# iconStreamFromIcon

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Takes an XObject-based Icon object and produces from it an Icon Stream object.

Parameters

| Parameter | Description |
| --- | --- |
| oIcon | The Icon object that gets converted, yielding an Icon Stream object. |

Returns

Icon Stream object

By way of this method, an icon pulled from the Doc importIcon or getIcon methods becomes usable in a method like app.addToolButton, which on its own would take nothing but an Icon Stream object as input.

Example: Bring an icon into the document-level named icons tree and attach a toolbutton to the application.

```javascript
this.importIcon("myIcon", "/C/temp/myIcon.jpg", 0);
var oIcon = util.iconStreamFromIcon(this.getIcon("myIcon"));
app.addToolButton({
    cName: "myButton",
    oIcon: oIcon,
    cExec: "console.println('My Button!');",

     cTooltext: "My button!",
    nPos: 0
});
```
