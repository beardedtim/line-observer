import { EOL } from 'os'
import { Observable } from 'rxjs'
import createCharObservable from './charObservable'
import parseBy from './parseBy'

const lineObserver = createCharObservable(char => char === EOL)

export default Object.assign(
  lineObserver,
  {
    createCharObservable,
    parseBy
  }
)
