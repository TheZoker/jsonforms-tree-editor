(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "../node_modules/@theia/filesystem/lib/browser/download/file-download-command-contribution.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/browser/download/file-download-command-contribution.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var objects_1 = __webpack_require__(/*! @theia/core/lib/common/objects */ "../node_modules/@theia/core/lib/common/objects.js");
var selection_1 = __webpack_require__(/*! @theia/core/lib/common/selection */ "../node_modules/@theia/core/lib/common/selection.js");
var selection_service_1 = __webpack_require__(/*! @theia/core/lib/common/selection-service */ "../node_modules/@theia/core/lib/common/selection-service.js");
var uri_command_handler_1 = __webpack_require__(/*! @theia/core/lib/common/uri-command-handler */ "../node_modules/@theia/core/lib/common/uri-command-handler.js");
var file_download_service_1 = __webpack_require__(/*! ./file-download-service */ "../node_modules/@theia/filesystem/lib/browser/download/file-download-service.js");
var FileDownloadCommandContribution = /** @class */ (function () {
    function FileDownloadCommandContribution() {
    }
    FileDownloadCommandContribution.prototype.registerCommands = function (registry) {
        var handler = new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, this.downloadHandler(), { multi: true });
        registry.registerCommand(FileDownloadCommands.DOWNLOAD, handler);
    };
    FileDownloadCommandContribution.prototype.downloadHandler = function () {
        var _this = this;
        return {
            execute: function (uris) { return _this.executeDownload(uris); },
            isEnabled: function (uris) { return _this.isDownloadEnabled(uris); },
            isVisible: function (uris) { return _this.isDownloadVisible(uris); },
        };
    };
    FileDownloadCommandContribution.prototype.executeDownload = function (uris) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.downloadService.download(uris);
                return [2 /*return*/];
            });
        });
    };
    FileDownloadCommandContribution.prototype.isDownloadEnabled = function (uris) {
        return uris.length > 0 && uris.every(function (u) { return u.scheme === 'file'; });
    };
    FileDownloadCommandContribution.prototype.isDownloadVisible = function (uris) {
        return this.isDownloadEnabled(uris);
    };
    FileDownloadCommandContribution.prototype.getUris = function (uri) {
        var _this = this;
        if (uri === undefined) {
            return [];
        }
        return (Array.isArray(uri) ? uri : [uri]).map(function (u) { return _this.getUri(u); }).filter(objects_1.notEmpty);
    };
    FileDownloadCommandContribution.prototype.getUri = function (uri) {
        if (uri instanceof uri_1.default) {
            return uri;
        }
        if (selection_1.UriSelection.is(uri)) {
            return uri.uri;
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(file_download_service_1.FileDownloadService),
        __metadata("design:type", file_download_service_1.FileDownloadService)
    ], FileDownloadCommandContribution.prototype, "downloadService", void 0);
    __decorate([
        inversify_1.inject(selection_service_1.SelectionService),
        __metadata("design:type", selection_service_1.SelectionService)
    ], FileDownloadCommandContribution.prototype, "selectionService", void 0);
    FileDownloadCommandContribution = __decorate([
        inversify_1.injectable()
    ], FileDownloadCommandContribution);
    return FileDownloadCommandContribution;
}());
exports.FileDownloadCommandContribution = FileDownloadCommandContribution;
var FileDownloadCommands;
(function (FileDownloadCommands) {
    FileDownloadCommands.DOWNLOAD = {
        id: 'file.download'
    };
})(FileDownloadCommands = exports.FileDownloadCommands || (exports.FileDownloadCommands = {}));


/***/ }),

/***/ "../node_modules/@theia/filesystem/lib/browser/download/file-download-frontend-module.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/browser/download/file-download-frontend-module.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../node_modules/@theia/core/lib/common/command.js");
var file_download_service_1 = __webpack_require__(/*! ./file-download-service */ "../node_modules/@theia/filesystem/lib/browser/download/file-download-service.js");
var file_download_command_contribution_1 = __webpack_require__(/*! ./file-download-command-contribution */ "../node_modules/@theia/filesystem/lib/browser/download/file-download-command-contribution.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(file_download_service_1.FileDownloadService).toSelf().inSingletonScope();
    bind(command_1.CommandContribution).to(file_download_command_contribution_1.FileDownloadCommandContribution).inSingletonScope();
});


/***/ }),

/***/ "../node_modules/@theia/filesystem/lib/common/filesystem.js":
/*!******************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/common/filesystem.js ***!
  \******************************************************************/
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
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
exports.fileSystemPath = '/services/filesystem';
exports.FileSystem = Symbol('FileSystem');
var FileAccess;
(function (FileAccess) {
    var Constants;
    (function (Constants) {
        /**
         * Flag indicating that the file is visible to the calling process.
         * This is useful for determining if a file exists, but says nothing about rwx permissions. Default if no mode is specified.
         */
        Constants.F_OK = 0;
        /**
         * Flag indicating that the file can be read by the calling process.
         */
        Constants.R_OK = 4;
        /**
         * Flag indicating that the file can be written by the calling process.
         */
        Constants.W_OK = 2;
        /**
         * Flag indicating that the file can be executed by the calling process.
         * This has no effect on Windows (will behave like `FileAccess.F_OK`).
         */
        Constants.X_OK = 1;
    })(Constants = FileAccess.Constants || (FileAccess.Constants = {}));
})(FileAccess = exports.FileAccess || (exports.FileAccess = {}));
/**
 * A callback type, called when we try to save a file but realize it has been
 * modified by somebody else since we have opened it.  `originalStat` is the
 * stat at the moment we opened the file, `currentStat` is the stat at the
 * moment we try to save it (after the external modification).  The callback
 * should return true if we still want to save the file, false otherwise.
 */
exports.FileShouldOverwrite = Symbol('FileShouldOverwrite');
var DispatchingFileSystemClient = /** @class */ (function () {
    function DispatchingFileSystemClient() {
        this.clients = new Set();
    }
    DispatchingFileSystemClient.prototype.shouldOverwrite = function (originalStat, currentStat) {
        return Promise.race(__spread(this.clients).map(function (client) {
            return client.shouldOverwrite(originalStat, currentStat);
        }));
    };
    DispatchingFileSystemClient.prototype.onDidMove = function (sourceUri, targetUri) {
        this.clients.forEach(function (client) { return client.onDidMove(sourceUri, targetUri); });
    };
    DispatchingFileSystemClient = __decorate([
        inversify_1.injectable()
    ], DispatchingFileSystemClient);
    return DispatchingFileSystemClient;
}());
exports.DispatchingFileSystemClient = DispatchingFileSystemClient;
var FileStat;
(function (FileStat) {
    function is(candidate) {
        return candidate.hasOwnProperty('uri')
            && candidate.hasOwnProperty('lastModification')
            && candidate.hasOwnProperty('isDirectory');
    }
    FileStat.is = is;
    function equals(one, other) {
        if (!one || !other || !is(one) || !is(other)) {
            return false;
        }
        return one.uri === other.uri
            && one.lastModification === other.lastModification
            && one.isDirectory === other.isDirectory;
    }
    FileStat.equals = equals;
})(FileStat = exports.FileStat || (exports.FileStat = {}));
var FileSystemError;
(function (FileSystemError) {
    FileSystemError.FileNotFound = common_1.ApplicationError.declare(-33000, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' has not been found.",
        data: { uri: uri }
    }); });
    FileSystemError.FileExists = common_1.ApplicationError.declare(-33001, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' already exists.",
        data: { uri: uri }
    }); });
    FileSystemError.FileIsDirectory = common_1.ApplicationError.declare(-33002, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' is a directory.",
        data: { uri: uri }
    }); });
    FileSystemError.FileNotDirectory = common_1.ApplicationError.declare(-33003, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' is not a directory.",
        data: { uri: uri }
    }); });
    FileSystemError.FileIsOutOfSync = common_1.ApplicationError.declare(-33004, function (file, stat) { return ({
        message: "'" + file.uri + "' is out of sync.",
        data: { file: file, stat: stat }
    }); });
})(FileSystemError = exports.FileSystemError || (exports.FileSystemError = {}));


/***/ })

}]);
//# sourceMappingURL=28.bundle.js.map