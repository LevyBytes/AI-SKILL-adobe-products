# Is the data initialized once at runtime based on data that doesn't change on subsequent renders?

These contrasting threading excerpts use application-supplied `DoComputation` operations. Keep the explicitly unsafe examples paired with their correction; do not combine their duplicate function definitions into one translation unit.

```cpp
// Example of a non Thread-Safe code
static int depends_on_unchanging_runtime_state;

void UseState() {
    DoComputation(depends_on_unchanging_runtime_state);
}

void SetAndUseState() {
    depends_on_unchanging_runtime_state = DoComputationThatNeedsStateOnlyOnce();
    UseState();
}
```

Confirm first that this state can't be known ahead of your code running (case 2); but if runtime initialization is unavoidable, reach for a const static local. (The C++ spec, after all, makes thread-safe initialization of static local objects guaranteed):

These contrasting threading excerpts use application-supplied `DoComputation` operations. Keep the explicitly unsafe examples paired with their correction; do not combine their duplicate function definitions into one translation unit.

```cpp
void UseState(int depends_on_unchanging_runtime_state) {
    DoComputation(depends_on_unchanging_runtime_state);
}

void SetAndUseState() {
    // We can fix the above code by making the variable a const static local
    static const int depends_on_unchanging_runtime_state = DoComputationThatNeedsStateOnlyOnce();

    UseState(depends_on_unchanging_runtime_state);
}
```
