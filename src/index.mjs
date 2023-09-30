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

let x = 0;
console.log(`ループ開始前のxの値: ${x}`);
while (x < 10) {
    console.log(x);
    x += 1;
}
console.log(`ループ終了後のxの値: ${x}`);

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
