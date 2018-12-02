# Javascript Study
자바스크립트의 핵심 도구는 함수다.<br>
함수에 대한 이해없이 자바스크립트를 잘 다루기 어렵다.<br>
또한 자바스크립트에서 함수는 객체를 이해하는데 가장 중요한 기초를 이룬다.<br>

* [Function_Example](function)
* [Scope_Example](scope)
    * [Static_Scoping](scope/static.lexical)
* [CallBack](callback)
* [Calling_Function](call.function)
* [Async(AJAX)](async)
* [Closure](closure)

---

## 유효범위의 대상 (함수)
자바스크립트는 함수에 대한 유효범위만을 제공한다.
* 많은 언어들이 블록(대체로 {,})에 대한 유효범위를 제공하는 것과의 차이점
```javascript
for (var i = 0; i < 1; ++i) {
    var name = 'coding funny';
}
alert(name);
```

자바에서는 아래의 코드가 허용되지 않는다.
```java
for (int i = 0; i < 10; ++i) {
    String name = "gitflow";
}
System.out.println(name);
```

### 정적 유효범위
* 자바스크립트는 함수가 선언된 시점에 유효범위를 갖는다.
* 이러한 유효범위의 방식을 정적 유효범위(static scoping) 또는 렉시컬(lexical scoping)이라고 한다.

---

## 값으로서의 함수와 콜백
자바스크립트에서는 함수도 객체다. (일종의 값이다.)<br>
자바스크립트의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될 수 있다는 것이다.<br>
함수는 값이 될 수 있고, 객체에도 저장될 수 있다.
```javascript
var a = {
    b:function() {
        
    }
}
```

콜백은 비동기처리에서도 유용하게 사용된다.<br>
시간이 오래 걸리는 작업이 있을 때 이 작업이 완료된 후에 처리해야 할 일을 콜백으로 지정하면<br>
해당 작업이 끝났을 때 미리 등록한 작업을 실행하도록 할 수 있다.

---

## 클로저 (Closure)
내부함수가 외부함수의 맥락에 접근할 수 있는 것