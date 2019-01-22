"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var recompose_1 = require("recompose");
var redux_1 = require("redux");
var material_renderers_1 = require("@jsonforms/material-renderers");
var core_1 = require("@jsonforms/core");
var theia_tree_editor_1 = require("theia-tree-editor");
var schema_1 = require("./schema");
var config_1 = require("./config");
var imageGetter = function (schemaId) { return 'icon-test'; };
// !_.isEmpty(imageProvider) ? `icon ${imageProvider[schemaId]}` : '';
exports.initStore = function () { return __awaiter(_this, void 0, void 0, function () {
    var uischema, renderers, fields, jsonforms, store;
    return __generator(this, function (_a) {
        uischema = {
            'type': 'TreeWithDetail',
            'scope': '#'
        };
        renderers = material_renderers_1.materialRenderers;
        fields = material_renderers_1.materialFields;
        jsonforms = {
            jsonforms: {
                renderers: renderers,
                fields: fields,
                treeWithDetail: {
                    // imageMapping: imageProvider,
                    labelMapping: config_1.labels,
                    modelMapping: config_1.modelMapping,
                    uiSchemata: config_1.uischemas
                }
            }
        };
        store = redux_1.createStore(redux_1.combineReducers({
            jsonforms: core_1.jsonformsReducer()
        }), __assign({}, jsonforms));
        store.dispatch(core_1.Actions.init({}, schema_1.default, uischema));
        return [2 /*return*/, store];
    });
}); };
exports.default = recompose_1.defaultProps({
    'filterPredicate': theia_tree_editor_1.filterPredicate,
    'labelProviders': { forData: theia_tree_editor_1.calculateLabel(config_1.labels) },
    'imageProvider': imageGetter
})(theia_tree_editor_1.TreeEditorApp);
//# sourceMappingURL=App.js.map