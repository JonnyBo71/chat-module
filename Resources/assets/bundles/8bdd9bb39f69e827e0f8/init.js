(window.webpackJsonp = window.webpackJsonp || []).push([[12], {
  1094: function (e, t, n) {
    var i = {
      "./": [190, 9],
      "./ICanvasEffect": [680, 7, 5],
      "./ICanvasEffect.ts": [680, 7, 5],
      "./confetti": [341, 9, 0],
      "./confetti/": [341, 9, 0],
      "./confetti/index": [341, 9, 0],
      "./confetti/index.ts": [341, 9, 0],
      "./fireworks": [342, 9, 1],
      "./fireworks/": [342, 9, 1],
      "./fireworks/index": [342, 9, 1],
      "./fireworks/index.ts": [342, 9, 1],
      "./index": [190, 9],
      "./index.ts": [190, 9],
      "./snowfall": [343, 9, 2],
      "./snowfall/": [343, 9, 2],
      "./snowfall/index": [343, 9, 2],
      "./snowfall/index.ts": [343, 9, 2],
      "./utils": [284, 9],
      "./utils.ts": [284, 9]
    };

    function o(e) {
      if (!n.o(i, e)) return Promise.resolve().then((function () {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      }));
      var t = i[e], o = t[0];
      return Promise.all(t.slice(2).map(n.e)).then((function () {
        return n.t(o, t[1])
      }))
    }

    o.keys = function () {
      return Object.keys(i)
    }, o.id = 1094, e.exports = o
  }, 1317: function (e, t, n) {
    "use strict";
    t.a = n.p + "i18n/languages.742b17d.json"
  }, 1318: function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", (function () {
        return c
      }));
      var i = n(83), o = n.n(i);

      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(n), !0).forEach((function (t) {
            o()(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      const r = {
        bgColor: "#d00",
        textColor: "#fff",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        isUp: !1,
        isLeft: !1
      };

      class c {
        constructor(e = {}) {
          o()(this, "browser", {
            ff: void 0 !== window.InstallTrigger,
            opera: !!window.opera || navigator.userAgent.includes("Opera")
          }), o()(this, "params", void 0), o()(this, "canvas", void 0), o()(this, "baseImage", void 0), o()(this, "context", void 0), o()(this, "icons", void 0), o()(this, "isReady", !1), o()(this, "readyCb", () => {
          }), this.params = a(a({}, r), e), this.icons = c.getIcons(), this.canvas = document.createElement("canvas"), this.baseImage = document.createElement("img");
          const t = this.icons[this.icons.length - 1];
          t.hasAttribute("href") ? (this.baseImage.setAttribute("crossOrigin", "anonymous"), this.baseImage.onload = () => {
            this.canvas.height = this.baseImage.height > 0 ? this.baseImage.height : 32, this.canvas.width = this.baseImage.width > 0 ? this.baseImage.width : 32, this.context = this.canvas.getContext("2d"), this.ready()
          }, this.baseImage.setAttribute("src", t.getAttribute("href"))) : (this.canvas.height = this.baseImage.height = 32, this.canvas.width = this.baseImage.width = 32, this.context = this.canvas.getContext("2d"), this.ready())
        }

        reset() {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.drawImage(this.baseImage, 0, 0, this.canvas.width, this.canvas.height)
        }

        options(e, t) {
          const n = {n: "number" == typeof e ? Math.abs(e) : e, len: ("" + e).length, x: .4, y: .4, w: .6, h: .6};
          return t.isUp && (n.y < .6 ? n.y = n.y - .4 : n.y = n.y - 2 * n.y + (1 - n.w)), t.isLeft && (n.x < .6 ? n.x = n.x - .4 : n.x = n.x - 2 * n.x + (1 - n.h)), n.x = this.canvas.width * n.x, n.y = this.canvas.height * n.y, n.w = this.canvas.width * n.w, n.h = this.canvas.height * n.h, n
        }

        circle(e, t) {
          const n = a(a({}, this.params), t), i = this.options(e, n);
          let o = !1;
          2 === i.len ? (i.x = i.x - .4 * i.w, i.w = 1.4 * i.w, o = !0) : i.len >= 3 && (i.x = i.x - .65 * i.w, i.w = 1.65 * i.w, o = !0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.drawImage(this.baseImage, 0, 0, this.canvas.width, this.canvas.height), this.context.beginPath();
          const s = Math.floor(i.h * (i.n > 99 ? .85 : 1)) + "px";
          if (this.context.font = `${n.fontWeight} ${s} ${n.fontFamily}`, this.context.textAlign = "center", o ? (this.context.moveTo(i.x + i.w / 2, i.y), this.context.lineTo(i.x + i.w - i.h / 2, i.y), this.context.quadraticCurveTo(i.x + i.w, i.y, i.x + i.w, i.y + i.h / 2), this.context.lineTo(i.x + i.w, i.y + i.h - i.h / 2), this.context.quadraticCurveTo(i.x + i.w, i.y + i.h, i.x + i.w - i.h / 2, i.y + i.h), this.context.lineTo(i.x + i.h / 2, i.y + i.h), this.context.quadraticCurveTo(i.x, i.y + i.h, i.x, i.y + i.h - i.h / 2), this.context.lineTo(i.x, i.y + i.h / 2), this.context.quadraticCurveTo(i.x, i.y, i.x + i.h / 2, i.y)) : this.context.arc(i.x + i.w / 2, i.y + i.h / 2, i.h / 2, 0, 2 * Math.PI), this.context.fillStyle = n.bgColor, this.context.fill(), this.context.closePath(), this.context.beginPath(), this.context.stroke(), this.context.fillStyle = n.textColor, "number" == typeof i.n && i.n > 999) {
            const e = (i.n > 9999 ? 9 : Math.floor(i.n / 1e3)) + "k+";
            this.context.fillText(e, Math.floor(i.x + i.w / 2), Math.floor(i.y + i.h - .2 * i.h))
          } else this.context.fillText("" + i.n, Math.floor(i.x + i.w / 2), Math.floor(i.y + i.h - .15 * i.h));
          this.context.closePath()
        }

        ready() {
          this.isReady || (this.isReady = !0, this.readyCb())
        }

        setIcon(t) {
          e(() => {
            this.setIconSrc(t.toDataURL("image/png"))
          })
        }

        setIconSrc(e) {
          if (this.browser.ff || this.browser.opera) {
            const t = this.icons[this.icons.length - 1], n = window.document.createElement("link");
            this.icons = [n], n.setAttribute("rel", "icon"), n.setAttribute("type", "image/png"), window.document.getElementsByTagName("head")[0].appendChild(n), n.setAttribute("href", e), t.parentNode && t.parentNode.removeChild(t)
          } else this.icons.forEach(t => {
            t.setAttribute("href", e)
          })
        }

        badge(e, t) {
          this.isReady ? ("string" == typeof e || e > 0 ? this.circle(e, t) : this.reset(), this.setIcon(this.canvas)) : this.readyCb = () => {
            this.badge(e, t)
          }
        }

        static getLinks() {
          const e = [], t = window.document.getElementsByTagName("head")[0].getElementsByTagName("link");
          for (let n = 0; n < t.length; n++) /(^|\s)icon(\s|$)/i.test(t[n].getAttribute("rel")) && e.push(t[n]);
          return e
        }

        static getIcons() {
          let e = c.getLinks();
          return 0 === e.length && (e = [window.document.createElement("link")], e[0].setAttribute("rel", "icon"), window.document.getElementsByTagName("head")[0].appendChild(e[0])), e.forEach(e => {
            e.setAttribute("type", "image/png")
          }), e
        }
      }
    }).call(this, n(156).setImmediate)
  }, 28: function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
      return s
    }));
    var i = n(16), o = n.n(i);

    async function s(e = "") {
      "" === e || e.endsWith("/") || (e += "/");
      const t = a(`${e}config.${document.domain}.json`), n = a(e + "config.json");
      try {
        const e = await t;
        if (0 === Object.keys(e).length) throw new Error;
        return e
      } catch (e) {
        return await n
      }
    }

    function a(e) {
      return new Promise((function (t, n) {
        o()({method: "GET", url: e, qs: {cachebuster: Date.now()}}, (e, i, o) => {
          try {
            if (e || i.status < 200 || i.status >= 300) return i && (404 == i.status || 0 == i.status && "" == o) && t({}), void n({
              err: e,
              response: i
            });
            t(JSON.parse(o))
          } catch (e) {
            n({err: e})
          }
        })
      }))
    }
  }, 559: function (e, t) {
  }, 81: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "rageshakePromise", (function () {
      return Q
    })), n.d(t, "preparePlatform", (function () {
      return J
    })), n.d(t, "loadConfig", (function () {
      return Y
    })), n.d(t, "loadOlm", (function () {
      return X
    })), n.d(t, "loadLanguage", (function () {
      return Z
    })), n.d(t, "loadSkin", (function () {
      return ee
    })), n.d(t, "loadTheme", (function () {
      return te
    })), n.d(t, "loadApp", (function () {
      return ne
    })), n.d(t, "showError", (function () {
      return ie
    })), n.d(t, "showIncompatibleBrowser", (function () {
      return oe
    })), n.d(t, "_t", (function () {
      return se
    }));
    var i = n(692), o = n(693), s = n.n(o), a = n(134), r = n(82), c = n.n(r), l = n(84), d = n(89), u = n(83),
      h = n.n(u), p = n(242), g = n(28), f = n(1318);

    class w extends p.e {
      constructor(...e) {
        super(...e), h()(this, "_favicon", void 0)
      }

      async getConfig() {
        return Object(g.a)()
      }

      getHumanReadableName() {
        return "Vector Base Platform"
      }

      get favicon() {
        return this._favicon ? this._favicon : this._favicon = new f.a
      }

      _updateFavicon() {
        let e = "#d00", t = this.notificationCount;
        this.errorDidOccur && (t = t || "×", e = "#f00"), this.favicon.badge(t, {bgColor: e})
      }

      setNotificationCount(e) {
        this.notificationCount !== e && (super.setNotificationCount(e), this._updateFavicon())
      }

      setErrorStatus(e) {
        this.errorDidOccur !== e && (super.setErrorStatus(e), this._updateFavicon())
      }

      startUpdater() {
      }

      getDefaultDeviceDisplayName() {
        return Object(l.a)("Unknown device")
      }
    }

    var m = n(1319), y = n(88), b = n(93), v = n(432), C = n(90), O = n(282), x = n(113), I = n(430), E = n(99),
      _ = n(168), k = n(95), A = n(428), j = n(128), P = n(673);

    function S(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, i)
      }
      return n
    }

    const T = window.electron, N = navigator.platform.toUpperCase().includes("MAC");

    function D(e) {
      ["call_state"].includes(e.action) && T.send("app_onAction", e)
    }

    class U extends m.a {
      constructor() {
        super(), h()(this, "pendingIpcCalls", {}), h()(this, "nextIpcCallId", 0), h()(this, "_onIpcReply", (e, t) => {
          if (void 0 === t.id) return void console.warn("Ignoring IPC reply with no ID");
          if (void 0 === this.pendingIpcCalls[t.id]) return void console.warn("Unknown IPC payload ID: " + t.id);
          const n = this.pendingIpcCalls[t.id];
          delete this.pendingIpcCalls[t.id], t.error ? n.reject(t.error) : n.resolve(t.reply)
        }), T.on("seshatReply", this._onIpcReply)
      }

      async _ipcCall(e, ...t) {
        const n = ++this.nextIpcCallId;
        return new Promise((i, o) => {
          this.pendingIpcCalls[n] = {resolve: i, reject: o}, window.electron.send("seshat", {id: n, name: e, args: t})
        })
      }

      async supportsEventIndexing() {
        return this._ipcCall("supportsEventIndexing")
      }

      async initEventIndex(e, t) {
        return this._ipcCall("initEventIndex", e, t)
      }

      async addEventToIndex(e, t) {
        return this._ipcCall("addEventToIndex", e, t)
      }

      async deleteEvent(e) {
        return this._ipcCall("deleteEvent", e)
      }

      async isEventIndexEmpty() {
        return this._ipcCall("isEventIndexEmpty")
      }

      async isRoomIndexed(e) {
        return this._ipcCall("isRoomIndexed", e)
      }

      async commitLiveEvents() {
        return this._ipcCall("commitLiveEvents")
      }

      async searchEventIndex(e) {
        return this._ipcCall("searchEventIndex", e)
      }

      async addHistoricEvents(e, t, n) {
        return this._ipcCall("addHistoricEvents", e, t, n)
      }

      async addCrawlerCheckpoint(e) {
        return this._ipcCall("addCrawlerCheckpoint", e)
      }

      async removeCrawlerCheckpoint(e) {
        return this._ipcCall("removeCrawlerCheckpoint", e)
      }

      async loadFileEvents(e) {
        return this._ipcCall("loadFileEvents", e)
      }

      async loadCheckpoints() {
        return this._ipcCall("loadCheckpoints")
      }

      async closeEventIndex() {
        return this._ipcCall("closeEventIndex")
      }

      async getStats() {
        return this._ipcCall("getStats")
      }

      async getUserVersion() {
        return this._ipcCall("getUserVersion")
      }

      async setUserVersion(e) {
        return this._ipcCall("setUserVersion", e)
      }

      async deleteEventIndex() {
        return this._ipcCall("deleteEventIndex")
      }
    }

    class R extends w {
      constructor() {
        super(), h()(this, "eventIndexManager", new U), h()(this, "pendingIpcCalls", {}), h()(this, "nextIpcCallId", 0), h()(this, "ssoID", Object(_.a)(32)), h()(this, "onUpdateDownloaded", async (e, {
          releaseNotes: t,
          releaseName: n
        }) => {
          y.a.dispatch({
            action: k.a.CheckUpdates,
            status: p.d.Ready
          }), this.shouldShowUpdate(n) && Object(A.b)(await this.getAppVersion(), n, t)
        }), h()(this, "_onIpcReply", (e, t) => {
          if (void 0 === t.id) return void console.warn("Ignoring IPC reply with no ID");
          if (void 0 === this.pendingIpcCalls[t.id]) return void console.warn("Unknown IPC payload ID: " + t.id);
          const n = this.pendingIpcCalls[t.id];
          delete this.pendingIpcCalls[t.id], t.error ? n.reject(t.error) : n.resolve(t.reply)
        }), y.a.register(D), T.on("check_updates", (e, t) => {
          y.a.dispatch(function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? S(Object(n), !0).forEach((function (t) {
                h()(e, t, n[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }))
            }
            return e
          }({action: k.a.CheckUpdates}, function (e) {
            return !0 === e ? {status: p.d.Downloading} : !1 === e ? {status: p.d.NotAvailable} : {
              status: p.d.Error,
              detail: e
            }
          }(t)))
        }), T.on("before-quit", (function () {
          console.log("element-desktop closing"), v.b()
        })), T.on("ipcReply", this._onIpcReply), T.on("update-downloaded", this.onUpdateDownloaded), T.on("preferences", () => {
          y.a.fire(k.a.ViewUserSettings)
        }), T.on("userDownloadCompleted", (e, {path: t, name: n}) => {
          j.a.sharedInstance().addOrReplaceToast({
            key: "DOWNLOAD_TOAST_" + t,
            title: Object(l.a)("Download Completed"),
            props: {
              description: n, acceptLabel: Object(l.a)("Open"), onAccept: () => {
                T.send("userDownloadOpen", {path: t})
              }, dismissLabel: Object(l.a)("Dismiss"), numSeconds: 10
            },
            component: P.a,
            priority: 99
          })
        }), N ? (Object(I.c)(I.a.NAVIGATION, {
          keybinds: [{modifiers: [I.b.COMMAND], key: E.a.COMMA}],
          description: Object(l.b)("Open user settings")
        }), Object(I.c)(I.a.NAVIGATION, {
          keybinds: [{
            modifiers: [I.b.COMMAND],
            key: E.a.SQUARE_BRACKET_LEFT
          }, {modifiers: [I.b.COMMAND], key: E.a.SQUARE_BRACKET_RIGHT}],
          description: Object(l.b)("Previous/next recently visited room or community")
        })) : Object(I.c)(I.a.NAVIGATION, {
          keybinds: [{
            modifiers: [I.b.ALT],
            key: E.a.ARROW_LEFT
          }, {modifiers: [I.b.ALT], key: E.a.ARROW_RIGHT}],
          description: Object(l.b)("Previous/next recently visited room or community")
        }), this._ipcCall("startSSOFlow", this.ssoID)
      }

      async getConfig() {
        return this._ipcCall("getConfig")
      }

      getHumanReadableName() {
        return "Electron Platform"
      }

      setNotificationCount(e) {
        this.notificationCount !== e && (super.setNotificationCount(e), T.send("setBadgeCount", e))
      }

      supportsNotifications() {
        return !0
      }

      maySendNotifications() {
        return !0
      }

      displayNotification(e, t, n, i) {
        navigator.userAgent.includes("Linux") && (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
        const o = {body: t, silent: !0};
        n && (o.icon = n);
        const s = new window.Notification(e, o);
        return s.onclick = () => {
          y.a.dispatch({action: "view_room", room_id: i.roomId}), window.focus(), this._ipcCall("focusWindow")
        }, s
      }

      loudNotification(e, t) {
        T.send("loudNotification")
      }

      async getAppVersion() {
        return this._ipcCall("getAppVersion")
      }

      supportsAutoLaunch() {
        return !0
      }

      async getAutoLaunchEnabled() {
        return this._ipcCall("getAutoLaunchEnabled")
      }

      async setAutoLaunchEnabled(e) {
        return this._ipcCall("setAutoLaunchEnabled", e)
      }

      supportsAutoHideMenuBar() {
        return !N
      }

      async getAutoHideMenuBarEnabled() {
        return this._ipcCall("getAutoHideMenuBarEnabled")
      }

      async setAutoHideMenuBarEnabled(e) {
        return this._ipcCall("setAutoHideMenuBarEnabled", e)
      }

      supportsMinimizeToTray() {
        return !N
      }

      async getMinimizeToTrayEnabled() {
        return this._ipcCall("getMinimizeToTrayEnabled")
      }

      async setMinimizeToTrayEnabled(e) {
        return this._ipcCall("setMinimizeToTrayEnabled", e)
      }

      async canSelfUpdate() {
        const e = await this._ipcCall("getUpdateFeedUrl");
        return Boolean(e)
      }

      startUpdateCheck() {
        super.startUpdateCheck(), T.send("check_updates")
      }

      installUpdate() {
        T.send("install_update")
      }

      getDefaultDeviceDisplayName() {
        const e = b.a.get().brand;
        return Object(l.a)("%(brand)s Desktop (%(platformName)s)", {
          brand: e,
          platformName: navigator.userAgent.includes("Macintosh") ? "macOS" : navigator.userAgent.includes("FreeBSD") ? "FreeBSD" : navigator.userAgent.includes("OpenBSD") ? "OpenBSD" : navigator.userAgent.includes("SunOS") ? "SunOS" : navigator.userAgent.includes("Windows") ? "Windows" : navigator.userAgent.includes("Linux") ? "Linux" : "Unknown"
        })
      }

      screenCaptureErrorString() {
        return null
      }

      requestNotificationPermission() {
        return Promise.resolve("granted")
      }

      reload() {
        window.location.reload(!1)
      }

      async _ipcCall(e, ...t) {
        const n = ++this.nextIpcCallId;
        return new Promise((i, o) => {
          this.pendingIpcCalls[n] = {resolve: i, reject: o}, window.electron.send("ipcCall", {id: n, name: e, args: t})
        })
      }

      getEventIndexingManager() {
        return this.eventIndexManager
      }

      setLanguage(e) {
        this._ipcCall("setLanguage", e).catch(e => {
          console.log("Failed to send setLanguage IPC to Electron"), console.error(e)
        })
      }

      getSSOCallbackUrl(e) {
        const t = super.getSSOCallbackUrl(e);
        return t.protocol = "element", t.searchParams.set("element-desktop-ssoid", this.ssoID), t
      }

      startSingleSignOn(e, t, n, i) {
        super.startSingleSignOn(e, t, n, i), C.a.createTrackedDialog("Electron", "SSO", O.a, {
          title: Object(l.a)("Go to your browser to complete Sign In"),
          description: c.a.createElement(x.a, null)
        })
      }

      _navigateForwardBack(e) {
        this._ipcCall(e ? "navigateBack" : "navigateForward")
      }

      onKeyDown(e) {
        let t = !1;
        switch (e.key) {
          case E.a.SQUARE_BRACKET_LEFT:
          case E.a.SQUARE_BRACKET_RIGHT:
            !N || !e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || (this._navigateForwardBack(e.key === E.a.SQUARE_BRACKET_LEFT), t = !0);
            break;
          case E.a.ARROW_LEFT:
          case E.a.ARROW_RIGHT:
            N || !e.altKey || e.metaKey || e.ctrlKey || e.shiftKey || (this._navigateForwardBack(e.key === E.a.ARROW_LEFT), t = !0)
        }
        return t
      }

      async getPickleKey(e, t) {
        try {
          return await this._ipcCall("getPickleKey", e, t)
        } catch (e) {
          return null
        }
      }

      async createPickleKey(e, t) {
        try {
          return await this._ipcCall("createPickleKey", e, t)
        } catch (e) {
          return null
        }
      }

      async destroyPickleKey(e, t) {
        try {
          await this._ipcCall("destroyPickleKey", e, t)
        } catch (e) {
        }
      }
    }

    var B = n(16), M = n.n(B), L = n(109), F = n.n(L), V = n(1320), K = n.n(V);

    function W(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, i)
      }
      return n
    }

    class H extends w {
      constructor() {
        super(), h()(this, "runningVersion", null), h()(this, "pollForUpdate", () => this._getVersion().then(e => {
          if (null === this.runningVersion) this.runningVersion = e; else {
            if (this.runningVersion !== e) return this.shouldShowUpdate(e) && Object(A.b)(this.runningVersion, e), {status: p.d.Ready};
            Object(A.a)()
          }
          return {status: p.d.NotAvailable}
        }, e => (console.error("Failed to poll for update", e), {
          status: p.d.Error,
          detail: e.message || e.status ? e.status.toString() : "Unknown Error"
        }))), "serviceWorker" in navigator && navigator.serviceWorker.register("sw.js")
      }

      getHumanReadableName() {
        return "Web Platform"
      }

      supportsNotifications() {
        return Boolean(window.Notification)
      }

      maySendNotifications() {
        return "granted" === window.Notification.permission
      }

      requestNotificationPermission() {
        return new Promise((function (e, t) {
          window.Notification.requestPermission(t => {
            e(t)
          })
        }))
      }

      displayNotification(e, t, n, i) {
        const o = {body: t, tag: "vector", silent: !0};
        n && (o.icon = n);
        const s = new window.Notification(e, o);
        return s.onclick = function () {
          y.a.dispatch({action: "view_room", room_id: i.roomId}), window.focus(), s.close()
        }, s
      }

      _getVersion() {
        return new Promise((function (e, t) {
          M()({method: "GET", url: "version", qs: {cachebuster: Date.now()}}, (n, i, o) => {
            if (n || i.status < 200 || i.status >= 300) return null === n && (n = {status: i.status}), void t(n);
            const s = o.trim();
            e(s)
          })
        }))
      }

      getAppVersion() {
        return null !== this.runningVersion ? Promise.resolve(this.runningVersion) : this._getVersion()
      }

      startUpdater() {
        this.pollForUpdate(), setInterval(this.pollForUpdate, 6e5)
      }

      async canSelfUpdate() {
        return !0
      }

      startUpdateCheck() {
        super.startUpdateCheck(), this.pollForUpdate().then(e => {
          y.a.dispatch(function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? W(Object(n), !0).forEach((function (t) {
                h()(e, t, n[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }))
            }
            return e
          }({action: k.a.CheckUpdates}, e))
        })
      }

      installUpdate() {
        window.location.reload(!0)
      }

      getDefaultDeviceDisplayName() {
        const e = F.a.parse(window.location.href);
        e.protocol = "", e.search = "", e.hash = "", e.pathname = e.pathname.replace(/\/$/, "");
        let t = e.format();
        t = t.replace(/^\/\//, "");
        const n = new K.a, i = n.getBrowser().name || "unknown browser";
        let o = n.getOS().name || "unknown OS";
        return "Mac OS" === o && (o = "macOS"), Object(l.a)("%(appName)s (%(browserName)s, %(osName)s)", {
          appName: t,
          browserName: i,
          osName: o
        })
      }

      screenCaptureErrorString() {
        return "https:" !== window.location.protocol ? Object(l.a)("You need to be using HTTPS to place a screen-sharing call.") : null
      }

      reload() {
        window.location.reload(!1)
      }
    }

    class q extends H {
      setNotificationCount(e) {
        if (!navigator.setAppBadge) return super.setNotificationCount(e);
        this.notificationCount !== e && (this.notificationCount = e, navigator.setAppBadge(e).catch(e => {
          console.error("Failed to update PWA app badge", e)
        }))
      }
    }

    var G = n(106), $ = n(241), z = n(624);
    window.mxSendRageshake = function (e, t) {
      const n = b.a.get().bug_report_endpoint_url;
      n ? (void 0 === t && (t = !0), e && e.trim() ? Object(z.a)(n, {
        userText: e,
        sendLogs: t,
        progressCallback: console.log.bind(console)
      }).then(() => {
        console.log("Bug report sent!")
      }, e => {
        console.error(e)
      }) : console.error("Cannot send a rageshake without a message - please tell us what went wrong")) : console.error("Cannot send a rageshake - no bug_report_endpoint_url configured")
    };
    const Q = function () {
      const e = v.d();
      return e.then(() => {
        console.log("Initialised rageshake."), console.log("To fix line numbers in Chrome: Meatball menu → Settings → Blackboxing → Add /rageshake\\.js$"), window.addEventListener("beforeunload", e => {
          console.log("element-web closing"), v.b()
        }), v.a()
      }, e => {
        console.error("Failed to initialise rageshake: " + e)
      }), e
    }();

    function J() {
      window.electron ? (console.log("Using Electron platform"), G.a.set(new R)) : window.matchMedia("(display-mode: standalone)").matches ? (console.log("Using PWA platform"), G.a.set(new q)) : (console.log("Using Web platform"), G.a.set(new H))
    }

    async function Y() {
      b.a.put(await G.a.get().getConfig() || {})
    }

    function X() {
      return s.a.init({locateFile: () => i.a}).then(() => {
        console.log("Using WebAssembly Olm")
      }).catch(e => (console.log("Failed to load Olm: trying legacy version", e), new Promise((e, t) => {
        const n = document.createElement("script");
        n.src = "olm_legacy.js", n.onload = e, n.onerror = t, document.body.appendChild(n)
      }).then(() => window.Olm.init()).then(() => {
        console.log("Using legacy Olm")
      }).catch(e => {
        console.log("Both WebAssembly and asm.js Olm failed!", e)
      })))
    }

    async function Z() {
      const e = d.a.getValue("language", null, !0);
      let t = [];
      e ? t = [e] : l.f().forEach(e => {
        t.push(...l.g(e))
      });
      try {
        await l.k(t), document.documentElement.setAttribute("lang", l.d())
      } catch (e) {
        console.error("Unable to set language", e)
      }
    }

    async function ee() {
      console.log("Loading skin...");
      const [e, t] = await Promise.all([Promise.resolve().then(n.bind(null, 86)), n.e(9).then(n.bind(null, 1344))]);
      e.loadSkin(t), console.log("Skin loaded!")
    }

    async function te() {
      Object($.d)()
    }

    async function ne(e) {
      const t = await n.e(8).then(n.bind(null, 1336));
      window.matrixChat = a.render(await t.loadApp(e), document.getElementById("matrixchat"))
    }

    async function ie(e, t) {
      const i = (await n.e(10).then(n.bind(null, 1337))).default;
      window.matrixChat = a.render(r.createElement(i, {title: e, messages: t}), document.getElementById("matrixchat"))
    }

    async function oe(e) {
      const t = (await n.e(7).then(n.bind(null, 1338))).default;
      window.matrixChat = a.render(r.createElement(t, {onAccept: e}), document.getElementById("matrixchat"))
    }

    const se = l.a
  }, 944: function (e, t) {
  }, 953: function (e, t) {
  }, 965: function (e, t) {
  }
}]);
//# sourceMappingURL=init.js.map
