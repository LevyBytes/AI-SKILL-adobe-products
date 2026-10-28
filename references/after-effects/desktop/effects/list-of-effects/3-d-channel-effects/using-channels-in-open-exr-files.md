# Using channels in OpenEXR files

Provided the channels carry tags, 3D Channel effects can tap the channels inside OpenEXR files, a depth channel among them. Some other formats, RPF for one, lock a fixed set of channels to always stand for particular scene properties; OpenEXR, by contrast, is just an open-ended bundle of channels with no built-in meaning. Red, green, blue, and alpha values stay tied to the reserved R, G, B, and A channels, but any other channel is free to carry whatever else you like. There's a file named OpenEXR_channel_map.txt you can use to bind channel names to values of a given type so other effects can read them. Drop that file in the same folder as the OpenEXR format plug-in, and the OpenEXR plug-in will draw on its contents to tag channels as it imports an OpenEXR file.

After Effects doesn't ship with an OpenEXR_channel_map.txt file, but the ProEXR package on the fnord software website includes one you can download. That sample OpenEXR_channel_map.txt file from the fnord software website ships with documentation explaining how it's used.

Bundled into the ProEXR package on the fnord software website is the ProEXR Comp Creator plug-in as well. From every channel in an OpenEXR file, this plug-in can spin up a layer. The layers might, for example, stand in for the output of a batch of render passes coming out of a 3D application.
