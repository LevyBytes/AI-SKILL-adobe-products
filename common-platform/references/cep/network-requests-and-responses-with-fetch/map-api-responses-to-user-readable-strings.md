# Map API responses to user-readable strings

In the next step, the Dark Sky API JSON response provides an `.icon` property for the weather condition. Its `.icon` value is a kebob-case slug such as `"clear-day"`.

Create a constant that maps every possible slug to text a user can read:

```javascript
const weatherTypes = {
  "clear-day": "a clear day",
  "clear-night": "a clear night",
  rain: "raining",
  snow: "snowing",
  sleet: "sleeting",
  wind: "windy",
  fog: "foggy",
  cloudy: "cloudy",
  "partly-cloudy-day": "a partly cloudy day",
  "partly-cloudy-night": "a partly cloudy night",
};
```

With that mapping, an API value like `"clear-day"` can become a natural user-facing message such as `"It looks like it's a clear day."`.

The next step relies on this `weatherTypes` constant.
