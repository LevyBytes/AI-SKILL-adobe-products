# Errors caused by precomposing layers

When you precompose several layers together, any expression pointing at a property on one of those layers can break. The fix is to rewrite such expressions so they target the layer inside its new composition. Watch out especially for expressions written with thisComp rather than naming a composition outright.

Note

Several After Effects effects now take different arguments than older releases did. Where your existing expressions reference arguments by index number rather than by name, rewrite them to reference the arguments by name.
