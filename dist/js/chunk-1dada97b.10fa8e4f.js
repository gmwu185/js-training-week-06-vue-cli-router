(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dada97b"],{"1dde":function(t,r,o){var n=o("d039"),e=o("b622"),c=o("2d00"),a=e("species");t.exports=function(t){return c>=51||!n((function(){var r=[],o=r.constructor={};return o[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"65f0":function(t,r,o){var n=o("861d"),e=o("e8b5"),c=o("b622"),a=c("species");t.exports=function(t,r){var o;return e(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!e(o.prototype)?n(o)&&(o=o[a],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===r?0:r)}},8418:function(t,r,o){"use strict";var n=o("c04e"),e=o("9bf2"),c=o("5c6c");t.exports=function(t,r,o){var a=n(r);a in t?e.f(t,a,c(0,o)):t[a]=o}},"99af":function(t,r,o){"use strict";var n=o("23e7"),e=o("d039"),c=o("e8b5"),a=o("861d"),i=o("7b0b"),u=o("50c4"),d=o("8418"),f=o("65f0"),s=o("1dde"),l=o("b622"),p=o("2d00"),v=l("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",g=p>=51||!e((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=s("concat"),y=function(t){if(!a(t))return!1;var r=t[v];return void 0!==r?!!r:c(t)},w=!g||!_;n({target:"Array",proto:!0,forced:w},{concat:function(t){var r,o,n,e,c,a=i(this),s=f(a,0),l=0;for(r=-1,n=arguments.length;r<n;r++)if(c=-1===r?a:arguments[r],y(c)){if(e=u(c.length),l+e>b)throw TypeError(h);for(o=0;o<e;o++,l++)o in c&&d(s,l,c[o])}else{if(l>=b)throw TypeError(h);d(s,l++,c)}return s.length=l,s}})},e8b5:function(t,r,o){var n=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ed84:function(t,r,o){"use strict";o.r(r);var n=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("h2",[t._v("這是產品列表頁")]),o("table",t._l(t.products,(function(r){return o("tr",{key:r.id},[o("td",[t._v("產品名稱："+t._s(r.title))]),o("td",[t._v("原價："+t._s(r.origin_price))]),o("td",[t._v("特價："+t._s(r.price))]),o("td",[o("router-link",{attrs:{to:"/product/"+r.id}},[t._v("單一產品 router-link")]),t._v(" | "),o("button",{on:{click:function(o){return t.goPage(r)}}},[t._v("單一產品 goPage() 按鈕")]),t._v(" | "),o("a",{attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.goPage(r)}}},[t._v(" 單一產品 goPage() 連結 ")])],1)])})),0)])},e=[],c=(o("99af"),{data:function(){return{products:[]}},methods:{goPage:function(t){console.log("goPage() => item",t),console.log("this.$router",this.$router),this.$router.push("/product/".concat(t.id))}},created:function(){var t=this;console.log("UUID","a70f537b-d0f1-4553-81bb-1767acf549d1"),this.$http.get("".concat("https://course-ec-api.hexschool.io/api/").concat("a70f537b-d0f1-4553-81bb-1767acf549d1","/ec/products")).then((function(r){console.log("res.data.data",r.data.data),t.products=r.data.data}))}}),a=c,i=o("2877"),u=Object(i["a"])(a,n,e,!1,null,null,null);r["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1dada97b.10fa8e4f.js.map