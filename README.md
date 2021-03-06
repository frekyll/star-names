# ✨ star-names [![Build Status](https://travis-ci.org/frekyll/star-names.svg?branch=master)](https://travis-ci.org/frekyll/star-names)
> Get names of the brightest stars in the sky

![](sky.jpg)
Photo by [Jeremy Bishop](https://unsplash.com/@jeremybishop) on [Unsplash](https://unsplash.com/)

## Install
```
$ npm install @frekyll/star-names
```

## Usage
```js
var starNames = require('@frekyll/star-names')

starNames.random()
//=> 'Mizar'
```

## API

### .all
Type: `array`

50 brightest star names in alphabetical order

### .random()

Type: `function`

Random star name

## CLI
```
$ npm install --global @frekyll/star-names
```

```
$ star-names --help

  Examples
    $ star-names
    Mizar
    $ star-names --all
    Achernar
    Acrux
    …
  Options
    --all  Get all names instead of a random name
```

## Related

- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [random-tree-names](https://github.com/pguth/random-tree-names) - Get tree names
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words

## License

MIT © [Frekyll](https://www.frekyll.com)
