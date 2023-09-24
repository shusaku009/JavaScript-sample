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