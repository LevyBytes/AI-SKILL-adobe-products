# Communications overview — Remote function calls

The cross-DOM is a limited group of basic functions shared by all message-enabled applications. It lets a script do tasks such as open or print files in other applications by calling that application's open or print function.

- Cross-DOM functions explains how to use this feature.
- Cross-DOM API reference gives reference details for the basic cross-DOM functions.

Message-enabled applications can also export selected application-specific functions; Application-specific exported functions covers those exports.

As one example, an Adobe Bridge script can request a Photoshop photo merge by calling photoshop.photomerge(files). The available function set differs widely from one application to another.
