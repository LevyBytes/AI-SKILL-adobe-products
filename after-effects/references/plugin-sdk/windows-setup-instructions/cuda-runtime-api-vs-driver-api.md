# CUDA Runtime API vs. Driver API:

Utilize CUDA Driver API

Sticking strictly to the CUDA Driver API is our strong advice for the best compatibility. The driver API — unlike the runtime API — keeps working with drivers down the road. Bear in mind that the CUDA Runtime API exists to wrap up and automate some of the bookkeeping that the Driver APIs leave exposed for you to manage, so moving from the Runtime API to the Driver API may bring fresh steps and code to write.

Alternative 1: Statically Link to CUDA Runtime

When you do need the CUDA Runtime API, linking the CUDA Runtime statically — cudart_static.lib — is our recommendation. That route holds up against future driver releases.

Alternative 2: Dynamically Link to CUDA Runtime

This path works as well, though compatibility snags are more likely. For it to keep pace with future drivers, a compatible CUDA Runtime DLL has to exist on each user's system. As things stand, After Effects bundles a copy of the CUDA Runtime DLL matching the CUDA SDK version we recommend, though that could shift later. If dynamic linking to the CUDA Runtime is unavoidable, ship a CUDA Runtime DLL copy with your plugin and reach for dlopen/LoadLibrary to load the runtimes you want explicitly. The CUDA Compatibility section of NVIDIA's GPU Management and Deployment guide has the fuller story: https://docs.nvidia.com/deploy/cuda-compatibility/
