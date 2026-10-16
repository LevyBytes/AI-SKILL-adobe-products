# Color management and Dynamic Link

With color management turned on for an After Effects project, any compositions seen across Dynamic Link get transformed by way of the Rec. 709 color profile. Doing so heads off color or gamma shifts in how those compositions look once they reach Premiere and Adobe Media Encoder.

Dynamic Link always takes every incoming frame to be in Rec. 709. As the final step before images hand off to Dynamic Link for Premiere or Adobe Media Encoder, a color transformation gets applied to the composition. That brings the composition image into line with the color space Dynamic Link relies on.
