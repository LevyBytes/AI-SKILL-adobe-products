# Adding Visual Analysis to an Ingest Preset — Working with Ingest Outputs in the Queue Panel

Queue-panel ingest outputs resemble Encoding outputs, but a few behaviors differ. Ingest-output format is always displayed as 'Ingest'. When transcoding is enabled, the ingest output tool tip shows the associated encoding preset's format and preset. For example: 'H.264 (Match Source - High bitrate)'

To convert an ingest output into an encoding output, pick another format from the Format popup menu. To reverse the conversion, change the encoding output's format to 'Ingest'. Edit an ingest output in either of these ways:

- Choose the output, then use Preset > Settings
- Use the hot-text shown in the Format or Preset columns

The Ingest Settings dialog opens so you can apply required changes. To save the settings, click OK. In the Queue, this changes the ingest output's Preset Name to 'Custom'.

The Output File column displays ingest destinations. When both Copy and Transcode option are enabled, use the popup arrow left of the destination path to switch between the two paths. To open a destination folder, click that destination's hot-text link.

Ingest job in Queue

Ingest job in Queue

Create a custom User preset in any of these ways:

- For a new encoding preset, use Preset > Create Encoding Preset.
- For a new ingest preset, use Preset > Create Ingest Preset.
- To add Media Intelligence analysis to Ingest Presets, use Preset > Create Analysis Preset. The Media Intelligence feature is available only in the beta release.
- In the Preset Browser, use the Create New Preset button and pick New Encoding Preset or New Ingest Preset from the menu that appears.

Build a new Preset Group in either of these ways:

- Use Preset > Create Group
- Use the Create New Preset Group button in the Preset Browser

Preset Groups may hold user presets, preset aliases, or nested preset groups.

Create an alias to a system or user preset in any of these ways:

- In the Preset Browser, select a system or user preset, then use Preset > Create Alias
- Move a system preset into the User Presets & Groups section of the Preset Browser by dragging it
- Hold Alt (Windows) or Opt (Mac), then drag a user preset to another location in the User Presets & Groups section of the Preset Browser.
