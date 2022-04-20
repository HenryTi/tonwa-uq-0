"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Net = void 0;
/* eslint-disable */
var UqTokens_1 = require("./UqTokens");
var centerApi_1 = require("./centerApi");
var uqApi_1 = require("./uqApi");
var userApi_1 = require("./userApi");
var httpChannel_1 = require("./httpChannel");
var messageHub_1 = require("./messageHub");
var wsChannel_1 = require("./wsChannel");
var host_1 = require("./host");
var Net = /** @class */ (function () {
    // -- end -------------------
    function Net(props) {
        this.centerToken = undefined;
        this.loginedUserId = 0;
        this.uqChannels = {};
        this.props = props;
        this.isDevelopment = process.env.NODE_ENV === 'development';
        this.testing = props.testing;
        this.localDb = this.props.localDb;
        this.createObservableMap = this.props.createObservableMap;
        this.centerApi = new centerApi_1.CenterApi(this, 'tv/');
        this.uqTokens = new UqTokens_1.UqTokens(this);
        this.userApi = new userApi_1.UserApi(this, 'tv/');
        this.uqTokenApi = new uqApi_1.UqTokenApi(this, 'tv/tie/');
        this.callCenterapi = new uqApi_1.CallCenterApi(this, '');
        //this.guestApi = new GuestApi(this, 'tv/guest/');
        this.messageHub = new messageHub_1.MessageHub(this);
        this.wsBridge = new wsChannel_1.WsBridge(this);
        //this.hostMan = HostMan.createHost(this.isDevelopment);
    }
    Net.prototype.logout = function () {
        throw new Error('Method not implemented.');
    };
    Net.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, center, debug, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.props, center = _a.center, debug = _a.debug;
                        _b = this;
                        if (!(this.isDevelopment === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, host_1.buildDebugHosts)(center, debug)];
                    case 1:
                        _c = _d.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, (0, host_1.buildHosts)(center)];
                    case 3:
                        _c = _d.sent();
                        _d.label = 4;
                    case 4:
                        _b.hosts = _c;
                        //await this.hostMan.start(testing)
                        //let { url } = this.hostMan;
                        this.setCenterUrl(this.hosts.center);
                        return [2 /*return*/];
                }
            });
        });
    };
    Net.prototype.getResUrl = function (res) {
        return this.hosts.res + res;
    };
    Net.prototype.logoutApis = function () {
        this.uqTokens.logoutUqTokens();
        for (var i in this.uqChannels)
            this.uqChannels[i] = undefined;
    };
    Net.prototype.setCenterUrl = function (url) {
        console.log('setCenterUrl %s', url);
        this.centerHost = url;
        this.centerChannel = undefined;
    };
    Net.prototype.setCenterToken = function (userId, token) {
        this.loginedUserId = userId;
        this.centerToken = token;
        this.centerChannel = undefined;
        wsChannel_1.WSChannel.setCenterToken(token);
    };
    Net.prototype.clearCenterToken = function () {
        this.setCenterToken(0, undefined);
        wsChannel_1.WSChannel.setCenterToken(undefined);
    };
    Net.prototype.getCenterChannel = function () {
        if (this.centerChannel !== undefined)
            return this.centerChannel;
        var centerHost = this.hosts.center;
        return this.centerChannel = new httpChannel_1.HttpChannel(this, centerHost, this.centerToken);
    };
    /*
    resUrlFromHost(host: string): string {
        return resUrlFromHost(host);
    }
    */
    Net.prototype.buildUqUrl = function (db, url, urlTest) {
        var testOrProd;
        if (this.testing === true) {
            var uq = this.hosts.uq;
            if (uq) {
                url = uq;
            }
            else if (urlTest !== '-') {
                url = urlTest;
            }
            testOrProd = 'test';
        }
        else {
            testOrProd = 'prod';
        }
        if (url.endsWith('/') === false) {
            url += '/';
        }
        return "".concat(url, "uq/").concat(testOrProd, "/").concat(db, "/");
    };
    return Net;
}());
exports.Net = Net;
//# sourceMappingURL=Net.js.map