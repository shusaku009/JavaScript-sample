import "./styles.css";

document.getElementById("app").innerHTML = `

`;

const total = 42 + 42;
console.log(total);

const foo = null;
console.log(foo);

function fn(){
    const undefined = "独自の未定義値";
    console.log(undefined);
}
fn();

const numberRegExp = /\d+/;
// `numberRegExp`の正規表現が文字列"123"にマッチするかをテストする
console.log(numberRegExp.test("123"));

// べき乗演算子( ** )
console.log(2 ** 4);

// べき乗演算子( ** )　Math.powメソッド
console.log(Math.pow(2, 4));

const a = 1;
const b = 2;
const c = 3;
console.log(a + b * c);
console.log((a + b) * c);

// 三項演算子
// 条件式 ? Trueの時処理する式 : Falseの時処理する式
const valueA = true ? "A" : "B";
console.log(valueA);
const valueB = false ? "A" : "B";
console.log(valueB);

// NaN
Number({});

const x = 10;
const y = x + NaN;
const z = y + 20;
console.log(x);
console.log(y);
console.log(z);

// NaNはnumber型
console.log(typeof NaN);

function isNaN(x) {
    // NaNは自分自身と一致しない
    return x !== x;
}
console.log(isNaN(1));
console.log(isNaN("str"));
console.log(isNaN({}));
console.log(isNaN([]));
console.log(isNaN(NaN));

Number.isNaN(NaN);

// 任意の個数の数値を受け取り、その合計値を返す関数
function sum(...values) {
    return values.reduce((total, value) => {
        return total + value;
    }, 0);
}
const x = 1, z = 10;
let y;
console.log(sum(x, y, z));

sum(1, undefined, 10);
// 計算中にNaNとなるため、最終結果もNaNになる
1 + undefined;
NaN + 10;

function sum(...values) {
    return values.reduce((total, value) => {
        // `valueをNumberで明示的に数値へ変換してから加算する`
        return total + Number(value);
    }, 0)
}
const x = 1, z = 10;
let y;
console.log(sum(x, y, z));

/**
 * 数値を合計した値を返します。
 * 1つ以上の数値と共に呼び出す必要があります。
 * @param {...number} values
 * @returns {number}
 */
function sum(...values) {
    return values.reduce((total, value) =>{
        // 値がNumber型でない場合に、例外を投げる
        if (typeof value !== "number") {
            throw new Error(`${value}はNumber型ではありません`);
        }
        return total + Number(value);
    }, 0);
}
const x = 1, z = 10;
let y;
console.log(x, y, z);
console.log(sum(x, y, z));

// 関数宣言
function double(num) {
    return num * 2;
}
// `double`関数の返り値は、`num`に`10`を入れて`return`文で返した値
console.log(double(10));

function fn() {
    // 何も返り値を指定していない場合は`undefined`を返す
    return;
    // すでにreturnされているため、この行は実行されない
}
console.log(fn());

function echo(x) {
    return x;
}

console.log(echo(1));
console.log(echo());

// ES2015で導入されたデフォルト引数
function echo(x = 'デフォルト値') {
    return x;
}

console.log(echo(1));
console.log(echo());

// OR演算子を使ったデフォルト演算子
function addPrefix(text, prefix) {
    const pre = prefix || "デフォルト:";
    return pre + text;
}

console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", "カスタム:"));

// falsyな値を渡すとデフォルト値が入ってしまう
function addPrefix(text, prefix) {
    const pre = prefix || "デフォルト:";
    return pre + text;
}

console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", ""));
console.log(addPrefix("文字列", "カスタム:"));

function addPrefix(text, prefix = "デフォルト:") {
    return prefix + text;
}
// falsyな値を渡してもデフォルト値は代入されない
console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", ""));
console.log(addPrefix("文字列", "カスタム:"));

function add(x, y) {
    return x + y;
}
add(1, 3);
add(1, 3, 5);

// Math.maxは可変長引数を受け取る関数
const max = Math.max(1, 5, 10, 20);
console.log(max);

function fn(...args) {
    // argsは、渡された引数が入った配列
    console.log(args);
}
fn("a", "b", "c");

function fn(arg1, ...restArgs) {
    console.log(arg1);
    console.log(restArgs);
}
fn("a", "b", "c");

function fn(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}
const array = [1, 2, 3];
// Spread構文で配列を引数に展開して関数を呼び出す
fn(...array);
// 次のように書いたのと同じ意味
fn(array[0], array[1], array[2]);

function fn() {
    // `arguments`はインデックス関数を指定して各要素にアクセスできる
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
fn("a", "b", "c");

function printUserId(user) {
    console.log(user.id);
}
const user = {
    id: 42
};
printUserId(user);

// 第1引数のオブジェクトから`id`プロパティを変数`id`として定義する
function printUserId( { id }) {
    console.log(id);
}
const user = {
    id: 42
};
printUserId(user);

const user = {
    id: 42
};
// オブジェクトの分割代入
const { id } = user;
console.log(id);
// 関数の引数の分割代入
function printUserId({ id }) {
    console.log(id);
}
printUserId(user);

function print([first, second]) {
    console.log(first);
    console.log(second);
}
const array = [1, 2];
print(array);

function fn() {
    console.log("fnが呼び出されました");
}
// 関数`fn`を`Func`変数に代入している
const myFunc = fn;
myFunc();

// factorialは関数の外から呼び出せる名前
// innerFactは関数の外から呼び出せない名前
const factorial = function innerFact(n) {
    if (n === 0) {
        return 1;
    }
    // innerFactを再帰的に呼び出している
    return n * innerFact(n - 1);
};
console.log(factorial(3));

const array = [1, 2, 3];
// 1,2,3と順番に値が渡されてコールバック関数（無名関数）が処理する
const doubleArray = array.map(function(value) {
    return value * 2; //  返した値をまとめた配列ができる
});
console.log(doubleArray);

const array = [1, 2, 3];
// 仮引数が1つなので`()`を省略できる
// 関数の処理が1つの式なので`return`分を省略できる
const doubleArray = array.map(value => value * 2);
console.log(doubleArray);

function fn(x) {
    return `最初の関数 x: ${x}`;
}
function fn(x, y) {
    return `最後の関数 x: ${x}, y: ${y}`;
}
console.log(fn(2, 10));

const fn = (x) => {
    return `最初の関数 x: ${x}`;
};
// constは同じ変数名を定義できないため、構文エラーとなる
const fn = (x, y) => {
    return `最後の関数 x: ${x}, y: ${y}`;
};

const  array = [1, 2, 3];
const output = (value) => {
    console.log(value);
};
array.forEach(output);

const array = [1, 2, 3];
array.forEach((value) => {
    console.log(value);
});

const obj = {
    method1: function() {
        // `function`キーワードでのメソッド
    },
    method2: () => {
        // Arrow  Functionでのメソッド
    }
};

const obj = {};
obj.method = function() {
};

const obj = {
    method: function() {
        return "this is method";
    }
};
console.log(obj.method());

const obj = {
    method() {
        return "this is method";
    }
};
console.log(obj.method());

// 1という式の評価値を表示
console.log(1);
// 1 + 1という式の評価値を表示
console.log(1 + 1);
// 式の評価値を変数に代入
const total = 1 + 1;
// 関数式の評価値(関数オブジェクト)を変数に代入
const fn = function() {
    return 1;
};
// fn()という評価値を表示
console.log(fn());

const isTrue = true;
// isTrueという式がif文の中に出てくる
if (isTrue) {
}

// if文とブロック文の組み合わせ
if(true) {
    console.log("文1");
    console.log("文2");
}

// ブロックで終わらない文なので、セミコロンが必要
if(true) console.log(true);
// ブロックで終わる文なので、セミコロンが不要
if(true) {
    console.log(true);
}

// learn関数を宣言する関数宣言文
function learn() {
}
// 関数式をread変数を代入
const read = function() {
};

if (true) {
    console.log("この行は実行されます");
}

if (true)
    console.log("この行は実行されます");

const x = 42
if (x > 10) {
    console.log("xは10より大きな値です");
}

const version = "ES6";
if (version === "ES5") {
    console.log("ECMAScript 5");
} else if (version === "ES6") {
    console.log("ECMAScript 2015"); 
} else if (version === "ES7") {
        console.log("ECMAScript 2016");
}

const num = 1;
if (num > 10) {
    console.log(`numは10より大きいです: ${num}`);
} else {
    console.log(`numは10以下です: ${num}`);
}

const year = new Date().getFullYear();
if (year % 4 === 0) { 
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year}年はうるう年です`);
        } else {
            console.log(`${year}年はうるう年ではありません`);
        }
    } else {
        console.log(`${year}年はうるう年です`);
    }
} else {
    console.log(`${year}年はうるう年ではありません`);
}

const year = new Date().getFullYear();
if (year % 400 === 0) { 
    console.log(`${year}年はうるう年です`);
} else if (year % 100 === 0) {
    console.log(`${year}年はうるう年ではありません`);
} else if (year % 4 === 0) {
    console.log(`${year}年はうるう年です`);
} else {
    console.log(`${year}年はうるう年ではありません`)
}

const version = "ES6";
switch (version) {
    case "ES5":
        console.log("ECMAScript 5");
        break;
    case "ES6":
        console.log("ECMAScript 2015");
        break;
    case "ES7":
        console.log("ECMAScript 2016")
        break;
    default:
        console.log("知らないバージョンです");
        break;
}

// let x = 0;
// console.log(`ループ開始前のxの値: ${x}`);
// while (x < 10) {
//     console.log(x);
//     x += 1;
// }
// console.log(`ループ終了後のxの値: ${x}`);

const x = 1000;
do {
    console.log(x);
} while (x < 10);

let total = 0;
for (let i = 0; i < 10; i++) {
    total += i + 1;
}
console.log(total);

function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(sum([1, 2, 3, 4, 5]));

const array = [1, 2, 3];
array.forEach(currentValue => {
    console.log(currentValue);
});

function sum(numbers) {
    let total = 0;
    numbers.forEach(num => {
        total += num;
    });
    return total;
}

sum([1, 2, 3, 4, 5]);

const numbers = [1, 5, 10, 15, 20];
let isEvenIncluded = false;
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
        isEvenIncluded = true;
        break;
    }
}
console.log(isEvenIncluded);

function isEven(num) {
    return num % 2 === 0;
}
function isEvenIncluded(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (isEven(num)) {
            isEvenIncluded = true;
            break;
        }
    }
    return isEvenIncluded;
}
const array = [1, 5, 10, 15, 20];
console.log(isEvenIncluded(array));

function isEven(num) {
    return num % 2 === 0;
}
function isEvenIncluded(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (isEven(num)) {
            return true;
        }
    }
    return false;
}
const numbers = [1, 5, 10, 15, 20];
console.log(isEvenIncluded(numbers));

function isEven(num) {
    return num % 2 === 0;
}
const numbers = [1, 5, 10, 15, 20];
console.log(numbers.some(isEven));

function isEven(num) {
    return num % 2 === 0;
}
function filterEven(numbers) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (!isEven(num)) {
            continue;
        }
        results.push(num);
    }
    return results;
}
const array = [1, 5, 10, 15, 20];
console.log(filterEven(array));

function isEven(num) {
    return num % 2 === 0;
}

const array = [1, 5, 10, 15, 20];
console.log(array.filter(isEven));

const obj = {
    "a": 1,
    "b": 2,
    "c": 3
};
for (const key in obj) {
    const value = obj[key];
    console.log(`key:${key}, value:${value}`);
}

const obj = {
    "a": 1,
    "b": 2,
    "c": 3
};
Object.keys(obj).forEach(key => {
    const value = obj[key];
    console.log(`key:${key}, value:${value}`);
});

const numbers = [5, 10];
let total = 0;
for (const num in numbers) {
    total += num;
}
console.log(total);

const array = [1, 2, 3];
for (const value of array) {
    console.log(value);
}

const str = "吉野家";
for (const value of str) {
    console.log(value);
}

const obj = {
    "key": "value"
};

const obj = {
    key: "value"
};

const color = {
    red: "red",
    green: "green",
    blue: "blue"
};

const name = "名前";
const obj = {
    name: name
};
console.log(obj);

const name = "名前";
const obj = {
    name
};
console.log(obj);

const obj = new Object();
console.log(obj);

const obj = {
    key: "value"
};
console.log(obj.key);
console.log(obj["key"]);

const obj = {
    key: "value",
    123: 456,
    "my-key": "my-value"
};

console.log(obj["key"]);
console.log(obj[123]);
console.log(obj["123"]);
console.log(obj["my-key"]);

const languages = {
    ja: "日本語",
    en: "英語"
};
const myLang = "ja";
console.log(languages[myLang]);

const languages = {
    ja: "日本語",
    en: "英語"
};
const ja = languages.ja;
const en = languages.en;
console.log(ja);
console.log(en);

const languages = {
    ja: "日本語",
    en: "英語"
};
const { ja, en } = languages;
console.log(ja);
console.log(en);

const obj = {};
obj.key = "value";
console.log(obj.key);

const key = "key-string";
const obj = {};
obj[key] = "value of key";
console.log(obj[key]);

const key = "key-string";
const obj = {
    [key]: "value"
};
console.log(obj[key]);

function changeProperty(obj) {
    obj.key = "value";
}
const obj = {};
changeProperty(obj);
console.log(obj.key);

const obj = {
    key1: "value1",
    key2: "value2"
};
delete obj.key1;
console.log(obj);

const obj = { key: "value" };
obj.key = "Hi!";
console.log(obj.key);

const obj = { key: "value" };
obj = {};

"use strict";
const object = Object.freeze({ key: "value "});
object.key = "value";

const obj = {};
console.log(obj.notFound);

const widget = {
    window: {
        title: "ウィジェットのタイトル"
    }
};
console.log(widget.windw)
console.log(widget.windw.title);

const obj = {
    key: "value"
};
if (obj.key !== undefined) {
    console.log("`keyプロパティの値は`undefinedではない`");
}

const obj = {
    key: undefined
};
if (obj.key !== undefined) {

}

const obj = {key: undefined };
if ("key" in obj) {
    console.log("`key`プロパティは存在する");
}

const obj = {};
Object.hasOwn(obj, "プロパティ名");

const obj = { key: undefined };
if (Object.hasOwn(obj, "key")) {
    console.log("`obj`は`key`プロパティを持っている");
}

const obj = { key: undefined };
if (obj.hasOwnProperty("key")) {
    console.log("`obj`は`key`プロパティを持っている");
}

function printWidgetTitle(widget) {
    if (widget.window !== undefined && widget.window.title !== undefined) {
        console.log(`ウィジェットのタイトルは${widget.window.title}です`);
    } else {
        console.log("ウィジェットのタイトルは未定義です");
    }
}
printWidgetTitle({
    window: {
        title: "Book Viewer"
    }
});
printWidgetTitle({

});

const obj = {
    a: {
        b: "objのaプロパティのbプロパティ"
    }
};
console.log(obj?.a?.b);
console.log(obj?.notFound?.notFound);
console.log(undefined?.notFound.notFound);
console.log(null?.notFound.notFound);

function printWidgetTitle(widget) {
    const title = widget?.window?.title ?? "未定義";
    console.log(`ウィジェットのタイトルは${title}です`);
}
printWidgetTitle({
    window: {
        title: "Book Viewer"
    }
});
printWidgetTitle({

});

const languages = {
    ja: {
        hello: "こんにちは！"
    },
    en: {
        hello: "Hello!"
    }
};
const langJapanese = "ja";
const langKorean = "ko";
const messageKey = "hello";
console.log(languages?.[langJapanese]?.[messageKey]);
console.log(languages?.[langKorean]?.[messageKey]);

const obj = { key: "value" };
console.log(obj.toString());
console.log(String(obj));

const customObject = {
    toString() {
        return "custom value";
    }
};
console.log(String(customObject));

const obj = {};
const keyObject1 = { a: 1 };
const keyObject2 = { b: 2 };
obj[keyObject1] = "1";
obj[keyObject2] = "2";
console.log(obj);

const obj = {};
const symbolKey1 = Symbol("シンボル1");
const symbolKey2 = Symbol("シンボル2");
obj[symbolKey1] = "1";
obj[symbolKey2] = "2";
console.log(obj[symbolKey1]);
console.log(obj[symbolKey2]);

const obj = {
    "one": 1,
    "two": 2,
    "three": 3
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const obj = {
    "one": 1,
    "two": 2,
    "three": 3
};
const keys = Object.keys(obj);
keys.forEach(key => {
    console.log(key);
});

const obj = Object.assign(target, ...sources);

const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = Object.assign({}, objectA, objectB);
console.log(merged);

const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = Object.assign(objectA, objectB);
console.log(merged);
console.log(objectA);
console.log(merged === objectA);

const objectA = { version: "a" };
const objectB = { version: "b" };
const merged = Object.assign({}, objectA, objectB);
console.log(merged);

const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = {
    ...objectA,
    ...objectB
};
console.log(merged);

// `version`のプロパティ名が被っている
const objectA = { version: "a" };
const objectB = { version: "b" };
const merged = {
    ...objectA,
    ...objectB,
    other: "other"
};
console.log(merged);

const shallowClone = (obj) => {
    return Object.assign({}, obj);
};
const obj = { a: "a" };
const cloneObj = shallowClone(obj);
console.log(cloneObj);
console.log(obj === cloneObj);

const shallowClone = (obj) => {
    return Object.assign({}, obj);
};
const obj = {
    level: 1,
    nest: {
        level: 2
    },
};
const cloneObj = shallowClone(obj);
console.log(cloneObj.nest === obj.nest);

const shallowClone = (obj) => {
    return Object.assign({}, obj);
};
function deepClone(obj) {
    const newObj = shallowClone(obj);
    Object.keys(newObj)
        .filter(k => typeof newObj [k] === "object")
        .forEach(k => newObj [k] = deepClone(newObj [k]));
    return newObj;
}
const obj = {
    level: 1,
    nest: {
        level: 2
    }
};
const cloneObj = deepClone(obj);
console.log(cloneObj.nest === obj.nest);

const obj = {};
console.log(obj.toString());

console.log(typeof Object.prototype.toString);

const obj = {
    "key": "value"
};
console.log(obj.toString === Object.prototype.toString);
console.log(obj.toString());

const customObject = {
    toString() {
        return "custom value";
    }
};
console.log(customObject.toString());

const obj = {};
console.log(Object.hasOwn(obj, "toString"));
console.log("toString" in obj);

const obj = {
    toString() {
        return "custom value";
    }
};
console.log(Object.hasOwn(obj, "toString"));
console.log("toString" in obj);

const obj = Object.create(Object.prototype);
console.log(obj.toString === Object.prototype.toString);

const Array = function() {};
Array.prototype = Object.create(Object.prototype);
const array = Object.create(Array.prototype);
console.log(array.hasOwnProperty === Object.prototype.hasOwnProperty);

const array = [];
console.log(array.hasOwnProperty === Object.prototype.hasOwnProperty);

const numbers = [1, 2, 3];
console.log(numbers.toString());

const obj = Object.create(null);
console.log(obj.hasOwnProperty);

const obj = {};
console.log(obj["toString"]);
const mapLike = Object.create(null);
console.log(mapLike["toString"]);

const mapLike = Object.create(null);
console.log(mapLike.hasOwnProperty("key"));

const mapLike = Object.create(null);
console.log(Object.hasOwn(mapLike, "key"));

const emptyArray = [];
const numbers = [1, 2, 3];
const mtrix = [
    ["a", "b"],
    ["c", "d"]
];

const array = ["one", "two", "three"];
console.log(array[0]);

const matrix = [
    ["a", "b"],
    ["c", "d"]
];
console.log(matrix[0][0]);

const array = ["one", "two", "three"];
console.log(array.length);
console.log(array[array.length - 1]);

const array = ["one", "two", "three"];
console.log(array[100]);

const obj = {
    "0": "one",
    "1": "two",
    "2": "three",
    "length": 3
};
console.log(obj[100]);

const sparseArray = [1,, 3];
console.log(sparseArray.length);
console.log(sparseArray[1]);

const array = ["a", "b", "c"];
console.log(array.at(0));
console.log(array.at(1));
console.log(array.at(-1));
console.log(array[array.length - 1]);

const array = ["a", "b", "c"];
console.log(array[-1]);

const obj = {};
const array = [];
console.log(Array.isArray(obj));
console.log(Array.isArray(array));

const array = [];
console.log(typeof array);

const typedArray = new Int8Array(8);
console.log(Array.isArray(typedArray));

const array = ["one", "two", "three"];
const [first, second, third] = array
console.log(first);
console.log(second);
console.log(third);

const denseArray = [1, undefined, 3];
const sparseArray = [1, , 3];
console.log(denseArray[1]);
console.log(sparseArray[1]);

const denseArray = [1, undefined, 3];
const sparseArray = [1, , 3];
console.log(Object.hasOwn(denseArray, 1));
console.log(Object.hasOwn(sparseArray, 1));

const array = ["Java", "JavaScript", "Ruby", "JavaScript"];
const indexOfJS = array.indexOf("JavaScript");
console.log(indexOfJS);
const lastIndexOfJS = array.lastIndexOf("JavaScript");
console.log(lastIndexOfJS);
console.log(array[indexOfJS]);
console.log(array[lastIndexOfJS]);
console.log(array.indexOf("JS"));
console.log(array.lastIndexOf("JS"));

const obj = { key: "value"};
const array = ["A", "B", obj];
console.log(array.indexOf({ key: "value" }));
console.log(obj === { key: "value" });
console.log(array.indexOf(obj));

const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
];
const indexOfBlue = colors.findIndex((obj) => {
    return obj.color === "blue";
});
console.log(indexOfBlue);
console.log(colors[indexOfBlue]);

const records = [
    { date: "2020/12/1", count: 5 },
    { date: "2020/12/2", count: 11 },
    { date: "2020/12/3", count: 9 },
    { date: "2020/12/4", count: 12 },
    { date: "2020/12/5", count: 3 }
];
const firstRecordIndex = records.findIndex((record) => {
    return record.count > 10;
});
const lastRecordIndex = records.findLastIndex((record) => {
    return record.count > 10;
});
console.log(firstRecordIndex);
console.log(records[firstRecordIndex]);
console.log(lastRecordIndex);
console.log(records[lastRecordIndex]);

const colors = [
    { "color": "red"},
    { "color": "green"},
    { "color": "blue"}
];
const blueCoolor = colors.find((obj) => {
    return obj.color === "blue";
});
console.log(blueColor);
const whiteColor = colors.find((obj) => {
    return obj.color === "white";
});
console.log(whiteColor);

const records = [
    { date: "2020/12/1", count: 5 },
    { date: "2020/12/2", count: 11 },
    { date: "2020/12/3", count: 9 },
    { date: "2020/12/4", count: 12 },
    { date: "2020/12/5", count: 3 }
];
const firstRecord = records.findIndex((record) => {
    return record.count > 10;
});
const lastRecord = records.findLastIndex((record) => {
    return record.count > 10;
});
console.log(firstRecord);
console.log(lastRecord);

const array = ["A", "B", "C", "D", "E"];
console.log(array.slice(1, 4));
console.log(array.slice(1));
console.log(array.slice(-1));
console.log(array.slice(1, 1));
console.log(array.slice(4,1));

const array = ["Java", "JavaScript", "Ruby"];
const indexOfJS = array.indexOf("JavaScript");
if (indexOfJS !== -1) {
    console.log("配列にJavaScriptが含まれている");
};

const array = ["Java", "JavaScript", "Ruby"];
if (array.includes("JavaScript")) {
    console.log("配列にJavaScriptが含まれている");
};

const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
];
const isIncludedBlueColor = colors.some((obj) => {
    return obj.color === "blue";
});
console.log(isIncludedBlueColor);

const array = ["A", "B", "C"];
array.push("D");
console.log(array);
const poppedItem = array.pop();
console.log(poppedItem);
console.log(array);

const array = ["A", "B", "C"];
array.unshift("S");
console.log(array);
const shiftedItem = array.shift();
console.log(shiftedItem);
console.log(array);

const array = ["A", "B", "C"];
const newArray = array.concat(["D", "E"]);
console.log(newArray);

const array = ["A","B", "C"];
const newArray = array.concat("新しい要素");
console.log(newArray);

const array = ["A", "B", "C"];
const newArray = ["X", "Y", "Z", ...array];
const newArrayConcat = ["X", "Y", "Z"].concat(array);
console.log(newArray);
console.log(newArrayConcat)

const array = ["A", "B", "C"];
const newArray = ["X", ...array, "Z"];
console.log(newArray);

const array = [[["A"], "B"], "C"];
console.log(array.flat());
console.log(array.flat(1));
console.log(array.flat(2));
console.log(array.flat(Infinity));

const array = ["A", "B", "C"];
console.log(array.flat());

const array = [];
array.splice(インデックス, 削除する要素数);
array.splice(インデックス, 削除する要素数, ...追加する要素数);

const array = ["a", "b", "c"];
array.splice(1, 1);
console.log(array);
console.log(array.length);
console.log(array[1]);
array.splice(0, array.length);
console.log(array.length);

const array = [1, 2, 3];
array.length = 0;
console.log(array);

let array = [1, 2, 3];
console.log(array.length);
array = [];
console.log(array.length);

const array = [1, 2, 3];
console.log(array.length);
array = [];

const myArray = ["A", "B", "C"];
const result = myArray.push("D");
console.log(result);
console.log(myArray);

const myArray = ["A", "B", "C"];
const newArray = myArray.concat("D");
console.log(newArray);
console.log(myArray)
console.log(myArray === newArray);

function removeAtIndex(array, index) {
    const copiedArray = array.slice();
    copiedArray.splice(index, 1);
    return copiedArray;
}
const array = ["A", "B", "C"];
const newArray = removeAtIndex(array, 1);
console.log(newArray);
console.log(array);

const array = ["A", "B", "C"];
const newArray = array.toSpliced(1, 1);
console.log(newArray);
console.log(array);

function removeAtIndex(array, index) {
    return array.toSpliced(index, 1);
}
const array = ["A", "B", "C"];
const newArray = removeAtIndex(array, 1);
console.log(newArray);
console.log(array);

const array = ["A", "B", "C"];
const newArray = array.with(1, "B2");
console.log(newArray);

const array = [1, 2, 3];
array.forEach((curerntValue, index, array) => {
    console.log(curerntValue, index, array);
});

const array = [1, 2, 3];
const newArray = array.map((currentValue, index, array) => {
    return currentValue * 10;
});
console.log(newArray);
console.log(array === newArray);

const array = [1, 2, 3];
const newArray = array.filter((currentValue, index, array) => {
    return currentValue % 2 === 1;
});
console.log(newArray);
console.log(array === newArray);

const array = [1, 2, 3];
const totalValue = array.reduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
}, 0);
console.log(totalValue);

const array = [1, 2, 3];
let totalValue = 0;
array.forEach((currentValue) => {
    totalValue += currentValue;
});
console.log(totalValue);

const array = [1, 2, 3];
function sum(array) {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}
console.log(sum(array));

function myFunc() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(typeof arguments.forEach);
}
myFunc("a", "b", "c");

function myFunc() {
    console.log(Array.isArray([1, 2, 3]));
    console.log(Array.isArray(arguments));
}
myFunc("a", "b", "c");

function myFunc() {
    const argumentsArray = Array.from(arguments);
    console.log(Array.isArray(argumentsArray));
    argumentsArray.forEach(arg => {
        console.log(arg);
    });
}
myFunc("a", "b", "c");

const array = ["a"].concat("b").concat("c");
console.log(array);

const abArray = ["a"].concat("b");
console.log(abArray);
const abcArray = abArray.concat("c");
console.log(abcArray);

const ECMAScriptVersions = [
    { name: "ECMAScript 1", year: 1997 },
    { name: "ECMAScript 2", year: 1998 },
    { name: "ECMAScript 3", year: 1999 },
    { name: "ECMAScript 5", year: 2009 },
    { name: "ECMAScript 5.1", year: 2011 },
    { name: "ECMAScript 2015", year: 2015 },
    { name: "ECMAScript 2016", year: 2016 },
    { name: "ECMAScript 2017", year: 2017 }
];
const versionNames = ECMAScriptVersions
    .filter(ECMAScript => ECMAScript.year <= 2000)
    .map(ECMAScript => ECMAScript.name);
console.log(versionNames);

const str = "This book is \"js-primer\"";
console.log(str);

const str = "a" + "b"
console.log(str);

const name = "JavaScript";
console.log("Hello " + name + "!");

const str = "文字列"
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);

const str = "文字列";
console.log(str[42]);

const str = "文字列"
console.log(str.at(0));
console.log(str.at(1));
console.log(str.at(2));
console.log(str.at(-1));

const str = "アオイ";
console.log(str.charCodeAt(0).toString(16));
console.log(str.charCodeAt(1).toString(16));
console.log(str.charCodeAt(2).toString(16));

const str = String.fromCharCode(
    0x30a2,
    0x30aa,
    0x30a4
);
console.log(str);

const strings = "赤・青・緑".split("・");
console.log(strings);

const str = "赤・青・緑".split("・").join("、");
console.log(str);

const str = "a b c d";
const strings = str.split(/\s+/);
console.log(strings);

console.log("文字列".length);

console.log("".length);

console.log("文字列" === "文字列");
console.log("JS" === "ES");
console.log("文字列" === "文字");

console.log("A".charCodeAt(0));
console.log("B".charCodeAt(0));
console.log("A" > "B");
console.log("ABC" > "ABD");

const str = "ABCDE";
console.log(str.slice(1));
console.log(str.slice(1, 5));
console.log(str.slice(-1));
console.log(str.slice(1, 4));
console.log(str.slice(4, 1));

const str = "ABCDE";
console.log(str.substring(1));
console.log(str.substring(1, 5));
console.log(str.substring(-1));
console.log(str.substring(1, 4));
console.log(str.substring(4, 1));

const url = "https://example.com?param=1";
const indexOfQuery = url.indexOf("?");
const queryString = url.slice(indexOfQuery);
console.log(queryString);

const str = "にわにはにわにわとりがいる";
console.log(str.indexOf("にわ"));
console.log(str.lastIndexOf("にわ"));
console.log(str.indexOf("未知のキーワード"));

const str = "JavaScript";
const searchWorld = "Script";
const index = str.indexOf(searchWorld);
if (index !== -1) {
    console.log(`${searchWorld}が見つかりました`);
} else {
    console.log(`${searchWorld}は見つかりませんでした`);
}

const str = "にわにはにわにわとりがいる"
console.log(str.startsWith("にわ"));
console.log(str.startsWith("いる"));
console.log(str.endsWith("にわ"));
console.log(str.endsWith("いる"));
console.log(str.includes("にわ"));
console.log(str.includes("いる"));

const patternA = /パターン/フラグ;
const patternB = new RegExp("パターン文字列", "フラグ");

const pattern = /a+/;
const pattern = new RegExp("a+");

// function main() {
//     // `[`は対となる`]`を組み合わせる特殊文字であるため、単独で書けない
//     const invalidPattern = /[/;
// }

function main() {
    const invalidPattern = new RegExp("[");
}
main();

const pattern = /\s{3}/;

const spaceCount = 3;
const pattern = new RegExp(`\\s{${spaceCount}}`);

const str = "ABC123EFG";
const searchPattern = /\d{3}/;
console.log(str.search(searchPattern));

// const str = "abc123def";
// const searchPattern = /\d+/;
// cosnt index = str.search(searchPattern);
// str.slice(index, index + マッチした文字列の長さ);

console.log("文字列".match(/マッチしないパターン/));

const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/;
const results = str.match(alphabetsPattern);
console.log(results.length);
console.log(results[0]);
console.log(results.index);
console.log(results.input);

const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
const resultsWithG = str.match(alphabetsPattern);
console.log(resultsWithG.length);
console.log(resultsWithG[0]);
console.log(resultsWithG[1]);
console.log(resultsWithG.index);
console.log(resultsWithG.input);

const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
const matchesIterator = str.matchAll(alphabetsPattern);
for (const match of matchesIterator) {
    console.log(`match: "${match[0]}", index: ${match.index}, input: "${match.input}"`);
}

const pattern = /ECMAScript (\d+)/;
const [all, capture1] = "ECMAScript 6".match(pattern);
console.log(all);
console.log(capture1);

const pattern = /ES(\d+)/g;
const matchesIterator = "ES2015、ES2016、ES2017".matchAll(pattern);
for (const match of matchesIterator) {
    console.log(`match: "${match[0]}", capture1: ${match[1]}, index: ${match.index}, input: "${match.input}"`);
}

const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/;
const results = alphabetsPattern.exec(str);
console.log(results.length)
console.log(results[0]);
console.log(results.index);
console.log(results.input);

const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
console.log(alphabetsPattern.lastIndex);
const result1 = alphabetsPattern.exec(str);
console.log(result1[0]);
console.log(alphabetsPattern.lastIndex);
const result2 = alphabetsPattern.exec(str);
console.log(result2[0]);
console.log(alphabetsPattern.lastIndex);
const result3 = alphabetsPattern.exec(str);
console.log(result3);
console.log(alphabetsPattern.lastIndex);

const str = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
let matches;
while (matches = alphabetsPattern.exec(str)) {
    console.log(`match: ${matches[0]}, index: ${matches.index}, lastIndex: ${alphabetsPattern.lastIndex}`);
}

const str = "にわにはにわにわとりがいる";
console.log(/^にわ/.test(str));
console.log(/^いる/.test(str));
console.log(/^にわ$/.test(str));
console.log(/^いる$/.test(str));
console.log(/にわ/.test(str));
console.log(/いる/.test(str));

const str = "/正規表現のような文字列/";
const regExpLikePattern = /^\/.*\/$/;
console.log(regExpLikePattern.test(str));
const isRegExpLikeString = (str) => {
    return str.startsWith("/") && str.endsWith("/");
};
console.log(isRegExpLikeString(str));

"use strict";
const str = "文字列";
delete str[0];

const str = "文字列";
const newStr = str.replace("文字", "");
console.log(newStr);

const str = "にわにはにわにわとりがいる"
console.log(str.replace("にわ", "niwa"));
console.log(str.replace(/にわ/, "niwa"));
console.log(str.replace(/にわ/g, "niwa"));

const str = "???";
console.log(str.replace("?", "!"));
console.log(str.replaceAll("?", "!"));
console.log(str.replace(/\?/g, "?"));
console.log(str.replaceAll(/\?/g, "!"));

function toDateJa(dateString) {
    return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/g, (all, year, month, day) => {
        return `${year}年${month}月${day}日`;
    });
}
console.log(toDateJa("本日は晴天ナリ"));
console.log(toDateJa("今日は2017-03-01です"));

function getResource(baseURL, pathname) {
    const url = baseURL + pathname;
    console.log(url)
}
const baseURL = "http://example.com/resource";
const pathname = "/example.js";
getResource(baseURL, pathname);

function getResource(baseURL, pathname) {
    const url = baseURL + patname;
    console.log(url);
}

const baseURL = "http://example.com/resouces/";
const pathname = "/example.js"
getResource(baseURL, pathname);

function tag(str) {
    console.log(str);
}
tag(`template ${0} literal ${1}`);

function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
}
tag `template ${0} literal ${1}`;

function stringRaw(strings, ...values) {
    return strings.reduce((result, str, i) => {
        console.log([result, values[i - 1], str]);
        return result + values[i - 1] + str;
    });
}
console.log(stringRaw`template ${0} literal ${1}`);

console.log(String.raw`template ${0} literal ${1}`);

function escapeURL(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + encodeURIComponent(values[i - 1]) + str;
    });
}
const input = "A&B";
const escapedURL = escapeURL`https://example.com/search?q=${input}&sort=desc`;
console.log(escapedURL)

console.log("あ".codePointAt(0));
console.log(String.fromCodePoint(12354));
console.log(String.fromCodePoint(0x3042));

const codePointOfあ = "あ".codePointAt(0);
const hexOfあ = codePointOfあ.toString(16);
console.log(hexOfあ);
console.log("\u{3042}");

function convertCodeUnits(str) {
    const codeUnits = [];
    for (let i = 0; i < str.length; i++) {
        codeUnits.push(str.charCodeAt(i).toString(16));
    }
    return codeUnits;
}
function convertCodePoints(str) {
    return Array.from(str).map(char => {
        return char.codePointAt(0).toString(16);
    });
}

const str = "アオイ"
const codeUnits = convertCodeUnits(str);
console.log(codeUnits);
const codePoints = convertCodePoints(str);
console.log(codePoints);

function convertCodeUnits(str) {
    const codeUnits = [];
    for (let i = 0; i < str.length; i++) {
        codeUnits.push(str.charCodeAt(i).toString(16));
    }
    return codeUnits;
}
function convertCodePoints(str) {
    return Array.from(str).map(char => {
        return char.codePointAt(0).toString(16);
    });
}

const str = "リンゴ🍎";
const codeUnits = convertCodeUnits(str);
console.log(codeUnits);
const codePoints = convertCodePoints(str);
console.log(codePoints);

console.log("🍎".length);

const [all, fish] = "𩸽のひらき".match(/(.)のひらき/);
console.log(all);
console.log(fish);

const [all, fish] = "𩸽のひらき".match(/(.)のひらき/u);
console.log(all);
console.log(fish);

console.log("🍎".length);
console.log("\uD83C\uDF4E");
console.log("\uD83C\uDF4E".length);

const codePoints = Array.from("リンゴ🍎");
console.log(codePoints);
console.log(codePoints.length);

function countOfCodePoints(str, codePoint) {
    return Array.from(str).filter(item => {
        return item === codePoint;
    }).length;
}
console.log(countOfCodePoints("🍎🍇🍎🥕🍒", "🍎"));

function countOfCodePoints(str, codePoint) {
    let count = 0;
    for (const item of str) {
        if (item === codePoint) {
            count ++;
        }
    }
    return count;
}
console.log(countOfCodePoints("🍎🍇🍎🥕🍒", "🍎"));

"string".toUpperCase();

const str = new String("input value");
str.toUpperCase();

const str = "文字列";
console.log(typeof str);
const stringWraper = new String("文字列");
console.log(typeof stringWraper);

const str = "string";
str.toUpperCase();
(new String(str)).toUpperCase();

const stringWraper = new String("文字列");
console.log(stringWraper.valueOf());

const str = "文字列";
const stringWraper = new String("文字列");

function fn() {
    const x = 1;
    console.log(x);
}
fn();
console.log(x);

function fn(arg) {
    console.log(arg);
}
fn(1);
console.log(arg);

let a;
let a;

function fnA() {
    let x;
}
function fnB() {
    let x;
}

{
    const x = 1;
    console.log(x);
}
cosnole.log(x);

if (true) {
    const x = "inner";
    console.log(x);
}
console.log(x);

const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}
console.log(element);

{
    const x = "x";
    {
        console.log(x);
    }
}

{
    {
        console.log(xyz);
    }
}

{
    const x = "outer";
    {
        const x = "inner";
        console.log(x);
    }
    console.log(x);
}

const x = "x";
console.log(x);

const globalVariable = "グローバル";
{
    console.log(globalVariable);
}
function fn() {
    console.log(globalVariable)
}
fn();

console.log(isNaN);
console.log(Array);

const Array = 1;
console.log(Array);

function doHeavyTask() {

}
const startTime = Date.now();
doHeavyTask();
const endTime = Date.now();
console.log(`実行時間は${endTime - startTime}ミリ秒`);

const measureTask = (taskFn) => {
    const startTime = Date.now();
    taskFn();
    const endTime = Date.now();
    console.log(`実行時間は${endTime - startTime}ミリ秒`);
};
function doHeavyTask() {

}
measureTask(doHeavyTask);

let let_x;
var var_x;
console.log(let_x);
console.log(var_x);
let_x = "letのx";
var_x = "varのx";

console.log(x);
let x = "letのx";

console.log(x);
var x = "varのx";

var x;
console.log(x);
x = "varのx";
console.log(x);

function fn() {
    console.log(x);
    {
        var x = "varのx";
    }
    console.log(x);
}
fn();

function fn() {
    var x;
    console.log(x);
    {
        x = "varのx";
    }
    console.log(x);
}
fn();

hello();

function hello(){
    return "Hello";
}

hello();
var hello = function() {
    return "Hello";
};

(function() {
    var foo = "foo";
    console.log(foo);
})();
console.log(typeof foo === "undefined");

function fn() {
    var foo = "foo";
    console.log(foo);
}
fn();
console.log(typeof foo === "undefined");

function createCounter() {
    let count = 0;
    function increment() {
        count = count + 1;
        return count;
    }
    return increment;
}
const myCounter = createCounter();
myCounter();
myCounter();
const newCounter = createCounter();
newCounter();
newCounter();
myCounter();
newCounter();

const x = 10;

function printX() {
    console.log(x);
}

function run() {
    const x = 20;
    printX();
}

run();

let x = 10;

function printX() {
    console.log(x);
}

function run() {
    let x = 20;
    printX();
}

printX();
run();

let x = "before text";
x = "after text";

function printX() {
    const x = "X";
    console.log(x);
}

printX();

function createArray() {
    const tempArray = [1, 2, 3];
    return tempArray;
}
const array = createArray();
console.log(array);

const createCounter = () => {
    let count = 0;
    return function increment() {
        count = count + 1;
        return count;
    };
};
const myCounter = createCounter();
console.log(myCounter());
console.log(myCounter());

const createCounter = () => {
    let count = 0;
    return function increment() {
        count = count + 1;
        return count;
    };
};
const countUp = createCounter();
const newCountUp = createCounter();
console.log(countUp === newCountUp);
console.log(countUp());
console.log(newCountUp());

const createCounter = () => {
    let privateCount = 0;
    return () => {
        privateCount++;
        return `${privateCount}回目`;
    };
};
const counter = createCounter();
console.log(counter());
console.log(counter());

function greaterThan(n) {
    return function(m) {
        return m > n;
    };
}
const greaterThan5 = greaterThan(5);
console.log(greaterThan5(4));
console.log(greaterThan5(5));
console.log(greaterThan5(6));

function countUp() {
    countUp.count = countUp.count + 1;
    return countUp.count;
}
countUp.count = 0;
console.log(countUp());
console.log(countUp());

function countUp() {
    countUp.count = countUp.count + 1;
    return countUp.count;
}
countUp.count = 0;
console.log(countUp());
countUp.count = 10;
console.log(countUp());

// {/* <script>
// console.log(this);
// </script>

// <script type="module">
// console.log(this);
// </script>  */}

console.log(globalThis);

function fn1() {}
const fn2 = function() {};
const fn3 = () => {};

function fn() {}
fn();

const obj = {
    method() {
    }
};

const obj = {
    method() {
    }
};
obj.method();

fn();
obj.method();
obj1.obj2.method();
obj1["obj2"]["method"]();

"use strict";
function fn1() {
    return this;
}
const fn2 = function() {
    return this;
};
console.log(fn1());
console.log(fn2());

"use strict";
function outer() {
    console.log(this);
    function inner() {
        console.log(this);
    }
    inner();
}
outer();

const obj = {
    method1: function() {
        return this;
    },
    method2() {
        return this;
    }
};
console.log(obj.method1());
console.log(obj.method2());

const person = {
    fullName: "Brendan Eich",
    sayName: function() {
        return this.fullName;
    }
};
console.log(person.sayName());

const obj1 = {
    obj2: {
        obj3: {
            method() {
                return this;
            }
        }
    }
};
console.log(obj1.obj2.obj3.method() === obj1.obj2.obj3);

"use strict";
const person = {
    fullName: "Brendan Eich",
    sayName: function() {
        return this.fullName;
    }
};
console.log(person.sayName());
const say = person.sayName;
say()

"use strict";
const say = function() {
    return this.fullName;
};
say();

"use strict";
function say(message) {
    return `${message} #{this.fullName}!`;
}
const person = {
    fullName: "Brendan Eich"
};
console.log(say.call(person, "こんにちは"));
say("こんにちは");

"use strict";
function say(message) {
    return `${message} ${this.fullName}!`;
}
const person = {
    fullName: "Brendan Eich"
};
console.log(say.apply(person, ["こんにちは"]));
say("こんにちは");

function add(x, y) {
    return x + y;
}
console.log(add.call(null, 1, 2));
console.log(add.apply(null, [1, 2]));

function say(message) {
    return `${message} ${this.fullName}!`;
}
const person = {
    fullName: "Brendan Eich"
};
const sayPerson = say.bind(person, "こんにちは");
console.log(sayPerson());

function say(message) {
    return `${message} ${this.fullName}!`;
}
const person = {
    fullName: "Brendan Eich"
};
const sayPerson = () => {
    return say.call(person, "こんにちは");
};
console.log(sayPerson());

"use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map(function(str) {
            return this.prefix + "-" + str;
        });
    }
}
Prefixer.prefixArray(["a", "b", "c"]);

"use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        const callback = function(str) {
            return this.prefix + "-" + str;
        };
        return strings.map(callback);
    }
};
Prefixer.prefixArray(["a", "b", "c"]);

"use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        const that = this;
        return strings.map(function(str) {
            return that.prefix + "-" + str;
        });
    }
};
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings);

"use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map(function(str) {
            return this.prefix + "-" + str;
        }, this);
    }
};
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings);

const fn = () => {
    return this;
};
console.log(fn() === this);

"use strict";
function outer() {
    return () => {
        return this;
    };
}
const innerArrowFunction = outer();
console.log(innerArrowFunction());

"use strict";
function outer() {
    const that = this;
    return () => {
        return that;
    };
}
const innerArrowFunction = outer();
console.log(innerArrowFunction());

const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map((str) => {
            return this.prefix + "-" + str;
        });
    }
};
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings);

const fn = () => {
    return this;
};
console.log(fn());
console.log(fn.call({}));

const obj = {
    method() {
        const arrowFunction = () => {
            return this;
        };
        return arrowFunction();
    }
};
console.log(obj.method());
console.log(obj.method.call("THAT"));

class MyClass {
}
const myClass = new MyClass();
const myClassAnother = new MyClass();
console.log(myClass === myClassAnother);
console.log(myClass instanceof MyClass);
console.log(myClassAnother instanceof MyClass);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const point = new Point(3, 4);
console.log(point.x);
console.log(point.y);

class MyClass {
    constructor() {}
}
MyClass();

class Point {
    constructor(x, y) {
        return {x, y};
    }
}
const point = new Point(3, 4);
console.log(point);
console.log(point instanceof Point);

class Thing {}
const thing = new Thing()

const Point = function PointConstructor(x, y) {
    this.x = x;
    this.y = y;
};

function MyClassLike() {
}
MyClassLike();

class MyClass {
}
MyClass();

class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count ++;
    }
}
const counterA = new Counter();
const counterB = new Counter();

counterA.increment(); 

console.log(counterA.count);
console.log(counterB.count);

class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
}
const counterA = new Counter();
const counterB = new Counter();
console.log(counterA.increment === counterB.increment);

class NumberWrapper {
    constructor(value) {
        this._value = value;
    }
    get value() {
        console.log("getter");
        return this._value;
    }
    set value(newValue) {
        console.log("setter");
        this._value = newValue;
    }
}

const numberWrapper = new NumberWrapper(1);
console.log(numberWrapper.value);
numberWrapper.value = 42;
console.log(numberWrapper.value);

const array = [1, 2, 3, 4, 5];
array.length = 2;
console.log(array.join(", "));
array.length = 5;
console.log(array.join(", "));

class ArrayLike {
    constructor(items = []) {
        this._items = items;
    }

    get items() {
        return this._items;
    }

    get length() {
        return this._items.length;
    }

    set length(newLength) {
        const currentItemsLength = this.items.length;
        if (newLength < currentItemsLength) {
            this._items = this.items.slice(0, newLength);
        } else if (newLength > currentItemsLength) {
            this._items = this.items.concat(new Array(newLength - currentItemsLength));
        }
    }
}

const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
arrayLike.length = 2;
console.log(arrayLike.items.join(", "));
arrayLike.length = 5;
console.log(arrayLike.items.join(", "));

class Counter {
    constructor() {
        this.count++;
    }
}

class Counter {
    count = 0;
    increment() {
        this.count++;
    }
}
const counter = new Counter();
counter.increment();
console.log(counter.count);

class MyClass {
    publicField = 1;
    constructor(arg) {
        this.property = arg;
    }
}

class Myclass {
    publicField = 1;
    constructor(arg) {
        this.property = arg;
    }
}
const myClass = new MyClass(2);
console.log(myClass.publicField);
console.log(myClass.property);

class OwnClass {
    publicField = 1;
    constructor(arg) {
        this.publicField = arg;
    }
}
const ownClass = new OwnClass(2);
console.log(ownClass.publicField);

class Loader {
    loadedContent;
    load() {
        this.loadedCOntent = "読み込んだコンテンツ内容";
    }
}

class Loader {
    load() {
        this.loadedContent = "読み込んだコンテンツ内容";
    }
}

class Counter {
    count = 0;
    up = this.increment;
    increment() {
        this.count++;
    }
}
const counter = new Counter();
counter.up();
console.log(counter.count);

class Counter {
    count = 0;
    up = () => {
        this.increment();
    };
    increment() {
        this.count++;
    }
}
const counter = new Counter();
const up = counter.up;
up();
console.log(counter.count);
const increment = counter.increment;
increment();

class ExampleClass {
    fieldMethod = () => {
        console.log("クラスフィールドで定義されたメソッド");
    };
    constructor() {
        this.propertyMethod = () => {
            console.log("インスタンスにプロパティとして定義されたメソッド");
        };
    }
}

class ExampleClass {
    field = "フィールド";
    constructor() {
        this.property = "コンストラクタ";
    }
    set field(value) {
        console.log("filedで定義された値", value);
    }
    set property(value) {
        console.log("constructorで代入された値", value);
    }
}
const example = new ExampleClass();

class PrivateExampleClass {
    #privateField = 42;
    dump() {
        console.log(this.#privateField);
    }
}
const privateExample = new PrivateExampleClass();
privateExample.dump();

class NumberWrapper {
    _value;
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
}
const numberWrapper = new NumberWrapper(1);
console.log(numberWrapper._value);

class NumberWrapper {
    #value;
    constructor(value) {
        this.#value = value;
    }
    get value() {
        return this.#value;
    }
    set value(newValue) {
        this.#value = newValue;
    }
}

const numberWrapper = new NumberWrapper(1);
console.log(numberWrapper.#value);

class  ArrayWrapper {
    constructor(array = []) {
        this.array = array;
    }
    static of(...items) {
        return new ArrayWrapper(items);
    }

    get length() {
        return this.array.length;
    }
}
const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
const arrayWrapperB = ArrayWrapper.of(1, 2, 3);
console.log(arrayWrapperA.length);
console.log(arrayWrapperB.length);

class Colors {
    static GREEN = "緑";
    static RED = "赤";
    static BLUE = "青";
}
console.log(Colors.GREEN);

class MyClass {
    static #privateClassProp = "This is private";
    static outputPrivate() {
        console.log(this.#privateClassProp);
    }
}
MyClass.outputPrivate();

class ExampleClass {
    instanceMethod = () => {
        console.log("インスタンスメソッド");
    };
    prototypeMethod() {
        console.log("プロトタイプメソッド");
    }
}
const example = new ExampleClass();
example.instanceMethod();
example.prototypeMethod();

class ConflictClass {
    method = () => {
        console.log("インスタンスオブジェクトのメソッド");
    };
    method() {
        console.log("プロトタイプのメソッド");
    }
}
const conflict = new ConflictClass();
conflict.method();

class ConflictClass {
    method = () => {
        console.log("インスタンスオブジェクトのメソッド");
    };

    method() {
        console.log("プロトタイプメソッド");
    }
}

const conflict = new ConflictClass();
conflict.method();
delete conflict.method;
conflict.method(); 

function fn() {
}
console.log(typeof fn.prototype === "object");

class MyClass {
}
console.log(typeof MyClass.prototype === "object");

class MyClass {
    method() {}
}
console.log(typeof MyClass.prototype.method === "function");
console.log(MyClass.prototype.constructor === MyClass);

class MyClass {
    method() {
        console.log("プロトタイプメソッド");
    }
}
const instance = new MyClass();
instance.method();

class MyClass {
    method() {
        console.log("プロトタイプのメソッド");
    }
}
const instance = new MyClass();
const MyClassPrototype = Object.getPrototypeOf(instance);
console.log(MyClassPrototype === MyClass.prototype);

class MyClass {
    method() {
        console.log("プロトタイプのメソッド");
    }
}
const instance = new MyClass();
instance.method();
const Prototype = Object.getPrototypeOf(instance);
console.log(instance.method === Prototype.method);

class MyClass {
    method() {
        console.log("プロトタイプのメソッド");
    }
}
const instance = new MyClass();
if (Object.hasOwn(instance, "method")) {
    instance.method();
} else {
    const prototypeObject = Object.getPrototypeOf(instance);
    if (Object.hasOwn(prototypeObject, "method")) {
        prototypeObject.method.call(instance);
    }
}

class Parent {
}
class Child extends Parent {
}
const instance = new Child();

class Parent {
    constructor(...args) {
        console.log("Parentコンストラクタの処理", ...args);
    }
}
class Child extends Parent {
    constructor(...args) {
        super(...args);
        console.log("Childコンストラクタの処理", ...args);
    }
}
const child = new Child("引数1", "引数2");

class Parent {}
class Child extends Parent {}

class Parent {}
class Child extends Parent {
    constructor(...args) {
        super(...args);
    }
}

class Parent {
    constructor() {
        this.name = "parent";
    }
}
class Child extends Parent {
    constructor() {
        super();
        this.name = "Child";
    }
}
const parent = new Parent();
console.log(parent.name);
const child = new Child();
console.log(child.name);

class Parent {
    parentField = "親クラスで定義したフィールド";
}
class Child extends Parent {
    childField = "子クラスで定義したフィールド"
}
const instance = new Child();
console.log(instance.parentField);
console.log(instance.childField);

class Parent {
    field = "親クラスで定義したフィールド";
}
class Child extends Parent {
    field = "子クラスで定義したフィールド";
}
const instance = new Child();
console.log(instance.field);

class Parent {
    #parentField = "親クラスで定義したPrivateフィールド";
}
class Child extends Parent {
    dump() {
        console.log(this.#parentField);
    }
}
const instance = new Child();
instance.dump();

class Parent {
    method() {
        console.log("Parent.prototype.method");
    }
}
class Child extends Parent {

}
const instance = new Child();
instance.method();

class Parent {
    static hello() {
        return "Hello";
    }
}
class Child extends Parent {}
console.log(Child.hello());

class Parent {
    method() {
        console.log("Parent.prototype.method");
    }
}
class Child extends Parent {
    method() {
        console.log("Child.prototype.method");
        super.method();
    }
}
const child = new Child();
child.method();

class Parent {
    static method() {
        console.log("Parent.method");
    }
}
class Child extends Parent {
    static method() {
        console.log("Child.method");
        super.method();
    }
}
Child.method();

class Parent {}
class Child extends Parent {}

const parent = new Parent();
const child = new Child();
console.log(parent instanceof Parent);
console.log(parent instanceof Child);
console.log(child instanceof Parent);
console.log(child instanceof Child);

class MyArray extends Array {
    get first() {
        return this.at(0);
    }

    get last() {
        return this.at(-1);
    }
}
const array = MyArray.from([1, 2, 3, 4, 5]);
console.log(array.length);
console.log(array.first);
console.log(array.last);

try {
    console.log("try節:この行は実行されます");
    undefindFunction();
} catch (error) {
    console.log("catch節:この行は実行されます");
    console.log(error instanceof ReferenceError);
    console.log(error.message);
} finally {
    console.log("finally節:この行は実行されます");
}

try {
    undefinedFunction();
} catch (error) {
    console.log(error);
}
try {
    undefinedFunction();
} finally {
    console.log("この行は実行されます");
}

try {
    throw new Error("例外が投げられました");
} catch (error) {
    console.log(error.message);
}

function assertPositiveNumber(num) {
    if (num < 0) {
        throw new Error(`${num} is not positive.`);
    }
}

try {
    assertPositiveNumber(-1);
} catch (error) {
    console.log(error instanceof Error);
    console.log(error.message);
}

try {
    throw "例外が投げられました";
} catch (error) {
    console.log(error);
}

try {
    console.log(x);
} catch (error) {
    console.log(error instanceof ReferenceError);
    console.log(error.name);
    console.log(error.message);
}

try {
    eval("foo! bar!");
} catch (error) {
    console.log(error instanceof SyntaxError);
    console.log(error.name);
    console.log(error.message);
}

try {
    const fn = {};
    fn();
} catch (error) {
    console.log(error instanceof TypeError);
    console.log(error.name);
    console.log(error.message);
}

function reveseString(str) {
    if (typeof str !== "string") {
        throw new TypeError(`${str} is not a string`);
    }
    return Array.from(str).reverse().join("");
}

try {
    reverseString(100);
} catch (error) {
    console.log(error instanceof TypeError);
    console.log(error.name);
    console.log(error.message);
}

function fn() {
    x++;
}
fn();

function fn() {
    console.log("メッセージ");
    console.log("エラーメッセージ");
}
fn();

function taskA() {
    console.log("タスクAを実行 at " + Date.now());
}
function taskB() {
    console.log("タスクBを実行 at " + Date.now());
}
function blockTime(timeout) {
    const startTime = Date.now();
    while (true) {
        const diffTime = Date.now() - startTime;
        if (diffTime >= timeout) {
            return;
        }
    }
}
taskA();
blockTime(1000);
taskB();

function taskA() {
    console.log("タスクAを実行 at " + Date.now());
}
function taskB() {
    console.log("タスクBを実行 at " + Date.now());
}
function taskAsync() {
    console.log("非同期のタスクを実行 at " + Date.now());
}
taskA();
setTimeout(() => {
    taskAsync();
}, 1000);
taskB();

function taskA() {
    console.log("タスクAを実行 at " + Date.now());
}
function taskB() {
    console.log("タスクBを実行 at " + Date.now());
}
function taskAsync() {
    console.log("非同期のタスクを実行 at " + Date.now());
}
function blockTime(timeout) {
    const startTime = Date.now();
    while (true) {
        const diffTime = Date.now() - startTime;
        if (diffTime >= timeout) {
            return;
        }
    }
}

const startTime = Date.now();
taskA();
setTimeout(() => {
    const endTime = Date.now();
    taskAsync();
    console.log(`非同期処理のコールバックが呼ばれるまで${endTime - startTime}ミリ秒かかりました`);
}, 10);
blockTime(1000);
taskB();

try {
    throw new Error("同期的なエラー");
} catch (error) {
    console.log("同期的なエラーをキャッチできる");
}
console.log("この行は実行されます");

try {
    setTimeout(() => {
        throw new Error("非同期的なエラー");
    }, 10);
} catch (error) {

}
console.log("この行は実行されます");

setTimeout(() => {
    try {
        throw new Error("エラー");
    } catch (error) {
        console.log("エラーをキャッチできる");
    }
}, 10);
console.log("この行は実行されます");

function asyncPromiseTask() {
    return new Promise((resolve, reject) => {

    });
}
asyncPromiseTask().then(() => {
}).catch(() => {

})

const executor = (resolve, reject) => {

};
const promise = new Promise(executor);

const promise = new Promise((resolve, reject) => {

});
const onFulfilled = () => {
    console.log("resolveされた時に呼ばれる");
};
const onRejected = () => {
    console.log("rejectされたときに呼ばれる");
};
promise.then(onFulfilled, onRejected);

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/success")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
dummyFetch("/success/data").then(function onFulfilled(response) {
    console.log(response);
}, function onRejected(error) {

});
dummyFetch("/failure/data").then(function onFulfilled(response) {

}, function onRejected(error) {
    console.error(error);
});

function delay(timeoutMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeoutMs);
    });
}
delay(10).then(() => {
    console.log("10ミリ秒後に呼ばれる");
});

function errorPromise(message) {
    return new Promise((resolve, reject) => {
        reject(new Error(message));
    });
}
errorPromise("thenでエラーハンドリング").then(undefined, (error) => {
    console.log(error.message);
});
errorPromise("catchでエラーハンドリング").catch(error => {
    console.log(error.message);
});

function throwPromise() {
    return new Promise((resolve, reject) => {
        throw new Error("例外が発生");
    });
}

throwPromise().catch(error => {
    console.log(error.message);
});

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        reject(new Error("エラー"));
    }, 16);
});
promise.then(() => {
    console.log("Fulfilledとなった");
}, (error) => {

});

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        resolve();
    }, 16);
});
promise.then(() => {
    console.log("最初のresolve時に一度だけ呼ばれる");
}, (error) => {

});

const fulfilledPromise = Promise.resolve();

const fulfilledPromise = new Promise((resolve) => {
    resolve();
});

const fulfilledPromise = Promise.resolve(42);
fulfilledPromise.then(value => {
    console.log(value);
});

const promise = Promise.resolve();
promise.then(() => {
    console.log("2. コールバック関数が実行されました");
});
console.log("1. 同期的な処理が実行されました");

const promise = new Promise((resolve) => {
    console.log("1. resolveします");
    resolve();
});
console.log("2. 同期的な処理が実行されました");

const rejectedPromise = Promise.reject(new Error("エラー"));

const rejectedPromise = new Promise((resolve, reject) => {
    reject(new Error("エラー"));
});

Promise.reject(new Error("エラー")).catch(() => {
    console.log("2. コールバック関数が実行されました");
});
console.log("1. 同期的な処理が実行されました");

Promise.resolve()
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    });

const firstPromise = Promise.resolve();
const secondPromise = firstPromise.then(() => {
    console.log(1);
});
const thirdPromise = secondPromise.then(() => {
    console.log(2);
});
console.log(firstPromise === secondPromise);
console.log(secondPromise === thirdPromise);

function asyncTask() {
    return Math.random() > 0.5
        ? Promise.resolve("成功")
        : Promise.reject(new Error("失敗"));
}
asyncTask()
    .then(function onFulfilled(value) {
        console.log(value);
    })
    .catch(function onRejected(error) {
        console.log(error.message);
    });

const rejectedPromise = Promise.reject(new Error("失敗"));
rejectedPromise.then(() => {

}).then(() => {

}).catch(error => {
    console.log(error.message);
});

Promise.resolve().then(() => {
    throw new Error("例外");
}).then(() => {

}).catch(error => {
    console.log(error.message);
});

Promise.reject(new Error("エラー")).catch(error => {
    console.log(error);
}).then(() => {
    console.log("thenのコールバック関数が呼び出される");
});

Promise.resolve(1).then((value) => {
    console.log(value);
    return value * 2;
}).then(value => {
    console.log(value);
    return value * 2;
}).then(value => {
    console.log(value);
}).then(value => {
    console.log(value);
});

Promise.reject(new Error("失敗")).catch(error => {
    return 1;
}).then(value => {
    console.log(value);
    return value * 2;
}).then(value => {
    console.log(value);
});

Promise.resolve().then(function onFulfilledA() {
    return Promise.reject(new Error("失敗"));
}).then(function onFulfilledB() {

}).catch(function onRejected(error) {
    console.log(error.message);
}).then(function onFulfilledC() {
    console.log("onFulfilledCは呼び出されます");
});

function main() {
    return Promise.reject(new Error("エラー"));
}
main().catch(error => {
    console.error(error);
    return Promise.reject(error);
}).then(() => {

}).catch(error => {
    console.log("メインの処理が失敗した");
});

const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();
promise.then(() => {
    console.log("Promiseのthenメソッド");
}).catch((error) => {
    console.log("Promiseのcatchメソッド");
}).finally(() => {
    console.log("Promiseのfinallyメソッド");
});

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
let isLoading = true;
dummyFetch("/resource/A").then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
}).finally(() => {
    isLoading = false;
    console.log("Promiseのfinallyメソッド");
});

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}

const results = [];
dummyFetch("/resource/A").then(response => {
    results.push(response.body);
    return dummyFetch("/resource/B");
}).then(response => {
    results.push(response.body);
}).then(() => {
    console.log(results);
});

function delay(timeoutMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(timeoutMs);
        }, timeoutMs);
    });
}
const promise1 = delay(1);
const promise2 = delay(2);
const promise3 = delay(3);

Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
});

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}

const fetchedPromise = Promise.all([
    dummyFetch("/resource/A"),
    dummyFetch("/resource/B")
]);
fetchedPromise.then(([responseA, responseB]) => {
    console.log(responseA.body);
    console.log(responseB.body);
});

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}

const fetchedPromise = Promise.all([
    dummyFetch("/resource/A"),
    dummyFetch("/not_found/B")
]);
fetchedPromise.then(([responseA, responseB]) => {

}).catch(error => {
    console.log(error);
});

function delay(timeoutMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(timeoutMs);
        }, timeoutMs);
    });
}

const racePromise = Promise.race([
    delay(1),
    delay(32),
    delay(64),
    delay(128)
]);
racePromise.then(value => {
    console.log(value);
});

function timeout(timeoutMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Timeout: ${timeoutMs}ミリ秒経過`));
        }, timeoutMs);
    });
}
function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
Promise.race([
    dummyFetch("/resource/data"),
    timeout(500),
]).then(response => {
    console.log(response.body);
}).catch(error => {
    console.log(error.message);
});

async function doAsync() {
    return "値";
}
doAsync().then(value => {
    console.log(value);
});

function doAsync() {
    return Promise.resolve("値");
}
doAsync().then(value => {
    console.log(value);
});

async function fn1() {}
const fn2 = async function() {};
const fn3 = async() => {};
const obj = { async method() {} };

async function resolveFn() {
    return "返り値";
}
resolveFn().then(value => {
    console.log(value);
});

async function rejectFn() {
    return Promise.reject(new Error("エラーメッセージ"));
}

rejectFn().catch(error => {
    console.log(error.message);
});

async function exceptionFn() {
    throw new Error("例外が発生しました");
}

exceptionFn().catch(error => {
    console.log(error.message);
});

async function asyncMain() {
    await Promiseインスタンス;
}

async function doAsync() {

}
async function asyncMain() {
    await doAsync();
    console.log("この行は非同期処理が完了後に実行される");
}

async function asyncMain() {
    const value = await Promise.resolve(42);
    console.log(value);
}
asyncMain();

function asyncMain() {
    return Promise.resolve(42).then(value => {
        console.log(value);
    });
}
asyncMain();

async function asyncMain() {
    const value = await Promise.reject(new Error("エラーメッセージ"));
}
asyncMain().catch(error => {
    console.log(error.message);
});

async function asyncMain() {
    try {
        const value = await Promise.reject(new Error("エラーメッセージ"));
    } catch (error) {
        console.log(error.message);
    }
}
asyncMain().catch(error => {

});

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
function fetchAB() {
    const results = [];
    return dummyFetch("/resource/A").then(response => {
        results.push(response.body);
        return dummyFetch("/resource/B");
    }).then(response => {
        results.push(response.body);
        return results;
    });
}
fetchAB().then((results) => {
    console.log(results);
});

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
async function fetchAB() {
    const results = [];
    const responseA = await dummyFetch("/resource/A");
    results.push(responseA.body);
    const responseB = await dummyFetch("/resource/B");
    results.push(responseB.body);
    return results;
}
fetchAB().then((results) => {
    console.log(results);
});

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` })
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}

async function fetchResources(resources) {
    const results = [];
    for (const resouirce of resources) {
        const response = await dummyFetch(resouirce);
        results.push(response.body);
    }
    return results;
}
const resources = [
    "/resource/A",
    "/resource/B"
];
fetchResources(resources).then((results) => {
    console.log(results);
});

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
async function fetchAllResouirces(resouces) {
    const promises = resources.map((resource) => {
        return dummyFetch(resource);
    });
    const responses = await Promise.all(promises);
    return responses.map((response) => {
        return response.body;
    });
}
const resources = [
    "/resource/A",
    "/resource/B"
];
fetchAllResources(resources).then((results) => {
    console.log(results);
});

function main() {
    await Promise.rsolve();
}

async function asyncMain() {
    await new Promise((resolve) => {
        setTimeout(resolve, 16);
    });
}
console.log("1. asyncMain関数を呼び出します");
asyncMain().then(() => {
    console.log("3. asyncMain関数が完了しました");
});

console.log("2. asyncMain関数外では、次の行が同期的に呼び出される");

async function fetchResources(resources) {
    const results = [];
    resources.forEach(function(resource) {
        const response = await dummyFetch(resource);
    });
    return results;
}

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
async function fetchResources(resouces) {
    const results = [];
    resources.forEach(async function(resource) {
        const response = await dummyFetch(resource);
        results.push(response.body);
    });
    return results;
}
const resources = ["/resource/A", "/resource/B"];
fetchResources(resources).then((results) => {
    console.log(results);
});

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
async function fetchResources(resources) {
    const results = [];
    console.log("1. fetchResourcesを開始");
    resources.forEach(async function(resource) {
        console.log(`2. ${resource}の取得開始`);
        const response = await dummyFetch(resource);
        console.log(`5. ${resource}の取得完了`);
        results.push(response.body);
    });
    console.log("3. fetchResourcesを終了");
    return results;
}
const resources = ["/resource/A", "/resource/B"];
fetchResources(resources).then((results) => {
    console.log("4.fetchResourcesの結果を取得");
    console.log(results);
});

console.log("実行開始");
const startTime = Date.now();
await new Promise(resolve => setTimeout(resolev, 1000));
console.log(`実行終了: ${Date.now() - statTime}ms 経過しました`);

const map = new Map();
console.log(map.size);

const map = new Map([["key1", "value1"], ["key2", "value2"]]);
console.log(map.size);

const map = new Map();
map.set("key", "value1");
console.log(map.size);
console.log(map.get("key"));
map.set("key", "value2");
console.log(map.get("key"));
console.log(map.has("key"));
console.log(map.has("foo"));

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map.size);
map.delete("key1");
console.log(map.size);
map.clear();
console.log(map.size);

const map = new Map([["key1", "value1"], ["key2", "value2"]]);
const results = [];
map.forEach((value, key) => {
    results.push(`${key}:${value}`);
});
console.log(results);

const map = new Map([["key1", "value1"], ["key2", "value2"]]);
const keys = [];
for (const key of map.keys()) {
    keys.push(key);
}
console.log(keys);
const keysArray = Array.from(map.keys());
console.log(keysArray);

const map = new Map([["key1", "value1"], ["key2", "value2"]]);
const entries = [];
for (const [key, value] of map.entries()) {
    entries.push(`${key}:${value}`);
}
console.log(entries);

const map = new Map([["key1", "value1"], ["key2", "value2"]]);
const results = [];
for (const [key, value] of map) {
    results.push(`${key}:${value}`);
}
console.log(results);

const map = {};
function has(key) {
    return typeof map[key] !== "undefined";
}
console.log(has("foo"));
console.log(has("constructor"));

class ShoppingCart {
    constructor() {
        this.items = new Map();
    }
    addItem(item) {
        const count = this.items.get(item) ?? 0;
        this.items.set(item, count + 1);
    }
    getTotalPrice() {
        return Array.from(this.items).reduce((total, [item, count]) => {
            return total + item.price * count;
        }, 0);
    }
    toString() {
        return Array.from(this.items).map(([item, count]) => {
            return `${item.name}:${count}`;
        }).join(",");
    }
}
const shoppingCart = new ShoppingCart();
const shopItems = [
    { name: "みかん", price: 100},
    { name: "リンゴ", price: 200},
];
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[1]);

console.log(shoppingCart.getTotalPrice());
console.log(shoppingCart.toString());

function sendPOSTRequest(url, data) {
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data),
    }).catch((error) => {
        console.log(error);
    });
}
function onLoginFormsSubmit(event) {
    const form = event.target;
    const data = {
        userName: form.elements.userName,
        password: form.elements.password,
    };
    sendPOSTRequest("/api/login", data)
}

const map = new WeakMap();
let obj = {};
map.set(obj, "value");
obj = null;

const listenerMap = new WeakMap();

class EventEmitter {
    addListener(listener) {
        const listeners = listenerMap.get(this) ?? [];
        const newListeners = listeners.concat(listener);
        listenerMap.set(this, newListeners);
    }
}
let event = new EventEmitter();
event.addListener();
event.addListener(() => {

});
event = null;

const cache = new WeakMap();

function getHeight(element) {
    if (cache.has(element)) {
        return cache.get(element);
    }
    const height = element.getBoundingClientRect().height;
    cache.set(element, height);
    return height;
}

const map = new Map();
map.set(NaN, "value");
console.log(NaN === NaN);
console.log(map.has(NaN));
console.log(map.get(NaN));

const set = new Set();
console.log(set.size);

const set = new Set(["value1", "value2", "value2"]);
console.log(set.size);