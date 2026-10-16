# Syntax Requirements for .jsx Expression Libraries and eval() with the JavaScript Engine

A handful of syntax tweaks become necessary once an expression lives inside a .jsx expression function library or runs by way of eval():

Any native method or attribute that isn't already aimed at a specific layer or property has to carry an explicit thisLayer. or thisProperty. prefix. That prefix is how the JavaScript engine knows which object the method or attribute belongs to.

For arrays such as Position, do the arithmetic through vector math or by looping over each array element; the overloaded operator form, position + [100,100], simply won't compute.

Normally the JavaScript engine massages expressions ahead of evaluation, translating some of the Legacy ExtendScript phrasing into something the new engine understands. That clean-up pass, though, is skipped for expressions coming out of a .jsx expression function library or run through eval(), so you have to apply the changes above by hand. Every one of these adjustments stays backward-compatible with the Legacy ExtendScript engine, which means a .jsx expression library built for the JavaScript engine runs under the Legacy ExtendScript engine too.

Performance tip: Because that pre-processing step is bypassed, a heavy expression invoked from a .jsx library in this syntax under the JavaScript engine can run faster than the same expression placed directly on a property.
