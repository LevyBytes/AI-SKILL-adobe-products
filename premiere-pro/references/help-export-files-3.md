# Create And Save Custom Presets, Manage Presets, Export From Avid Media Composer To Premiere, Add Content Credentials To Exported Videos

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create and save custom presets; Manage presets; Export from Avid Media Composer to Premiere; Add Content Credentials to exported videos.

## Create and save custom presets

### How to create and save custom presets for fast reuse, making preferred settings easier to apply across Adobe Premiere projects.

During export, custom presets remove the need to configure the same settings by hand for each job. They keep projects consistent, preserve standardized output formats, and save time because preferred configurations can be applied with one click. This also improves efficiency and lowers the chance of mistakes or mismatched settings during repeated exports.

In the Export dialog box, choose the preset that most closely matches the settings you want.

From the Preset menu, choose the preset that most closely matches the settings you want. Adjust the preset settings to meet your requirements.

After your edits are complete, choose Save preset.

Saving custom presets during export removes repeated manual setup for every export.

Saving custom presets during export removes repeated manual setup for every export.

The saved preset becomes available in the Custom Presets section of the Preset Manager panel.

In Preset Manager, the Custom Presets tab supports creating, organizing, and managing saved export settings.

In Preset Manager, the Custom Presets tab supports creating, organizing, and managing saved export settings.

## Manage presets

### Manage preset sorting, searching, display choices, favorites, and deletion for presets added in Adobe Premiere.

### Sort presets

Use ascending or descending sorting for presets based on format, frame size, category, or another available parameter. To change the order, choose the relevant column header.

### Mark presets as favorites

Use the star icon beside a preset to turn its favorite state on or off. Favorite presets appear in the Preset menu, where Quick Export and Export mode can access them quickly.

### Search and display presets

Filter the list to show favorite presets, custom presets, system presets, or all preset types together. Enter criteria in the Search field to narrow the list; for example, type "prores" to show only presets that export to the ProRes format.

### Delete presets

In the Preset Manager dialog box, choose a preset and then use Delete at the bottom of the dialog box. Only custom presets can be deleted.

## Export from Avid Media Composer to Premiere

### Move an AAF file from Avid Media Composer into Adobe Premiere.

Premiere does not open native Avid Media Composer (.avf) project files directly. Export an AAF file from Avid Media Composer first, and then import that AAF file into Premiere.

### Migrating from Avid Media Composer

Export the AAF version of the Avid sequence.

Note

Prepare the Avid Media Composer sequence before creating the AAF that will move into Premiere. Clean up the sequence tracks ahead of export, and place each asset type on its own track.

Exporting a Reference Movie is also useful because it can later help identify and rebuild effects that do not carry over.

Open the project in Avid Media Composer.

In the project bin, choose the sequence for export.

Choose File > Export.

In the Export Settings dialog box, choose AAF Edit Protocol. Also choose Include All Video / Data Tracks in Sequence, and then choose Include All Audio Tracks in Sequence.

To restrict the AAF to the portion between In/Out points, enable Use Marks.

Open the Video / Data Details tab, and then set Link to (Don't Export) Media.

Open the Audio Details tab, and then set Link to (Don't Export) Media. You can also enable Include Rendered Audio Effects.

Save the AAF file.

### Translated and untranslated elements

- Custom details entered in Avid Metadata columns, including the Comments field, are carried over.
- Premiere adds markers in the sequence to flag effects that are unsupported.
- Avid effects such as dissolves and speed variations are transferred.
- Audio Levels and Keyframes from Avid are retained.
- Some Motion parameter settings carry across, while complex animation may fail to translate.
- LUT information baked into master clips moves across, along with LUT information shown in Metadata Display columns.
- LUT Filter Effects and Color Filters assigned to clips in an Avid Sequence are not transferred.
- Matte Keys may lose their Alpha Channel during migration.
- Multi-Cam Clips are split into separate camera angles, and Premiere places only the Active Camera Angle from that Avid Sequence into the Sequence.
- All Camera angles remain available when you export Avid Clip Bins as ALE Files, and then import those ALE Files as Bins into Premiere.

## Add Content Credentials to exported videos

### Add Content Credentials to exported videos, including connected social profiles and generative AI usage choices.

Content Credentials attach verified identity, social profile details, and AI training preferences to exported videos. That metadata can help viewers trust the file and can help you receive credit for the work.

Use Content Credentials to assert authorship for video content or to request that AI models not train on your work. Premiere embeds the credentials in the exported file as tamper-evident metadata, giving viewers a record they can check. Set the choices once on the Adobe Content Authenticity site; after that, Premiere uses those settings automatically at export.

At export, Content Credentials add dedicated metadata that travels with the file. As content passes through later editing stages, additional credentials can be added, building a version history that helps viewers judge trust.

### Configure your Content Credentials preferences

Go to the Adobe Content Authenticity site and sign in with your Adobe ID.

Open your profile settings, and connect a social account to verify your identity.

Define Content Credentials preferences by linking social accounts and deciding whether generative AI training may use your content.

Choose the Content Credentials preferences again, linking social accounts and setting whether generative AI training is allowed for your content.

Attach the selected social media profile URLs to the content you export.

Enable I request that generative AI models not train or use my content when you want to ask generative AI models not to use your content for training.

Save the preferences so Premiere and Adobe Media Encoder can use them.

After these preferences are configured, they are stored securely and applied automatically whenever you export content from Premiere.

### Export videos with Content Credentials

Open Export mode by choosing File > Export > Media or pressing Command + M (macOS) or Ctrl + M (Windows).

In the Content Credentials section below the output preview, verify that the Content Credentials stamp is shown.

During export, include Content Credentials so the exported file carries your verified identity and preferences.

Use Content Credentials in the export flow to attach your verified identity and preferences to the final file.

Use Set Preferences to link social accounts, including social profile links, so others can find your work and follow it.

Turn on Apply Content Credentials preferences at export, and then finish any other export settings required for the project.

Select Export to render the video with Content Credentials attached.

Note

When a sequence includes Adobe AI-generated assets from apps such as Adobe Express, Photoshop, Illustrator, or Firefly, Premiere automatically adds Content Credentials in supported export formats. Sequences with AI-generated content also show the Content Credentials stamp automatically.

### Verify your exported credentials

After export, use Adobe's Inspect tool to verify the Content Credentials attached to the files. Upload the exported file to review embedded identity information, social accounts, and AI training preferences. To scan imported files for existing Content Credentials, right-click assets in the Project panel and choose Scan for Content Credentials.

Tip

For Adobe Media Encoder exports, send the Premiere sequence to the Media Encoder queue through Export Settings > Send to Media Encoder. The Content Credentials settings saved at the Adobe Content Authenticity site are applied automatically in Media Encoder.
