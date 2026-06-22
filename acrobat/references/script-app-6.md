# App (part 6)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — app

```
myDialog = app.trustedFunction(function()
{
    app.beginPriv();
    var dialog = ANTrustPropagateAll({
        initialize:function(dialog) {
            this.data = {};   // An object to hold dialog data
            app.beginPriv();
            dialog.load({ "emai": "Email: " + identity.email });
            app.endPriv();
        },
        commit:function (dialog) { // Called when OK pressed
            var results = dialog.store();
            console.println("Your name is " + results["name"] );
            this.data.name = results["name"];
        },
        brws: function (dialog) {
            app.beginPriv();
            var oRetn = app.browseForDoc();
            if ( typeof oRetn != "undefined")
                this.data.oRetn = oRetn;
            app.endPriv();
        },
        doDialog:function() {
            app.beginPriv();
            var retn = app.execDialog(this);
            app.endPriv();
            return retn;
        },
        description: {
            name: "Open File & Populate Info Field",
            align_children: "align_left",
            elements:
            [
                {
                    type: "view",
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
                                    name: "Name: "
                                },
                                {
                                    item_id: "name",
                                    type: "edit_text",
                                    alignment: "align_fill",
                                    width: 300,
                                    height: 20
                                },
                            ]
                        },
                        {
                            type: "static_text",
                            item_id: "emai",
                            name: "Email: ",
                            char_width: 25
                        },
                        {
                            type: "gap",
                            height: 10
                        },
                        {
                            type: "view",
                            align_children: "align_row",
                            elements:
                            [
                                {
                                    type: "button",
                                    name: "Browse",
                                    item_id: "brws"
                                },
                                {
                                    type: "ok_cancel",
                                    ok_name: "Ok",
                                    cancel_name: "Cancel"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    });
    app.endPriv();
    try { // Protect against user pressing the Esc key
        // After everything is set up, run the dialog box using the doDialog
        // function, defined in the object dialog.
        var retn = dialog.doDialog();
        app.beginPriv();
        // If the user clicked the Ok button and there is oRetn data we load
        // the requested file using app.openDoc(), a restricted method.
        if ( (retn == "ok") && dialog.data.oRetn ) {
            var oDoc = app.openDoc({
                cPath: dialog.data.oRetn.cPath,
                cFS: dialog.data.oRetn.cFS
            });
            if ( !oDoc.info.Author  )
                oDoc.info.Author = dialog.data.name;
        }
        app.endPriv();
    } catch(e) {}
})
```

Triggering this dialog box can happen from a button, though a menu item or a toolbar button suits it better. To add a menu item onto the Tools menu, for instance, set the code below into a User JavaScript file.

```
app.addMenuItem( { cName: "myDialog", cUser: "My Cool Dialog",
    cParent: "Tools", cExec: "myDialog()", nPos: 0 } );
```
