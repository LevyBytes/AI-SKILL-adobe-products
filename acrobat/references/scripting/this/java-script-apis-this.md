# JavaScript APIs — this

Inside JavaScript, the reserved word this points at the current object. Acrobat fixes what the current object is as follows:

Within an object method, it is whichever object owns that method.

Within a constructor function, it is the object under construction.

Within a document-level or field-level script, it is the Doc, so you can read or write document properties and functions through it.

Within a function that lives in one of the folder-level JavaScripts files, it is undefined. Code that calls such functions should hand the Doc along to any function at this level that requires it.

Take, for instance, this function defined at the plug-in folder level:

```javascript
function PrintPageNum(doc)
{ /* Print the current page number to the console. */
    console.println("Page = " + doc.pageNum);
}
```

Running the script below writes the current page number to the console two times, then sends the page to print:

```javascript
/* Must pass the Doc. */
PrintPageNum(this);
/* Same as the previous call. */
console.println("Page = " + this.pageNum);
/* Prints the current page. */

 this.print(false, this.pageNum, this.pageNum);
```

Any variables and functions declared within scripts hang off the this object. To illustrate:

```javascript
var f = this.getField("Hello");
```

amounts to the same thing as

```javascript
this.f = this.getField("Hello");
```

the one difference being that the variable f is fair game for garbage collection at any moment once the script has run.

Variable and function name conflicts

Anyone writing JavaScript should steer clear of reusing the Doc’s property and method names as variable names. Putting a method name after the reserved word var throws an exception, which the next line demonstrates:

```javascript
var getField = 1; // TypeError: redeclaration of function getField
```

A property name won’t throw, yet the property’s value may go unchanged when that property points at an object:

```javascript
// "title" will return "1", but the document will now be named "1".
var title = 1;

// Property not altered, info still an object
var info = 1; // "info" will return [object Info]
```

What follows shows one way to dodge a variable name clash.

```javascript
var f = this.getField("mySignature"); // uses the ppklite sig handler

// Use "Info" rather than "info" to avoid a clash
var Info = f.signatureInfo();

// Some standard signatureInfo properties
console.println("name = " + Info.name);
```
