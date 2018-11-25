let numbering = function () {
    let i = 0;
    while (i < 10) {
        document.write(i + "<br/>");
        i += 1;
    }
};
numbering();

let value = function () {
    let num = 3;
    return num * 10;
}
alert(value());

// 함수 정의와 호출을 동시에
// 이것을 익명 함수라고 한다. (1회성으로 호출할 경우)
(function () {
    let i = 0;
    while (i < 10) {
        document.write(i + "<br/>");
        i += 1;
    }
})();