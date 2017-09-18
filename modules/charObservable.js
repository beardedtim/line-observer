import fs from 'fs'
import { Observable } from 'rxjs'


/**
 * Given a path and options, returns an observable
 * for reading the file by character
 * 
 * @param {Function} isChar - A function that emits 
 * @return {Observable}
 */
const charObserver = isChar => (path, options = { encoding: 'utf8'  }) =>
  Observable.create(observer => {
    /**
     * Readable stream of the path
     * @type {ReadStream}
     */
    const stream = fs.createReadStream(path, options)

    /**
     * If we have closed this stream or not
     *
     * @type {Boolean}
     */
    let isClosed = false

    let strBuffer = ''

    /**
     * If we get an error while reading,
     * emit and close
     */
    stream.on('error', (e) => {
      stream.close()
      observer.error(e)
      isClose = true
    })

    /**
     * On close, tell our end user
     */
    stream.on('end', e => {
      isClosed = true
      observer.complete(e)
    })

    /**
     * Each time we get any bit to read,
     * we emit it.
     */
    let count = 0;
    stream.on('readable', () =>{
      let chunk;
      while (null !== (chunk = stream.read(1))) {
        // If this is the chunk we care about
        // or if our buffer is what we care about
        if (isChar(chunk, strBuffer)) {
          observer.next(strBuffer + chunk)
          strBuffer = ''
        } else {
          strBuffer += chunk
        }
      }

      if (strBuffer) {
        observer.next(strBuffer)
      }
    })

    return () => {
      if (!isClosed) {
        stream.close()
      }
    }
  })

export default charObserver