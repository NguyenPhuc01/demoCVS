(window.webpackJsonp=window.webpackJsonp||[]).push([[16,17,33,34],{"0XgM":function(e,t,n){},"7oih":function(e,t,n){"use strict";n.r(t);var a=n("dI71"),c=(n("cIOH"),n("0XgM"),n("PKem")),i=n("ZX9x"),l=c.e;l.Header=c.c,l.Footer=c.b,l.Content=c.a,l.Sider=i.b;var r=l,o=n("q1tI"),s=n.n(o),m=n("4zCG"),d=n("MKeS"),u=(n("2dcb"),n("gK8r"),n("lUTK"),n("BvKs")),h=n("dbrF"),g=n("kCIJ"),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},p=n("6VBw"),v=function(e,t){return o.createElement(p.a,Object.assign({},e,{ref:t,icon:f}))};v.displayName="MenuUnfoldOutlined";var b=o.forwardRef(v),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},y=function(e,t){return o.createElement(p.a,Object.assign({},e,{ref:t,icon:E}))};y.displayName="MenuFoldOutlined";var k,C=o.forwardRef(y),O=r.Sider,w=function(e){function t(t){var n;return(n=e.call(this,t)||this).onCollapse=function(e){console.log(e),n.setState({collapsed:e}),localStorage.setItem("stateCollapsed",e)},n.state={collapsed:"false"!==localStorage.getItem("stateCollapsed")},n}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.state.collapsed;return s.a.createElement(O,{collapsible:!0,collapsed:e,onCollapse:this.onCollapse,width:240,trigger:this.state.collapsed?s.a.createElement("div",{className:"sidebar"},s.a.createElement(b,null)):s.a.createElement("div",{className:"sidebar"},s.a.createElement(C,{style:{marginRight:10}}),"Thu gọn")},s.a.createElement("div",{style:this.state.collapsed?{position:""}:{position:"fixed"}},this.state.collapsed?s.a.createElement("div",{className:"logo_mini"},s.a.createElement(g.Link,{to:"/",onClick:function(){return Object(h.c)("/")}},s.a.createElement("img",{src:"/Web_logo_mini.svg",alt:"img",width:"100%",height:"85px",style:{padding:"20px 8px"}}))):s.a.createElement("div",{className:"logo"},s.a.createElement(g.Link,{to:"/",onClick:function(){return Object(h.c)("/")}},s.a.createElement("img",{src:"/Web_logo.svg",alt:"img",width:"100%",height:"85px",style:{padding:"24px 12px 20px"}}))),s.a.createElement(u.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[],className:"sidebar"},s.a.createElement(u.a.Item,{key:"1",icon:s.a.createElement("img",{src:"/Vector1.svg",alt:"img"}),className:"sidebar",style:{height:56}},s.a.createElement(g.Link,{to:"/",onClick:this.handle},"Trang chủ")),s.a.createElement(u.a.Item,{key:"2",icon:s.a.createElement("img",{src:"/Vector2.svg",alt:"img"}),className:"sidebar",style:{height:56}},s.a.createElement(g.Link,{to:"/ocr",onClick:function(){return Object(h.c)("/")}},"Nhận diện ký tự")),s.a.createElement(u.a.Item,{key:"3",icon:s.a.createElement("img",{src:"/Vector3.svg",alt:"img"}),className:"sidebar",style:{height:56}},s.a.createElement(g.Link,{to:"/facial-recognition",onClick:function(){return Object(h.c)("/")}},"Nhận diện khuôn mặt")),s.a.createElement(u.a.Item,{key:"4",icon:s.a.createElement("img",{src:"/Vector4.svg",alt:"img"}),className:"sidebar",style:{height:56}},s.a.createElement(g.Link,{to:"/ekyc",onClick:function(){return Object(h.c)("/")}},"eKYC")),s.a.createElement(u.a.Item,{key:"5",icon:s.a.createElement("img",{src:"/Vector5.svg",alt:"img"}),className:"sidebar",style:{height:56}},s.a.createElement(g.Link,{to:"/image-recognition",onClick:function(){return Object(h.c)("/")}},"Xử lý hình ảnh")))))},t}(s.a.Component),N=n("vOnD"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return s.a.createElement(M,null,s.a.createElement(x,null,"Copyright ©2020 by Computer Vision Vietnam. All Rights Reserved"))},t}(o.Component),M=N.a.footer.withConfig({displayName:"Footer__Footer1",componentId:"sc-11z43hi-0"})(["width:100%;border-top:1px solid rgba(0,0,0,0.1);background:#ffffff;"]),x=N.a.div.withConfig({displayName:"Footer__Copyright",componentId:"sc-11z43hi-1"})(["text-align:center;line-height:3.5;"]),z=r.Content,I=Object(d.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(11),n.e(14),n.e(31)]).then(n.bind(null,"NmRQ"))}));Object(d.a)((function(){return n.e(35).then(n.bind(null,"REQu"))}));Object(m.enquireScreen)((function(e){k=e}));var H=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isMobile:k},n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;Object(m.enquireScreen)((function(t){e.setState({isMobile:!!t})}))},n.render=function(){var e=this.props.children;return s.a.createElement(r,{style:{minHeight:"100vh"}},s.a.createElement(w,null),s.a.createElement(r,{style:{background:"#ffffff"}},s.a.createElement(I,{isMobile:this.state.isMobile}),s.a.createElement(z,null,e),s.a.createElement(j,null)))},t}(o.Component);t.default=H},gK8r:function(e,t,n){}}]);
//# sourceMappingURL=16-bfbb525f4e828d07c1e8.js.map