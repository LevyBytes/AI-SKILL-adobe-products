# Developing a CC extension using ActionScript

Developers can extend Creative Cloud applications through an extensibility infrastructure built on Flash/Flex technology; each extension is packaged as a compiled Flash (SWF) file.

Creative Cloud supplies the Extension Manager for installing extensions.

Adobe Kuler is an example of an extension included with the point products. Across suite applications, Kuler presents a consistent user interface, while its internal logic varies to suit each host application.

An extension's user interface is authored in ActionScript with the Flex framework. Users usually open an extension from its own entry in the application's Extensions menu.

Adobe Extension Builder supports interactive user-interface design through the Design view of Flash Builder. With the Creative Cloud SDK, the extension's application logic can also be developed in ActionScript, then debugged in the familiar Flash Builder environment.

For application logic, the recommended choice is the ActionScript Wrapper Library ( CSAWLib ), which exposes each host application's scripting DOM as an ActionScript library. Adobe Extension Builder integrates this library closely and includes wizards for creating the extension's basic structure, running code, and debugging against suite applications such as Adobe InDesign, Photoshop and Illustrator.

The scripting DOM's methods, properties, and behavior match the descriptions in the JavaScript Scripting Reference for the relevant host application.

To learn how Adobe Extension Builder and the wrapper libraries are used, refer to the Creative Cloud SDK documentation available inside Adobe Extension Builder.
