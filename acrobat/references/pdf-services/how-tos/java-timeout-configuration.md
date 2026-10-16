# Java timeout configuration

Available properties:

- **connectTimeout**: Default: 2000. The longest stretch, in milliseconds, permitted while an initial HTTPS connection is being opened.
- **socketTimeout**: Default: 10000. The longest gap, in milliseconds, tolerated between one HTTP response packet and the next.

Supply your own values for these properties through a custom `ClientConfig` class:

###

```java
import com.adobe.pdfservices.operation.config.ClientConfig;

public final class TimeoutClientConfig {
    public static ClientConfig create() {
        return ClientConfig.builder()
            .withConnectTimeout(3000)
            .withSocketTimeout(20000)
            .build();
    }
}
```

Use the returned configuration when constructing the PDF Services client. Values retain this reference’s version-specific example.

### Java timeout configuration

Available properties:

- **connectTimeout**: Default: 2000. The longest time, in milliseconds, permitted to open the first HTTPS connection.
- **socketTimeout**: Default: 10000. The longest time, in milliseconds, allowed between one HTTP response packet and the next.

Swap in your own `ClientConfig` class to override the timeout properties:

###

```java
import com.adobe.pdfservices.operation.config.ClientConfig;

public final class TimeoutClientConfig {
    public static ClientConfig create() {
        return ClientConfig.builder()
            .withConnectTimeout(3000)
            .withSocketTimeout(20000)
            .build();
    }
}
```

Use the returned configuration when constructing the PDF Services client. Values retain this reference’s version-specific example.
