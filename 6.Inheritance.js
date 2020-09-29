var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Invoice = /** @class */ (function () {
    function Invoice(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('Invoice Class constructor');
    }
    Invoice.prototype.payInvoice = function () {
        return 'Invoice paid completely !!!';
    };
    return Invoice;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = this;
        console.log('Memeber class constructor');
        _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        return _super.prototype.payInvoice.call(this);
    };
    return Member;
}(Invoice));
var memberObj = new Member(1, 'Johngalt', 'john@galt.com', 38);
console.log(memberObj.payInvoice());
