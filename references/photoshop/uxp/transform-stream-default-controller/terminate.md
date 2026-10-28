# terminate()

Completes the controlled transform stream's readable side and puts its writable side in error.
Use it when the transformer only has to consume part of the data written to the writable side.
