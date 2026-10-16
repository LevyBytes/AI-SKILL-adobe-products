# Network requests and responses with Fetch

Many Creative Cloud app extensions need to communicate with web API services. Because CEP is built on Chromium Embedded Framework (CEF) and Node.js, an extension can issue network calls from inside the panel in whatever pattern fits the workflow.

This walkthrough shows a third-party API call, panel UI changes driven by that API response, and host-app creative asset updates based on the same response.

[Figure: weather panel ps](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme-assets/weather-panel-ps.png)

After completing the walkthrough, the result is a CEP extension for Photoshop and InDesign that:

1. Requests current weather from the Dark Sky API for a chosen city.
1. Shows panel text that reports the current weather to the user.
1. Provides a button the user can click to change the open asset dynamically according to the weather.
