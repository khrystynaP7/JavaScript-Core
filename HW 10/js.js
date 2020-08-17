//Task 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x,y,,...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

//Task 2
let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let {names: [, name2, , name4], ages: [, age2, , age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//Task 3
function mul() {
    let args = [...arguments];
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number') {
            result+= args[i];
        }
    }
    return result;
}
console.log(mul(1, "str", 2, 3, true)); // 6

//Task 4
let server = {
   data: 0,
   convertToString(callback) {
      callback(() => `${this.data}`);
   }
};
let client = {
   server,
   result: "",
   calc(data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification() {
      return callback => {
         this.result = callback();
      };
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//Task 5
function mapBuilder(arr1, arr2) {
    const newMap = new Map();
    for (let i = 0; i < arr1.length; i++) {
        newMap.set(arr1[i], arr2[i])
    }
    return newMap
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size);

