# Legacy And Extend Script Engine

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

### Learn how Adobe After Effects handles legacy scripting and the ExtendScript engine, and how to manage scripts across older and newer workflows.

Turn to this page either to sharpen your expressions for the JavaScript expression engine, or to troubleshoot errors that crop up when expressions authored for earlier After Effects releases refuse to evaluate under the JavaScript expression engine.

After Effects expressions are built on JavaScript, itself an implementation of ECMAScript. ECMAScript 2018 underpins the JavaScript expression engine introduced in After Effects 16.0, whereas the Legacy ExtendScript expression engine rests on ECMAScript 3 (1999). (Adobe ExtendScript doubles as the scripting language for After Effects and the wider family of Adobe applications.)

The samples that follow are yours to work through, alongside advice on writing expressions that hold up in both the JavaScript and Legacy ExtendScript expression engines.

Where the JavaScript and Legacy ExtendScript expression engines part ways, the main points are:

- Expressions can use JavaScript syntax from ECMAScript 2018
- .value is no longer required when linking to other properties from Source Text
- Freezing property values with posterizeTime(0)

- if...else syntax differences
- if and else cannot be on the same line without brackets
- Expressions cannot end in a function declaration
- this() shorthand syntax is not allowed; use thisLayer() instead
- Source Text property array-index access to characters requires .value
- Snake case properties and methods are not allowed
- Using eval() with binary-encoded (.jsxbin) expressions
- Limited support for the $. (Dollar) object
- No support for ...reflect.properties, ...reflect.methods, and toSource()

- Explicitly prefix native methods and attributes with thisLayer. or thisProperty.
- Replacing math operators with vector math functions

## Expressions can use JavaScript syntax from ECMAScript 2018

The JavaScript language has gained a great deal since ECMAScript 3. Strings, arrays, and objects all picked up fresh methods that read more cleanly and take less space, and there are now newer forms for declaring variables and functions, plus default parameters, spread operators, and so on. Because those shifts belong to JavaScript at large rather than to After Effects, this page leaves them aside. To get up to speed on the wide array of syntax additions, see the links below:

- New Array methods
- New Object methods
- JSON.stringify() & JSON.parse()

- let and const
- Arrow functions
- The spread operator

- Array.includes()
- Exponentiation Operator

- String padding
- Trailing commas

- Rest/Spread Properties for Objects

For deeper study of JavaScript, these references also come recommended:

- Mozilla's MDN JavaScript Web Docs
- w3schools' JavaScript Tutorials

## .value is no longer required when linking to other properties from Source Text

Pull a value from another property inside a Source Text property and the Legacy ExtendScript engine insists you append .value to the end of that property. By contrast, the JavaScript engine returns the property's value on its own, unless you reach for some other attribute such as .propertyIndex or .name.

For example:

```
thisComp.layer("Solid 1").transform.position

// In the Legacy engine, this evaluates to "[object Property]" when applied to a Source Text property.
// In the JavaScript engine, this evaluates to the value of the Position property of layer "Solid 1" when applied to a Source Text property.
```

## Freezing property values with posterizeTime

Starting with After Effects 16.0, calling posterizeTime(0) locks a property's value to time 0 within the composition, and that behavior holds for both the JavaScript and Legacy ExtendScript engines.

Note

Bear in mind this breaks backward compatibility and can yield surprises in After Effects builds older than 16.0.

## Incompatible Legacy Syntax

Almost every bit of expression syntax carried over from the Legacy ExtendScript expression engine still works going forward in the JavaScript expression engine. A handful of older constructs, though, won't run there. Modern JavaScript's own syntax changes account for some of these breaks; in other instances the syntax was stale or obsolete and simply got dropped. You'll find paired examples of what fails and what works just below.

Application scripting that rewrites the expressions can patch up most of these syntax discrepancies on its own.

## if...else syntax differences

As a rule of thumb, write your if...else statements with line breaks and brackets, matching MDN's guidance, every time. Loose syntax in if...else statements slid by in the Legacy ExtendScript engine, but the JavaScript engine holds you to a stricter standard. Get the if...else syntax wrong under the JavaScript engine and it won't evaluate.

### Ending an expression in an if statement without an else is not allowed

Close out an expression on an if statement that has no accompanying else, and the JavaScript engine refuses to evaluate it, returning "Undefined value used in expression (could be an out of range array subscript?)". Under the Legacy ExtendScript engine, the snippet below resolves to 100 when the time runs past 1 second and otherwise to 50:

```
var x = 50;
if ( time > 1 ) {
    x = 100
}
// The "else" here is implied but not stated.
```

For the JavaScript engine, you have to spell out the else half of the statement whenever it sits last in the expression:

```
var x = 50;
if ( time > 1 ) {
    x = 100;
} else {
    x;
}
```

Written this way, it evaluates properly under both the JavaScript engine and the Legacy ExtendScript engine.

## if and else cannot be on the same line without brackets

Squeeze an if...else statement onto one line with no brackets and the Legacy ExtendScript engine will still evaluate it, yet the JavaScript engine throws an error along the lines of "Syntax Error: Unexpected token else" or "Undefined value used in expression (could be an out of range array subscript?)". Which message you get shifts with the context and the property type.

Under the Legacy ExtendScript engine, the snippet below resolves to 100 when the time runs past 1 second and otherwise to 50:

```
if ( time > 1 ) 100 else 50;
```

To evaluate if...else statements, the JavaScript engine wants either line breaks or brackets. When the case is simple, a ternary operator can stand in instead. The JavaScript engine accepts any of these forms:

```
// Solution A: adding a line break before "else" will allow both engines to evaluate correctly.

if ( time > 1 ) 100
else 50;

// Solution B: adding correct bracketing will also allow both engines to evaluate correctly.

if ( time > 1 ) { 100 } else { 50 };

// Solution C: Use a ternary operator in place of the if...else statement, which also evaluates correctly in both engines.

time > 1 ? 100 : 50;
```

Each of those approaches evaluates properly under both the JavaScript engine and the Legacy ExtendScript engine.

## Expressions cannot end in a function declaration

Should an expression close on a function declaration, the JavaScript engine won't evaluate it and reports "Object of type found where a Number, Array, or Property is needed". Under the JavaScript engine, whatever gets evaluated last has to hand back a value rather than declare one.

This next sample runs in the Legacy engine but not in the JavaScript engine:

```
timesTen( value );  // The Legacy engine evaluates this line, even though the function is declared below.

function timesTen ( val ) {
    return val * 10
}
```

Move the function call to the final line — after the declaration — and the expression evaluates properly in both engines:

```
function timesTen ( val ) {
    return val * 10
}

timesTen( value );  // The JavaScript engine needs the function call to happen below the declaration in order to return the correct value.
```

## this() shorthand syntax is not allowed; use thisLayer() instead

The Legacy ExtendScript engine let this serve as a shorthand for thisLayer. Under the JavaScript engine, this points at the global object, so thisLayer has to take its place; lean on this in the JavaScript engine and you'll typically hit the error "this is not a function".

Here, a Legacy ExtendScript sample leans on this to forge a compact link from the Source Text property to a Text Layer Position property:

```
this(5)(2).value;
```

Under the JavaScript engine, swap this out for thisLayer:

```
thisLayer(5)(2).value;
```

thisLayer works across both expression engines.

## Source Text property array-index access to characters requires .value

Within the Legacy ExtendScript expression engine, you could reach a text property's characters through bracket notation, treating it like an array:

```
text.sourceText[0]      // Returns the first character of the Source Text property's text value.
```

To get at the characters under the JavaScript engine, you must tack on .value:

```
text.sourceText.value[0]    // Returns the first character of the Source Text property's text value.
```

This syntax works across both engines.

## Snake case properties and methods are not allowed

Those obsolete snake case properties and methods — the ones spelled with an underscore in place of camelCase — get no support from the JavaScript engine. Reach for the camelCase forms instead, since they run under both engines. Below is a rundown pairing each deprecated snake case name with its camelCase equivalent.

Snake case properties

camelCase properties

Snake Case methods

camelCase Methods

this_comp

this_layer

this_property

color_depth

has_parent

in_point

out_point

start_time

has_video

has_audio

audio_active

anchor_point

audio_levels

time_remap

casts_shadows

light_transmission

accepts_shadows

accepts_lights

frame_duration

shutter_angle

shutter_phase

num_layers

pixel_aspect

point_of_interest

depth_of_field

focus_distance

blur_level

cone_angle

cone_feather

shadow_darkness

shadow_diffusion

active_camera

thisComp

thisLayer

thisProperty

colorDepth

hasParent

inPoint

outPoint

startTime

hasVideo

hasAudio

audioActive

anchorPoint

audioLevels

timeRemap

castsShadows

lightTransmission

acceptsShadows

acceptsLights

frameDuration

shutterAngle

shutterPhase

numLayers

pixelAspect

pointOfInterest

depthOfField

focusDistance

blurLevel

coneAngle

coneFeather

shadowDarkness

shadowDiffusion

activeCamera

value_at_time()

velocity_at_time()

speed_at_time()

nearest_key()

posterize_time()

look_at()

seed_random()

gauss_random()

ease_in()

ease_out()

rgb_to_hsl()

hsl_to_rgb()

degrees_to_radians()

radians_to_degrees()

from_comp_to_surface()

to_comp_vec()

from_comp_vec()

to_world_vec()

from_world_vec()

to_comp()

from_comp()

to_world()

from_world()

temporal_wiggle()

loop_in_duration()

loop_out_duration()

loop_in()

loop_out()

valueAtTime()

velocityAtTime()

speedAtTime()

nearestKey()

posterizeTime()

lookAt()

seedRandom()

gaussRandom()

easeIn()

easeOut()

rgbToHsl()

hslToRgb()

degreesToRadians()

radiansToDegrees()

fromCompToSurface()

toCompVec()

fromCompVec()

toWorldVec()

fromWorldVec()

toComp()

fromComp()

toWorld()

fromWorld()

temporalWiggle()

loopInDuration()

loopOutDuration()

loopIn()

loopOut()

| --- | --- | --- | --- |

## Using eval() with binary-encoded (.jsxbin) expressions

Expressions saved out in the ExtendScript binary format — written as a binary .jsxbin file by ExtendScript ToolKit CC — get no support from the JavaScript engine.

Should you wish to obfuscate an expression, either stay on the Legacy ExtendScript engine or pick a different obfuscation approach that plays nicely with ECMAScript 2018. Keep in mind that certain obfuscation techniques may not function across both expression engines.

## Limited support for the $. (Dollar) object

Belonging to ExtendScript, the methods and properties hanging off the $. (Dollar) object are for the most part absent from the JavaScript engine. Which uses of the $. (Dollar) object carry over and which don't is laid out in the table below:

Unsupported $.

Supported $.

$.fileName

$.hiResTimes

$.stack

$.evalFile()

$.list()

$.setenv()

$.getenv()

$.appEncoding

$.buildDate

$.decimalPoint

$.dictionary

$.error

$.flags

$.includePath

$.level

$.line

$.locale

$.localize

$.memCache

$.os

$.screens

$.strict

$.version

$.build

$.engineName (this is unsupported in the Legacy ExtendScript engine)

$.global

| --- | --- |

## No support for ...reflect.properties, ...reflect.methods, and toSource()

Because reflect.properties and reflect.methods belong to ExtendScript and have nothing matching them in plain JavaScript, the JavaScript engine leaves them out.

As for toSource(), JavaScript dropped it long ago and no standards body tracks it.

Should you want the same property-and-method listing those methods once gave for an After Effects property, apply the expression below on a Source Text property and tie it — via the pick whip swapped in for thisProperty on line 1 — to whichever property you have in mind:

```
let obj = thisProperty;     // Replace "thisProperty" with a property-link to your desired property.
let props = [];

do {
    Object.getOwnPropertyNames(obj).forEach(prop => {
        if (props.indexOf(prop) === -1) {
            props.push(prop);
        }
    });
} while (obj = Object.getPrototypeOf(obj));

props.join("\n");           // Returns an array of strings listing the properties and methods available.
```

Don't expect this expression to run under the Legacy ExtendScript engine; it relies on syntax and methods that ECMAScript 3 never had.

## Syntax Requirements for .jsx Expression Libraries and eval() with the JavaScript Engine

A handful of syntax tweaks become necessary once an expression lives inside a .jsx expression function library or runs by way of eval():

Any native method or attribute that isn't already aimed at a specific layer or property has to carry an explicit thisLayer. or thisProperty. prefix. That prefix is how the JavaScript engine knows which object the method or attribute belongs to.

For arrays such as Position, do the arithmetic through vector math or by looping over each array element; the overloaded operator form, position + [100,100], simply won't compute.

Normally the JavaScript engine massages expressions ahead of evaluation, translating some of the Legacy ExtendScript phrasing into something the new engine understands. That clean-up pass, though, is skipped for expressions coming out of a .jsx expression function library or run through eval(), so you have to apply the changes above by hand. Every one of these adjustments stays backward-compatible with the Legacy ExtendScript engine, which means a .jsx expression library built for the JavaScript engine runs under the Legacy ExtendScript engine too.

Performance tip: Because that pre-processing step is bypassed, a heavy expression invoked from a .jsx library in this syntax under the JavaScript engine can run faster than the same expression placed directly on a property.

## Explicitly prefix native methods and attributes with thisLayer. or thisProperty.

Which methods and attributes need a prefix is set out in the table that follows. As an illustration, time has to appear as thisLayer.time, and wiggle() has to appear as thisProperty.wiggle().

You only need these prefixes where the attribute or method isn't already aimed explicitly at some other layer or property. Take thisComp.layer(1).hasParent: there's no need to tack on thisLayer., since .hasParent already hangs off layer(1) explicitly.

Methods Requiring thisLayer.

Attributes Requiring thisLayer.

Methods Requiring thisProperty.

Attributes Requiring thisProperty.

comp() footage() posterizeTime() add() sub() mul() div() clamp() length() dot() normalize() cross() lookAt() timeToFrames() framesToTime() timeToTimecode() timeToFeetAndFrames() timeToNTSCTimecode() timeToCurrentFormat() seedRandom() random() gaussRandom() noise() degreesToRadians() radiansToDegrees() linear() ease() easeIn() easeOut() rgbToHsl() hslToRgb() hexToRgb() mask() sourceRectAtTime() sourceTime() sampleImage() toComp() fromComp() toWorld() fromWorld() toCompVec() fromCompVec() toWorldVec() fromWorldVec() fromCompToSurface()

time source thisProject colorDepth transform anchorPoint position scale rotation opacity orientation rotationX rotationY rotationZ lightTransmission castsShadows acceptsShadows acceptsLights ambient diffuse specular specularIntensity shininess specularShininess metal audioLevels timeRemap marker name width height index parent hasParent inPoint outPoint startTime hasVideo hasAudio active enabled audioActive cameraOption pointOfInterest zoom depthOfField focusDistance aperature blurLevel irisShape irisRotation irisRoundness irisAspectRatio irisDiffractionFringe highlightGain highlightThreshold highlightSaturation lightOption intensity color coneAngle coneFeather shadowDarkness shadowDiffusion

valueAtTime() velocityAtTime() speedAtTime() wiggle() temporalWiggle() smooth() loopIn() loopOut() loopInDuration() loopOutDuration() key() nearestKey() propertyGroup() points() inTangents() outTangents() isClosed() pointsOnPath() tangentOnPath() normalOnPath() createPath()

velocity speed numKeys propertyIndex

| --- | --- | --- | --- |

## Replacing math operators with vector math functions

Array operator overloading — writing things like position + [100,100] — is honored by both the JavaScript and LegacyExtendScript engines, yet it falls apart for expressions sitting in a .jsx expression function library or in eval().

To run arithmetic on array properties (Position, Scale, and the like), reach for the vector math counterparts that cover addition, subtraction, multiplication, and division. Those vector math functions handle plain numbers too, so a function that might receive properties of either kind should rely on them.

Note

Pair the vector math functions with the thisLayer. prefix.

- Addition: thisLayer.add(vec1, vec2)
- Subtraction: thisLayer.sub(vec1, vec2)
- Multiplication: thisLayer.mul(vec, amount)
- Division: thisLayer.div(vec, amount)

What follows are sample expressions shown first in ordinary math and then in the revised vector math form. Where it's called for, the vector math versions also carry the right thisLayer. or thisProperty. prefix.

For the gap between a wiggle() and a Position property's value:

```
// Standard Math:
wiggle() - value;

// Vector Math:
thisLayer.sub( thisProperty.wiggle(), value );
```

For interpolating across two values the way linear() does, but reaching past the stated minimum and maximum:

```
// Standard Math:
value1 + ( ( t - tMin ) / ( tMax - tMin ) ) * ( value2 - value1 );

// Vector Math:
thisLayer.add( value1, thisLayer.mul( thisLayer.div( thisLayer.sub( t, tMin ), thisLayer.sub( tMax, tMin ) ), thisLayer.sub( value2, value1 ) ) );
```

For looping a Position property both in and out:

```
// Standard Math:
loopIn( "cycle" ) + loopOut( "cycle" ) - value;

// Vector Math:
thisLayer.sub( thisLayer.add( thisProperty.loopIn( "cycle" ), thisProperty.loopOut( "cycle" ) ), value );
```

### More like this

- Expression language reference

## See also

- [Application](script-application.md)
