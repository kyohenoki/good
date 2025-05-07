import { random } from "./random"

function more(num: number) {
  let mores = ""
  let count = 0
  while(count < num) {
    mores += words[random(0,words.length)] + "!"
    count += 1
    if(count == num) {
      mores += " bye!"
    } else {
      mores += " "
    }
  }
  console.log(mores)
}

const words = [
  "good",
  "great",
  "cool",
  "awesome",
  "impressive",
  "brilliant",
  "talented",
  "kind",
  "thoughtful",
  // thank you chatgpt
]

more(random(2,10))
