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
 