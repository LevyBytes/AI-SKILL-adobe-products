# App (part 4)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — app

```
var aRect = this.getPageBox();
var width = aRect[2] - aRect[0];
// The rectangle is 12 points high and 18 points wide, centered at bottom
rect = [width/2-8, 10, width/2+8, 22];
f = this.addField("goBack", "button", 0, rect);
f.textFont="Wingdings";
f.textSize=0;
f.buttonSetCaption("u00E7");              // Left pointing arrow
f.setAction("MouseUp", "app.goBack()");    // Add an action
```

### goForward

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Advances to whatever view sits next on the view stack; clicking the go Next View button on the Acrobat toolbar does the very same thing.

Example: See the example following app. goBack.

### hideMenuItem

Version (Key)

Save-Prefs

Security

Product

4.0

No

Yes

All

| --- | --- | --- | --- |

Removes a specified menu item.

See also addMenuItem, addSubMenu, execMenuItem, and listMenuItems.

Note

This method runs only inside a console event or an application-initialization one. See the event object for a discussion of JavaScript events.

Parameters

Parameter

Description

cName

The menu item name to remove. Menu item names can be discovered with listMenuItems.

| --- | --- |

### hideToolbarButton

Version (Key)

Save-Prefs

Security

Product

4.0

No

Yes

All

| --- | --- | --- | --- |

Takes the named toolbar button off the "Add-on" toolbar in Acrobat 9 and earlier. Under Acrobat X, it instead conceals the named button on the Plugin Addon Tools panel along the right edge of the display area.

Note

Execution is confined to a console event or to application initialization. See the event object for a discussion of JavaScript events.

Parameters

Parameter

Description

cName

The name of the toolbar button to remove. Toolbar item names can be discovered with listToolbarButtons.

| --- | --- |

Example: A script like the one below sits in a file called myConfig.js, dropped into one of the folder-level JavaScript folders.

```
app.hideToolbarButton("Hand");
```

The "Hand" icon will then be absent the next time the viewer launches.

### launchURL

Version (Key)

Save-Prefs

Security

Product

7.0

No

Yes

All

| --- | --- | --- | --- |

Opens a URL inside a browser window.

Note

As of Acrobat 8.1, File and JavaScript URLs run only within a privileged context, for instance during a batch or console event. The scheme names javascript or file are what File and JavaScript URLs start with.

Parameters

Parameter

Description

cURL

A string giving the URL that should be launched.

bNewFrame

(optional) When set to true, the URL opens in a fresh window of the browser application. false is the default.

| --- | --- |

Returns

A successful call returns the value undefined; a failure raises an exception.

Example 1:

```
app.launchURL("http://www.example.com/", true);
```

Example 2: Attach an online help entry to the menu system. Put this code in a folder-level JavaScript file, or run it from the JavaScript Debugger console.

```
app.addMenuItem({
    cName: "myHelp", cUser: "Online myHelp",
    cParent: "Help",
    cExec: "app.launchURL('www.example.com/myhelp.html');",
    nPos: 0
});
```

Related methods are openDoc and the Doc object getURL method.

### listMenuItems

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

From Acrobat 6.0 onward, hands back an array of TreeItem objects that maps out a menu hierarchy.

In releases before Acrobat 6.0, this method would instead dump the menu item names into the console as a list.

See also addMenuItem, addSubMenu, execMenuItem, and hideMenuItem.

Returns

Array of TreeItem objects.

TreeItem Object

A generic JavaScript object standing for a menu or toolbar item hierarchy. Both app.listMenuItems and app.listToolbarButtons return an array of these (as of Acrobat 6.0). Its properties are as follows.

cName

Holds the name of the toolbar button or menu item.

oChildren

(optional) An array of treeItem objects that hold the flyout buttons or submenus.

| --- | --- |

Example 1: Send every menu item name to the console.

```
var menuItems = app.listMenuItems()
for( var i in menuItems)
    console.println(menuItems[i] + "n")
```

Example 2: Print all menu items to the console in a dressed-up layout.

```
function FancyMenuList(m, nLevel)
{
    var s = "";
    for (var i = 0; i < nLevel; i++) s += " ";
    console.println(s + "+-" + m.cName);
    if ( m.oChildren != null )
        for ( var i = 0; i < m.oChildren.length; i++ )
            FancyMenuList(m.oChildren[i], nLevel + 1);
}
var m = app.listMenuItems();
for ( var i=0; i < m.length; i++ ) FancyMenuList(m[i], 0);
```

### listToolbarButtons

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

From Acrobat 6.0 onward, hands back an array of treeItem objects mapping a toolbar hierarchy (flyout toolbars included).

In releases before Acrobat 6.0, this method instead showed a list of toolbar button names in the console.

(Acrobat 8.0) When the Documents category of the Preferences dialog box has "Show each document in its own window (requires restart)" checked, the document window has to be empty for listToolbarButtons to return its array of TreeItem objects.

Returns

Array of TreeItem objects

Example: Send every toolbar name to the console.

```
var toolbarItems = app.listToolbarButtons()
for( var i in toolbarItems)
    console.println(toolbarItems[i] + "n")
```

See also the hideToolbarButton method.

### loadPolicyFile

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

All

Points to a cross-domain policy file at whatever location the url parameter names. Policy files serve Acrobat as a permission mechanism that lets PDFs pull data from servers besides their own. Thanks to app.loadPolicyFile(), Acrobat is able to fetch policy files from arbitrary locations, as the example below shows:

```
app.loadPolicyFile("http://www.example.com/sub/dir/pf.xml");
```

Whenever a crossdomain policy check comes up, this prompts Acrobat to pull a policy file from the URL given. Whatever permissions that policy file grants extend to every piece of content sitting at its level or deeper within the server's virtual directory hierarchy. The example carries on with the following code:

```
this.getURL("http://www.example.com/sub/dir/vars.txt", true) // allowed
this.getURL("http://www.example.com/sub/dir/deep/vars2.txt", true) // allowed
this.getURL("http://www.example.com/mydir/vars3.txt", true) // not allowed
```

You may load as many policy files as you like through loadPolicyFile(). Faced with a request that calls for a policy file, Acrobat will always let any policy file downloads finish before it turns that request down. As a last resort, when none of the policy files supplied via loadPolicyFile() permits a request, Acrobat falls back on the original default location, /crossdomain.xml.

Parameters

Parameter

Description

url

Where the cross-domain policy file lives, given as a url. The length of url is capped at 1024 bytes; passing a longer string raises an exception. - Unlike many JavaScript for Acrobat methods, this one takes no single object argument whose properties carry the arguments. This method's argument is a string.

| --- | --- |

Returns

Nothing

### mailGetAddrs

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Note

This method is a Windows-only feature.

Brings up an address book dialog box so the user can pick e-mail recipients. You can optionally seed that dialog with semicolon-separated addressee lists through the cTo, cCc, and cBcc strings. Whether the user may select CC and BCC recipients is governed by the bCc and bBcc Boolean values.

See also mailMsg, the Doc object methods mailDoc and mailForm, the FDF object mail method and the Report object mail method.

Note

(Acrobat 7.0) Only during a batch or console event can this method run. See also Privileged context. See the event object for a discussion of JavaScript events.

Parameters

Parameter

Description

cTo

(optional) A semicolon-separated list of "To" addressees to use.

cCc

(optional) A semicolon-separated list of CC addressees to use.

cBcc

(optional) A semicolon-separated list of BCC addressees to use.

cCaption

(optional) A string to appear on the caption bar of the address dialog box.

bCc

(optional) A Boolean flag controlling whether CC recipients are selectable by the user.

bBcc

(optional) A Boolean flag for whether the user is allowed to pick BCC recipients. Set this one only when bCc is true; otherwise the method fails (and returns undefined).

| --- | --- |

Returns

When the user cancels, the call fails and returns undefined. On success it hands back an array of three strings for To, CC, and BCC.

Example: Allow the user two attempts at supplying mail addresses.

```
var attempts = 2;
while (attempts > 0)
{
    var recipients = app.mailGetAddrs
    ({
        cCaption: "Select Recipients, Please",
        bBcc: false
    })
    if (typeof recipients == "undefined" ) {
        if (--attempts == 1)
            app.alert("You did not choose any recipients, try again");
    } else break;
}
if (attempts == 0)
    app.alert("Cancelling the mail message");
else {
    // JavaScript statements to send mail
}
```

### mailMsg

Version (Key)

Save-Prefs

Security

Product

4.0

No

Yes

All

| --- | --- | --- | --- |

Sends e-mail out, whether or not the user is prompted to interact.

See also the Doc object mailDoc and mailForm methods, the FDF object mail method and the Report object mail method.

Note

On Windows: For this method to work, the client machine's default mail program has to be configured as MAPI enabled.

Parameters

Parameter

Description

bUI

Indicates whether user interaction is required. When true, the rest of the parameters seed the compose-new-message window shown to the user. When false, cTo is required while the others stay optional. - (Acrobat 7.0) Running this method in a non-privileged context causes the bUI parameter to be ignored and to default to true. See Privileged context.

cTo

A semicolon-separated list of addressees.

cCc

(optional) A semicolon-separated list of CC addressees.

cBcc

(optional) A semicolon-separated list of BCC addressees.

cSubject

(optional) Subject line text. The length limit is 64 KB.

cMsg

(optional) Mail message text. The length limit is 64 KB.

| --- | --- |

Example: Bring up the compose new message window.

```
app.mailMsg(true);
```

Route the message to fun1@example.com and fun2@example.com.

```
app.mailMsg(false, "fun1@example.com; fun2@example.com", "", "",
"This is the subject", "This is the body of the mail.");
```

A message that carries form data can be assembled too.

```
var cMyMsg = "Below are the current budget figures:nn";
cMyMsg += "Date Compiled: " + this.getField("date").value + "n";
cMyMsg += "Current Estimate: " + this.getField("budget").value + "n";
app.mailMsg({
    bUI: true,
    cTo: "myBoss@example.com",
    cSubject: "The latest budget figures",
    cMsg: cMyMsg
} );
```

### newDoc

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Builds a fresh document and returns its Doc object. Optional parameters set the document's media box dimensions in points.

Note

Only during a batch or console event can this method run. See Privileged context. See the event object for a discussion of JavaScript events.

Parameters

Parameter

Description

nWidth

(optional) The width (in points) for the new document. The default value is 612.

nHeight

(optional) The height (in points) for the new document. The default value is 792.

| --- | --- |

Returns

The object of the newly created document.

Example: Tack a New entry onto the Acrobat File menu. New holds three items inside it: Letter, A4, and Custom. Place this script in a folder-level JavaScripts .js file.

```
app.addSubMenu({ cName: "New", cParent: "File", nPos: 0 })
app.addMenuItem({ cName: "Letter", cParent: "New", cExec:
    "app.newDoc();"});
app.addMenuItem({ cName: "A4", cParent: "New", cExec:
    "app.newDoc(420,595)"});
app.addMenuItem({ cName: "Custom...", cParent: "New", cExec:
    "var nWidth = app.response({ cQuestion:'Enter Width in Points',
        cTitle:     'Custom Page Size'});"
    +"if (nWidth == null) nWidth = 612;"
    +"var nHeight = app.response({ cQuestion:'Enter Height in Points',
        cTitle: 'Custom Page Size'});"
    +"if (nHeight == null) nHeight = 792;"
    +"app.newDoc({ nWidth: nWidth, nHeight: nHeight })"});
```

For Acrobat versions earlier than 7.0, the script above behaves correctly. On Acrobat 7.0 it works only when the user JavaScript preference Enable Menu Items JavaScript Execution Privileges is turned on.

Should that item stay unchecked, app.newDoc has to run through a trustedFunction, since from Acrobat 7.0 onward JavaScript fired by a menu event no longer carries privilege. See Privileged context.

That same example can also be done this way:

```
trustedNewDoc = app.trustedFunction( function (nWidth, nHeight)
{
    app.beginPriv();
        switch( arguments.length ) {
            case 2:
                app.newDoc( nWidth, nHeight );
                break;
            case 1:
                app.newDoc( nWidth );
                break;
            default:
                app.newDoc();
        }
    app.endPriv();
})
app.addSubMenu({ cName: "New", cParent: "File", nPos: 0 })
app.addMenuItem({ cName: "Letter", cParent: "New", cExec:
    "trustedNewDoc();"});
app.addMenuItem({ cName: "A4", cParent: "New", cExec:
    "trustedNewDoc(420,595)"});
app.addMenuItem({ cName: "Custom...", cParent: "New", cExec:
    "var nWidth = app.response({ cQuestion:'Enter Width in Points',
        cTitle: 'Custom Page Size'});"
    +"if (nWidth == null) nWidth = 612;"
    +"var nHeight = app.response({ cQuestion:'Enter Height in Points',
        cTitle: 'Custom Page Size'});"
    +"if (nHeight == null) nHeight = 792;"
    +"trustedNewDoc(nWidth, nHeight) "});
```

This code is not finished. For the Custom menu item, you can add further lines that stop the user from submitting an empty string or a value that is too small or too large. Refer to the PDF Reference for the limits that currently apply.

Example: Spin up an empty document, grab its Doc object, and drop in a watermark.

```
var myNewDoc = app.newDoc();
myNewDoc.addWatermarkFromText("Confidential",0,font.Helv,24,color.red);
```

The Doc object addWatermarkFromText method is what this example relies on.

### newCollection

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

All

| --- | --- | --- | --- |

Builds a new collection-based PDF — a PDF portfolio — holding no content.

To operate on a PDF portfolio that already exists, start from Doc. collection.

Returns

A Doc object of the newly created PDF.

Example: Make a new PDF portfolio and obtain the Doc object of the freshly made PDF.

```
var doc = app.newCollection();
```

### newFDF

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Builds a new FDF object holding no data.

Note

Availability of this method is limited to batch, console, and application initialization. Not available in Adobe Reader. See Privileged context.

Returns

A new FDF object.

Example: Build an FDF that has a PDF file embedded in it.

```
var fdf = app.newFDF();
fdf.addEmbeddedFile( "/c/myPDFs/myFile.pdf", 1);
fdf.save( "/c/myFDFs/myFile.fdf" );
```

This example carries on after the description of app. openFDF.

### openDoc

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Opens the PDF document named and returns its Doc object. A script can use this object to invoke methods or to read and write properties on the document just opened.

Note

While a batch sequence runs, a modal dialog box stays open to keep the user from interfering during processing. For that reason, this method cannot be run through a batch sequence.

Note

A doc open script cannot call the app.openDoc API. The script that runs on the doc open action goes by the name doc open script. Under those circumstances Viewer throws a NotAllowedError exception, which escript hands on to the user. From other triggers, though — a page open action, for one — the call succeeds.

Opening an HTML document with this method throws an exception and gives back an invalid Doc object. Wrap app.openDoc in a try/catch to trap that exception. See example 2 below.

Parameters

Parameter

Description

cPath

A device-independent path to the document to be opened. When oDoc is supplied, the path may be given relative to it. The target document has to be reachable in the default file system. - With cFS set to "CHTTP", escape the cPath string, perhaps via the core JavaScript global function encodeURI. See Example 5 (Acrobat 7.0) below.

oDoc

(optional) A Doc object to use as a base to resolve a relative cPath. Must be accessible in the default file system.

cFS

(optional, Acrobat 7.0) A string naming the source file system. Two values work: "" (the empty string and the default), which stands for the default file system, and "CHTTP". This parameter matters only where the web server supports WebDAV.

bHidden

(optional, Acrobat 7.0) A Boolean that, when true, opens the PDF file with its window hidden. false is the default.

bUseConv

(optional, Acrobat 7.0) A Boolean used when cPath points at a non-PDF file. When true, the method attempts to convert that non-PDF file into a PDF document. false is the default. - (Acrobat 7.0) Setting bUseConv to true is possible only during a console or batch event. See also Privileged context.

cDest

(optional, Acrobat 8.0) The name of the destination within a document. Supplying it forces the open at a named destination inside the PDF document. For specifics on named destinations and creating them, see the PDF Reference.

| --- | --- |

Returns

A Doc object or null :

Under Acrobat 5.0, a Doc object comes back from this method.

Under Acrobat 5.0.5, the Doc object comes back unless the target document's disclosed property is not true, in which case null is returned.

Starting with the Acrobat 5.0.5 Accessibility and Forms Patch and carrying through Acrobat 6.0 and later, openDoc acts like this:

Within a batch, console, or menu event, openDoc disregards the disclosed property and returns the Doc object of the file that cPath names.

Within any other event, openDoc returns the Doc when disclosed is true, and otherwise null.

Example 1: This example opens a second document, drops a prompt message into a text field, places the focus there, and then shuts the current document.

```
var otherDoc = app.openDoc("/c/temp/myDoc.pdf");
otherDoc.getField("name").value="Enter your name here: "
otherDoc.getField("name").setFocus();
this.closeDoc();
```

The same example as above, only now written with a relative path.

```
var otherDoc = app.openDoc("myDoc.pdf", this);
otherDoc.getField("name").value="Enter your name here: "
otherDoc.getField("name").setFocus();
this.closeDoc();
```

The Doc closeDoc method and the Field object setFocus method are both used by this example.

Example 2: Take an HTML document sitting on the user's hard drive and turn it into a PDF.

```
try {
    app.openDoc("/c/myWeb/myHomePage.html");
} catch (e) {};
```

Example 3 (Acrobat 7.0)

Open a hidden PDF document, extract what you need from it, then shut it.

```
oDoc = app.openDoc({
    cPath:"/C/myDocs/myInfo.pdf",
    bHidden: true
});
var v = oDoc.getField("myTextField").value;
this.getField("yourTextField").value = v;
oDoc.closeDoc();
```

Example 4 (Acrobat 7.0)

Open a non-PDF file by converting it into a PDF document. Running the script below from the console works fine.

```
app.openDoc({
    cPath: "/c/temp/myPic.jpg",
    bUseConv: true
})
```

Example 5 (Acrobat 7.0)

Open a file off a WebDAV server. Whatever path you give the app.openDoc method must be escaped first.

```
var myURL = encodeURI("http://www.example.com/My Folder/ComDoc.pdf");
app.openDoc({cPath: myURL, cFS: "CHTTP" });
```

See also app. browseForDoc.

Example 6 (Acrobat 8.0)

Open a document and jump to a named destination.

```
app.openDoc({ cPath: "/c/temp/myDoc.pdf", cDest: "myDest" });
```

On versions before 8.0, the document has to be disclosed for that jump to work at all. See the example following gotoNamedDest.

### openFDF

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Builds a new FDF object by opening the file named. That FDF object carries methods and properties for working on the data the file holds.

Note

Availability of this method is limited to batch, console, and application initialization events. See also Privileged context.

Parameters

cDIPath

The device-independent path to the file to be opened.
