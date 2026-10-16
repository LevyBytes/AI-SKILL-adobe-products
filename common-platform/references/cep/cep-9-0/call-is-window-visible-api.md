# Call isWindowVisible API

- Call the `isWindowVisible` JS interface. Dialog and panel extensions can both access this API, but modal and modeless dialog extensions always return true, while invisible extensions always return false.
