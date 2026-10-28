# layout

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | String | R/W |

Adjusts how pages of the active document are laid out. The permitted values are:


```javascript
SinglePage
OneColumn
TwoColumnLeft
TwoColumnRight
```

Two more values join the list in Acrobat 6.0 and onward:

```javascript
TwoPageLeft
TwoPageRight
```

Example: Switch the document to a continuous facing arrangement in which its first page lands in the left column:

```javascript
this.layout = "TwoColumnLeft";
```
