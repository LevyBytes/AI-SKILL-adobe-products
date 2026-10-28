# Cloud rendering in Premiere FAQ

Find answers about Adobe Premiere cloud rendering, supported assets, media behavior, and workflow limits.

If the project includes locally stored assets:

- Fix the errors and come back
- Ignore and continue

- Choosing Ignore and continue with cloud rendering shows a missing-media screen in the rendered output where that local asset would be.

Sequences of any duration or size are supported by cloud rendering when they include:

- All fonts, including custom fonts used by project components, such as text graphics inside MOGRTs and captions.
- MOGRTs, both built-in and custom.
- Video or audio effects and transitions supplied with Premiere.
- LUTs from the Lumetri panel, built-in LUTs, or LUTs applied through the Interpret Footage method.

If the sequence uses a non-Adobe font, custom MOGRT, or any effects or transitions from a third-party sequence (any non-media asset):

- Fix the errors and come back
- Ignore and continue

- If you choose Ignore and continue for the cloud rendering service, the output will not include the font, MOGRT, effects, or transitions from the third-party plug-in. When the service cannot interpret a non-Adobe font, it renders that text with the Lucida Grande font.

Rendered output can be saved to a project-level or folder-level location on Frame.io.

Open the Export tab and choose Frame.io as the destination.

In the Publish section, choose Select Frame.io Location from the Frame.io location dropdown list.

Choose any project-level or folder-level location.

You can choose any project folder as the Frame.io output location.

Frame.io output may be directed to any folder in the project.

No. Media size is not limited. Cloud rendering is intended to support every type of Premiere-supported video output, from short promos and social media posts through long-form videos.

Cloud rendering works with both Premiere projects and Team Projects.

Some listed items are not currently relevant to the cloud rendering workflow, and some others are not currently supported for cloud rendering.

The file version imported from the Frame.io panel into the project, original or proxy, is the version used for cloud rendering during export. The result should therefore match local rendering and the cloud-rendered output.

Cloud rendering does not currently support ProRes-RAW or HEIF/HEIC formats. Other formats supported by Premiere should work correctly. If a supported format does not produce the expected output, report the issue.

To open the Adobe Fonts page, use the Creative Cloud icon next to Add Adobe Fonts in the Essential Graphics panel.

Add a new font family with Add Adobe Fonts.

Select Add Adobe Fonts when another font family is needed.

Browse, then use Add Family for the font families you want to add.

In the Creative Cloud desktop app, go to Resource Link and select Manage Fonts.

Manage Fonts is available in the Adobe Creative Cloud desktop app.

The Adobe Creative Cloud desktop app includes a Manage Fonts option.

Use Install family to install the font families that were recently added.

The fonts just installed appear in the fonts drop-down list under the Text section.

Premiere filters the font menu to Adobe Fonts when Show fonts from Adobe is enabled at the upper-left corner of the font drop-down list.

Enable Show fonts from Adobe to filter the list to Adobe Fonts.

Use Show fonts from Adobe when the menu should display only Adobe Fonts.

Follow the cloud rendering setup instructions. At the Unlock Feature dialog, enter the feature unlock code, then select Disable.

For more help with Premiere, visit the Premiere community forums to connect with other users and Adobe experts.
