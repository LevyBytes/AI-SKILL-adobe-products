# Export color profiles to Adobe Media Encoder

JPEG files that After Effects renders from a composition can have color profiles embedded in them by Adobe Media Encoder.

Switch color management on by naming a color working space profile in the Project Settings. Reach project settings via File > Project Settings.

Under the Color tab of the Project Settings dialog, pick Working Color Space and select a color working space off the drop-down list.

With a color working space named, send your composition to the Render Queue next. Add it through File > Export > Add to Render Queue.

Within the Render Queue panel, choose Output Module Settings.

Inside the Output Module Settings dialog, pick Main Options and switch the Format over to JPEG Sequence.

Once the format is set, choose Color, pick the Output Color Space, and switch on the Embed color space option.

Within the Render Queue panel, click the Queue In AME button

Up comes the composition in Adobe Media Encoder. There, set the Output Format to JPEG.

Note

Leave the Embed color space option off and Adobe Media Encoder embeds the HDTV (Rec. 709) profile.
