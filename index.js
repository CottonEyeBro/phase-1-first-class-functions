

function receivesAFunction(spy) {
    return spy();
}
console.log(receivesAFunction(callback));

function returnsANamedFunction() {
    return function namedFunction() {
      console.log("hello");
    };
  }

function returnsAnAnonymousFunction() {
    return function() {
        console.log("hello");
    }
}