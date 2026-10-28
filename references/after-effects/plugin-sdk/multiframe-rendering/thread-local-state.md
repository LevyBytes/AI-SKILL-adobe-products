# The data has to stay static/global not being a const. But each render thread can have its own copy of the data.

These contrasting threading excerpts use application-supplied `DoComputation` operations. Keep the explicitly unsafe examples paired with their correction; do not combine their duplicate function definitions into one translation unit.

```cpp
// This variable has to be static and not a const
static int this_thread_needs_access;

void SetState(int new_state) {
    this_thread_needs_access = new_state;
}

void UseState() {
    DoComputation(this_thread_needs_access);
}
```

Just declare it thread_local and you're done:

These contrasting threading excerpts use application-supplied `DoComputation` operations. Keep the explicitly unsafe examples paired with their correction; do not combine their duplicate function definitions into one translation unit.

```cpp
// Make this variable a thread_local variable
thread_local static int this_thread_needs_access;

void SetState(int new_state) {
    this_thread_needs_access = new_state;
}

void UseState() {
    DoComputation(this_thread_needs_access);
}
```
