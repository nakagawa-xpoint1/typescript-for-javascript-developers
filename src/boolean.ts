//ファイルをモジュールにすること
export {};

//グローバル空間で定義ずみのnameを使うと、再宣言としてエラーになる⇨モジュール化する必要がある
let name = 'TypesScript';

// let isFinished = true;
// console.log({isFinished });

//TSはJSに対して型を作ることができる言語
//プログラマーが意図する型を明示的に宣言する、仕様書を書いているのに近い
//isFinishedという型はtrue or falseしか持たない型だよということ
// : boolean 型アノテーション　この変数名はこのような意図で扱っていくからよろしくね、プログラマーが伝える
//正常にJSにコンパイルされた。
// letは再代入かのう
let isFinished: boolean = true;
isFinished = false;
//1は入れられない
// isFinished = 1;
console.log({isFinished});




