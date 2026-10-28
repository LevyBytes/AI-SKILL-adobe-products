# Modify controls

Which color attributes the Colorama effect reworks is set by the Modify controls. For a delicate touch-up of images, pick the same color attribute for both Input Phase and Modify. Choosing Hue from both menus, for instance, simply adjusts Hue.

Modify

Which color attribute to modify.

Modify Alpha

Reworks alpha channel values.

Note

Apply Colorama to a layer carrying an alpha channel while the Output Cycle holds no alpha data, and the layer's anti-aliased edges may turn pixelated. To smooth those edges, turn off Modify Alpha. When Modify Alpha is on and the Output Cycle does hold alpha data, the output shifts even if you've picked None from the Modify menu. Through this approach, you can tune just the alpha channel's levels without disturbing the RGB data.

Change Empty Pixels

The Colorama effect's reach spreads to transparent pixels. (This only works when Modify Alpha is on.)
