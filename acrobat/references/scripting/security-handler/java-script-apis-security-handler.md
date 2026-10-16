# JavaScript APIs — SecurityHandler

You reach signature, encryption, and directory features through SecurityHandler objects. The exact properties and methods differ from one security handler to the next. What follows lays out every property and method a security object might carry. Any given SecurityHandler object is free to implement some, all, or none of them.

The way to get hold of a SecurityHandler object is the security.getHandler method.

Acrobat 5.0 brought the JavaScript interface for Adobe.PPKLite signatures; everything else in that JavaScript interface landed in Acrobat 6.0. Before Acrobat 6.0, Acrobat offered no way to drive JavaScript inside third-party security handlers.

Not every security handler speaks JavaScript, and among those that do, not all are wired for every security operation. A third-party public key security handler may speak JavaScript, but only when it adopts the new PubSec programming interface that arrived in Acrobat 6.0.

Among the JavaScript-enabled handlers Adobe ships:

Signatures and encryption both fall to the Adobe.PPKLite security handler. Under Windows it reaches directories by way of the Microsoft Active Directory Scripting Interface (ADSI).

A local address book plus directory operations come from the Adobe.AAB security handler.

Note

For password encryption of documents the Standard security handler is used, and as a rule it is not JavaScript-enabled. That said, from Acrobat 7.0 onward you can encrypt with Standard security via predefined policies. Look to encryptUsingPolicy for the specifics.

From Acrobat 7.0 onward as well, encryption through the encryptUsingPolicy method can lean on the Adobe.APS handler. This handler likewise exposes a directory by way of the directory services, yet since that directory hands back no certificates, its broad usefulness is narrow.

Note

The only route to a SecurityHandler object is the Security object getHandler method. That method works exclusively in batch, console, and application initialization events (see Privileged context for details) and is present in Adobe Reader.
