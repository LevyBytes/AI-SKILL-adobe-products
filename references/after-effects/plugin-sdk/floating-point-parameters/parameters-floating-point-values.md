# Parameters & Floating Point Values

Here's a small confession: for years we handed you 8-bit color values while quietly keeping floating-point representations internally the whole time.

Indeed, even where colors ran over-bright, all you ever heard from us was '255, 255, 255'. Sure, that was the truth.

We just can't keep up the pretense any longer! Hand this function a color parameter — the kind After Effects places in your effect's parameter array — and it gives back a floating-point representation that carries any high dynamic range component along with it.
