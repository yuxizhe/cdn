!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";function s(e,t,n,s,a,o,r,i){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),s&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=u):a&&(u=i?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}n.d(t,"a",function(){return s})},function(e,t,n){"use strict";var s,a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"component1",data:function(){return{UA:"web",user:{email:"",phone:"",min:1e14,enable:!0,other:"",type:"1",nickname:""},address:"",hasHistory:"",value:!0,caseValue:"1",rangeValue:1e15,userAddress:"",options:[{label:"普通版 自动邮件通知 限时免费",value:"1"},{label:"高级版 短信、微信通知（即将上线）",value:"2"}]}},mounted:function(){navigator.userAgent.toUpperCase().match(/(IPHONE|ANDROID)/)&&(this.UA="mobile"),"web"===this.UA&&this.checkEnv()},methods:{checkEnv:function(){"undefined"!=typeof webExtensionWallet?this.getUserAddress():this.$messagebox.confirm("检测到您没有安装星云链浏览器插件",{confirmButtonText:"知道了",cancelButtonText:"去下载",title:"提示"}).then(function(e){}).catch(function(e){window.open("https://github.com/ChengOrangeJu/WebExtensionWallet")})},getHistory:function(){var e=this;this.$toast("查询历史中");var t={function:"get",args:"[]"};neb.api.call(this.address,dappAddress,"0","0","1000000","2000000",t).then(function(t){try{var n=JSON.parse(JSON.parse(t.result))}catch(e){return void console.error(e)}n&&n.email&&(e.user=n,e.hasHistory=!0)}).catch(function(e){console.log("error:"+e.message)})},checkForm:function(){},submit:function(){var e=this,t="set";if(this.hasHistory&&(t="update"),this.user.email=this.user.email.trim(),this.user.email.match(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/)){console.log(this.user);var n=JSON.stringify(this.user),o="0",r=JSON.stringify([n]);2!=this.user.type||this.hasHistory||(o="0.1");var i={listener:function(t){"string"!=typeof t?(e.$indicator.open("已提交，等待确认"),a=setInterval(function(){e.funcIntervalQuery()},15e3)):e.$toast("操作已取消")}};s=nebPay.call(dappAddress,o,t,r,i),"mobile"===this.UA?this.$messagebox.confirm("",{confirmButtonText:"好了",cancelButtonText:"去下载",title:"温馨提示",message:"检测到您在用手机操作，<br>调用nas手机钱包中，请问支付成功了嘛？"}).then(function(e){}).catch(function(e){window.open("https://nano.nebulas.io/")}):e.$toast("请您在钱包中确认")}else this.$toast("邮箱输入有误，请您检查")},funcIntervalQuery:function(){var e=this;nebPay.queryPayInfo(s).then(function(t){console.log("tx result: "+t),0===JSON.parse(t).code&&(e.$indicator.close(),e.$toast({message:"提交成功，祝您使用愉快"}),clearInterval(a))}).catch(function(e){console.log(e)})},getUserAddress:function(){var e=this;window.postMessage({target:"contentscript",method:"getAccount"},"*"),window.addEventListener("message",function(t){t.data&&t.data.data&&t.data.data.account&&(console.log(t.data.data.account),e.address=t.data.data.account,e.getHistory())})}}};t.default=o},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);t.default=a.a},function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return a});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outer"},[n("div",{staticClass:"mobile-wrap"},[n("div",{staticClass:"mobile-title"},[e._v("钱包助手 - 收款早知道!")]),e._v(" "),n("div",{staticClass:"top-info"},[e._v("全面支持手机钱包和浏览器插件")]),e._v(" "),n("div",{staticClass:"inputfild"},[n("div",{staticClass:"range-container"},[n("mt-field",{attrs:{title:"邮箱",label:"邮箱",placeholder:"输入邮箱可获得及时通知",type:"email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),n("mt-field",{attrs:{title:"昵称",label:"昵称",placeholder:"钱包地址前可增加昵称"},model:{value:e.user.nickname,callback:function(t){e.$set(e.user,"nickname",t)},expression:"user.nickname"}}),e._v(" "),n("mt-field",{attrs:{label:"手机号",disabled:"",placeholder:"短信通知内测中",type:"tel"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),e._v(" "),n("mt-cell",{attrs:{title:"超过才通知",label:(e.user.min/1e18).toFixed(5)+" NAS"}},[n("mt-range",{attrs:{min:1e13,max:1e19},model:{value:e.user.min,callback:function(t){e.$set(e.user,"min",t)},expression:"user.min"}})],1)],1),e._v(" "),n("p",[e._v("套餐")]),e._v(" "),n("div",[n("mt-radio",{attrs:{title:"选择套餐支持作者:  "+("1"==e.user.type?0:.1)+" NAS",options:e.options},model:{value:e.user.type,callback:function(t){e.$set(e.user,"type",t)},expression:"user.type"}}),e._v(" "),n("mt-cell",{attrs:{title:"开启通知"}},[n("mt-switch",{model:{value:e.user.enable,callback:function(t){e.$set(e.user,"enable",t)},expression:"user.enable"}})],1)],1)]),e._v(" "),n("mt-button",{staticClass:"button-submit",attrs:{type:"primary",size:"large"},on:{click:e.submit}},[e._v(e._s(e.hasHistory?"更新信息":"提交"))])],1)])},a=[];s._withStripped=!0},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(3),a=n(2);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var r=n(0),i=Object(r.a)(a.default,s.a,s.b,!1,null,null,null);i.options.__file="src/components/component1.vue",t.default=i.exports},function(e,t,n){"use strict";var s;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{path:"/",component:((s=n(6))&&s.__esModule?s:{default:s}).default}],o=new VueRouter({routes:a});t.default=o},function(e,t,n){"use strict";var s,a=(s=n(7))&&s.__esModule?s:{default:s};n(5);new Vue({router:a.default,data:function(){return{a:1}}}).$mount("#app")}]);