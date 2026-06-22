# Tracingobject, Tracingoptions, Variable, Variables ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: TracingObject; TracingOptions; Variable; Variables; View; Views; Words.

## TracingObject

TracingObject

### Description

TracingObject links a source raster art item to the vector-art plug-in group produced by tracing. Scripts start tracing through PlacedItem.trace or RasterItem.trace().

The generated PluginItem object stands for that vector art group and exposes this object through its tracing property.

Because tracing runs asynchronously, a script can force the operation by invoking Application.redraw(). After creating the tracing object, call redraw before reading its properties or expanding the trace into an art item group.

Read-only properties that report tracing results become meaningful only after the first tracing operation finishes. A returned value of 0 means the operation is still incomplete.

## TracingOptions

image.tracing.tracingOptions

### Description

Option set used when tracing converts raster art into vector art.

## Variable

app.activeDocument.variables[index]

### Description

Document-level variable available for import or export.

A variable is a dynamic object for building data-driven graphics.

For an example, see Dataset.

In Illustrator, variables are available through the Variables palette.

## Variables

app.activeDocument.variables

### Description

Document collection containing Variable objects.

For an example of variable creation, see Using variables and datasets.

## View

app.activeDocument.views[index]

### Description

Document view object in an Illustrator document, representing a window onto that document.

Scripts cannot create new views, but they can change selected properties on existing views, such as the center point, screen mode, and zoom.

## Views

app.activeDocument.views

### Description

Collection object containing View entries in a document.

## Words

app.activeDocument.textFrames[index].words

### Description

In a text item, this collection exposes each word as a TextRange object.

Collection members have no names, so retrieve them with numeric indexes.
