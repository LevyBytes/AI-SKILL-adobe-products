# Understanding the expression language

Search Last updated on May 5, 2026

Understand expressions in Adobe After Effects by learning the expression language, syntax, and core concepts used to automate animations and connect layer properties.

JavaScript forms the foundation of the After Effects expression language, which layers an additional set of built-in objects on top. Rather than the browser-specific extensions, After Effects relies on core standard JavaScript and supplies its own extension objects — among them Layer, Comp, Footage, and Camera.

A scripting language may underpin expressions, yet a small but crucial distinction separates a script from an expression: a script directs an application to act, while an expression directs a property to act.

Bear these points in mind as you build expressions:

- Whatever statement is evaluated last sets the value of an expression — typically the closing line. At its most basic, that value comes from the final variable or function reached as evaluation proceeds. Even so, you can explicitly name any value as the return value instead, including values used far earlier for debugging, or values living outside declared functions and variables that don't run in written order.

- Case matters in JavaScript.

- Avoid placing function declarations at the foot of an expression.
