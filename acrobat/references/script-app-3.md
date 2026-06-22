# App (part 3)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — app

initialize: function (dialog) {
// Create a static text containing the current date.
var todayDate = dialog.store()["date"];
todayDate = "Date: " + util.printd("mmmm dd, yyyy", new Date());
dialog.load({ "date": todayDate });
},
commit:function (dialog) { // called when OK pressed
var results = dialog.store();
// Now do something with the data collected, for example,
console.println("Your name is " + results["fnam"] + " " + results["lnam"] );
},
description:
{
name: "Personal Data", // Dialog box title
align_children: "align_left",
width: 350,
height: 200,
elements:
[
{
type: "cluster",
name: "Your Name",
align_children: "align_left",
elements:
[
{
type: "view",
align_children: "align_row",
elements:
[
{
type: "static_text",
name: "First Name: "
},
{
item_id: "fnam",
type: "edit_text",
alignment: "align_fill",
width: 300,
height: 20
}
]
},
{
type: "view",
align_children: "align_row",
elements:
[
{
type: "static_text",
name: "Last Name: "
},
{
item_id: "lnam",
type: "edit_text",
alignment: "align_fill",
width: 300,
height: 20
}
]
},
{
type: "static_text",
name: "Date: ",
char_width: 25,
item_id: "date"
},
]
},
{
alignment: "align_right",
type: "ok_cancel",
ok_name: "Ok",
cancel_name: "Cancel"
}
]
}
};

```

This next line is now runnable from an action — the mouse-up action on a button, or a menu action, for instance.

```

app.execDialog(dialog1);

```

Example 2: Below, a check box teams up with a radio button field. Such code might sit at the document level as JavaScript.

```

var dialog2 =
{
initialize: function(dialog) {
// Set a default value for radio button field
dialog.load({"rd01": true });
this.hasPet = false;
// Disable radio button field
dialog.enable({
"rd01" : this.hasPet,
"rd02" : this.hasPet,
"rd03" : this.hasPet
});
},
commit: function(dialog) {
// When the user presses "Ok", this handler will execute first
console.println("commit");
var results = dialog.store();
// Do something with the data, for example,
var hasPet = (this.hasPet) ? "have" : "don't have";
console.println("You " + hasPet + " a pet.");
if (this.hasPet)
console.println("You have " + this.getNumPets(results) + " pet(s).");
},
getNumPets: function (results) {
for ( var i=1; i<=3; i++) {
if ( results["rd0"+i] ) {
switch (i) {
case 1:
var nPets = "one";
break;
case 2:
var nPets = "two";
break;
case 3:
var nPets = "three or more";
}
}
};
return nPets;
},
ok: function(dialog) {
// The handler for the Ok button will be handed after commit
console.println("Ok!");
},
ckbx: function (dialog) {
// Process the checkbox, if the user has a pet, turn on radios
this.hasPet = !this.hasPet;
dialog.enable({
"rd01" : this.hasPet,
"rd02" : this.hasPet,
"rd03" : this.hasPet
});
},
cancel: function(dialog) { // Handle the cancel button
console.println("Cancel!");
},
other: function(dialog){ // Handle the other button
app.alert("Thanks for pressing me!");
dialog.end("other"); // End the dialog box, return "other"!
},
// The dialog box description
description:
{
name: "More Personal Information",
elements:
[
{
type: "view",
align_children: "align_left",
elements:
[
{
type: "static_text",
name: "Personal Information",
bold: true,
font: "dialog",
char_width: 30,
height: 20
},
{
type: "check_box",
item_id: "ckbx",
name: "Pet Owner"
},
{
type: "view",
align_children: "align_row",
elements:
[
{
type: "static_text",
name: "Number of pets: "
},
{
type: "radio",
item_id: "rd01",
group_id: "rado",
name: "One"

                            },
                            {
                                type: "radio",
                                item_id: "rd02",
                                group_id: "rado",
                                name: "Two",
                            },
                            {
                                type: "radio",
                                item_id: "rd03",
                                group_id: "rado",
                                name: "Three or more",
                            }
                        ]
                    }
                ]
            },
            {
                type: "gap",    //Add a small vertical gap between
                height: 10      //..radio fields and buttons
            },
            {
                type: "ok_cancel_other",
                ok_name: "Ok",
                cancel_name: "Cancel",
                other_name: "Press Me"
            }
        ]
    }

};

```

You can fire the following line from places like a button's mouse-up action or a menu action.

```

var retn = app.execDialog(dialog2);

```

Whatever retn comes back as tells you which button was pressed: "ok" for the Ok button, "cancel" for the Cancel button, and "other" for the button labeled "Press Me".

Example 3: This example uses a list box.

```

var dialog3 = {
// This dialog box is called when the dialog box is created
initialize: function(dialog) {
this.loadDefaults(dialog);
},
// This dialog box is called when the OK button is clicked.
commit: function(dialog) {
// See the Dialog object for a description of how dialog.load
// and dialog.store work.
var elements = dialog.store()["subl"];
// do something with the data.
},
// Callback for when the button "butn" is clicked.
butn: function(dialog) {
var elements = dialog.store()["subl"]
for(var i in elements) {
if ( elements[i] > 0 ) {
app.alert("You chose "" + i + "", which has a value of " + elements[i] );
}
}
},
loadDefaults: function (dialog) {
dialog.load({
subl:
{
"Acrobat Professional": +1,
"Acrobat Standard": -2,
"Adobe Reader": -3
}
})
},
// The dialog box description
description:
{
name: "Adobe Acrobat Products", // Title of the dialog box
elements: // Child element array
[
{
type: "view",
align_children: "align_left",
elements: // Child element array
[
{
type: "cluster",
name: "Select",
elements: // Child Element Array
[
{
type: "static_text",
name: "Select Acrobat you use",
font: "default"
},
{
type: "list_box",
item_id: "subl",
width: 200,
height: 60
},
{
type: "button",
item_id: "butn",
name: "Press Me"
}
]
},
{
type: "ok_cancel"
}
]
}
]
}
}

```

Then execute

```

app.execDialog(dialog3);

```

Swapping the `type: "list_box"` line above for `type: "popup"` and stripping out the height value turns this same example into one driven by a pop-up control instead of a list box.

Example 4: Here a hierarchical list box is demonstrated. Opening the dialog box surfaces a hierarchical list; once the user picks an entry and presses the Select button, the document navigates to whichever destination was chosen. Attaching the Doc object as a property of the dialog box is how it gets handed to that dialog.

```

var dialog4 = {
initialize: function(dialog) {
dialog.load({
subl:
{
"Chapter 1":
{
"Section 1":
{
"SubSection 1": -1,
"SubSection 2": -2,
},
"Section 2":
{
"SubSection 1": -3,
"SubSection 2": -4,
}
},
"Chapter 3": -5,
"Chapter 4": -6
}
})
},
subl: function(dialog) {
console.println("Selection Box Hit");
},
getHierChoice: function (e)
{
if (typeof e == "object") {
for ( var i in e ) {
if ( typeof e[i] == "object" ) {
var retn = this.getHierChoice(e[i]);
if ( retn ) {
retn.label = i + ", " + retn.label;
return retn;
}
// if e[i] > 0, we've found the selected item
} else if ( e[i] > 0 ) return { label:i, value: e[i] };
}
} else {
if ( e[i] > 0 ) return e[i];
}
},
butn: function (dialog)
{
var element = dialog.store()["subl"]
var retn = this.getHierChoice(element);
if ( retn ) {
// Write to the console the full name of the item selected
console.println("The selection you've chosen is "" + retn.label + "", its value is " + retn.value );
dialog.end("ok");
// this.doc is the doc object of this document
this.doc.gotoNamedDest("dest"+retn.value);
}
else app.alert("Please make a selection, or cancel");
},
cncl: function (dialog) { dialog.end("cancel") },
// Dialog box description
description:
{
name: "My Novel",
elements:
[
{
type: "view",
align_children: "align_left",
elements:
[
{
type: "cluster",
name: "Book Headings",
elements:
[
{
type: "static_text",
name: "Make a selection",
},
{
type: "hier_list_box",
item_id: "subl",
char_width: 20,
height: 200
}
]
},
{
type: "view",
align_children: "align_row",
elements:
[
{
type: "button",
item_id: "cncl",
name: "Cancel"
},
{
item_id: "butn",
type: "button",
name: "Select"
}
]
}
]
}
]
}
};

```

What the routine below does is bind the Doc object onto the dialog box and then hand that dialog box off to app.execDialog. Both the dialog4 object and this routine may live at the document level.

```

function dotheDialog(dialog,doc)
{
dialog.doc = doc;
var retn = app.execDialog( dialog )
}

```

A mouse-up action is one place from which the script below could then be fired.

```

dotheDialog( dialog4, this );

```

Example 5: For an illustration of running privileged code out of a context that lacks privilege, refer to trustPropagatorFunction.

### execMenuItem

Version (Key)

Save-Prefs

Security

Product

4.0

No

Yes

All

| --- | --- | --- | --- |

Executes the specified menu item.

From Acrobat 5.0 onward, a call to app.execMenuItem("SaveAs") is possible, within the limits laid out below. Running the Save As item writes the current file to the user's hard drive once a dialog box has prompted them for a folder and file name. When "Save As Optimizes for Fast Web View" is enabled in the Documents preferences, the saved file is linearized.

Note

(Acrobat 7.0) Earlier Acrobat releases would only run the following code from within a batch, console, or menu event.

```

app.execMenuItem("SaveAs");

```

That limitation is lifted in Acrobat 7.0, which means app.execMenuItem("SaveAs") now works inside a mouse-up event as well, for instance.

A form object does not persist through a Save As when the user preferences enable "Save As Optimizes for Fast Web View". At that point Field objects stop being valid, and reaching for one right after the save can raise an exception. The examples below illustrate this.

Quitting via script is blocked for security purposes; scripts cannot run the Quit menu item. From Acrobat 6.0 forward, the Paste menu item is likewise off-limits to scripts.

(Acrobat 8.0) Only a brief roster of safe menus may be invoked through the execMenuItem method. Naming a menu item that is absent from the safe list causes execMenuItem to fail without any notice. Future releases may drop menu items or alter how they behave.

You can view the safe-menu roster by building a form button and opening its Button Properties dialog box at the Actions tab. Pick "Execute a menu item" from the Select Action list, then press the Add button, which brings up the Menu Item dialog box listing the safe menus.

In a privileged context — the console or a batch sequence, for example — the app.execMenuItem method runs with no restriction at all. With folder JavaScript, running app.execMenuItem unrestricted is likewise possible by way of a trusted function granted raised privilege. Consult Example 4, below.

Sign & Certify offers yet another route to unrestricted app.execMenuItem calls. After the document author has signed and certified the file, privileged methods become runnable from a non-privileged context, provided the document consumer has the author's certificate among their trusted identities and trusts that author to run embedded high-privilege JavaScript.

For the sake of a secure environment, the runnable menu items are confined to this set:

AcroSendMail:SendMail

HandMenuItem

ShowHideToolbarBasicTools

ActualSize

HelpReader

ShowHideToolbarCommenting

AddFileAttachment

InsertPages

ShowHideToolbarData

Annots:Tool:InkMenuItem

LastPage

ShowHideToolbarEdit

BookmarkShowLocation

NextPage

ShowHideToolbarEditing

Close

OneColumn

ShowHideToolbarFile

CropPages

OpenOrganizer

ShowHideToolbarFind

DeletePages

PageSetup

ShowHideToolbarForms

DocHelpUserGuide

PrevPage

ShowHideToolbarMeasuring

ExtractPages

Print

ShowHideToolbarNavigation

Find

PropertyToolbar

ShowHideToolbarPageDisplay

FindCurrentBookmark

Quit

ShowHideToolbarPrintProduction

FindSearch

ReplacePages

ShowHideToolbarRedaction

FirstPage

RotatePages

ShowHideToolbarTasks

FitHeight

SaveAs

ShowHideToolbarTypewriter

FitPage

Scan

SinglePage

FitVisible

ShowHideAnnotManager

Spelling

FitWidth

ShowHideArticles

Spelling:Check

FullScreen

ShowHideBookmarks

TwoColumns

GeneralInfo (Properties)

ShowHideFields

TwoPages

GeneralPrefs

ShowHideFileAttachment

Web2PDF:OpenURL

GoBack

ShowHideModelTree

ZoomDragMenuItem

GoBackDoc

ShowHideOptCont

ZoomTo

GoForward

ShowHideSignatures

ZoomViewIn

GoForwardDoc

ShowHideThumbnails

ZoomViewOut

GoToPage

| --- | --- | --- |

Document-level access to menu items is the only thing this roster governs; application-level JavaScript and JavaScript running from a privileged context fall outside it.

Acrobat stores this roster in its registry, and you may edit it should you decide the list needs to grow. Expanding it means editing the relevant registry entries:

The key for the default list is HKEY_LOCAL_MACHINESOFTWAREPoliciesAdobeAdobe Acrobat9.0FeatureLockDowncDefaultExecMenuItems.

The key for the list used by Tuner is HKEY_LOCAL_MACHINESOFTWAREPoliciesAdobeAdobe Acrobat9.0FeatureLockDowncAdminExecMenuItems.

Under both keys the value name is tWhiteList with type REG_SZ. Its value data holds every menu item name, with one name set off from the next by the "|" delimiter.

See also addMenuItem, addSubMenu, and hideMenuItem. To make the console print out every menu item's name, call listMenuItems.

Parameters

Parameter

Description

cMenuItem

Which menu item to run. You can pull the roster of menu item names from listMenuItems.

oDoc

(optional, Acrobat 7.0) Here oDoc names a non-hidden document's Doc object (see the Doc object hidden property). When this parameter is supplied, execMenuItem fires the menu item within that document's context.

| --- | --- |

Example 1: Here the File > Open menu item is run, which pops a dialog box requesting the file to open.

```

app.execMenuItem("Open");

```

Example 2 (Acrobat 5.0)

As flagged earlier, this example shows a form object failing to survive a call to app.execMenuItem("SaveAs").

```

var f = this.getField("myField");
// Assume preferences set to save linearized
app.execMenuItem("SaveAs");
// Exception thrown, field not updated
f.value = 3;

```

Example 3 (Acrobat 5.0)

Field objects have to be fetched anew once app.execMenuItem("SaveAs") has run.

```

var f = this.getField("myField");
// Assume preferences set to save linearized
app.execMenuItem("SaveAs");
// Get the field again after the linear save
var f = getField("myField");
// Field updated to a value of 3
f.value = 3;

```

Example 4 (Acrobat 8.0 and later)

Run app.execMenuItem inside folder JavaScript by means of a trusted function.

```

myTrustedMenu = app.trustedFunction( function( name )
{
app.beginPriv();
app.execMenuItem(name);
app.endPriv();
});

```

After Acrobat or Adobe Reader has been restarted, a script such as

```

myTrustedMenu("PropertyToolbar");

```

can run from a non-privileged context — say a mouse-up button action — and won't fail silently. What that script does is toggle the Properties toolbar on or off.

### getNthPlugInName

Version (Key)

Save-Prefs

Security

Product

deprecated

No

No

All

| --- | --- | --- | --- |

Note

The plugIns property now takes the place of this method.

Fetches the name belonging to the n th plug-in the viewer has loaded.

Parameters

nIndex

Index of the loaded plug-in, counted as the n th one in the viewer.

| --- | --- |

Returns

cName, which is the plug-in name matching the supplied nIndex.

### getPath

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

All

| --- | --- | --- | --- |

Hands back the path to folders that installation created. Application folders and user folders are treated as separate categories. Should the path be missing, the method raises a GeneralError exception (see Error object).

Note

(Acrobat 7.0) Only during a batch or console event can this method run (see the event object). See also Privileged context.

Parameters

Parameter

Description

cCategory

(optional) The category of folder sought. Valid values are app (the default) and user.

cFolder

(optional) A platform-independent string that indicates the folder. Valid values are root, eBooks, preferences, sequences, documents, javascript, stamps, dictionaries, plugIns spPlugIns,help, temp, messages, resource, update The default is root.

| --- | --- |

Returns

The path to the folder determined by the parameters. An exception is thrown if the folder does not exist.

Example 1: Work out where the user's Sequences folder path points.

```

try {
var userBatch = app.getPath("user","sequences");
} catch(e) {
var userBatch = "User has not defined any custom batch sequences";
}
console.println(userBatch);

```

Example 2: Under Windows, build a document and save it into the My Documents folder.

```

var myDoc = app.newDoc();
var myPath = app.getPath("user", "documents") + "/myDoc.pdf"
myDoc.saveAs(myPath);
myDoc.closeDoc();

```

### goBack

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Returns to the prior view held on the view stack — the same result as pressing the Previous View button on the Acrobat toolbar.

Example: Build a go-back button. As one use, this code might sit inside a batch sequence to drop navigation buttons onto the chosen PDF documents.
```
