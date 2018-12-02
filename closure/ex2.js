/**
 * 클로저는 내부함수와 밀접한 관계를 갖고 있는 주제다.
 * 내부함수는 외부함수가 소멸된 이후에도 외부함수의 변수에 접근할 수 있다.
 *
 * 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸하지 않는 특성을 갖는다.
 *
 * @returns {Function}
 */
function outer() {
    let title = "gitflow";
    let value = function () {
        alert(title);
    }
    return value();
}
let inner = outer();
inner();