# Job lifecycle

Lifecycle order is useful when choosing status-handling branches:

```text
1. Job Submitted
   |
2. pending -> queued; start has not begun
   |
3. running -> processing is active
   |
4. succeeded -> completed without errors
   OR
4. failed -> errors stopped the job
```

**Typical Timing:**

- Simple operations (auto tone, auto straighten): generally complete in 5-15 seconds
- Complex operations (actions, composites): often take 15-60 seconds
- Large files or multiple operations: may run for 60+ seconds
