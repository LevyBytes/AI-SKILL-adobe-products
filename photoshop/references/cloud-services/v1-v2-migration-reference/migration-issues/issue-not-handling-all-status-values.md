# Issue: Not handling all status values

**Problem:** The code only distinguishes succeeded from failed.

Incorrect status handling: treating every status other than `succeeded` as a failure also rejects jobs still pending or running. Continue polling nonterminal statuses; handle terminal failures separately.

**Solution:** Cover every status value explicitly.

```javascript
switch (status) {
  case "succeeded":
    // Process result
    break;
  case "failed":
    // Handle error
    break;
  case "pending":
  case "running":
    // Continue polling
    break;
  default:
  // Unknown status
}
```
