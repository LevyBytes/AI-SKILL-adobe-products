# Expression Examples, Automation, Scripts

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Expression examples; Automation; Scripts.

## Expression examples

Search Last updated on Aug 29, 2024

### Download sample project

Download

Get file Grab this .aep file and you'll be set to follow along with the expression examples that come next.

### Wiggle randomly

Among the most widely used After Effects expressions is the wiggle expression. It jostles an object through random values, and you can reach for it to give a scene a more lifelike feel. Attach it to a layer's Position property.

In your composition, pick a layer.

To show that layer's Position property in the Timeline panel, tap P.

Beside the property name sits a stopwatch — Alt-click it on Windows, or Option-click it on macOS.

Type this code snippet into the expression field:

```
wiggle(2,30)
```

The signature here is wiggle (frequency, amount): the leading number says how many wiggles occur per second, and the trailing one says how far each wiggle reaches. So with wiggle(2,30), the layer jitters twice a second by up to 30 pixels in whatever direction.

### Control a wiggle with Slider controls

You can turn expressions into keyframeable values by swapping the values for links to expression controls, such as a Slider Control. Swap the wiggle() expression's second argument for a link to a Slider Control and you gain the ability to keyframe when the behavior kicks in and cuts out.

Onto any Layer, drop a Slider Control effect and label it Wiggle Amount.

On that same layer's Position property, put the expression below:

```
// Uses the pick-whip to create the "effect(...)" link to the Slider
var wiggleAmount = effect("Wiggle Amount")("Slider");

// Wiggles 4 times per second by the amount set by the Slider
wiggle( 4, wiggleAmount );
```

### Layer revolves in a circle

An expression doesn't have to borrow properties from other layers. You could, for example, send a layer orbiting around the composition's center.

Within your composition, choose a layer.

Hit P so the Timeline panel surfaces that layer's Position property.

The stopwatch to the left of the property name responds to an Alt-click on Windows or an Option-click on macOS.

Drop this code snippet into the expression field:

```
var centerOfComp = [ ( thisComp.width / 2 ), ( thisComp.height / 2) ];
var circleOverTime = [ Math.sin( time ) * 50, -Math.cos( time ) * 50 ];
centerOfComp + circleOverTime;
```

### Overshoot

Often called inertial bounce, this expression draws on a layer's own keyframe animation to produce a believable overshoot. It springs any parameter from one keyframe to the next according to its velocity, with the bounce following whichever way the object happens to be moving. To pull off this animation:

Build your graphics inside After Effects, or bring them in.

On the layer you intend to animate, set keyframes on its Position property.

Onto that layer's Position property, attach the expression below:

```
// Sets up values to control overshoot.
// Link these to Slider expression controls to quickly preview different settings.
var amp = 40;
var freq = 30;
var decay = 50;

// Finds the most recent keyframe
var nK = nearestKey(time);
var n = (nK.time <= time) ? nK.index : --nK.index;
var t = (n === 0) ? 0 : time - key(n).time;

// If the current time is later than a keyframe, calculate overshoot.
// If not, use original value.
if ( n > 0 && t < 1 ) {
    var v = velocityAtTime( key( n ).time - thisComp.frameDuration /10 );
    value + v * amp * .001 * Math.sin(freq * .1 * t * 2 * Math.PI) / Math.exp(decay * .1 * t);
} else {
      value;
}
```

### Rotate with time

Rotation values can be linked between layers with the pick whip to drive animated objects. Picture how a clock runs and treat these three circles as its three hands - the hour hand steps from hour to hour while the minute hand sweeps all the way around the clock face.

Bring in or build three solid-color circle layers. Treat one as the hour hand, a second as the minute hand, and the last as the seconds hand.

Place the anchor points out at the ends of the layers.

Slide the layers until those anchor points line up with the composition's center.

Lay down Rotation keyframes on the hour hand. For the minute hand, highlight its Rotation property and pick Animation > Add Expression.

Pull the pick whip over to the biggest circle's Rotation property, and this expression shows up:

```
 thisComp.layer("circle").rotation
```

Want the second circle turning twelve times quicker than the first? Append \*12 to the expression, thus:

```
thisComp.layer("circle").rotation*12
```

Do the same for the third circle, this time appending \*24 to the expression:

```
thisComp.layer("circle").rotation*24
```

### Loop

Rather than laying down extra keyframes, you can stretch and repeat an animation with expressions — say, keeping a set of shapes spinning right through to the end of a composition. The recipe is simple: give the Rotation property one keyframe holding the start angle and a second holding the finish angle. Once the loopOut() method is attached to that keyframed Rotation property, the layer carries on rotating past the final keyframe.

How the spin behaves is controlled by the arguments handed to loopOut(), which decide the loop style and the span of keyframes the loop covers.

```
//loopOut set to cycle all keyframes
loopOut("cycle", 0);
```

Here the opening argument, "cycle", picks one of the four loop styles loopOut supports; the remaining choices are "continue", "offset", and "ping-pong". With "cycle", playback restarts at the final keyframe and jumps back to the values held by the first keyframe inside the range that the second argument establishes.

That second argument states how many keyframes the loop reaches back through, tallied from the last keyframe toward the front. Leave it out or set it to 0 and every keyframe on the property repeats once the final keyframe passes. Pass 1 and only the stretch between the last keyframe and its immediate predecessor repeats. Pass 2 and the repeated span runs from the last keyframe back across the two keyframes preceding it, and the pattern continues upward from there.

### Get the true Position of a parented layer

Parenting a layer changes what its Position property reports: the figure you see is measured against the parent's location rather than marking the layer's genuine spot inside the Composition. Pinning down that genuine spot calls for an expression that remaps the parent's coordinate space onto the composition's own coordinate space. Drop the expression below onto the Position of a layer that has no parent, and it will track wherever the parented layer actually sits:

```
// Defines the parented layer
var targetLayer = thisComp.layer("Parented Layer");

// Finds the parented layer's Anchor Point in the Composition
targetLayer.toComp( targetLayer.anchorPoint );
```

### Delay a layer's Position from its parent

Staggering and delaying movement is one of the best tricks for giving animation a livelier, more lifelike feel. To build offsets like these, parent a group of layers to a single parent, then drop an expression onto each child's Position so the motion it picks up from the parent arrives late.

Keep in mind that this depends on the layers being parented.

```
// Sets a delay amount in frames
var delay = 5;

// Offsets the layer's Position in time based on delay
parent.fromComp( toComp( anchorPoint, time - framesToTime( delay ) ) );
```

The size of that delay can also be tied to where the child sits in the stack relative to its parent. Because of that, shuffling the child layers up or down in the Timeline beneath the parent (or above it, should you want their motion to lead the parent) instantly reorders when their animation fires:

```
// Sets a delay amount in frames
var delay = 5;

// Multiplies delay based on this layer's index relative to it's parent
var multiplyDelay = delay * ( index - parent.index )

// Offsets layer's Position in time based on delay
parent.fromComp( toComp( anchorPoint, time - framesToTime( multiplyDelay ) ) );
```

### Expression example: Start or stop wiggle at specific time

To kick off a wiggle on an element two seconds after the animation begins, attach this expression to its Position property:

```
var timeToStart = 2;

if (time > timeToStart) {
  wiggle(3,25);
} else {
  value;
}
```

To have the wiggle running from the very start and then cut it off once four seconds have elapsed, attach this expression to the element's Position property:

```
var timeToStop = 4;

if ( time > timeToStop ) {
  value;
} else {
  wiggle( 3, 25 );
}
```

To hold the wiggle to a window — beginning two seconds in and ceasing at the four-second mark — attach this expression to the element's Position property:

```
var timeToStart = 2;
var timeToStop = 4;

if ( ( time > timeToStart ) && ( time < timeToStop ) ) {
  wiggle(3,25);
} else {
  value;
}
```

### Expression example: Position one layer between two others

What this expression does is hold a single layer parked exactly midway between two others, keeping it centered as they move.

Begin by making three layers.

In the Timeline panel, animate where the first two layers travel.

Learn about working with Motion paths.

Click the third layer to select it, then tap P so the Position property shows. Hold Alt and click on Windows, or Option-click on macOS, the stopwatch button sitting just left of the property's name.

```
( thisComp.layer(1).position + thisComp.layer(2).position ) / 2
```

### Create a trail of images

This expression tells a layer to mirror the position of whatever layer sits directly above it in the Timeline panel, only lagging behind by a set interval — half a second here. The same idea extends to the layer's other geometric properties if you write comparable expressions.

Begin with a shape layer sized down to roughly 30% of the composition.

Reveal the Position property and lay in keyframes. With the layer selected, press P to expose the Position property. Hold Alt and click on Windows, or Option-click on macOS, the stopwatch button to the left of the property name.

Type the following into the expression field:

```
thisComp.layer(thisLayer, -1).position.valueAtTime(time - .5)
```

With that layer selected, press Ctrl+D (Windows) or Command+D (macOS) five times to make five duplicates. Every layer traces the identical path, with each one trailing the one above it by 0.5 seconds.

### Expression example: Create a bulge between two layers

What this expression does is lock the Bulge Center argument of one layer's Bulge effect onto where a second layer sits. Picture a magnifying glass gliding across a layer, the material beneath the lens swelling as the overlying layer slides by. Because the expression relies on the fromWorld method, it keeps behaving correctly no matter whether it's the magnifying glass layer or the layer underneath that you reposition. Rotating or scaling the lower layer leaves the expression working just the same.

The expression also pairs with other effects, Ripple among them.

Begin by making two layers. Turn one of them into a magnifying glass — or any object with a hole through its center — and label it Magnifier.

Animate where the magnifying glass layer travels.

Put the Bulge effect on the second layer.

In the Timeline panel, click the Bulge Center property belonging to the Bulge effect. Either go to Animation > Add Expression, or, on the property's stopwatch button, Alt-click (Windows) / Option-click (macOS).

```
fromWorld(thisComp.layer("Magnifier").position)
```

### Expression example: Fade opacity of a 3D layer based on distance from camera

Attach this expression to the Opacity property of a 3D layer:

```
var  startFade = 500; // Start fade 500 pixels from camera.
var  endFade = 1500;  // End fade 1500 pixels from camera.

try {
    // Check whether there's a camera
    var C = thisComp.activeCamera.toWorld([0,0,0]);
} catch ( err ) {
    // No camera, so assume 50mm
    var w = thisComp.width * thisComp.pixelAspect;
    var z = (w/2)/Math.tan(degreesToRadians(19.799));
    var C = [0,0,-z];
}

var P = toWorld( anchorPoint );
var d = length( C, P );

linear( d, startFade, endFade, 100, 0 );
```

Fading kicks in once the layer sits 500 pixels out from the camera and reaches full transparency by the time it's 1500 pixels away. Translating those distance figures into opacity figures is handled by linear interpolation.

### Expression example: Make a 3D layer invisible if facing away from camera

Attach this expression to the Opacity property of a 3D layer:

```
if ( toCompVec([0, 0, 1])[2] > 0 ) {
    value;
} else {
    0;
}
```

### Expression example: Flip layer horizontally if facing away from camera

Attach this expression to the Scale property of a 3D layer:

```
if ( toCompVec([0, 0, 1])[2] > 0 ) {
    value;
} else {
    [ -value[0], value[1], value[2] ];
}
```

### Expression example: Animate scale at each layer marker

To set a layer shaking each time it hits a marker, attach this expression to a Scale property:

```
var n = 0;
var t = 0;

if (marker.numKeys > 0){
    n = marker.nearestKey(time).index;
    if (marker.key(n).time > time) n--;
}
if (n > 0) t = time - marker.key(n).time;

var amp = 15;
var freq = 5;
var decay = 3.0;

var angle = freq * 2 * Math.PI * t;
var scaleFact = (100 + amp * Math.sin(angle) / Math.exp(decay * t)) / 100;

[value[0] * scaleFact, value[1] / scaleFact];
```

Note

A new marker is dropped in via Layer > Markers > New Marker.

The wiggle expression shown is only an example — swap in any other expression to switch its effect on and off at a chosen moment.

### Expression example: Match camera focal plane to another layer

So that a camera's focus distance tracks how far away the anchor point of a layer called 'Target' is, attach this expression to the camera layer's Focus Distance property:

```
var target = thisComp.layer("target");
var V1 = target.toWorld( target.anchorPoint ) - toWorld( [ 0, 0, 0 ] );
var V2 = toWorldVec( [ 0, 0, 1 ] );

dot( V1, V2 );
```

### More Expression resources

With a few of the ideas behind expressions now under your belt, head over to the community to pick up examples drawn from real projects and to post your own.

### More like this

- Expression basics
- Cameras, lights, and points of interest

## Automation

Search Last updated on Nov 3, 2023

Between After Effects itself and the Adobe tools it connects with, there's a wide assortment of ways to put repetitive work on autopilot.

Inside After Effects, expressions, scripts, and plug-ins let you automate both animation and image processing. On the rendering side, aerender, network rendering, and post-render actions take over the heavy lifting. Workflow automation scripts in Adobe Bridge cover still other chores. And since data moves freely between Photoshop and After Effects, you can lean on Photoshop macros, actions, droplets, and scripts to batch-process images bound for After Effects.

### More like this

- Expressions
- Plug-ins
- Scripts
- Automated rendering and network rendering
- Post-render actions

## Scripts

Search Last updated on Oct 3, 2024

Think of a script as an ordered list of instructions directing an application through a sequence of operations. Across most Adobe applications, scripts let you take the tedium out of repeated jobs, run involved calculations, and even reach features that the graphical user interface never surfaces. As examples, you might have After Effects restack a composition's layers, swap out source text inside text layers, or fire off an email the moment a render wraps.

The language behind After Effects scripts is Adobe ExtendScript, a superset of JavaScript. The filename extension on an ExtendScript file is either .jsx or .jsxbin.

The After Effects Scripting Guide spells out which scripting features After Effects makes available.

### Load and run scripts

Scripts sitting in the Scripts folder get loaded the moment After Effects launches. Out of the box, that Scripts folder lives where After Effects keeps it at these paths:

Windows: Program Files\Adobe\Adobe After Effects <version>\Support Files

macOS: Applications/Adobe After Effects <version>

A handful of scripts ship with After Effects and drop into the Scripts folder on their own. and all loaded scripts are available from the File > Scripts menu.

Note

- Should you tweak a script while After Effects is open, the edits won't take hold until you save them.
- Drop a script into the Scripts folder while After Effects is open and it won't show up in the Scripts menu until you relaunch the app — though the Run Script File command lets you run it straight away.

The bottom of the Window menu lists scripts kept in the ScriptUI Panels folder. Any script built to show its interface inside a dockable panel belongs in the ScriptUI folder. ScriptUI Panels behave very much like the panels native to the After Effects interface.

Note

Out of the box, scripts are barred from writing files or sending and receiving anything across a network. To grant scripts the ability to write files and reach the network,

- Windows: Select Edit > Preferences > Scripting & Expressions > select Allow Scripts To Write Files And Access Network.
- macOS: Select After Effects > Settings > Scripting & Expressions > select Allow Scripts To Write Files And Access Network.

To run a loaded script, choose File > Scripts > [script name].

When a script hasn't been loaded yet, pick File > Scripts > Run Script File, track down and select the script, then click Open.

Hit Esc to halt a script mid-run.

Running a script from the command line means invoking afterfx.exe there. Supply the -r switch along with the script's full path as the arguments. No fresh copy of After Effects opens — the script executes inside the instance already running.

For example (Windows): afterfx -r c:\script_path\example_script.jsx

Note

Pair this command-line approach with the utility bundled with a programmable keyboard, and you can map a script's launch onto a keyboard shortcut.

After Effects keeps a roster of the last 10 scripts you ran available for viewing. Pull it up through File > Scripts > Recent Script Files.

To fire off any of those 10 most recent scripts again,

- macOS: Cmd + Option + Shift + D
- Windows: Ctrl + Alt + Shift + D

Note

Over on the AE Scripts site, Lloyd Alvarez shares a workaround for running .jsxbin scripts when the Scripts or ScriptUI Panels folder is off-limits to you.

### Scripts included with After Effects

A number of ready-made scripts come bundled with After Effects, both to handle everyday jobs for you and to give you a starting point for tweaking or authoring your own.

Tip

Fire up the sample script Demo Palette.jsx to see the kinds of things scripts are capable of.

### Write and modify scripts

Authoring your own After Effects scripts is done in the script editor that ships as part of the ExtendScript Toolkit. That Toolkit hands you a handy environment for building, debugging, and testing the scripts you write. Often enough, a tiny edit to a script that already exists is all it takes to bend it to your needs — and edits that small usually call for barely any grounding in programming or scripting languages.

The script editor opens via File > Scripts > Open Script Editor.

Consult the After Effects scripting guide for further details.

### Motion Graphics templates scripting access

By calling the scripting methods below, scripts can push properties into the Essential Graphics panel and turn out a Motion Graphics template:

- Property canAddToMotionGraphicsTemplate() method

```
app.project.item(index).layer(index).propertySpec.canAddToMotionGraphicsTemplate(comp)
```

Checks whether the property is eligible to join the Essential Graphics panel for the named composition. The return is true when it can be added and false when it cannot. A property that can't be added is being refused either because its type isn't among the supported ones or because it's already in that composition. A warning dialog comes up from After Effects.

Supported property types:

- Checkbox
- Color
- Numerical Slider (a single-value numerical property, such as Transform > Opacity or the Slider Control expression control effect)
- Source Text

Parameters:

comp

A compItem — the composition into which you're trialing the property's addition.

| --- | --- |

Returns: Boolean.

- Property addToMotionGraphicsTemplate() method

```
app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplate(comp)
```

Places the property into the Essential Graphics panel for the named composition. The return is true on a successful add and false otherwise. When the add fails, it's either because the property's type isn't supported or because the property is already part of that composition. A warning dialog will come up from After Effects. Run the canAddToMotionGraphicsTemplate() method first to confirm a property is eligible for a Motion Graphics template.

Parameters:

comp

A compItem — the composition you're checking the property against for the add.

| --- | --- |

Returns: Boolean.

- CompItem motionGraphicsTemplateName attribute

```
app.project.item(index).motionGraphicsTemplateName
```

Gets or sets the name field shown in the composition's Essential Graphics panel. Whatever name appears there becomes the file name when a Motion Graphics template is exported — say, My Template.mogrt. In the sample below, the active composition's name is set and then echoed back through an alert:

```
app.project.activeItem.motionGraphicsTemplateName = "My Template";
alert(app.project.activeItem.motionGraphicsTemplateName);
```

Type: String; read/write.

- CompItem exportAsMotionGraphicsTemplate() method

```
app.project.item(index).exportAsMotionGraphicsTemplate(doOverWriteFileIfExisting, file_path)
```

Writes the composition out as a Motion Graphics template. The return is true once the template exports successfully and false otherwise. The file name of the template draws on the name held in the Essential Graphics panel — for instance, My Template.mogrt; set that name with the motionGraphicsTemplateName attribute. You may optionally hand it the path of the folder where the template should land. Leave the path off and the file drops into the current user's Essential Graphics folder:

- macOS: /Users//Library/Application Support/Adobe/Common/Essential Graphics/
- Windows: C:\Users\\AppData\Roaming\Adobe\Common\Essential Graphics\

Should the project carry unsaved edits since its last save, After Effects asks the user to save it first. Heading that off is a matter of calling the project save() method ahead of the template export.

Parameters:

doOverWriteFileIfExisting

Whether to overwrite an exsiting file of the same name, boolean. Required.

file_path

Path to the folder where the file will be saved. Optional.

| --- | --- |

Returns: Boolean.

- CompItem openInEssentialGraphics() method

```
app.project.item(index).openInEssentialGraphics()
```

### Where to find additional useful scripts

Head to the Adobe Add-ons website to turn up scripts, projects, and other handy resources.

Example scripts, along with useful pointers on scripting — plus expressions and animation presets — can be found at the AE Enhancers website.

## See also

- [Application](script-application.md)
