(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,c){"use strict";c.r(t),c.d(t,"PRODUCT_LIST_REQUEST",(function(){return a})),c.d(t,"PRODUCT_LIST_SUCCESS",(function(){return r})),c.d(t,"PRODUCT_LIST_FAIL",(function(){return n})),c.d(t,"PRODUCT_DETAILS_REQUEST",(function(){return s})),c.d(t,"PRODUCT_DETAILS_SUCCESS",(function(){return i})),c.d(t,"PRODUCT_DETAILS_FAIL",(function(){return o}));var a="PRODUCT_LIST_REQUEST",r="PRODUCT_LIST_SUCCESS",n="PRODUCT_LIST_FAIL",s="PRODUCT_DETAILS_REQUEST",i="PRODUCT_DETAILS_SUCCESS",o="PRODUCT_DETAILS_FAIL"},50:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),n=c.n(r),s=c(8),i=c(21),o=c.n(i),d=(c(50),c(10)),j=c(3),l=c(11),u=c.n(l),O=c(16),b=c(17),h=c.n(b),p="CART_ADD_ITEM";function f(e){var t=e.match.params.id,c=e.location.search?Number(e.location.search.split("=")[1]):1,n=Object(s.b)();return Object(r.useEffect)((function(){t&&n(function(e,t){return function(){var c=Object(O.a)(u.a.mark((function c(a,r){var n,s;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,h.a.get("/api/products/".concat(e));case 2:n=c.sent,s=n.data,a({type:p,payload:{name:s.name,image:s.image,price:s.price,countInStock:s.countInStock,product:s._id,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()}(t,c))}),[n,t,c]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Cart Screen"}),Object(a.jsxs)("p",{children:["ADD TO CART : ProductID: ",t," Qty: ",c]})]})}function x(e){var t=e.rating,c=e.numReviews;return Object(a.jsxs)("div",{className:"rating",children:[Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:t>=1?"fa fa-star":t>=.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:t>=2?"fa fa-star":t>=1.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:t>=3?"fa fa-star":t>=2.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:t>=4?"fa fa-star":t>=3.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:t>=5?"fa fa-star":t>=4.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(a.jsx)("span",{children:c+" reviews"})]})}function m(e){var t=e.product;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)(d.b,{to:"/product/".concat(t._id),children:Object(a.jsx)("img",{className:"medium",src:t.image,alt:t.name})}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)(d.b,{to:"/product/".concat(t._id),children:Object(a.jsx)("h2",{children:t.name})}),Object(a.jsx)(x,{rating:t.rating,numReviews:t.numReviews}),Object(a.jsxs)("div",{className:"price",children:["\u20b9",t.price]})]})]},t._id)}function v(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{className:"fa fa-spinner fa-spin"})," Loading..."]})}function S(e){return Object(a.jsx)("div",{className:"alert alert-".concat(e.variant||"info"),children:e.children})}var T=c(12);function g(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.productList})),c=t.loading,n=t.error,i=t.products;return Object(r.useEffect)((function(){e(function(){var e=Object(O.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:T.PRODUCT_LIST_REQUEST}),e.prev=1,e.next=4,h.a.get("/api/products");case 4:c=e.sent,a=c.data,t({type:T.PRODUCT_LIST_SUCCESS,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:T.PRODUCT_LIST_FAIL,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.jsx)("div",{children:c?Object(a.jsx)(v,{}):n?Object(a.jsx)(S,{variant:"danger",children:n}):Object(a.jsx)("div",{className:"row center",children:i.map((function(e){return Object(a.jsx)(m,{product:e},e._id)}))})})}var _=c(23),I=c(40);function C(e){var t=Object(s.b)(),c=e.match.params.id,n=Object(r.useState)(1),i=Object(I.a)(n,2),o=i[0],j=i[1],l=Object(s.c)((function(e){return e.productDetails})),b=l.loading,p=l.error,f=l.product;Object(r.useEffect)((function(){t(function(e){return function(){var t=Object(O.a)(u.a.mark((function t(c){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:T.PRODUCT_DETAILS_REQUEST,payload:e}),t.prev=1,t.next=4,h.a.get("/api/products/".concat(e));case 4:a=t.sent,r=a.data,c({type:T.PRODUCT_DETAILS_SUCCESS,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),c({type:T.PRODUCT_DETAILS_FAIL,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(c))}),[t,c]);return Object(a.jsx)("div",{children:b?Object(a.jsx)(v,{}):p?Object(a.jsx)(S,{variant:"danger",children:p}):Object(a.jsxs)("div",{children:[Object(a.jsx)(d.b,{to:"/",children:"Back to result"}),Object(a.jsxs)("div",{className:"row top",children:[Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)("img",{className:"large",src:f.image,alt:f.name})}),Object(a.jsx)("div",{className:"col-1",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("h1",{children:f.name})}),Object(a.jsx)("li",{children:Object(a.jsx)(x,{rating:f.rating,numReviews:f.numReviews})}),Object(a.jsxs)("li",{children:["Pirce : \u20b9",f.price]}),Object(a.jsxs)("li",{children:["Description:",Object(a.jsx)("p",{children:f.description})]})]})}),Object(a.jsx)("div",{className:"col-1",children:Object(a.jsx)("div",{className:"card card-body",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{children:"Price"}),Object(a.jsxs)("div",{className:"price",children:["\u20b9",f.price]})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{children:"Status"}),Object(a.jsx)("div",{children:f.countInStock>0?Object(a.jsx)("span",{className:"success",children:"In Stock"}):Object(a.jsx)("span",{className:"danger",children:"Unavailable"})})]})}),f.countInStock>0&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{children:"Qty"}),Object(a.jsx)("div",{children:Object(a.jsx)("select",{value:o,onChange:function(e){return j(e.target.value)},children:Object(_.a)(Array(f.countInStock).keys()).map((function(e){return Object(a.jsx)("option",{value:e+1,children:e+1},e+1)}))})})]})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:function(){e.history.push("/cart/".concat(c,"?qty=").concat(o))},className:"primary block",children:"Add to Cart"})})]})]})})})]})]})})}var D=function(){var e=Object(s.c)((function(e){return e.cart})).cartItems;return Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{className:"grid-container",children:[Object(a.jsxs)("header",{className:"row",children:[Object(a.jsx)("div",{children:Object(a.jsx)(d.b,{className:"brand",to:"/",children:"Savings Pool"})}),Object(a.jsxs)("div",{children:[Object(a.jsxs)(d.b,{to:"/cart",children:["Cart",e.length>0&&Object(a.jsx)("span",{className:"badge",children:e.length})]}),Object(a.jsx)(d.b,{to:"/signin",children:"Sign In"})]})]}),Object(a.jsxs)("main",{children:[Object(a.jsx)(j.a,{path:"/cart/:id?",component:f}),Object(a.jsx)(j.a,{path:"/product/:id",component:C}),Object(a.jsx)(j.a,{path:"/",component:g,exact:!0})]}),Object(a.jsx)("footer",{className:"row center",children:"All right reserved"})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),r(e),n(e),s(e)}))},U=c(13),R=c(39),L=c(19),y=c(12),N=y.PRODUCT_LIST_REQUEST,P=y.PRODUCT_LIST_SUCCESS,A=y.PRODUCT_LIST_FAIL,w=y.PRODUCT_DETAILS_REQUEST,k=y.PRODUCT_DETAILS_SUCCESS,F=y.PRODUCT_DETAILS_FAIL,Q={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]}},J=Object(U.c)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case P:return{loading:!1,products:t.payload};case A:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{},loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case k:return{loading:!1,product:t.payload};case F:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var c=t.payload,a=e.cartItems.find((function(e){return e.product===c.product}));return a?Object(L.a)(Object(L.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===a.product?c:e}))}):Object(L.a)(Object(L.a)({},e),{},{cartItems:[].concat(Object(_.a)(e.cartItems),[c])});default:return e}}}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,M=Object(U.e)(J,Q,B(Object(U.a)(R.a)));o.a.render(Object(a.jsx)(s.a,{store:M,children:Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(D,{})})}),document.getElementById("root")),E()}},[[70,1,2]]]);
//# sourceMappingURL=main.d340ddc0.chunk.js.map