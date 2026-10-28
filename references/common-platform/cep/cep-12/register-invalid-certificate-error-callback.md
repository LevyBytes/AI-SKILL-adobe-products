# Register invalid certificate error callback

(Since 6.1)
Register an invalid-certificate callback for an extension. The callback runs when the extension tries to load a main-frame web site with an invalid certificate. If the extension attempts that load without registering this function, CEP shows a default error page:

Signature: `CSInterface.prototype.registerInvalidCertificateCallback = function(callback)`.
