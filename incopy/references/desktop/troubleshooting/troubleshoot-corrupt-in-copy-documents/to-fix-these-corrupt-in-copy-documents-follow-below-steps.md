# To fix these corrupt InCopy documents follow below steps

Close InCopy and the file you are currently editing.

Download UltraEdit or TextEdit on Mac/Windows.

Open the corrupted icml file in TextEdit or UltraEdit.

Press Ctrl+F and search for this node entry:

`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`

When this same node entry appears a second time:

`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`

delete the text beginning with the second instance of the tag

`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`

and continue deleting through the first instance of the tag `</Document>`

Save the icml file, then open the icml file in InCopy or place it in InDesign so work on the document can continue.
