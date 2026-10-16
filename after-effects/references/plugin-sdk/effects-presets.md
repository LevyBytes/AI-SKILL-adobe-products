# Effects Presets

Premiere Pro handles presets differently than After Effects.

From the Premiere Pro SDK Guide:

Effect presets are shown in the Presets bin in the Effects panel and apply like Effects with chosen parameter settings and keyframes. Create effect presets this way:

1. Apply a filter to a clip
2. Set the filter parameters, adding keyframes if desired
3. Right-click the filter name in the Effect Controls panel, then select "Save Preset..."
4. If desired, use right-click in the Effects panel and choose "New Presets Bin" to create preset bins
5. Arrange the presets inside the preset folders
6. Select the bins and/or presets you want to export, right-click, and choose "Export Preset"

Install presets in the Plug-ins directory. Once placed there, they are read-only, and users cannot move them to another folder or rename them. User-created presets remain modifiable.

On Windows Vista, these live in the user's hidden AppData folder, for example C:/Users/[user name]/AppData/Roaming/AdobePremiere Pro/[version]/Effect Presets and Custom Items.prfpset.

On macOS, they are in the user folder, at ~/Library/Application Support/Adobe/Premiere Pro/[version]/Effect Presets and Custom Items.prfpset.
