# The data has to stay static/global not being a const and each thread needs to read and write from the most up-to-date state. (rare)

These contrasting threading excerpts use application-supplied `DoComputation` operations. Keep the explicitly unsafe examples paired with their correction; do not combine their duplicate function definitions into one translation unit.

```cpp
// This variable has to be static and not a const
// It also needs to be shared across several threads
static int every_thread_needs_latest_state;

void SetState(int new_state) {
    every_thread_needs_latest_state = new_state;
}

void UseState() {
    DoComputation(every_thread_needs_latest_state);
}
```

For this situation, wrap every access in a lock:

These contrasting threading excerpts use application-supplied `DoComputation` operations. Keep the explicitly unsafe examples paired with their correction; do not combine their duplicate function definitions into one translation unit.

```cpp
#include <mutex>

// Add a mutex (lock)
static std::mutex ex_lock;

static int every_thread_needs_latest_state;

void SetState(int new_state) {
    {
        // Protect the access with the mutex (lock)
        std::lock_guard<std::mutex> lock(ex_lock);
        every_thread_needs_latest_state = new_state;
    }
}

void UseState() {
    int state_capture;
    {
        // Protect the access with the mutex (lock)
        std::lock_guard<std::mutex> lock(ex_lock);
        state_capture = every_thread_needs_latest_state;
    }
    DoComputation(state_capture);
}
```

Note

What you see above are the situations we run into most often across our own effects. Feel free to devise other ways of handling your statics and globals that fit your needs best.
