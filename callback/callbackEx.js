/**
 * 여기서 sortNumber 가 바로 callback 함수다.
 *
 * @param a
 * @param b
 * @returns {number}
 */
function sortNumber(a, b) {
    // console.log(a, b);
    // if (a > b) return 1;
    // else if (a < b) return -1;
    // else return 0;
    return a - b;
}

var numbers = [20, 10, 1, 2, 4, 5, 3, 6, 7, 8, 9];
alert(numbers.sort(sortNumber));