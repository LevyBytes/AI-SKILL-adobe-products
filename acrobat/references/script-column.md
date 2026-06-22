# Column, Columninfo, Console, Data ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Column; ColumnInfo; console; Data; DataSourceInfo; dbg; Dialog.

## Column

### JavaScript APIs — Column

Holding the data drawn from every row of one column, this generic JavaScript object is what the Statement object's getColumn and getColumnArray methods hand back. The ColumnInfo object is a related reference.

### Column properties

### columnNum

START HERE

The integer that picks out this column.

Type

Access

Number

R

| --- | --- |

### name

Whatever the column is called.

Type

Access

String

R

| --- | --- |

### type

Which SQL Type applies to the column's data, given as one of them.

Type

Access

Number

R

| --- | --- |

### typeName

A label for the data type this column carries.

Type

Access

String

R

| --- | --- |

### value

What the column's data holds, kept in whatever format it carried when first retrieved.

Type

Access

various

R/W

| --- | --- |

## ColumnInfo

### JavaScript APIs — ColumnInfo

Basic facts about a single column of data are carried by this generic JavaScript object, which the Connection object's getColumnList method produces. For a related reference, see the Column object.

### ColumnInfo properties

### name

A string giving the column's identifying name. You can pass this string into the Statement object's getColumn method to point at the matching column.

Type

Access

String

R

| --- | --- |

### description

A string carrying database-specific details about the column.

Type

Access

String

R

| --- | --- |

### type

A numeric code that picks out which of the ADBC SQL Types governs the data in the column tied to this ColumnInfo object.

Type

Access

Number

R

| --- | --- |

### typeName

Type

Access

String

R

| --- | --- |

A string that names the data type held in the matching column. Rather than an SQL Type (compare type above), this is a database-specific string standing for the data type, and it can shed light on user-defined data types.

## console

### JavaScript APIs — console

A single static object, console, opens the door to the Acrobat JavaScript Console, where you can run JavaScript and watch debug output appear.

Before Adobe Reader 7.0 this object has no effect. From 7.0 onward, Adobe Reader gained a console window whose main job is surfacing errors and messages. Whether it appears is governed by the JavaScript preference Show Console on Errors and Messages. The window isn't interactive there, yet the console object's methods behave just as they do under Acrobat.

On Windows and Mac OS, Adobe Reader can also be given access to the Acrobat JavaScript Debugging window. Debugging inside Adobe Reader requires installing the JavaScript file debugger.js and making the right edits to the Windows registry. Technical specifics are covered in the JavaScript Developer Guide.

See also the dbg object.

### console methods

### clear

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Empties the console window's buffer of whatever output it held.

### hide

Version (Key)

Save-Prefs

Security

Product

4.0

No

No

All

| --- | --- | --- | --- |

Closes the console window.

### println

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Writes a string value into the console window and follows it with a carriage return.

Parameters

cMessage

A string message to print.

| --- | --- |

Example 1: Here a field's value gets written out to the console window, in a script you might hook to a mouse-up event.

```
var f = this.getField("myText");
console.clear(); console.show();
console.println("Field value = " + f.value);
```

Example 2: Treat the console as a debugging aid — dumping variable values into it, say. Here is a document-level script that does so:

```
var debugIsOn = true;
function myFunction ( n, m )
{
    if (debugIsOn)
    {
        console.println("Entering function: myFunction");
        console.println(" Parameter 1: n = " + n);
        console.println(" Parameter 2: m = " + m);
    }
    ....
    ....
    if (debugIsOn) console.println(" Return value: rtn = " + rtn);
    return rtn;
}
```

Starting in Acrobat 6.0, the JavaScript Debugger offers another route to debugging. See the dbg object.

### show

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Shows the console window.

Example: Clear and show the console window:

```
console.clear();
console.show();
```

## Data

### JavaScript APIs — Data

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

An embedded file or data stream kept inside the document is what the Data object stands for. Consult the PDF Reference for the particulars.

Data objects give you a tidy way to bind and embed source files, metadata, and other related data alongside a document. They can be pulled in from the external file system, queried, and pulled back out.

See the following Doc properties and methods:

createDataObject, dataObjects, exportDataObject, getDataObject, importDataObject, removeDataObject, openDataObject, getDataObjectContents, and setDataObjectContents.

The following objects, properties and methods support PDF portfolios (also called PDF collections or PDF packages):

app.newCollection, Doc. collection, collection object, and collectionField object

Note

Although the Data object methods first shipped in Acrobat 5.0, using them in Adobe Reader under additional usage rights did not become possible until Adobe Reader 6.0.

### Data properties

### creationDate

When the embedded file was originally created.

Type

Access

Date

R

| --- | --- |

### description

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.05

No

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

The description tied to this data object.

### MIMEType

Which MIME type this data object carries.

Type

Access

String

R

| --- | --- |

### modDate

When the embedded file was last changed.

Type

Access

Date

R

| --- | --- |

### name

Whatever name this data object goes by.

Type

Access

String

R

| --- | --- |

Example: Print out the names of every file attached to this document.

```
console.println("Dumping all data objects in the document.");
var d = this.dataObjects;
for (var i = 0; i < d.length; i++)
    console.println("DataObject[" + i + "]=" + d[i].name);
```

### path

The embedded file's name together with its extension.

Type

Access

String

R

| --- | --- |

### size

How many bytes the data object takes up once uncompressed.

Type

Access

Number

R

| --- | --- |

### Data methods

### getFieldValue

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

All

| --- | --- | --- | --- |

Fetches, for this embedded file, the value of the field named by the name parameter. Should you ask for a field value the collection schema doesn't define, the result is null.

Parameters

Parameter

Description

name

A string naming the field you want.

includePrefix

(Optional) A Boolean deciding whether the returned string gets the prefix tacked on. Set to true, the prefix rides along; the default is false.

| --- | --- |

Returns

That field's value, or null when the schema lacks the field.

### setFieldValue

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

All

| --- | --- | --- | --- |

Field values are type-converted as they are set, with the schema's collectionField dictating which conversion applies. Trying to set a value for a field the schema doesn't define throws an exception.

Parameters

Parameter

Description

name

A string naming the field you want. Should the schema not hold name, an exception is raised.

value

A string, number, or date giving the field's value, which gets type-coerced to fit the schema.

prefix

(Optional) A string giving the prefix for the field value.

| --- | --- |

Returns

That field's value, or null when the schema lacks the field.

Example: Read and write field values on this collection's first data object.

```
var d = this.dataObjects[0];
d.setFieldValue("subject", "New laptop!", "RE: ");

// Now get the same field value we just set. Here s = "RE: New laptop!"
var s = d.getFieldValue({ name:"subject", includePrefix:true });

// Get the same field value, with includePrefix set to false, the default
// Now the value of s is "New laptop!".
s = d.getFieldValue("subject");

// Sets subject to "A. C. Robat" and clears prefix
d.setFieldValue("subject", "A. C. Robat");
```

## DataSourceInfo

### JavaScript APIs — DataSourceInfo

Core details about a database are what this generic JavaScript object carries. Calling ADBC.getDataSourceList hands back an array made up of these objects.

### DataSourceInfo properties

### name

A string giving the identifying name of a database. Pass this string to newConnection to open a connection to the database that the DataSourceInfo object refers to.

Type

Access

String

R

| --- | --- |

### description

A string carrying database-specific details about the database.

Type

Access

String

R

| --- | --- |

## dbg

### JavaScript APIs — dbg

From a command-line console, the static dbg object lets you drive the JavaScript Debugger. Whatever the buttons on the JavaScript Debugger dialog box toolbar do, its methods do as well. On top of that, you can create, remove, and inspect breakpoints by means of the dbg object.

Only Acrobat Pro provides the dbg object together with the JavaScript Debugger.

Note

Should the viewer freeze mid-debugging-session, hitting Esc may clear it up.

You can't debug while a modal dialog box is showing, as happens when a batch sequence is under debug.

Debugging a script whose running event was kicked off by app.setInterval or app.setTimeOut can make alert boxes keep popping up. Once you dismiss the modal dialog box, press Esc to clear the problem.

(Acrobat 7.0) The Acrobat application stays unavailable for as long as the Debugger is open and a debugging session is in progress.

### dbg properties

### bps

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

P

Array

R

| --- | --- | --- | --- | --- | --- |

An array whose breakpoint generic objects line up with the breakpoints set in the debugger. Each such object carries the properties and methods below.

Property

Type

Access

Description

fileName

string

R

A string pinpointing the script within the debugger.

condition

string

R

A JavaScript expression the debugger weighs to judge whether to halt at a breakpoint; this is what drives conditional breakpoints. Its default is the string “true”.

lineNum

number

R

The script line at which the breakpoint sits.

| --- | --- | --- | --- |

Method

Parameters

Returns

Description

toString

none

String

A string that spells out the breakpoint.

| --- | --- | --- | --- |

Example: Enumerate the breakpoints that are active right now.

```
var db = dbg.bps
for ( var i = 0; i < db.length; i++ )
{
    for ( var o in db[i] ) console.println(o + ": " + db[i][o]);
    console.println("------------------------------------");
}
```

See sb for another example of usage.

### dbg methods

### c

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Calling c (continue) restarts a program that has paused in the debugger. From there the JavaScript program may pause once more, according to where breakpoints sit, or run to completion.

### cb

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

Acrobat Pro only

| --- | --- | --- | --- |

The cb (clear breakpoint) method removes a breakpoint from the debugger. dbg.cb marks the document dirty only when breakpoints live in the document, which is configured through the user preferences at Edit > Preferences > JavaScript.

Parameters

Parameter

Description

fileName

Names the script the breakpoint will be removed from.

lineNum

Gives the line whose breakpoint is to be cleared within the script.

| --- | --- |

### q

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

Acrobat Pro only

| --- | --- | --- | --- |

The q (quit) method halts both debugging and the JavaScript now running, and on top of that it closes the debugger dialog box.

### sb

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

Acrobat Pro only

| --- | --- | --- | --- |

The sb (set breakpoint) method adds a fresh breakpoint in the debugger. dbg.sb marks the document dirty only when breakpoints live in the document, which is configured through the user preferences at Edit > Preferences > JavaScript.

Parameters

Parameter

Description

fileName

Names the script in which the breakpoint should be placed.

lineNum

Gives the script line at which to create the breakpoint.

condition

(optional) a JavaScript expression the debugger weighs upon arriving at the breakpoint. Evaluate to true and execution halts there; evaluate to false and the debugger keeps running the script straight past it without stopping. By default this is true.

| --- | --- |

Example 1: A script runs, hits an error, and throws an exception; using the details the error message supplies, you set a breakpoint from code.

```
SyntaxError: missing ; before statement 213:Document-Level: myDLJS
// now set a breakpoint using the console
dbg.sb({
    fileName: "Document-Level: myDLJS",
    lineNum: 213,
    condition: "true"
});
```

Example 2: Reproduce what the Store Breakpoints in PDF File check box does over in the JavaScript user preferences.

```
// Save breakpoints in PDF file
this.addScript("myBreakpoints", "var myBPS = " + dbg.bps.toSource());

// Now reset the breakpoints
for ( var i = 0; i < myBPS.length; i++ ) dbg.sb( myBPS[i] );
```

Example 3: Place a conditional break, taking the mouse-up action code below as the case in point.

```
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

### si

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

With si (step in), the program pointer moves on to the JavaScript program's next instruction, stepping into every function call that has a script behind it. (You cannot step into native JavaScript calls.)

### sn

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

The sn (step instruction) method pushes the program pointer ahead to the JavaScript program's next bytecode. (As the JavaScript interpreter defines it, a single JavaScript instruction is built from several bytecodes.)

### so

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

The so (step out) method keeps the program running until it leaves the current function, halting at the very instruction that follows the call into that function. When the scope being debugged is already the top-level scope, the program either runs through to its end or pauses again upon hitting a breakpoint.

### sv

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

The sv (step over) method pushes the program pointer ahead to the JavaScript program's next instruction. When it meets a function call, the debugger refrains from stepping into the instructions written inside that function.

## Dialog

### JavaScript APIs — Dialog

When a dialog box handler runs (see Dialog box handlers), it receives an instance of this object as a parameter. Among those handlers are the initialize, validate, commit, destroy and ItemID methods belonging to the dialog box descriptor object literal that gets passed to app.execDialog. Through the Dialog object you can read and change the dialog's present state.

### Dialog methods

### enable

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Turns particular dialog box elements on or off based on the object literal handed in.

Most often you invoke enable from within the initialize method (refer to Dialog box handlers) on the object literal that app.execDialog receives, letting you settle in advance which dialog box elements begin enabled.

Parameters

Parameter

Description

object literal

Give every dialog box item you mean to change an entry in the object literal, keyed by its Dialog ItemID, whose value is a Boolean marking it enabled or not.

| --- | --- |

Example: Refer to the worked code that accompanies app. execDialog.

### end

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Shuts down a dialog box that is currently running, just as though Cancel had been clicked. It accepts an optional ItemID parameter — a string — naming the dialog box element to be reported as the one that closed the dialog. That ItemID becomes the value returned by the app.execDialog call that opened the dialog.

Parameters

Parameter

Description

String

(optional) Which dialog box element's ItemID gets reported as the one that closed the dialog.

| --- | --- |

Example: Consult the sample code shown just after app. execDialog.

### load

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Assigns values to dialog box elements from the object literal handed in. A unique 4-character string called an ItemID identifies each dialog box item.

Most often you invoke load from within the initialize method (refer to Dialog box handlers) on the object literal that app.execDialog receives, letting you seed the values of various dialog box elements beforehand.

Parameters

Parameter

Description

object literal

Give every dialog box item you mean to change an entry in the object literal, keyed by its ItemID, whose contents are that element's setting. Where an element accepts several values (a list_box or popup, say), make the value an object literal that pairs the shown entry as label with a numeric value as contents. Likewise, for a hierarchical element (such as a hier_list_box), supply a set of nested object literals. Any numeric value above 0 selects the item; otherwise it stays unselected.

| --- | --- |

Example: Look at the examples that follow app. execDialog.

### store

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Returns the dialog box elements' values packaged as an object literal. Each dialog box item is keyed by an ItemID, a unique 4-character string. Per element, the object literal holds an entry labeled by the ItemID with that element's setting as contents. Where an element carries several values (a list_box or popup, for instance), its value is itself an object literal that pairs the shown entry as label with a numeric value as contents. Anything above 0 in that numeric value marks the item as having been selected; otherwise it was not.

Most often you invoke store from within the commit method (refer to Dialog box handlers) on the object literal that app.execDialog receives, letting you extract the values of various dialog box elements.

Returns
