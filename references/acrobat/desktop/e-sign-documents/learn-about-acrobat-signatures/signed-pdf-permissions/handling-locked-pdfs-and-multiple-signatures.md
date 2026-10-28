# Handling locked PDFs and multiple signatures

Why the locking behaviour and the order of signing matter:

- As soon as a digital signature lands on a PDF, everyone else sees it as read-only.
- Turn on the Lock document after signing option and the file is sealed for good, the signer included.
- Should a PDF lock itself after that first signature, your only route is to rebuild it or ask the owner for a fresh copy. Out of the box, PDFs stay open to signing right up until the signer picks Lock document after signing.
- That leaves one fix: build the PDF again, or get an unsigned copy from whoever owns the document.
