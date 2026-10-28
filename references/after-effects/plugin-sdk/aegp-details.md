# AEGP Details

When After Effects needs state preserved around functions that your AEGP invokes, such as an artisan rendering a frame or a keyframer adding and removing multiple keyframes from one stream, you call matching begin() and end() functions.

The begin call commonly returns an opaque identifier, or 'cookie', which must be passed into the functions being used. The end call disposes of that cookie correctly. For an example, see `AEGP_StartAddKeyframes`() under `AEGP_KeyframeSuite3`.
