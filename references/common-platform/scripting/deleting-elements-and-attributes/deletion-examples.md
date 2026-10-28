# Deletion examples

To remove every author entry from the third book:

```xml
delete bookstoreXML.book[2].author;
```

To remove only author index 1 from the third book:

```xml
delete bookstoreXML.book[2].author[1];
```

To remove the third book's category attribute:

```xml
delete bookstoreXML.book[2].@category;
```
