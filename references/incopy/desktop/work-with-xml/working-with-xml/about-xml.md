# About XML

XML (Extensible Markup Language) supports data reuse in a file and can automate replacing data in one file with data from another. XML uses tags to describe file parts, such as a heading or a story. Those tags identify data so it can be stored in an XML file and processed correctly during export to other files. Treat XML as a data-translation mechanism: XML tags label text and other content so applications can recognize the data and present it.

Extensible language

XML is extensible because people define their own XML tags. They can make one tag for each category of information they plan to reuse. XML tags do not specify how data should be displayed or formatted; they identify content only.

For example, in InCopy , you can create a Heading1 tag and apply it to every first-level heading in a document. After the document is saved as an XML file, any XML-capable application can import the Heading1 content and use it for a web page, printed catalog, directory, price list, or database table.

Many applications, including InDesign, can create and use XML. Once content in an InDesign file is tagged, you save and export the file as XML so it can be reused in another InDesign file or another application. Likewise, you can import XML into InDesign and direct InDesign to display and format the XML data however you choose.

Adobe InCopy is one of many applications that can create and use XML. After tagging content in an InCopy file, save and export it as XML so it can be reused in another InCopy file, an InDesign file, or a different application.

In InCopy , you can create XML tags and apply them to parts of a document even without XML experience. Behind the scenes, InCopy handles the XML programming and creates the XML during export to XML format.

Note

XML tags are not the same as InCopy tagged text. View the Tagged Text PDF at www.adobe.com/go/learn_id_taggedtext_cs5_en (PDF) for details on tagged text, which provides a separate export and import method for InCopy content.

XML data structure

In XML data, an element is the basic building block: it is data with a tag applied. XML files nest elements inside other elements to form a hierarchy.

The Structure pane shows the hierarchy and order of XML data. In the XML structure, child elements sit inside parent elements, and those parent elements can themselves be child elements. From the reverse perspective, a parent element can contain child elements that later function as parents for still other child elements.

In one example image, a chapter element contains, and is the parent of, several recipe elements. Each recipe element is then the parent of elements named recipename, ingredients, instructions, notes, and servings. The Root element contains all elements and is shown in the Structure pane's top position.

XML in InDesign Structure pane (left) and placed in layout (right)

In another example image, a chapter element contains, and is the parent of, one recipe element. That recipe element is the parent of elements named recipename and ingredients. The Story element contains every element and is always shown in the Structure pane's top position.

InCopy document formatted with XML tags

InCopy document formatted with XML tags
