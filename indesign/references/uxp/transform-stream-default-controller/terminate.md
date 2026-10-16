# terminate()

Shuts the readable side while putting the writable side of the controlled transform stream into an error state.
Use this when a transformer only has to read part of the data written to the writable side.
