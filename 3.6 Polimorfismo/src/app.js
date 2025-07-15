var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee.prototype.getInfo = function () {
        return "Name: ".concat(this.name);
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, id, salary) {
        var _this = _super.call(this, name, id) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.calculateSalary = function () {
        return this.salary;
    };
    FullTimeEmployee.prototype.generatePaymentReport = function () {
        return "".concat(this.calculateSalary(), " is paid");
    };
    return FullTimeEmployee;
}(Employee));
var HourlyEmployee = /** @class */ (function (_super) {
    __extends(HourlyEmployee, _super);
    function HourlyEmployee(name, id, fee, workTime) {
        var _this = _super.call(this, name, id) || this;
        _this.fee = fee;
        _this.workTime = fee;
        return _this;
    }
    HourlyEmployee.prototype.generatePaymentReport = function () {
        return "".concat(this.calculateSalary(), " is paid");
    };
    HourlyEmployee.prototype.calculateSalary = function () {
        return this.fee * this.workTime;
    };
    return HourlyEmployee;
}(Employee));
