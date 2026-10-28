# Register invalid certificate error callback

(Since 6.1)
An extension can register a callback for invalid certificate errors. The callback is fired when the extension tries to access, in the main frame, a web site with an invalid certificate. If the extension has not called this function and then accesses such a site, CEP shows the default error page:

Signature: `CSInterface.prototype.registerInvalidCertificateCallback = function(callback)`.
