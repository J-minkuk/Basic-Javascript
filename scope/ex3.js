/**
 * 불가피하게 전역 변수를 사용해야 하는 경우
 * 하나의 객체를 전역 변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 활용한다.
 */

let MYAPP = {}
MYAPP.calculator = {
    'left': null,
    'right': null
}
MYAPP.coordinate = {
    'left': null,
    'right': null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;

function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
}

document.write(sum());