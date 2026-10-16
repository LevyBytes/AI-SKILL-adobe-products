# Sample Projects — Sample Project Descriptions

| Project | Description |
| --- | --- |
| AEGPs | An AEGP plugs straight into the menus of After Effects along with other spots in its interface. Exactly where a given AEGP turns up in the UI is spelled out further down. |
| Artie | Rendering of every 3D layer within a given composition gets handed over to Artie the Artisan. The same API powers our own internal 3D renderers, so it carries a great deal of complexity and reveals plenty of unspoken detail about how the After Effects rendering pipeline operates. There's no reason to touch this sample unless you have a strong motive for swapping out how After Effects does 3D rendering. Artisans appear in Composition > Composition Settings, in the 3D Renderer tab, in the Renderer drop-down. |
| Easy Cheese | Living on the Animation > Keyframe Assistant submenu, this keyframer demonstrates how to work with assorted keyframe attributes — and does so in a way that bears an eerie resemblance to our shipping plug-in, Easy Ease... |
| FBIO | Puts the After Effects Input/Output (AEIO) API through its paces. It resembles the IO sample but works with the frame-based .ffk file format.<br><br>Note<br><br>A Premiere Pro Importers is the route we'd point you to these days instead. |
| Grabba | Pulls frames — formatted however the plug-in asks for them — out of any composition in the project. |
| IO | Puts the After Effects Input/Output (AEIO) API through its paces. It works with the made-up .fak file format and fields every After Effects request to pull data out of or write data into such files.<br><br>Note<br><br>For new work, the path we suggest now is a Premiere Pro Importers. |
| Mangler | A keyframer that, much like our own, illustrates how an ADM palette is used. |
| Panelator | Builds a panel you can dock right alongside the standard ones.<br><br>Note<br><br>Going this route to build a panel is considerably more effort than the HTML5 Panel SDK demands.<br><br>We recommend starting with that SDK instead. |
| Persisto | Demonstrates reading data from and writing data to the After Effects preferences file. |
| ProjDumper | Writes out a text file that represents every element within an After Effects project. |
| Projector | Brings in the (made-up) .sdk file format and builds a project through AEGP API calls. Any time you're stuck on how to read or write some attribute of a project element, this is the first place to look.<br><br>Note<br><br>A handful of paths are hardcoded inside Projector.h. Fail to point them at real media on disk and you WILL hit errors when this plug-in runs. The fix is yours, not ours; change them! |
| QueueBert | Say it "Cue-BARE!" — QueueBert works over every facet of render queue items along with the output modules tied to them. |
| Streamie | Works on streams of both the dynamic and the fixed variety. |
| Sweetie | By way of the PICA (or "Suite Pea") API, Sweetie hands other plug-ins a function Suite. Should you be building several plug-ins that all draw on one image processing library, a suite like this is how you'd expose that library's functionality. |
| Text Twiddler | Works over text layers along with what's inside them. |
| Effects | Every effect shows up both in the Effect menu and on the Effects & Presets panel. |
| Checkout | At a time you specify, this pulls a frame of input from a different layer out of After Effects' frame cache. For any effect that takes layer parameters, this matters a great deal. Premiere Pro compatible. |
| Convolutrix | Puts our image convolution callbacks to work. Premiere Pro compatible. |
| Gamma Table | Demonstrates handling sequence data and puts our iteration callbacks to use. Out of nostalgia we've left this one sample in C; thanks to its dependence on version 3.x API features, it also runs in plenty of third-party plug-in hosts. |
| Paramarama | Puts oddball param types — the ones the other sample leaves out — through their paces. Premiere Pro compatible. |
| PathMaster | Demonstrates how an effect reaches paths. |
| Portable | Demonstrates spotting and adapting to a number of different plug-in hosts. Premiere Pro compatible. |
| Resizer | Resizer does just what its name says to the output buffer — it resizes it. That comes in handy for effects such as glows and drop shadows, which would otherwise get clipped at the layer's edges without a larger output buffer. Premiere Pro compatible. |
| SDK Backwards | Plays a layer's audio in reverse and blends it with a sine wave you can keyframe. |
| SDK Noise | Premiere Pro compatible; it shows off 32-bit and YUV rendering in Premiere Pro. |
| Shifter | Slides an image about inside the output buffer while putting our subpixel sampling and transform_world functions through their paces. |
| SmartyPants | Demonstrates the SmartFX API, which support for floating point pixels requires. |
| Transformer | Puts our image transformation callbacks through their paces. |
| Effect Template |  |
| Skeleton | When you set out to build an effect, Skeleton is where you begin. Premiere Pro compatible. |
| Effects with Custom UI |  |
| CCU | Builds a custom interface inside the composition and layer windows, with support for pixel aspect ratio and downsample ratios. Premiere Pro compatible. |
| ColorGrid | Demonstrates working with arbitrary data type parameters. It also sports a tidy custom UI. Premiere Pro compatible. |
| Custom ECW UI | Puts a thoroughly dull custom interface into the effect controls window and demonstrates reacting to a wide range of UI events. |
| Histogrid | New for CC 2015 (13.5). It illustrates how, in CC 2015 and later, custom UI can reach asynchronously-rendered upstream frames for lightweight processing. The effect derives a sampled 10x10 color grid from the upstream frame and shows a preview of it. At render time a finer grid is computed and applied to alter the output image, producing a blend of a color grid with the original image. |
| Supervisor | Demonstrates steering parameters — their values and their UI alike — according to what other parameters hold. Premiere Pro compatible. |
| BlitHook |  |
| EMP | External Monitor Preview. Treat this as your jumping-off point for adding the ability to push video out from the composition panel to video hardware. |
