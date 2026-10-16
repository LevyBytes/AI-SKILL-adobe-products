# Arbitrary Data Parameters — Implementing Arbitrary Data

Beyond the usual command and event selectors, arb data calls for an extra layer of host interaction. With other parameter types this stays hidden, because After Effects looks after the data that backs them. Building an arb data plug-in is a window into just how much parameter management After Effects carries out on your behalf, and the order those operations run in. It might even prompt you to reconsider your design and lean on the parameter types the host manages for you.

Create your arb data — naturally, through After Effects' own memory allocation routines — and aim ParamDef.u.arb_d.dephault at it. Fill it with sensible defaults. Setting up the parameter needs no value variable; clear it to zero just to be safe.

Within your plug-in's entry function, add a case that handles `PF_Cmd_ARBITRARY_CALLBACK`.

From there, call out to a secondary event handler, HandleArbitrary. A `PF_ArbParamsExtra` reaches it through extra, and that structure carries a `PF_FunctionSelector` naming the command that was issued.

Say After Effects has issued `PF_Cmd_ARBITRARY_CALLBACK` with `PF_Arbitrary_COPY_FUNC` as the `PF_FunctionSelector`. You'll find pointers to a source and a destination Arb inside `PF_ArbParamsExtra`.copy_func_params. Allocate a fresh Arb and aim dest_arbPH at it. When src_arbH comes through NULL, build a default Arb for dest_arbPH.

A user might highlight the arb's keyframe data in the Timeline panel, copy it, and then jump to a different application. That sends you a `PF_Arbitrary_PRINT_SIZE_FUNC`; size your output buffer by writing print_sizePLu in the `PF_ArbParamsExtra`. `PF_Arbitrary_PRINT_FUNC` follows; fill the print_bufferPC output buffer with a text rendering of the Arb(s) involved.

A user may also paste keyframe data into your Arb's timeline, which delivers `PF_Arbitrary_SCAN_FUNC` to you. Build an Arb from whatever sits in the character buffer you're handed (print_sizeLu tells you its size).
