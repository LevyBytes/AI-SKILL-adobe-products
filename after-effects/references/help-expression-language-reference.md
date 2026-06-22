# Expression Language Reference (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

### Turn to the Expression Language Reference in Adobe After Effects when writing and applying expressions — the ones that drive automated animation, tie properties together, and build compositions that run leaner and more responsively.

## Looping Keyframes with Expressions in After Effects

Build your expressions from the After Effects expression elements together with standard JavaScript elements. The Expression language menu lets you drop methods and attributes into an expression whenever you like, and the pick whip lets you insert properties at any point.

When an argument description shows an equal sign (=) followed by a value — such as t=time or width=.2 — that argument falls back to the supplied default whenever you leave it unspecified.

A number in square brackets on some argument descriptions marks the dimension of the property or Array that's expected.

Likewise, a number in square brackets on certain return-value descriptions states the dimension of the property or Array handed back. Where no specific dimension is given, the returned Array's dimension follows from the dimension of the input.

For the standard JavaScript language — including pages on the JavaScript Math and String objects — consult the W3Schools JavaScript reference website.

## Expressions: JavaScript Engine

Expressions in After Effects are evaluated through a JavaScript engine. During renders, evaluating those expressions can run as much as 5x quicker than it did on the Legacy ExtendScript engine.

Under Windows, the engine behind After Effects is V8, the open-source JavaScript engine. That delivers a newer flavor of JavaScript than ExtendScript offers, since ExtendScript is limited to the third edition of the ECMA-262 Standard.

Whether a project relies on the JavaScript engine or on Legacy ExtendScript is something you pick in Project Settings.

Select File > Project Settings.

Open the Expressions tab and set the Expressions Engine to either JavaScript or Legacy ExtendScript.

Any project carried over from earlier After Effects versions opens with Legacy ExtendScript by default.

Read up on the particular syntax gaps separating the JavaScript and Legacy ExtendScript expression engines.

## Improvements provided by the JavaScript engine

- Floating-point math is computed with greater precision.
- The array and string methods of modern JavaScript become available.
- You also gain other modern JavaScript constructs — typed arrays, the 'let' and 'const' keywords, and the many further additions from recent editions of the ECMA-262 Standard.

## Differences between the JavaScript engine and ExtendScript

- Within the JavaScript engine, if/else statement syntax is strict and must follow standardized JavaScript.
- To reach the indexes of characters on a Text Layer as an array, write text.sourceText.value[i] rather than text.sourceText[i].
- The deprecated snake_case expression methods from ExtendScript — for example this_comp and to_world — are no longer supported.
- The shorthand 'this(arg)' syntax isn't supported.

## Global objects, attributes, and methods (expression reference)

comp(name)

Return type: Comp.

Argument type: name is a String.

Retrieves another composition by name.

footage(name)

Return type: Footage.

Argument type: name is a String.

Retrieves a footage item by name.

thisComp

Return type: Comp.

Represents the composition containing the expression.

thisProject

Return type: Project

Represents the current After Effects project and gives access to project-level settings such as color depth, file path, and color settings.

thisLayer

Return type: Layer, Light, or Camera.

Stands for the layer that holds the expression. Since thisLayer is the default object, naming it is optional — for instance, an expression beginning with thisLayer.width or simply width yields the same outcome.

thisProperty

Return type: Property.

Stands for the property that holds the expression. So, with an expression written on the Rotation property, you can begin with thisProperty to point at that Rotation property.

time

Return type: Number.

Gives the composition time, measured in seconds, at the instant the expression is evaluated.

colorDepth

Return type: Number.

Hands back the project's color depth value. As an example, colorDepth yields 16 whenever the project color depth is set to 16 bits per channel.

posterizeTime(framesPerSecond)

Return type: Number.

Argument type: framesPerSecond is a Number.

The supplied framesPerSecond becomes the frame rate governing the remainder of the expression. With it you can hold a property's frame rate below the composition's own frame rate. For instance, the expression below refreshes the property value with a fresh random value once each second:

posterizeTime(1); random()

value

Return type: Number, Array, or String.

Gives the value at the current time for the property that holds the expression.

## Time conversion methods (expression reference)

timeToFrames(t = time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration, isDuration = false)

Return type: Number.

Argument type: t and fps are Numbers; isDuration is a Boolean.

Turns the value of t — which defaults to the present composition time — into a whole number of frames. The frames-per-second count comes from the fps argument, defaulting to the current composition's frame rate (1.0 / thisComp.frameDuration). The isDuration argument defaults to false and should be set true when t stands for a gap between two times rather than an absolute time. Absolute times round downward toward negative infinity; durations round away from zero (upward for positive values).

framesToTime(frames, fps = 1.0 / thisComp.frameDuration)

Return type: Number.

Argument type: frames and fps are Numbers.

The inverse of timeToFrames. Returns the time corresponding to the frames argument, which is required. It doesn’t have to be an integer. See timeToFrames for explanation of the fps argument.

timeToTimecode(t = time + thisComp.displayStartTime, timecodeBase = 30, isDuration = false)

Return type: String.

Argument type: t and timecodeBase are Numbers; isDuration is a Boolean.

Turns the value of t into a String holding timecode. Consult timeToFrames regarding the t and isDuration arguments. The timecodeBase value defaults to 30 and states how many frames make up one second.

timeToNTSCTimecode(t = time + thisComp.displayStartTime, ntscDropFrame = false, isDuration = false)

Return type: String.

Argument type: t is a Number, ntscDropFrame and isDuration are Booleans.

Turns t into a String holding NTSC timecode. Consult timeToFrames regarding the t and isDuration arguments. With ntscDropFrame left false (the default), the resulting String is NTSC non-drop-frame timecode; set it true and the String becomes NTSC drop-frame timecode.

timeToFeetAndFrames(t = time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration, framesPerFoot = 16, isDuration = false)

Return type: String.

Argument type: t, fps, and framesPerFoot are Numbers; isDuration is a Boolean.

Turns the value of t into a String holding feet of film plus frames. Consult timeToFrames regarding the t, fps, and isDuration arguments. The framesPerFoot argument names how many frames fit in one foot of film and defaults to 16, the rate most common for 35mm footage.

timeToCurrentFormat(t = time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration, isDuration = false)

Return type: String.

Argument type: t and fps are Numbers; isDuration is a Boolean.

Turns the value of t into a String holding time in the display format of the current Project Settings. Consult timeToFrames for a definition of every argument.

An optional ntscDropFrame argument was added to the timeToCurrentFormat() function in After Effects CS5.5 and later. Default: ntscDropFrame = thisComp.ntscDropFrame.

Note

When you want finer control over how the timecode looks in your footage, generate it with the timeToCurrentFormat method — or another timeTo method — rather than the Timecode or Numbers effect. Add a text layer, attach an expression to its Source Text property, and type timeToCurrentFormat() into the expression field. Done this way, the timecode text can be styled and animated, and it picks up the same display style set by the current project settings.

## Vector Math methods (expression reference)

Vector Math functions are global methods that operate on arrays as though they were mathematical vectors. In contrast to built-in JavaScript methods like Math.sin, you call them without the Math prefix. Except where noted, Vector Math methods tolerate mismatched dimensions: they hand back a value sized to the largest input Array, padding any missing elements with zeros. For instance, add([10, 20], [1, 2, 3]) yields [11, 22, 3].

add(vec1, vec2)

Return type: Array.

Argument type: vec1 and vec2 are Arrays.

Adds two vectors.

sub(vec1, vec2)

Return type: Array.

Argument type: vec1 and vec2 are Arrays.

Subtracts two vectors.

mul(vec, amount)

Return type: Array.

Argument type: vec is an Array, amount is a Number.

Multiplies every element of the vector by the amount.

div(vec, amount)

Return type: Array.

Argument type: vec is an Array, amount is a Number.

Divides every element of the vector by the amount.

clamp(value, limit1, limit2)

Return type: Number or Array.

Argument type: value, limit1, and limit2 are Numbers or Arrays.

Each component of value is held within the range bounded by the matching components of limit1 and limit2.

dot(vec1, vec2)

Return type: Number.

Argument type: vec1 and vec2 are Arrays.

Returns the dot (inner) product of the vector arguments.

cross(vec1, vec2)

Return type: Array [2 or 3].

Argument type: vec1 and vec2 are Arrays [2 or 3].

Hands back the vector cross product of vec1 and vec2. For more, see a math reference or a JavaScript guide.

normalize(vec)

Return type: Array.

Argument type: vec is an Array.

Scales the vector to a length of 1.0. Calling normalize is a shorthand for the operation div(vec, length(vec)).

length(vec)

Return type: Number.

Argument type: vec is an Array.

Returns the length of vector vec.

length(point1, point2)

Return type: Number.

Argument type: point1 and point2 are Arrays.

Gives the distance separating two points; the point2 argument is optional. As an example, length(point1, point2) equals length(sub(point1, point2)).

To lock a camera's focal plane onto its point of interest so that point stays sharp, add this expression to the camera's Focus Distance property:

length(position, pointOfInterest)

lookAt(fromPoint, atPoint)

Return type: Array [3].

Argument type: fromPoint and atPoint are Arrays [3].

Here fromPoint is the world-space location of the layer you mean to orient, while atPoint is the world-space point you want that layer aimed toward. Feed the return value into the Orientation property to swing the layer's z-axis toward atPoint. The method shines with cameras and lights; if you apply it to a camera, switch off auto-orientation. For example, placed on the Orientation property of a spot light, this expression aims the light at the anchor point of layer number 1 in the same composition: lookAt(position, thisComp.layer(1).position)

## Random Numbers methods (expression reference)

Note

The wiggle method — used to randomly vary a property value — lives in the Property attributes and methods category. See Property attributes and methods (expression reference) for details.

seedRandom(offset, timeless=false)

Return type: none.

Argument type: offset is a Number, timeless is a Boolean.

A seed value steers the number sequence produced by the random and gaussRandom methods. By default that seed is derived from a unique layer identifier, the property inside the layer, the present time, and an offset of 0. Calling seedRandom with an offset other than 0 produces a different random sequence.

Pass true for the timeless argument to keep the current time out of the random seed. Doing so lets you produce a random number that won't change with the moment of evaluation.

It's the offset value — not the timeless value — that also governs the wiggle function's starting value.

For example, on the Opacity property this expression fixes Opacity to a random value that stays constant over time:

seedRandom(123456, true); random()\*100

Multiplying by 100 here turns the 0–1 value that random returns into one spanning 0–100; that span suits the Opacity property, whose values run from 0% to 100%, far better.

random()

Return type: Number.

Returns a random number in the range 0–1.

In After Effects CC and CS6, the behavior of random() is changed to be more random when layer IDs are close together. The wiggle() expression is not affected.

random(maxValOrArray)

Return type: Number or Array.

Argument type: maxValOrArray is a Number or Array.

When maxValOrArray is a Number, the method returns a value between 0 and maxValOrArray. When it's an Array, the method returns an Array matching maxValOrArray's dimension, each component running from 0 up to the matching component of maxValOrArray.

random(minValOrArray, maxValOrArray)

Return type: Number or Array.

Argument type: minValOrArray and maxValOrArray are Numbers or Arrays.

When both minValOrArray and maxValOrArray are Numbers, the method returns a value between minValOrArray and maxValOrArray. When the arguments are Arrays, it returns an Array sized to the larger-dimensioned argument, each component falling between the matching components of minValOrArray and maxValOrArray. For instance, random([100, 200], [300, 400]) yields an Array whose first value lands in 100–300 and whose second lands in 200–400. Should the two input Arrays differ in dimension, the higher-dimension slots of the shorter Array are padded with zeros.

gaussRandom()

Return type: Number.

Returns a random number whose results follow a Gaussian (bell-shaped) distribution. Roughly 90% of the outputs fall within 0–1, with the other 10% lying outside it.

gaussRandom(maxValOrArray)

Return type: Number or Array.

Argument type: maxValOrArray is a Number or Array.

With maxValOrArray as a Number, the method returns a random number — about 90% of outputs sit in the 0 to maxValOrArray range and the remaining 10% sit outside it. With maxValOrArray as an Array, it returns an Array of random values matching maxValOrArray's dimension; 90% of those values fall between 0 and maxValOrArray, the other 10% outside. The outputs carry a Gaussian (bell-shaped) distribution.

gaussRandom(minValOrArray, maxValOrArray)

Return type: Number or Array.

Argument type: minValOrArray and maxValOrArray are Numbers or Arrays.

When minValOrArray and maxValOrArray are Numbers, the method returns a random number — roughly 90% of outputs fall between minValOrArray and maxValOrArray, the other 10% outside. When the arguments are Arrays, it returns an Array of random numbers matching the larger-dimensioned argument. For each component, about 90% of outputs fall between the matching components of minValOrArray and maxValOrArray, with the remaining 10% outside. The outputs carry a Gaussian (bell-shaped) distribution.

noise(valOrArray)

Return type: Number.

Argument type: valOrArray is a Number or an Array [2 or 3].

Returns a value between -1 and 1. This noise isn't truly random; it draws on Perlin noise, so the return values for two nearby inputs tend to stay near one another. Such noise helps whenever you want a string of seemingly random numbers that don't swing wildly between neighbors — typically the case when animating any natural-looking random motion. Example: rotation + 360\*noise(time)

## Interpolation methods (expression reference)

Across every Interpolation method, the t argument usually stands for time or value, but other quantities work too. When t represents time, the values are interpolated across a span of time. When t represents the value, the expression remaps an input range onto a fresh output range.

linear(t, tMin, tMax, value1, value2)

Return type: Number or Array.

Argument type: t, tMin, and tMax are Numbers, and value1 and value2 are Numbers or Arrays.

Returns value1 when t <= tMin. Returns value2 when t >= tMax. Returns a linear interpolation between value1 and value2 when tMin < t < tMax.

As an illustration, placing this on the Opacity property drives Opacity in a straight-line ramp from 20% up to 80% across the interval from 0 seconds through 6 seconds:

linear(time, 0, 6, 20, 80)

As with every Interpolation method, this one is also handy for remapping one value range onto another. Here, for instance, the expression on the Opacity property takes Opacity readings in the 0%-100% band and rescales them into the 20%-80% band:

linear(value, 0, 100, 20, 80)

linear(t, value1, value2)

Return type: Number or Array.

Argument type: t is a Number, and value1 and value2 are Numbers or Arrays.

As t moves across the span from 0 to 1, the result interpolates linearly from value1 toward value2. Returns value1 when t <= 0. Returns value2 when t >= 1.

ease(t, value1, value2)

Return type: Number or Array.

Argument type: t is a Number, and value1 and value2 are Numbers or Arrays.

Behaves like linear given the same arguments, but the interpolation eases at both ends, dropping velocity to 0 at the start and finish. The payoff is a smooth animation.

ease(t, tMin, tMax, value1, value2)

Return type: Number or Array.

Argument type: t, tMin, and tMax are Numbers, and value1 and value2 are Numbers or Arrays.

Behaves like linear given the same arguments, but the interpolation eases at both ends, dropping velocity to 0 at the start and finish. The payoff is a smooth animation.

easeIn(t, value1, value2)

Return type: Number or Array.

Argument type: t is a Number, and value1 and value2 are Numbers or Arrays.

Behaves like ease, but only the value1 side gets a tangent of 0; the value2 side stays linear.

easeIn(t, tMin, tMax, value1, value2)

Return type: Number or Array.

Argument type: t, tMin, and tMax are Numbers, and value1 and value2 are Numbers or Arrays.

Behaves like ease, but only the tMin side gets a tangent of 0; the tMax side stays linear.

easeOut(t, value1, value2)

Return type: Number or Array.

Argument type: t is a Number, and value1 and value2 are Numbers or Arrays.

Behaves like ease, but only the value2 side gets a tangent of 0; the value1 side stays linear.

easeOut(t, tMin, tMax, value1, value2)

Return type: Number or Array.

Argument type: t, tMin, and tMax are Numbers, and value1 and value2 are Numbers or Arrays.

Behaves like ease, but only the tMax side gets a tangent of 0; the tMin side stays linear.

## Color Conversion methods (expression reference)

rgbToHsl(rgbaArray)

Return type: Array [4].

Argument type: rgbaArray is an Array [4].

Takes a color expressed in RGBA space and recasts it into HSLA space. You feed it an Array of normalized red, green, blue, and alpha channel values, each spanning 0.0 through 1.0. Back comes an Array of hue, saturation, lightness, and alpha channel values, likewise spanning 0.0 through 1.0. Example:

rgbToHsl.effect("Change Color")("Color To Change")

hslToRgb(hslaArray)

Return type: Array [4].

Argument type: hslaArray is an Array [4].

Takes a color expressed in HSLA space and recasts it into RGBA space. It runs the rgbToHsl conversion in reverse.

hexToRgb(hexString)

Return type: Array (RGB values)

Argument type: hexString is a String.

Takes a color hex string — whether triplet space or quartet space — and turns it into an array of RGB values. When the hex is a triplet, the alpha channel falls back to 1.0.

## Other Math methods (expression reference)

degreesToRadians(degrees)

Return type: Number.

Argument type: degrees is a Number.

Takes a value in degrees and returns the equivalent in radians.

radiansToDegrees(radians)

Return type: Number.

Argument type: radians is a Number.

Takes a value in radians and returns the equivalent in degrees.

## Comp attributes and methods (expression reference)

layer(index)

Return type: Layer, Light, or Camera.

Argument type: index is a Number.

Fetches a layer by its number, which is its order in the Timeline panel. Example: thisComp.layer(3)

layer(name)

Return type: Layer, Light, or Camera.

Argument type: name is a String.

Fetches a layer by its name. Matching goes by layer name first, falling back to source name when no layer name exists. When names are duplicated, the topmost match in the Timeline panel wins. Example:

thisComp.layer("Solid 1")

layer(otherLayer, relIndex)

Return type: Layer, Light, or Camera.

Argument type: otherLayer is a Layer object, and relIndex is a Number.

Fetches whichever layer sits relIndex positions above or below otherLayer. So thisComp.layer(thisLayer, 1).active comes back true whenever the layer directly beneath it in the Timeline panel is active.

marker

Return type: MarkerProperty.

Note

Composition markers cannot be reached by marker number. Should you open a project built in an older After Effects release whose expressions still cite composition marker numbers, swap those references for marker.key(name). Since a composition marker is named with a number by default, the switch frequently amounts to wrapping that number in quotation marks.

marker.key(index)

Return type: MarkerKey.

Argument type: index is a Number.

Hands back the MarkerKey object for the marker at the given index. That index tracks where the marker falls in composition time rather than what the marker is named. As a sample, the expression below yields the time of the first composition marker:

thisComp.marker.key(1).time

marker.key(name)

Return type: MarkerKey.

Argument type: name is a String.

Hands back the MarkerKey object for the marker carrying the given name. The name value matches whatever was typed into the comment field of the marker dialog box, such as marker.key("1"). Composition markers default to a numeric name. When several markers in the composition share a name, the one earliest in composition time is returned. A marker key's value is a String rather than a Number. For instance, this expression yields the time of the composition marker named "0":

thisComp.marker.key("0").time

marker.nearestKey(t)

Return type: MarkerKey.

Argument type: t is a Number.

Hands back whichever marker lies closest in time to t. For instance, this expression yields the time of the composition marker sitting nearest the 1-second mark:

thisComp.marker.nearestKey(1).time

And this one yields the time of the composition marker closest to the current time:

thisComp.marker.nearestKey(time).time

marker.numKeys

Return type: Number.

Tallies how many composition markers the composition holds.

layerByComment (comment)

Return type: Layer

Argument type: comment is a String.

Pulls the first layer in the active composition whose Layer Comment field equals the given string.

numLayers

Return type: Number.

Reports the count of layers in the composition.

activeCamera

Return type: Camera.

Hands back the Camera object that the composition renders through on the current frame. That camera need not match the one you happen to be viewing through in the Composition panel.

width

Return type: Number.

Reports the composition width, in pixels.

To park a layer at the center of the composition frame, apply the expression below to that layer's Position property:

[thisComp.width/2, thisComp.height/2]

height

Return type: Number.

Reports the composition height, in pixels.

duration

Return type: Number.

Reports the composition duration, in seconds.

ntscDropFrame

Return type: Boolean.

Comes back true when the timecode uses drop-frame format. (After Effects CS5.5and later.)

displayStartTime

Return type: Number.

Reports the composition start time, in seconds.

frameDuration

Return type: Number.

Reports the duration of a frame, in seconds.

shutterAngle

Return type: Number.

Reports the composition's shutter-angle value, in degrees.

shutterPhase

Return type: Number.

Reports the composition's shutter phase, in degrees.

bgColor

Return type: Array [4].

Reports the composition's background color.

pixelAspect

Return type: Number.

Reports the composition's pixel aspect ratio.

name

Return type: String.

Reports the composition's name.

## Composition marker protected region attribute

Reading the protectedRegion composition marker attribute returns the Protected Region option set on a composition marker.
