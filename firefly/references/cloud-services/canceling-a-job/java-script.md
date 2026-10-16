# JavaScript

```javascript
async function cancelJob(cancelUrl) {
  const response = await axios.put(
    cancelUrl,
    {},
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    },
  );
  console.log("Job canceled:", response.status);
  return response.data;
}
```
