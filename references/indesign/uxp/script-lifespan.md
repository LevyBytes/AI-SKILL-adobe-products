# Script lifespan

UXP scripts follow JavaScript's single-threaded, non-blocking execution model. A script remains active only through the final statement currently on the execution stack.

This small sample shows the lifecycle plainly.
