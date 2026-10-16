# Q: Can Spectrum UXP widgets and SWC exist side by side?

A: Yes. The two sets can be combined. For example,

```html
<sp-banner>
   <div slot="header">Header text</div>
   <div slot="content">Content of the banner</div>
</sp-banner>
<sp-dropdown placeholder="Select an option" style="width: 320px">
   <sp-menu slot="options">
      <sp-menu-item> Option 1 </sp-menu-item>
      <sp-menu-item> Option 2 </sp-menu-item>
   </sp-menu>
</sp-dropdown>
```
