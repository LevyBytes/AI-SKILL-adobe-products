# spawnPageFromTemplate

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| deprecated | No | No | D, F |

Note

templates, createTemplate, and the Template object spawn method have taken over from this method.

Creates a page in the document from the supplied template, of the sort getNthTemplate hands back. Adobe Reader does not support the template feature.

Parameters

| Parameter | Description |
| --- | --- |
| cTemplate | The template name. |
| nPage | (optional) The 0-based page number that the template is spawned before or into, which one depending on what bOverlay holds. Omit nPage and a fresh page appears at the document's end. |
| bRename | (optional) Sets whether fields get renamed. Defaults to true. |
| bOverlay | (optional, Acrobat 4.0) When false, the template goes in ahead of the page nPage names. When true (the default), it's laid over the top of that page. |
| oXObject | (optional, Acrobat 6.0) This parameter takes the value returned by a prior spawnPageFromTemplate call. |

Returns

Ahead of Acrobat 6.0, nothing came back from this method. These days it returns an object standing for the page contents of the spawned page. You can then feed that returned object in as the optional oXObject parameter on later spawnPageFromTemplate calls.

Note

Spawning the same page over and over can swell the file size considerably. To sidestep that, spawnPageFromTemplate now hands back an object representing the spawned page's contents. Pass that return value as the oXObject parameter on subsequent spawnPageFromTemplate calls to spawn the same page again.

Example 1: spawn every template page within the current document.

```javascript
var n = this.numTemplates;
var cTempl;
for (i = 0; i < n; i++) {
    cTempl = this.getNthTemplate(i);
    this.spawnPageFromTemplate(cTempl);
}
```

Example 2 (Acrobat 6.0)

This next example spawns one template 31 times by means of the oXObject parameter and return value. Going about it this way keeps the file size from ballooning.

```javascript
var t = this.getNthTemplate(0)
var XO = this.spawnPageFromTemplate(t, this.numPages, false, false);
for (var i=0; i < 30; i++)
    this.spawnPageFromTemplate(t,this.numPages, false, false, XO);
```
