function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, value){
  return fn.call(thisValue, value)
}

function setThisWithApply(fn, thisValue, values){
  return fn.apply(thisValue, values)
}

function returnNewFunctionOf(fn, thisValue){
  return fn.bind(thisValue)
}
