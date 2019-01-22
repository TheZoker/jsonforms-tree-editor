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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var theia_tree_editor_1 = require("theia-tree-editor");
var browser_2 = require("@theia/core/lib/browser");
var core_1 = require("@theia/core");
var file_download_service_1 = require("@theia/filesystem/lib/browser/download/file-download-service");
exports.VeggieEditorCommand = {
    id: 'VeggieEditor.command',
    label: "Shows a message"
};
var VeggieEditorCommandContribution = /** @class */ (function () {
    function VeggieEditorCommandContribution(messageService) {
        this.messageService = messageService;
    }
    VeggieEditorCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.VeggieEditorCommand, {
            execute: function () { return _this.messageService.info('Hello World!'); }
        });
    };
    VeggieEditorCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.MessageService)),
        __metadata("design:paramtypes", [common_1.MessageService])
    ], VeggieEditorCommandContribution);
    return VeggieEditorCommandContribution;
}());
exports.VeggieEditorCommandContribution = VeggieEditorCommandContribution;
var VeggieEditorMenuContribution = /** @class */ (function () {
    function VeggieEditorMenuContribution() {
    }
    VeggieEditorMenuContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.VeggieEditorCommand.id,
            label: 'Say Hello'
        });
    };
    VeggieEditorMenuContribution = __decorate([
        inversify_1.injectable()
    ], VeggieEditorMenuContribution);
    return VeggieEditorMenuContribution;
}());
exports.VeggieEditorMenuContribution = VeggieEditorMenuContribution;
var SmartHomeTreeEditorContribution = /** @class */ (function (_super) {
    __extends(SmartHomeTreeEditorContribution, _super);
    function SmartHomeTreeEditorContribution(widgetManager, messageService, selectionService, fileDownloadService) {
        return _super.call(this, widgetManager, messageService, selectionService, fileDownloadService) || this;
    }
    SmartHomeTreeEditorContribution.prototype.canHandle = function (uri) {
        if (uri.path.ext === '.json') {
            return 1000;
        }
        return 0;
    };
    // TODO remove this when TreeEditorWidget is a navigatible widget
    SmartHomeTreeEditorContribution.prototype.createWidgetOptions = function (uri, options) {
        return {
            uri: uri.withoutFragment().toString()
        };
    };
    SmartHomeTreeEditorContribution = __decorate([
        __param(0, inversify_1.inject(browser_2.WidgetManager)),
        __param(1, inversify_1.inject(common_1.MessageService)),
        __param(2, inversify_1.inject(core_1.SelectionService)),
        __param(3, inversify_1.inject(file_download_service_1.FileDownloadService)),
        __metadata("design:paramtypes", [browser_2.WidgetManager,
            common_1.MessageService,
            core_1.SelectionService,
            file_download_service_1.FileDownloadService])
    ], SmartHomeTreeEditorContribution);
    return SmartHomeTreeEditorContribution;
}(theia_tree_editor_1.TheiaTreeEditorContribution));
exports.SmartHomeTreeEditorContribution = SmartHomeTreeEditorContribution;
//# sourceMappingURL=veggie-editor-contribution.js.map