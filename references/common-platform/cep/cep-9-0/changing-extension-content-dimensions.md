# Changing Extension Content Dimensions

All Adobe applications with CEP support can change modal and modeless extension content size. For panel HTML extensions, Premiere Pro, Prelude, After Effects, and Audition do not support resizing.

Signature: `CSInterface.prototype.resizeContent = function(width, height)`.

The width and height parameters must be unsigned integers. If other parameter types are supplied, the function takes no action.

Extension min/max size constraints from the manifest file still apply and have priority. If the requested size falls outside that min/max range, CEP uses the min or max bound instead. A docked panel can sometimes fail to resize as expected even when the requested size satisfies min and max constraints. That restriction comes from host applications, not from CEP.
