var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function s(t){try{c(r["throw"](t))}catch(e){i(e)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,s)}c((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,i=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(r){n=[6,r],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return n.sent(),this.stage.removeChild(t),[3,4];case 3:return e=n.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){var t=this.createBitmapByName("bg_jpg");this.addChild(t);var e=this.stage.stageWidth,n=this.stage.stageHeight;t.width=e,t.height=n;var r=location.href;egret.log(r);var o=new egret.TextField;o.text="Location 属性测试"+r,this.addChild(o);var i=this.getButton("获取 localStorage");i.x=200,i.y=100,this.addChild(i),i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var t=egret.localStorage.getItem(r);egret.log("localStorage:"+t)},this);var i=this.getButton("储存 localStorage");i.x=200,i.y=180,this.addChild(i),i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){egret.localStorage.setItem(r,r);var t=egret.localStorage.getItem(r);egret.log("localStorage:"+t)},this);var i=this.getButton("清除 localStorage");i.x=200,i.y=240,this.addChild(i),i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){egret.localStorage.clear();var t=egret.localStorage.getItem(r);egret.log("localStorage:"+t)},this);var i=this.getButton("location.href  test");i.x=200,i.y=320,this.addChild(i),i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){window.location.href="http://test.zhihuasi.com/a/index.html"},this);var i=this.getButton("location.host  test");i.x=200,i.y=400,this.addChild(i),i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){window.location.host="test.zhihuasi.com"},this);var i=this.getButton("location.hostname  test");i.x=200,i.y=480,this.addChild(i),i.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){window.location.hostname="test.zhihuasi.com"},this)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.getButton=function(t){void 0===t&&(t="");var e=new egret.Sprite,n=new egret.TextField;n.text=t,n.x=10,n.y=10;var r=new egret.Shape;return r.graphics.beginFill(0),r.graphics.drawRect(0,0,n.width+20,n.height+20),r.touchEnabled=!0,e.addChild(r),e.addChild(n),e},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);