"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fn = function fn() {
    console.log(123);
};
fn();
var a = 1;

var Student = function () {
    function Student() {
        _classCallCheck(this, Student);
    }

    _createClass(Student, [{
        key: "hello",
        value: function hello() {
            console.log("hello");
        }
    }]);

    return Student;
}();

var s = new Student();
s.hello();

var L = function (_Student) {
    _inherits(L, _Student);

    function L() {
        _classCallCheck(this, L);

        return _possibleConstructorReturn(this, (L.__proto__ || Object.getPrototypeOf(L)).apply(this, arguments));
    }

    return L;
}(Student);

var l = new L();
l.hello();
