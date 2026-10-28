# ExtendScript features

Illustrator-specific scripts that call the Illustrator JavaScript DOM directly are written as ExtendScript files and are identified by the .jsx extension.

Using .jsx for JavaScript files instead of the ordinary .js JavaScript extension gives access to ExtendScript tools and features.

ExtendScript includes the standard JavaScript feature set and adds a development and debugging environment, the ExtendScript Toolkit (ESTK).

All scriptable Adobe applications install ESTK, and JSX files use ESTK as their default editor. ESTK also includes an Object Model Viewer with full documentation for JavaScript object methods and properties. See Viewing the object model for instructions on opening ESTK and the Object Model Viewer.

ExtendScript also includes several tools and utilities:

- A utility for localization
- Tools for combining scripts and targeting them to specified applications
- File and folder representation that works across platforms
- Tools for creating user interfaces for scripts
- A messaging framework for sending and receiving scripts and data between scripting-enabled Adobe applications

These features are available both when you use the DOM directly from a JSX file and when you work through the ActionScript wrapper library with Adobe Extension Builder. For these features and others, see JavaScript Tools Guide.
