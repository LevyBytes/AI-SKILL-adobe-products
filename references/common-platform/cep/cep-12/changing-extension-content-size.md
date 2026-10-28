# Changing Extension Content Size

Modal and modeless extension content resizing works in all Adobe applications that support CEP. Panel HTML extension resizing is not supported in Premiere Pro, Prelude, After Effects, or Audition.

Signature: `CSInterface.prototype.resizeContent = function(width, height)`.

The width and height parameters must be unsigned integers. If other parameter types are passed, the function takes no action.

The min/max size constraints from the manifest file still apply and take precedence. A requested size outside the min/max range is clamped to the min or max bounds. When a panel is docked with other panels, it may still fail to resize as expected even if the requested dimensions satisfy those constraints. Host applications impose that restriction; CEP does not.
