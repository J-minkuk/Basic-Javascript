let vscope = 'global';  // 전역 변수

function fscope() {
    let vscope = 'local';   // 지역 변수
    alert(vscope);
}

function fscope2() {
    alert(vscope);
}

function fscope3() {
    vscope = 'local';
    alert(vscope);
}

fscope();
fscope2();
fscope3();