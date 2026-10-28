# Upscale API: beta naming corrected for GA (Breaking Change)

During beta, documentation and naming presented `/v3/images/upscale` as the "creative upsampler", although calls always used the **precise upsampler** model underneath. The GA release fixes that mismatch. Runtime behavior stays the same; only the names now match the actual model.
