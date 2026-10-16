# Windows

Off the All tools menu, choose Add a stamp > Custom stamps > Create.

When the dialog box appears, choose Browse to track down the image file, then choose Open.

After the image finishes loading, choose OK.

Within the Create Custom Stamp dialog box, set the Category field to Dynamic, type a name for the stamp, then choose OK.

Head to the directory below and open the PDF stamp file you just created:

C:\Users&lt;username&gt;\AppData\Roaming\Adobe\Acrobat\DC\Stamps

Choose All tools > Prepare a form > Create form.

Choose Text field, drop it onto the stamp, switch over to the Select tool, then double-click that text field.

Within the Text Field Properties dialog box, choose Calculate > Custom calculation script, then choose Edit.

The custom calculation script option in the Text Field Properties panel lets you wire dynamic behaviour into form fields with JavaScript.

Inside the JavaScript Editor, enter the script below and choose OK: event.value = util.printd("h:MM tt, mmm dd yyyy", new Date)

Choose Close on the Text Field Properties dialog box and save the stamp file you edited.

Open whichever PDF you want to stamp and head to All tools > Add a stamp > Custom stamps.

Pick your dynamic stamp and click the spot in the document where it should go.

The stamp you set up shows up on its own.
