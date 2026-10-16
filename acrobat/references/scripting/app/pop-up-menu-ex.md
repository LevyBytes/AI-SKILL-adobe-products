# popUpMenuEx

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

```javascript
var cChoice = app.popUpMenuEx
   (
       {cName: "Item 1", bMarked:true, bEnabled:false},
       {cName: "-"},
       {cName: "Item 2", oSubMenu:
           [ {cName: "Item 2, Submenu 1"},
               {
                   cName: "Item 2, Submenu 2",
                   oSubMenu: [{cName:"Item 2, Submenu 2, Subsubmenu 1", cReturn: "0"}]
               }
           ]
       },
       {cName: "Item 3"},
       {cName: "Item 4", bMarked:true, cReturn: "1"}
   )
   app.alert('You chose the "' + cChoice + '" menu item');
```

Example 2: Since popupMenuEx expects a sequence of MenuItem objects, you cannot feed its parameters in as a single JavaScript variable. The way around this: gather your menu items into an array, then lean on the apply method of the core JavaScript Function object, which lets you deliver the arguments as that array.

```javascript
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
