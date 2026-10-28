# Color profiles

Standardization of the color-profile file format comes from the ICC (International Color Consortium), and the files holding these profiles generally carry the .icc filename extension. After Effects ships with a sizable set of color profiles spanning common — and a few uncommon — input and output types.

Color profiles get loaded by After Effects out of several places, among them:

macOS: Library/ColorSync/Profiles

macOS: Library/Application Support/Adobe/Color/Profiles

Windows: WINDOWS\system32\spool\drivers\color

Windows: Program Files\Common Files\Adobe\Color\Profiles

Tip

Adobe Photoshop lets you build a custom ICC profile. Inside Photoshop, go to Edit > Color Settings. Within the Working Spaces area of the Photoshop Color Settings dialog box, the RGB and CMYK menus carry options for saving, loading, and defining custom ICC profiles.

Every color profile a project uses is stored inside the project itself, so opening that project on a different system never requires you to hand-carry the profiles across.

Note

Obsolete television gear is what the NTSC (1953) color profile maps to, and it shouldn't be used. For standard-definition NTSC television, reach for one of the SDTV NTSC color profiles instead.

Pick a profile — for input, output, or simulation — and the motion-picture film profiles stay hidden unless your footage is Cineon footage or you check Show All Available profiles. With Cineon footage, the reverse holds: only the motion-picture film profiles show up, unless you check Show All Available Profiles.
