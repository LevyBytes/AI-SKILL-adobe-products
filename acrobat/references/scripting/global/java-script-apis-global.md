# JavaScript APIs — global

A static JavaScript object that lets you pass data between documents and keep it alive from one session to the next. Data of that kind is termed persistent global data. A subscription mechanism handles sharing and change notification for global data across documents, letting you watch global variables and broadcast their value changes from one document to another.

Note

Starting at version 8.0, how global variables are reached shifted a bit; here is what changed:

Inside the Preferences dialog box (Ctrl + K), the JavaScript category gained a fresh security checkbox: Enable Global Object Security Policy.

While it is checked — which is the default — every write to a global variable records the origin that performed the write. From then on, only matching origins may touch that variable.

With files, that restricts access to the very file that set it, at the same path it held when the variable was set.

For documents served from URLs, it restricts access to the host that set it.

One notable exception loosens those restrictions: global variables may be declared and reached inside a privileged context — the console, a batch sequence, and folder JavaScript all qualify. Privileged context covers more on this.

While it is unchecked, documents from differing origins are free to reach the variable, matching how things behaved prior to version 8.0.

The section Global object security policy holds examples.
