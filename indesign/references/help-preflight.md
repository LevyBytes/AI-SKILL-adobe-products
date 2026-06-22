# Configure And Use The Preflight Panel, Create And Manage Preflight Profiles, View And Resolve Preflight Errors, Live Preflighting ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Configure and use the preflight panel; Create and manage preflight profiles; View and resolve preflight errors; Turn on or off live preflight; Preflight book files; Package InDesign files for output.

## Configure and use the preflight panel

In Adobe InDesign, use this workflow to open the Preflight panel, inspect reported errors, and adjust preflight behavior.

As you work, the Preflight panel watches the document for production risks. With live Preflight enabled, a status indicator at the bottom of the document window reports issues including missing fonts, changed links, overset text, and images with insufficient resolution.

### Open a preflight panel

Open any InDesign document.

Choose Window > Output > Preflight to open the panel.

After it opens, the Preflight panel groups detected problems by category, including Links, Text, and Color, then provides details and repair suggestions for each error. The list refreshes while you continue editing, and page numbers let you jump straight to affected content.

Profiles can be managed by embedding one profile in each document or by exporting IDPP files for sharing and backup, with the exception of the [Basic] profile. Preflight options determine the checked content and page ranges, which in turn controls the errors shown for the active document.

### Configure preflight options

Choose Window > Output > Preflight.

Open the panel menu icon, then choose Preflight Options.

From Working Profile, choose the profile that should be used by default for new documents.

Enable Embed Working Profile Into New Documents when new documents should automatically include the working profile.

In When Opening Documents, choose Use Embedded Profile or Use Working Profile to decide whether opening a file uses its embedded profile or the selected working profile.

From Layers, choose All Layers, Visible Layers, or Visible & Printable Layers to define which layers are included in error checking.

Enable Non-Printing Objects when errors should be reported for objects marked as non-printing in the Attributes panel or for parent page objects where Hide Parent Items is applied.

Enable Objects On Pasteboard when objects outside page boundaries on the pasteboard should be checked and reported.

Choose OK to save the preflight options.

Tip

To avoid reports for content you do not plan to print or export, leave hidden layers out of preflight checking.

### Specify a page range for preflight checking

Choose Window > Output > Preflight.

At the bottom of the Preflight panel, enter the page range to check, such as 1-8 or 3, in the page range field.

Errors found outside the entered range do not appear in the list. Page ranges use the same syntax as the Print dialog box: hyphens indicate consecutive pages, and commas separate single pages or ranges.

Note

Entering a page range does not turn preflight off for the other pages. It only filters which errors are listed in the Preflight panel.

## Create and manage preflight profiles

Use embedding, exporting, and loading of profile files to share Adobe InDesign profiles between documents or keep backup copies.

### Create or customize preflight profiles

Preflight profiles specify the document conditions that InDesign reports as errors during quality checks. Custom profiles let those checks reflect a particular production target, such as print, digital delivery, or internal review. Many prepress providers distribute required profiles that can be imported into InDesign so jobs are checked consistently.

### Create a new preflight profile

Choose Window > Output > Preflight to open the Preflight panel.

Open the panel menu icon, and then choose Define Profiles.

In the Preflight Profiles dialog box, choose the New preflight profile icon and enter a descriptive profile name.

Choose the needed settings under General, LINKS, COLOR, IMAGES and OBJECTS, TEXT, and DOCUMENT.

Choose Save to keep the changes, then create another profile or revise an existing profile.

Choose OK.

After a profile is created, it can be applied right away to the current document or embedded for use when the document is shared. To apply one, choose it from the Profile menu in the Preflight panel.

### Customize a preflight profile

Choose Window > Output > Preflight to open the Preflight panel.

Open the panel menu icon, and then choose Define Profiles.

Choose a profile in the Preflight Profiles dialog box.

Choose the needed settings under General, LINKS, COLOR, IMAGES and OBJECTS, TEXT, and DOCUMENT.

Choose Save to keep the changes, and then choose OK.

### Embed a profile in a document

Choose Window > Output > Profile to open the Preflight panel.

From the Profile list, choose the profile to embed.

Choose the Click to embed selected profile icon. An embedded profile travels with the document, although it does not require recipients to use it. When they open the document, recipients can choose another profile.

### Export a profile for sharing or backup

Exporting makes a standalone IDPP file for sharing with colleagues or restoring profile settings after preferences are reset.

Choose Window > Output > Profile to open the Preflight panel.

Open the Preflight panel menu icon, and choose Define Profiles.

In the Preflight Profiles dialog box, choose the profile to export.

Open the Preflight profile menu icon, then choose Export Profile.

Choose Export Profile and save it in your system as an IDPP file.

Choose Export Profile and save it in your system as an IDPP file.

Enter a filename and location, then choose Save.

### Remove an embedded profile from a document

Choose Window > Output > Profile to open the Preflight panel.

Open the Preflight panel menu icon, and choose Define Profiles.

In the Preflight Profiles dialog box, choose the profile to unembed.

Open the Preflight profile menu icon, then choose Unembed Profile.

Choose OK to confirm removal of the selected preflight profile from the document.

Choose OK.

### Load an imported profile

Profiles supplied by other people can be loaded either from IDPP files or from profiles embedded in InDesign documents.

Choose Window > Output > Profile to open the Preflight panel.

Open the Preflight panel menu icon, and choose Define Profiles.

Open the Preflight profile menu icon, then choose Load Profile.

Choose the IDPP file, then choose Open. The imported profile is now visible in the Preflight Profiles dialog box.

Choose OK.

### Delete a preflight profile

Choose Window > Output > Profile to open the Preflight panel.

Open the Preflight panel menu icon, and choose Define Profiles.

In the Preflight Profiles dialog box, choose the profile to delete.

Choose the Delete preflight profile icon.

Choose OK to confirm deletion.

Choose OK.

Note

The [Basic] profile cannot be deleted, and deleted custom profiles cannot be restored. Export any profiles you may need later before deleting them.

## View and resolve preflight errors

Use the Preflight panel and its Info area to review error lists, then fix Adobe InDesign document problems before print output.

With live preflighting enabled, the Preflight panel sorts detected problems into categories. Category entries expose issue-specific rows, and selecting a row reveals contextual details for that problem.

### Navigate and identify errors

Select Window > Output > Preflight.

Inspect the error categories shown in the panel.

Use the arrow icon beside a category to open it and see individual errors.

Choose an error row. The Info section at the end of the error list then shows details for the selection. That section gives guidance tied to the selected error, explains the cause, and points to corrective steps for that error type.

Read the description together with the proposed fixes.

### Locate and view problem items

Select Window > Output > Preflight.

Find the error entry that you plan to fix.

Choose the page number in the Page column. InDesign moves to that page and highlights the page item that contains the error.

Inspect the item so you can determine the exact condition behind the error.

While reviewing errors, remember that overset text, hidden conditions, notes, and deleted text retained by tracked changes are not listed. Parent page items that contain errors are listed a single time, although every page based on that parent can have the same error.

Note

Errors for nonprinting page items, pasteboard items, and items on hidden or nonprinting layers are listed only when the matching settings are enabled in the Preflight Options dialog box.

### Fix errors and verify resolution

Select Window > Output > Preflight.

Choose the error entry you intend to resolve.

Make the change recommended in the Info section. When the problem comes from a reusable design component, such as a style or swatch, fix that original component instead of editing separate occurrences.

Watch the error list and confirm that the entry is removed once the correction is applied.

Repeat this workflow for the remaining errors.

### Review error reports

Select Window > Output > Preflight.

Open the panel menu icon, then choose Save Report.

In the Save Preflight Report dialog box, browse to the destination folder for the preflight error report.

Choose the Format value, .pdf or .txt, and type the Save As name.

Select Save. The generated report contains error details, document statistics, profile information, and timestamps.

When you need a broader resource inventory, including fonts, inks, links, and elements beyond preflight errors, use the Package feature instead. Open it with File > Package.

## Turn on or off live preflight

Toggle live error checking for Adobe InDesign documents from the Preflight panel or the document-window menu.

Live preflight watches the InDesign document while you work and reports possible production problems. When enabled, the document-window status bar ends with a circle icon. A green circle means no errors are currently detected; a red circle means items need attention.

### Control preflight for the active document

Open the document you want to check.

Select Window > Output > Preflight to display the Preflight panel.

Turn on the On checkbox in the upper-left corner of the Preflight panel for this document.

After preflight is enabled, InDesign checks the file against the active preflight profile right away, lists any found errors in the panel, and changes the status bar icon to match the current condition.

Tip

Another way to disable preflight is to use the down arrow icon beside the green or red circle icon at the bottom of the document window, then choose Preflight Document from the menu.

### Set the default for all documents

Select Window > Output > Preflight to display the Preflight panel.

From the panel menu icon, choose Enable Preflight For All Documents to enable preflight for every document.

Note

Turning off global preflight does not change documents where preflight is already enabled. Preflight state is stored per document.

## Preflight book files

Run preflight across every document in an Adobe InDesign book file to check whether the book is ready for print.

Book preflight applies one set of criteria to all included documents, helping you find problems such as missing fonts, broken links, or incorrect color spaces.

Use this check before packaging or export so every document in the book meets production requirements. The Book panel uses status icons to show whether a document has errors or still needs review.

Open the book file with File > Open.

Open the Book panel menu and choose Preflight Book.

Choose Entire Book or Selected Documents Only in the Preflight Book Options dialog box.

Choose a Preflight Profile setting:

- Use Profile: lets you pick a profile from the dropdown menu.
- Use Document's Embedded Profile: applies the embedded profile stored with each document.

Under Include, decide which content participates in the error list:

- Layers: choose All Layers, Visible Layers, or Visible & Printable Layers to define which layer contents are preflighted.
- Objects on Pasteboard: includes pasteboard objects when checking for errors.
- Non-printing Objects: reports errors on objects set as nonprinting in the Attributes panel.

Select Generate Report to create a text or PDF file listing every error in the book.

Select Preflight.

Note

- Once preflight finishes, the Book panel displays status icons for each document. Red icons mean errors exist. Open that document and use Window > Output > Preflight for detail.
- A book that uses a different preflight profile may show different errors after you open a document later, because another profile can be applied.

## Package InDesign files for output

Gather an Adobe InDesign project's assets into one folder for handoff.

Packaging produces a folder containing the InDesign document, linked graphics, fonts, and a report, which makes output handoff more reliable. Use the package when files need to go to a printer or collaborator. Run preflight first so issues such as missing fonts or links are fixed before packaging.

### Create and save a package

Select File > Package.

Check the preflight summary and look for errors marked by the alert icon.

If issues are present, choose Cancel and resolve them through Window > Output > Preflight before you continue.

Select Package to move on to Package Publication.

Choose a location and enter the package folder name.

Enable these options as needed:

- Copy Fonts (Except activated from Adobe Fonts): adds the needed font files to the package.
- Copy Linked Graphics: adds every placed image and illustration.
- Update Graphic Links In Package: changes links so they point to graphics inside the package folder.
- Include Fonts and Links From Hidden and Non-Printing Content: brings in assets from hidden or non-printing layers when required.
- Include IDML: adds an InDesign Markup file for backward compatibility.
- Include PDF(Print): places a print-ready PDF made with the selected preset beside the native document.
- Use Document Hyphenation Exceptions Only: avoids text reflow on systems that use different hyphenation settings. Turn this on for shared files.
- View Report: opens the printing instructions report after packaging. This is available only when Create Printing Instructions is selected.

Select Package.

### Configure printing instructions

Select File > Package.

In the Package dialog box, select Create Printing Instructions so detailed printer specifications are included.

Enter contact information, project details, and special instructions in the Printing Instructions dialog box.

Give the instructions report a filename. It appears as a text file inside the package folder.

Select Continue to advance to Package Publication.

Note

- If PDF creation produces warnings, the PDF is still created successfully, but a warning message appears.
- Any error during PDF/IDML creation or packaging triggers a complete rollback, so nothing is created.
- Created IDML and PDF filenames match the INDD document.
