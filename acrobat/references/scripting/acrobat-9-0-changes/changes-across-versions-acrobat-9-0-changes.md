# Changes Across Versions — Acrobat 9.0 changes

Important: On the Mac OS, the user JavaScript folder now sits in a different place. To find it, run app.getPath("user", "javascript") in the JavaScript debugger console window. Move any JavaScript files from the old user folder over to the new spot.

The util. crackURL method is now able to split a URL written with IPv6 addressing into its parts. Its returned object gains a new nURLType property.

Two field properties, display and hidden, no longer depend on forms rights to work inside Adobe Reader.

Two methods join the API. app. loadPolicyFile points at a cross-domain policy file, while Doc. applyRedactions commits redaction marks.

Version 8 shipped two printing parameters that went undocumented. Through the DuplexType and NumCopies properties on the PrintParams object, callers can set duplex mode and the copy count for printing. The printerName status shifts as well — that property now works on the Mac OS too. Wording around how the printer is chosen when printerName holds the empty string was also revised.

Doc. nocache, which arrived in version 7.0, is now undefined and has been dropped from the docs. From version 8.0 on, when a user inside a browser leaves a page holding a PDF, Acrobat and Adobe Reader shut down almost instantly and discard any temporary data. Return to that PDF and the form data is no longer there.

The info object gains a new Authors property. Feed it a semi-colon delimited list when there are several authors.

JavaScript API for PDF portfolios — also known as portable collections and PDF packages — debuts in Acrobat 9. The table that follows enumerates them.
