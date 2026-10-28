# Issue: Invalid hosted storage period

**Problem:** Hosted storage `validityPeriod` is outside 60-86400 seconds.

**Error:** `validityPeriod must be between 60 and 86400 seconds`

**Solution:** Choose a value no lower than 60 (1 minute) and no higher than 86400 (24 hours).

```json
{
  "destination": { "validityPeriod": 3600 }
}
```
