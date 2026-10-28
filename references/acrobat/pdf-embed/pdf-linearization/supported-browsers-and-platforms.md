# Supported browsers and platforms

Rendering linearized PDFs through the PDF Embed API succeeds on browsers that back SharedArrayBuffer — Chrome, for one, along with the Chromium-based desktop build of Microsoft Edge. On any other desktop browser, and on mobile browsers, it quietly reverts to the standard behaviour (the non-linearized flow), pulling down the whole PDF ahead of preview.
