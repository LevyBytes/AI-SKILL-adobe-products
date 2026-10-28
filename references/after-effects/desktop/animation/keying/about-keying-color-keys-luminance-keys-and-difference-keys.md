# About keying: color keys, luminance keys, and difference keys

Setting transparency according to a specific color value or luminance value within an image is what keying is. Key out a value and every pixel whose color or luminance value sits close to it turns transparent.

Swapping in a new background becomes simple with keying, which pays off most when your objects are too intricate to mask with ease. Lay a keyed layer atop another layer and you get a composite: the background peeks through everywhere the keyed layer is transparent.

Composites built through keying turn up often in movies—think of an actor seeming to hang from a helicopter or drift through outer space. Pulling that off means filming the actor in a fitting pose in front of a solid-color background screen. That background color is then keyed out and the actor's scene is composited over a fresh background.

Keying out a background of one steady color often goes by the name bluescreening or greenscreening, though blue or green isn't required; any solid color works as a background. For shooting non-human subjects—miniature models of cars and spaceships, say—red screens get plenty of use. Magenta screens have served keying work on certain feature films celebrated for their visual effects. This style of keying also answers to color keying and chroma keying.

The way difference keying operates sets it apart from color keying. Transparency in difference keying is defined against a particular baseline background image. Rather than keying out a single-color screen, you can key out any arbitrary background. Difference keying calls for at least one frame holding nothing but the background; the rest of the frames get compared against it, and the background pixels turn transparent, leaving the foreground objects behind. In practice, noise, grain, and other small variations can render difference keying quite tricky to pull off.
