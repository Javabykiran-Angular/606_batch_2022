"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    //either parameter Less Constructor
    // Parametiszed constructor
    function Myclass(f, l, id) {
        this.fname = f;
        this.lname = l;
        this.id = id;
    }
    Myclass.prototype.Display = function () {
        console.log("\n          First Name :: ".concat(this.fname, "\n          Last name  :: ").concat(this.lname, "\n          ID         :: ").concat(this.id, "\n      "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// const obj=new Myclass("Sumit",'Raokhande',9);
// obj.Display();
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;