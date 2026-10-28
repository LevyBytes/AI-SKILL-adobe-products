# Speculative Preview when After Effects is idle

Once it has sat untouched for a defined interval, the application keeps rendering your compositions on its own, so the moment you return from a break the preview is queued up and ready. That idle threshold ships at 8 seconds. Reach these controls through After Effects > Preferences > Previews, where the Cache Frames When Idle section offers the choices below:

Cache Frames When Idle settings

Cache Frames When Idle settings

- Idle Delay Before Caching Starts - How long the program must stay idle before frame caching kicks off on its own. Default is set to 8 seconds.
- Cache Frames - Where the cached frames fall relative to the CTI.
- Cache Range - Adjusts which span of frames gets rendered during idle time.

- Cache Frames has the following options:
- From Current Time - Caching begins at the spot where the CTI sits.
- Around Current Time - Caching wraps the CTI, grabbing the frame just before and the one just after.
- From Start of Range - Caching kicks off at the front edge of whatever Cache Range you defined.
- Cache Range has the following options:
- Work Area - Every frame within the work area gets cached.
- Work Area Extended by Current Time - Starting at the CTI, frames are cached through to where the work area ends.
- Entire Duration - The comp's full length is cached.
