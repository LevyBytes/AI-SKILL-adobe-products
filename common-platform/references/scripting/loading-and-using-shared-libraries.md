# Loading and using shared libraries

Create a new ExternalObject object to load an external shared library into JavaScript. The resulting instance manages and contains the JavaScript interface for the library. It also offers logging that writes status information to the JavaScript Console in the ExtendScript Toolkit, which helps with debugging external-library use.

After the library is loaded, JavaScript can use its exported symbols. JavaScript code can call functions defined in the library either directly on the ExternalObject instance or indirectly through object types defined by the library.
