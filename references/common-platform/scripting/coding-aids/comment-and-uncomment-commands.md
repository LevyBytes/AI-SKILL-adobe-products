# Comment and uncomment commands

Edit > Comment or Uncomment Selection lets you temporarily take parts of a JavaScript program out of the execution path. The command toggles its effect. The first time it is used, it inserts the special comment sequence //~ at the beginning of any line that is fully or partly selected. Running the command again on such a selected line removes that comment marker.

Only comment markers inserted by this command are affected; markers already present in the selected lines are ignored. That behavior lets you remove and restore blocks of text that contain both code and comments.
