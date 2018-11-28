/**
 * 함수는 함수의 리턴 값으로도 사용될 수 있다.
 * 
 * @param mode
 * @returns {*}
 */
function cal(mode) {
    var funcs = {
        'plus': function (left, right) {
            return left + right
        },
        'minus': function (left, right) {
            return left - right
        }
    }
    return funcs[mode];
}

alert(cal('plus')(2, 1));
alert(cal('minus')(2, 1));