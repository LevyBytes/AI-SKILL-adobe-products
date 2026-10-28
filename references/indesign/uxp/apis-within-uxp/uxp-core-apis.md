# UXP Core APIs

Use these APIs for UI creation, file operations, network calls, and similar tasks.

The way you mount or access these APIs can differ. Many are directly available in the global scope, including [Crypto](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-js/global-members/crypto/index.md) and [Documents](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-js/global-members/html-dom/document.md). Other modules require manifest permission first (for plugins) or explicit mounting with `require()`. Examples include `require('os')` and `require('uxp').shell`.
