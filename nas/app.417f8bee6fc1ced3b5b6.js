!function(t){var e={};function a(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=21)}([function(t,e,a){"use strict";function s(t,e,a,s,n,i,r,c){var o,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=a,u._compiled=!0),s&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),r?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=o):n&&(o=c?function(){n.call(this,this.$root.$options.shadowRoot)}:n),o)if(u.functional){u._injectStyles=o;var l=u.render;u.render=function(t,e){return o.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,o):[o]}return{exports:t,options:u}}a.d(e,"a",function(){return s})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.canvasZip=function(t,e){return new Promise(function(a){var s=new Image;s.src=t,s.onload=function(){var t=document.createElement("canvas"),n=t.getContext("2d");s.width>e?(t.width=e,t.height=s.height/s.width*e):(t.height=s.height,t.width=s.width),n.fillStyle="#FFFFFF",n.fillRect(0,0,t.width,t.height),n.drawImage(s,0,0,t.width,t.height),a(t.toDataURL("image/jpeg"))}})},e.nebGet=function(t,e,a){var s="";s=a||Account.NewAccount().getAddressString();var n=t,i=JSON.stringify(e),r={function:n,args:i};return new Promise(function(t,e){neb.api.call(s,dappAddress,"0","0","1000000","2000000",r).then(function(a){try{var s=JSON.parse(a.result);t(s)}catch(t){console.error(t),e("error")}})})},e.sendNebpay=function(t,e,a,n){return new Promise(function(i,r){var c,o,u,l=0,d={listener:function(t){if("mobile"!==s){if("string"==typeof t)return n.$toast("操作已取消"),void r("");var e=t.txhash;n.$indicator.open("已提交，等待确认"),o=setInterval(function(){v(e)},3e3)}}};function v(t){axios.post("https://mainnet.nebulas.io/v1/user/getTransactionReceipt",JSON.stringify({hash:t})).then(function(t){var e=t.data.result;1==e.status?(clearInterval(o),n.$indicator.close(),n.$toast("操作成功！"),i(JSON.parse(e.execute_result))):0===e.status&&(clearInterval(o),n.$indicator.close(),n.$toast("操作失败"),r(""))})}c=nebPay.call(dappAddress,e,t,JSON.stringify(a),d),console.log(c),"mobile"===s?(n.$toast("调用钱包APP中"),u=setInterval(function(){nebPay.queryPayInfo(c).then(function(t){(t=JSON.parse(t))&&"success"===t.msg&&(n.$indicator.open("已提交，等待确认"),clearInterval(u),o=setInterval(function(){v(t.data.hash)},3e3),n.address=t.data.from,localStorage.setItem("user_address",t.data.from))}),l++,console.log(l),l>20&&clearInterval(u)},3e3)):n.$toast("请您在钱包插件中确认")})};var s="web";navigator.userAgent.toUpperCase().match(/(IPHONE|ANDROID)/)&&(s="mobile")},function(t,e,a){"use strict"},function(t,e,a){"use strict";a.r(e);var s=a(2),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e.default=n.a},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(1),n={name:"component1",data:function(){return{UA:"web",address:"",AD:[],State:"",user:""}},mounted:function(){this.AD=this.$parent.AD},methods:{format:function(t){return t?(t/1e18).toFixed(4):"获取中"},getState:function(){var t=this;(0,s.nebGet)("getState",[""]).then(function(e){t.State=e})},getHistory:function(){var t=this;(0,s.nebGet)("getAllAd",["100","0"]).then(function(e){var a=[];e.map(function(t,e){var s=JSON.parse(t);s.disable=!0,a[e]=s}),a.reverse(),t.AD=a})},getUserHistory:function(t){var e=this;(0,s.nebGet)("getUser",[t]).then(function(t){var a=JSON.parse(t);console.log(a),e.user=a})},refresh:function(){this.getHistory(),this.getState()},jumpApp:function(t){var e=this.AD[t];e.disable=!1,window.open(e.url)}}};e.default=n},function(t,e,a){"use strict";a.r(e);var s=a(4),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e.default=n.a},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(1),n={name:"component1",data:function(){return{UA:"web",address:"",AD:[],State:"",user:"",userAgent:""}},watch:{"$parent.AD":function(){this.AD=this.$parent.AD}},mounted:function(){var t=this;this.userAgent=navigator.userAgent.toUpperCase();var e=localStorage.getItem("user_address");this.address=e||"",e&&this.getUserHistory(e),this.userAgent.match(/(IPHONE|ANDROID)/)&&(this.UA="mobile"),this.getState(),this.$toast("获取区块链数据中"),"web"===this.UA&&setTimeout(function(){t.checkEnv()},1e3)},methods:{format:function(t){return t?(t/1e18).toFixed(4):""},checkEnv:function(){"undefined"!=typeof webExtensionWallet?this.getUserAddress():this.$messagebox.confirm("检测到您没有安装星云链浏览器插件",{confirmButtonText:"知道了",cancelButtonText:"去下载",title:"提示"}).then(function(t){}).catch(function(t){window.open("https://github.com/ChengOrangeJu/WebExtensionWallet")})},getState:function(){var t=this;(0,s.nebGet)("getState",[""]).then(function(e){t.State=e})},getUserHistory:function(t){var e=this;(0,s.nebGet)("getUser",[t]).then(function(t){var a=JSON.parse(t);console.log(a),e.user=a})},refresh:function(){this.$parent.getHistory(),this.getUserHistory(this.address),this.getState()},submit:function(t){var e=this;this.user&&+this.user.dailyCount>19?this.$toast("今日机会用完了，明天再来吧 ：）"):this.userAgent.match("MICROMESSENGER")?this.$toast("因为微信中无法调起NAS钱包，请在右上角选择手机浏览器中打开本页面"):(0,s.sendNebpay)("getNAS",0,[t],this).then(function(t){var a=JSON.parse(t);console.log(a),e.user=a,e.refresh()})},getUserAddress:function(){var t=this;window.postMessage({target:"contentscript",method:"getAccount"},"*"),window.addEventListener("message",function(e){e.data&&e.data.data&&e.data.data.account&&(console.log(e.data.data.account),t.address=e.data.data.account,t.getUserHistory(t.address),localStorage.setItem("user_address",t.address))})},jumpApp:function(t){if(this.userAgent.match("MICROMESSENGER"))this.$toast("因为微信中无法调起NAS钱包，请在右上角选择手机浏览器中打开本页面");else{var e=this.AD[t];e.disable=!1,window.open(e.url)}}}};e.default=n},function(t,e,a){"use strict";a.r(e);var s=a(6),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e.default=n.a},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(1),n={name:"component1",data:function(){return{UA:"web",ad:{title:"",img:"data:image/png;base64,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",describe:"",url:"",email:""},value:"",address:"",hasHistory:""}},mounted:function(){navigator.userAgent.toUpperCase().match(/(IPHONE|ANDROID)/)&&(this.UA="mobile"),"web"===this.UA&&setTimeout(function(){},500)},methods:{selectImg:function(){var t=this,e=document.querySelector("#app_img").files[0],a=new FileReader;a.onloadend=function(){(0,s.canvasZip)(a.result,100).then(function(e){console.log(e),t.ad.img=e})},a.readAsDataURL(e)},submit:function(){var t=this;if(!this.ad.email||(this.ad.email=this.ad.email.trim(),this.ad.email.match(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/))){console.log(this.ad);var e=JSON.stringify(this.ad);+this.value<.01?this.$toast("请输入大于0.01的金额"):(0,s.sendNebpay)("setAd",this.value,[e],this).then(function(e){t.$parent.getHistory()})}else this.$toast("邮箱输入有误，请您检查")}}};e.default=n},function(t,e,a){"use strict";a.r(e);var s=a(8),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e.default=n.a},function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this.$createElement;this._self._c;return this._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outer"},[a("div",{staticClass:"mobile-title"},[t._v("NAS天天领 - 使用帮助")]),t._v(" "),a("div",{staticClass:"help"},[a("p",[t._v("\n    天天免费领NAS，通过浏览dapp，就可领取app相应的奖励。每天可获得20次奖励。开发者也可在该平台发布自己的dapp，通过设置奖励，吸引用户点击浏览。达到app的准确投放。\n  ")]),t._v(" "),a("h3",[t._v("手机端展示")]),t._v(" "),a("img",{attrs:{src:"//xqimg.imedao.com/163bffe58404c3febe1b0f0f.png",alt:"",srcset:""}}),t._v(" "),a("h3",[t._v("电脑端展示")]),t._v(" "),a("img",{attrs:{src:"//xqimg.imedao.com/163bff7eebc4c3fecabc61c9.png",alt:"",srcset:""}}),t._v(" "),a("h3",[t._v("开发者提交APP信息")]),t._v(" "),a("img",{attrs:{src:"//xqimg.imedao.com/163bff7d21a4a3fc533addb7.png",alt:"",srcset:""}}),t._v(" "),a("h3",[t._v("APP列表")]),t._v(" "),a("img",{attrs:{src:"//xqimg.imedao.com/163bff7e00b4b3fde6a0d114.png",alt:"",srcset:""}})])])}];s._withStripped=!0},function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outer"},[a("div",{staticClass:"mobile-title"},[t._v("应用列表")]),t._v(" "),a("div",{staticClass:"company_container"},t._l(t.AD,function(e,s){return e.title?a("div",{key:e.address,staticClass:"company_card_container"},[a("div",{staticClass:"company_card",on:{click:function(e){t.jumpApp(s)}}},[a("div",{staticClass:"left"},[a("img",{attrs:{src:e.img,alt:""}})]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"describe"},[t._v(t._s(e.describe))])])]),t._v(" "),a("div",{staticClass:"company_card_bottom"},[a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("剩余奖金")]),t._v(" "),a("span",[t._v(t._s(t.format(e.balance)))])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("领取次数")]),t._v(" "),a("span",[t._v(t._s(null==e.count?0:e.count+1)+"次")])]),t._v(" "),a("div",{staticClass:"item"},[a("mt-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:function(e){t.jumpApp(s)}}},[t._v("浏览")])],1)])]):t._e()}))])},n=[];s._withStripped=!0},function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outer"},[a("div",{staticClass:"mobile-title"},[t._v("NAS天天领 - 应用分发平台")]),t._v(" "),a("div",{staticClass:"state_container"},[a("div",{staticClass:"state_item user_number"},[t._m(0),t._v(" "),a("div",{staticClass:"name"},[t._v("用户数")]),t._v(" "),a("span",[t._v(t._s(t.State.UserNumber))])]),t._v(" "),a("div",{staticClass:"state_item"},[t._m(1),t._v(" "),a("div",{staticClass:"name"},[t._v("App数")]),t._v(" "),a("span",[t._v(t._s(t.State.AdNumber))])]),t._v(" "),a("div",{staticClass:"state_item user_number"},[t._m(2),t._v(" "),a("div",{staticClass:"name"},[t._v("领取次数")]),t._v(" "),a("span",[t._v(t._s(t.State.GetNumber))])]),t._v(" "),a("div",{staticClass:"state_item user_number"},[t._m(3),t._v(" "),a("div",{staticClass:"name"},[t._v("剩余奖金")]),t._v(" "),a("span",[t._v(t._s(t.format(t.State.balance)))])])]),t._v(" "),a("div",{staticClass:"user_state"},[t._m(4),t._v(" "),t.user?a("span",[t._v(t._s(t.user.dailyCount?t.user.dailyCount:0)+"次")]):a("span",[t._v("0次")])]),t._v(" "),a("div",{staticClass:"company_container"},t._l(t.AD,function(e,s){return e.title?a("div",{key:e.address,staticClass:"company_card_container"},[a("div",{staticClass:"company_card",on:{click:function(e){t.jumpApp(s)}}},[a("div",{staticClass:"left"},[a("img",{attrs:{src:e.img,alt:""}})]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"describe"},[t._v(t._s(e.describe))])])]),t._v(" "),a("div",{staticClass:"company_card_bottom"},[a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("剩余奖金")]),t._v(" "),a("span",[t._v(t._s(t.format(e.balance)))])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("领取次数")]),t._v(" "),a("span",[t._v(t._s(null==e.count?0:e.count+1)+"次")])]),t._v(" "),+e.balance>1e11?a("div",{staticClass:"item"},[t.AD[s].disable?a("mt-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:function(e){t.jumpApp(s)}}},[t._v("浏览后领取")]):a("mt-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){t.submit(e.address)}}},[t._v("领取奖金")])],1):a("div",{staticClass:"item"},[a("mt-button",{attrs:{size:"small",plain:""}},[t._v("奖金领完了")])],1)])]):t._e()}))])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"state_item_img"},[e("i",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"state_item_img"},[e("i",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"state_item_img"},[e("i",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"state_item_img"},[e("i",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"name"},[e("i",{staticClass:"iconfont"},[this._v("")]),this._v("\n      每天能领20次 您今日已领")])}];s._withStripped=!0},function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outer"},[a("div",{staticClass:"mobile-title"},[t._v("新增DAPP")]),t._v(" "),a("div",{staticClass:"inputfild"},[a("div",{staticClass:"range-container"},[a("mt-field",{attrs:{label:"名称",placeholder:"请输入DAPP名称"},model:{value:t.ad.title,callback:function(e){t.$set(t.ad,"title",e)},expression:"ad.title"}}),t._v(" "),a("mt-field",{attrs:{label:"链接",placeholder:"请输入DAPP链接"},model:{value:t.ad.url,callback:function(e){t.$set(t.ad,"url",e)},expression:"ad.url"}}),t._v(" "),a("mt-field",{attrs:{label:"分发金额",placeholder:"最小0.01NAS",type:"number"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),a("mt-field",{attrs:{label:"邮箱",placeholder:"点击量每天邮件通知",type:"email"},model:{value:t.ad.amount,callback:function(e){t.$set(t.ad,"amount",e)},expression:"ad.amount"}}),t._v(" "),a("mt-field",{attrs:{label:"介绍",placeholder:"请输入DAPP介绍",type:"textarea",rows:"2"},model:{value:t.ad.describe,callback:function(e){t.$set(t.ad,"describe",e)},expression:"ad.describe"}}),t._v(" "),a("span",[t._v("应用图标")]),t._v(" "),a("div",{staticClass:"img_upload_explain"},[t._v("推荐使用正方形图片,程序会自动压缩")]),t._v(" "),a("div",{staticClass:"img_upload_container"},[a("img",{staticClass:"ad_img_upload",attrs:{src:t.ad.img,alt:"",srcset:""}}),t._v(" "),a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[t._v("选择文件\n          "),a("input",{attrs:{type:"file",name:"app_img",id:"app_img",accept:".jpg, .jpeg, .png"},on:{change:t.selectImg}})])])],1)]),t._v(" "),a("mt-button",{staticClass:"button-submit",attrs:{type:"primary",size:"large"},on:{click:t.submit}},[t._v(t._s(t.hasHistory?"更新信息":"提交"))])],1)},n=[];s._withStripped=!0},,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(10),n=a(3);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var r=a(0),c=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);c.options.__file="src/components/readme.vue",e.default=c.exports},function(t,e,a){"use strict";a.r(e);var s=a(11),n=a(5);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var r=a(0),c=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);c.options.__file="src/components/appStore.vue",e.default=c.exports},function(t,e,a){"use strict";a.r(e);var s=a(12),n=a(7);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var r=a(0),c=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);c.options.__file="src/components/home.vue",e.default=c.exports},function(t,e,a){"use strict";a.r(e);var s=a(13),n=a(9);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var r=a(0),c=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);c.options.__file="src/components/setAd.vue",e.default=c.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=c(a(19)),n=c(a(18)),i=c(a(17)),r=c(a(16));function c(t){return t&&t.__esModule?t:{default:t}}var o=[{path:"/",component:n.default},{path:"/setAd",component:s.default},{path:"/store",component:i.default},{path:"/my",component:r.default}],u=new VueRouter({routes:o});e.default=u},function(t,e,a){"use strict";var s,n=(s=a(20))&&s.__esModule?s:{default:s};a(15);var i=a(1);new Vue({router:n.default,data:function(){return{a:1,AD:[],selected:"/"}},watch:{selected:function(t){this.$router.push(t)}},mounted:function(){this.getHistory()},methods:{getHistory:function(){var t=this;(0,i.nebGet)("getAllAd",["100","0"]).then(function(e){var a=[];e.map(function(t,e){var s=JSON.parse(t);s.disable=!0,a[e]=s}),a.reverse(),t.AD=a})}}}).$mount("#app")}]);