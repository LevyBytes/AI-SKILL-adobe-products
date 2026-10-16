# Expressions: JavaScript Engine

Expressions in After Effects are evaluated through a JavaScript engine. During renders, evaluating those expressions can run as much as 5x quicker than it did on the Legacy ExtendScript engine.

Under Windows, the engine behind After Effects is V8, the open-source JavaScript engine. That delivers a newer flavor of JavaScript than ExtendScript offers, since ExtendScript is limited to the third edition of the ECMA-262 Standard.

Whether a project relies on the JavaScript engine or on Legacy ExtendScript is something you pick in Project Settings.

Select File > Project Settings.

Open the Expressions tab and set the Expressions Engine to either JavaScript or Legacy ExtendScript.

Any project carried over from earlier After Effects versions opens with Legacy ExtendScript by default.

Read up on the particular syntax gaps separating the JavaScript and Legacy ExtendScript expression engines.
