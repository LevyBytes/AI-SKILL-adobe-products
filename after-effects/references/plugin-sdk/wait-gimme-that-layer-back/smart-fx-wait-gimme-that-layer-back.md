# SmartFX - Wait, Gimme That Layer Back!

With the checkout_id you used in PreRender, checkout_layer_pixels gets exactly one call. The number of checkouts in PreRender and the number in SmartRender must map one-to-one. When the layout of your code means you need a layer's pixels checked out repeatedly, the fix is simply to use several checkout_ids. Inside PreRender, call checkout_layer against that same layer using distinct, unique checkout_ids. Over in SmartRender, each checkout_layer_pixels call then draws on a different one of those checkout_ids.
