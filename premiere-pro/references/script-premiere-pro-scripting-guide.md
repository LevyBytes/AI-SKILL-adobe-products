# Premiere Pro Scripting Guide, 3Rd Party Scripting Has Moved To Uxp, Navigating The Guide, Contribution ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Premiere Pro Scripting Guide; 3rd Party Scripting has moved to UXP; Navigating the Guide; Contribution; Licensing & Ownership; Overview; Example code; Development and debugging tools; Changelog; Adobe Premiere Pro 23.0; Adobe Premiere Pro 15.4; Adobe Premiere Pro 14.0; Adobe Premiere Pro 13.x; How to Execute ExtendScript in Premiere Pro; Application.

## Premiere Pro Scripting Guide

This reference collects public details about methods and members exposed through the ExtendScript API.

Through its ExtendScript-based API, Premiere Pro can be controlled broadly across the application. ExtendScript can reach and modify most project content, including metadata plus export and render settings.

Adobe invites questions, problem reports, and feature requests so integrations can work successfully.

## 3rd Party Scripting has moved to UXP

### Premiere Pro Scripting Guide — 3rd Party Scripting has moved to UXP

Beginning in November 2025, Premiere Pro extensibility is based on UXP, the Unified Extensibility Platform. Consult the API Documentation and sample plugins for that newer surface.

ExtendScript-based integrations continue to be supported, with support planned through September 2026.

## Navigating the Guide

### Premiere Pro Scripting Guide — Navigating the Guide

For a starting point, use the Overview to understand scripting behavior in Premiere Pro, or read the Changelog for scripting API updates across releases.

## Contribution

### Premiere Pro Scripting Guide — Contribution

The effort is run mainly by the community, and contributors are encouraged to submit corrections, refinements, notes, warnings, or other improvements that help the project.

Contribution details and recommended practices are covered in the Documentation Contribution Guide.

## Licensing & Ownership

### Premiere Pro Scripting Guide — Licensing & Ownership

The project is presented for education only.

The source also carries an Adobe ownership notice.

## Overview

Premiere Pro includes an ExtendScript API that can access and modify most project elements, including metadata as well as export and rendering choices.

Note

This document is not a tutorial for ExtendScript, ExtendScript debugging, or general development methods. Its scope is the Premiere Pro ExtendScript API and the runtime context used by scripts.

Although the Premiere Pro ExtendScript API began as an incomplete interface meant only for internal testing, it has expanded for many years. In 12.1.1, identified in the source as the current release at that time, the API provides extensive access to, and often control of, project elements and application settings.

## Example code

### Overview — Example code

PProPanel is the sample project for exercising the Premiere Pro ExtendScript API: https://github.com/Adobe-CEP/Samples/tree/master/PProPanel.

## Development and debugging tools

### Overview — Development and debugging tools

Adobe no longer updates ExtendScript Toolkit (ESTK). For debugging, use Microsoft Visual Studio Code plus this extension:

https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug

## Changelog

Which scripting additions and changes are listed here?

## Adobe Premiere Pro 23.0

### Changelog — Adobe Premiere Pro 23.0

Warning

Decision: Changes or improvements to Premiere Pro's ExtendScript API are not currently planned or scheduled. That position may be revisited after Premiere Pro shifts to UXP-based extensibility.

## Adobe Premiere Pro 15.4

### Changelog — Adobe Premiere Pro 15.4

- Added: app.getCurrentProjectViewSelection()

  - Added: TrackItem.move()

  - Added: TrackItem.disabled

## Adobe Premiere Pro 14.0

### Changelog — Adobe Premiere Pro 14.0

- Added: Sequence.autoReframeSequence()

## Adobe Premiere Pro 13.x

### Changelog — Adobe Premiere Pro 13.x

- Added: Marker.getColorByIndex()
  - Added: Marker.setColorByIndex()

## How to Execute ExtendScript in Premiere Pro

Running scripts from CEP panels is the recommended workflow.

With extra setup, Premiere Pro can also receive scripts through a command line. Adobe does not recommend that path because platform behavior differs, and execution must be enabled through preliminary configuration.

For development and debugging, use VSCode with Adobe's extension. For deployed workflows, use panels whenever practical.

## Application

### Application object

app

### Description

Exposes Premiere Pro application settings and objects.

The only global object is always addressable by the name app.
