# AEGP Suites - Dynamic Streams

Reaching into and editing paint and text streams is the job of `AEGP_DynamicStreamSuite`.

Before calling functions that only operate on certain stream types, use `AEGP_GetStreamGroupingType` and `AEGP_GetDynamicStreamFlags` to pin down what the stream is.

Bear in mind as well that Stream Suite calls will frequently handle dynamic streams just fine. By contrast, this suite holds only the functions that are particular to dynamic streams.
