# Customize Form Fields, Insert Barcodes

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Change form field settings; Form fields general settings; Field specific properties; Field formatting options; Configure form fields for calculations; Set form field navigation; Barcodes overview; Add and test barcode fields; Manage custom barcode parameters; Customize barcode fields.

## Change form field settings

### Shape how form fields look and act inside Adobe Acrobat.

Open All tools > Prepare a form.

Right-click a field and pick Properties.

Within the Text Field Properties dialog box, adjust these on the General tab:

- Name: type a name unique to this field.
- Tooltip: supply text that surfaces when users hover over the field.
- Field type: switch the kind of field — text field, checkbox, or dropdown.
- Participant role: state who is allowed to work with this field.
- Signer's email: type the email address of whoever should sign this field.

With several fields selected at once, the General tab opens up more choices under Common Properties:

- Form Field: decide whether the field shows, stays hidden, shows but won't print, or hides yet prints.
- Orientation: turn the selected fields
- Read Only: stop users from altering the selected fields
- Required: make the selected fields mandatory

Want those edited properties to become the standard for a field type? Right-click the field and pick Use Current Properties as New Defaults.

Note

Any new default properties reach only the form fields you make from here on. Fields that already exist hold on to their own settings.

Pick Close.

## Form fields general settings

### Dig into PDF form field settings in Adobe Acrobat to make forms work better and feel smoother

The general settings inside the Form Field Properties dialog box let you tailor how a field looks and how it behaves. The properties sit on tabs: General and Actions show up no matter the field type, whereas others — Options among them — depend on the field. Every tab carries Locked and Close, so you can either freeze edits or leave the dialog. Whatever you change takes hold the moment you move to a different property. Working across several fields means keeping the dialog open and clicking from one field to the next.

### Form field appearance settings

Every form field type other than barcodes exposes an appearance tab inside its properties:

- Border Color: Choose a hue for the field frame, or pick No Color to leave the edge undrawn.
- Fill Color: Apply a background shade behind the field, or leave it see-through.
- Line Thickness: Controls how heavy the field's border looks.
- Line Style: Pick from choices such as Solid, Dashed, or Underline.
- Font Size: Tune how large the field text appears; an Auto setting lets it scale on its own.
- Text Color: Choose the color used for typed text or for selection marks.
- Font: Draw from the fonts installed on the system. Fields that hold no text ignore this setting.

Note

Picking any Fill Color besides transparent can hide artwork that sits beneath the field on the PDF page.

### Form field position settings

Through the Position tab you can place or scale whichever fields are currently selected, down to a precision of 10,000ths of an inch, and drop them at exact spots on the page.

Reach for the Height and Width settings when only the field dimensions need to change. When you want to shift a field while leaving its size untouched, turn on Do not change height and width when changing the position.

### Form field actions

Within a form field's properties, the Actions tab lets you wire up behaviors that fire as users work with the field:

- Select Trigger: Picks the moment that launches the action, among Mouse Up, Mouse Down, Mouse Enter, Mouse Exit, On Focus, or Blur.

  - Execute a menu item
  - Go to a 3D/Multimedia view
  - Go to a page view, Import form data
  - Multimedia operation (Acrobat 9 and later)
  - Open a file
  - Open a web link
  - Play a sound, Play Media (Acrobat 5 Compatible)
  - Play Media (Acrobat 6 and Later Compatible)
  - Read an article
  - Reset a form
  - Run a JavaScript
  - Set layer visibility
  - Show/hide a field
  - Submit a form.

- Add: Brings up a window where you choose and attach an action.
- Actions: Lists every trigger and action you have already defined.
- Up and Down: Reorders the actions sitting beneath a trigger; both appear once a single trigger carries more than one action.
- Edit: Launches a dialog carrying the settings tied to whichever action is highlighted.
- Delete: Clears the chosen action, or the chosen trigger-action pairing.

## Field specific properties

### A closer look at the per-component field properties governing form behavior in Adobe Acrobat.

By tuning a field's properties you shape how people work with the form and how their answers get gathered, which keeps the form simpler to fill in. To reach those settings, right-click the field. Which controls show up in the properties dialog box varies with the kind of field you picked.

### Barcode field properties

These settings govern the way a barcode field packs and shows its data:

- Symbology: Pick among the PDF417, QR Code, and Data Matrix barcode formats.
- Compress Data Before Encoding to Barcode: Shrinks the data ahead of encoding so it occupies less space.
- Decode Condition: Ready-made decode presets that the Custom button lets you adjust.
- Custom: Tailor the processing parameters to match the hardware you run.
- X Dimension: How wide one barcode cell runs, given in mils.
- Y/X Ratio: The cell's height set against its width.
- Error Correction Level: Sets how much redundant data guards against errors. Raising the level yields sturdier barcodes, yet they grow larger and leave less room to carry extra data. PDF417 and QR Code barcodes support it, helping shrug off print flaws, fax glitches, and physical damage to the page.
- Manage Barcode Parameters: Store your custom barcode picks and pass them along.

### Check box properties

These settings spell out how checkboxes show up on the form:

- Check Box Style: The figure drawn inside the checkbox marker.
- Export Value: The value that stands in for the item when data is exported.
- Check box is checked by default: Starts the checkbox already ticked.

### Drop-down and list box properties

Shape the way people work with dropdowns and list boxes through these settings:

- Item: The wording shown for each choice in the menu.
- Add: Pushes whatever you just typed into the Item List.
- Export Value: The value that stands in for the item when data is exported.
- Item List: Shows the choices on offer.
- Up and Down buttons: Shuffle the order of items; they go dim whenever Sort items is turned on.
- Delete: Drops whatever items are selected.
- Sort items: Lines items up by number and by letter.
- Allow user to enter custom text: Lets people type their own entry.
- Check spelling: Runs a spell check across text people enter.
- Commit selected value immediately: Records the value the moment it is chosen.

### List box properties

Set up the way boxes hold several picks at once as the form is filled in, using these settings:

- Item: The wording shown for each choice in the menu.
- Add: Pushes whatever you just typed into the Item List.
- Export Value: The value that stands in for the item when data is exported.
- Item List: Shows the choices on offer.
- Up and Down buttons: Shuffle the order of items; they go dim whenever Sort items is turned on.
- Delete: Drops whatever items are selected.
- Sort items: Lines items up by number and by letter.
- Multiple selection: Permits more than one item to be chosen.
- Commit selected value immediately: Records the value the moment it is chosen.

### Radio button properties

Steer how radio buttons look and act within a grouped set of choices through these settings:

- Button Style: The figure drawn inside the button marker.
- Radio Button Choice: Names the individual radio button.
- Button is checked by default: Starts the button already selected.
- Buttons with the same name and choice are selected in unison: Lets one click pick every related radio button together.

### Text field properties

Dial in formatting, behavior, and entry caps for text fields by way of these settings:

- Alignment: Sets text to Left, Right, or Center.
- Default Value: The text the field starts out holding.
- Multi-line: Lets entries run across several lines.
- Scroll long text: Makes room for text that overruns the field.
- Allow Rich Text Formatting: Turns on styling of the text.
- Limit of characters: Caps how many characters fit.
- Password: Shows whatever is typed as asterisks.
- Comb of characters: Distributes the typed text evenly across the field's width. When the Appearance tab carries a Border Color, that color draws dividing lines between each entered character. You can pick this only while no other checkbox is on.

### E-signature field properties

Decide what should follow once someone applies a digital signature to the form, using these settings:

- Nothing happens when signed: The setting the field falls back to by default.

  - All fields: Freezes every field on the form.
  - All fields except these: Leaves the fields you chose open for edits.
  - Just these fields: Freezes only the fields you chose.

- This script executes when field is signed: Lets your own JavaScript run after the signature lands.

## Field formatting options

### A guide to Adobe Acrobat's controls for styling form fields, checking entries, and setting barcode properties.

Acrobat's field formatting controls govern how entries get typed, shown, and checked inside PDF forms. Choosing the right formatting tightens up consistency across your data, cuts down on mistakes, and smooths out the whole fill-in experience.

Note

Turning on This document requires signatures as you build the form tucks away certain controls inside the Properties dialog box.

### Format text and dropdown fields

Whatever you pick from the Select format category dropdown menu drives which controls appear on the Format tab of the Form Field Properties. A running preview of your choices shows up in the Example of the current format field.

- None: Leaves the field without any particular formatting.
- Number: Shapes numeric entries on the fly. You get decimal places, separator style, currency symbol, symbol location, and negative number style.
- Percentage: Renders numeric data in percent form. Carries options for decimal places and separator style.
- Date: Format dates. Carries options for one-, two-, and four-digit date variations.
- Time: Shapes time entries. Carries options for 12-hour or 24-hour clock display, minutes, seconds, and AM/PM.

  - A: Accepts only letters (A–Z, a-z)
  - X: Accepts spaces and most printable characters
  - O: Accepts alphanumeric characters (A–Z, a-z, and 0–9)
  - 9: Accepts only numeric characters (0–9)

- Custom: Opens the door to advanced formatting driven by your own JavaScript scripts. It carries controls to add and edit Custom Format Script and Custom Keystroke Script.

### Validate

- Field value is not validated: Switches validation off.
- Field value is in range: Pins numeric entries between range limits.
- Run custom validation script: Checks entries through your own JavaScript scripts.

### Barcode value properties

Only Barcode field properties carry the Value tab, which puts forward these choices:

- Encode using: Lets you pick how the data is encoded. The choices cover:
- XML: Lays the data out in standard XFDF format and spins up a JavaScript script on its own.
- Tab Delimited: Stores fields as tab-delimited values, handy for packing more into the barcode or for dropping the data into database or spreadsheet tables. A JavaScript script is produced automatically.
- Pick: Brings up a dialog box where you choose which user data fields the barcode encodes.
- Include field names: Comes into play only with tab-delimited encoding. Writes the field names as the opening line of the barcode contents, with their values written underneath.
- Custom calculation script: Shows the default script. Choose Edit to bring up the JavaScript Editor for your own calculation scripts.
  - Shows the path leading to the PDF form.
  - Lets you edit the URL pointing at the published form.
  - Helps rebuild a digital copy of the finished form by joining the form template with the data a user supplied.
  - Keeps the link intact between the form template and the barcode data files.

## Configure form fields for calculations

### How to wire up field calculations in Adobe Acrobat so totals, averages, and further math run on their own.

### Set form fields for calculations

Give the form field a right-click, then choose Properties.

Once the field properties dialog box opens, choose Calculate.

Decide how the field arrives at its value:

- When you would rather have people key values in themselves, select Value is not calculated.
- When you want particular calculation choices in play, select Value is the.

Pin down which fields feed the calculation by selecting Pick, then choosing the option you want from the Value is the dropdown menu.

For JavaScript built from field names plus simple arithmetic operators, select Simplified field notation. Select Edit to add or change JavaScripts.

For a calculation script of your own, select Custom calculation script. Select Edit to change or add JavaScripts.

Select Close.

### Set the calculation order of form fields

Once several calculated fields lean on one another, the sequence Acrobat follows while running them turns out to be critical for landing the right answer. Say Field C draws on Field A added to Field B; you then have to schedule A and B ahead of C.

Select Options of the Fields pane.

Select Set field calculation order.

Inside the Calculated Fields dialog box, highlight a field and tap the Up and Down buttons to slide it through the calculation sequence.

Select OK.

## Set form field navigation

### How to lay out field-to-field navigation for PDF forms inside Adobe Acrobat.

To shepherd users through the document smoothly, interactive PDF forms need a defined order of travel. Acrobat hands you control over the way people tab from field to field, which lifts both usability and accessibility. Lay out a sensible tab order and you let users finish forms correctly and without friction.

Head to All tools > Prepare a form.

Over in the fields panel, choose Sort By > Tab order.

Want to view how the fields are ordered for tabbing? Open the Options inside the fields pane and choose Show tab numbers.

When the confirmation dialog box appears, choose OK.

To fix the tabbing order, reach for any one of these choices:

- Order tabs by structure: Tracks the document structure order laid down in the tagging.
- Order tabs by row: Travels left to right, then drops to the next row.
- Order tabs by column: Travels top to bottom, then over to the next column.
- Order tabs manually: Lets you drag and drop fields inside the Fields panel.
- Order tabs unspecified: Falls back on the default page properties order.
- Show tab numbers: Puts the form fields' numeric order on display.

Should you go with Order tabs manually, drag and drop the fields within the Fields panel until the order suits you.

To lock in the tab order, select the option you want beneath the filter icon.

To lock in the tab order, select the option you want beneath the filter icon. Note

A field cannot be shifted onto a different page, nor can a radio button be moved into another group.

## Barcodes overview

### A rundown on putting barcodes to work in forms — why they help, how their data is handled, and design pointers for peak results.

When users fill in a form, barcodes turn those entries into scannable patterns that software can read back and tuck into a database. The approach pays off most for forms handed in on paper or sent by fax, taking much of the labor out of data entry.

### Benefits of using barcodes

Collecting and handling form data goes more smoothly with barcodes. The main payoffs are these:

- Time savings: Captures data on its own and quickens the turnaround.
- Accuracy: Cuts down on slip-ups from keying data by hand.
- Efficiency: Does away with reading and logging form answers by hand.

### Processing barcode data

Forms can capture and crunch barcode data to make data entry quicker and the whole process more efficient. Drop a barcode field onto a form and it becomes able to encode whatever the user supplies, whether they type it in electronically or write on a printed page. Once someone completes the form, how the embedded barcode gets pulled out and read back depends on the route the form took to come back.

When forms arrive by fax, dedicated software such as Adobe Acrobat Capture and LiveCycle Barcoded Forms Decoder lifts the barcode out of the faxed image and turns it back into data. Paper submissions follow much the same path: a scan produces the image, and comparable applications decode the barcode so the captured values come through cleanly and are ready for downstream use.

Note

Sold apart from Acrobat, Adobe Acrobat Capture and LiveCycle Barcoded Forms Decoder are stand-alone products aimed at enterprise workflows.

### Designing barcodes for optimal performance

A few layout habits go a long way toward barcodes that scan reliably:

- Positioning: Steer the barcode clear of envelope folds and the edges of the page so printing or faxing doesn't clip it.
- Visibility: Make sure the barcode sits where it can be seen and read without trouble. When handheld scanners are involved, favor barcodes that are tall and narrow and never exceed 4 inches across.
- Size: Give the barcode enough room for all of its data. Shrink it too far and it can collapse into a solid gray block that won't scan. Test the dimensions on a sample before you hand the form out.

## Add and test barcode fields

### Build out and try barcode fields inside Acrobat, using JavaScript to power up your PDF forms.

Before you begin

Switch on automatic calculation first. Open Preferences > Forms, tick the Automatically calculate field values checkbox, and confirm with OK.

### Add barcode fields

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

### Test barcode fields

From the Prepare a form tools pane, select Preview.

Type some sample values into the form fields. Stick to realistic entries that mirror what an actual user would put in.

Confirm the barcode field is rendering the way it should:

- A grayed-out field is a sign you might have to enlarge it or change the data settings.
- Confirm the barcode has enough surface area to hold everything that's encoded.

When you want to wipe the sample entries, select More > Clear Form in the right pane.

Leave preview mode and save the form.

## Manage custom barcode parameters

### Keep form field settings consistent in Acrobat by handling your own custom barcode parameter sets.

Hold on to custom barcode settings so you can reapply and pass them along when you build new form fields. You'll see how to make, modify, remove, and bring in or send out parameter sets to keep barcode management tidy.

### Create a new barcode parameter set

Double-click the barcode field.

In the Barcode Field Properties dialog box, select the Options tab, and then select Manage Barcode Parameters.

Use the Barcode Field Properties dialog to configure symbology, decoding conditions, and scanner settings for barcode fields in a form.

Use the Barcode Field Properties dialog to configure symbology, decoding conditions, and scanner settings for barcode fields in a form.

Pick whichever existing parameter set you'd like to build the new one on top of.

Select New.

Give the new set a name and a description.

Select options for Symbology, X Dimension, Y/X Ratio, and Error Correction Level.

Select OK.

Note

Your freshly created set shows up in the list inside the Manage Barcode Parameters dialog box, and every button along the right edge of the dialog box switches on. That same new definition also turns up under the Decode Condition menu on the Options tab of the Barcode Field Properties dialog box.

### Edit or delete a custom barcode parameter set

In the Barcode Field Properties dialog box, select the Options tab.

Select Manage Barcode Parameters.

Pick a custom parameter set out of the list.

Decide which of these you want to do:

- To edit: Select Edit, make changes to the settings, and select OK.
- To delete: Select Delete, then select OK to confirm.

### Export or import a custom barcode parameter set

In the Barcode Field Properties dialog box, select the Options tab.

Select Manage Barcode Parameters.

Decide which of these you want to do:

- To export: Select a barcode parameter set from the list and select Export. Choose a location and file name for the .bps file.
- To import: Select Import and navigate to the BPS file you want to import.

## Customize barcode fields

### Tune barcode fields in Acrobat so the data encoding and the layout both come out their best.

Barcode fields can be set up to carry extra data while keeping the encoding tight. You'll pick up how to attach fields, lean on JavaScript for the calculations, and dial in settings that keep barcodes compact and correct.

### Include more data fields in the barcode

From the All tools menu, select Prepare a form.

Double-click the barcode field.

In the Value tab:

- If Encode using is selected, select Pick, and select additional form fields to be encoded.
- If Custom calculation script is selected, select Edit, and add JavaScript to include the additional fields.

Tip

Once you've folded in the new data fields, run some sample data through to confirm the barcode has room to spare. Should the barcode area come up grayed out, resize the barcode or change the text field properties until everything fits.

### Adjust data content to fit in a barcode field

Double-click the barcode field to reach its settings.

On the Options tab, apply whichever of these changes you need:

- Select Custom and enter lower values for Error Correction Level and Y/X Ratio.
- Select a different Symbology option.
- If you are using an Adobe software decoder (available separately), go to the Options tab and select Compress Data Before Encoding to Barcode.

On the Value tab, apply whichever of these changes you need:

- Select Tab Delimited rather than XML as the data-encoding format, since XML eats up more room when it encodes.
- In the Options tab, select a different Symbology option.
- Select Pick and deselect any fields that don't need encoding.
- Enter a custom script that forces user-entered text entirely to lowercase or entirely to uppercase as it encodes.

Note

Guidance from the National Association of Computerized Tax Processors (NACTP), which the United States Internal Revenue Service and state tax agencies follow, calls for all uppercase characters in 2D barcode data.

For a smaller barcode, double-click the barcode field, head to the Value tab, and add a script that holds input to alphanumeric characters plus either all uppercase or all lowercase letters.

Tip

A handy approach is to add a few more barcode fields and route different data into each one.
