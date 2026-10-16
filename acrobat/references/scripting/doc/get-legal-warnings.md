# getLegalWarnings

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back this document's legal warnings packaged as an object, with one entry per warning turned up in the document.

Note

Across Acrobat releases earlier than 8.0, a call to Document.getLegalWarnings would dirty the document.

Adobe Reader cannot run the process that inspects a file to compile this warning list.

Parameters

| Parameter | Description |
| --- | --- |
| bExecute | Pass true and the file gets inspected, with every warning that turns up returned. Acrobat 8 carries out that inspection by way of a PDF/SigQ conformance check. Pass false — the default — and back come the warnings already embedded in the file, plus the certifier's attestation should one exist. Under Acrobat 6 and 7, the act of certifying can embed legal warnings into a file (through cLegalAttest on the Field object method signatureSign ). Under Acrobat 8, the certifier may still tuck in an attestation, though no longer the warnings themselves. Reach that attestation by invoking this method with bExecute=false. |

Returns

A DocLegalWarning object that pairs property names with the values of legal warnings. Each entry's value counts how many times that warning shows up in the document. With bExecute set to false, the PDF Reference lists the possible property names. With bExecute set to true, the property names line up with the PDF/SigQ level A violations enumerated below. Keep in mind that the warnings the PDF Reference lists overlap with — yet differ markedly from — the list below.

DocLegalWarning object

The properties below characterize the PDF/SigQ1-A Violations.

| Property | Description |
| --- | --- |
| AlternateImages | An alternate version is forbidden inside an Image XObject. |
| Annotations | The document carries comments, whose visual appearances can shift depending on external variables. |
| CatalogHasAA | Concealed actions the end user may neither intend nor know about reside in the document. Examples run from JavaScript actions — firing on document open or save and so forth — to triggering a menu command or kicking off multimedia playback. |
| CatalogHasOpenAction | The document holds concealed actions set to fire on open. The end user may neither intend nor be aware of these actions. Such things range from running a menu command or starting multimedia to JavaScript actions tied to events like document open and save. |
| `DevDepGS_FL` | The FL key appears in the document's extended graphic state. That key holds a number setting how much flatness tolerance to allow while objects are drawn. Content might render one way in Acrobat and differently elsewhere. |
| `DevDepGS_TR` | A PDF transfer function in the document reinterprets and swaps out color — it could, for instance, turn black into white. |
| DocHasCryptFilter | Part or all of the content sits encrypted under a method that standard Acrobat installations lack. The document might, for example, be guarded by LiveCycle Policy Server. Streams encrypted by way of the crypt filter live in the document. |
| DocHasNonSigField | Form fields other than signatures are present in the document. How such fields look can vary with external variables. |
| DocHasPresentation | Presentations are barred, since one might house animations or other pieces capable of altering how the document looks or acts. |
| DocHasPSXObj | External variables can shift the visual elements — a logo, say, recoloring itself according to time or zoom level. PostScript XObjects are not permitted. |
| DocHasXFA | Documents built on XFA (dynamic forms) are disallowed, because forms of that kind could change the document's look or behavior. |
| DynamicSigAP | Signed signature fields whose visual appearance can vary with external variables are present in the document. |
| ExternalOPIdicts | Images that sit outside the PDF file are linked as alternates by the document — a high-resolution alternate image might be named for printing, for example. Images and form XObject must not carry an OPI alternate version. |
| ExternalRefXObjects | The document links out to images that the PDF file itself does not contain. External XObjects are not permitted. |
| ExternalStreams | External streams are present in the document. The author has tagged certain PDF bytes as a stream that may draw its data from somewhere external. |
| GoTo3DViewActions | Go To 3D View actions in the document can rework the document's look by handling 3D views without the user catching on. |
| GoToEHasF | The document links out to external PDF documents over the Internet, file system, or network, with no say over what that linked content contains. Embedded Go To actions must not point to external hierarchies. |
| GoToRemoteAction | Go To actions that may reach out to external content are present in the document. |
| InvalidEOF | Stray bytes trail past the PDF's end of file marker in the file. |
| InvalidFileHeader | Stray bytes sit ahead of the PDF's file header in the file. |
| JavaScriptActions | JavaScript actions capable of firing without the user knowing are present in the document. |
| LaunchActions | Launch File Attachment actions are present in the document. |
| MalformedContentStm | Drawing instructions are malformed: a syntax error. The grammar that governs page content definition is broken by the page content. The instruction might call for drawing a square, say, while the syntax used to do so is wrong. |
| MovieActions | Launch Movie actions that may fire without the user knowing are present in the document. |
| NonEmbeddedFonts | Fonts that are not embedded sit in the document. Open it on a system missing the needed fonts and Acrobat swaps in some other font. Keeping font-related warnings switched on is always advisable. |
| OptionalContent | The document's content is split into layers, and those layers can be shown or hidden silently on the fly. |
| PageHasAA | Concealed actions that the end user may neither intend nor know about reside on a page. The range covers menu-command execution, multimedia playback, and JavaScript actions bound to events such as document open or save. |
| RenditionActions | Rendition actions that may be used to fire off movies without the user knowing are present in the document. |
| SetOCStateActions | SetOCState actions in the document can recolor the document's look by toggling layers' visibility without the user catching on. |
| SigFieldHasAA | Actions that a mouse over or other user interaction could trigger sit on a signature field. They take in menu-command execution, multimedia playback, and JavaScript actions hooked to events like document open and save. |
| SigFieldHasAction | Actions that a click could trigger sit on a signature field. The set includes starting multimedia, running a menu command, and JavaScript actions attached to events such as document open and save. |
| SoundActions | Launch sound actions are present in the document. |
| TrueTypeFonts | This document draws on TrueType fonts. Because they are programs and may shift the document's appearance according to external variables, TrueType and TrueType-based OpenType fonts are disallowed. PDF/SigQ does not mandate this restriction, and it goes unreported unless the preference setting securityDigSigbTrueTypeFontPDFSigQWarn is set to 1. |
| UnknownNamedAction | <br>Named actions that may set off menu items without the user knowing are present in the document. |
| UnknownPDFContent | PDF content goes unrecognized: content — PDF or custom — that the running version of Acrobat does not handle sits in the document. A later Acrobat release (PDF 1.8 or higher) may have produced it. |
| UnknownPDFContentStmOp | A drawing operator goes unrecognized: content — PDF or custom — that the running version of Acrobat does not handle sits in the document. A later Acrobat release may have produced it. |
| URIActions | Launch URI actions that link out to external content are present in the document. |
| XObjHasInterpolate | Image interpolation has been switched on by the document author. Image interpolation is not permitted at all. |

Example: Run a document through processing and pull its legal PDF warnings.

```javascript
var w = this.getLegalWarnings( true );
console.println( "Actual Legal PDF Warnings:" );
for(i in w) console.println( i + " = " + w[i] );

var w1 = this.getLegalWarnings( false );
console.println( "Declared Legal PDF Warnings:" );
for(i in w1) console.println( i + " = " + w1[i] );

// For a certification signature, note also if annotations are
// allowed by MDP settings

var f = this.getField( "AuthorSig" );
var s = f.signatureInfo();
if( s.mdp == "defaultAndComments" )
    console.println( "Annotations are allowed" );

// What does the author have to say about all this?

console.println( "Legal PDF Attestation:" );
console.println( w1.Attestation );
```
