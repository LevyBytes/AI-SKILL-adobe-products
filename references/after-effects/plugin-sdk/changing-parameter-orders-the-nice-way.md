# Changing Parameter Orders, the Nice Way

You can grow or shrink a plug-in's parameter set across versions without making users re-apply every existing instance to pick up the change. Pulling this off does take some forethought on your end, but both your users and your support team will thank you for putting in that work.

Start by building a parameter array index. While handling `PF_Cmd_PARAM_SETUP`, hand each parameter an index value through a plain enumeration as you add it. Whatever order you enumerate in matches the order the parameters get registered during `PF_Cmd_PARAM_SETUP`, and that registration order is exactly the order they show up in the Effect Control and Timeline panels.

Next, set up a separate enumeration for disk IDs. You're free to tack new entries onto the tail of this enumeration, but you must never shuffle the existing order. This list also doesn't have to line up with the parameter array index in any way. Keep disk IDs somewhere between 1 and 9999. Wondering why zero is off-limits? There's a story behind that...

Back in the early, untamed era of writing After Effects plug-ins, a lot of developers simply skipped assigning IDs. After Effects caught on and started inspecting the ID of the first parameter an effect added; a zero there was taken as a sign the programmer had skipped IDs altogether, so After Effects stepped in and handed each parameter an ID itself. The logic holds up fine as long as you never assign param IDs yourself, but it falls apart the moment you start your own numbering at NULL. That's the reason.

Set the disk ID in the `PF_ParamDef`.uu.id field prior to your `PF_ADD_PARAM`() call. Leave it blank and After Effects just numbers the parameters in sequence from 1. That ID rides along with the parameter's data whenever the project is saved. Thanks to this, even after your "Foobarocity" slider moves from second to fourth in the passing order, After Effects still recognizes it as the very same parameter.

Removing a parameter without triggering re-application means deleting both the code that builds it and its slot in the parameter array index list — but leave its disk ID list entry alone. Adding one means inserting an entry at the right spot in the parameter array indices list, writing the parameter creation code, and appending its disk ID to the end of the disk ID enumeration. Reordering means rearranging the parameter array index list and shuffling the parameter creation code to match.
