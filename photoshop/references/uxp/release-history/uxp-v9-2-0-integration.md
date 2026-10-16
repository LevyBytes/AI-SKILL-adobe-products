# UXP v9.2.0 Integration

> ### New
>
> - System Sleep/Awake Events: Plugin JavaScript now gets notifications when the system sleeps or wakes, giving features such as video playback more control.
>
> ```javascript
> window.addEventListener("awake", () => {
>   console.log("System is awake");
> });
> window.addEventListener("sleep", () => {
>   console.log("System is sleeping");
> });
> ```
