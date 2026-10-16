# Changing Extension Content Size

Modal and modeless extension content size can be changed in every Adobe application that supports CEP. Panel HTML extension size changes are not supported in Premiere Pro, Prelude, After Effects, or Audition.

Signature: `CSInterface.prototype.resizeContent = function(width, height)`.

The width and height arguments should be unsigned integers. Passing other types leaves the function with no effect.

Manifest-defined extension min/max size constraints still apply and have priority. If the requested size falls outside that range, CEP uses the matching minimum or maximum bound instead. A panel docked with other panels may still fail to resize as expected even when the requested size is inside those limits; that restriction comes from host applications rather than CEP.
