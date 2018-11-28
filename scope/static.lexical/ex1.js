var i = 5;

function a() {
    var i = 10;
    b();
    c(i);
}

function b() {
    // 사용될 때가 아니고 정의될 때의 변수가 사용된다.
    document.write(i + " b<br/>");  // 5 출력
}

function c(i) {
    document.write(i + " c<br/>");  // 10 출력
}

a();