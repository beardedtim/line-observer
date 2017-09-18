# line-observer

> Step by step...

## API

* [byLine](#byline)
* [createCharObservable](#createCharObservable)
* [parseBy](#parseby)

### byline

```
import byLine from 'line-observer'

const path = 'path/to/file'

const lines$ = byLine(path) // Observable of lines
```

This is the main export of this package and returns an `Observable` of each line read. It *shouldn't* be read all into memory but instead read character by character.

### createCharObservable

```
import { createCharObservable } from 'line-observer'


const bySpace = createCharObservable((char, strBuffer) => char === '\s')

const words$ = bySpace(file) // Observable of words
```

Returns a function that expects a file path and returns an observable, emitting at each character that passes the function given.

### parseBy

```
import byLine from 'line-observer'

const { parseBy } = byLine

const groupByTab = parseBy('\t')

const parsedLines$ = groupByTab(byLine(file))
```

Creates a function that expects an observable that emits parsed lines, attaching the headers to each line following.