# Could the data be easily passed between functions instead without a change in behavior?

These contrasting threading excerpts use application-supplied `DoComputation` operations. Keep the explicitly unsafe examples paired with their correction; do not combine their duplicate function definitions into one translation unit.

```cpp
// Example of a non Thread-Safe code
static int should_just_be_local;

void UseState() {
    DoComputation(should_just_be_local);
}

void SetAndUseState() {
    should_just_be_local = DoComputation();
    UseState();
}
```

Fold it into a struct, or widen the function arguments to carry it:

These contrasting threading excerpts use application-supplied `DoComputation` operations. Keep the explicitly unsafe examples paired with their correction; do not combine their duplicate function definitions into one translation unit.

```cpp
// We can fix the above code by passing the should_just_be_local variable through function arguments

void UseState(int should_just_be_local) {
    DoComputation(should_just_be_local);
}

void SetAndUseState() {
    int should_just_be_local = DoComputation();
    UseState(should_just_be_local);
}
```
