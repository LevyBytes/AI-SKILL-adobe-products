# spawn

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | F |

Generates a fresh page in the document, modeled on the template.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) The 0-based page index after which, or on which, the new page lands — which of the two depends on bOverlay. The default is 0. |
| bRename | (optional) Controls whether the page’s form fields get renamed. The default is true. |
| bOverlay | (optional) When true (the default), the template lays over the named page. When false, it slots in as a fresh page ahead of the named one. To tack a page onto the document, give bOverlay a value of false and point nPage at the document’s page count. - With certified documents, or documents holding Advanced Form Features rights, the bOverlay parameter is switched off. Such document types cannot have a template laid over them. |
| oXObject | (optional, Acrobat 6.0) Feed this parameter the value an earlier spawn call handed back. |

Returns

Up through versions before Acrobat 6.0, nothing came back from this method. These days, spawn hands back an object standing for the page contents of the page it spawned. You can then feed that return object as the optional oXObject parameter on later spawn calls.

Note

Spawning one page over and over can balloon the file size. The workaround: spawn now returns an object representing the spawned page’s contents. Pass that return value as the oXObject parameter on subsequent spawn method calls to spawn the very same page.

Example 1: Spawn every template and tack each onto the document’s end one after another.

```javascript
var a = this.templates;
for (i = 0; i < a.length; i++)
    a[i].spawn(this.numPages, false, false);
```

Example 2 (Acrobat 6.0)

Spawn one template 31 times by way of the oXObject parameter and the return value. Going this route keeps the file size from ballooning.

```javascript
var t = this.templates;
var T = t[0];
var XO = T.spawn(this.numPages, false, false);
for (var i=0; i<30; i++) T.spawn(this.numPages, false, false, XO);
```
