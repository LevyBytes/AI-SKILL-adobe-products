# SWFPanel.call

Community declaration reference: Animate/22.0.

Communicates from the authoring environment to the SWF panel together with ActionScript ExternalInterface.addCallback() and MMExecute().
Example
In this example, ActionScript and JavaScript set up a Window SWF panel, then the authoring environment sends messages to it.
1 Start with an ActionScript 3.0 FLA file, use a medium gray color, and make it 400 pixels wide and 250 pixels high.
2 In the center of the Stage, place a dynamic text box, set Instance name to myTextField, and enter "Status" as the text.
3 Configure the other text box properties like this:
- Alignment: Center
- Size: 355 pixels wide and 46 pixels high
- Font: Times New Roman, 28 points, red
4 Insert this listing:
// Here's the callback function to be called from JSAPI
function callMeFromJavascript(arg:String):void {
try {
var name:String = String(arg);
myTextField.text = name;
} catch (e:Error) {}
}
// Expose the callback function as "callMySWF"
ExternalInterface.addCallback("callMySWF", callMeFromJavascript);
// run the JSAPI to wire up the callback
MMExecute("fl.runScript( fl.configURI + \"WindowSWF/fileOp.jsfl\" );");
MMExecute("fl.trace(\"AS3 File Status Panel Initialized\");");
5 Save the file as fileStatus.fla, then publish the SWF file using the default Publish settings.
6 Close Flash.
7 Copy fileStatus.swf to the WindowSWF folder, which is a Configuration folder subfolder (see "Saving JSFL files" on page 2). On Windows XP, for example, the folder is boot drive\Documents and Settings\user\Local Settings\Application Data\Adobe\Flash CS4\language\Configuration\WindowSWF.
8 Start Flash.
9 Create a JSFL file with the following code:
function callMyPanel(panelName, arg) {
if(fl.swfPanels.length > 0){
for(x = 0; x < fl.swfPanels.length; x++){
     // look for a SWF panel of the specified name, then call the specified AS3 function
     // in this example, the panel is named "test" and the AS3 callback is "callMySWF"
     if(fl.swfPanels[x].name == panelName) // name busted?
     {
       fl.swfPanels[x].call("callMySWF",arg);
       break;
     }
}
} else {
fl.trace("no panels");
}
}
// define the various handlers for events
documentClosedHandler = function () { callMyPanel("fileStatus", "Document Closed");};
fl.addEventListener("documentClosed", documentClosedHandler );
var dater = "New Document";
documentNewHandler = function () { callMyPanel("fileStatus", dater );};
fl.addEventListener("documentNew", documentNewHandler );
documentOpenedHandler = function () { callMyPanel("fileStatus", "Document Opened");};
fl.addEventListener("documentOpened", documentOpenedHandler );
10 Save the JSFL file in the same directory as the SWF file, with the name fileOp.jsfl.
11 Choose Window > Other panels > fileStatus.
After that, creating, opening, and closing FLA files causes the fileStatus panel to show a message for the action performed.
@returns null, or a string produced by the function call. Empty string is also possible.
@param request Function parameters; see "Description" and "Example" below.

```typescript
declare class SWFPanel {
    call(request: any): string | null | any
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
