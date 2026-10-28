# Tips & Tricks - Clean Slate

The output you start with isn't guaranteed to be a clean slate. To get one, our Gaussian blur filter runs the following ahead of rendering:

Inside an effect render callback, `input` points to `params[0]->u.ld`, `output` is the destination world, `src_rect` is a `PF_Rect`, and `err` is the callback error. Preserve a failed fill/copy result when returning.

```cpp
src_rect.left   = in_data->output_origin_x;
src_rect.right  = src_rect.left + input->width;
src_rect.top    = in_data->output_origin_y;
src_rect.bottom = src_rect.top + input->height;

err = PF_FILL(NULL, NULL, output);

if (!err) {
    err = PF_COPY(&params[0]->u.ld, output, NULL, &src_rect);
}
```
