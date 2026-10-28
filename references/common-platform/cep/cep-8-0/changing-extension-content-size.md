# Changing Extension Content Size

Modal and modeless extension content size can be changed in every Adobe application that supports CEP. Panel HTML extension resizing is not supported in Premiere Pro, Prelude, After Effects, or Audition.

Documented signature (call contract, not a function implementation):

`CSInterface.prototype.resizeContent = function(width, height)`

Both parameters, width and height, must be unsigned integers. With any other parameter type, the function takes no action.

Manifest-defined extension min/max size constraints still apply and take precedence. If the requested size falls outside the min/max size range, CEP uses the min or max bound instead. A docked panel may fail to resize as expected even when the requested size satisfies those constraints, because that limitation comes from host applications rather than CEP.
