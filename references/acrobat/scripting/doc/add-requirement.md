# addRequirement

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0.5 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Lets a PDF document be built such that some requirement has to be met for the document to work correctly in Acrobat.

Whenever Acrobat opens a document that carries a requirement, it attempts to meet that requirement before letting the user interact with the document at will. Should the requirement go unmet, the application can restrict what the document is able to do.

Note

Calling this method is limited to a console or batch event. See Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| cType | Which kind of document requirement. The Requirements Enumerator object spells out the kinds. |
| oReq | (Optional) A Requirement object. |

Requirements enumerator object

Every requirement type a document might carry so as to work properly in Acrobat is listed by this object.

| Property | Description |
| --- | --- |
| requirements.EnableJavaScripts | Certain documents hold data-validation scripts that could go unrun if the Enable JavaScript Execution user preference has been switched off. Through this property a PDF document can compel its scripts to run within Acrobat. The user gets a prompt either to permit JavaScript execution for that specific document or to open it read-only. |

Requirement object

Properties describing what the requirement is about are held by this generic object

| Property | Description |
| --- | --- |
| aRH | (Optional) An array of ReqHandler objects. |

ReqHandler object

Details about a requirement handler usable when Acrobat encounters an unrecognized requirement live in this generic object. For that unrecognized requirement, the viewer ought to hand off requirement checking to the array's first handler that supports the type. Where no requirement handler turns up to cope with the unrecognized requirement, the viewer should supply a generic message.

| Property | Description |
| --- | --- |
| cType | A string naming the requirement handler's type (the ReqHandlers Enumerator object holds a list of the names available). |
| cScriptName | (Optional) A string giving the name of a document-level JavaScript that the document contains. It can appear when cType holds the value reqHandlers.JS. Should the requirement be satisfied, the named script won't run. |

ReqHandlers Enumerator object

The kinds of requirement handlers a document might carry are enumerated by this object.

| Property | Description |
| --- | --- |
| reqHandlers.JS | Document-level scripts that handle unrecognized requirements inside the PDF document are managed by this handler. |
| reqHandlers.NoOp | Through this handler, older viewers can skip past unrecognized requirements. |

Example: Attach a requirement that switches on JavaScript in a document.

```javascript
this.addRequirement(this.requirements.EnableJavaScripts,
    {aRH: [{cType: reqHandlers.JS, cScriptName: "requirement"}]});
```
