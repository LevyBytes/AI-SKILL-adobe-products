# Output

```text
Start of execution
Greetings: Hello
End of execution
```

In this code, completion occurs after the last line runs. Once "End of execution" has executed, the script is no longer alive. That behavior is the normal JavaScript execution-stack pattern. If that model is unfamiliar, review the [execution stack](https://www.javascripttutorial.net/javascript-call-stack/).

**Pro tip**

During script debugging, place a breakpoint on the final statement when you need time to inspect the `console.logs` before script termination closes the debug window and clears them from view.

The script session also lines up with this same lifetime: each run creates its own separate session.

The same sample is entirely synchronous, so each operation runs one after another in order.

Asynchronous work changes that picture. An async operation normally completes later, and the current execution thread continues instead of waiting for it. For background on that distinction in JavaScript, see the [difference](https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/) article.

Because UXP scripts survive only until the final statement in the call stack is reached, they can end before later asynchronous work gets a chance to run. In practice, the runtime behaves as though the script should be synchronous unless you make it wait.

Real projects cannot always work that way. Network calls are asynchronous and can need several seconds before resolving, yet the script still has to pause for those operations somehow. The answer is `global await`, which lets asynchronous code be handled in a synchronous-looking flow. The next section covers that approach.
