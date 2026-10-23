# Interaction Callback Functions - Parameter Checkout vs. Param Zero

Within the Effect Control (and Composition) panel, effects run against an image in sequence, from 0 through n.

What effect[n-1] produces becomes effect[n]'s input, that is, its param[0].

By contrast, a normal effect that checks out a layer through `PF_CHECKOUT_PARAM` gets the raw, un-effected source layer no matter where it sits in the order.

A SmartFX effect, though, sees previous effects already applied when it checks out its input parameter (params[0]).
