# Course Understanding Typescript

- Is a javascript superset
- A language building up on Javascript
- Add new features + advantages to javascript
- Need to be compiled to javascript
- Compile typescript features to javascript workarounds
- Typescript only checks before compilation

## Instaling and using typescript

```ssh
npm i -g typescript
```

```ssh
tsc fileName.ts
tsc fileName.ts --watch
tsc fileName.ts -w
```

Para dar watch em todos os arquivos typescript presentes no diretório atual use o comando, o qual criará um arquivo tsconfig.json que representa o arquivo de configuração do typescript (mesmo propósito que o package.json)
Com isto é possivel rodar somente `tsc -w` para dar watch nos arquivos

```ssh
tsc --init
tsc -w
```

## Typescript Overview

Typescript adds:

- Types
- Next-gen Javascript Features (Compiled down for older Browsers)
- Non-Javascript Features like Interfaces or Generics
- Meta-Programming Features like Decorators
- Rich Configuration Options
- Modern Tooling that helps even in non-Typescript Projects

## Core Types

Principal types from Typescript

In Typescript, you work with types like `string` or `number`
**Important**: It is `string` and `number` (etc.), **NOT** `String`, `Number`, etc.
**The core primitive types in Typescript are all lowercase!**

### Core Type: number

All numbers, no differentiation between integers or floats

```ts
1, 5.3, -10
```

### Core Type: string

All text values

```ts
'Hi'
"Hi"
`Hi`
```

### Core Type: boolean

Just these two, no "truthy" or "falsy" values

```ts
true
false
```

### Core Type: object

Any Javascript object, more specific types (type of object) are possible

```ts
{
  age: 30
}
```

### Core Type: Array

Any javascript array, type can be flexible or strict (regarding the element types)

```ts
[1, 2, 3]
```

### Core Type: Tuple

Added by Typescript: Fixed-length array and fixed type

```ts
[1, 2]
```

### Core Type: Enum

Added by Typescript: Automatically enumerated global constant identifiers

```ts
enum Type {
  NEW,
  OLD
}

enum Role {
  ADMIN = 5, // 5
  READ_ONLY, // 6
  AUTHOR,    // 7
}

enum File {
  JPG = 100,
  PDF = 200,
  EXE = 300,
}

enum Color {
  RED = 'Red'
  BLUE = 'Blue'
  Yellow = 'Yellow'
}
```

### Core Type: Any

Any kind of value, no especific type assignment

## Type Inference

Automatic understands what type a variable have when created with a core type

```ts
const number1 = 1
// Same as const number1: number = 1
```
