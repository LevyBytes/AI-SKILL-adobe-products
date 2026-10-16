# Accessing the After Effects Function Suites — Threading

Treat every function our suites expose as not thread-safe unless its documentation states otherwise. To give one case, anything that touches the user interface should be confined to your plug-in's main thread.
