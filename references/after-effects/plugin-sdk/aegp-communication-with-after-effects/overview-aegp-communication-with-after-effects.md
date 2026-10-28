# Overview - AEGP Communication With After Effects

With effect plug-ins, every exchange with After Effects flows through one entry point function — but AEGPs don't work that way.

After Effects does invoke the entry point named in the AEGP's PiPL (which you still have to supply), yet from there on every interaction between the two travels through the hook functions that the AEGP has registered.

You have to carry out that registration inside the plug-in's entry function, by way of the Register Suite.
