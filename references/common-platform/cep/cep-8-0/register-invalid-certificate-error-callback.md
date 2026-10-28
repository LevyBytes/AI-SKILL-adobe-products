# Register invalid certificate error callback

(Since 6.1)
An extension can register an invalid-certificate error callback. The callback runs when the extension tries to access a web site that has an invalid certificate on the main frame. Without this function, attempting to load a web site with an invalid certificate shows the default error page:

Documented signature (call contract, not a function implementation):

`CSInterface.prototype.registerInvalidCertificateCallback = function(callback)`
