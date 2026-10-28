# terminate()

Finishes the readable side and puts the writable side of the controlled transform stream into an error state.
Use this when a transformer only has to consume part of the chunks written to the writable side.
