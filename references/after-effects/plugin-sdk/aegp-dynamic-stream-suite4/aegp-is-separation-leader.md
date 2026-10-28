# AEGP_IsSeparationLeader

`AEGP_IsSeparationLeader`

Applies to leaf streams alone. Returns true when this stream is multidimensional and its dimensions are capable of being separated, even if they happen not to be separated at the moment.

Terminology: the stream eligible for separation is called a Leader, while a Follower is any one of the N automatic streams that map onto the Leader's N dimensions.

A Leader is not necessarily separated at all times; call AEGP_AreDimensionsSeparated to learn whether it is. As things stand in CS4, the layer's Position property is the sole stream that ever gets separated.

Don't bake that assumption into your code, since we expect to permit separation on additional streams down the road.

Suite argument declaration (not a standalone call):

```cpp
AEGP_IsSeparationLeader(
  AEGP_StreamRefH  streamH,
  A_Boolean        *leaderPB);
```
