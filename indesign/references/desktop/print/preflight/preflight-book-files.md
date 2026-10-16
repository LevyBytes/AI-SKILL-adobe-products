# Preflight book files

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
