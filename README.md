# Filter Input

<p align="center">
  <img alt="FilterInput" src="https://raw.githubusercontent.com/BaseMax/FilterInputJs/master/image.jpg">
</p>

Tiny and Powerful Library for limit an entry (text box,input) as `number`,`string` or more...

![FilterInput.min.js File Size](https://img.shields.io/badge/Compressed%20Size-1.3KB-blue.svg) ![FilterInput.min.js Validation Code](https://img.shields.io/badge/Validation%20Code-Check-green.svg)

## Getting started

Add the following line to your `.html` file:

```html
<script src="https://cdn.jsdelivr.net/gh/BaseMax/FilterInputJs@master/dist/index.min.js"></script>
```

or download the [minified file](https://raw.githubusercontent.com/BaseMax/FilterInputJs/master/dist/index.min.js)

## Features

- Fast
- Compact
- No dependencies
- Easy using Filters

## Filters

- [x] Decimal
- [x] !Decimal (a decimal , not empty)
- [x] Integer
- [x] !Integer (a integer , not empty)
- [ ] String (any character , no number)
- [ ] !String (a string , not empty)
- [ ] Alphabet (english,farsi:persian,arabic,china,...)
- [ ] !Alphabet (english,farsi:persian,arabic,china,...) not empty!
- [ ] Any (any char or empty)
- [ ] !Any (any char , not empty)

## Supported Tags

currently , only work on `<input>` tag.

- [x] input
- [ ] textarea
- [ ] select

## Arguments

| Argument Name    | Goal                                 |
| ---------------- | ------------------------------------ |
| data-filter      | Set type of Filter for a <input> tag |
| data-filter-lang | Restrict allowed languages (soon)    |

## Samples

To view the full details, run the example [.html file](https://github.com/BaseMax/FilterInputJs/blob/master/dist/index.html).

#### `data-filter`

```
Decimal :
<input data-filter="decimal" value="5.64">
```

```
Integer :
<input data-filter="integer" value="91">
```

#### `data-filter-lang`

soon will be complete.

You can choose multiple languages.
Separate them with `,`.

#### `onclick`

soon will be complete.

# Development

```bash
npm run dev
```

```bash
npm run build # build the production files
```

# License

FilterInput is licensed under the [GNU General Public License](LICENSE).
