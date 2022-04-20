"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caller = void 0;
var Caller = /** @class */ (function () {
    function Caller(params, $$user, waiting) {
        if ($$user === void 0) { $$user = undefined; }
        this.method = 'POST';
        this._params = params;
        this.$$user = $$user;
        this.waiting = waiting;
    }
    Object.defineProperty(Caller.prototype, "params", {
        get: function () { return this._params; },
        enumerable: false,
        configurable: true
    });
    Caller.prototype.buildParams = function () { return this.params; };
    Object.defineProperty(Caller.prototype, "headers", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    return Caller;
}());
exports.Caller = Caller;
//# sourceMappingURL=caller.js.map