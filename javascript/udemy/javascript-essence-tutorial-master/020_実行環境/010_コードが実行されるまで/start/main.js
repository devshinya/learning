console.log(window)
// ブラウザ環境では、windowオブジェクトがグローバルオブジェクトとして存在する

console.log(this)
// ブラウザ環境では、windowオブジェクトがグローバルオブジェクトとして存在するため、thisがwindowオブジェクトを指す
// ※ strictモードでは、thisはundefinedになる