/**
 * 함수는 값이기 때문에 다른 함수의 인자로 전달될 수 있다.
 *
 * @param func
 * @param num
 * @returns {*}
 */
function cal(func, num) {
    return func(num)
}

function increase(num) {
    return num + 1
}

function decrease(num) {
    return num - 1
}

alert(cal(increase, 1));
alert(cal(decrease, 1));