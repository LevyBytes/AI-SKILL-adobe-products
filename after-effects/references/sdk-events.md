# Events, Pf Eventextra, Pf Context, Pf Effectwindowinfo ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Events; `PF_E`ventExtra; `PF_C`ontext; `PF_E`ffectWindowInfo; `PF_E`ventUnion; Click; Draw; Keydown; AdjustCursor; Purpose; Arbitrary Parameters Event; Custom UI & Drawbot; Make Your Custom UI Look Not So "Custom"; Redrawing; HiDPI and Retina Display Support; `PF_E`ffectCustomUISuite; Drawbot_DrawbotSuite; Drawbot_SupplierSuite.

## Events

### Effect UI & Events — Events

Event

Indicates

`PF_E`vent\_`NEW_CONTEXT`

A fresh context for events was created by the user (likely by opening a window). Inside that context the plug-in may keep state via the context handle. Treat only the context and type within `PF_E`ventUnion as valid; disregard everything else.

`PF_E`vent_ACTIVATE

A new context was activated by the user (likely by pulling a window to the front). `PF_E`ventUnion holds nothing.

`PF_E`vent\_`DO_CLICK`

Within the effect's UI, the user clicked. A `PF_D`oClickEventInfo sits in `PF_E`ventUnion. Field the mouse click and reply, passing drag info along (consult the sample code), inside a context.

Note

Starting with 7.0, don't sit blocked waiting for mouse-up; lean on `PF_E`vent_DRAG instead.

`PF_E`vent_DRAG

This is a Click Event too, with a `PF_D`oClickEventInfo in `PF_E`ventUnion. Ask for it by returning send*drag == TRUE out of `PF_E`vent*`DO_CLICK`. Doing so lets After Effects pick up fresh data from whatever the user changed.

`PF_E`vent_DRAW

Draw! A `PF_D`rawEventInfo is held in `PF_E`ventUnion.

`PF_E`vent_DEACTIVATE

A context was deactivated by the user (likely by moving a different window to the front). `PF_E`ventUnion holds nothing.

`PF_E`vent\_`CLOSE_CONTEXT`

The user closed a context. `PF_E`ventUnion will hold nothing.

`PF_E`vent_IDLE

A context sits open while nothing happens. `PF_E`ventUnion holds nothing.

`PF_E`vent\_`ADJUST_CURSOR`

The plug-in's UI has the mouse over it. Pick the cursor by adjusting the `PF_C`ursorType within the `PF_A`djustCursorEventInfo. For a custom cursor, make OS-specific calls and let After Effects know by setting `PF_C`ursorType to `PF_C`ursor_CUSTOM. Lean on an After Effects cursor when you can, to keep the interface consistent.

`PF_E`vent_KEYDOWN

Keystroke. A `PF_K`eyDownEvent is held in `PF_E`ventUnion.

`PF_E`vent\_`MOUSE_EXITED`

New in CS6. A heads-up that the mouse has left a particular view (layer or comp only).

| --- | --- |

## `PF_E`ventExtra

Context details about the running event live in this structure. A pointer to it is what After Effects supplies in the Entry Point function's extra parameter.

Carried inside the `PF_E`ventExtra, the `PF_E`ventUnion shifts according to event type and holds whatever is specific to that event.

Member

Purpose

contextH

Handle to the `PF_C`ontext. Both the Drawbot suites (for drawing) and the UI Callbacks make use of this drawing context.

e_type

The event that's taking place.

u

A `PF_E`ventUnion holding the event-specific information.

effect_win

A `PF_E`ffectWindowInfo about the event when it lands in the effects window. Otherwise — as of After Effects 5.0 — a `PF_W`indowUnion can stand in for effect_win. That struct bundles a `PF_E`ffectWindowInfo together with a `PF_I`temWindowInfo, the latter being (at the moment) nothing more than the item window's port rectangle. This swap kicks in only when `PF_USE_NEW_WINDOW_UNION` was defined at compile time; absent that, it stays a plain `PF_E`ffectWindowInfo.

cbs

Pointer to UI Callbacks, which you need for converting points across the layer, composition, and screen coordinate systems.

evt_in_flags

Event Input Flags. At present this holds a single value, `PF_EI_DONT_DRAW` — check it before you draw!

evt_out_flags

Any combination of the following, OR'd together bitwise: - `PF_EO_NONE` - `PF_EO_HANDLED_EVENT` lets After Effects know the event is handled. - `PF_EO_ALWAYS_UPDATE` makes After Effects re-render the composite on every click or drag, mirroring what 'alt-scrubbing' a parameter value does. - `PF_EO_NEVER_UPDATE` holds off After Effects from re-rendering the composite until clicking and dragging stop. - `PF_EO_UPDATE_NOW` has After Effects refresh the view the moment the event returns, following a `PF_I`nvalidateRect call

| --- | --- |

## `PF_C`ontext

### `PF_E`ventExtra — `PF_C`ontext

The event's UI context is spelled out by `PF_C`ontext.

Member

Purpose

magic

Do not change.

w_type

The window type. Should one plug-in carry both a Custom Comp UI and an ECW UI, this field is your means of distinguishing the two (and honestly, who subjects themselves to that?). - `PF_W`indow_COMP, - `PF_W`indow_LAYER, - `PF_W`indow_EFFECT

reserved_flt

Do not change.

plugin_state[4]

A four-element array of A_longs the plug-in can lean on to stash state information for a given context.

reserved_drawref

A `DRAWBOT_D`rawRef meant for the Drawbot suites.

\*reserved_paneP

Do not change.

| --- | --- |

## `PF_E`ffectWindowInfo

### `PF_E`ventExtra — `PF_E`ffectWindowInfo

Should an event land in the ECP, a `PF_E`ffectWindowInfo travels along in `PF_E`ventExtra.

Member

Purpose

index

Tells you which parameter in the effect window is in play. Numbering of the controls runs from 0 up to one less than the control count.

area

Tells you whether what's affected is the control title (`PF_EA_PARAM_TITLE`) or the control proper (`PF_EA_CONTROL`). The title is the portion that remains in view once the parameter's topic (the "twirly") is spun up.

current_frame

A `PF_R`ect giving the full frame of the region the control occupies.

param_title_frame

A `PF_R`ect giving the control's title region.

horiz_offset

A horizontal offset, measured from the title area's left edge, at which to draw into the title.

| --- | --- |

## `PF_E`ventUnion

Four structures, listed below, are unioned together to form the `PF_E`ventUnion within `PF_E`ventExtra.

## Click

### `PF_E`ventUnion — Click

A mouse click or drag happened inside the custom UI's region.

### `PF_D`oClickEventInfo

Member

Purpose

when

The moment (OS-level) the click happened.

screen_point

The click's location in screen coordinates. With Custom Comp UI, the UI Callbacks let you turn these into composition coordinates. The CCU sample project shows how.

num_clicks

How many clicks happened.

modifiers

Whichever modifier keys, if any, were down at click time.

continue_refcon[4]

A four-element array of A_intptr_t the plug-in can use to hold information through a click-drag-drag sequence.

send_drag

Flip this flag to TRUE to signal that dragging continues. That turns the following click event, in effect, into a drag event.

last_time

Gets set once the drag event finishes (the user let go of the mouse button).

| --- | --- |

## Draw

### `PF_E`ventUnion — Draw

Your custom UI has to be refreshed by After Effects.

Note: while servicing draw requests, rely on the image dimensions handed to you in `PF_I`nData (instead of your input layer's dimensions, which is what you'd use within `PF_C`md_RENDER).

### `PF_D`rawEventInfo

Member

Purpose

update_rect

The rectangle to draw within, expressed in the context window's coordinate system. The UI Callbacks can translate these coordinates into other coordinate systems. The CCU sample project shows how.

depth

Pixel depth of the drawing context.

| --- | --- |

## Keydown

### `PF_E`ventUnion — Keydown

A key was pressed by the user while the effect's UI is active.

To read and work with the key codes you receive, rely on the macros in `AE_E`ffectUI.h.

For keydown events to arrive in Premiere Pro, a plug-in has to set `PF_C`ustomEFlag*COMP in `PF_C`ustomUIInfo.events during `PF_C`md*`PARAM_SETUP`.

### `PF_K`eyDownEvent

Member

Purpose

when

Time at which the click occurred.

screen_point

The mouse pointer's screen coordinate at the instant the key went down. With Custom Comp UI, the UI Callbacks let you turn these into composition coordinates. The CCU sample project shows how.

key_code

Either a character code (for printable characters we take the unshifted upper-case form; A not a, 7 not &), or a control code: - `PF_C`ontrolCode_Unknown - `PF_C`ontrolCode_Space - `PF_C`ontrolCode_Backspace - `PF_C`ontrolCode_Tab - `PF_C`ontrolCode_Return - `PF_C`ontrolCode_Enter - `PF_C`ontrolCode_Escape - `PF_C`ontrolCode_F1 - ... - `PF_C`ontrolCode_F24 - `PF_C`ontrolCode_PrintScreen - `PF_C`ontrolCode_ScrollLock - `PF_C`ontrolCode_Pause - `PF_C`ontrolCode_Insert - `PF_C`ontrolCode_Delete - `PF_C`ontrolCode_Home - `PF_C`ontrolCode_End - `PF_C`ontrolCode_PageUp - `PF_C`ontrolCode_PageDown - `PF_C`ontrolCode_Help - `PF_C`ontrolCode_Clear - `PF_C`ontrolCode_Left - `PF_C`ontrolCode_Right - `PF_C`ontrolCode_Up - `PF_C`ontrolCode_Down - `PF_C`ontrolCode_NumLock - `PF_C`ontrolCode_Command - `PF_C`ontrolCode_Option - `PF_C`ontrolCode_Alt = `PF_C`ontrolCode_Option - `PF_C`ontrolCode_Control - `PF_C`ontrolCode_Shift - `PF_C`ontrolCode_CapsLock - `PF_C`ontrolCode_ContextMenu

modifiers

Whichever modifier keys, if any, were down as the key was pressed. - `PF_M`od*NONE - `PF_M`od*`CMD_CTRL_KEY` (cmd on Mac, ctrl on Windows) - `PF_M`od*`SHIFT_KEY` - `PF_M`od*`CAPS_LOCK_KEY` - `PF_M`od*`OPT_ALT_KEY` (option on Mac, alt on Windows) - `PF_M`od*`MAC_CONTROL_KEY`

| --- | --- |

## AdjustCursor

### `PF_E`ventUnion — AdjustCursor

Onto the effect's custom UI (though not back off of it) the cursor has moved, giving the effect a chance to swap the cursor.

### `PF_A`djustCursorEventInfo

## Purpose

### `PF_E`ventUnion — Purpose

The mouse pointer's screen coordinate. With Custom Comp UI, the UI Callbacks let you turn these into composition coordinates. The CCU sample project shows how.

modifiers

Whichever modifier keys, if any, were held as the message went out.

set_cursor

Set this to the cursor you want, or to `PF_C`ursor_CUSTOM when you've already set the cursor yourself with OS-specific calls. `AE_E`ffectUI.h lists every built-in cursor. To leave the cursor alone, set this to `PF_C`ursor_NONE or just disregard the message.

| --- | --- |

## Arbitrary Parameters Event

### `PF_E`ventUnion — Arbitrary Parameters Event

After Effects is asking your plug-in to handle its arbitrary data parameter(s).

Arbitrary data types aren't a hard prerequisite for custom UI support; even so, the EventInfo model is the pattern `PF_A`rbParamsExtra adheres to.

### `PF_A`rbParamsExtra

```
u {
  new_func_params
  dispose_func_params
  copy_func_params
  flat_size_func_params
  flatten_func_params
  unflatten_func_params
  interp_func_params
  compare_func_params
  print_size_func_params
  print_func_params
  scan_func_params
}
```

| Member | Purpose |
| --- | --- |
| which_function | A `PF_F`unctionSelector indicating which function is called |
| id | Used by After Effects; will match the ID assigned to the arbitrary data type during `PF_C`md\_`PARAM_SETUP`. |
| padding | Used for byte-alignment |
|  | (One of these will be passed; see Arbitrary Data Parameters) |

## Custom UI & Drawbot

A composited drawing model built on Drawbot is what Custom UI relies on. What the Drawbot suites are good for:

1. Basic 2D path drawing: Lines, Rect, Arc, Bezier
2. Stroking/Filling/Shading paths
3. Image drawing: Compositing an ARGB/BGRA buffer onto the surface
4. Pushing/popping surface state
5. Text drawing, if supplier supports it (clients should first check if text drawing is supported before actual drawing)

Only during `PF_E`vent*DRAW is drawing permitted (and never during `PF_E`vent_DRAG or `PF_E`vent*`DO_CLICK`).

Getting started with Drawbot means first obtaining the drawing reference: hand `PF_C`ontext to a fresh suite call, `PF_G`etDrawingReference.

When the drawing reference that comes back isn't NULL, use it to pull the supplier and surface references off `DRAWBOT_D`rawbotSuite.

The Drawbot suites include `DRAWBOT_D`rawbotSuite, `DRAWBOT_S`upplierSuite, `DRAWBOT_S`urfaceSuite, `DRAWBOT_P`athSuite.

## Make Your Custom UI Look Not So "Custom"

### Custom UI & Drawbot — Make Your Custom UI Look Not So "Custom"

Reach for the new `PF_E`ffectCustomUIOverlayThemeSuite so your UI mirrors the host application's. Your users will thank you.

## Redrawing

### Custom UI & Drawbot — Redrawing

When you want one specific region of a pane redrawn, here's what we suggest:

1. Call `PF_I`nvalidateRect (from `PF_A`ppSuite) from the effect. This triggers a lazy display redraw that takes effect at the next free idle moment. The rect uses coordinates tied to the pane it belongs to. Pass a NULL rect to refresh the whole pane.
2. Set the event outflag to `PF_EO_UPDATE_NOW`, so that an immediate draw event fires for the named pane the moment the current event returns.

When an effect has to refresh more than one window at once, it should set `PF_O`utFlag\_`REFRESH_UI` (from `PF_O`utFlags), triggering a redraw across the entire ECW, comp, and layer windows.

## HiDPI and Retina Display Support

### Custom UI & Drawbot — HiDPI and Retina Display Support

For HiDPI and Retina Display support, work with offscreen images at double the size, then call the Transform function from Drawbot_SurfaceSuite to shrink the image by half right before you draw it.

## `PF_E`ffectCustomUISuite

### Custom UI & Drawbot — `PF_E`ffectCustomUISuite

Lets an effect obtain the drawing reference. Before anything else with Drawbot can happen, this call must be made first.

### `PF_E`ffectCustomUISuite1

Function

Purpose

`PF_G`etDrawingReference

```

Get the drawing reference.

 PF_GetDrawingReference(
  const PF_ContextH  effect_contextH,
  DRAWBOT_DrawRef    *referenceP0);
```

| --- | --- |

## Drawbot_DrawbotSuite

### Custom UI & Drawbot — Drawbot_DrawbotSuite

Starting from the Drawbot reference, fetch both the supplier and the surface references.

### Drawbot_DrawbotSuite1

Function

Purpose

GetSupplier

```

Get the supplier reference.

Needed to use Drawbot_SupplierSuite.

 GetSupplier(
  DRAWBOT_DrawRef      in_drawbot_ref,
  DRAWBOT_SupplierRef  *out_supplierP);
```

GetSurface

```

Get the surface reference.

Needed to use Drawbot_SurfaceSuite.

 GetSurface(
  DRAWBOT_DrawRef     in_drawbot_ref,
  DRAWBOT_SurfaceRef  *out_surfaceP);
```

| --- | --- |

## Drawbot_SupplierSuite

### Custom UI & Drawbot — Drawbot_SupplierSuite

Routines here let you build and dispose of drawing tools, read back default settings, and ask what the drawing layer can do.

### Drawbot_SupplierSuite1

Function

Purpose

NewPen

```

Create a new pen. Release this using ReleaseObject from Drawbot_SupplierSuite.

 NewPen(
  DRAWBOT_SupplierRef      in_supplier_ref,
  const DRAWBOT_ColorRGBA  *in_colorP,
  float                    in_size,
  DRAWBOT_PenRef           *out_penP);
```

NewBrush

```

Create a new brush. Release this using ReleaseObject from Drawbot_SupplierSuite.

 NewBrush(
  DRAWBOT_SupplierRef      in_supplier_ref,
  const DRAWBOT_ColorRGBA  *in_colorP,
  DRAWBOT_BrushRef         *out_brushP);
```

SupportsText

```

Check if current supplier supports text.

 SupportsText(
  DRAWBOT_SupplierRef  in_supplier_ref,
  DRAWBOT_Boolean      *out_supports_textB);
```

GetDefaultFontSize

```

Get the default font size.

 GetDefaultFontSize(
  DRAWBOT_SupplierRef  in_supplier_ref,
  float                *out_font_sizeF);
```

NewDefaultFont

```

Create a new font with default settings.

You can pass the default font size from GetDefaultFontSize.

Release this using ReleaseObject from Drawbot_SupplierSuite.

 NewDefaultFont(
  DRAWBOT_SupplierRef  in_supplier_ref,
  float                in_font_sizeF,
  DRAWBOT_FontRef      *out_fontP);
```

NewImageFromBuffer

```

Create a new image from buffer passed to in_dataP.

Release this using ReleaseObject from Drawbot_SupplierSuite.

 NewImageFromBuffer(
  DRAWBOT_SupplierRef  in_supplier_ref,
  int                  in_width,
  int                  in_height,
  int                  in_row_bytes,
  DRAWBOT_PixelLayout  in_pl,
  const void           *in_dataP,
  DRAWBOT_ImageRef     *out_imageP);
```

`DRAWBOT_P`ixelLayout can be one of the following: - k`DRAWBOT_P`ixelLayout_24RGB - k`DRAWBOT_P`ixelLayout_24BGR - k`DRAWBOT_P`ixelLayout_32RGB - ARGB (A is ignored) - k`DRAWBOT_P`ixelLayout_32BGR - BGRA (A is ignored) - k`DRAWBOT_P`ixelLayout_32`ARGB_S`traight - k`DRAWBOT_P`ixelLayout_32`ARGB_P`remul - k`DRAWBOT_P`ixelLayout_32`BGRA_S`traight - k`DRAWBOT_P`ixelLayout_32`BGRA_P`remul

NewPath

```

Create a new path. Release this using ReleaseObject from Drawbot_SupplierSuite.

 NewPath(
  DRAWBOT_SupplierRef  in_supplier_ref,
  DRAWBOT_PathRef      *out_pathP);
```

SupportsPixelLayoutBGRA

```

A given Drawbot implementation can support multiple channel orders, but will likely prefer one over the other.

Use the following four callbacks to get the preferred channel order for any API that takes a DRAWBOT_PixelLayout (e.g. NewImageFromBuffer).

 SupportsPixelLayoutBGRA(
  DRAWBOT_SupplierRef  in_supplier_ref,
  DRAWBOT_Boolean      *out_supports_bgraPB);
```

PrefersPixelLayoutBGRA

```

PrefersPixelLayoutBGRA(
  DRAWBOT_SupplierRef  in_supplier_ref,
  DRAWBOT_Boolean      *out_prefers_bgraPB);
```

SupportsPixelLayoutARGB

```

SupportsPixelLayoutARGB(
  DRAWBOT_SupplierRef  in_supplier_ref,
  DRAWBOT_Boolean      *out_supports_argbPB);
```

PrefersPixelLayoutARGB

```

PrefersPixelLayoutARGB(
  DRAWBOT_SupplierRef  in_supplier_ref,
  DRAWBOT_Boolean      *out_prefers_argbPB);
```

RetainObject

```

Retain (increase reference count on) any object (pen, brush, path, etc). For example, it should be used when any object is copied and the copied object should be retained.

 RetainObject(
  DRAWBOT_ObjectRef  in_obj_ref);
```

ReleaseObject

```

Release (decrease reference count on) any object (pen, brush, path, etc). This function MUST be called for any object created using NewXYZ() from this suite.

Do not call this function on a DRAWBOT_SupplierRef and DRAWBOT_SupplierRef, since these are not created by the plug-in.

 ReleaseObject(
  DRAWBOT_ObjectRef  in_obj_ref);
```

| --- | --- |

## Drawbot_SurfaceSuite

### Custom UI & Drawbot — Drawbot_SurfaceSuite

The functions below paint onto the surface and also read or change the active drawing settings.

### Drawbot_SurfaceSuite1

Function

Purpose

PushStateStack

```

Push the current surface state onto the stack. It should be popped to retrieve old state.

It is required to restore state if you are going to clip or transform a surface or change the interpolation or anti-aliasing policy.

 PushStateStack(
  DRAWBOT_SurfaceRef  in_surface_ref);
```

PopStateStack

```

Pop the last pushed surface state off the stack.

 PopStateStack(
  DRAWBOT_SurfaceRef  in_surface_ref);
```

PaintRect

```

Paint a rectangle with a color on the surface.

 PaintRect(
  DRAWBOT_SurfaceRef       in_surface_ref,
  const DRAWBOT_ColorRGBA  *in_colorP,
  const DRAWBOT_RectF32    *in_rectPR);
```

FillPath

```

Fill a path using a brush and fill type.

 FillPath(
  DRAWBOT_SurfaceRef  in_surface_ref,
  DRAWBOT_BrushRef    in_brush_ref,
  DRAWBOT_PathRef     in_path_ref,
  DRAWBOT_FillType    in_fill_type);
```

`DRAWBOT_F`illType is one of the following: - k`DRAWBOT_F`illType_EvenOdd - k`DRAWBOT_F`illType_Winding

StrokePath

```

Stroke a path using a pen.

 StrokePath(
  DRAWBOT_SurfaceRef  in_surface_ref,
  DRAWBOT_PenRef      in_pen_ref,
  DRAWBOT_PathRef     in_path_ref);
```

Clip

```

Clip the surface.

 Clip(
  DRAWBOT_SurfaceRef    in_surface_ref,
  DRAWBOT_SupplierRef   in_supplier_ref,
  const DRAWBOT_Rect32  *in_rectPR);
```

GetClipBounds

```

Get clip bounds.

 GetClipBounds(
  DRAWBOT_SurfaceRef  in_surface_ref,
  DRAWBOT_Rect32      *out_rectPR);
```

IsWithinClipBounds

```

Checks whether a rect is within the clip bounds.

 IsWithinClipBounds(
  DRAWBOT_SurfaceRef    in_surface_ref,
  const DRAWBOT_Rect32  *in_rectPR,
  DRAWBOT_Boolean       *out_withinPB);
```

Transform

```

Transform the last surface state.

 Transform(
  DRAWBOT_SurfaceRef       in_surface_ref,
  const DRAWBOT_MatrixF32  *in_matrixP);
```

DrawString

```

Draw a string.

 DrawString(
  DRAWBOT_SurfaceRef       in_surface_ref,
  DRAWBOT_BrushRef         in_brush_ref,
  DRAWBOT_FontRef          in_font_ref,
  const DRAWBOT_UTF16Char  *in_stringP,
  const DRAWBOT_PointF32   *in_originP,
  DRAWBOT_TextAlignment    in_alignment_style,
  DRAWBOT_TextTruncation   in_truncation_style,
  float                    in_truncation_width);
```

`DRAWBOT_T`extAlignment is one of the following: - k`DRAWBOT_T`extAlignment_Left - k`DRAWBOT_T`extAlignment_Center - k`DRAWBOT_T`extAlignment_Right `DRAWBOT_T`extTruncation is one of the following: - k`DRAWBOT_T`extTruncation_None - k`DRAWBOT_T`extTruncation_End - k`DRAWBOT_T`extTruncation_EndEllipsis - k`DRAWBOT_T`extTruncation_PathEllipsis

DrawImage

```

Draw an image created using NewImageFromBuffer() on the surface. Alpha = [0.0f, 1.0f ].

 DrawImage(
  DRAWBOT_SurfaceRef      in_surface_ref,
  DRAWBOT_ImageRef        in_image_ref,
  const DRAWBOT_PointF32  *in_originP,
  float                   in_alpha);
```

SetInterpolationPolicy

```

SetInterpolationPolicy(
  DRAWBOT_SurfaceRef           in_surface_ref,
  DRAWBOT_InterpolationPolicy  in_interp);
```

`DRAWBOT_I`nterpolationPolicy is one of the following: - k`DRAWBOT_I`nterpolationPolicy_None - k`DRAWBOT_I`nterpolationPolicy_Med - k`DRAWBOT_I`nterpolationPolicy_High

GetInterpolationPolicy

```

GetInterpolationPolicy(
  DRAWBOT_SurfaceRef           in_surface_ref,
  DRAWBOT_InterpolationPolicy  *out_interpP);
```

SetAntiAliasPolicy

```

SetAntiAliasPolicy(
  DRAWBOT_SurfaceRef       in_surface_ref,
  DRAWBOT_AntiAliasPolicy  in_policy);
```

`DRAWBOT_A`ntiAliasPolicy is one of the following: - k`DRAWBOT_A`ntiAliasPolicy_None - k`DRAWBOT_A`ntiAliasPolicy_Med - k`DRAWBOT_A`ntiAliasPolicy_High

GetAntiAliasPolicy

```

GetAntiAliasPolicy(
  DRAWBOT_SurfaceRef       in_surface_ref,
  DRAWBOT_AntiAliasPolicy  *out_policyP);
```

Flush

```

Flush drawing. This is not always needed, and if overused, may cause excessive redrawing and flashing.

 Flush(
  DRAWBOT_SurfaceRef  in_surface_ref);
```

| --- | --- |

## Drawbot_PathSuite

### Custom UI & Drawbot — Drawbot_PathSuite

This set of routines is for drawing paths.

### Drawbot_PathSuite1

Function

Purpose

MoveTo

```

Move to a point.

 MoveTo(
  DRAWBOT_PathRef  in_path_ref,
  float            in_x,
  float            in_y);
```

LineTo

```

Add a line to the path.

 LineTo(
  DRAWBOT_PathRef  in_path_ref,
  float            in_x,
  float            in_y);
```

BezierTo

```

Add a cubic bezier to the path.

 BezierTo(
  DRAWBOT_PathRef         in_path_ref,
  const DRAWBOT_PointF32  *in_pt1P,
  const DRAWBOT_PointF32  *in_pt2P,
  const DRAWBOT_PointF32  *in_pt3P);
```

AddRect

```

Add a rect to the path.

 AddRect(
  DRAWBOT_PathRef        in_path_ref,
  const DRAWBOT_RectF32  *in_rectPR);
```

AddArc

```

Add a arc to the path. Zero start degrees == 3 o'clock.

Sweep is clockwise. Units for angle are in degrees.

 AddArc(
  DRAWBOT_PathRef         in_path_ref,
  const DRAWBOT_PointF32  *in_centerP,
  float                   in_radius,
  float                   in_start_angle,
  float                   in_sweep);
```

Close

```

Close the path.

 Close(
  DRAWBOT_PathRef  in_path_ref);
```

| --- | --- |

## `PF_E`ffectCustomUIOverlayThemeSuite

### Custom UI & Drawbot — `PF_E`ffectCustomUIOverlayThemeSuite

Reach for this suite whenever you need to stroke or fill paths and vertices over the Composition and Layer Windows. The same routines drive After Effects' own internal drawing, and exposing them keeps custom UI looking uniform from one effect to the next. Foreground and shadow colors are derived from the application brightness level, which guarantees that custom UI stays legible no matter how the Brightness setting is configured in the Preferences.

### `PF_E`ffectCustomUIOverlayThemeSuite1

Function

Purpose

`PF_G`etPreferredForegroundColor

```

Get the preferred foreground color.

 PF_GetPreferredForegroundColor(
  DRAWBOT_ColorRGBA  *foreground_colorP);
```

`PF_G`etPreferredShadowColor

```

Get the preferred shadow color.

 PF_GetPreferredShadowColor(
  DRAWBOT_ColorRGBA  *shadow_colorP);
```

`PF_G`etPreferredStrokeWidth

```

Get the preferred foreground & shadow stroke width.

 PF_GetPreferredStrokeWidth(
  float  *stroke_widthPF);
```

`PF_G`etPreferredVertexSize

```

Get the preferred vertex size.

 PF_GetPreferredVertexSize(
  float  *vertex_sizePF);
```

`PF_G`etPreferredShadowOffset

```

Get the preferred shadow offset.

 PF_GetPreferredShadowOffset(
  A_LPoint  *shadow_offsetP);
```

`PF_S`trokePath

```

Stroke the path with the overlay theme foreground color.

Optionally draw the shadow using the overlay theme shadow color.

Uses overlay theme stroke width for stroking foreground and shadow strokes.

 PF_StrokePath(
  const DRAWBOT_DrawRef  drawbot_ref,
  const DRAWBOT_PathRef  path_ref
  PF_Boolean             draw_shadowB);
```

`PF_F`illPath

```

Fills the path with overlay theme foreground color.

Optionally draw the shadow using the overlay theme shadow color.

 PF_FillPath(
  const DRAWBOT_DrawRef  drawbot_ref,
  const DRAWBOT_PathRef  path_ref
  PF_Boolean             draw_shadowB);
```

`PF_F`illVertex

```

Fills a square vertex around the center point using the overlay theme foreground color and vertex size.

 PF_FillVertex(
  const DRAWBOT_DrawRef  drawbot_ref,
  const A_FloatPoint     *center_pointP
  PF_Boolean             draw_shadowB);
```

| --- | --- |
