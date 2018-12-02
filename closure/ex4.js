var arr = [];
for (var i = 0; i < 5; ++i) {
    arr[i] = function () {
        return i;
    }
}

for (var index in arr) {
    console.log(arr[index]());
}

/*************************************/

var arr = [];
for (var i = 0; i < 5; ++i) {
    arr[i] = function (id) {
        return function () {
            return id;
        }
    }(i);
}

for (var index in arr) {
    console.log(arr[index]());
}

// let arr = [];
// for (let i = 0; i < 5; ++i) {
//     arr[i] = function () {
//         return i;
//     }
// }
//
// for (let index in arr) {
//     console.log(arr[index]());
// }