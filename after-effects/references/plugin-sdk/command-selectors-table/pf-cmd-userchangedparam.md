# PF_Cmd_USER_CHANGED_PARAM

`PF_Cmd_USER_CHANGED_PARAM`

A parameter value was altered by the user. This command reaches you solely when you've turned on the `PF_ParamFlag_SUPERVISE` flag. You adjust the parameter to govern values, or let one parameter's value shape others. Several different actions can modify a parameter. While the user is changing the param that fired `PF_Cmd_USER_CHANGED_PARAM`, in_data.current_time holds the time of the frame they're viewing in the UI (under the hood, the comp's current time mapped into layer time). That's likewise the time of any keyframe added on its own — provided none exists yet and the stopwatch is on. Usually it lines up with the value handed to the `PF_Cmd_RENDER` that comes right after (caps lock being down is the exception), though not always — another open comp window might trigger a render at some other time because of the changed param.
