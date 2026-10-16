# Example: Setting up a target to send multiple responses

This example combines message-body evaluation with multiple responses. It prepares a handler for a message like the one shown in the following example.

In the target application, Adobe Bridge, a static onReceive method enables a new message type named iterator. For an iterator message, message.body is expected to reference the iteration variable i inside the script, producing a distinct result on each while-loop pass. sendResult() sends every result back to the sending application. After message.body completes its work, it sets a flag that stops iteration:

```javascript
// Code for processing the message and sending intermediate responses
// in the target application (Adobe Bridge)
BridgeTalk.onReceive = function (message){
    switch (message.type) {
        case "iterator":
            done = false;
            i = 0;
            while (!done) {
                // the message.body uses "i" to produce different results
                // for each execution of the message.
                // when done, the message.body sets "done" to `true`
                // so this onReceive method breaks out of the loop.
                message.sendResult(eval(message.body));
                i++;
            }
            break;
        default: //"ExtendScript"
            return eval( message.body );
    }
}
```
