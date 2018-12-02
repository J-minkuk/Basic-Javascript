/**
 * 내부함수는 외부함수의 지역변수에 접근할 수 있다.
 * 이러한 것을 클로저라고 한다.
 */
function outer() {
    let title = "gitflow";
    function inner() {
        alert(title);
    }
    inner();
}
outer();