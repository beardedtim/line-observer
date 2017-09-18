let Observable;_ef0‍.w('rxjs',[["Observable",function(v){Observable=v}]]);

const parseBy = delim => obs => Observable.create(observer => {
  let headers

  obs.subscribe(
    line => {
      if (!headers) {
        return headers = line.split(delim)
      }

      observer.next(
        line.split(delim).reduce((f, c, i) => Object.assign(
          {},
          f,
          { [headers[i].trim()]: c.trim() }
        ), {})
      )
    },
    observer.error.bind(observer),
    observer.complete.bind(observer)
  )
})

_ef0‍.d(parseBy);
