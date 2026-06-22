# Expression Language, Expression Controls

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Understanding the expression language; Using expression controls.

## Understanding the expression language

Search Last updated on May 5, 2026

### Understand expressions in Adobe After Effects by learning the expression language, syntax, and core concepts used to automate animations and connect layer properties.

JavaScript forms the foundation of the After Effects expression language, which layers an additional set of built-in objects on top. Rather than the browser-specific extensions, After Effects relies on core standard JavaScript and supplies its own extension objects — among them Layer, Comp, Footage, and Camera.

A scripting language may underpin expressions, yet a small but crucial distinction separates a script from an expression: a script directs an application to act, while an expression directs a property to act.

Bear these points in mind as you build expressions:

- Whatever statement is evaluated last sets the value of an expression — typically the closing line. At its most basic, that value comes from the final variable or function reached as evaluation proceeds. Even so, you can explicitly name any value as the return value instead, including values used far earlier for debugging, or values living outside declared functions and variables that don't run in written order.

- Case matters in JavaScript.

- Avoid placing function declarations at the foot of an expression.

### Language basics

JavaScript calls a value held inside an object a property. After Effects, though, reserves the word property for the layer components laid out in the Timeline panel. To sidestep the clash, what JavaScript would call properties become either methods or attributes in After Effects. The working distinction: a method typically performs some action to arrive at its output (return) value, whereas an attribute merely points at an existing value to supply its output (return) value. The quickest tell is the pair of parentheses trailing a method's name, which wrap whatever input arguments the method takes.

Anything able to hold other objects, attributes, and methods counts as an object. Compositions, layers, and footage items all qualify. More precisely, these three are global objects — you can reference them in any context without first naming some higher-level object.

### Accessing attributes and methods

Reaching the attributes and methods of layer properties is what the expression language is for. Getting at a value means stringing object references together with the period (.) operator. Parentheses let you reach past the layer level too — say, to address Effect properties, masks, or text animators. Suppose you want Layer A's Opacity property tied to the Blurriness property of Layer B's Gaussian Blur effect; in the expression field for Layer A's Opacity, you'd type:

```
thisComp.layer("Layer B").effect("Gaussian Blur")("Blurriness")
```

Scanning that left to right walks you from the outermost, containing object inward to the exact property:

thisComp is the global object pointing at the current composition.

layer("Layer B") names a particular layer object inside that composition.

effect("Gaussian Blur") names a particular effect object inside that layer.

("Blurriness") names a particular effect property inside that effect.

Want the nth piece of a multidimensional property — for instance the y component of an effect control point? Tack [n] on at the end, like so:

```
thisComp.layer("Layer B").effect("Advanced Lightning")("Origin")[1]
```

An expression defaults first to the property it's written on and then to that property's layer, so naming the property is unnecessary. A wiggle on a layer's Position property, for example, can be written any of these ways:

```
wiggle(5, 10)
position.wiggle(5, 10)
thisProperty.wiggle(5, 10)
```

When you're pulling a layer and property in from outside the layer and property the expression lives on, spell both out. An expression on Layer B's Opacity property that links it to Layer A's Rotation property reads like this:

```
thisComp.layer("Layer A").rotation
```

Note

For a fuller sense of how expressions behave, drag the pick whip to connect one layer property to another and study the expressions it generates.

### Arrays and multidimensional properties

An Array is the object type that holds an ordered run of numbers, written out as comma-separated numbers wrapped in brackets — like this:

```
  [10, 23]
```

Stash an Array object in a variable and its values become easy to reach elsewhere in the expression. For instance:

```
  myArray = [10, 23]
```

How many elements an Array object holds is its dimension; myArray therefore has a dimension of 2. Across After Effects, properties carry different dimensions according to how many value arguments they take. Within the expression language, a property's values are either lone values (Number objects) or arrays (Array objects).

A handful of properties and their dimensions appear in the table below:

Dimension

Property

1

Rotation °

Opacity %

2

Scale [x=width, y=height]

Position [x, y]

Anchor Point [x, y]

Audio Levels [left, right]

3

Scale [width, height, depth]

3D Position [x, y, z]

3D Anchor Point [x, y, z]

Orientation [x, y, z]

4

Color [red, green, blue, alpha]

| --- | --- |

To pull out a single element of an Array object, supply brackets with an index number marking the element you're after. Indexing of Array elements begins at 0. Carrying on with the earlier sample, myArray[0] equals 10 while myArray[1] equals 23.

These two expressions amount to the same thing:

```
  [myArray[0], 5]
  [10, 5]
```

### Position property arrays

Indexing of the Position property arrays runs like this:

position[0] holds the x coordinate of position.

position[1] holds the y coordinate of position.

position[2] holds the z coordinate of position.

### Representation of colors in Arrays

A color is stored as a 4D array:

- Red
- Green
- Blue
- Alpha

When a project's color depth is 8 bpc or 16 bpc, every entry in a color array falls between 0 (black) and 1 (white) — red, say, spans 0 (no color) through 1 (red). That makes [0,0,0,0] black and transparent and [1,1,1,1] white and opaque. At a color depth of 32 bpc, the range opens up to permit values below 0 and above 1.

Reference an index higher than the top-dimension component of an Array object and After Effects throws an error. myArray[2], for one, errors out, yet position[2] hands back the z coordinate of Position.

Quite a few of the expression language's properties and methods either accept Array objects as arguments or hand them back as values. Take thisLayer.position: it's an Array object that comes out two-dimensional or three-dimensional according to whether its layer is 2D or 3D.

### Examples

To craft an expression that holds an animated Position's y value steady while pinning x at 9, write:

```
  y = position[1];
  [9,y]
```

Tighter still is this version:

```
  [9, position[1]]
```

The point matters, so here's a second example. Pairing Layer A's x position value with Layer B's y position value calls for the following:

```
  x = thisComp.layer("Layer A").position[0];
  y = thisComp.layer("Layer B").position[1];
  [x,y]
```

You're free to build an expression aimed at just one value inside a 2D or 3D property's array. Absent any instruction otherwise, the first value applies. Drag the pick whip from Layer A's Rotation property onto Layer B's Scale property, for example, and this expression turns up:

```
  thisComp.layer("Layer B").scale[0]
```

That defaults to the Scale property's first value, namely width. To go with the height value in its place, either drag the pick whip straight to the second value rather than the property name, or rewrite the expression this way:

```
  thisComp.layer("Layer B").scale[1]
```

Run it the other direction — pick whip from Layer B's Scale property to Layer A's Rotation property — and After Effects spins up a variable on its own, hands the one-dimensional Rotation property value to it, then feeds that variable into both of the Scale property's dimensions:

```
  temp = thisComp.layer(1).transform.rotation;
  [temp, temp]
```

### Vectors

A good many After Effects properties and methods take or give back vectors. When an array stands for a point or a direction in space, After Effects labels it a vector — position, for instance, is described as returning a vector.

Yes, a function like audioLevels hands back a value with two dimensions — namely the levels of the left and right channels — yet no vector label attaches to it, since it carries neither a point nor a direction. Certain After Effects functions will take vector arguments, yet they tend to pay off only when the values handed in stand for a direction. cross(vec1, vec2), for example, works out a third vector perpendicular to the two it's given. That cross product proves handy when vec1 and vec2 are vectors marking directions in space, but not when they're merely two random batches of numbers.

### Indices and labels

Layer, Effect, and Mask elements in After Effects are indexed from 1 — the Timeline panel's opening layer, for instance, is layer(1).

As a rule, referring to a layer, effect, or mask by name rather than number heads off the confusion and errors that crop up when something gets moved or when arguments shift across product updates and upgrades. Always wrap a name in straight quotes when you use one. Of the two expressions below, the first reads more clearly than the second and keeps working even after you reorder the effects:

```
  effect("Colorama").param("Get Phase From")
  effect(1).param(2)
```

### Expression time

Inside an expression, time always runs on composition time — not layer time — and is counted in seconds (the sourceRectAtTime() expression being the exception). Any expression takes the current composition time at its moment of evaluation as the default. The two expressions below both fall back on that default composition time and yield identical values:

```
thisComp.layer(1).position
thisComp.layer(1).position.valueAtTime(time)
```

For a relative time, fold an incremental time value into the time argument. To grab the Position value as it stood 5 seconds earlier, for instance, use:

```
thisComp.layer(1).position.valueAtTime(time-5)
```

Properties in nested compositions referenced at default time draw on the original default composition time rather than remapped time. Pull a property in via the source function, though, and remapped time takes over.

Picture a layer in the containing composition whose source is a nested composition, with time remapped in that containing composition. Fetch the position values of a layer in the nested composition through the expression below, and those position values run on the composition's default time:

```
comp("nested composition").layer(1).position
```

Reach layer 1 by way of the source function instead, however, and the position values switch to remapped time:

```
thisComp.layer("nested composition").source.layer(1).position
```

Note

Pin down a specific time in an expression and After Effects disregards the remapped time.

Since expressions reckon time in seconds rather than frames, you'll occasionally have to call on time conversion methods to recast time values before working on frames.

### Example: Use the expression language reference to write an expression

Walk through this example to see how the After Effects expression language reference guides you in writing expressions. The expression built here ties Solid 2's Position property to Solid 1's Position property, with Solid 2's movement trailing Solid 1's by 2 seconds.

Start by making a pair of solid layers, Solid 1 and Solid 2.

With keyframes, animate the Position property values belonging to Solid 1.

With Solid 2's Position property selected, either go to Animation > Add Expression or Alt-click (Windows) or Option-click (macOS) the property's stopwatch button. By default this expression turns up:

```
  transform.position
```

Type the following directly over transform.position:

```
  thisComp
```

A global attribute, thisComp carries as its value a Comp object that stands for the current composition. To work out what may legally follow thisComp in your expression, check the return value for thisComp listed under Global objects, attributes, and methods.

Observe that thisComp gives back a Comp object. Turn next to Comp attributes and methods to find which ones a Comp object supports. layer(index) is one such option. The index — the number inside the parentheses — pins down the layer you mean to use. Say Solid 1 is the first layer of your composition for this example. Pulling values from the active composition's first layer means adding .layer(1) to the end of the expression, giving:

```
  thisComp.layer(1)
```

Consult the expression elements reference once more and you'll see layer(index) returns a Layer object. Browse Layer General attributes and methods for the element you need. Should you want the layer's Position property values, append .position to the expression's end to produce:

```
  thisComp.layer(1).position
```

Layer General attributes and methods shows that the position attribute returns a property. Check Property attributes and methods and you'll spot the option to fold a time factor into the expression. To set a specific time — current time plus 2 seconds, say — add .valueAtTime(time+2) at the end and you get:

```
  thisComp.layer(1).position.valueAtTime(time+2)
```

Property attributes and methods reveals that the valueAtTime method returns a Number or Array. Once an expression returns a Number, Array, or Boolean (true or false), no further attributes or methods can be tacked on — though you're still free to append arithmetic operators such as +, -, \*, and /.

### More Expression resources

With a few of the ideas behind expressions now under your belt, head over to the community to swap work and pick up examples drawn from actual projects.

The AE Enhancers forum, too, offers a wealth of information and examples on expressions, along with scripts and animation presets.

## Using expression controls

Search Last updated on Jun 27, 2025

Tie your expressions to Expression Controls and you can drive and keyframe their values exactly the way you handle effects.

Pairing expression controls with your expressions makes the latter livelier and simpler to revise. Instead of forever reaching into the expression editor to change values, you link them to an Expression Control over in the Effect Controls panel — and one control can steer several properties together.

They let you govern parameters inside your expressions. Add a slider that confines a layer's movement to set bounds, or offer the user a dropdown menu to pick among several choices. Toss in checkboxes that flip layers on or off or recolor text and graphics layers. Drop in angle controls to spin a batch of layers, and color controls to recolor text, glows, or shapes.

Each Expression Control effect is named for the kind of property control it delivers: Angle Control, Checkbox Control, Color Control, Layer Control, Point Control, Slider Control, and Dropdown Menu Control.

Note

Apply an animation preset out of the Animation Presets > Shapes > Backgrounds category and a custom Animated Shape Control effect shows up in the Effect Controls panel. Built expressly for these animation presets, this custom effect is a specialized expression control effect. Copy and paste it onto other layers, or save it as an animation preset of its own to reuse elsewhere.

### Apply expression controls to layers

Getting Expression Controls effects onto a layer works just like applying any other effect — dragging one from the Effects & Presets panel onto the layer, for instance.

Any layer will take Expression Controls effects, but there's an advantage to putting them on a null layer that simply serves as a controlling layer. From there, you add expressions to properties on other layers so they draw their input from that control. You might, for example, place the Slider Control effect on a null layer (Null 1) and then hand this expression to the Position properties of several layers:

```
  position+[0,10*(index-1)*thisComp.layer("Null 1").effect("Slider Control")("Slider")]
```

Here, dragging the slider shifts every layer carrying this expression. Layers with higher index numbers — those lower in the Timeline panel — travel farther than ones with lower index numbers, spaced at 10-pixel steps. Set keyframes for the slider on the null layer and every other layer animates to match.

Renaming each copy of an Expression Control effect to signal its purpose often pays off. Rechristen a Color Control effect instance as sky color, say, and its job becomes obvious at a glance. Renaming an Expression Control effect instance follows the same routine as any effect: with it selected in either the Timeline panel or the Effect Controls panel, hit Enter on the main keyboard (Windows) or Return (macOS).

Note

To adjust a control's range, right-click (Windows) or Control-click (macOS) the underlined property value of the control and pick Edit Value from the context menu.

### Convert an expression to keyframes

Now and then, turning an expression into keyframes comes in handy. To freeze the values an expression produces, for instance, convert it to keyframes and tweak those keyframes from there. If an expression is slow to evaluate, converting it to keyframes speeds up rendering. During conversion, After Effects evaluates the expression, lays down a keyframe on every frame, and then switches the expression off.

In the Timeline panel, pick the property the expression sits on and choose Animation > Keyframe Assistant > Convert Expression To Keyframes. Your original expression stays intact — just disabled.

### Expression Controls effects

Adding Expression Controls effects to a layer gives you a way to steer other layers or effects through expressions. They hand you values — numbers, colors, checkboxes — that you can wire to other properties to keep your animation simpler to manage.

### 3D Point Control

With the 3D Point Control effect you get a single (x, y, z) point in space that behaves as a controller, ready to be picked up by expressions running on properties elsewhere.

Typical uses include feeding 3D Position, Orientation, and 3D effects from that one driver.

### Angle Control

For properties measured as an angle (in degrees), the Angle Control effect gives you a tidy way to steer them through expressions. A single shared controller is often wired up this way to feed rotation, direction, or orientation values.

### Checkbox Control

What the Checkbox Control effect hands you is a basic toggle — on/off, expressed as true/false or 1/0 — that expressions can read to govern properties such as opacity, visibility, animation states, and more.

### Color Control

Building a color picker you can tailor is what the Color Control effect is for; expressions then read that picker to feed the color properties of other effects or layers.

### Dropdown Menu Control

A list of items you can pick from is what the Dropdown Menu Control effect builds, and those selections can drive behaviors throughout your composition by way of expressions.

### Layer Control

Inside an expression, the Layer Control effect lets you point at some other layer (e.g., solid, null, text, comp). That makes it handy whenever one layer needs to serve as the input that drives an expression.

### Point Control

A 2D coordinate (x, y) is what the Point Control effect gives you, and expressions can read it to govern other properties — among them Position, Anchor Point, or effect offsets.

### Slider Control

One numeric value, exposed as a slider, is what the Slider Control produces; expressions can then reference it to govern other properties such as Opacity, Position, Rotation, Scale, etc.
