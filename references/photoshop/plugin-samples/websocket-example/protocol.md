# Protocol

The protocol uses simple text messages. The plugin and server exchange these messages:

- Sent from the server to the plugin:
  - `text=string-to-display`: makes the plugin display the text that follows.
  - `err=error-to-display`: makes the plugin show a server error.
- Sent from the plugin to the server:
  - `echo=string-to-echo`: asks the server to reply with the requested string via the `text` command.
  - `rand=on`: asks the server to begin sending random numbers every quarter second.
  - `rand=off`: asks the server to stop the random-number stream.
  - `fast=on`: asks the server to send incrementing numbers quickly.
  - `fast=off`: asks the server to stop the incrementing-number stream.
  - `validate=received-messages`: asks the server to compare the messages it sent with `received-messages`. On a match, the response is `text=received everything ok`. Otherwise, the response is `text=missed messages`, and the server logs what it sent alongside what the plugin believes it received so the two can be compared.

Any other input generates an error message.
