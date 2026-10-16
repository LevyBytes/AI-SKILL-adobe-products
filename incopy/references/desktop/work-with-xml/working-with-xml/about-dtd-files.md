# About DTD files

Sharing XML data with other people requires agreement on a standard collection of tag names and element attributes, so everyone in the group applies tags consistently. One way to manage this shared XML structure is to use a document type definition (DTD) file.

A DTD file supplies group members with a defined set of elements and attributes. It also sets rules for where elements may appear in the structural hierarchy. For example, because a title belongs inside a story, the DTD file might require the Title element to be placed under the Story element. If you tag a title but do not tag the story containing it, the DTD file identifies the Title element as invalid. Searching for and flagging invalid structure in an InDesign file with a DTD file is called validating.

To use a DTD file when the document does not already contain one, load it into the document. Loading imports the element names from the DTD into the Tags panel. Other users who load the same DTD file get matching element names, helping everyone in the group use the same elements. Imported elements are locked, so they cannot be deleted or renamed unless the DTD file is removed from the document.

InCopy cannot import a DTD file directly, but DTD files imported in InDesign are available while you edit the story in InCopy. InCopy lets you view the DTD file and validate stories against it to confirm correct tag application.

DTD file opened for viewing in InCopy

DTD file opened for viewing in InCopy
