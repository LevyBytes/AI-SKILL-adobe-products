# Linear tone response: when gamma equals 1

Take any number to the power of 1 and you get that number back unchanged. Gamma of 1.0 captures how light behaves in the natural world, set apart from our nonlinear perceptual systems. When a system has gamma of 1.0, it is sometimes described as operating in linear light, whereas a system that encodes a gamma other than 1.0 to suit the human visual system is described as perceptual.

Once color management is enabled (by naming a working color space), linearizing that working color space lets you carry out every color operation in linear light. Sharing the primaries and white point of its nonlinear counterpart, a linearized color space simply has its tone response curve straightened into a line.

Note

Numerous compositing operations — blending colors with blending modes among them — gain from running in a linear color space. Work in a linear color space for the most natural, realistic color blending. Even without color management enabled, blending operations can still run at a gamma of 1.0. (See Linearize working space and enable linear blending.)
