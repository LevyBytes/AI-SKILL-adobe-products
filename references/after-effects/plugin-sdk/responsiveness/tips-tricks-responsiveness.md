# Tips & Tricks - Responsiveness

Lean on `PF_ABORT`() and `PF_PROGRESS`() from Interaction Callbacks to keep your plug-ins feeling snappy.

Every one of our effects gets checked for whether it can be interrupted; it's remarkable how impatient users become while your sluggish effect chews through a film-resolution sequence!

You get this for free inside After Effects' iteration functions, so there's no need to invoke those calls yourself from your pixel-processing routines.
