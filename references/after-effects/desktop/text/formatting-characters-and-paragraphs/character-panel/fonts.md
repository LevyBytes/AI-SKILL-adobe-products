# Fonts

Think of a font as one full collection of characters—letters, digits, and symbols alike—unified by a shared weight, width, and style. Beyond whatever fonts already sit in your operating system's usual install location, After Effects also reads font files kept in a dedicated local folder:

- Windows: Program Files\Common Files\Adobe\Fonts
- macOS: Library/Application Support/Adobe/Fonts

Drop a Type 1, TrueType, OpenType, or CID font into that local Fonts folder and it becomes visible only within Adobe applications.

Should a character's formatting call for a font your system lacks, After Effects swaps in a replacement and shows the absent font's name wrapped in brackets. This kind of substitution can crop up when a project authored on Windows is later opened on macOS, since the two platforms ship different default font sets.

Picking a font lets you choose the font family separately from its style.

- A font family (also called a typeface) groups together fonts built around one shared design—Times is one example.
- A font style is one variant of a single font inside that family—regular, bold, or italic, say. Which styles exist depends on the font itself. Lacking the style you're after, you can fall back on faux styles—software-simulated takes on bold, italic, superscript, subscript, all caps, and small caps. Where your machine holds several copies of one font, the name carries a trailing tag: (T1) for Type 1 fonts, (TT) for TrueType fonts, or (OT) for OpenType fonts.
- Type size in the layer is governed by the font size. After Effects measures fonts in pixels. Hold a text layer at 100% scale and its pixel figures line up one-to-one with the composition's pixels. Push that layer to 200% and the size looks twice as large—a 10 pixels font in the layer reads as 20 pixels in the composition. Continuous rasterization means the text stays crisp even as you raise the scale values.

Tip

- While picking fonts and styles from the Character panel menus, hit Enter (Windows) or Return (macOS) to confirm a choice, or tap Esc to back out without changing anything.
- Reach for Adobe Font Finder when you want to browse and search fonts by assorted traits.
