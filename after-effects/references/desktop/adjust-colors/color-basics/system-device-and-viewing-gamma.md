# System gamma, device gamma, and the difference between scene and viewing environment

Across a whole system — from capture, through production, to display in the viewing environment — the gamma value equals the product of the gamma values applied at each phase. That product isn't invariably 1.0, which is what you'd get if the encoding operations precisely matched (inverted) the decoding ones. A system gamma other than 1.0 arises partly because the lighting in which a scene is captured frequently differs from the lighting in which it is watched. (Bear in mind that a movie is usually viewed in a dim setting, whereas its scenes generally aren't shot in one.)

To illustrate, an HD camera's device gamma sits near 1/1.9 while an HD display's device gamma sits near 2.2. The product of those figures is a system gamma of roughly 1.15, well suited to the somewhat dim television viewing conditions of a typical living room. Motion picture production runs a far higher system gamma (roughly 1.5–2.5) to suit the darker viewing environment of a movie theater. Film negative gamma lands around 1/1.7, and projection film gamma around 3–4.

A color profile is called scene-referred when its tone-response curve rests on the conditions of the typical scene. A color profile is called output-referred when its tone-response curve rests on the conditions of the typical viewing environment.

When color management is in use, After Effects by default adjusts image contrast automatically as it converts between scene-referred color profiles and output-referred color profiles. The gamma values laid out in the HDTV video standard drive this automatic conversion (image state adjustment).

Switch off this automatic color transformation by deselecting Compensate for scene-referred Profiles in the Project Settings dialog box.

## More like this

- Adjust exposure for previews
- Exposure effect
- Broadcast-safe colors
- Color management
