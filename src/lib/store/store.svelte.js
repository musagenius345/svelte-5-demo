function createCounter(initialCount) {
  let count = $state(initialCount)

  function increment(){ 
    count += 1
  }
  
  function decrement(){ 
    count -= 1
  }

  function reset(){
    count = 0
  }

  return {
    get count(){ return count},
    increment,
    decrement,
    reset
  }
}

export const counter = createCounter(0)
