# Choose a Color Engine

Color information inside a digital asset like an image or video is handled by the Color Engine in After Effects. For color conversion, color space management, storing color data, and color correction, it draws on a color management system such as the International Color Consortium (ICC) profile standard. Leaning on a Color Engine keeps color reproduction consistent and accurate across varied devices and file formats.

Picking a Color Engine is what flips color management on. From there you can name distinct color spaces for footage (Media Color Space) or for render queue items (Output Color Space). Where that named space differs from the Working Color Space, color values get converted from the one into the other.

Adobe color managed

Choose Adobe color managed and the Adobe Color Engine (ACE) leans on the International Color Consortium (ICC) profile standard to define and store color data and to convert among color spaces — RGB, CMYK, and plenty more.

Choosing the Color Engines as Adobe color managed.

OCIO color managed

Select OCIO color managed and Open ColoriO-based color transforms come into play. ACE 2 is the OCIO Configuration that's selected, and the Custom option under OCIO Configuration lets you load a configuration of your own. Learn more about OpenColorIO and ACES color management.

Choosing the Color Engines as OCIO color managed.
