# Geospatial Pdfs, Apply Pdf Actions

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Geospatial PDFs overview; Create geospatial PDFs; Import shapefiles to geospatial PDFs; Find map locations on geospatial PDFs; Calculate distances and areas on geospatial PDFs; Customize geospatial measurements; Export geospatial markups; PDF actions overview; Add actions to PDF elements; Add actions to page thumbnails.

## Geospatial PDFs overview

Learn about how geospatial PDFs represent location‑based data in Adobe Acrobat.

A geospatial PDF is just an ordinary PDF carrying embedded coordinate data. Tying page content to particular latitude and longitude values or to projected coordinate systems lets Acrobat read the file as a map instead of a flat picture. That makes map-style work possible — pinpointing locations, examining geographic information, and measuring features all included.

### Components

- Definitions for the coordinate system, which tie points on the map back to actual locations on the ground.
- Metadata about space that pins down projection, scale, and how measurements relate to one another.
- Layer details, which are optional, used to arrange map elements both for display and by purpose.
- The underlying geospatial data, which can be raster, vector, or a mix of the two.

### Capabilities

Once geospatial metadata is present inside a PDF, Acrobat opens up a set of map-driven interactions, among them:

- Typing in coordinates to pinpoint a spot.
- Working out distance, perimeter, and area from the spatial data.
- Lifting coordinate values to hand off to GIS or mapping software.
- Flipping between measurement units when geographic math calls for it.
- Reading off location details, whether expressed in geographic or projected frameworks.

### Benefits

Carrying map content in a geospatial PDF means you can review and pass it around without leaning on dedicated GIS software. Core geographic tasks are covered too — checking coordinates, looking over spatial layers, and conveying measurements taken from the map.

## Create geospatial PDFs

This walks through building a geospatial PDF out of GeoTIFF and JPEG 2000 source files in Acrobat.

Both GeoTIFF and JPEG 2000 are raster formats, and you can bring them in either as fresh documents or as added layers on a document you already have open. The geospatial coordinates baked into those files carry over, so the PDF you end up with still holds its spatial data. That embedded geospatial information is what later lets you measure features, pin down locations, and review mapped content inside Acrobat.

Before you begin

Confirm first that your GeoTIFF or JPEG 2000 file actually carries valid geospatial metadata. Acrobat relies on that information when it builds, within the PDF itself, the references that make it geospatial.

From the Home view, select Create.

Pick Single file, and after that choose Select a file.

When the dialog box appears, browse to your GeoTIFF or JPEG 2000 file and pick it.

Tip

If you want several JPEG 2000 files at once, go to Menu > Create > PDF from File, pick the files, and select Open — Acrobat will combine them into a single multi-page PDF.

Select Open, then select Create, and Acrobat will load the file as a geospatially enabled PDF.

## Import shapefiles to geospatial PDFs

This covers bringing a shapefile into a geospatial PDF you already have, adding it as a layer in Acrobat.

With Acrobat you can lay a shapefile's vector data over a geospatial PDF, which lets you review the extra map features without leaving that one document. Pulling the shapefile in as a layer carries over both its attributes and its location data, so comparing, inspecting, and measuring the mapped content all happen in a single place.

Before you begin

Make sure the SHP (geometry) file and the DBF (attribute data) file share the same filename. Check as well that the shapefile geographically overlaps the map coordinates already in the PDF.

### Import the shapefile as a layer

To bring up the Layers panel, choose Menu > View > Show/Hide > Side Panels > Layers.

Within the Layers panel, open the Options menu and pick Import as Layer.

When the Import as Layer dialog appears, select Browse beside Source file, find your SHP file, and choose it.

Select Settings to reveal the options that control how the layer looks.

Switch the line properties over to a solid line and color it blue, or tune whatever other visual settings suit your map.

Select OK to commit those settings, then select OK once more to pull in the shapefile.

Acrobat drops the shapefile into the geospatial PDF as a new layer and lines it up against the existing map using the coordinates already embedded.

Note

Should the shapefile fail to show up after importing, double-check that its coordinate system overlaps the one used by your PDF map. Without some geographic overlap, Acrobat can't finish the import.

## Find map locations on geospatial PDFs

This explains how to track down map locations inside a geospatial PDF by typing latitude and longitude or other coordinate values.

With a geospatially enabled PDF open, you're able to locate places, gauge distances, drop location markers, and send coordinates to the clipboard by way of a web mapping service. The Geospatial location tool reports latitude and longitude whenever the cursor sits over a region that carries geospatial information. It also lets you drop a geospatial annotation on a chosen point and run a location search within the document.

### Search for coordinates and mark locations

With a geospatial PDF open, head to All tools > Measure objects > Geospatial location tool.

Right-click somewhere on the map and choose Find a Location.

Once a location is found, read off the latitude and longitude shown at the lower-right of the screen.

Once a location is found, read off the latitude and longitude shown at the lower-right of the screen.

Type in the latitude and longitude, using either degrees, minutes, seconds or decimal format.

Press Enter to run the search. When that location is found on the map, Acrobat marks it with a blue square and recenters the page on the spot.

If the PDF holds several maps or pages, use Next or Previous to step through the other matching locations.

Click the location marker and type a comment into the comment box, such as a place name or an address.

Right-click the highlighted spot and choose Mark Location to store it as a geospatial annotation.

Note

You may turn up more than one location when maps are nested — a city map sitting inside a country map, say — or when the same coordinates land on different pages.

### Copy location coordinates for web mapping

Go to All tools > Measure objects > Geospatial location tool.

Right-click the spot on the map and choose Mark Location.

Open the location annotation and copy out its location information.

Drop the coordinates into any web mapping service that takes latitude and longitude values. As an example: 39.90183, -104.67091

## Calculate distances and areas on geospatial PDFs

This shows how distances and areas get worked out on geospatial PDFs by way of the measurement tools.

The coordinate and scale information embedded in a geospatial PDF is what lets Acrobat compute accurate distances, perimeters, and areas tied to real-world geography. The Measuring tool pulls precise figures straight out of maps, site plans, and GIS-generated documents, all from inside the PDF.

While you drag the pointer across geospatial content, snap markers together with the cursor coordinates keep your measurements aligned and make plain exactly where each one starts and stops.

### Measure distances and areas

With a geospatial PDF open, choose All tools > Measure objects > Measuring tool .

From the toolbar, pick which kind of measurement you want: Distance Tool , Perimeter Tool , or Area Tool .

Reach for Distance Tool when measuring point to point, Perimeter Tool when going around a closed path, and Area Tool when sizing up a bounded region.

Reach for Distance Tool when measuring point to point, Perimeter Tool when going around a closed path, and Area Tool when sizing up a bounded region.

Turn on whatever snap-to options you need:

- Snap to Paths
- Snap to Endpoints
- Snap to Midpoints
- Snap to Intersections

Click a starting point on the map to kick off the measurement. Acrobat shows the coordinate position and begins measuring.

Keep clicking points to lay out the line or shape, and Acrobat revises the distance or area with each one you add.

Double-click the last point to wrap up the measurement and show the result, which appears in the lower-right corner.

To finish, right-click and choose Complete Measurement, or choose Cancel Measurement to throw it away.

Tip

To swap units just for the open document, right-click inside the map while the Measuring tool is active and choose Distance Unit or Area Unit. To change the default units across every geospatial PDF, go to Preferences > Measuring (Geo).

## Customize geospatial measurements

Working in Adobe Acrobat, this covers how to tailor a geospatial PDF's scale settings and the units its measurements report in.

Geospatial PDFs lean on embedded coordinate and scale information to compute real-world distances and areas. You can set measurement units for one particular document, or establish defaults across all geospatial PDFs, so the figures line up with your project's or region's standards.

### Change measurement units for the current geospatial PDF

With a geospatial PDF open, choose All tools > Measure objects > Measuring tool.

While the Measuring tool is active, right-click somewhere inside the map area.

From the context menu, choose Distance Unit or Area Unit.

Pick the measurement type you want from the list — Miles, Kilometers, Square Feet, or Acres, for instance.

That unit change takes effect right away for new measurements in the open document, and these settings revert once you close the PDF.

### Set default measurement preferences for all geospatial PDFs

Choose Menu > Preferences (Windows) or Acrobat > Preferences (macOS).

From the left panel, choose Measuring (Geo).

Under Use default distance unit for distance measurements, pick a unit.

Under Use default area unit for area measurements, pick a unit.

Adjust whatever other display options you need. Display value as governs the readout (Decimal or Degrees, Minutes, Seconds); Display direction as governs how bearing is shown (Signed or Named).

Select OK to keep your preferences.

From here on, those preference settings serve as the defaults for every geospatial PDF. For an individual document you can still override them on the fly through the context menu method.

Tip

Turn on Always display latitude and longitude as WGS 1984 in Preferences so coordinates follow today's standard Earth reference frame. Leave it off only when dealing with older maps built on a different coordinate system.

## Export geospatial markups

This walks through exporting geospatial location and measurement markups out of PDFs in Adobe Acrobat.

A geospatial PDF will often carry location markers and measurement markups standing in for real-world coordinates and distances. Acrobat lets you export those markups to put them to use in other applications, pass them to collaborators, or keep them archived outside the PDF.

What gets exported are the locations you marked with the Geospatial Location tool plus the distance, perimeter, and area measurements you took over geospatial content with the Measuring tool .

Open a geospatial PDF in Acrobat.

From the right panel, choose Edit, delete, or reply to comments to bring up the Comments pane.

In the Comments pane, choose Options and then Export All To Data File to send out every geospatial markup.

To export only certain markups, select the comments you want in the pane, choose Options , and then choose Export Selected To Data File.

In the Save As dialog box, give your FDF file a name and select Save.

## PDF actions overview

Here's an overview of PDF actions, along with the various action and trigger types Adobe Acrobat offers.

By making PDFs interactive, actions let you walk users through information, automate behavior, or react to things happening in the document. Once you grasp actions — what they do, when they fire, and what triggers them — you gain control over navigation, media playback, forms, and page interactions.

### Actions

Within a PDF, actions spell out what happens in response to events such as selecting a bookmark or opening a page. Several actions can fire one after another. Turning on the Locked option keeps an action from being changed by accident once you've set it up.

### Action types

- Execute a menu item: Fires off whichever menu command you pick.
- Go to a 3D/Multimedia view: Jumps to one particular 3D view.
- Go to a page view: Takes you to a destination you choose, in this PDF or another one.
- Import form data: Pulls form data out of a separate file and into the form you're on.
- Multimedia Operation (Acrobat 9 and later): Acts on a multimedia object — playing audio, for one.
- Open a file: Opens a named file, provided the right application is on hand.
- Open a web link: Brings up a URL, http, ftp, and mailto links included.
- Play a sound: Sounds an audio clip that's embedded in the document.
- Play media (Acrobat 5 compatible): Runs embedded QuickTime or AVI video that works with Acrobat 5.
- Play media (Acrobat 6 and Later Compatible): Runs embedded video that works with Acrobat 6 and up.
- Read an article: Traces an article thread through the PDF.
- Reset a form: Wipes the fields you specify on a form.
- Run a JavaScript: Carries out a JavaScript script.
- Set layer visibility: Dictates whether PDF layers show or stay hidden.
- Show/Hide a field: Flips form fields between visible and hidden.
- Submit a form: Ships the form data off to a URL you name.

### Triggers

An action's trigger decides the moment it runs. Which triggers are on offer shifts depending on the PDF element involved. They show up most often on form fields and media clips; for links and bookmarks, though, they do nothing.

### Form and media triggers

- Mouse Up: Fires once a mouse button gets let go.
- Mouse Down: Fires the instant a mouse button goes down.
- Mouse Enter: Fires as the pointer moves into a field or play area.
- Mouse Exit: Fires as the pointer moves back out of a field or play area.
- On Focus (media only): Fires when focus lands on the element, by mouse or by keyboard.
- On Blur (media only): Fires when focus moves off the element.
- Page Visible: Fires once the page comes into view within multi‑page layouts.
- Page Invisible: Fires once the page drops out of view.
- Page Enter: Fires when the page turns into the current one.
- Page Exit: Fires the moment the user heads away from it.

## Add actions to PDF elements

Working in Adobe Acrobat, this explains how to attach actions to buttons, bookmarks, links, media clips, and form fields.

Adding actions is what turns a PDF interactive. Through them you can open webpages, switch views, run scripts, or reveal and conceal form fields. Attach actions to elements like bookmarks or buttons so the document responds whenever a user interacts with them.

### Create interactive PDFs with actions

In the Bookmarks panel, right-click the bookmark and choose Properties.

In the Bookmark Properties dialog box, select the Actions tab.

For a link, media clip, or form field, double-click it to open its Properties dialog box.

For a link, media clip, or form field, double-click it to open its Properties dialog box.

From the Select Action dropdown menu, pick the action type you want to add, then select Add.

In the dialog box that comes up, set the options for the action you chose and select OK.

Run through the previous two steps again for any further actions, and rely on the Up and Down buttons to set their order.

(Optional) Pick an action and use Edit or Delete to change it.

Select OK to store your action configuration.

Select OK to dismiss the Properties dialog box and put your actions into effect.

## Add actions to page thumbnails

A walkthrough for attaching open and close actions to any page inside Adobe Acrobat.

Page-level actions let you drive behavior the moment a page comes into view, or just as a reader moves off it. The kinds of things you can automate this way include shifting the page view, triggering media playback, or toggling whether certain content shows.

Configure page-level actions

From the panel on the right, pick Page thumbnails.

With the page thumbnail highlighted, open the Options menu and pick Page properties.

Inside the Page Properties dialog box, switch to the Actions tab.

From the Select Trigger dropdown menu, pick which event should fire the action.

Pick Page Open for behavior that runs once the page is on screen, or Page Close for behavior that runs as the reader navigates away.

Pick Page Open for behavior that runs once the page is on screen, or Page Close for behavior that runs as the reader navigates away.

From the Select Action menu, pick the kind of action to attach, then select Add.

Whatever dialog box pops up, fill in that action's own settings and select OK.

Want more than one action? Run through the last two steps again, and reorder them with the Up and Down buttons.

Finish by selecting OK, which dismisses the Page Properties dialog box and commits everything you set.

Note

A page told to open or close full-screen stays in full-screen view right up until you revise that setting.
