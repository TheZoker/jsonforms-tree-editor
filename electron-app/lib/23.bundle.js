(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "../node_modules/@theia/messages/lib/browser/messages-frontend-module.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/messages/lib/browser/messages-frontend-module.js ***!
  \*******************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var notifications_message_client_1 = __webpack_require__(/*! ./notifications-message-client */ "../node_modules/@theia/messages/lib/browser/notifications-message-client.js");
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/messages/src/browser/style/index.css");
var notification_preferences_1 = __webpack_require__(/*! ./notification-preferences */ "../node_modules/@theia/messages/lib/browser/notification-preferences.js");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    notification_preferences_1.bindNotificationPreferences(bind);
    bind(notifications_message_client_1.NotificationsMessageClient).toSelf().inSingletonScope();
    rebind(common_1.MessageClient).toService(notifications_message_client_1.NotificationsMessageClient);
});


/***/ }),

/***/ "../node_modules/@theia/messages/lib/browser/notification-preferences.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/messages/lib/browser/notification-preferences.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../node_modules/@theia/core/lib/browser/preferences/index.js");
exports.NotificationConfigSchema = {
    'type': 'object',
    'properties': {
        'notification.timeout': {
            'type': 'number',
            'description': 'The time before auto-dismiss the notification.',
            'default': 5000 // time express in millisec. 0 means : Do not remove
        }
    }
};
exports.NotificationPreferences = Symbol('NotificationPreferences');
function createNotificationPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.NotificationConfigSchema);
}
exports.createNotificationPreferences = createNotificationPreferences;
function bindNotificationPreferences(bind) {
    bind(exports.NotificationPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createNotificationPreferences(preferences);
    });
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.NotificationConfigSchema });
}
exports.bindNotificationPreferences = bindNotificationPreferences;


/***/ }),

/***/ "../node_modules/@theia/messages/lib/browser/notifications-message-client.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/messages/lib/browser/notifications-message-client.js ***!
  \***********************************************************************************/
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var notifications_1 = __webpack_require__(/*! ./notifications */ "../node_modules/@theia/messages/lib/browser/notifications.js");
var notification_preferences_1 = __webpack_require__(/*! ./notification-preferences */ "../node_modules/@theia/messages/lib/browser/notification-preferences.js");
var NotificationsMessageClient = /** @class */ (function (_super) {
    __extends(NotificationsMessageClient, _super);
    function NotificationsMessageClient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.notifications = new notifications_1.Notifications();
        _this.visibleMessages = new Set();
        _this.visibleProgressNotifications = new Map();
        return _this;
    }
    NotificationsMessageClient.prototype.showMessage = function (message) {
        return this.show(message);
    };
    NotificationsMessageClient.prototype.showProgress = function (progressId, message, cancellationToken, update) {
        var _this = this;
        var messageArguments = __assign({}, message, { type: common_1.MessageType.Progress, options: __assign({}, (message.options || {}), { timeout: 0 }) });
        if (this.visibleProgressNotifications.has(progressId)) {
            throw new Error('Cannot show new progress with already existing id.');
        }
        return new Promise(function (resolve) {
            var progressNotification = _this.notifications.create(_this.getNotificationProperties(progressId, messageArguments, function (action) {
                _this.visibleProgressNotifications.delete(progressId);
                resolve(action);
            }));
            _this.visibleProgressNotifications.set(progressId, progressNotification);
            progressNotification.show();
            if (update) {
                progressNotification.update(update);
            }
            var cancel = function () {
                if (message.options && message.options.cancelable) {
                    resolve(common_1.ProgressMessage.Cancel);
                }
                progressNotification.close();
            };
            if (cancellationToken.isCancellationRequested) {
                cancel();
            }
            else {
                cancellationToken.onCancellationRequested(cancel);
            }
        });
    };
    NotificationsMessageClient.prototype.reportProgress = function (progressId, update, message, cancellationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var notification;
            return __generator(this, function (_a) {
                notification = this.visibleProgressNotifications.get(progressId);
                if (notification) {
                    notification.update(update);
                }
                else {
                    this.showProgress(progressId, message, cancellationToken, update);
                }
                return [2 /*return*/];
            });
        });
    };
    NotificationsMessageClient.prototype.show = function (message) {
        var _this = this;
        var key = this.getKey(message);
        if (this.visibleMessages.has(key)) {
            return Promise.resolve(undefined);
        }
        this.visibleMessages.add(key);
        return new Promise(function (resolve) {
            _this.notifications.show(_this.getNotificationProperties(key, message, function (action) {
                _this.visibleMessages.delete(key);
                resolve(action);
            }));
        });
    };
    NotificationsMessageClient.prototype.getKey = function (m) {
        return m.type + "-" + m.text + "-" + (m.actions ? m.actions.join('|') : '|');
    };
    NotificationsMessageClient.prototype.getNotificationProperties = function (id, message, onCloseFn) {
        var icon = this.iconFor(message.type);
        var text = message.text;
        var actions = (message.actions || []).map(function (action) { return ({
            label: action,
            fn: function (element) { return onCloseFn(action); }
        }); });
        var timeout = actions.length > 0 ? undefined
            : (!!message.options && message.options.timeout !== undefined
                ? message.options.timeout
                : this.preferences['notification.timeout']);
        actions.push({
            label: 'Close',
            fn: function (element) { return onCloseFn(undefined); }
        });
        return {
            id: id,
            icon: icon,
            text: text,
            actions: actions,
            timeout: timeout,
            onTimeout: function () { return onCloseFn(undefined); }
        };
    };
    NotificationsMessageClient.prototype.iconFor = function (type) {
        switch (type) {
            case common_1.MessageType.Error: return 'error';
            case common_1.MessageType.Warning: return 'warning';
            case common_1.MessageType.Progress: return 'progress';
            default: return 'info';
        }
    };
    __decorate([
        inversify_1.inject(notification_preferences_1.NotificationPreferences),
        __metadata("design:type", Object)
    ], NotificationsMessageClient.prototype, "preferences", void 0);
    NotificationsMessageClient = __decorate([
        inversify_1.injectable()
    ], NotificationsMessageClient);
    return NotificationsMessageClient;
}(common_1.MessageClient));
exports.NotificationsMessageClient = NotificationsMessageClient;


/***/ }),

/***/ "../node_modules/@theia/messages/lib/browser/notifications.js":
/*!********************************************************************!*\
  !*** ../node_modules/@theia/messages/lib/browser/notifications.js ***!
  \********************************************************************/
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
exports.NOTIFICATIONS_CONTAINER = 'theia-NotificationsContainer';
exports.NOTIFICATION = 'theia-Notification';
exports.ICON = 'icon';
exports.TEXT = 'text';
exports.BUTTONS = 'buttons';
var Notifications = /** @class */ (function () {
    function Notifications(parent) {
        this.parent = parent;
        this.parent = parent || document.body;
        this.container = this.createNotificationsContainer(this.parent);
    }
    Notifications.prototype.show = function (properties) {
        var notificationElement = this.createNotificationElement(properties);
        this.container.appendChild(notificationElement);
    };
    Notifications.prototype.create = function (properties) {
        return new ProgressNotificationImpl(this.container, this.createNotificationElement(properties), properties);
    };
    Notifications.prototype.createNotificationsContainer = function (parentContainer) {
        var container = document.createElement('div');
        container.classList.add(exports.NOTIFICATIONS_CONTAINER);
        return parentContainer.appendChild(container);
    };
    Notifications.prototype.createNotificationElement = function (properties) {
        var e_1, _a;
        var fragment = document.createDocumentFragment();
        var element = fragment.appendChild(document.createElement('div'));
        element.classList.add(exports.NOTIFICATION);
        element.id = 'notification-container-' + properties.id;
        var iconContainer = element.appendChild(document.createElement('div'));
        iconContainer.classList.add(exports.ICON);
        var icon = iconContainer.appendChild(document.createElement('i'));
        icon.classList.add('fa', this.toIconClass(properties.icon));
        if (properties.icon === 'progress') {
            icon.classList.add('fa-pulse');
        }
        icon.classList.add('fa-fw', properties.icon);
        var textContainer = element.appendChild(document.createElement('div'));
        textContainer.classList.add(exports.TEXT);
        var text = textContainer.appendChild(document.createElement('p'));
        text.id = 'notification-text-' + properties.id;
        text.innerText = properties.text;
        var handler = { element: element, properties: properties };
        var close = function () {
            element.remove();
        };
        var buttons = element.appendChild(document.createElement('div'));
        buttons.classList.add(exports.BUTTONS);
        var closeTimer = (!!properties.timeout && properties.timeout > 0) ?
            window.setTimeout(function () {
                properties.onTimeout();
                close();
            }, properties.timeout) : undefined;
        if (!!properties.actions) {
            var _loop_1 = function (action) {
                var button = buttons.appendChild(document.createElement('button'));
                button.innerText = action.label;
                button.addEventListener('click', function () {
                    if (closeTimer) {
                        window.clearTimeout(closeTimer);
                    }
                    action.fn(handler);
                    close();
                });
            };
            try {
                for (var _b = __values(properties.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var action = _c.value;
                    _loop_1(action);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return fragment;
    };
    Notifications.prototype.toIconClass = function (icon) {
        switch (icon) {
            case 'error': return 'fa-times-circle';
            case 'warning': return 'fa-warning';
            case 'progress': return 'fa-spinner';
            default: return 'fa-info-circle';
        }
    };
    return Notifications;
}());
exports.Notifications = Notifications;
var ProgressNotificationImpl = /** @class */ (function () {
    function ProgressNotificationImpl(container, node, properties) {
        this.node = node;
        this.container = container;
        this.properties = properties;
    }
    ProgressNotificationImpl.prototype.close = function () {
        var element = document.getElementById('notification-container-' + this.properties.id);
        if (!element) {
            return;
        }
        element.remove();
    };
    ProgressNotificationImpl.prototype.show = function () {
        var container = document.getElementById('notification-container-' + this.properties.id);
        if (!container) {
            this.container.appendChild(this.node);
        }
        container = document.getElementById('notification-container-' + this.properties.id);
        if (container) {
            var progressContainer = container.appendChild(document.createElement('div'));
            progressContainer.className = 'progress';
            var progress = progressContainer.appendChild(document.createElement('p'));
            progress.id = 'notification-progress-' + this.properties.id;
        }
    };
    ProgressNotificationImpl.prototype.update = function (item) {
        var textElement = document.getElementById('notification-text-' + this.properties.id);
        if (textElement) {
            if (item.work) {
                var progressElement = document.getElementById('notification-progress-' + this.properties.id);
                if (progressElement) {
                    var progressRate = item.work;
                    progressElement.innerText = Math.floor(progressRate.done / progressRate.total * 100) + "%";
                }
            }
            textElement.innerText = this.properties.text + (item.message ? ': ' + item.message : '');
        }
    };
    return ProgressNotificationImpl;
}());


/***/ }),

/***/ "../node_modules/@theia/messages/src/browser/style/index.css":
/*!*******************************************************************!*\
  !*** ../node_modules/@theia/messages/src/browser/style/index.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/messages/src/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/messages/src/browser/style/index.css":
/*!**********************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/messages/src/browser/style/index.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./notifications.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/messages/src/browser/style/notifications.css"), "");

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/messages/src/browser/style/notifications.css":
/*!******************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/messages/src/browser/style/notifications.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-NotificationsContainer {\n    pointer-events: none;\n    z-index: 1000000;\n    position: fixed;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n    top: 0;\n    left: 0;\n    right: 0;\n    text-align: left;\n}\n\n.theia-Notification {\n    pointer-events: all;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    display: flex;\n    flex-direction: row;\n    -webkit-justify-content: center;\n    justify-content: center;\n    clear: both;\n    box-sizing: border-box;\n    position: relative;\n    width: 60%;\n    min-width: 500px;\n    background-color: var(--theia-ui-dialog-color);\n    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.6);\n    min-height: 35px;\n    -webkit-animation: fadeInDown 0.5s ease both;\n    animation: fadeInDown 0.5s ease both;\n    margin-bottom: 1px;\n    color: var(--theia-ui-dialog-font-color);\n}\n\n.theia-Notification .icon {\n    display: inline-block;\n    width: 35px;\n    order: 1;\n    padding: 10px 15px;\n}\n\n.theia-Notification .icon .fa {\n    line-height: inherit;\n    vertical-align: middle;\n    font-size: 120%;\n    color: var(--theia-accent-color2);\n}\n\n.theia-Notification .icon .error {\n    color: var(--theia-error-color1);\n}\n\n.theia-Notification .icon .warning {\n    color: var(--theia-warn-color0);\n}\n\n.theia-Notification .progress {\n    order: 2;\n    width: 35px;\n    align-items: center;\n    -webkit-user-select: text;\n    -moz-user-select: text;\n    -ms-user-select: text;\n    user-select: text;\n    align-self: center;\n    height: 100%;\n}\n\n.theia-Notification .progress > p {\n    margin: 0px;\n    font-size: var(--theia-ui-font-size1);\n    vertical-align: middle;\n}\n\n.theia-Notification .text {\n    order: 3;\n    display: flex;\n    align-items: center;\n    justify-items: left;\n    max-height: calc(100vh - 100px);\n    max-width: calc(100vw - 100px);\n    -webkit-user-select: text;\n    -moz-user-select: text;\n    -ms-user-select: text;\n    user-select: text;\n    align-self: center;\n    flex: 1 100%;\n    height: 100%;\n    padding: 10px;\n    overflow: auto;\n}\n\n.theia-Notification .text > p {\n    margin: 0px;\n    font-size: var(--theia-ui-font-size1);\n    vertical-align: middle;\n}\n\n.theia-Notification .buttons {\n    display: flex;\n    flex-direction: row;\n    order: 4;\n    white-space: nowrap;\n    align-self: flex-end;\n    height: 40px;\n}\n\n.theia-Notification .buttons > button {\n    background-color: var(--theia-ui-button-color);\n    color: var(--theia-ui-button-font-color);\n    border: none;\n    border-radius: 0px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    padding: 0px 10px;\n    margin: 0px;\n    font-size: var(--theia-ui-font-size1);\n    outline: none;\n    cursor: pointer;\n}\n\n.theia-Notification .buttons > button:hover {\n    background-color: var(--theia-accent-color1);\n}\n\n@-moz-keyframes fadeInDown {\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -100%, 0);\n        transform: translate3d(0, -100%, 0);\n    }\n    to {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none;\n    }\n}\n\n@-webkit-keyframes fadeInDown {\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -100%, 0);\n        transform: translate3d(0, -100%, 0);\n    }\n    to {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none;\n    }\n}\n\n@-o-keyframes fadeInDown {\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -100%, 0);\n        transform: translate3d(0, -100%, 0);\n    }\n    to {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none;\n    }\n}\n\n@keyframes fadeInDown {\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -100%, 0);\n        transform: translate3d(0, -100%, 0);\n    }\n    to {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none;\n    }\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=23.bundle.js.map