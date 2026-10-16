# Could the data be initialized before you execute your code (e.g. a lookup table, a const variable)?

These contrasting threading excerpts use application-supplied `DoComputation` operations. Keep the explicitly unsafe examples paired with their correction; do not combine their duplicate function definitions into one translation unit.

```cpp
// Example of a non Thread-Safe code

// Many places in the code need to read this table but won't be writing to it
static int state_with_initializer[64];
static bool state_was_initialized = false;

void InitializeState() {
    for (int i = 0; i < 64; ++i) {
        state_with_initializer[i] = i * i;
    }
    state_was_initialized = true;
}

void Main() {
    if (!state_was_initialized) {
        InitializeState();
    }
    DoComputation(state_with_initializer);
}
```

Turn it const, or swap it for a macro:

These contrasting threading excerpts use application-supplied `DoComputation` operations. Keep the explicitly unsafe examples paired with their correction; do not combine their duplicate function definitions into one translation unit.

```cpp
#include <array>

std::array<int, 64> InitializeState() {
    std::array<int, 64> temp;

    for (int i = 0; i < 64; ++i) {
        temp[i] = i * i;
    }
    return temp;
}

// We can fix the above code by making this table a const and initialize it before using it
static const std::array<int, 64> state_with_initializer = InitializeState();

void Main() {
    DoComputation(state_with_initializer);
}
```
