# r-URL

Small wrapper around the native [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) class that works with relative URLs.

## Usage

Install package:

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install r-url

# npm
npm install r-url

# yarn
yarn add r-url

# pnpm
pnpm install r-url

# bun
bun install r-url
```

<!-- /automd -->

Import:

<!-- automd:jsimport cjs name="r-url" imports="RURL" -->

**ESM** (Node.js, Bun)

```js
import { RURL } from "r-url";
```

**CommonJS** (Legacy Node.js)

```js
const { RURL } = require("r-url");
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