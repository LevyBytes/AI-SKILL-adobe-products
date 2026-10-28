# Network

For network use, declare the domains the plugin will contact. Add the network object under the manifest's requiredPermissions section. 

```json
{
  "requiredPermissions": {
    "network": {
      "domains": [
        "https://source.unsplash.com"
      ]
    }
  }
}
```

 

```html
<img src='https://source.unsplash.com/random'>
```
