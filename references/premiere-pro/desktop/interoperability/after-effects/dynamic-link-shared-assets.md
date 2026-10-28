# Share assets between After Effects and Premiere using Dynamic Link

Dynamic Link enables real-time work between Adobe Premiere and After Effects without rendering.

Before you create a Dynamic Link, confirm that Adobe Premiere and Adobe After Effects use the same major version. Dynamic Link also requires matching major versions when Adobe Character Animator is involved.

Dynamic Link keeps media assets shared continuously between After Effects and Premiere, removing the render step. You can move work between the applications by copying content from After Effects to Premiere or copying Premiere clips into After Effects, depending on where the next edits belong. An After Effects composition can also be imported into Premiere, and Premiere can create a dynamically linked composition directly, just as it imports other assets. For tighter integration, replace selected clips with a dynamically linked After Effects composition to create a live connection between the two applications. Each project stores its own dynamic links, and linked assets are identifiable by unique icons and label colors. A linked clip may point to a complex source composition, so changes can require extra processing in After Effects before Premiere displays the update. Previewing and playback can therefore lag. To control performance, temporarily take a dynamically linked composition offline and relink it later when needed. During the edit, you can also revise a dynamically linked composition in After Effects and have Premiere update automatically. If the linked item is no longer needed, delete the dynamically linked composition or clip without changing the original source files. To reduce playback delays, use one of these options:

- Take the linked composition offline.
- Disable a linked clip so the composition is not referenced temporarily.
- Render the composition, then substitute the rendered file for the dynamically linked composition.

Premiere clips that use resource-heavy VFX footage may not play back smoothly. When a clip plays incorrectly, use Clip > Render and Replace to improve performance. For frequent work with complex source compositions, install additional RAM or use a faster CPU.

Note

A linked After Effects composition does not support multiprocessing with the Render Multiple Frames Simultaneously feature.
