# xfa

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.02 | No | No | All | XFAObject | R |

This property exists solely when the document is an XML form, meaning one authored in LiveCycle Designer. Where it does exist, xfa is a static XFAObject sitting as the root node of the underlying xfa model, and it opens the door to the xfa scripting object model (SOM).

For the particulars of the xfa SOM, turn to the Adobe XML Form Object Model Reference. A side-by-side look at the Acrobat and LiveCycle Designer scripting object models appears in Converting Acrobat JavaScript for Use in LiveCycle Designer Forms.

Note

If you call this property out of a folder level script, hand it the document's Doc object so that xfa runs in the right context. Refer to Example 2.

Example 1: Say this document is an XML form carrying a text field called EmployeeName. Here the xfa object is used to read and rewrite that field's value.

```javascript
var eN = this.xfa.form.form1.EmployeeName;
console.println("nEmployeeName: " + eN.rawValue);
```

What lands in the console is

```javascript
EmployeeName: A. C. Robat
```

Next, alter the EmployeeName value.

```javascript
eN.rawValue = "Robat, A. C."
console.println("nEmployeeName: " + eN.rawValue);
```

What lands in the console is

Reference data, output or notation; not an executable JavaScript program.

```text
EmployeeName: Robat, A. C.
```

So the field's value has now changed.

Example 2: From a folder level script file, invoke a function that leans on the xfa property by handing it the Doc object.

```javascript
function isXFA(doc) {
    var wasWasNot = (typeof doc.xfa == "undefined") ? "not" : "";
    console.println("This document was "+wasWasNot+"created by Designer.");
}
```

You call the function as isXFA(this), whether from inside the document or from the console.
