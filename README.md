# Documentation Portal

## Website Link

https://deets.docs.writechoice.io/

Package management solution: YARN
Docusaurus: 3.14
API Reference generation: [docusaurus-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs)

### Generating OpenAPI Docs

To generate all OpenAPI docs, run the following command from the root directory of your project:

```bash
yarn docusaurus gen-api-docs all
```

> This will generate API docs for all of the OpenAPI specification (OAS) files referenced in your `docusaurus-plugin-openapi-docs` config.

You may also generate OpenAPI docs for a single path or OAS by specifying the unique `id`:

```bash
yarn docusaurus gen-api-docs <id>
```

Example:

```bash
yarn docusaurus gen-api-docs petstore
```

> The example above will only generate API docs relative to `petstore`.

### Cleaning API Docs

To clean/remove all API Docs, run the following command from the root directory of your project:

```bash
yarn docusaurus clean-api-docs all
```

You may also remove a particular set of API docs by specifying the unique `id` of your desired spec instance.

```bash
yarn docusaurus clean-api-docs <id>
```

Example:

```bash
yarn docusaurus clean-api-docs petstore
```

> The example above will remove all API docs relative to `burgers`.
