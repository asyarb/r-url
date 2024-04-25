# r-URL

Small wrapper around the native [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) class that works with relative URLs.

## Usage

Install package:

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install @asyarb/r-url

# npm
npm install @asyarb/r-url

# yarn
yarn add @asyarb/r-url

# pnpm
pnpm install @asyarb/r-url

# bun
bun install @asyarb/r-url
```

<!-- /automd -->

Import:

<!-- automd:jsimport cjs name="@asyarb/r-url" imports="RURL" -->

**ESM** (Node.js, Bun)

```js
import { RURL } from "@asyarb/r-url";
```

**CommonJS** (Legacy Node.js)

```js
const { RURL } = require("@asyarb/r-url");
```

<!-- /automd -->

## API 

Small wrapper around the native `URL` class that works with relative URLs.

### Basic Usage

```ts
const url = new RURL('/about-us')
```

### Setting search parameters

```ts
const url = new RURL('/search')
url.searchParams.set('query', 'scholarships')
url.toString() // => "/search?query=scholarships"
```

## Development

<details>

<summary>local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

</details>

## License

MIT

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->