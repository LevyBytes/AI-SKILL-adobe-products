# Color, Colorconvertaction, Collection, Collectionfield

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: color; colorConvertAction; Collection; collectionField.

## color

### JavaScript APIs — color

Serving as a handy static object, the color object lays out the standard colors. Reach for it whenever a property or method call expects a color array.

### Color arrays

JavaScript expresses a color through an array of 1, 2, 4, or 5 entries, which map respectively onto a Transparent, Gray, RGB, or CMYK color space. A string naming the color space type sits in the array's first slot. After it come numbers, each falling somewhere from zero through one inclusive. Red, as one example, can be written ["RGB", 1, 0, 0].

When a color array carries a bad string or too few entries, the color resolves to black.

Color space

String

Number of additional elements

Description

Transparent

“T”

0

Signalling that color is entirely absent, a transparent color space lets whatever sits beneath the current field show through.

Gray

“G”

1

One value—how intense the achromatic light is—carries each color here. Within this space, black sits at 0 and white at 1, with the figures between standing for grades of gray. Take .5, which yields medium gray.

RGB

“RGB”

3

Three values—the strength of the red, green, and blue parts of the output—carry each color. Video displays, typically built on red, green, and blue phosphors, lean on RGB as a rule.

CMYK

“CMYK”

4

Four values—the proportions of cyan, magenta, yellow, and black in the output—carry each color. Color printers favor this space, since those are the ink colors behind four-color printing. Cyan, magenta, and yellow alone would do, yet black ink earns its place in printing both because it yields a richer black than blending cyan, magenta, and yellow does and because it runs cheaper than the rest.

| --- | --- | --- | --- |

### color properties

These are the colors the color object lays out.

Color object

Keyword

Equivalent JavaScript

Version

Transparent

color.transparent

[ "T" ]

Black

color.black

[ "G", 0 ]

White

color.white

[ "G", 1 ]

Red

color.red

[ "RGB", 1,0,0 ]

Green

color.green

[ "RGB", 0,1,0 ]

Blue

color.blue

[ "RGB", 0, 0, 1 ]

Cyan

color.cyan

[ "CMYK", 1,0,0,0 ]

Magenta

color.magenta

[ "CMYK", 0,1 0,0 ]

Yellow

color.yellow

[ "CMYK", 0,0,1,0 ]

Dark Gray

color.dkGray

[ "G", 0.25 ]

4.0

Gray

color.gray

[ "G", 0.5 ]

4.0

Light Gray

color.ltGray

[ "G", 0.75 ]

4.0

| --- | --- | --- | --- |

Example: here the field's text turns red whenever its value drops below zero and black whenever that value is zero or above.

```
var f = event.target; /* field that the event occurs at */
f.target.textColor = event.value < 0 ? color.red : color.black;
```

### color methods

convert

equal

### convert

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Takes the color space plus the color values held by the color object and recasts them into the named color space:

Going to the gray color space throws information away (much as showing a color TV broadcast on a black-and-white set throws information away).

Turning RGB into CMYK ignores whatever black generation or undercolor removal parameters might apply.

Parameters

Parameter

Description

colorArray

A color-value array. See Color arrays.

cColorspace

Names the destination color space for the conversion.

| --- | --- |

Returns

A color array.

Example: running the single line of code shown here yields the array ["CMYK", 0, 1, 1, 0].

```
color.convert(["RGB",1,0,0], "CMYK");
```

### equal

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Checks a pair of Color Arrays for equality. Where it has to, the routine runs conversions so it can tell whether the two colors truly match (["RGB",1,1,0], for instance, matches ["CMYK",0,0,1,0]).

Parameters

colorArray1

The leading color array in the comparison.

colorArray2

The trailing color array in the comparison.

| --- | --- |

Returns

true if the arrays represent the same color, false otherwise.

Example:

```
var f = this.getField("foo");
if (color.equal(f.textColor, f.fillColor))
    app.alert("Foreground and background color are the same!");
```

## colorConvertAction

### JavaScript APIs — colorConvertAction

A lone color conversion action is what this object captures.

Calling the Doc object's getColorConvertAction method yields a colorConvertAction object, which you are then free to adjust. Two halves make up a color conversion action: a “match” half and an “action” half. Which kinds of objects qualify for the action is set out by the “match” half. An array of these actions feeds the Doc object's colorConvertPage method, which tries them one by one until something matches.

### colorConvertAction properties

### action

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Sets out what to do once a match lands.

You reach the value of action by way of the colorConvertAction object's constants.actions object, using the constants below:

constants.actions object

Name

Description

Preserve

Leave things alone apart from resolving ink aliases.

Convert

Convert to target space.

Decalibrate

Convert calibrated space to device.

DownConvert

Downconvert NChannel to DeviceN.

| --- | --- |

### alias

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

String

R/W

| --- | --- | --- | --- | --- | --- |

Where the action happens to be an ink action, this spells out the ink's alias.

### colorantName

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

String

R/W

| --- | --- | --- | --- | --- | --- |

Where the action happens to be an ink action, this spells out the colorant name.

See the related property isProcessColor.

### convertIntent

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Sets which rendering intent steers the object's color conversion. Table 4.20 of the PDF Reference covers rendering intents at length.

You reach the value of convertIntent by way of the colorConvertAction object's constants.renderingIntents object.

### convertProfile

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

String

R/W

| --- | --- | --- | --- | --- | --- |

Names the color profile that matching objects get converted into when the action is Convert. The app object's printColorProfiles property yields the roster of color profiles on offer.

### embed

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Should a matched object undergo conversion while embed is true, a color profile ends up embedded in the file alongside the result. If not, the object is held instead as whatever device color space corresponds to the profile it was converted into.

### isProcessColor

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

When the action is an ink action and isProcessColor reads true, the ink stands for a process color, so the colorantName ought to be one among Cyan, Magenta, Yellow, Black, Red, Green or Blue.

### matchAttributesAll

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

Integer

R/W

| --- | --- | --- | --- | --- | --- |

A bitmap of object attributes (flags) earmarked for matching is what the matchAttributesAll property holds. Only when every flag lines up — a full match — does the action fire.

You get at these flags via the colorConvertAction object's constants.objectFlags object, laid out like so:

constants.objectFlags object

Flag name

Description

ObjImage

Object is an image.

ObjJPEG

Object is a JPEG image.

ObjJPEG2000

Object is a JPEG2000 Image.

ObjLossy

Image in a lossy space.

ObjNonLossy

Image in a non-lossy space.

ObjText

Object is text.

ObjLineArt

Object is line-art (fill or stroke).

ObjShade

Object is a smooth shade.

ObjTransparent

Object is not opaque.

ObjOverprinting

Object overprints.

ObjOverprintMode

OPM is set to 1.

| --- | --- |

Note

Pairing the bitwise operators with the constants.objectFlags bit flags lets you assign matchAttributesAll.

Example: Match images that overprint.

```
var action = this.getColorConvertAction();
action.matchAttributesAll = action.constants.objFlags.ObjImage
               action.constants.objFlags.ObjOverprinting;
```

### matchAttributesAny

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

Integer

R/W

| --- | --- | --- | --- | --- | --- |

A bitmap of object attributes earmarked for matching is what the matchAttributesAny property holds. The action fires as soon as any one flag lines up.

You get at these flags via the colorConvertAction object's constants.objectFlags object.

Note

Pairing the bitwise operators with the constants.objectFlags bit flags lets you assign matchAttributesAny.

### matchIntent

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Lines up against whichever rendering intent the object uses. Table 4.20 of the PDF Reference covers rendering intents at length.

You get at the value of matchIntent via the colorConvertAction object's constants.renderingIntents object, laid out like so:

constants.renderingIntents object

Name

Description

AbsoluteColorimetric

Absolute colorimetric rendering intent.

RelativeColorimetric

Relative colorimetric rendering intent.

Saturation

Saturation rendering intent

Perceptual

Perceptual rendering intent

Any

Match any of the above rendering intents

Document

Use the rendering intent specified by the current graphics state in which the matched object is rendered (used by convertIntent only).

| --- | --- |

### matchSpaceTypeAll

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

Integer

R/W

| --- | --- | --- | --- | --- | --- |

A bitmap of color space attributes (flags) earmarked for matching is what the matchSpaceTypeAll property holds. Only when every flag lines up — a full match — does the action fire.

Color space attributes to be matched fill both of these bitmap fields. A full match across all flags is the only thing the first field responds to. The second field responds when any flag lines up.

You get at these flags via the colorConvertAction object's constants.spaceFlags object, laid out like so:

constants.spaceFlags object

Flag name

Description

DeviceSpace

Color space is one of DeviceRGB, DeviceCMYK, or DeviceGray.

CalibratedSpace

Color space is ICCBased, CalRGB, CalGray, or Lab.

AlternateSpace

This color space is the alternate space of a DeviceN, Separation, or ICCBased.

BaseSpace

This color space is the base space of an Indexed space.

IndexedSpace

This color space is an indexed space.

SeparationSpace

This color space is a Separation color space.

DeviceNSpace

This color space is a DeviceN color space.

NChannelSpace

This color space is a DeviceN color space with NChannel attributes.

RGBSpace

This space is RGB. This flag should only be used in combination with DeviceSpace or CalibratedSpace.

CMYKSpace

This space is CMYK. This flag should only be used in combination with DeviceSpace or CalibratedSpace.

GraySpace

This space is Grayscale. This flag should only be used in combination with DeviceSpace or CalibratedSpace.

LabSpace

This space is CIELAB. This flag should only be used in combination with DeviceSpace or CalibratedSpace.

| --- | --- |

Note

Pairing the bitwise operators with the constants.spaceFlags bit flags lets you assign matchSpaceTypeAll.

### matchSpaceTypeAny

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

Integer

R/W

| --- | --- | --- | --- | --- | --- |

A bitmap of color space attributes (flags) earmarked for matching is what the matchSpaceTypeAny property holds. The action fires as soon as any one flag lines up.

You get at these flags via the colorConvertAction object's constants.spaceFlags object.

Note

Pairing the bitwise operators with the constants.spaceFlags bit flags lets you assign matchSpaceTypeAny.

### preserveBlack

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

When a matched object is set to convert and preserveBlack reads true, the conversion runs through a “black-preserving” transform that treats text and line art objects as a special case. Take a CMYK color of (0.0, 0.0, 0.0, 1.0), an RGB color of (0.0, 0.0, 0.0), or a gray color of (0.0): with preserveBlack true, each counts as special-case black and converts straight to black, the conversion profile bypassed. Whatever the matching black is for the target profile's color space governs the result — so if the convert profile is RGB, the outcome is (0.0, 0.0, 0.0) regardless of what the color profile dictates.

### useBlackPointCompensation

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

Acrobat Pro only

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

With useBlackPointCompensation set true, every color conversion applies black point compensation. How much this flag does hinges on which color management method (CMM) is at work; under the Adobe CMM, though, colorimetric transforms get scaled so that black stays black whatever the source profile's media black point happens to be.

## Collection

### JavaScript APIs — Collection

The Doc.collection property is where a collection object comes from. When no PDF collection exists (the thing also known as a PDF package and PDF portfolio), Doc.collection hands back null.

What the collection object handles is naming the collection's starting document, fixing the collection's starting view, and fetching, inserting, and dropping collection fields (or categories).

### Collection properties

### fields

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

All

Array

R/W

| --- | --- | --- | --- | --- | --- |

An array of the collection's collectionField objects is what the fields property holds.

Example: walk through every collectionField a collection holds.

```
for (var i in collection.fields)
```

console.println(i);

### initialDoc

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

Reach for the initialDoc property to pin down which document in the collection shows first when the collection opens. What initialDoc holds is the name property belonging to the initial document's data object — or null where no initial document has been named.

Example: make the collection's third file the one shown first.

```
this.collection.initialDoc = this.dataObjects[2].name;
```

### initialView

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

A string that spells out the starting collection view. Tile, Details, Hidden, Custom, or null are among the values it accepts. Tile and Details ship as built-in views, whereas Custom signals a preference for a document-based Navigator.

Example: choose Details as the starting view.

```
this.collection.initialView = "Details";
```

### Collection methods

### addField

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

All

| --- | --- | --- | --- |

Inserts a fresh field (or category) into the collection schema. Where the field is already present, the method raises an exception.

name

A string giving the field name of the collectionField object slated to be added.

text

This field's text as it is shown to the user within the interface.

type

(Optional) A string pinning down the kind of data the field carries. The candidate values appear below. S, a string type. A field whose value is a string. D, a date type. A field whose value is a date. N, a numeric type. A field whose value is numeric. These next values mark out the file-related field kinds: F, a field set aside for the file name of a collection member. Desc, a field set aside for a description string of a collection member. Size, a field set aside for the file size of a collection member. ModDate, a field set aside for the modification date of a collection member. CreationDate, a field set aside for the creation date of a collection member. CompressedSize, a field set aside for the compressed file size of a collection member. "S", a string type, is the default.

order

(Optional) An integer fixing where the field falls in the collection's on-screen display within the interface. Leave this parameter out and the new field lands at the end of the list.

visible

(Optional) A Boolean fixing whether the field shows. true makes the field visible; false keeps it hidden. The default is true.

readOnly

(Optional) A Boolean; true marks the field read only. The default is false. A read-only field bars the user from altering its value through the interface.

| --- | --- |

Returns

The collectionField object of the newly created field.

Example: add a fresh collection field named "to" by way of object-literal syntax.

```
this.collection.addField({name:"to", order:3, text:"To", type:"S"});

// Identical to the call above, just with positional arguments instead.
this.collection.addField("to", "To", "S", 3);
```

### getField

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

All

| --- | --- | --- | --- |

Handed a collection field's name, the getField method gives back the collectionField object that goes with it.

Parameters

Parameter

Description

name

A string giving the field name of the collectionField object slated to be retrieved.

| --- | --- |

Returns

Either the matching collectionField object, or null when no such field turns up.

Example: fetch the collectionField object tied to the "from" field.

```
var f = this.collection.getField("from");
```

### removeField

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

All

| --- | --- | --- | --- |

Drop a field from the collection schema.

Parameters

name

A string giving the name of the field slated for removal.

| --- | --- |

Example: strip the "from" field out of the collection schema.

```
this.collection.removeField("from");
```

## collectionField

### JavaScript APIs — collectionField

Each field (or category) belonging to a collection is exposed as a property on the collectionField object. What the user reads in the interface while browsing the list of files in a collection comes from the text property (described further down). Through the collectionField object you control how fields are ordered in that interface, in what order the file listing is sorted, and whether a particular field is locked against editing.

For embedded files within a collection, the per-field values can be retrieved or assigned by way of the data object's getFieldValue and setFieldValue methods.

### collectionField properties

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

Holds the field's name as a string.

### order

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Gives this field's listing position relative to the others, counted from 0. If you reassign the value, any other fields are bumped up as required so that two fields never share the same position.

### readOnly

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

A Boolean that controls whether a user is permitted to edit this field's values from the interface. Setting readonly to true locks the field so nothing can be modified.

### sort

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

How much weight this field carries when files in the collection are ordered is governed by sort.

A value of 0 leaves the field out of the sort entirely. An absolute value of 1 makes it the primary sort field; an absolute value of 2 makes it the secondary field (consulted to break ties on the primary), and the pattern continues from there. The sign carries the direction as well: a positive value sorts the files in ascending order, while a negative value sorts them in descending order.

Example: Picture four fields that label an email inbox — From, Subject, To, and Received — to see how ordering plays out. Every file in the collection stands for one email message. Give each field a sort value as shown here:

From: 0

To: 0

Subject: 1

Received: -2

Read these settings as follows. "Subject" serves as the primary sort field, since its absolute value is 1, and the positive sign sorts those entries in ascending order. Whenever two files carry the same subject, the tie passes to the secondary field. Here that field is "Received," whose absolute value of 2 marks it secondary and whose negative sign sorts it in descending order. So the listing runs by Subject ascending, and within any group of matching Subjects the files fall into a descending subgroup keyed on Received. The remaining fields, being 0, play no part in the ordering.

### text

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

Whatever label the field displays in the interface is held by text.

### type

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

A text string naming the kind of data the field holds. The accepted values are:

S, marks the field's value as a string.

D, marks the field's value as a date.

N, marks the field's value as a number.

F, means the value is the file name of one collection member.

Desc, means the value is a description string for a collection member.

Size, means the value is the file size of a collection member.

ModDate, means the value is the modification date of a collection member.

CreationDate, means the value is the creation date of a collection member.

CompressedSize, means the value is the compressed file size of a collection member.

Once a field exists, this property is fixed and cannot be altered. You only get to set the type at the moment the field is created through the addField method.

Example: Tweak and then inspect the properties on the user-defined "from" field.

```
var f = this.collection.getField("from");
f.visible = true;
f.order = 1;
f.text = "From";
console.println("Field name: " + f.name);
console.println("Field type: " + f.type);
```
