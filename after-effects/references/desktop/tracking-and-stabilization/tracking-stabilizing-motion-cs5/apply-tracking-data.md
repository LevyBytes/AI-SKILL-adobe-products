# Apply tracking data

With any Track Type setting besides Raw, you apply tracking data by clicking Apply once you've confirmed that the right target appears for Motion Target. For data from a Raw tracking operation, you instead copy keyframes from the trackers onto other properties, or wire properties together with expressions.

You're also free to tweak the Attach Point or Attach Point Offset property in the Timeline panel after tracking — handy when you're feeding the same tracking data to several targets that you want spread out around the tracked feature.

Note

- When the layer you're attaching has motion blur turned on, set the Shutter Phase value to -1/2 times the Shutter Angle value. That pairing centers the motion blur over the attach point; without it, the attached object can seem to run ahead of or trail behind whatever it's attached to.
- Another option is to apply the tracking data onto a null object layer, then parent the layer you want animated to that null object layer.
