# sb

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | No | Acrobat Pro only |

The sb (set breakpoint) method adds a fresh breakpoint in the debugger. dbg.sb marks the document dirty only when breakpoints live in the document, which is configured through the user preferences at Edit > Preferences > JavaScript.

Parameters

| Parameter | Description |
| --- | --- |
| fileName | Names the script in which the breakpoint should be placed. |
| lineNum | Gives the script line at which to create the breakpoint. |
| condition | (optional) a JavaScript expression the debugger weighs upon arriving at the breakpoint. Evaluate to true and execution halts there; evaluate to false and the debugger keeps running the script straight past it without stopping. By default this is true. |

Example 1: A script runs, hits an error, and throws an exception; using the details the error message supplies, you set a breakpoint from code.

Example debugger message: `SyntaxError: missing ; before statement 213:Document-Level: myDLJS`. Set the breakpoint with the following code.

```javascript
// now set a breakpoint using the console
dbg.sb({
    fileName: "Document-Level: myDLJS",
    lineNum: 213,
    condition: "true"
});
```

Example 2: Reproduce what the Store Breakpoints in PDF File check box does over in the JavaScript user preferences.

```javascript
// Save breakpoints in PDF file
this.addScript("myBreakpoints", "var myBPS = " + dbg.bps.toSource());

// Now reset the breakpoints
for ( var i = 0; i < myBPS.length; i++ ) dbg.sb( myBPS[i] );
```

Example 3: Place a conditional break, taking the mouse-up action code below as the case in point.

```javascript
for (var i=0; i<100; i++)
    myFunction(i);          // defined at document level

// In the console, set a conditional break. Here, we break when the

 // index of the loop is greater than 30.
dbg.sb({
    fileName:"AcroForm:Button1:Annot1:MouseUp:Action1",
    lineNum:2,
    condition:"i > 30"
})
```
