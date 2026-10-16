# metadata

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | Not available in Reader | String | R/W |

Opens up the XMP metadata that a PDF document carries inside it. What comes back is a string holding that metadata as XML. The PDF Reference covers embedded XMP metadata in detail.

Exceptions

Assigning metadata a string that is not valid XMP triggers RaiseError.

Example 1: Attempt to assign metadata that is not in XMP format.

This intentionally invalid metadata assignment demonstrates rejection of non-XMP input. Expected error: `The given metadata was not in the XMP format`.

```javascript
this.metadata = "this is my metadata";
```

Example 2: Generate a PDF report file holding a document's metadata.

```javascript
var r = new Report();
r.writeText(this.metadata);
r.open("myMetadataReportFile");
```

Example 3: (Acrobat 8.0) Here is a demonstration of editing a document's metadata through E4X. It fills in the Copyright Status, the Copyright Notice, and the Copyright Info URL fields. You can fire this from the console or run it as a batch sequence.

Acrobat E4X metadata example: XML literals and namespace operators require the documented Acrobat JavaScript host; standard JavaScript/Node parsers do not support them.

```javascript
   var CopyrightStatus = "True";
   var CopyrightNotice = "Copyright(C) 2006, Example Systems, Inc."
   var CopyrightInfoURL = "http://www.example.com"
   var meta = this.metadata;
   var myXMPData = new XML(meta);
   myx = new Namespace("adobe:ns:meta/");
   myrdf = new Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
   mypdf = new Namespace("http://ns.adobe.com/pdf/1.3/");
   myxap = new Namespace("http://ns.adobe.com/xap/1.0/");
   mydc = new Namespace("http://purl.org/dc/elements/1.1/");
   myxapRights = new Namespace("http://ns.adobe.com/xap/1.0/rights/");
   var p = myXMPData.myrdf::RDF.myrdf::Description;
   /*
       We test whether this element has a value already, if no, we assign it a

        value, otherwise we assign it another value.
   */
   if (p.mydc::rights.myrdf::Alt.myrdf::li.toString() == "") {
       p[0] +=  <rdf:Description rdf:about=""
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
           <dc:rights>
               <rdf:Alt>
                   <rdf:li xml:lang="x-default">
                       {CopyrightNotice}
                   </rdf:li>
               </rdf:Alt>
           </dc:rights>
       </rdf:Description>
   } else
       p.mydc::rights.myrdf::Alt.myrdf::li = CopyrightNotice;
/*
   Some elements are converted into attributes, so we need to first test
   whether the xapRights:Marked attribute is present, if not, we add it in as an
   element; otherwise, if the attribute is present, we update the attribute.
   Acrobat changes certain elements into attributes; the xapRights:Marked and
   xapRights:WebStatement are two such examples, but dc:rights above is one
   that is not changed into an attribute.
*/
   if (p.@myxapRights::Marked.toString() == "" ) {
       p[0] +=  <rdf:Description rdf:about=""
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:xapRights="http://ns.adobe.com/xap/1.0/rights/">
           <xapRights:Marked>{CopyrightStatus}</xapRights:Marked>
           <xapRights:WebStatement> {CopyrightInfoURL} </xapRights:WebStatement>
       </rdf:Description>
   } else {
       p.@myxapRights::Marked = CopyrightStatus;
       p.@myxapRights::WebStatement = CopyrightInfoURL;
   }
// Convert myXMPData into a string
   myNewXMPStr=myXMPData.toXMLString();
// and assign it to the document metadata
   this.metadata = myNewXMPStr;
```
