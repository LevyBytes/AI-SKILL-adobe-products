# Expression Language Reference (part 4)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Expression access to paths points on shapes, masks, and brush strokes (expression reference)

An array containing number pair arrays representing the [x,y] offset coordinates of the outgoing tangent handles to the path points. Required unless no parameters are passed (i.e., createPath()). The array length must be the same as points, or you can pass an empty array ([]), which will assume the same length as points and [0,0] for all tangents. Default is an empty array.

outTangents

An array containing number pair arrays representing the [x,y] offset coordinates of the incoming tangent handles to the path points. Required unless no parameters are passed (i.e., createPath()). The array length must be the same as points, or you can pass an empty array ([]), which will assume the same length as points and [0,0] for all tangents. Default is an empty array.

| --- | --- |

Returns:

A path object.

Examples:

- Example 1

This example records the run of point and tangent coordinates taken from Path 1 of Shape 1 on the Shape Layer 1 layer, sampled at time=0, into a string. Drop it on a text layer's source text property to read out the shape's coordinates together with its incoming and outgoing tangents.

pointsList = ""; sampleTime = 0; myShape = thisComp.layer("Shape Layer 1").content("Shape 1").content("Path 1").path;

for (i = 0; i < myShape.points(sampleTime).length; i++) { pointsList += "c: " + myShape.points(sampleTime)[i].toString() + " i: " + myShape.inTangents(sampleTime)[i].toString() + " o: " + myShape.outTangents(sampleTime)[i].toString() + "\n"; }

pointsList;

- Example 2

Here the first vertex of Mask 1 on Dark Gray Solid 1 has its coordinates pulled and converted over to composition coordinates. Apply it to an effect's 2D point control — Write-on or CC Particle Systems II, say — and the effect will trace or track an animated mask's opening point. Duplicate that effect and change the path-points index ([0]) to follow whichever other mask point you want.

myLayer = thisComp.layer("Dark Gray Solid 1"); myLayer.toComp(myLayer.mask("Mask 1").maskPath.points()[0]);

## Data-driven animation (expression reference)

Expression methods:

- Footage sourceText attribute {footageItem}.sourceText Returns the contents of a .JSON file as a string. Run the eval() method to turn that string into an array of sourceData objects — the same result the sourceData attribute yields — and from there the individual data streams are reachable as nested attributes of the data. As an example:

var myData = eval(footage("sample.json").sourceText);

myData.sampleValue;

Type:

String, the contents of the .JSON file; read-only.

- Footage sourceData attribute {footageItem}.sourceData Returns the data of a .JSON file as an array of sourceData objects. How big and how intricate that array is comes down to the layout of the .JSON file. The individual data streams are reachable as nested attributes of the data. As an example, with a data stream called Color, the following pulls the Color value from the first data object: footage("sample.json").sourceData[0].Color

The usual pattern is to bind a .JSON file's sourceData to a variable and then point at the data stream you want. As an example:

var myData = footage("sample.json").sourceData;

myData[0].Color;

Type:

An array of sourceData objects; read-only.

- Footage dataValue() method {footageItem}.dataValue(dataPath) Returns the value of specificed static or dynamic data stream in a .mgJSON file. It takes one array value that traces the path through the hierarchy down to the data stream you want. As an example:

footage("sample.mgjson").dataValue([0]) returns data of the first child.

footage("sample.mgjson").dataValue([1][0]) returns data of the first child in the second group.

Parameters:

dataPath

Array, required. The path in the hierarchy to a static or dynamic data stream.

| --- | --- |

Returns:

The value of the data stream.

- Footage dataKeyCount() method {footageItem}.dataKeyCount(dataPath)Returns the number of samples in a specificed dynamic data stream in a .mgJSON file.It takes one array value that traces the path through the hierarchy down to the dynamic data stream you want.

As an example:

- footage("sample.mgjson").dataKeyCount([0]) returns the count of samples for the first child
- footage("sample.mgjson").dataKeyCount([1][0]) returns the count of samples for the second group

Parameters:

dataPath

Array, required. The path in the hierarchy to a static or dynamic data stream.

| --- | --- |

Returns:

The number of samples in the dynamic data stream.

- Footage dataKeyTimes() method {footageItem}.dataKeyTimes(dataPath, t0 = startTime, t1=endTime)Returns the time in seconds for the samples of a specificed dynamic data stream in a .mgJSON file. You may optionally name the time span the samples come from. Left unspecified, it returns the time for every sample between startTime and endTime in the dynamic data stream, the bounds being set by that stream's samplesTemporalExtent property in the .mgJSON file. It takes one array value that traces the path through the hierarchy down to the dynamic data stream you want.

The example below returns the times of samples falling between 1 second and 3 seconds for the first child:

footage("sample.mgjson").dataKeyTimes([0], 1, 3)

Parameters:

dataPath

Array, required. The path in the hierarchy to a dynamic data stream.

t0

Number, optional. The start time, in seconds, of the span from which to return samples. Defaults to startTime.

t1

Number, optional. The end time, in seconds, of the span from which to return samples. Defaults to endTime.

| --- | --- |

Returns:

Array of numbers representing the sample times.

- Footage dataKeyValues() method {footageItem}.dataKeyValues(dataPath, t0 = startTime, t1=endTime)Returns the values for the samples of a specificed dynamic data stream in a .mgJSON file. You may optionally name the time span the samples come from. Left unspecified, it returns the time for every sample between startTime and endTime in the dynamic data stream, the bounds being set by that stream's samplesTemporalExtent property in the .mgJSON file. It takes one array value that traces the path through the hierarchy down to the dynamic data stream you want.

As an example:

footage("sample.mgjson").dataKeyValues([0], 1, 3) returns the values of samples between 1 second and 3 seconds for the first child.

Parameters:

dataPath

Array, required. The path in the hierarchy to a dynamic data stream.

t0

Number, optional. The start time, in seconds, of the span from which to return samples. Defaults to startTime.

t1

Number, optional. The end time, in seconds, of the span from which to return samples. Defaults to endTime.

| --- | --- |

Returns:

Array of numbers representing the sample values.

## Hex to RGB color conversion method (expression reference)

Hexadecimal color values such as #FF00FF are turned into RGBA color values by this color conversion method, hexToRgb(). It comes in handy when you need to tie color parameters to colors that arrive as hex strings inside JSON or CSV/TSV data sources.

Expression method:

hexToRgb(hexString) Converts a color in hex triplet space to RGB, or in hex quartet space to RGBA space. For hex triplets, alpha defaults to 1.0.

Parameters:

hexString

String representing an hex triplet (6 digits, no alpha channel) or quartet (8 digits, includes alpha channel) containing only numerals or characters A–F. Optional leading characters 0x, 0X, or # are ignored. Characters beyond 8 digits are ignored.

| --- | --- |

Returns:

RGBA color value array.

Examples:

Any of the following will return [1.0, 0.0, 1.0, 1.0]:

- hexToRgb("FF00FF")
- hexToRgb("#FF00FF")
- hexToRgb("0xFF00FF")
- hexToRgb("0XFF00FFFF") Note: 8-digit hex quartet; last two digits set alpha to 1.0.

### More like this

- Expression basics
- Expression examples
- Timecode and time display units
- Keyframe interpolation
- Automatically ease speed
- Cameras, lights, and points of interest
