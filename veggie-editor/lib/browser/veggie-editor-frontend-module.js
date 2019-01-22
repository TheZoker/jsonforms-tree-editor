"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
// necessary imports
var veggie_editor_contribution_1 = require("./veggie-editor-contribution");
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var common_2 = require("@theia/core/lib/common");
var theia_tree_editor_1 = require("theia-tree-editor");
var core_1 = require("@jsonforms/core");
var uri_1 = require("@theia/core/lib/common/uri");
var App_1 = require("../App");
var theming_1 = require("@theia/core/lib/browser/theming");
var MyResourceSaveable = /** @class */ (function (_super) {
    __extends(MyResourceSaveable, _super);
    function MyResourceSaveable(resource, getData, messageService, widgetManager) {
        return _super.call(this, resource, getData, widgetManager, messageService) || this;
    }
    MyResourceSaveable.prototype.onSave = function (data) {
        return Promise.resolve(JSON.stringify(data));
    };
    return MyResourceSaveable;
}(theia_tree_editor_1.DirtyResourceSavable));
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    var LIGHT_THEME_ID = "light";
    theming_1.ThemeService.get().setCurrentTheme(LIGHT_THEME_ID);
    bind(common_1.CommandContribution).to(veggie_editor_contribution_1.VeggieEditorCommandContribution);
    bind(common_1.MenuContribution).to(veggie_editor_contribution_1.VeggieEditorMenuContribution);
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: 'theia-tree-editor',
        createWidget: function (uri) {
            return __awaiter(this, void 0, void 0, function () {
                var container, resource, widgetManager, messageService, store, child;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            container = ctx.container;
                            return [4 /*yield*/, container.get(common_2.ResourceProvider)(new uri_1.default(uri.uri))];
                        case 1:
                            resource = _a.sent();
                            return [4 /*yield*/, container.get(browser_1.WidgetManager)];
                        case 2:
                            widgetManager = _a.sent();
                            return [4 /*yield*/, container.get(common_1.MessageService)];
                        case 3:
                            messageService = _a.sent();
                            return [4 /*yield*/, App_1.initStore()];
                        case 4:
                            store = _a.sent();
                            child = container.createChild();
                            child.bind(theia_tree_editor_1.TreeEditorWidgetOptions)
                                .toConstantValue({ resource: resource, store: store, EditorComponent: App_1.default, fileName: new uri_1.default(uri.uri).path.base,
                                saveable: new MyResourceSaveable(resource, function () { return core_1.getData(store.getState()); }, messageService, widgetManager), onResourceLoad: JSON.parse });
                            return [2 /*return*/, child.get(theia_tree_editor_1.TreeEditorWidget)];
                    }
                });
            });
        }
    }); });
    bind(theia_tree_editor_1.TreeEditorWidget).toSelf();
    bind(veggie_editor_contribution_1.SmartHomeTreeEditorContribution).toSelf().inSingletonScope();
    [common_1.CommandContribution, common_1.MenuContribution, browser_1.OpenHandler].forEach(function (serviceIdentifier) {
        return bind(serviceIdentifier).toService(veggie_editor_contribution_1.SmartHomeTreeEditorContribution);
    });
});
//# sourceMappingURL=veggie-editor-frontend-module.js.map