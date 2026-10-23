# Preprocessor directives - #targetengine enginename

Identifies the JavaScript engine, inside the selected target application, that should run this JSX file.

Adobe Illustrator CS5 and Adobe InDesign CS5 support this directive; other applications skip over it.

- In Adobe Illustrator CS5 and Adobe InDesign CS5, when the requested engine is missing and the script begins inside the application, rather than from the ExtendScript Toolkit or an interapplication message, the application creates a JavaScript engine with this name and keeps it available until the application session ends.
- When the script comes from outside the application and no engine with that name exists, the directive has no effect.
