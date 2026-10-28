# PF_Cmd_SEQUENCE_FLATTEN

`PF_Cmd_SEQUENCE_FLATTEN`

Arrives during a save and during sequence duplication. Take sequence data that holds pointers or handles and flatten it into a form fit for disk. What you produce gets stored alongside the project file. Dispose of the unflat copy and aim out*data>sequence_data at the new flattened block. The flat data has to carry the correct byte order for file storage. Starting with 6.0, an effect whose sequence data was flattened a short while ago may be removed without a further `PF_Cmd_SEQUENCE_SETDOWN`; in that situation your flat sequence data is discarded by After Effects.
