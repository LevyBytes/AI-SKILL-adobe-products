# Top-Level (containing) Objects - Document

A document object represents an Illustrator art canvas or an opened Illustrator file; scripts can create one or obtain it through the application object.

Properties on the document object expose the contents of that document, such as:

- The current selection, meaning art objects selected by the user in the document
- All page items, the contained art objects that form the artwork tree
- Specific categories of art objects, such as symbols and text frames
- Every layer, plus the layer that is currently active

Document properties also describe the document's own state, for example:

- Document-level user settings, including ruler units
- Whether content has changed since the document was last saved
- The path of the linked file

Methods on the document object let scripts operate on the document, including:

- Saving as an Illustrator file or into another supported file format
- Activating a document or closing it
- Printing the document. A script can select a printer through a print options object, or it can inspect available printers through the application object's printer list property.

app.activeDocument

### Description

Represents an Illustrator document, with Document instances stored under the Application object.

Properties whose names begin with "default" act as document-wide default settings for the current document. Change those default values only while a document is open. Setting defaults before creating new artwork can make scripts shorter because properties such as fillColor and stroked do not need to be passed repeatedly when their default values already apply.

Color space, height, and width are fixed at document creation time. Existing documents do not allow later changes to those properties. For handling of document color spaces, see Application.open().
