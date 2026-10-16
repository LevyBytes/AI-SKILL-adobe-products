# Communications overview — Identifying applications

For external function calls or message exchange, scripts identify target applications with namespace specifiers. A specifier includes a particular name string, such as photoshop, plus optional parts for targeting a release or locale version. Application specifiers also appear in some other contexts. For syntax details, see Application and namespace specifiers.

No matter which interapplication communication method is used, the script must be located where the application intended to run it can see it. Startup scripts for applications use different locations from scripts supplied by developers.

All JavaScript-enabled applications search the same script locations, so each script must state clearly which application should run it. A script should verify that every application it needs is installed at the correct version, and that other installed applications do not run the script. For details, see Scripting for specific applications.
