# Template, Thermometer, This, Tts

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Template; Thermometer; this; TTS.

## Template

### JavaScript APIs — Template

Named pages living inside the document are what Template objects represent. Such pages may sit hidden or stay visible, and they can be copied or spawned. The usual purpose is generating content on the fly — adding pages to an invoice when it overflows, say.

See also the Doc templates property, and createTemplate, getTemplate, and removeTemplate methods.

### Template properties

### hidden

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

Not allowed in Reader: Only available in Acrobat products

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Controls whether the template stays hidden. A hidden template remains invisible to the user right up until it is spawned or switched to visible. The moment an invisible template turns visible, it gets tacked onto the end of the document.

Within Adobe Reader, the property acts like this:

In Adobe Reader builds before 5.1, assigning this property throws an exception.

Under Adobe Reader 5.1 and 6.0, whether you can set this property hinges on Advanced Forms Feature document rights.

Under Adobe Reader 7.0, there is no situation in which this property may be set.

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

Whatever name was given to the template at the moment it was created.

### Template methods

### spawn

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

F

| --- | --- | --- | --- |

Generates a fresh page in the document, modeled on the template.

Parameters

Parameter

Description

nPage

(optional) The 0-based page index after which, or on which, the new page lands — which of the two depends on bOverlay. The default is 0.

bRename

(optional) Controls whether the page’s form fields get renamed. The default is true.

bOverlay

(optional) When true (the default), the template lays over the named page. When false, it slots in as a fresh page ahead of the named one. To tack a page onto the document, give bOverlay a value of false and point nPage at the document’s page count. - With certified documents, or documents holding Advanced Form Features rights, the bOverlay parameter is switched off. Such document types cannot have a template laid over them.

oXObject

(optional, Acrobat 6.0) Feed this parameter the value an earlier spawn call handed back.

| --- | --- |

Returns

Up through versions before Acrobat 6.0, nothing came back from this method. These days, spawn hands back an object standing for the page contents of the page it spawned. You can then feed that return object as the optional oXObject parameter on later spawn calls.

Note

Spawning one page over and over can balloon the file size. The workaround: spawn now returns an object representing the spawned page’s contents. Pass that return value as the oXObject parameter on subsequent spawn method calls to spawn the very same page.

Example 1: Spawn every template and tack each onto the document’s end one after another.

```
var a = this.templates;
for (i = 0; i < a.length; i++)
    a[i].spawn(this.numPages, false, false);
```

Example 2 (Acrobat 6.0)

Spawn one template 31 times by way of the oXObject parameter and the return value. Going this route keeps the file size from ballooning.

```
var t = this.templates;
var T = t[0];
var XO = T.spawn(this.numPages, false, false);
for (var i=0; i<30; i++) T.spawn(this.numPages, false, false, XO);
```

## Thermometer

### JavaScript APIs — Thermometer

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Pairing a status window with a progress bar, this object signals to the user that some drawn-out operation is underway. Grab a Thermometer object by way of app.thermometer.

Example: Here is how to exercise every property and method the Thermometer object offers.

```
var t = app.thermometer;         // Acquire a thermometer object
t.duration = this.numPages;
t.begin();
for ( var i = 0; i < this.numPages; i++)
{
    t.value = i;
    t.text = "Processing page " + (i + 1);
    if (t.cancelled) break;       // Break if the operation is cancelled
    .
.. process the page ...
}
t.end();
```

### Thermometer properties

### cancelled

Reports whether the user means to cancel the operation in progress. The user signals an intent to halt it by hitting the Esc key on Windows and UNIX, or Command-period on Mac OS.

Type

Access

Boolean

R

| --- | --- |

### duration

Holds the number that maps to a completely filled thermometer. You then fill the thermometer by assigning its value. 100 is the default duration.

Type

Access

Number

R/W

| --- | --- |

### text

Holds the text string the thermometer puts on screen.

Type

Access

String

R/W

| --- | --- |

### value

Holds the thermometer’s present value and refreshes what is drawn. The figure may run anywhere from 0 (empty) up to whatever duration holds. So if the thermometer’s duration sits at 10, its current value has to land between 0 and 10 inclusive. A value under zero snaps to zero; one above duration snaps down to duration.

Type

Access

Number

R/W

| --- | --- |

### Thermometer methods

### begin

Sets up the thermometer and shows it, the current value rendered as a fraction of the duration in percent.

Example: Tally the words on each page of the current document, keep a running total reported as you go, and lean on the thermometer to show progress.

```
var t = app.thermometer; // acquire a thermometer object
t.duration = this.numPages;
t.begin();
var cnt=0;
for ( var i = 0; i < this.numPages; i++)
{
    t.value = i;
    t.text = "Processing page " + (i + 1);
    cnt += getPageNumWords(i);
    console.println("There are " + cnt + "words in this doc.");
    if (t.cancelled) break;
}
t.end();
```

### end

Renders the thermometer with its current value pushed up to the thermometer’s duration (a full thermometer), and then clears the thermometer off the display.

## this

### JavaScript APIs — this

Inside JavaScript, the reserved word this points at the current object. Acrobat fixes what the current object is as follows:

Within an object method, it is whichever object owns that method.

Within a constructor function, it is the object under construction.

Within a document-level or field-level script, it is the Doc, so you can read or write document properties and functions through it.

Within a function that lives in one of the folder-level JavaScripts files, it is undefined. Code that calls such functions should hand the Doc along to any function at this level that requires it.

Take, for instance, this function defined at the plug-in folder level:

```
function PrintPageNum(doc)
{ /* Print the current page number to the console. */
    console.println("Page = " + doc.pageNum);
}
```

Running the script below writes the current page number to the console two times, then sends the page to print:

```
/* Must pass the Doc. */
PrintPageNum(this);
/* Same as the previous call. */
console.println("Page = " + this.pageNum);
/* Prints the current page. */

 this.print(false, this.pageNum, this.pageNum);
```

Any variables and functions declared within scripts hang off the this object. To illustrate:

```
var f = this.getField("Hello");
```

amounts to the same thing as

```
this.f = this.getField("Hello");
```

the one difference being that the variable f is fair game for garbage collection at any moment once the script has run.

Variable and function name conflicts

Anyone writing JavaScript should steer clear of reusing the Doc’s property and method names as variable names. Putting a method name after the reserved word var throws an exception, which the next line demonstrates:

```
var getField = 1; // TypeError: redeclaration of function getField
```

A property name won’t throw, yet the property’s value may go unchanged when that property points at an object:

```
// "title" will return "1", but the document will now be named "1".
var title = 1;

// Property not altered, info still an object
var info = 1; // "info" will return [object Info]
```

What follows shows one way to dodge a variable name clash.

```
var f = this.getField("mySignature"); // uses the ppklite sig handler

// Use "Info" rather than "info" to avoid a clash
var Info = f.signatureInfo();

// Some standard signatureInfo properties
console.println("name = " + Info.name);
```

## TTS

### JavaScript APIs — TTS

Version (Key)

Save-Prefs

Security

Product

4.05

No

No

All

| --- | --- | --- | --- |

Through the JavaScript TTS object, users can turn written text into spoken audio. Using it requires a Text-To-Speech engine to be installed on the user’s machine. That engine takes the text, renders it as digital audio, and voices it. Accessibility drove most of its design, though plenty of other uses are conceivable. Because it is a JavaScript object, the TTS object shows up on Windows and Mac OS alike.

Note

For accessibility, Acrobat 5.0 went a markedly different route, hooking straight into the well-known screen readers. As a result, a handful of the screen-reading capabilities the TTS object provided back in 4.05 were taken out in 5.0, since they clash with the screen reader. Still, the TTS object stays, because on its own it carries useful functionality that multimedia documents may well find appealing.

### TTS properties

### available

true when the TTS object can be used and the Text-To-Speech engine is reachable.

Type

Access

Boolean

R

| --- | --- |

Example:

```
console.println("Text to speech available: " + tts.available);
```

### numSpeakers

How many speakers the Text-To-Speech engine has on offer. See also the speaker property and the getNthSpeakerName method.

Type

Access

Integer

R

| --- | --- |

### pitch

Holds the baseline pitch a speaker’s voice uses. Valid pitch figures run from 0 to 10, where 5 serves as the default for the mode.

Type

Access

Integer

R/W

| --- | --- |

### soundCues

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

All

Boolean

R/W

Deprecated. Returns false.

### speaker

Lets users pick among different speakers, each with its own tonal character, when doing text-to-speech. See also the numSpeakers property and the getNthSpeakerName method.

Type

Access

String

R/W

| --- | --- |

### speechCues

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

All

Boolean

R/W

Deprecated. Returns false.

### speechRate

Type

Access

Integer

R/W

| --- | --- |

Holds how fast the Text-To-Speech engine voices the text. speechRate is given as a count of words per minute.

### volume

Type

Access

Integer

R/W

| --- | --- |

Holds the loudness of the speech. Permitted figures run from 0 (mute) up to 10 (loudest).

### TTS methods

### getNthSpeakerName

Hands back the n th speaker name held by the Text-To-Speech engine (see also the numSpeakers and speaker properties).

Parameters

nIndex

Which speaker name you want, given by its index.

| --- | --- |

Returns

The name belonging to the requested speaker.

Example: Walk through every speaker on offer.

```
for (var i = 0; i < tts.numSpeakers; i++) {
    var cSpeaker = tts.getNthSpeakerName(i);
    console.println("Speaker[" + i + "] = " + cSpeaker);
    tts.speaker = cSpeaker;
    tts.qText ("Hello");
    tts.talk();
}
```

### pause

Halts text-to-speech output on a TTS object on the spot. You can pick the leftover queued text back up by calling resume.

### qSilence

Drops a stretch of silence into the text queue.

Parameters

nDuration

How long the silence runs, in milliseconds.

### qSound

Adds the named sound to the queue for talk to render. It takes a single argument, cSound, drawn from a set of recognized sound cue names. Each name corresponds straight to a sound file kept in the SoundCues folder, should that folder be present.

```
tts.qSound("DocPrint");         // Plays DocPrint.wav
```

You will find the SoundCues folder at the viewer’s program level — for instance, C:Program FilesAdobeAcrobat 9.0SoundCues.

Note

Windows only—the only files qSound accepts are 22 KHz, 16-bit PCM .wav files. They ought to run at least 1 second so MS SAPI does not hit a queue delay snag. A sound shorter than 1 second should be edited to tack some silence onto its end.

Parameters

cSound

Which sound cue name to use.

### qText

Drops text into the queue for talk to render.

Parameters

cText

The text headed for speech conversion.

Example:

```
tts.qText("Hello, how are you?");
```

### reset

Halts playback of queued text and clears the queue. On top of that it returns every TTS object property to its default. resume cannot pick the text playback back up.

### resume

Picks playback of text back up on a TTS object that was paused.

### stop

Halts playback of queued text and clears the queue. resume cannot pick the text back up.

### talk

Hands whatever sits in the queue to the Text-To-Speech engine to be voiced. Where text output had been paused, talk picks the queued text back up.

Example:

```
tts.qText("Hello there!");
tts.talk();
```
