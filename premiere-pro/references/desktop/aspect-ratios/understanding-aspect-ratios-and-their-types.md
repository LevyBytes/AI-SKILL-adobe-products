# Understanding aspect ratios and their types

An aspect ratio expresses width compared with height. Video frames and still-image frames use a frame aspect ratio, while the pixels inside those frames use a pixel aspect ratio, also called PAR. Recording formats can use different ratios; for television video, common frame aspect ratios include 4:3 and 16:9.

When you create a Premiere project, its frame aspect and pixel aspect are established. Those project ratios cannot be changed afterward, but individual sequences can use a different aspect ratio. The same project can also contain assets that were created with other aspect ratios.

Premiere attempts to compensate automatically for the pixel aspect ratio in source files. If an asset still looks distorted, set its pixel aspect ratio manually. Correct pixel aspect interpretation should come before frame aspect correction, because a wrongly interpreted pixel aspect ratio can make the frame aspect ratio appear wrong.
