function good(num: number) {
  let goods = ""
  let count = 0
  while(count < num) {
    goods += "good!"
    count += 1
    if(count == num) {
      goods += " bye!"
    } else {
      goods += " "
    }
  }
  console.log(goods)
}

good(10)
