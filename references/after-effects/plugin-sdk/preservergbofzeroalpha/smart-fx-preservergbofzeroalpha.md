# SmartFX - preserve_rgb_of_zero_alpha

preserve_rgb_of_zero_alpha plays two roles: as input it tells the effect what to render, and as output it describes the input the effect needs (handed along to the checkout call). Whenever an input request has preserve_rgb_of_zero_alpha set, the effect has to forward it recursively on its own checkouts, or else prior effects and masking will strip away the very pixels the effect means to reveal. Relying on this is frowned upon, even though CS3 (8.0) still supports it.
