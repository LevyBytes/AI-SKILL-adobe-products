# Tips & Tricks — Sampling Pixels At (x,y)

There are times you don't want to walk every pixel and instead need to jump straight to a particular offset inside the input frame. The snippet below shows one approach to reading the pixel at a chosen (x,y) spot; writing to that same spot would look much the same.

The caller supplies an allocated world of the matching pixel depth and coordinates within its width and height. These helpers return a borrowed pixel pointer; they do not allocate or bounds-check the world.

```cpp
#include <cassert>
#include "AE_Effect.h"

PF_Pixel *sampleIntegral32(PF_EffectWorld &def, int x, int y){
    return (PF_Pixel*)((char*)def.data +
        (y * def.rowbytes) +
        (x * sizeof(PF_Pixel)));
}

PF_Pixel16 *sampleIntegral64(PF_EffectWorld &def, int x, int y){
    assert(PF_WORLD_IS_DEEP(&def));
    return (PF_Pixel16*)((char*)def.data +
        (y * def.rowbytes) +
        (x * sizeof(PF_Pixel16)));
}
```

Thanks go to Paul Miller for fielding this one.
