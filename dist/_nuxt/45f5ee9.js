(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{397:function(n,t,e){"use strict";var o=e(6),r=e(88).find,l=e(157),c="find",f=!0;c in[]&&Array(1).find((function(){f=!1})),o({target:"Array",proto:!0,forced:f},{find:function(n){return r(this,n,arguments.length>1?arguments[1]:void 0)}}),l(c)},400:function(n,t,e){var content=e(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(56).default)("7f7016b9",content,!0,{sourceMap:!1})},408:function(n,t,e){"use strict";e(400)},409:function(n,t,e){var o=e(55)((function(i){return i[1]}));o.push([n.i,'/*purgecss start ignore*/\n.copy{\n  color:#716960;\n  letter-spacing:1px\n}\n@media (min-width: 1152px){\n.trans{\n    position:fixed;\n    width:100%;\n    top:50%;\n    left:50%;\n    transform:translate(-50%,-50%)\n}\n}\n#logo{\n  width:51px\n}\n#footer{\n  color:#716960\n}\n#footer a,#footer p{\n  letter-spacing:1px\n}\n.icons{\n  color:#716960\n}\n.icons img{\n  margin-left:0.5rem;\n  margin-right:0.5rem\n}\n.splash p{\n  font-size:10px;\n  letter-spacing:1px\n}\n@media (min-width: 768px){\n.splash p{\n    font-size:14px\n}\n}\n.splash h1{\n  font-size:21px;\n  line-height:120%;\n  max-width:787px;\n  letter-spacing:.5px;\n  text-align:center;\n  font-weight:700\n}\n@media (min-width: 600px){\n.splash h1{\n    font-size:32px\n}\n}\n.splash input{\n  background:none!important;\n  -webkit-appearance:none!important;\n     -moz-appearance:none!important;\n          appearance:none!important;\n  border-bottom:2px solid #716960;\n  color:#fff;\n  font-size:14px;\n  letter-spacing:2px;\n  margin-bottom:1.5rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\n.splash button{\n  height:44px;\n  background:#716960;\n  border-radius:30px;\n  color:#fff\n}\nbutton{\n  letter-spacing:1px;\n  font-weight:700\n}\n.mobile{\n  width:320px;\n  max-width:100%\n}\n@media (min-width: 600px){\n.mobile{\n    width:400px\n}\n}\n.full-screen{\n  height:100vh;\n  width:100vw;\n  padding:0px;\n  background:#181818\n}\n.full-screen img{\n  width:100%!important;\n  height:100%!important;\n  -o-object-fit:contain;\n     object-fit:contain\n}\n#content{\n  overflow-x:hidden;\n  width:100vw\n}\n#content p{\n  margin-bottom:1rem\n}\nbutton, h1, h2, h3, h4, h5, h6, input{\n  line-height:1.375\n}\nbutton,h1,h2,h3,h4,h5,h6,input{\n  font-family:"Open Sans"\n}\nh1{\n  font-size:4rem;\n  font-weight:700\n}\nh2{\n  font-size:2.25rem;\n  font-weight:700\n}\nh3{\n  font-size:1.875rem;\n  font-weight:700\n}\nh4{\n  margin-bottom:0.5rem\n}\na, li, p{\n  font-weight:300\n}\na,li,p{\n  font-family:"Open Sans"\n}\nul{\n  list-style:circle;\n  padding-left:1rem\n}\n.gallery-vertical li{\n  margin:3rem 0!important\n}\n.gallery-vertical li img{\n  max-width:120px!important;\n  margin-left:auto;\n  margin-right:auto\n}\n.w-full-gutter{\n  width:calc(100% - 2rem)\n}\n.wp-block-button__link{\n  border-radius:0;\n  background:none;\n  border:2px solid #000;\n  color:#000\n}\n.wp-block-buttons{\n  margin-top:2rem\n}\n.bleed-up img{\n  transform:translateY(-30px);\n  position:relative;\n  z-index:10\n}\n.epmt{\n  display:flex;\n  justify-content:flex-end\n}\n.epmt img{\n  max-width:913px;\n  transform:translate(257px)\n}\n.arrow-link a{\n  color:#b8c734;\n  position:relative;\n  margin-top:3rem;\n  display:inline-block;\n  font-weight:400\n}\n.arrow-link a:after{\n  position:absolute;\n  top:50%;\n  right:0;\n  transform:translate(110%,-38%);\n  content:url(/Arrow.svg)\n}\n.list-none ul{\n  list-style:none!important\n}\n.wp-block-image img{\n  height:auto\n}\n#header{\n  position:absolute;\n  z-index:99;\n  width:100vw;\n  margin-bottom:80px\n}\n#header .logo{\n  width:77px\n}\n.slider{\n  position:relative\n}\n.slick-slide .wp-block-columns{\n  display:flex!important\n}\n.slick-slide .wp-block-columns .wp-block-column:first-child{\n  position:relative;\n  z-index:10;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  padding:1rem\n}\n.arrows{\n  display:flex;\n  justify-content:flex-end;\n  cursor:pointer\n}\n.arrows .wp-block-column{\n  max-width:70px\n}\n\n/*purgecss end ignore*/',""]),o.locals={},n.exports=o},419:function(n,t,e){"use strict";e.r(t);var o=e(8),r=(e(397),e(11),e(58),e(156)),l=e.n(r),c={data:function(){return{notSent:!0}},methods:{copy:function(n){console.log("copy");var t=document.createElement("input"),text=window.location.href;document.body.appendChild(t),t.value=text,t.select(),document.execCommand("copy"),document.body.removeChild(t),l()(n.target).text("Copied!")},clear:function(n){var t=n.target.dataset.clicked;console.log(t),"false"==t&&(n.target.value="",n.target.dataset.clicked="true")},send:function(n){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var form,o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log("send"),form=document.getElementById("splashform"),o=new FormData(form),r={properties:[{property:"firstname",value:"tyler"},{property:"lastname",value:"hill"},{property:"email",value:"admin@tylerhillweb.dev"}]},r=JSON.stringify(r),t.$axios.setHeader("Content-Type","application/x-www-form-urlencoded"),e.next=9,t.$axios.$post("https://forms.hubspot.com/uploads/form/v2/20008151/f379a28f-402a-46d3-b660-e86a8d1e19cb",o);case 9:return l=e.sent,console.log("contact",l),t.notSent=!1,e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e)})))()}},created:function(){},mounted:function(){l()(".scroll a").on("click",(function(n){n.preventDefault();var t=l()(this).attr("href");console.log(t);var e=l()(t).offset().top;l()("html,body").animate({scrollTop:e},500)}));var n=this;l()(".slider").each((function(){n.$slider(l()(this).find(".wp-block-group__inner-container"))}))},computed:{pages:function(){return this.$store.state.pages},page:function(){return this.$store.state.home},header:function(){return this.$store.state.header},footer:function(){return this.$store.state.footer},classes:function(){return this.$store.state.classes}}},f=(e(408),e(57)),component=Object(f.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"h-screen w-screen bg-back-grey flex flex-col lg:justify-between",attrs:{id:"root"}},[e("div",{class:n.classes}),n._v(" "),e("div",{staticClass:"w-full fixed",domProps:{innerHTML:n._s(n.page)}}),n._v(" "),e("div",{staticClass:"\n      flex flex-col\n      items-center\n      justify-start\n      p-8\n      xl:pb-0\n      lg:justify-center\n      w-screen\n      z-20\n      relative\n      splash\n    "},[e("div",{staticClass:"\n        lg:max-w-lg\n        xl:max-w-4xl\n        flex flex-col\n        items-center\n        justify-start\n        lg:justify-center\n        trans\n      "},[e("img",{staticClass:"mb-4",attrs:{src:"/m2n-logo.svg",id:"logo"}}),n._v(" "),n.notSent?e("div",{staticClass:"flex flex-col items-center justify-center"},[e("h1",{staticClass:"uppercase font-bold text-white mb-4 xl:px-2"},[n._v("\n          revolutionizing how we approach Diversity & inclusion in the\n          workplace\n        ")]),n._v(" "),n._m(0),n._v(" "),e("form",{staticClass:"flex flex-col w-full lg:w-1/2",attrs:{id:"splashform"},on:{submit:function(t){return n.send(t)}}},[e("input",{attrs:{type:"text",name:"First Name",value:"FIRST NAME","data-clicked":"false"},on:{click:function(t){return n.clear(t)}}}),n._v(" "),e("input",{attrs:{type:"text",name:"Last Name",value:"LAST NAME","data-clicked":"false"},on:{click:function(t){return n.clear(t)}}}),n._v(" "),e("input",{attrs:{type:"email",name:"Email",value:"EMAIL","data-clicked":"false"},on:{click:function(t){return n.clear(t)}}}),n._v(" "),e("button",{staticClass:"mt-6",attrs:{id:"submit"},on:{click:function(t){return n.send(t)}}},[n._v("\n            SIGN UP\n          ")])])]):e("div",{staticClass:"confirm flex flex-col items-center justify-center"},[e("h1",{staticClass:"text-white uppercase font-bold mb-4"},[n._v("\n          Thank you for signing up!\n        ")]),n._v(" "),e("p",{staticClass:"text-center text-white mb-4"},[n._v("\n          Thank you for your interest in being one of the first to experience\n          a revolutionary approach to diversity and inclusion in the\n          workforce. We will send your invitation to join MPOWER as we\n          approach our launch date in early 2022.\n        ")]),n._v(" "),e("p",{staticClass:"text-center text-white mb-4"},[n._v("\n          If you have family, friends or colleagues that you’d like to invite\n          to MPower, please share via this link.\n        ")]),n._v(" "),e("p",{staticClass:"copy font-bold cursor-pointer",on:{click:function(t){return n.copy(t)}}},[n._v("COPY LINK")])])])]),n._v(" "),n._m(1)])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("p",{staticClass:"text-white mb-12 text-center xl:w-5/6 px-10"},[n._v("\n          Get on the list for your invitation to Join\n          "),e("span",{staticClass:"font-bold"},[n._v("MPOWER")]),n._v(", a community of diverse\n          professionals raising their hands to say...\n          "),e("span",{staticClass:"font-bold"},[n._v("HERE WE ARE.")])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"\n      uppercase\n      p-4\n      z-20\n      relative\n      bottom-0\n      left-0\n      w-full\n      flex flex-col\n      xl:flex-row\n      items-center\n      justify-between\n    ",attrs:{id:"footer"}},[e("div",{staticClass:"\n        flex flex-col\n        xl:flex-row\n        items-center\n        justify-center\n        icons\n        xl:order-2\n      "},[e("div",{staticClass:"flex items-center pb-8 xl:pb-0 xl:order-2 lg:ml-4 xl:ml-6 hidden"},[e("img",{attrs:{src:"/insta.png"}}),n._v(" "),e("img",{attrs:{src:"/twitter.png"}}),n._v(" "),e("img",{attrs:{src:"/linked.png"}})]),n._v(" "),e("div",{staticClass:"\n          flex flex-col\n          xl:flex-row xl:order-1\n          items-center\n          justify-center\n          mb-8\n          xl:mb-0\n          text-xs\n          xl:order-1\n        "},[e("a",{staticClass:"my-2 xl:border-r pr-2",attrs:{href:"mailto:info@m2n.us"}},[n._v("contact us")]),n._v(" "),e("a",{staticClass:"my-2 xl:border-r px-2",attrs:{href:"/terms-of-use"}},[n._v("Terms & Conditions")]),n._v(" "),e("a",{staticClass:"my-2 xl:pl-2",attrs:{href:"/privacy-policy"}},[n._v("Privacy Policy")])])]),n._v(" "),e("p",{staticClass:"text-center text-xs mb-6 xl:mb-0"},[n._v("\n      ©2021 M2N | Minority Moves Network Inc. • All rights reserved.\n    ")])])}],!1,null,null,null);t.default=component.exports}}]);