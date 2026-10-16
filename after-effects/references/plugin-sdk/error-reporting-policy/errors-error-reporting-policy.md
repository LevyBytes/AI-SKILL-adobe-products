# Errors — Error Reporting Policy

A uniform error-handling policy governs After Effects, and you're expected to follow it.

Hit an error inside your plug-in's code, and you must surface it to the user right then — ahead of handing control back to After Effects.

Any operating-system errors that crop up while your plug-in runs are treated by After Effects as belonging to you.

When a callback function of ours returns an error code to you, relay it onward to After Effects, since the reporting on our side is already done.

After Effects never surfaces out-of-memory errors. Likewise, all error reporting is muted throughout RAM preview and whenever After Effects runs in -noui mode.

Reporting an error from inside a plug-in means setting `PF_OutFlag_DISPLAY_ERROR_MESSAGE` and writing the error description into `PF_OutData`>return_msg.

That step logs your error in the render log and heads off system hangs during renders driven by a render engine or by scripting.
