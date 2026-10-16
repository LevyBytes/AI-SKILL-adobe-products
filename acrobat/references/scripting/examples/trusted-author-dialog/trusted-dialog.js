var myDialog = app.trustedFunction(function () {
    var dialog;
    app.beginPriv();
    try {
        dialog = {
            initialize: app.trustPropagatorFunction(function (view) {
                this.data = {};
                app.beginPriv();
                try { view.load({emai: "Email: " + identity.email}); }
                finally { app.endPriv(); }
            }),
            commit: app.trustPropagatorFunction(function (view) {
                var results = view.store();
                console.println("Your name is " + results.name);
                this.data.name = results.name;
            }),
            brws: app.trustPropagatorFunction(function () {
                app.beginPriv();
                try {
                    var selected = app.browseForDoc();
                    if (selected !== undefined && selected !== null) {
                        this.data.oRetn = selected;
                    }
                } finally { app.endPriv(); }
            }),
            doDialog: app.trustPropagatorFunction(function () {
                app.beginPriv();
                try { return app.execDialog(this); }
                finally { app.endPriv(); }
            }),
            description: authorDialogLayout
        };
    } finally { app.endPriv(); }
    var result = dialog.doDialog();
    if (result !== "ok" || !dialog.data.oRetn) return result;
    app.beginPriv();
    try {
        var document = app.openDoc({
            cPath: dialog.data.oRetn.cPath,
            cFS: dialog.data.oRetn.cFS
        });
        if (!document.info.Author) document.info.Author = dialog.data.name;
    } finally { app.endPriv(); }
    return result;
});
