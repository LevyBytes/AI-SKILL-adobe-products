# Freezing property values with posterizeTime

Starting with After Effects 16.0, calling posterizeTime(0) locks a property's value to time 0 within the composition, and that behavior holds for both the JavaScript and Legacy ExtendScript engines.

Note

Bear in mind this breaks backward compatibility and can yield surprises in After Effects builds older than 16.0.
