# Modification Detection and Prevention (MDP) Values

MDP settings govern which document edits may happen before a signature stops being valid. For signature fields, edits get logged outside the byte range and may cover changes saved incrementally into the document as well as in-memory changes made between opening a document and validating its signature. Only a document's first signature accepts MDP settings, and applying MDP produces a certification signature. One of these four values applies to MDP:

allowAll: Permit every change to a document with none of them voiding the signature. The upshot is that MDP goes unused for that signature. This matched how Acrobat 4.0 through 5.1 behaved.

allowNone: Block every document change unless the signature is voided. Be aware this also locks down the author's own signature.

default: Permit form field fill-in when the document contains form fields. Failing that, block any document change unless the signature is voided.

defaultAndComments: Permit form field fill-in when form fields exist in the document and allow annotations (comments) to be added, removed, or edited. Failing that, block any document change unless the signature is voided. Be aware that annotations can mask parts of a document and so alter how it looks on screen.
