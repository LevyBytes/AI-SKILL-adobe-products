# `PF_ArbParamsExtra`



The `u` union contains these selector-specific parameter members:

- `new_func_params`
- `dispose_func_params`
- `copy_func_params`
- `flat_size_func_params`
- `flatten_func_params`
- `unflatten_func_params`
- `interp_func_params`
- `compare_func_params`
- `print_size_func_params`
- `print_func_params`
- `scan_func_params`

| Member | Purpose |
| --- | --- |
| which_function | A `PF_FunctionSelector` indicating which function is called |
| id | Used by After Effects; will match the ID assigned to the arbitrary data type during `PF_Cmd_PARAM_SETUP`. |
| padding | Used for byte-alignment |
|  | (One of these will be passed; see Arbitrary Data Parameters) |
