# Language basics

JavaScript calls a value held inside an object a property. After Effects, though, reserves the word property for the layer components laid out in the Timeline panel. To sidestep the clash, what JavaScript would call properties become either methods or attributes in After Effects. The working distinction: a method typically performs some action to arrive at its output (return) value, whereas an attribute merely points at an existing value to supply its output (return) value. The quickest tell is the pair of parentheses trailing a method's name, which wrap whatever input arguments the method takes.

Anything able to hold other objects, attributes, and methods counts as an object. Compositions, layers, and footage items all qualify. More precisely, these three are global objects — you can reference them in any context without first naming some higher-level object.
