# Javascript Study
* 자바스크립트의 핵심 도구는 함수다.
* 함수에 대한 이해없이 자바스크립트를 잘 다루기 어렵다.
* 또한 자바스크립트에서 함수는 객체를 이해하는데 가장 중요한 기초를 이룬다.

---

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