# Metadata In Premiere, Edit Xmp Metadata, Search Xmp Metadata, Show Or Hide Metadata In Premiere ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Metadata in Premiere; Edit XMP metadata; Search metadata in the Metadata panel; Show or hide metadata in Premiere; Save or delete metadata sets; Create metadata schemas and properties; View clip data in the Metadata panel; Link clip data to XMP metadata; Display metadata as overlays; Display overlays in Multi-Camera View.

## Metadata in Premiere

Understand metadata as a way to organize media efficiently and track files across Adobe applications and production workflows.

Video work commonly requires following many media files through several production stages. Metadata addresses that need by storing descriptive information in the files themselves, producing a consistent record that travels with assets from capture to delivery.

With metadata, raw media becomes searchable, organized material. Rather than depending only on filenames and manual folder systems, teams can store details such as shooting location, scene information, copyright notices, and production notes inside source files. That information stays available through the workflow in Premiere, Adobe Bridge, and other applications used in the production pipeline.

### What metadata contains

Metadata includes two broad kinds of information: technical data created automatically and descriptive details added by users. During recording, video and audio files capture basic properties such as creation date, duration, frame rate, and codec information. These technical values form the base metadata profile for the file.

Additional descriptive metadata can be entered to match production needs. Typical fields cover director names, location details, talent information, usage rights, and scene descriptions. Because these additions are flexible, you can build organizational systems that fit a particular workflow.

### The XMP standard

Premiere records metadata with the Extensible Metadata Platform (XMP), an industry-standard format built on format. Because the format is standardized, Adobe applications and compatible third-party tools can exchange metadata smoothly. Metadata added to a clip in Premiere is immediately available to applications such as After Effects and Adobe Bridge.

Usually, XMP is embedded in the source file so metadata stays with the media. When a file format cannot contain embedded XMP, a separate sidecar file is created to keep metadata associated with the source material.

### Metadata schemas

Schemas group metadata properties into logical sets for particular workflows. A schema contains fields that match a production stage or media type.

The Dynamic Media schema provides video-production properties such as tape names, scene numbers, and shot locations. The Dublin Core schema offers general fields, including title, creator, and description, that apply to many media types. The Exif schema covers camera-related technical information such as exposure settings and lens details.

In the Metadata panel, several schemas can be shown at the same time, letting you build a workspace that displays only properties needed for the current task. This customization keeps attention on the relevant information at each production stage.

### File metadata versus clip metadata

Premiere uses two metadata contexts: File metadata and Clip metadata. The difference matters for subclips, repeated instances, and clips that point to one source file.

File metadata is stored in the source files themselves. Because it applies universally, each clip instance that references the same source file shares identical file metadata. Use file metadata for properties describing the source material, such as copyright information, camera settings, or content that does not change based on project usage.

Clip metadata lives only in the Premiere project file. Separate clip instances can carry different clip metadata even if they all reference one source file. This separation supports multiple subclips from a single source, each with its own scene descriptions, log notes, or custom labels based on how that portion of footage is used.

Specific clip metadata fields can be linked to matching XMP file metadata fields. When fields are linked, Premiere synchronizes information between them automatically, so other applications can read clip-specific details through XMP fields. Linking connects project-level organization with metadata sharing across applications.

### The Metadata panel

The Metadata panel is the main Premiere interface for viewing and editing metadata. It shows properties for clips selected in the Project panel or Timeline, with information arranged in collapsible sections by schema type.

Because the panel separates clip properties from file properties, the two metadata types are easy to tell apart. That visual distinction clarifies which values affect only the current project and which become part of the source file's durable record.

### Metadata in production workflows

Using metadata well improves several production tasks. Search and organization become stronger because clips can be found through descriptive properties instead of filenames alone. A search might target clips with a certain talent, a particular location, or specific scene numbers.

Metadata also supports asset management for production teams. If camera operators enter location and scene information during capture, editors receive that organization without extra setup. Rights tracking is more dependable when copyright, usage terms, and licensing information are stored in the files.

For work that crosses Adobe applications, metadata keeps information continuous. Motion graphics templates made in After Effects can bring creator information and usage guidelines into Premiere. Assets passed through Adobe Bridge retain their descriptive properties, supporting consistent organization across the creative suite.

## Edit XMP metadata

### Edit descriptive properties embedded in media files by using the Metadata panel in Adobe Premiere.

XMP metadata is descriptive information stored in source files, so Adobe applications and workflows can access it. Edit XMP properties when media needs details such as copyright information, location data, scene descriptions, or custom workflow tags that should stay with it through production.

The Metadata panel supports editing XMP properties on one clip or on multiple files at once. Clip properties exist only inside the Premiere project, but XMP metadata is written to source files and appears in other applications such as Adobe Bridge and After Effects. Use XMP editing when descriptive information needs to follow media files through several applications and workflows.

- Imported clips or files in the Premiere project
- Permission to write changes to the source files being modified
- Visible Metadata panel (select Window > Metadata if needed)

### Modify metadata properties

Choose one or more clips from the Project panel or the Timeline.

Scroll through the Metadata panel to find the property that needs editing.

Select the property's text box, then enter or edit the value.

Note

When multiple selected items have different values for a property, the Metadata panel shows "" in that field. Typing new text into those fields assigns the same value to every selected item.

For a single selected item, edited properties are written to the source files immediately. With multiple selections, Premiere applies the edits when you confirm the change.

## Search metadata in the Metadata panel

### Filter metadata properties in Adobe Premiere clips by searching with specific terms.

Search in the Metadata panel makes specific information in source files and clips easier to find. Instead of scrolling through long metadata schemas, enter keywords to narrow the panel to matching properties.

Use metadata search when clips need to be found by camera settings, location data, copyright details, or custom properties. This is valuable in large projects where checking metadata clip by clip would take too long. The search works across all visible metadata schemas at once and collapses the panel to matching properties only.

Before starting a search, make sure the Metadata panel is visible and configured to show the schemas you need. To show or hide schemas, choose Metadata Display from the panel options menu.

### Search for metadata properties

Select the files or clips to search in the Project or Timeline panel.

At the top of the Metadata panel, type the text to find into the search box.

Use the Metadata panel search field to find metadata fields and values quickly.

Use the search field in the Metadata panel when you need a fast way to locate metadata values and fields.

Review the collapsed metadata list, which shows only properties containing the search string.

To move through several matches, use Previous and Next, located to the right of the search box.

To leave search mode and show the full metadata list again, select the close button to the right of the search box.

With several items selected, search results show matching properties across all selections. That view helps compare particular metadata values or find clips with shared characteristics.

Tip

If a property varies across selected items, the panel displays "" in that field. Use that indicator to spot metadata properties that are not identical among the selected clips.

## Show or hide metadata in Premiere

### Choose which schemas and properties appear in the Metadata panel for an Adobe Premiere workflow.

Tailoring the Metadata panel display keeps the current project's most relevant information in view.

The Metadata Display dialog box controls which metadata schemas and individual properties are visible in the Metadata panel. Customizing the display can tune the panel for a workflow, such as showing video-related fields for editing or copyright fields for asset management. Display changes affect the current workspace only and do not alter metadata stored in files.

### Configure metadata visibility

In the Metadata panel, select the panel menu icon, then choose Metadata Display.

In the Metadata Display dialog box, find the schemas or properties you want to manage.

Select metadata schemas when you need to find particular schemas or properties to manage.

Choose metadata schemas to locate the specific schemas or properties you want to control.

Select checkboxes beside schemas or properties to display them, or clear checkboxes to hide them.

Select OK to apply the changes.

The Metadata panel refreshes immediately and shows only the schemas and properties you selected. You can reopen the Metadata Display dialog box whenever the selection needs adjustment.

For workflows that need different metadata layouts, save custom metadata sets. In the Metadata Display dialog box, select Save Settings to keep the current configuration, then switch among saved sets for different projects.

## Save or delete metadata sets

### Build and maintain custom metadata display setups for Adobe Premiere workflows.

Use custom metadata sets to tailor the Metadata panel to each project type. One configuration might expose only the fields required for social media pieces, while another might show fields used for broadcast delivery. After you save a set, Premiere remembers the selected schemas and properties so you can move between panel layouts without reselecting those options manually.

Saved display setups remain available in later sessions and can be passed to teammates. Before you define your own sets, inspect the schemas in the Metadata Display dialog box so you know which metadata properties the workflow needs.

### Save a custom metadata set

Open the Metadata panel, select the panel menu icon, and then choose Metadata Display.

Select or clear items in the list to control which schemas and properties are shown.

Select Save Settings at the bottom of the dialog box.

In the Metadata Display dialog, Save Settings stores the custom metadata set.

The Metadata Display dialog uses Save Settings to store a custom metadata set.

Type a meaningful name for the metadata set, then select OK.

The new set is added to the Metadata Display menu, where you can enable it whenever needed. Its saved state covers every schema visibility choice and each individual property selection you made.

### Delete a metadata set

Open Metadata Display from the options menu in the Metadata panel.

In the menu at the top of the dialog box, choose the metadata set you plan to remove.

At the bottom of the dialog box, choose Delete Settings.

Note

Only the stored display setup is removed when a metadata set is deleted. Source files and clips keep their actual metadata.

## Create metadata schemas and properties

### Define custom metadata fields in Adobe Premiere for tracking assets that belong to a specific production workflow.

Create custom metadata schemas when the default choices, such as Dynamic Media or Dublin Core, do not cover the information your production needs to track. A documentary team, for instance, could define a schema for interview subjects, locations, and release status. In the Metadata panel, custom schemas appear beside built-in schemas, and their values are written into source files through XMP standards.

Before you begin:

Before adding custom schemas, look through the default metadata options in the Metadata panel and confirm that existing schemas, including Dynamic Media, Exif, or Dublin Core, do not already meet the need.

### Create a custom schema

From the Metadata panel's panel menu icon, open Metadata Display.

At the bottom of the dialog box, choose New Schema.

In the Metadata Display dialog, New Schema creates a custom metadata schema.

The Metadata Display dialog uses New Schema to create a custom metadata schema.

Type a purpose-focused schema name; examples include "Interview Metadata" or "Marketing Assets."

Choose OK, and Premiere creates the schema.

The schema is then listed and can have properties added to it.

### Add properties to your schema

In the Metadata Display dialog box, find the schema you just created in the list.

Select Add Property next to your schema name.

Type a clear property name, such as "Scene Location" or "Interview Subject."

From the Type menu, select the property type that matches the data you will store.

Match the type to the kind of information the property will hold:

- Integer: shows whole numbers that can be changed by dragging or clicking. Use it for counts, ratings, or sequential numbering.
- Real: shows fractional numeric values for precise measurements such as camera sensor values or aspect ratios.
- Text: shows a text entry field for descriptive details such as names, locations, or notes.
- Boolean: shows a checkbox for yes/no or on/off values, including "Approved" or "Color Corrected" status.

Set the property type while creating a new metadata property.

Choose the property type as part of creating a new metadata property.

Repeat the process to add any other properties your workflow requires.

Select OK to save your custom schema and properties.

After creation, the custom metadata properties appear in the Metadata panel when assets are selected in the Project panel. Premiere embeds those properties directly in source files, keeping them available to Adobe applications that support XMP metadata.

Tip

To adjust custom schemas later, open Metadata Display again from the Metadata panel menu. You can add properties, rename schemas, or delete unused schemas so the workflow stays organized.

## View clip data in the Metadata panel

### Configure the Project Metadata schema in Adobe Premiere to show clip information that is specific to the project.

The Metadata panel can show file-based XMP metadata together with clip information that exists only inside the project. Stored in the Premiere Project Metadata schema, clip data covers properties such as clip names, tape names, log notes, and timecode values that belong to the Premiere project file rather than to the media file.

Use this procedure when you need to see or edit clip-specific properties saved in the project instead of the source files. Because clip data applies to individual clip instances, it is different from file metadata; this matters when several clips refer to one source file or when subclips are involved. Unless you link clip fields to XMP metadata fields, the information stays internal to Premiere.

By choosing which clip details appear in the Metadata panel, you can focus on the fields that matter for logging footage, organizing sequences, or preparing assets for delivery.

### Configure clip data display

If the panel is hidden in your workspace, open Window > Metadata.

From the Metadata panel menu, choose Metadata Display.

Expand Premiere Project Metadata by selecting the icon beside it, which reveals the available clip information fields.

To show every clip information field, check the box next to Premiere Project Metadata; otherwise, check only the fields you want to view.

Select OK to apply your changes.

Whenever you select a clip in the Project or Timeline panel, the Metadata panel shows the clip information fields you selected. To change the visible fields later, return to the Metadata Display dialog box.

## Link clip data to XMP metadata

### Use Adobe Premiere linking to sync clip information automatically into file metadata.

Linking ties clip data stored in the project file to XMP metadata embedded in the source files. With that connection in place, applications such as Adobe Bridge and other Adobe video tools can read the clip information. Use links only when clip-specific data should synchronize with the source file. If a workflow has multiple clip instances referencing one source file, leave fields unlinked to avoid conflicts over shared data.

Managing information is easier when clip data and file metadata are kept distinct. Inside the Premiere project file, clip data describes individual clip instances; subclips, for example, can have unique In and Out points while still referencing the same source file. File metadata is embedded in source files and is available across Adobe applications.

After you link a clip data field, Premiere copies any information entered in that field to the matching XMP metadata field. The synchronization starts when the link is created and applies to later edits. Clip data that was entered before the link was made is not copied.

Most linked fields use the same names for clip data and XMP metadata. There are two exceptions: the Name field connects to Title in the Dublin Core schema, and Log Note connects to Log Comment in the Dynamic Media schema.

### Enable metadata field linking

If the Metadata panel is hidden, open Window > Metadata.

Choose a clip in the Project panel or Timeline panel so its metadata is shown.

In the Metadata panel, scroll down under Clip until fields with empty link buttons appear on the right.

Use the Metadata panel link icon when connecting clip data fields with XMP metadata.

The link icon in the Metadata panel connects clip data fields with XMP metadata.

Select the link button next to any field that should synchronize with XMP metadata.

Confirm that the link button now shows a chain icon, which indicates the connection is active.

After you link fields, data entered into linked clip fields is copied automatically to the source file's XMP metadata. Applications that read XMP metadata, including Adobe Bridge, After Effects, and other tools, can then see that synchronized information.

Tip

To remove a link, choose the chain icon button again. The connection ends at once, while data synchronized earlier remains in both the clip field and the XMP metadata field.

## Display metadata as overlays

### Review the metadata types and display choices available for Program Monitor and Source Monitor overlays in Adobe Premiere.

Use this reference while setting up overlays to check which metadata fields are available, understand the display choices, or compare overlay behavior across viewing modes.

Monitor overlays are shown only in Composite Video mode and are reached from the wrench icon in the Program Monitor or Source Monitor.

### Available metadata fields

Premiere can show the following metadata as monitor overlays:

### Edit point and media indicators

When Overlay Settings enables them, these visual indicators appear automatically:

### Display settings

### Controls for text appearance

### Options for playback and transmission

### Settings for safe margins

Action and Title Safe Area overlays mark broadcast-safe zones for video content:

Safe margins add visual guides whose horizontal and vertical controls can be customized.

### Multi-Camera view display

Multi-Camera view mode can show as many as two metadata properties chosen in Overlay Settings. The Camera Names choice made through the Create Multi-Camera Source Sequence dialog box determines which camera angle display choices are available:

- Track names, for example V1, V2, V3...
- Clip names assigned in the Project panel
- Camera numbers that use numerical identifiers

During multi-camera editing in the Source Monitor, the selected metadata is shown on each camera angle thumbnail.

### Overlay placement zones

The Overlay Settings dialog box sorts metadata fields into four placement quadrants that match monitor positions:

- Left: often used for Source Timecode across multiple video and audio tracks
- Right: holds sequence details and file identifiers
- Top Middle: contains marker comments and sequence markers
- Bottom Middle: shows edit point and media indicators

As monitor size changes, the quadrants scale proportionally while keeping their relative positions.

### Overlay presets

Custom overlay layouts can be saved, exported, and imported as preset files:

Presets make it faster to switch among overlay layouts or metadata content for different workflow needs.

## Display overlays in Multi-Camera View

### Set up metadata displays in the Overlay Settings dialog box so Adobe Premiere can show camera names and timecodes across multiple angles.

In Multi-Camera View, overlays help identify camera angles and follow timecodes while you edit footage from multiple sources, which makes choosing the correct angle during playback easier.

Multi-Camera View mode can place up to two metadata properties as overlays on camera angles in the Source Monitor. These overlays can show details such as camera names, source timecodes, and other metadata that help identify footage during angle switching. The Camera Names option selected during multi-camera source sequence creation determines the camera angle labels.

### Configure overlay settings for Multi-Camera View

In the Source Monitor, use the Wrench icon and choose Overlay Settings > Settings.

In the Overlay Settings dialog box, pick no more than two available metadata properties; examples include Camera Name and Source Timecode.

For Multi-Camera View overlays, choose a metadata option such as Camera Name or Source Timecode.

Use a metadata option, such as Camera Name or Source Timecode, when setting Multi-Camera View overlays.

Use Text Size and Opacity to control the overlay appearance on the monitor.

Select Enable overlays during playback if the metadata should stay visible while the footage plays.

Select OK to apply your settings.

The selected metadata now appears as overlays on every camera angle in Multi-Camera View. Placement follows the layout configured in the Overlay Settings dialog box, making each camera source easier to identify during multi-camera editing.

Tip

Save your overlay configuration as a preset by using the Save Preset icon in the Overlay Settings dialog box. This gives you a quick way to switch among overlay layouts for different multi-camera projects.
