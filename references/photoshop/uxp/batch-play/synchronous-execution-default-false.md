# synchronousExecution (default: false)

When true, `batchPlay` blocks the whole scripting thread until it resolves and then returns the value or values. The DOM API uses this for property getters and setters because it can make code simpler.

JavaScript that calls `batchPlay` directly should avoid this keyword when practical and use the default promise-returning form instead.
