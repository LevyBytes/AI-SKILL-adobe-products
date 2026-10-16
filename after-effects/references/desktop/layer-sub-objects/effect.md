# effect(name)

Return type: Effect.

Argument type: name is a String.

After Effects looks the effect up by its name in the Effect Controls panel. That name may be the default one or one you assigned. When two effects carry the same name, the one nearest the top of the Effect Controls panel takes precedence. Example:

effect("Fast Blur")("Blurriness")

### effect(index)

Return type: Effect.

Argument type: index is a Number.

After Effects looks the effect up by its index in the Effect Controls panel, beginning at 1 and counting downward from the top.
