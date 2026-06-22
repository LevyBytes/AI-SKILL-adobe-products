# Edit Expressions, Troubleshooting Expressions, Using Expressions Editor

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Editing expressions; Expression errors; Using the Expressions editor.

## Editing expressions

Search Last updated on May 7, 2026

### In Adobe After Effects, tweaking and polishing expressions is how you reshape animation behavior, run down problems, and gain tighter command over dynamic properties.

### Add or remove an expression from a property

An expression is fair game on any property that accepts keyframes.

Pick the property in the Timeline panel, then take either of these routes to add an expression and bring it into view:

- Select Animation > Add Expression. To remove, select Animation > Remove Expression.
- Alt+click (Windows) or Option+click (macOS) on the stopwatch button beside the property name, whether in the Timeline panel or the Effect Controls panel; do the same again to take the expression back off.

Switching on the expression places four icons beneath the property and recolors the value red.

### Link a set of properties

For linking in After Effects, the pick whip is the tool you drag and drop. Press and hold the spiral icon beside the expression to drop into selection mode. As you drag toward another property, a whip trails from your cursor, and letting go over a property targets whatever sits beneath it, with the expression syntax written for you.

Property links are the route for tying a group of properties together across layers and compositions:

Pick a single property or a group of them and run Edit > Copy With Property Links or Edit > Copy With Relative Property Links.

Now paste those properties onto whatever layer you like within a composition. Once pasted, they stay wired to the layer they were copied from, so whatever changes on the source property carries through to every pasted property-link instance.

(or)

A whole layer can likewise be copied with property links and pasted, yielding duplicates that track every change on the original.

Here is what comes out when a layer's Position property is copied using the Copy With Relative Property Links command:

```
thisComp.layer("control_layer").transform.position
```

And here is what comes out when that same Position property is copied using the Copy With Property Links command:

```
comp("source_comp").layer("control_layer").transform.position
```

### Disable expressions

Flip the Enable Expression switch to put an expression on hold for a while. While it sits disabled, a slash crosses the switch.

### Edit an expression with the pick whip

When JavaScript or After Effects expressions still feel uncertain to you, lean on the pick whip tool as a starting point. It gives you a simple way to wire together the properties an expression refers to.

First confirm the property already carries an expression — for instance, Alt+Click (Windows) or Opt+Click (macOS) the stopwatch icon at the left of the Scale property to apply one.

Head to the Timeline panel and click inside the text field to bring up the Expression Editor, then position the cursor at the spot you mean to edit.

Whatever you enter lands in the expression field right at the insertion point.

- Where text sits selected in the expression field, your fresh expression text takes the place of that selection.
- Where the insertion point lies outside the expression field, your fresh expression text overwrites everything in the field.

The pick whip can be dragged onto either a property's name or its value. Drag it to the name and the resulting expression rolls every value into one. Drag it to the Position property's name, say, and you get an expression along these lines:

```
  thisComp.layer("Layer 1").transform.position
```

Drag the pick whip onto a single component of the Position property instead — the y value, for example — and an expression like the one below appears, with the property's x and y coordinates both bound to that y value:

```
  temp = thisComp.layer("Layer 1").transform.position[1];
  [temp, temp]
```

Note

Build a pick-whip expression that points at a layer while another layer in the same composition shares that name, and the targeted layer gets renamed. Its fresh name is the former one with a digit appended. That step keeps the expression pointing at exactly one layer in the composition with no ambiguity.

### Format of expressions created by the pick whip

Pick-whip expression formatting follows whatever you set for the "Expression pick whip writes compact English" preference.

- Edit > Preferences > General (Windows)
- After Effetcs > Settings > Scripting & Expressions (macOS)

Expressions from the pick whip borrow the property names exactly as the Timeline panel shows them. Since those names are built in, they hold up even when After Effects runs in a different language. Property names you can edit sit inside double quotation marks and stay identical from one language to the next. Turn this option off when the project won't be shared across languages.

A compact English sample looks like this:

```
  thisComp.layer("Layer 1").transform.position
```

The very same expression, with compact English turned off, looks like this:

```
  thisComp.layer("Layer 1")("Transform")("Position")
```

Note

Since compact English is on by default, it's what nearly every example and illustration in this document uses.

### Edit an expression manually

Click inside the expression field to drop into text-editing mode, at which point the whole expression highlights. Click somewhere within the expression to set the insertion point if you mean to extend it; skip that and you'll overwrite the entire thing.

Type and revise text in the expression field, drawing on the Expression Language menu if you wish. When a multiline expression runs long, drag its bottom or top edge to make the field bigger.

- Press Enter on the numeric keypad.
- Click outside the expression field.

### Showing expressions in the Timeline panel

- Reveal expressions with errors:

Limiting the view to just the properties whose expressions have errors lets you spot and repair them fast. Here's how:

1. Pick whichever layer(s) hold the errors you mean to inspect, then right-click to bring up the flyout menu.
2. Select Reveal > Reveal Expression Errors.

- Show only properties with expressions:

Select one or more layers and tap EE to narrow the display to properties that carry expressions.

- Timeline search:

The Timeline panel's search field hunts through expressions along with the other parts of a property. When your search string turns up inside an expression, that property — together with the property groups and layers holding it — lands in the results.

Note

Drag the top edge of the expression field up or down to resize it.

### Expressions in the Graph Editor

Under Graph Editor mode, that lone expression field shows up as a resizable box along the bottom of the Graph Editor, displaying nothing but the expression for whichever property is selected. Getting several expression fields on screen at once requires the Timeline panel to be in layer bar mode.

Press Shift+F3 to flip between layer bar mode and Graph Editor mode; the Graph Editor button up at the top of the Timeline panel does the same job.

Bring up the expression field within the Graph Editor by picking Show Expression Editor from the Choose graph type and options menu down at the bottom of the Graph Editor. Adding an expression to a property brings the expression editor into view as well.

To watch how an expression reshapes the value or velocity graph, turn on the Show Post-Expression Graph button while that value or velocity graph is up in the Graph Editor.

### Read the graph editor

Before the expression takes effect, the value or velocity shows up as the dimly colored graph; after it takes effect, the brightly colored graph shows it. Switch on the graph overlay for the Position property and the motion path in the Composition panel shifts to reveal the path as the expression has shaped it.

### Add comments to an expression

Whenever an expression gets complicated, drop in comments spelling out what it accomplishes and how its parts fit together.

Comment your code with either of these forms:

- Open the comment with //. Everything from // up to where the line stops gets skipped over. For example: //This is a comment.
- Open the comment with /_ and close it with _/. Whatever falls between /_ and _/ gets skipped over. For example: /_This is a multiline comment._/

### Save and reuse expressions

With an expression written, you can stash it for later by copying and pasting into a text editor, or hold onto it inside an animation preset or template project. Still, since expressions reference other layers in a project and sometimes name particular layers, moving one between projects can call for a few edits.

Ordinary JavaScript function syntax lets you declare your own functions inside expressions. Here, a function works out the average of two values, and that function gets called on the closing line:

```
  function average(a, b)
  {
    return (a + b) / 2;
  }
  average(position, thisComp.layer(1).position);
```

Note

Each function has to be defined in full inside every expression that calls it. No shared, global function library exists for you to draw on.

Planning to carry an expression into a different project? Then it's worth commenting it. Lean on variables as well, so a value can be changed in a single spot instead of in several.

This one, for instance, opens with a multiline comment describing what the expression does, plus a brief comment trailing a declared-and-initialized variable that says what the variable does:

```
  /*  This expression on a Source Text property reports the name
      of a layer and the value of its Opacity property. */

  var myLayerIndex = 1; // layer to inspect, initialized to 1, for top layer

  thisComp.layer(myLayerIndex).name + ": \rOpacity = " +   thisComp.layer(myLayerIndex).opacity.value
```

An animation preset carrying an expression can be saved and reused elsewhere, so long as the expression doesn't lean on properties missing from those other projects. Save a preset where a property holds an expression but no keyframes, and only the expression goes in. Where the property has one or more keyframes, the stored preset keeps the expression plus every keyframe value.

### Save an expression as a preset

An expression can be banked as a preset for reuse in other projects this way:

Over in the TImeline, choose the property the expression sits on — say the expression is on a layer's Rotation property, so select that. Then go to Animation > Save Animation Preset.

Give the preset a new name — "Time40", for instance — and save it. It defaults to the User Presets folder as an Adobe After Effects Preset file.

When it's time to use the preset, twirl open Animation Presets beneath the Effects & Controls menu. Two folders sit there, Presets and User Presets; twirl open User Presets, which holds every preset you've made inside After Effects. Drop the "Time40" preset onto whichever layer you're working on and the expression takes hold!

### Copy an expression from a layer property

An expression can be lifted off a layer property either with that property's keyframes or without them.

- Want both the expression and its keyframes carried across to other properties? In the Timeline panel pick the source layer property, copy that layer property, mark the target layer properties, and paste.
- Want the expression alone moved across, keyframes left behind? Pick the source property, run Edit > Copy Expression Only, mark the target properties, and paste.

Tip

Leaving the keyframes out comes in handy when you need to copy several expressions at once and drop them onto one or more fresh layers, or when you want a single expression pasted onto more than one layer.

Note

Just as with pasting keyframes and other items, you can frequently paste into the target layer and let After Effects work out which property the paste should land on. Copying Position properties from layer to layer, for example, works that way. But the target property has to be selected by hand when you're pasting an expression from a Position property into a Scale property.

### More Expression resources

With a few of the ideas behind expressions now under your belt, drop by the community for hands-on examples and to put your own work out there.

Worth a look too is Dan Ebberts' first-rate set of example expressions and tutorials over on his MotionScript website.

## Expression errors

Search Last updated on May 5, 2026

### Get to grips with spotting, debugging, and clearing the usual expression errors in Adobe After Effects, keeping your animations evaluating right and running the way they should.

Should an expression fail to evaluate, a warning banner carrying the expression errors surfaces along the bottom of the Composition and Layer panels. Rather than switch the expression off, After Effects keeps right on evaluating it. That warning banner stays up the whole time the expression won't evaluate — in other words, until somebody fixes it or turns it off by hand.

### The expression error UI

Below is a sample of how the expression-error warning banner is rendered:

An example expression error

A. Left or Right arrow buttons B. The Reveal Expression C. The Expand/Collapse Warning

An example expression error

- When several expressions fail at once, the Left or Right arrow buttons step you to the previous or next failing expression.
- Clicking the Reveal Expression button (the magnifying glass) surfaces, in the Timeline panel, the property whose expression broke. Should that expression live in another composition, that composition is opened for you.
- Toggling the Expand/Collapse Warning button (the up/down arrows) reveals or conceals the error text.

Only a single line of error text is shown, and it gets trimmed to match the Composition panel's width.

### To see the full expression error text

Click the control beside the expression, and a dialog box opens containing the entire error.

Expression error dialog box

Expression error dialog box

### To hide the warning banner

On macOS pick After Effects > Settings > Scripting & Expressions, or on Windows pick Edit > Preferences > General, then turn off Show Warning Banner When Project Contains Expressions Errors.

Turning this off keeps the banner suppressed even as fresh expression errors arise.

Switch the option back on whenever you want expression errors surfaced again.

### Reveal expression errors

When an expression can't be evaluated, After Effects pops up a message describing what went wrong and switches the expression off on its own. A yellow caution icon then sits beside the expression; click it to bring the message back up.

Highlight one or more layers to surface their faulty expressions. With a layer selected in the Timeline panel, right-click on Windows or Control-click on macOS, and pick Reveal Expression Errors from the context menu.

Certain expressions depend on the names you've given layers or properties in the project. Rename a layer or property tied to an expression and After Effects will try to patch the expression with the fresh name. There are, though, intricate situations where that automatic fix-up fails — leaving the expression to throw an error that you'll need to correct by hand.

Note

Running After Effects under another language, or having renamed items such as layers, effects, or other property groups, may stop the expression from functioning. Bring the expression back to life by rewriting it with the new names, or with strings matching whatever language After Effects is running in.

Everything demonstrated here assumes the default setup of After Effects in English. Without the kind of adjustment noted above, a few of these samples won't run.

### Errors caused by precomposing layers

When you precompose several layers together, any expression pointing at a property on one of those layers can break. The fix is to rewrite such expressions so they target the layer inside its new composition. Watch out especially for expressions written with thisComp rather than naming a composition outright.

Note

Several After Effects effects now take different arguments than older releases did. Where your existing expressions reference arguments by index number rather than by name, rewrite them to reference the arguments by name.

## Using the Expressions editor

Search Last updated on Jun 5, 2024

Tailor your expressions through the assorted controls offered in the expression editor.

The expression editor's code-editing surface is configurable: pick your own colors for JavaScript syntax highlighting, switch on line numbers, fold code, and use auto-complete. Reach these settings by choosing After Effects > Settings > Scripting & Expressions.

Scripting & Expressions pane in the Preferences dialog box.

Scripting & Expressions pane in the Preferences dialog box.

### Expression editor code interface

Customize syntax highlighting of JavaScript syntax and After Effects methods and properties

Customize syntax highlighting

Customize syntax highlighting

- Distinct colors can be mapped to each syntax category, to the background, and to the text selection, and you can also dial in the alpha (opacity) of that selection. Hit the dropper icon to lift a color off the color wheel.
- The editor's appearance can also follow whichever theme you prefer. Open the Theme drop-down list, choose a theme, and optionally store your own custom themes.

Edit preferences

Edit preferences

Edit preferences You decide how both the expression snippets and the text editor present themselves on screen. These preferences let you change font size, tweak syntax highlighting, alter indentation, and more.

Code Preview box

Code Preview box

Code Preview box

This preview pane lets you see every change to syntax colors and the other editor settings rendered live.

Tip

Reach for throw when you want to debug expressions inline. It's handy for surfacing the code error right inside the expression editor field, saving time and keeping debugging efficient.

Throw to debug expressions inline

Throw to debug expressions inline

### Example 1: Display error in your code snippet

Open a comp in After Effects that already contains expression snippets.

Inside the Timeline panel, pick a layer and Alt+Click to bring its expression up in the Expression Editor field.

2. Expression Editor field
   Click the editor field to switch into edit mode.

3. Clicking within the editor turns editing on in the Expression Editor
   For this walkthrough, find MILE on the first line and retype it as mile in lowercase. Doing so breaks the code, and After Effects surfaces an error message right inside the snippet.

After Effects additionally puts up an error banner that tells you which line number the error sits on.

4. Error banner

### Example 2: Auto-suggestions based on the commonly used components

Within that same expression, switch the layer name back from mile to MILE.

While you type, After Effects opens a drop-down list of suggestions drawn from the layer names found in the project.

2. Layer name auto-suggestions

The autoComplete gathers composition names, layer names, footage names, and effect names alike, presenting each in its proper context alongside the matching comp(), layer(), footage(), and effect() methods. That lets your expression stay live as you reference project items — no need to scroll through the timeline or pop open other panels to point at properties or items with the pick whip.
