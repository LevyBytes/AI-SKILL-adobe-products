# Interaction Callback Functions - Parameter Checkout And Re-Entrancy

Re-entrant behavior can arise from plug-ins that check out layers at differing times. Picture the Checkout sample plug-in applied to a layer inside composition B, where B is then pre-composed into composition A and Checkout is applied there too.

Rendering composition A sends `PF_Cmd_RENDER` to Checkout[A], and during that render it checks out a layer — composition B — at some time other than the present one.

To supply that checked-out layer, After Effects then issues `PF_Cmd_RENDER` to Checkout[B].

Presto, recursion!

Any effect of yours that checks out parameters has to cope gracefully with re-entrant render requests.

Steer clear of globals and don't read or write static variables...though of course you had no intention of doing that, right?
