# Basic Host Differences - Render Order

Premiere Pro was built for real-time playback of footage with effects whenever possible. Its render scheduling is far more aggressive, and multithreaded rendering is a baseline requirement. That differs sharply from After Effects, where users build many effect layers and are more willing to wait for a RAM preview.

Premiere multithreaded rendering applies to AE effects too. For an AE effect render, Premiere sends the request through a critical section used by every command except arbitrary-data commands. That critical section keeps two threads from calling one effect instance at the same time. Premiere still creates multiple effect instances, and separate threads can call those instances concurrently.

An effect therefore should not expect render requests in increasing-time order. Effects also should not rely on static non-constant variables.
