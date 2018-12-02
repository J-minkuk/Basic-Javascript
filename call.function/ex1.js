/**
 * JavaScript 는 함수를 호출하는 특별한 방법을 제공한다.
 * 함수 sum 은 Function 이라는 객체의 인스턴스다.
 * 따라서 func 는 객체 Function 이 갖고 있는 메소드를 상속하고 있다.
 *
 * @param arg1
 * @param arg2
 * @returns {*}
 */
function sum(arg1, arg2) {
    return arg1 + arg2;
}

alert(sum.apply(null, [1, 2]));