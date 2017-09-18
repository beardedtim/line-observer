# line-observer

> Step by step...

## API

* [byLine](#byline)
* [createCharObservable](#createCharObservable)
* [parseBy](#parseby)

### byline

```
import byLine from 'line-observer'

const file = 'path/to/file'

/**
file === `
a line
another one!
`
*/

const lines$ = byLine(file) // Observable of lines

lines$.subscribe(console.log) // a line, another one!
```

This is the main export of this package and returns an `Observable` of each line read. It *shouldn't* be read all into memory but instead read character by character.

### createCharObservable

```
import { createCharObservable } from 'line-observer'


const bySpace = createCharObservable((char, strBuffer) => char === '\s')

/**
file === `
a line
another one!
`
*/
const words$ = bySpace(file) // Observable of words

words$.subscribe(console.log) // a, line, another, one!
```

Returns a function that expects a file path and returns an observable, emitting at each character that passes the function given.

### parseBy

```
import byLine from 'line-observer'

const { parseBy } = byLine

const groupByTab = parseBy('\t')

const parsedLines$ = groupByTab(byLine(file))

/**
file === `
header1  header2
tim1  tim2
tim3  tim4
`
*/

parsedLines$
  .subscribe(console.log) // { header1: tim1, header2: tim2 }, { header1: tim3, header2: tim4 }
```

Creates a function that expects an observable that emits parsed lines, attaching the headers to each line following.