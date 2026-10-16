# Cross-DOM functions — Application-specific exported functions

Beyond the required base cross-DOM functions, each message-enabled application can expose application-specific features to all scripts through a simple syntax. Any script can call exported functions by placing the target application's namespace specifier before the function name (see Namespace specifiers). For example, because Photoshop CS5 exports photomerge, an Illustrator CS5 script can call photoshop.photomerge(files) directly.

Cross-DOM functions and application-specific exported functions differ only in scope: all applications expose the same cross-DOM function set, while each application exposes its own application-specific functions. Each application decides how much functionality it exports.

Exported-function support is extensive in some applications and narrower in others.

For details on additional functions exported by individual applications, refer to those applications' startup scripts. Application startup scripts use the name appname-n.jsx, where n is the installed application's version number. See Startup folder locations.
