# Color management and Mercury Transmit

Whatever color values reach the video monitor originate in the project's working color space. To preview video colors, set Working Color Space in the Project Settings dialog box to a value that lines up with the preview device's color space.

Color management does extend to video previews routed to an external monitor through Mercury Transmit. Learn more about previewing on an external video monitor.

Note

To manage colors for a dynamically linked composition or for video previews, build a fresh composition and nest yours inside it. Then apply the Color Profile Converter effect onto the nested composition, with Input Profile set to Project Working Space. For video previews, point the Output Profile at the color space of the video preview device.
