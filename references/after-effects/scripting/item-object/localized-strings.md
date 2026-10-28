# Localized strings

| Locale | Composition | Folder | Footage |
| --- | --- | --- | --- |
| en_US | Composition | Folder | Footage |
| de_DE | Komposition | Ordner | Footage |
| es_ES | Composición | Carpeta | Material de archivo |
| fr_FR | Composition | Dossier | Métrage |
| it_IT | Composizione | Cartella | Metraggio |
| ja_JP | コンポジション | フォルダー | フッテージ |
| ko_KR | 컴포지션 | 폴더 | 푸티지 |
| pt_BR | Composição | Pasta | Gravação |
| ru_ru | Композиция | Папка | Видеоряд |
| zh_CN | 合成 | 文件夹 | 素材 |

### Example

```javascript
if (/Composition|Komposition|Composición|Composizione|コンポジション|컴포지션|Composição|Композиция|合成/.test(app.project.item(index).typeName)) {
    // item is a composition
} else if (/Folder|Ordner|Carpeta|Dossier|Cartella|フォルダー|폴더|Pasta|Папка|文件夹/.test(app.project.item(index).typeName)) {
    // item is a folder
}
```
