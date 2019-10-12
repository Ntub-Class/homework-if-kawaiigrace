// 請介紹兩個字串方法跟數字方法

// match() 檢索將字符串與正則表達式匹配的結果
var paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
var regex = /[A-Z]/g;
var found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

//trim() 移除字串中的空白格
var greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

function fits(x: number, y: number) {
    if (Number.isInteger(y / x)) {
      return 'Fits!';
    }
    return 'Does NOT fit!';
  }
  
  console.log(fits(5, 10));
  // expected output: "Fits!"
  
  console.log(fits(5, 11));
  // expected output: "Does NOT fit!"

//Number.parseInt() 解析字符串參數，並返回指定基數或基數的整數。
function roughScale(x: string, base: number) {
    var parsed = Number.parseInt(x, base);
    if (Number.isNaN(parsed)) {
      return 0;
    }
    return parsed * 100;
  }
  
  console.log(roughScale(' 0xF', 16));
  // expected output: 1500
  
  console.log(roughScale('321', 2));
  // expected output: 0


// 錢錢大於一個值，叫乾爹
let money = 45000;
let limit = 22000; // 限制值
 
if (money > limit) {
    console.log("乾爹~~");
} else {
    console.log("poor thing...");
}

