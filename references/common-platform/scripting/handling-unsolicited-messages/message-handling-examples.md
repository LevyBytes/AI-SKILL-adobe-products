# Message-handling examples

The first example illustrates the default way unsolicited messages from other applications are handled. This short handler runs the message data as a script and returns the execution result:

```javascript
BridgeTalk.onReceive = function (message) {
    return eval( message.body );
}
```

The next example illustrates extending the receive handler for an additional message type:

```javascript
BridgeTalk.onReceive = function (message) {
    switch (message.type) {
        case "Data":
            return processData( message );
            break;
        default: //"ExtendScript"
            return eval( mesage.body );
    }
}
```
