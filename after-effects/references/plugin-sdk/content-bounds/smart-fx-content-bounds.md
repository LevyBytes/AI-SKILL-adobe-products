# SmartFX — Content Bounds

A node's content bounds are the biggest possible result rectangle a PreRender call could ever return. Under no circumstances can it shift with the current render request or anything besides; compute it with care, not casually.

Treat this calculation as critical. It is a built-in property of the node along with its inputs, locked in the moment the graph gets built. Break it and you will, in all likelihood, trigger every kind of trouble throughout assorted stretches of code.
