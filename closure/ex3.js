function factory_movie(title) {
    // 객체 리턴
    return {
        get_title: function () {
            return title;
        },
        set_title: function (_title) {
            title = _title;
        }
    }
}

ghost = factory_movie('Ghost in the shell');    // 객체
matrix = factory_movie('Matrix');   // 객체

alert(ghost.get_title());
alert(matrix.get_title());

ghost.set_title('공각기동대');

alert(ghost.get_title());
alert(matrix.get_title());

/*
클로저는 객체의 메소드에서도 사용할 수 있다.
factory_movie 함수는 객체를 반환하고 있다. 이 객체는 get_title & set_title 메소드를 갖고 있다.
이 메소드들은 외부함수인 factory_movie 의 파라미터로 전달된 지역번수 title 을 사용한다.

동일한 외부함수 안에 만들어진 내부함수나 메소드는 외부함수의 지역변수를 공유한다.

그런데 똑같은 외부함수 factory_movie 를 공유하고 있는 ghost, matrix 의 get_title 결과가 다르다.
이유는 외부함수가 실행될 때마다 새로운 지역변수를 포함하는 클로저가 생성되기 때문이다.
그러므로 ghost 와 matrix 는 서로 완전히 독립된 객체다.

factory_movie 의 지역변수 title 은 내부함수에서만 접근할 수 있다.
JavaScript 는 기본적으로 Private 한 속성을 지원하지 않는데,
클로저의 이러한 특성을 이용해 Private 한 속성을 사용할 수 있게 된다.
 */