# sam-typescript-functions-layers

AWS SAM example for building and using functions and layers written in
Typescript.

## Local development

Using Node v16

```bash
npm install
```

> **NOTE:** The custom layer is referenced in the global package.json with
> `"commons": "file:./layers/commons"` for local development

## Deploy the sample application

```bash
sam build
sam deploy --guided
```

## Cleanup

```bash
aws cloudformation delete-stack --stack-name aws-sam-ts-functions-layers
```
