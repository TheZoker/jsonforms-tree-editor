(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "../node_modules/@theia/core/lib/electron-browser/menu/electron-context-menu-renderer.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-browser/menu/electron-context-menu-renderer.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var electron_main_menu_factory_1 = __webpack_require__(/*! ./electron-main-menu-factory */ "../node_modules/@theia/core/lib/electron-browser/menu/electron-main-menu-factory.js");
var ElectronContextMenuRenderer = /** @class */ (function () {
    function ElectronContextMenuRenderer(menuFactory) {
        this.menuFactory = menuFactory;
    }
    ElectronContextMenuRenderer.prototype.render = function (menuPath, anchor, onHide) {
        var menu = this.menuFactory.createContextMenu(menuPath);
        menu.popup({});
        if (onHide) {
            onHide();
        }
    };
    ElectronContextMenuRenderer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(electron_main_menu_factory_1.ElectronMainMenuFactory)),
        __metadata("design:paramtypes", [electron_main_menu_factory_1.ElectronMainMenuFactory])
    ], ElectronContextMenuRenderer);
    return ElectronContextMenuRenderer;
}());
exports.ElectronContextMenuRenderer = ElectronContextMenuRenderer;


/***/ }),

/***/ "../node_modules/@theia/core/lib/electron-browser/menu/electron-main-menu-factory.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-browser/menu/electron-main-menu-factory.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron = __webpack_require__(/*! electron */ "electron");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../../common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! ../../browser */ "../node_modules/@theia/core/lib/browser/index.js");
var ElectronMainMenuFactory = /** @class */ (function () {
    function ElectronMainMenuFactory(commandRegistry, preferencesService, menuProvider, keybindingRegistry) {
        var _this = this;
        this.commandRegistry = commandRegistry;
        this.preferencesService = preferencesService;
        this.menuProvider = menuProvider;
        this.keybindingRegistry = keybindingRegistry;
        this._toggledCommands = new Set();
        this.preferencesService.onPreferenceChanged(function () {
            var e_1, _a;
            try {
                for (var _b = __values(_this._toggledCommands), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    _this._menu.getMenuItemById(item).checked = _this.commandRegistry.isToggled(item);
                    electron.remote.getCurrentWindow().setMenu(_this._menu);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    ElectronMainMenuFactory.prototype.createMenuBar = function () {
        var menuModel = this.menuProvider.getMenu(common_1.MAIN_MENU_BAR);
        var template = this.fillMenuTemplate([], menuModel);
        if (common_1.isOSX) {
            template.unshift(this.createOSXMenu());
        }
        var menu = electron.remote.Menu.buildFromTemplate(template);
        this._menu = menu;
        return menu;
    };
    ElectronMainMenuFactory.prototype.createContextMenu = function (menuPath) {
        var menuModel = this.menuProvider.getMenu(menuPath);
        var template = this.fillMenuTemplate([], menuModel);
        return electron.remote.Menu.buildFromTemplate(template);
    };
    ElectronMainMenuFactory.prototype.fillMenuTemplate = function (items, menuModel) {
        var _this = this;
        var e_2, _a;
        var _loop_1 = function (menu) {
            if (menu instanceof common_1.CompositeMenuNode) {
                if (menu.children.length > 0) {
                    // do not render empty nodes
                    if (menu.isSubmenu) { // submenu node
                        var submenu = this_1.fillMenuTemplate([], menu);
                        if (submenu.length === 0) {
                            return "continue";
                        }
                        items.push({
                            label: menu.label,
                            submenu: submenu
                        });
                    }
                    else { // group node
                        // process children
                        var submenu = this_1.fillMenuTemplate([], menu);
                        if (submenu.length === 0) {
                            return "continue";
                        }
                        if (items.length > 0) {
                            // do not put a separator above the first group
                            items.push({
                                type: 'separator'
                            });
                        }
                        // render children
                        items.push.apply(items, __spread(submenu));
                    }
                }
            }
            else if (menu instanceof common_1.ActionMenuNode) {
                var commandId_1 = menu.action.commandId;
                // That is only a sanity check at application startup.
                if (!this_1.commandRegistry.getCommand(commandId_1)) {
                    throw new Error("Unknown command with ID: " + commandId_1 + ".");
                }
                if (!this_1.commandRegistry.isVisible(commandId_1)) {
                    return "continue";
                }
                var bindings = this_1.keybindingRegistry.getKeybindingsForCommand(commandId_1);
                var accelerator = void 0;
                /* Only consider the first keybinding. */
                if (bindings.length > 0) {
                    var binding = bindings[0];
                    accelerator = this_1.acceleratorFor(binding);
                }
                items.push({
                    id: menu.id,
                    label: menu.label,
                    type: this_1.commandRegistry.getToggledHandler(commandId_1) ? 'checkbox' : 'normal',
                    checked: this_1.commandRegistry.isToggled(commandId_1),
                    enabled: true,
                    visible: true,
                    click: function () { return _this.execute(commandId_1); },
                    accelerator: accelerator
                });
                if (this_1.commandRegistry.getToggledHandler(commandId_1)) {
                    this_1._toggledCommands.add(commandId_1);
                }
            }
        };
        var this_1 = this;
        try {
            for (var _b = __values(menuModel.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var menu = _c.value;
                _loop_1(menu);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return items;
    };
    /**
     * Return a user visible representation of a keybinding.
     */
    ElectronMainMenuFactory.prototype.acceleratorFor = function (keybinding) {
        var keyCodesString = keybinding.keybinding.split(' ');
        var result = '';
        // FIXME see https://github.com/electron/electron/issues/11740
        // Key Sequences can't be represented properly in the electron menu.
        //
        // We can do what VS Code does, and append the chords as a suffix to the menu label.
        // https://github.com/theia-ide/theia/issues/1199#issuecomment-430909480
        if (keyCodesString.length > 1) {
            return result;
        }
        var keyCodeString = keyCodesString[0];
        var keyCode = browser_1.KeyCode.parse(keyCodeString);
        var previous = false;
        var separator = '+';
        if (keyCode.meta && common_1.isOSX) {
            if (common_1.isOSX) {
                result += 'Cmd';
                previous = true;
            }
        }
        if (keyCode.ctrl) {
            if (previous) {
                result += separator;
            }
            result += 'Ctrl';
            previous = true;
        }
        if (keyCode.alt) {
            if (previous) {
                result += separator;
            }
            result += 'Alt';
            previous = true;
        }
        if (keyCode.shift) {
            if (previous) {
                result += separator;
            }
            result += 'Shift';
            previous = true;
        }
        if (keyCode.key) {
            if (previous) {
                result += separator;
            }
            result += browser_1.Key.getEasyKey(keyCode.key).easyString;
        }
        return result;
    };
    ElectronMainMenuFactory.prototype.execute = function (command) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        if (!this.commandRegistry.isEnabled(command)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.commandRegistry.executeCommand(command)];
                    case 1:
                        _b.sent();
                        if (this.commandRegistry.isVisible(command)) {
                            this._menu.getMenuItemById(command).checked = this.commandRegistry.isToggled(command);
                            electron.remote.getCurrentWindow().setMenu(this._menu);
                        }
                        _b.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ElectronMainMenuFactory.prototype.createOSXMenu = function () {
        return {
            label: 'Theia',
            submenu: [
                {
                    role: 'about'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'services',
                    submenu: []
                },
                {
                    type: 'separator'
                },
                {
                    role: 'hide'
                },
                {
                    role: 'hideothers'
                },
                {
                    role: 'unhide'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'quit'
                }
            ]
        };
    };
    ElectronMainMenuFactory = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.CommandRegistry)),
        __param(1, inversify_1.inject(browser_1.PreferenceService)),
        __param(2, inversify_1.inject(common_1.MenuModelRegistry)),
        __param(3, inversify_1.inject(browser_1.KeybindingRegistry)),
        __metadata("design:paramtypes", [common_1.CommandRegistry, Object, common_1.MenuModelRegistry,
            browser_1.KeybindingRegistry])
    ], ElectronMainMenuFactory);
    return ElectronMainMenuFactory;
}());
exports.ElectronMainMenuFactory = ElectronMainMenuFactory;


/***/ }),

/***/ "../node_modules/@theia/core/lib/electron-browser/menu/electron-menu-contribution.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-browser/menu/electron-menu-contribution.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron = __webpack_require__(/*! electron */ "electron");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../../common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! ../../browser */ "../node_modules/@theia/core/lib/browser/index.js");
var electron_main_menu_factory_1 = __webpack_require__(/*! ./electron-main-menu-factory */ "../node_modules/@theia/core/lib/electron-browser/menu/electron-main-menu-factory.js");
var ElectronCommands;
(function (ElectronCommands) {
    ElectronCommands.TOGGLE_DEVELOPER_TOOLS = {
        id: 'theia.toggleDevTools',
        label: 'Toggle Developer Tools'
    };
    ElectronCommands.RELOAD = {
        id: 'view.reload',
        label: 'Reload Window'
    };
    ElectronCommands.ZOOM_IN = {
        id: 'view.zoomIn',
        label: 'Zoom In'
    };
    ElectronCommands.ZOOM_OUT = {
        id: 'view.zoomOut',
        label: 'Zoom Out'
    };
    ElectronCommands.RESET_ZOOM = {
        id: 'view.resetZoom',
        label: 'Reset Zoom'
    };
})(ElectronCommands = exports.ElectronCommands || (exports.ElectronCommands = {}));
var ElectronMenus;
(function (ElectronMenus) {
    ElectronMenus.VIEW_WINDOW = __spread(browser_1.CommonMenus.VIEW, ['window']);
    ElectronMenus.VIEW_ZOOM = __spread(browser_1.CommonMenus.VIEW, ['zoom']);
})(ElectronMenus = exports.ElectronMenus || (exports.ElectronMenus = {}));
(function (ElectronMenus) {
    ElectronMenus.HELP_TOGGLE = __spread(browser_1.CommonMenus.HELP, ['z_toggle']);
})(ElectronMenus = exports.ElectronMenus || (exports.ElectronMenus = {}));
var ElectronMenuContribution = /** @class */ (function () {
    function ElectronMenuContribution(factory) {
        this.factory = factory;
    }
    ElectronMenuContribution.prototype.onStart = function (app) {
        var _this = this;
        var itr = app.shell.children();
        var child = itr.next();
        while (child) {
            // Top panel for the menu contribution is not required for Electron.
            // TODO: Make sure this is the case on Windows too.
            if (child.id === 'theia-top-panel') {
                child.setHidden(true);
                child = undefined;
            }
            else {
                child = itr.next();
            }
        }
        var currentWindow = electron.remote.getCurrentWindow();
        var createdMenuBar = this.factory.createMenuBar();
        if (common_1.isOSX) {
            electron.remote.Menu.setApplicationMenu(createdMenuBar);
            currentWindow.on('focus', function () {
                // OSX: Recreate the menus when changing windows.
                // OSX only has one menu bar for all windows, so we need to swap
                // between them as the user switch windows.
                return electron.remote.Menu.setApplicationMenu(_this.factory.createMenuBar());
            });
        }
        else {
            // Unix/Windows: Set the per-window menus
            currentWindow.setMenu(createdMenuBar);
        }
    };
    ElectronMenuContribution.prototype.registerCommands = function (registry) {
        registry.registerCommand(ElectronCommands.TOGGLE_DEVELOPER_TOOLS, {
            execute: function () {
                var webContent = electron.remote.getCurrentWebContents();
                if (!webContent.isDevToolsOpened()) {
                    webContent.openDevTools();
                }
                else {
                    webContent.closeDevTools();
                }
            }
        });
        registry.registerCommand(ElectronCommands.RELOAD, {
            execute: function () {
                var focusedWindow = electron.remote.getCurrentWindow();
                if (focusedWindow) {
                    focusedWindow.reload();
                }
            }
        });
        registry.registerCommand(ElectronCommands.ZOOM_IN, {
            execute: function () {
                var focusedWindow = electron.remote.getCurrentWindow();
                if (focusedWindow) {
                    var webContents_1 = focusedWindow.webContents;
                    webContents_1.getZoomLevel(function (zoomLevel) {
                        return webContents_1.setZoomLevel(zoomLevel + 0.5);
                    });
                }
            }
        });
        registry.registerCommand(ElectronCommands.ZOOM_OUT, {
            execute: function () {
                var focusedWindow = electron.remote.getCurrentWindow();
                if (focusedWindow) {
                    var webContents_2 = focusedWindow.webContents;
                    webContents_2.getZoomLevel(function (zoomLevel) {
                        return webContents_2.setZoomLevel(zoomLevel - 0.5);
                    });
                }
            }
        });
        registry.registerCommand(ElectronCommands.RESET_ZOOM, {
            execute: function () {
                var focusedWindow = electron.remote.getCurrentWindow();
                if (focusedWindow) {
                    focusedWindow.webContents.setZoomLevel(0);
                }
            }
        });
    };
    ElectronMenuContribution.prototype.registerKeybindings = function (registry) {
        registry.registerKeybindings({
            command: ElectronCommands.TOGGLE_DEVELOPER_TOOLS.id,
            keybinding: 'ctrlcmd+alt+i'
        }, {
            command: ElectronCommands.RELOAD.id,
            keybinding: 'ctrlcmd+r'
        }, {
            command: ElectronCommands.ZOOM_IN.id,
            keybinding: 'ctrlcmd+='
        }, {
            command: ElectronCommands.ZOOM_OUT.id,
            keybinding: 'ctrlcmd+-'
        }, {
            command: ElectronCommands.RESET_ZOOM.id,
            keybinding: 'ctrlcmd+0'
        });
    };
    ElectronMenuContribution.prototype.registerMenus = function (registry) {
        registry.registerMenuAction(ElectronMenus.HELP_TOGGLE, {
            commandId: ElectronCommands.TOGGLE_DEVELOPER_TOOLS.id
        });
        registry.registerMenuAction(ElectronMenus.VIEW_WINDOW, {
            commandId: ElectronCommands.RELOAD.id,
            order: 'z0'
        });
        registry.registerMenuAction(ElectronMenus.VIEW_ZOOM, {
            commandId: ElectronCommands.ZOOM_IN.id,
            order: 'z1'
        });
        registry.registerMenuAction(ElectronMenus.VIEW_ZOOM, {
            commandId: ElectronCommands.ZOOM_OUT.id,
            order: 'z2'
        });
        registry.registerMenuAction(ElectronMenus.VIEW_ZOOM, {
            commandId: ElectronCommands.RESET_ZOOM.id,
            order: 'z3'
        });
    };
    ElectronMenuContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(electron_main_menu_factory_1.ElectronMainMenuFactory)),
        __metadata("design:paramtypes", [electron_main_menu_factory_1.ElectronMainMenuFactory])
    ], ElectronMenuContribution);
    return ElectronMenuContribution;
}());
exports.ElectronMenuContribution = ElectronMenuContribution;


/***/ }),

/***/ "../node_modules/@theia/core/lib/electron-browser/menu/electron-menu-module.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-browser/menu/electron-menu-module.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../../common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! ../../browser */ "../node_modules/@theia/core/lib/browser/index.js");
var electron_main_menu_factory_1 = __webpack_require__(/*! ./electron-main-menu-factory */ "../node_modules/@theia/core/lib/electron-browser/menu/electron-main-menu-factory.js");
var electron_context_menu_renderer_1 = __webpack_require__(/*! ./electron-context-menu-renderer */ "../node_modules/@theia/core/lib/electron-browser/menu/electron-context-menu-renderer.js");
var electron_menu_contribution_1 = __webpack_require__(/*! ./electron-menu-contribution */ "../node_modules/@theia/core/lib/electron-browser/menu/electron-menu-contribution.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    var e_1, _a;
    bind(electron_main_menu_factory_1.ElectronMainMenuFactory).toSelf().inSingletonScope();
    bind(browser_1.ContextMenuRenderer).to(electron_context_menu_renderer_1.ElectronContextMenuRenderer).inSingletonScope();
    bind(browser_1.KeybindingContext).toConstantValue({
        id: 'theia.context',
        isEnabled: true
    });
    bind(electron_menu_contribution_1.ElectronMenuContribution).toSelf().inSingletonScope();
    try {
        for (var _b = __values([browser_1.FrontendApplicationContribution, browser_1.KeybindingContribution, common_1.CommandContribution, common_1.MenuContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var serviceIdentifier = _c.value;
            bind(serviceIdentifier).toService(electron_menu_contribution_1.ElectronMenuContribution);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
});


/***/ })

}]);
//# sourceMappingURL=27.bundle.js.map