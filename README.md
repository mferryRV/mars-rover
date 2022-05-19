# mars-rover

Helping some robots navigate around mars

## Getting Started

First install node.js, recommended version is `16.5.0` as specified in `.tool-versions`. You could do this using [asdf](http://asdf-vm.com/guide/getting-started.html)

Once node is installed, install dependencies with:

```bash
  $ npm i
```

## Giving new inputs

To test outputs for inputs not included in the design brief, run:

```bash
  $ npm run start -- <path-to-input-file>
```

## Testing

You can see outputs for inputs from the brief with:

```bash
  $ npm run test:1
  $ npm run test:2
```

Unfortunately `npm run test` won't yet do these checks automatically. This would be my next focus, as described in `src/test.js`
