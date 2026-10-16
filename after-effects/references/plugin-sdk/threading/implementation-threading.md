# Implementation — Threading

Threading gets no support whatsoever in AEGP. The main thread has to do all the work, whether driven by a callback or by the idle hook.

A single call bucks that rule and is thread safe: `AEGP_CauseIdleRoutinesToBeCalled`().

That said, because SPBasicSuite isn't thread safe on its own, you'll have to squirrel away the function pointer back on the main thread.
