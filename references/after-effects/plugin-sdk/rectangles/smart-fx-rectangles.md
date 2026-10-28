# SmartFX - Rectangles

Both result rectangles must be set precisely by the effect. Because After Effects' caching depends on them, wrong values can trigger no end of trouble. Should the plug-in hand back a result_rect smaller than the request_rect, After Effects reads the pixels that lie inside request_rect but outside result_rect as empty.

In the same way, max_result_rect has to take in every non-zero pixel; the effect is never asked to render past that region. Any pixels beyond this rectangle will never appear on screen.

Output rectangles of the wrong size bring their own trouble. Make these rectangles too large and performance suffers.

Not only do scads of empty pixels end up cached (stealing precious memory from the application), but the effect may get asked needlessly to render vast empty stretches. That is exactly why max_result_rect has to be calculated correctly instead of being set to some arbitrarily big size.

result_rect and max_result_rect alike may shift with the effect's parameters, the current time, and so forth; they hold only for that particular invocation of the effect. max_result_rect, however, must not hinge on the specific render request. Whatever slice of the output After Effects asks for, it has to stay the same.

Returning an empty result_rect is legitimate when the request_rect fails to intersect the effect's output pixels, since nothing needs rendering.

After Effects may likewise call the effect with an empty request_rect, in which case the effect is only being asked to work out the max_result_rect.

preserve_rgb_of_zero_alpha can sway how the bounds get computed (both result_rect and max_result_rect) and has to be honored whenever the effect acts differently based on that setting.
