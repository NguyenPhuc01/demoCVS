(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+XEl":function(e,t,a){"use strict";a.r(t);var n=a("dI71"),l=a("q1tI"),r=a.n(l),i=a("4zCG"),o=a("kCIJ"),c=a("MKeS"),s=(a("DYRE"),a("zeV3")),m=(a("+L6B"),a("2/Rp")),u=(a("/zsF"),a("PArb")),d=a("99N6"),h=(a("14J3"),a("BMrR")),p=(a("jCWc"),a("kPKH")),g=(a("5NDa"),a("5rEg")),v=(a("DZo9"),a("8z0m")),f=a("ajDV"),E=a("xvlK"),y=a("ye1Q"),w=a("vDqi"),b=a.n(w),C=a("7eP+"),j=a("dbrF"),O=(a("ToJy"),a("vOnD"));function N(e){var t=e.result||{},a=t.data,n=(t.errorCode,t.errorMessage,null==a?void 0:a.sort((function(e,t){return t[1]-e[1]})));return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"result-wrapper"},n.slice(0,5).map((function(e,t){var a=e[0],n=e[1];return r.a.createElement(k,{key:t},r.a.createElement(x,{width:(100*n).toFixed(2)+"%"},r.a.createElement("div",{style:{position:"absolute",left:"12px"}},a)),r.a.createElement(S,null,(100*n).toFixed(2),"%"))})))):r.a.createElement("div",{className:"error"},"Không tìm thấy nội dung. Vui lòng thử lại!"))}var k=O.a.div.withConfig({displayName:"Result__Line",componentId:"sc-cojgdv-0"})(["background:rgba(255,255,255,0.1);position:relative;margin:20px 0;height:24px;"]),x=O.a.div.withConfig({displayName:"Result__Name",componentId:"sc-cojgdv-1"})(["position:absolute;height:100%;width:",";background:#fff;top:0;left:0;color:#000;"],(function(e){return e.width})),S=O.a.div.withConfig({displayName:"Result__Value",componentId:"sc-cojgdv-2"})(["position:absolute;right:12px;top:0;color:#EC1C2A;"]),F=a("6urQ"),R="https://dev.computervision.com.vn/api/tagging/query";function z(e){var t=e.result,a=e.setResult,n=Object(l.useState)(!1),i=n[0],o=n[1],c=Object(l.useState)(null),s=c[0],u=c[1],d=Object(l.useState)(null),w=d[0],O=d[1],k=Object(l.useState)(""),x=k[0],S=k[1],z=Object(l.useState)(""),D=z[0],L=z[1],P=s&&(null==t?void 0:t.data),T=function(){u(null),a(null),O(null),S("")};return r.a.createElement(h.a,{gutter:[30,60]},r.a.createElement(p.a,{md:12,xs:24},r.a.createElement(v.a,{multiple:!1,accept:"image/*",beforeUpload:function(){return!1},showUploadList:!1,onChange:function(e){var t=e.file;u(t)},disabled:i||P,className:"image-uploader"},s||x?r.a.createElement("div",{style:{position:"relative"}},D?r.a.createElement("div",{className:"upload-area"},D):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:s?URL.createObjectURL(s):w,alt:"avatar",style:{width:"100%"}}),r.a.createElement(m.a,{icon:r.a.createElement(f.a,null),style:{position:"absolute",top:0,right:0},type:"primary",onClick:function(e){e.stopPropagation(),T()}}))):r.a.createElement("div",{className:"upload-area"},r.a.createElement(E.a,null),r.a.createElement("div",{style:{marginTop:8}},"Upload"))),r.a.createElement(g.a,{value:x,onChange:function(e){var t=e.target.value;u(null),S(t),t?Object(j.b)(t)?(O(t),L(null)):L("Link ảnh không hợp lệ"):L(null)},placeholder:"Hoặc nhập link ảnh",style:{height:46,marginTop:8}}),r.a.createElement(m.a,{onClick:P?T:function(){if(s||w)if(Object(j.d)(window.location.pathname),s){var e=new FormData;e.append("image",s),o(!0),b()({method:"post",url:R,auth:{username:C.a.username,password:C.a.password},data:e,headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(e){a(e.data),o(!1)})).catch((function(e){console.log(e),o(!1)}))}else o(!0),b()({method:"get",url:R+"?url="+w,auth:{username:C.a.username,password:C.a.password},headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){a(e.data),o(!1)})).catch((function(e){console.log(e),o(!1)}))},loading:i,type:"primary",block:!0,style:{height:48,marginTop:24}},P?"Thử lại":"XỬ LÝ")),r.a.createElement(p.a,{md:12,xs:24},r.a.createElement("div",{className:"demo-result"},t?r.a.createElement(N,{result:t}):r.a.createElement("div",{className:"note"},i?r.a.createElement(y.a,{style:{fontSize:40}}):'Vui lòng thêm ảnh và nhấn "Xử lý" để trải nghiệm dịch vụ')),r.a.createElement(F.a,null)))}var D=[{id:1,name:"Smart crop",key:"smart-crop"},{id:2,name:"Tagging",key:"tagging"}];function L(){var e=Object(l.useState)("smart-crop"),t=e[0],a=e[1],n=Object(l.useState)(null),i=n[0],c=n[1],h=new URLSearchParams(window.location.search);Object(l.useEffect)((function(){var e=h.get("type");e&&a(e)}),[]);var p={"smart-crop":r.a.createElement(d.a,{result:i,setResult:c}),tagging:r.a.createElement(z,{result:i,setResult:c})};return r.a.createElement("div",{className:"home-page-wrapper demo-wrapper"},r.a.createElement("div",{className:"home-page demo"},r.a.createElement("div",{className:"title-wrapper"},"Xử lý hình ảnh"),r.a.createElement(u.a,{style:{fontSize:14,fontWeight:600,lineHeight:"22px",fontFamily:"SFProDisplay",color:"rgba(0, 0, 0, 0.85)"},orientation:"left"},"Chọn sản phẩm"),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"content-layout"},r.a.createElement("p",{style:{width:150}},"Sản phẩm:"),r.a.createElement(s.b,{size:[8,8],wrap:!0,align:"center",style:{justifyContent:"flex-startr",width:"100%"}},D.map((function(e){var n=e.id,l=e.name,i=e.key;return r.a.createElement(o.Link,{to:"?type="+i,key:i},r.a.createElement(m.a,{key:n,type:i===t?"primary":"default",onClick:function(){a(i),c(null)}},l))}))))),r.a.createElement(u.a,{style:{fontSize:14,fontWeight:600,lineHeight:"22px",fontFamily:"SFProDisplay",color:"rgba(0, 0, 0, 0.85)"},orientation:"left"},"Vui lòng chọn ảnh demo bên dưới hoặc tải ảnh từ máy của bạn lên"),r.a.createElement("div",{className:"upload-wrapper"},p[t])))}var P,T=Object(c.a)((function(){return Promise.all([a.e(0),a.e(3),a.e(4),a.e(7),a.e(8),a.e(17)]).then(a.bind(null,"7oih"))})),V=Object(c.a)((function(){return a.e(9).then(a.bind(null,"EYWl"))}));Object(i.enquireScreen)((function(e){P=e}));var U=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isMobile:P},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;Object(i.enquireScreen)((function(t){e.setState({isMobile:!!t})}))},a.render=function(){this.props.intl;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{title:"Computer Vision Vietnam"}),r.a.createElement(T,null,r.a.createElement(L,null)))},t}(l.Component);t.default=Object(o.injectIntl)(U)},"99N6":function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));a("14J3");var n=a("BMrR"),l=(a("jCWc"),a("kPKH")),r=(a("DYRE"),a("zeV3")),i=(a("5NDa"),a("5rEg")),o=(a("DZo9"),a("8z0m")),c=(a("+L6B"),a("2/Rp")),s=a("ajDV"),m=a("xvlK"),u=a("ye1Q"),d=a("q1tI"),h=a.n(d),p=a("vDqi"),g=a.n(p),v=a("7eP+"),f=a("dbrF"),E=a("KFNm");function y(e){var t=e.result,a=e.cropPerson,n=t||{},l=n.url,r=(n.errorCode,n.errorMessage,n.invalidCode),i=n.invalidMessage;return h.a.createElement(h.a.Fragment,null,l?h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"result-wrapper"},h.a.createElement(w,null,a&&h.a.createElement(h.a.Fragment,null,0!==r&&h.a.createElement("div",{style:{fontSize:14,marginBottom:20}},h.a.createElement(E.a,{style:{color:"#F29C1F"}})," ",i)),h.a.createElement("img",{alt:"img",src:l,style:{maxWidth:"100%"}})))):h.a.createElement("div",{className:"error"},"Không tìm thấy nội dung. Vui lòng thử lại!"))}var w=a("vOnD").a.div.withConfig({displayName:"Result__Style",componentId:"sc-3wgh99-0"})(["min-height:300px;display:flex;flex-direction:column;align-items:center;justify-content:center;"]),b=a("6urQ"),C=[{id:1,size:{width:"100",height:"100"},text:"100x100"},{id:2,size:{width:"210",height:"140"},text:"210x140"},{id:3,size:{width:"750",height:"450"},text:"750x450"},{id:4,size:{width:"1920",height:"1080"},text:"1920x1080"}];function j(e){var t=e.cropPerson,a=e.result,p=e.setResult,E=Object(d.useState)(!1),w=E[0],j=E[1],O=Object(d.useState)(null),N=O[0],k=O[1],x=Object(d.useState)(null),S=x[0],F=x[1],R=Object(d.useState)(""),z=R[0],D=R[1],L=Object(d.useState)(""),P=L[0],T=L[1],V=Object(d.useState)({width:"100",height:"100"}),U=V[0],A=V[1],_=N&&(null==a?void 0:a.data),I=function(){k(null),p(null),F(null),D("")};return h.a.createElement(n.a,{gutter:[30,60]},h.a.createElement(l.a,{md:12,xs:24},h.a.createElement(o.a,{multiple:!1,accept:"image/*",beforeUpload:function(){return!1},showUploadList:!1,onChange:function(e){var t=e.file;k(t)},disabled:w||_,className:"image-uploader"},N||z?h.a.createElement("div",{style:{position:"relative"}},P?h.a.createElement("div",{className:"upload-area"},P):h.a.createElement(h.a.Fragment,null,h.a.createElement("img",{src:N?URL.createObjectURL(N):S,alt:"avatar",style:{width:"100%"}}),h.a.createElement(c.a,{icon:h.a.createElement(s.a,null),style:{position:"absolute",top:0,right:0},type:"primary",onClick:function(e){e.stopPropagation(),I()}}))):h.a.createElement("div",{className:"upload-area"},h.a.createElement(m.a,null),h.a.createElement("div",{style:{marginTop:8}},"Upload"))),h.a.createElement(i.a,{value:z,onChange:function(e){var t=e.target.value;k(null),D(t),t?Object(f.b)(t)?(F(t),T(null)):T("Link ảnh không hợp lệ"):T(null)},placeholder:"Hoặc nhập link ảnh",style:{height:46,marginTop:8}}),h.a.createElement("div",{style:{marginTop:24,marginBottom:4}},"Chọn kích thước ảnh"),h.a.createElement(r.b,{wrap:!0},C.map((function(e){var t=e.id,a=e.size,n=e.text;return h.a.createElement(c.a,{style:{height:40,borderRadius:"4px",width:120},key:t,onClick:function(){return A(a)},type:JSON.stringify(U)===JSON.stringify(a)?"primary":"default"},n)}))),h.a.createElement("div",{style:{marginTop:24,marginBottom:4}},"Hoặc nhập kích thước mong muốn"),h.a.createElement(r.b,null,h.a.createElement(i.a,{style:{width:120,height:40,borderRadius:"4px"},value:U.width,onChange:function(e){var t=e.target.value;A((function(e){return Object.assign({},e,{width:t})}))},placeholder:"Chiều rộng"}),h.a.createElement(i.a,{style:{width:120,height:40,borderRadius:"4px"},value:U.height,onChange:function(e){var t=e.target.value;A((function(e){return Object.assign({},e,{height:t})}))},placeholder:"Chiều cao"})),h.a.createElement(c.a,{onClick:_?I:function(){if(N||S){Object(f.d)(window.location.pathname);var e=t?"https://demo.computervision.com.vn/api/v2/smartcrop/crop_person":"https://demo.computervision.com.vn/api/v2/smartcrop/crop_image";if(N){var a=new FormData;a.append("img",N),j(!0),g()({method:"post",url:e+"?width="+U.width+"&height="+U.height,auth:{username:v.a.username,password:v.a.password},data:a,headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(e){p(e.data),j(!1)})).catch((function(e){console.log(e),j(!1)}))}else j(!0),g()({method:"get",url:e+"?url="+S+"&width="+U.width+"&height="+U.height,auth:{username:v.a.username,password:v.a.password},headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){p(e.data),j(!1)})).catch((function(e){console.log(e),j(!1)}))}},loading:w,type:"primary",block:!0,style:{height:48,marginTop:24}},_?"Thử lại":"XỬ LÝ")),h.a.createElement(l.a,{md:12,xs:24},h.a.createElement("div",{className:"demo-result"},a?h.a.createElement(y,{result:a,cropPerson:t}):h.a.createElement("div",{className:"note"},w?h.a.createElement(u.a,{style:{fontSize:40}}):'Vui lòng thêm ảnh và nhấn "Xử lý" để trải nghiệm dịch vụ')),h.a.createElement(b.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-image-recognition-js-8dd5e836c476c11c916d.js.map