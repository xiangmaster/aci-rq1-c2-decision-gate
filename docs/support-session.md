# Support session export

The sidecar auth middleware constructs the session object passed to
`exportSecret`. The library permits export only when `session.role` is
`admin` or `support`.
