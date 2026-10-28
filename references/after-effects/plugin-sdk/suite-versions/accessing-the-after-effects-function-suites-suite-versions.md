# Accessing the After Effects Function Suites - Suite Versions

As an illustration, WhizBangSuite1 might expose a Foobar() entry point accepting two arguments, while WhizBangSuite2>Foobar() could accept three. A fresh release of a suite replaces its predecessor, but you are welcome to hold references to several versions at once — previously shipped suites are never withdrawn or modified on our end.

If you cannot be certain what the plug-in host supports (apart from Premiere, no third-party host implements PICA), try to obtain the newest version first and "fall back" toward earlier ones. Should a capability you depend on be missing, alert the user and hand back an error — or, on more "primitive" plug-in hosts, substitute alternate behavior. Be aware that, across other hosts running After Effects plug-ins, suite support resembles a maze of twisty caves and passages, all alike.
