# Add barcode fields

From the All tools menu, select Prepare a form.

Select Barcode from the left pane.

Drag out a rectangle to mark where the barcode goes, switch over to the Select tool, and then double-click the barcode field you just made.

Inside the Barcode Field Properties dialog box, set up the following:

On the Value tab:

- For Encode Using, select a format (XML or Tab Delimited). Select Pick and choose the form fields to encode in the barcode.
- Or, select Custom calculation script and then select Edit. Next, enter your custom JavaScript code in the JavaScript Editor dialog box.

On the Options tab:

- For Symbology, select PDF417, QR Code, or Data Matrix.
- Pick a Decode Condition that matches how the finished form will be handled.

Tip

Drop in a barcode at its largest size and tweaking the cell size or decode condition can push it past the edge of the page. Sidestep that by picking a fitting cell size along with the right decode settings.

Select Close to add the barcode field to your form.

Note

Whatever fields you selected get encoded automatically by JavaScript as either XML or Tab-Delimited. Add a fresh field later and it stays out of the barcode unless you put it in yourself.

Tip

JavaScript lets you tailor PDF form barcodes so data packs in efficiently. It helps to already be comfortable with JavaScript and the scripting that's specific to Acrobat. When you want to push past the basics, look into the materials on building Acrobat applications with JavaScript.
