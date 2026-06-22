# App (part 5)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — app

Returns

What comes back is the FDF object tied to the FDF file just opened.

Example: Build an FDF file that carries an embedded PDF inside it.

```
var fdf = app.newFDF();
fdf.addEmbeddedFile( "/c/myPDFs/myFile.pdf", 1);
fdf.save( "/c/myFDFs/myFile.fdf" ); // save and close this FDF

// Now open the FDF file and embed another PDF doc.
var fdf = app.openFDF( "/c/myFDFs/myFile.fdf" );
fdf.addEmbeddedFile( "/c/myPDFs/myOtherFile.pdf", 1);
fdf.save( "/c/myFDFs/myFile.fdf" ); // save and close this FDF
```

For a further usage sample, consult the signatureSign method on the FDF object.

### popUpMenu

Version (Key): 5.0 | Save-Prefs: No | Security: No | Product: All

Note

The preferred call here is popUpMenuEx rather than this method.

At the spot where the mouse currently sits, this builds a pop-up menu holding whatever items you pass in.

Parameters

Parameter — Description

cItem

(optional) Pass a string and it shows up in the menu as one menu item. Reserve the menu item name "-" to render a separator line across the menu.

Array

(optional) Pass an array and it surfaces as a submenu, with that array's first element acting as the parent menu item. Nesting further submenus inside is allowed.

Returns

Whichever menu item the user picked comes back by name; null comes back when nothing was picked.

Example: Assemble a pop-up menu whose entries are the chapters of a document.

```
var cChoice = app.popUpMenu("Introduction", "-", "Chapter 1",
    [ "Chapter 2", "Chapter 2 Start", "Chapter 2 Middle",
    ["Chapter 2 End", "The End"]]);
app.alert("You chose the "" + cChoice + "" menu item");
```

### popUpMenuEx

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All

At the current mouse location this raises a pop-up menu. Every argument you supply is a MenuItem object spelling out one entry to place in that pop-up menu.

Reach for this method ahead of popUpMenu.

Parameters

One or more MenuItem objects (see below).

Returns

You get back the selected item's cReturn value, falling back to its cName when no cReturn was set for that item. When nothing is chosen, the method hands back null.

MenuItem Object

A single menu entry is modeled by this plain JavaScript object, which carries the properties below.

Property — Description

cName

The text that shows on the menu item — its name. Reserve the value "-" to render a separator line across the menu.

bMarked

(optional) A Boolean that controls whether a check mark sits beside the item. It defaults to false, meaning unmarked.

bEnabled

(optional) A Boolean that controls whether the item reads as enabled or shows grayed out. It defaults to true, meaning enabled.

cReturn

(optional) The string handed back once the item is chosen. When omitted, it defaults to whatever cName holds.

oSubMenu

(optional) Either one MenuItem object standing for a submenu entry, or an array of such entries, each one its own MenuItem object.

Example 1: Demonstrate every capability the popUpMenuEx method offers.

```
var cChoice = app.popUpMenuEx
   (
       {cName: "Item 1", bMarked:true, bEnabled:false},
       {cName: "-"},
       {cName: "Item 2", oSubMenu:
           [ {cName: "Item 2, Submenu 1"},
               {
                   cName: "Item 2, Submenu 2",
                   oSubMenu: {cName:"Item 2, Submenu 2, Subsubmenu 1", cReturn: "0"}
               }
           ]
       },
       {cName: "Item 3"},
       {cName: "Item 4", bMarked:true, cReturn: "1"}
   )
   app.alert("You chose the "" + cChoice + "" menu item");
```

Example 2: Since popupMenuEx expects a sequence of MenuItem objects, you cannot feed its parameters in as a single JavaScript variable. The way around this: gather your menu items into an array, then lean on the apply method of the core JavaScript Function object, which lets you deliver the arguments as that array.

```
// Declare pop-up menu properties as an array.
var aParams = [
    {cName: "Example Web Page", cReturn: "www.example.com"},
    {cName: "-"},
    {cName: "The Example Product Line",
     cReturn: "www.example.com/products/main.html"},
    {cName: "Example Reader",
     cReturn: "www.example.com/products/reader/main.html"}
];
// Apply the function app.popUpMenuEx to the app object, with an array
// of parameters aParams
var cChoice = app.popUpMenuEx.apply( app, aParams );
if ( cChoice != null ) app.launchURL(cChoice);
```

### removeToolButton

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All

Takes a button you previously placed on the toolbar back off it.

Note

(Acrobat 7.0) Pulling off a toolbutton that addToolButton put there means removeToolButton has to run inside the very same context that addToolButton ran in.

Were no document open in Acrobat at the moment the button went on, then no document may be open in Acrobat at the moment you take the button off. Refer to example 2 further down.

By the same logic, if some particular document held focus as the active one when the toolbutton was added, that identical document must be active for removeToolButton to take the button off.

Should a document be the active one at the time its toolbutton is added, closing that document strips the button away on its own. Consult as well the notes that trail the addToolButton description.

Parameters

Parameter — Description

cName

The identifier that does not depend on language, the one you handed over when addToolButton was called.

Example 1: Refer to the sample that trails addToolButton.

Example 2: Here the button gets removed under the same context addToolButton used. To start, nothing is open in Acrobat. From the console, run the code below:

```
app.addToolButton({cName: "button1", cExec:"app.alert('pressed');",

     cTooltext:"Button1"});
```

Now open a PDF document inside Acrobat and run the following line from the console:

```
app.removeToolButton({cName:"button1"});
```

This throws an exception, and taking the button off does not succeed.

Close that PDF document, run the removeToolButton script once more, and this time the button comes off.

### response

Version (Key): 3.01 | Save-Prefs: No | Security: No | Product: All

Puts up a dialog box that poses a question alongside a field where the user can type an answer.

Parameters

Parameter — Description

cQuestion

The question put to the user.

cTitle

(optional) The title shown on the dialog box.

cDefault

(optional) A starting value for the answer. Leave it out and no default gets shown.

bPassword

(optional) When true, the user's typing is masked behind asterisks (\*) or bullets (•), handy where the entry could be sensitive. It defaults to false.

cLabel

(optional, Acrobat 6.0) A brief string placed just ahead of the edit text field, sharing its line.

Returns

A string holding what the user typed. Should the user press the Cancel button, what comes back is the null object.

Example: Prompt the user for an answer, then echo that answer back.

```
var cResponse = app.response({
    cQuestion: "How are you today?",
        cTitle: "Your Health Status",
        cDefault: "Fine",
        cLabel: "Response:"
});
if (cResponse == null)
    app.alert("Thanks for trying anyway.");
else
    app.alert("You responded, ""+cResponse+"", to the health "
        + "question.",3);
```

### setInterval

Version (Key): 5.0 | Save-Prefs: No | Security: No | Product: All

Takes a JavaScript script plus a time span. Each time that span runs out, the script fires again.

Hold this method's return value in a JavaScript variable; otherwise garbage-collection can reclaim the interval object, and the clock stops as a result.

Hand the returned interval object to clearInterval to halt the repeating execution.

Note

From Acrobat 7.05 onward, closing the document whose script invoked setInterval ends the interval on its own — provided it had not already been ended.

Re-reading of the document JavaScripts, and thus re-initialization of any document-level variables, is triggered whenever the document JavaScripts dialog box is opened and then closed. Reset document-level variables this way once JavaScript expressions have already been queued for evaluation under setInterval or setTimeOut, and JavaScript errors can result if those scripts depend on document-level variables.

See also clearInterval, setTimeOut and clearTimeOut.

Parameters

cExpr

The JavaScript script that runs.

nMilliseconds

The span of time, given in milliseconds.

Returns

An interval object

Example: Drive a basic color animation, shifting once per second, on a field named "Color".

```
function DoIt() {
    var f = this.getField("Color");
    var nColor = (timeout.count++ % 10 / 10);
    // Various shades of red.
    var aColor = new Array("RGB", nColor, 0, 0);
    f.fillColor = aColor;
}
// save return value as a variable
timeout = app.setInterval("DoIt()", 1000);
// Add a property to our timeout object so that DoIt() can keep
// a count going.
timeout.count = 0;
```

For one more sample, look to setTimeOut.

### setTimeOut

Version (Key): 5.0 | Save-Prefs: No | Security: No | Product: All

Takes a JavaScript script plus a time span. Once that span runs out, the script fires a single time and no more.

Hold this method's return value in a JavaScript variable; otherwise garbage-collection can reclaim the timeout object, and the clock stops as a result.

Hand the returned timeout object to clearTimeOut to call off the timeout event.

Note

From Acrobat 7.05 onward, closing the document whose script invoked setInterval ends the interval on its own — provided it had not already been ended.

Re-reading of the document JavaScripts, and thus re-initialization of any document-level variables, is triggered whenever the document JavaScripts dialog box is opened and then closed. Reset document-level variables this way once JavaScript expressions have already been queued for evaluation under setInterval or setTimeOut, and JavaScript errors can result if those scripts depend on document-level variables.

See also clearTimeOut, setInterval, and clearInterval.

Parameters

cExpr

The JavaScript script that runs.

nMilliseconds

The span of time, given in milliseconds.

Returns

A timeout object

Example: Put together a basic scrolling marquee. Picture a text field called "marquee" whose default value reads "Adobe Acrobat version 8.0 will soon be here!".

```
// Document-level JavaScript function
function runMarquee() {
    var f = this.getField("marquee");
    var cStr = f.value;
    // get field value
    var aStr = cStr.split("");        // Convert to an array
    aStr.push(aStr.shift());          // Move first char to last
    cStr = aStr.join("");             // Back to string again
    f.value = cStr;                   // Put new value in field
}

// Insert a mouse-up action into a "Go" button
run = app.setInterval("runMarquee()", 100);
// stop after a minute
stoprun=app.setTimeOut("app.clearInterval(run)",6000);

// Insert a mouse-up action into a "Stop" button
try {
    app.clearInterval(run);
    app.clearTimeOut(stoprun);
} catch (e){}
```

Wrapping the Stop button code in a try/catch guards it. Press Stop before ever pressing Go and both run and stoprun stay undefined, so the Stop code raises an exception. Once that exception fires, the catch block takes over. Here the code simply sits idle if the user hits Stop ahead of anything else.

### trustedFunction

Version (Key): 7.0 | Save-Prefs: No | Security: No | Product: All

Flags a function as trusted. A trusted function is allowed to deliberately bump up the privilege level for its own stack frame. That stack frame — essentially the function body — usually holds security-restricted methods that demand a privileged setting to run in. Raising the privilege level lets those restricted methods run even in contexts that are not privileged. See Privileged context.

Inside the function definition's body, any code that would ordinarily need a privileged context must be bracketed by calls to app.beginPriv and app.endPriv, just as the examples further down illustrate.

Note

Only during batch, console and application initialization events is this method available.

Parameters

Parameter — Description

oFunc

A function object naming the function that should be marked trusted.

Returns

When it works, the same function object you passed in is handed back, and from then on that function object is trusted. When it fails, it throws NotAllowedError.

Syntax

There are two ways to call this method.

```
myTrustedFunction = app.trustedFunction(
    function()
    {
        <function body>
    }
);
```

or

```
function myOtherTrustedFunction()
{
    <function body>
};
app.trustedFunction(myOtherTrustedFunction);
```

Both the examples here and those trailing the app.trustPropagatorFunction method carry plenty of comments, the kind that unpack what a trusted function really is and call attention to several subtleties of the subject.

Example 1: app.newDoc counts as a security-restricted method requiring a privileged context to run within. It cannot, for one, run straight from a mouse-up event under normal conditions. This sample demonstrates running that method off a mouse-up event by wrapping it in a trusted function.

Drop the script below into a .js file sitting in the User (or App) JavaScript folder.

```
trustedNewDoc = app.trustedFunction( function (nWidth, nHeight)
{
    // Additional code may appear above
    app.beginPriv();    // Explicitly raise privilege
    app.newDoc( nWidth, nHeight );
    app.endPriv();
    // Additional code may appear below.
})
```

Restart Acrobat and the trustedNewDoc function will run from any location. The script below, wired to a button's mouse-up action, spins up a fresh document measuring 200 points on each side.

```
trustedNewDoc( 200, 200 );
```

Security restrictions mean app.newDoc(200,200) cannot ordinarily fire from a mouse-up event. What makes creating the new document possible is the trusted function.

Note

This sample is kept simple. You could extend the trusted function so it carries the two optional arguments that app.newDoc accepts as well.

A menu item can run the trustedNewDoc function too.

```
app.addMenuItem( {
    cName: "myTrustedNewDoc",
    cUser: "New Doc", cParent: "Tools",
    cExec: "trustedNewDoc(200,200)", nPos: 0
} );
```

Once more, trustedNewDoc could be made richer by letting the user supply the new document's dimensions — whether through a run of app.response dialog boxes or one full dialog box built with app.execDialog.

Note

Leave app.newDoc outside the app.beginPriv/app.endPriv pair and running trustedNewDoc from a context that is not privileged will fail, throwing an exception. The privilege level has to be raised on purpose, exactly the way shown.

Example 2: How the app.activeDocs property acts depends on the setting it runs under:

Throughout a console or batch event, it gives back an array holding every active document.

Within a context that is not privileged, it gives back an array of only the active documents whose disclosed property is set to true.

You can work past this restriction in a non-privileged context by writing a trusted function that lifts the privilege level before calling activeDocs. Such a function would live in a .js file inside the User (or App) JavaScript folder.

```
trustedActiveDocs = app.trustedFunction (
    function()
    {
        app.beginPriv(); // Explicitly raise the privilege
        var d = app.activeDocs;
        app.endPriv();
        return d;
    }
)
```

A form button's mouse-up action can run the code below.

```
var d = trustedActiveDocs();
console.println("There are d = " + d.length
    + " files open in the viewer.")
for ( var i=0; i< d.length; i++)
    console.println((i+1) + ". " + d[i].documentFileName )
```

Every document open in the viewer — disclosed or otherwise — gets its count and file name reported to the console.

Example 3: A trusted function can deliberately lift the current privilege level for its own stack frame and nowhere else. This sample surfaces a few of the issues that come with that.

The code below tries to break a trusted function into something more modular:

```
function mySaveAs(doc, path)
{
    doc.saveAs(doc, path);
}
myFunc = app.trustedFunction( function (doc, path)
{
    // privileged and/or non-privileged code here
    app.beginPriv();
    mySaveAs(doc, path);
    app.endPriv();
    // privileged and/or non-privileged code here
}
```

Trouble arises because the moment the privileged call doc.saveAs(doc, path) runs, it sits not inside the stack frame (the function body) of the calling trusted function myFunc but inside the stack frame of mySaveAs, and mySaveAs is no trusted function. So when myFunc runs in a context that is not privileged, it throws an exception.

Turning mySaveAs into a trusted function is one route that gets myFunc to work. The catch: doing so leaves the privileged doc.saveAs function open to non-privileged execution by anyone aware that this function lives on your system.

You cannot just wrap doc.saveAs(doc,path) in a beginPriv/endPriv pair. Run myFunc from a non-privileged context and the app.beginPriv inside the mySaveAs body will throw an exception. The reason: mySaveAs is not trusted, so it holds no authorization to ask for a raised privilege level.

Pulling together the points made above, what is needed is a sort of function with these traits:

A trusted function can call it.

It is not itself trusted, so a non-privileged context cannot call it directly.

Meeting those conditions is exactly what a trust propagator function does (see trustPropagatorFunction below).

### trustPropagatorFunction

Version (Key): 7.0 | Save-Prefs: No | Security: Yes | Product: All

Flags a function as a trust propagator. A function like this is not trusted on its own, yet it can take on trust whenever a trusted function calls it.

A trust propagator function passes along trust, not privilege. For that reason, exactly as with app.trustedFunction, an app.beginPriv/app.endPriv pair has to bracket any code in the function body that would normally run in a privileged context.

Utility functions are a natural fit for trust propagator functions. A trusted function can call them, and so can another trust propagator function, but a function that is not trusted cannot call them with success inside a non-privileged context.

Note

Functions written in .js files within the App JavaScript folder are trust propagator functions by implication. Functions written in .js files within the User JavaScript folder are not.

Only during batch, console, and application initialization is this method available.

Syntax

There are two ways to call this method.

```
myPropagatorFunction = app.trustPropagatorFunction(
    function()
    {
        <function body>
    }
);
```

or

```
function myOtherPropagatorFunction()
{
    <function body>
};
app.trustPropagatorFunction(myOtherPropagatorFunction);
```

Parameters

Parameter — Description

oFunc

A function object naming the function to mark as a trust propagator.

Returns

When it works, the same function object you passed in is handed back, and from then on that function object is a trust propagator. When it fails, it throws NotAllowedError.

Example 1: For background, see example 3 following trustedFunction.

What this sample sets up is a trust propagator function, mySaveAs, for saving a file into a folder, plus a trusted function, myTrustedSpecialTaskFunc, for carrying out an assortment of tasks that mix privileged and non-privileged code. Calling mySaveAs straight from a non-privileged context is not possible.

```
mySaveAs = app.trustPropagatorFunction(function(doc,path)
{
    app.beginPriv();
        doc.saveAs(path);
    app.endPriv();
})
myTrustedSpecialTaskFunc = app.trustedFunction(function(doc,path)
{
    // Privileged and/or non-privileged code above
    app.beginPriv();
        mySaveAs(doc,path);
    app.endPriv();
    // Privileged and/or non-privileged code below
});
```

Run that code off a mouse-up button, say, and the current document gets saved to the path you named.

```
myTrustedSpecialTaskFunc(this, "/c/temp/mySavedDoc.pdf");
```

Example 2: This sample puts together a basic dialog box by way of the app.execDialog method and runs privileged code through it.

The dialog box wants your name and asks you to browse to a document on your local hard drive (or a network drive). Click OK and the file you picked loads into the viewer while your name drops into the document properties' author field. (That name only goes in when the author field starts out empty.) On top of that, the dialog box surfaces the value of identity.email, which counts as privileged information.

A beginPriv/endPriv pair brackets any privileged code.

Take note of the ANTrustPropagateAll function, a handy tool when you are building dialog boxes that lean on privileged code. Feed it one object as its argument; it converts every function inside that object into a trust propagator function and then returns the object back.
