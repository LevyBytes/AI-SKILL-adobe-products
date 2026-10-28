# Application and namespace specifiers

Interapplication communication identifies Adobe applications through Application specifiers in every supported form.

Within ExtendScript scripts, the #target directive can name the application that should execute the script by using a specifier. See Preprocessor directives.

For interapplication messages, the specifier becomes the value of the message object's target property, identifying the application intended to receive the message.

Adobe Bridge is integrated with many Adobe applications. In document.owner, it stores an application specifier for the application responsible for creating or opening an Adobe Bridge browser window. Consult the Adobe Bridge JavaScript Reference for details.

When one application's script calls cross-DOM or exported functions, Namespace specifiers identify the application that exports those functions.
