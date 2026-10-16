# Tips & Tricks — How Deep Are My Pixels?

While events are being handled, the bit depth of the layer or layers under processing simply isn't exposed.

A workable substitute is to stash the most recently seen pixel depth inside your sequence data.

An even cleaner route: have your fixed and float slider parameters lean on the `PF_ValueDisplayFlags` set in their parameter definitions. Doing that makes the parameters' UI honor whatever the user has chosen for pixel display values.

There's also the option of inspecting your input world's depth while `PF_Cmd_RENDER` is running.
