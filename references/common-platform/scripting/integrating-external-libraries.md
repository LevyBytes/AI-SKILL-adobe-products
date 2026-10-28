# Integrating External Libraries

An application's JavaScript DOM can be extended with a C or C++ shared library that is compiled for the current platform and loaded into JavaScript as an ExternalObject object. The shared library appears as a DLL on Windows, a bundle or framework on Mac OS, or a SharedObject on UNIX.

Library functions can be reached directly through the ExternalObject instance. You can also define an interface that lets C/C++ code create and access JavaScript classes and objects.

Every Adobe Creative Suite 4 application supports this capability.
