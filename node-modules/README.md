# Anthropic TypeScript API Library

[![NPM version](https://img.shields.io/npm/v/@anthropic-ai/sdk.svg)](https://npmjs.org/package/@anthropic-ai/sdk)

This library provides convenient access to the Anthropic REST API from server-side TypeScript or JavaScript.

For the AWS Bedrock API, see [`@anthropic-ai/bedrock-sdk`](github.com/anthropics/anthropic-bedrock-typescript).

## Migration from v0.4.x and below

In `v0.5.0`, we introduced a fully rewritten SDK. The new version offers better error handling, a more robust and intuitive streaming implementation, and more.

Key interface changes:

1. `new Client(apiKey)` → `new Anthropic({ apiKey })`
2. `client.complete()` → `client.completions.create()`
3. `client.completeStream()` → `client.completions.create({ stream: true })`
   1. `onUpdate` callback → `for await (const x of stream)`
   2. full message in stream → delta of message in stream

<details>
<summary>Example diff</summary>

  {
    prompt: `${Anthropic.HUMAN_PROMPT} How does a court case get to the Supreme Court?${Anthropic.AI_PROMPT}`,
    max_tokens_to_sample: 300,
    model: 'claude-2',
  },
  {
    baseURL: 'http://localhost:8080/test-api',
    httpAgent: new http.Agent({ keepAlive: false }),
  },
);
```

## Semantic Versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals)_.
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/anthropics/anthropic-sdk-typescript/issues) with questions, bugs, or suggestions.

## Requirements

TypeScript >= 4.5 is supported.

The following runtimes are supported:

- Node.js 18 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher, using `import Anthropic from "npm:@anthropic-ai/sdk"`.
- Bun 1.0 or later.
- Cloudflare Workers.
- Vercel Edge Runtime.
- Jest 28 or greater with the `"node"` environment (`"jsdom"` is not supported at this time).
- Nitro v2.6 or greater.

Note that React Native is not supported at this time.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.
