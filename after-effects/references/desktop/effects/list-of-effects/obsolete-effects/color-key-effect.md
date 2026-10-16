# Color Key effect

See Keying introduction and resources for general background on keying, along with links to tutorials and further material.

Every image pixel close to a chosen key color gets keyed out by the Color Key effect, which touches nothing but the layer's alpha channel.

This effect works with 8-bpc and 16-bpc color.

Pick the layer you want partly transparent, then go to Effect > Obsolete > Color Key.

To name a color, click the Key Color swatch so the Color dialog box opens, then choose one there.

Alternatively, grab the eyedropper and click any color on the screen.

3. Set how wide a color band gets keyed out by dragging the Color Tolerance slider. Keep it low and only colors hugging the key color drop out; raise it and a broader spread of color goes.
4. Tune the keyed region's border thickness with the Edge Thin slider. Push it positive to expand the mask and grow the transparent zone; push it negative to contract the mask and shrink that zone.
5. Decide how soft the edge looks by dragging the Edge Feather slider. Bigger numbers soften the edge but cost more render time.
