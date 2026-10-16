# overlayText

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | D | No | C | string | R/W |

A string holding the overlay text to be painted over the redacted area once the affected content is stripped out.

Annotations: Redact

Example: Configure the redaction settings on one specific redaction annotation.

```javascript
var a = this.getAnnots();                              // get all annotations in doc
var r = a[0]           ;                               // the first one is Redact type
r.setProps({                                           // now set its properties
   overlayText: " A.C. Robat ",
   alignment: 0,
   repeat: true,
   fillColor:color.blue,
   textColor: color.green
});
```

A Redact annotation comes with its own popup; here we attach a note to that popup.

```javascript
r.setProps({ contents: "Shall we redact this paragraph?" });
```

See also the applyRedactions method of the Doc object.
