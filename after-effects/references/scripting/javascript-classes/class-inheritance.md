# Class Inheritance

Here's a quick tour of object-oriented programming and inheritance. Already comfortable with it? Feel free to skip ahead.

In Javascript/Extendscript, Class Inheritance is the notion that you can spell out certain properties or methods on an object, then spin up a subclass (a "child class") that picks up all of them and tacks on more, narrowing the object further.

Take "automobile" as one base class: "cars" would be a subclass of "automobile," and "sedan" and "convertible" two subclasses of the "car" base class. Because inheritance runs straight down the chain "automobile" -> "car" -> "convertible," any property or method on "automobile" is reachable from "convertible" too.
