# Recording an Action Step Provided by a UXP Plugin

During recording in the Photoshop Actions panel, a UXP plugin can contribute an Action step with [`require('photoshop').action.recordAction`](functions/record-action.md). The saved step stores a function name plus an object containing the supplied data. On playback, that Action step calls the function with the recorded data.
