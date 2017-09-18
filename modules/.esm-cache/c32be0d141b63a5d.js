let EOL;_41b‍.w('os',[["EOL",function(v){EOL=v}]]);let Observable;_41b‍.w('rxjs',[["Observable",function(v){Observable=v}]]);let createCharObservable;_41b‍.w('./charObservable',[["default",function(v){createCharObservable=v}]]);let parseBy;_41b‍.w('./parseBy',[["default",function(v){parseBy=v}]]);




const lineObserver = createCharObservable(char => char === EOL)

_41b‍.d(Object.assign(
  lineObserver,
  {
    createCharObservable,
    parseBy
  }
));
