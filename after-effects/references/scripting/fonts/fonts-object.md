# Fonts object

app.fonts

Note

This functionality was added in After Effects 24.0

### Description

The Fonts objects surfaces details about the font ecosystem as it currently stands on your device.

For every real font it has discovered across the font ecosystem, After Effects keeps an internal font proxy. Whenever fonts come and go in that ecosystem, these internal proxies track the change, getting added or dropped to match.

What we expose through the proxy Font object is whatever data the font files themselves make available — and naturally that differs by font technology and font type. There is simply no way to catalog here every quirky variation and complication this produces; broadly, be wary of presuming that one font type or technology behaves and carries properties identical to any other — the answer, as ever, is "it depends".

Because a Font object is only a soft reference to one of these internal font proxies, it cannot on its own keep that proxy alive. Consequently, once the internal font proxy goes away, any property access on the referencing Font object raises an invalid exception.

When a project opens — and in a handful of other cases — the font named in the persisted data may turn out to be absent from the present font ecosystem. Then an internal font proxy gets built holding the wanted properties, such as the PostScript name, and returns true for isSubstitute. Some real font underneath is chosen to back this internal proxy, but which one stays hidden and you cannot steer the choice.

As the open continues with these created substitute fonts, the application tries to sync matching fonts down from Creative Cloud Adobe Fonts. That work runs asynchronously, so the project will typically finish opening and become usable before any fonts arrive from Adobe Fonts. Install timing can vary from font to font depending on how many are being synced. This attempt cannot be switched off.

Once the font ecosystem changes through the installation of new real fonts, the remaining substitute-font list is re-examined to find whether a real font now qualifies as a valid stand-in — for the moment matching only on the PostScript name — and when one turns up, every project reference to the substitute is swapped automatically for the freshly installed font.
