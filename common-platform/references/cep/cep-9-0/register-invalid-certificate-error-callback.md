# Register invalid certificate error callback

(Since 6.1)
For an extension, register a callback for invalid certificate errors. The callback fires when the extension reaches a web site whose main frame has an invalid certificate. Without this registration, visiting that kind of web site shows CEP's default error page:

Signature: `CSInterface.prototype.registerInvalidCertificateCallback = function(callback)`.
