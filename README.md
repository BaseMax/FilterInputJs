# FilterInput
Tiny and Powerful Library for limit an entry (text box,input) as a `number` or `string`.


![FilterInput.min.js File Size](https://img.shields.io/badge/Compressed%20Size-1%3KB-blue.svg) ![FilterInput.min.js Validation Code](https://img.shields.io/badge/Validation%20Code-Check-green.svg)


## Features 

  - Fast
  - Compact
  - No dependencies
  - Easy using Filters


## Filters

  - [x] Decimal
  - [x] Integer
  - [ ] String
  - [ ] Alphabet (english,farsi:persian,arabic,china,...)
  - [ ] Any (any char or empty)
  - [ ] !Any (any char , not empty)

## Supported Tags

currently , only work on `<input>` tag.

  - [x] input
  - [ ] textarea
  - [ ] select
  


## Arguments 

| Argument Name  | Goal |
| ------------- | ------------- |
| data-filter  	| Set type of Filter for a <input> tag |
| data-filter-lang  	| Restrict allowed languages (soon) |


## Samples

To view the full details, run the [Example.html](https://github.com/BaseMax/FilterInputJs/blob/master/Example.html) file.

#### `data-filter`

```
Decimal : 
<input data-filter="decimal" value="5.64">
```

```
Integer :
<input data-filter="integer" value="91">
```

```
String :
<input data-filter="string" value="hello $world?!">
```

#### data-filter-lang

__soon will be complete.__

You can choose multiple languages.
Separate them with `,`.


#### `onclick`

soon will be complete.

# License

FilterInput is licensed under the [GNU General Public License](https://github.com/BaseMax/FilterInputJs/blob/master/LICENSE).
