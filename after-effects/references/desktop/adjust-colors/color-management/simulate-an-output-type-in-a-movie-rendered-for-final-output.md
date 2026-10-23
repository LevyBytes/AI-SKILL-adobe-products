# Simulate an output type in a movie rendered for final output

Output-simulation color management covers previews only, yet rendering a movie whose look mimics a given output type is still on the table. You might, for example, render an HDTV movie that mimics a film look — handy in particular for turning out dailies during film work.

At the top of your composition, add a fresh adjustment layer via Layer > New > Adjustment Layer.

Onto that adjustment layer, apply the Color Profile Converter through Effect > Utility > Color Profile Converter.

Duplicate that effect with Edit > Duplicate.

Over in the Effect Controls panel, give the effect's first instance these option values:

Input Profile

Project Working Space

Output Profile

Whichever output you're simulating: a film printing density profile, for instance, like Kodak 5218/7218 Printing Density

Intent

Absolute Colorimetric

Over in the Effect Controls panel, give the effect's second instance these option values:

Input Profile

Whichever playback you're simulating: a theater preview profile, say

Output Profile

The output medium's color space: HDTV (Rec. 709), for one

Intent

Relative Colorimetric

To switch this kind of output simulation on and off, toggle the adjustment layer by selecting and deselecting its Video switch in the Timeline panel.
