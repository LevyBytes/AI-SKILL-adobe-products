# ExtendScript overview — Interapplication communication and messaging

Across Adobe applications that enable JavaScript, ExtendScript supplies a shared scripting environment and supports script-based communication between applications.

Communication is available at different levels through cross-DOM functions and the messaging framework.

- Cross-DOM functions form a small basic set shared by message-enabled applications. A script can, for example, call the target application's open or print function to open or print files there. Beyond the shared basic set, some applications export broader groups of JavaScript functions for use by other applications.
- The interapplication messaging framework is an application programming interface (API) for extensive control over communication between applications. Through this API, scripts can send messages to other applications and receive results, or receive messages from other applications and return results. The data passed between applications is usually JavaScript scripts. However, the messaging framework can be extended, allowing you to define different data types for transfer between applications and specify how those types are handled.

See Interapplication Communication with Scripts for full information.
