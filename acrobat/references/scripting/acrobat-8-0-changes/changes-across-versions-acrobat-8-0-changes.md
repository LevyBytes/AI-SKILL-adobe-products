# Changes Across Versions - Acrobat 8.0 changes

E4X — that is, ECMA-357 — is now understood by the JavaScript interpreter. The specification itself is documented in "EMCAScript for XML (E4X) Specification", http://www.ecma-international/publications/standards/Ecma-357.htm . The following metadata example shows E4X in action.

Within the Preferences dialog box (Ctrl + K), the JavaScript category now carries a fresh security checkbox, "Enable global object security policy".

Leave it checked — which is the default — and every write to a global variable records the origin that performed it. From then on only matching origins may read that variable. With files, that limits access to the file that set the value, holding the same path it held at the moment of the write. With documents loaded from URLs, only the web host that set the value may reach it.

One notable carve-out applies to the limits just described. A global variable may still be declared and read in a privileged context, within the console, inside a batch sequence, and in folder JavaScript.

Leave it unchecked and documents of differing origins can all reach the variable — the way things worked prior to version 8.0.

Consult the global object section for more particulars and examples.

A fresh restriction confines app.execMenuItem to a roster of safe menu items. Refer to the security note.

Acrobat 8.0 brings in the following properties and methods:
