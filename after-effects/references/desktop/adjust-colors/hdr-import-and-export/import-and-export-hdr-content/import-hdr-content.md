# Import HDR content

On import, HDR content is now processed accurately by After Effects. The application detects high dynamic range (HDR) traits and keeps the brought-in material's full dynamic range, brightness, and color fidelity intact.

Build a composition, then pick Project Settings from the Project panel menu.

1. Ahead of importing the HDR content, set the project's Working Color Space from within Project Settings.
   Within the Color tab, verify that an HDR-compatible Working Color Space is chosen, for example Rec.2100 PQ.

2. Choosing Working Color Space is how the project's color environment gets defined.
   Bring in a file that carries CICP metadata — a Quicktime, PNG, or TIFF file with an ICC profile, for instance.

Certain variants of widespread color spaces declared through CICP might not register on their own. When the conversion to the Working Color Space you expected doesn't appear, right-click the footage > Interpret Footage > Main > Color and override the media space yourself with a fitting color space. An HLG or PQ variant is one option — pick one whose graphics white point you know lines up with your media.

3. Whenever the declared CICP escapes auto-detection, point the media space by hand at the right color space.
