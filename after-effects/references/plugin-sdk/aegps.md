# AEGPs

Reaching well past what effect plug-ins can do, the After Effects General Plug-in (AEGP) API is both deep and wide in the capabilities it exposes.

From the user's vantage point, an AEGP looks like a built-in piece of After Effects.

Such plug-ins are able to insert, intercept, and fire menu commands, reach into the keyframe database, and hook their own functions into the internal messaging of After Effects.

Projects and compositions can have items added or removed by AEGPs, and the same goes for filters and keyframes.

After its command fires, an AEGP turns to the many PICA function suites (covered throughout this section) to operate on any After Effects item it likes.

An AEGP can expose function suites for plug-ins to call, work over every part of a project, alter interpretations, swap files, and decide which external files feed into a project's render.

A handful of AEGP variants exist: Keyframers, Artisans, and I/O modules (AEIOs). Each remains an AEGP at heart, but gains entry to specialized messaging streams that it registers for with After Effects.

## Overview

To get at everything they need, AEGPs rely on Plug-In Component Architecture (PICA) function suites.

An AEGP is also free to publish suites of its own for effect plug-ins to consume (because the order in which plug-ins load isn't fixed, an AEGP can't count on any suite that After Effects itself doesn't supply).

On top of that, an AEGP may ask for a suite and, should it be missing, step in with its own substitute implementation.
