# Errors

Without exception — every single time — hand a `PF_Err` back from main(). Whatever errors arise, your plug-in is obligated to relay them to After Effects.

Passing along any error you receive from callbacks and PICA suites to After Effects is critical, the lone exception being errors you've already dealt with yourself.

Stay disciplined about reporting the correct error code and releasing whatever memory you've claimed.

No joke. We mean it.
