(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9/EM":function(e,a,n){"use strict";n.d(a,"c",(function(){return i})),n.d(a,"b",(function(){return u})),n.d(a,"a",(function(){return o}));n("lUTK");var t=n("BvKs"),c=n("q1tI"),l=n.n(c),m=n("KFNm"),r=function(e){return(100*e).toFixed(2)+"%"};function i(e){var a=e.result,n=Object(c.useState)("1"),r=n[0],i=n[1],d=a||{},g=d.data,b=(d.errorCode,d.errorMessage,d.invalidCode,d.invalidMessage),p=d.type,y=d.valid;return l.a.createElement(l.a.Fragment,null,g?l.a.createElement("div",{className:"result-wrapper",style:{padding:"2"===r&&0}},l.a.createElement("div",{className:"menu"},l.a.createElement(t.a,{mode:"horizontal",onClick:function(e){return i(e.key)},selectedKeys:[r]},l.a.createElement(t.a.Item,{key:"1"},"Thông tin"),l.a.createElement(t.a.Item,{key:"2"},"Hình ảnh"))),"1"===r?l.a.createElement(l.a.Fragment,null,"False"===y&&l.a.createElement("div",{style:{fontSize:14,marginBottom:20}},l.a.createElement(m.a,{style:{color:"#F29C1F"}})," ",b),"chip_id_card_front"===p&&l.a.createElement(u,{data:g}),"chip_id_card_back"===p&&l.a.createElement(o,{data:g}),"driving_license"===p&&l.a.createElement(s,{data:g}),"passport"===p&&l.a.createElement(E,{data:g}),"matsautcc"===p&&l.a.createElement(v,{data:g}),"matsaucmt"===p&&l.a.createElement(h,{data:g}),"tcc"===p&&l.a.createElement(_,{data:g}),"cmt"===p&&l.a.createElement(f,{data:g})):l.a.createElement("img",{alt:"img",src:"data:image/png;base64,"+g.image,width:"100%"})):l.a.createElement("div",{className:"error"},"Không tìm thấy nội dung. Vui lòng thử lại!"))}function d(e){var a=e.name,n=e.value,t=e.confidence,c=e.en;return l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"field-name"},a,":"),l.a.createElement("div",{className:"field-value"},n,t?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"confidence-label"}," - ",c?"Confidence: ":"Độ tin cậy: "),r(t)):null))}function u(e){var a=e.data||{},n=a.id,t=a.id_confidence,c=a.name,m=a.name_confidence,i=a.dob,u=a.dob_confidence,o=a.gender,s=a.gender_confidence,E=a.nationality,v=a.nationality_confidence,h=a.hometown,_=a.hometown_town_code,f=a.hometown_town,g=a.hometown_confidence,b=a.hometown_district_code,p=a.hometown_district,y=a.hometown_ward_code,N=a.hometown_ward,k=a.address,w=a.address_confidence,q=a.address_town_code,D=a.address_town,T=a.address_district_code,F=a.address_district,C=a.address_ward_code,P=a.address_ward,H=a.due_date,Q=a.due_date_confidence;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{name:"Số thẻ",value:n,confidence:t}),l.a.createElement(d,{name:"Họ tên",value:c,confidence:m}),l.a.createElement(d,{name:"Ngày sinh",value:i,confidence:u}),l.a.createElement(d,{name:"Giới tính",value:o,confidence:s}),l.a.createElement(d,{name:"Quốc tịch",value:E,confidence:v}),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"field-name"},"Quê quán:"),l.a.createElement("div",{className:"field-value"},h," ",l.a.createElement("span",{className:"confidence-label"},"- Độ tin cậy: "),r(g)," ",l.a.createElement("br",null),"Tỉnh/TP: ",_," - ",f,l.a.createElement("br",null),"Quận/Huyện: ",b," - ",p,l.a.createElement("br",null),"Phường/Xã: ",y," - ",N)),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"field-name"},"Thường trú:"),l.a.createElement("div",{className:"field-value"},k," ",l.a.createElement("span",{className:"confidence-label"},"- Độ tin cậy: "),r(w)," ",l.a.createElement("br",null),"Tỉnh/TP: ",q," - ",D,l.a.createElement("br",null),"Quận/Huyện: ",T," - ",F,l.a.createElement("br",null),"Phường/Xã: ",C," - ",P)),l.a.createElement(d,{name:"Giá trị đến ngày",value:H,confidence:Q}))}function o(e){var a=e.data||{},n=a.nationality,t=a.checksum_final,c=a.checksum_final_validate,m=a.country,r=a.dob,i=a.dob_checksum,u=a.dob_checksum_validate,o=a.document_number,s=a.document_number_checksum,E=a.document_number_checksum_validate,v=a.due_date,h=a.due_date_checksum,_=a.due_date_checksum_validate,f=a.gender,g=a.given_name,b=a.issue_date,p=a.issue_date_confidence,y=a.issued_at,N=a.issued_at_confidence,k=a.person_number,w=a.sur_name,q=a.mrz_confidence;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{name:"Checksum final",value:t}),l.a.createElement(d,{name:"Checksum final validate",value:c}),l.a.createElement(d,{name:"Country",value:m}),l.a.createElement(d,{name:"Dob",value:r}),l.a.createElement(d,{name:"Dob checksum",value:i}),l.a.createElement(d,{name:"Dob checksum validate",value:u}),l.a.createElement(d,{name:"Document number",value:o}),l.a.createElement(d,{name:"Document number checksum",value:s}),l.a.createElement(d,{name:"Document number checksum validate",value:E}),l.a.createElement(d,{name:"Due date",value:v}),l.a.createElement(d,{name:"Due date checksum",value:h}),l.a.createElement(d,{name:"Due date checksum validate",value:_}),l.a.createElement(d,{name:"Gender",value:f}),l.a.createElement(d,{name:"Given name",value:g}),l.a.createElement(d,{name:"Issue date",value:b,confidence:p,en:!0}),l.a.createElement(d,{name:"Issued at",value:y,confidence:N,en:!0}),l.a.createElement(d,{name:"Nationality",value:n}),l.a.createElement(d,{name:"Person number",value:k}),l.a.createElement(d,{name:"Sur name",value:w}),l.a.createElement(d,{name:"Mrz confidence",value:(100*q).toFixed(2)+"%"}))}function s(e){var a=e.data||{},n=a.id,t=a.id_confidence,c=a.name,m=a.name_confidence,r=a.dob,i=a.dob_confidence,u=a.class,o=a.class_confidence,s=a.nationality,E=a.nationality_confidence,v=a.issue_date,h=a.issue_date_confidence,_=a.due_date,f=a.due_date_confidence,g=a.address,b=a.address_confidence;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{name:"Số thẻ",value:n,confidence:t}),l.a.createElement(d,{name:"Họ tên",value:c,confidence:m}),l.a.createElement(d,{name:"Ngày sinh",value:r,confidence:i}),l.a.createElement(d,{name:"Hạng",value:u,confidence:o}),l.a.createElement(d,{name:"Quốc tịch",value:s,confidence:E}),l.a.createElement(d,{name:"Ngày phát hành",value:v,confidence:h}),l.a.createElement(d,{name:"Giá trị đến ngày",value:_,confidence:f}),l.a.createElement(d,{name:"Nơi cư trú",value:g,confidence:b}))}function E(e){var a=e.data||{},n=a.id,t=a.id_checksum,c=a.id_checksum_validate,m=a.person_number,r=a.surname,i=a.given_name,u=a.sex,o=a.born,s=a.nationality,E=a.dob_checksum,v=a.dob_checksum_validate,h=a.country,_=a.duedate,f=a.due_date_checksum,g=a.due_date_checksum_validate,b=a.confidence;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{name:"ID",value:n}),l.a.createElement(d,{name:"ID checksum",value:t}),l.a.createElement(d,{name:"ID checksum validate",value:c}),l.a.createElement(d,{name:"ID card",value:m}),l.a.createElement(d,{name:"Surname",value:r}),l.a.createElement(d,{name:"Given name",value:i}),l.a.createElement(d,{name:"Gender",value:u}),l.a.createElement(d,{name:"Dob",value:o}),l.a.createElement(d,{name:"Dob checksum",value:E}),l.a.createElement(d,{name:"Dob checksum validate",value:v}),l.a.createElement(d,{name:"Country",value:h}),l.a.createElement(d,{name:"Due date",value:_}),l.a.createElement(d,{name:"Due date checksum",value:f}),l.a.createElement(d,{name:"Due date checksum validate",value:g}),l.a.createElement(d,{name:"Nationality",value:s}),l.a.createElement(d,{name:"Confidence",value:(100*b).toFixed(2)+"%"}))}function v(e){var a=e.data||{},n=a.date,t=a.issue_date_confidence,c=a.noicap,m=a.issued_at_confidence;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{name:"Ngày cấp",value:n,confidence:t}),l.a.createElement(d,{name:"Nơi cấp",value:c,confidence:m}))}function h(e){var a=e.data||{},n=a.date,t=a.issue_date_confidence,c=a.noicap,m=a.issued_at_confidence,r=a.dantoc,i=a.ethnicity_confidence,u=a.tongiao,o=a.religious_confidence;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{name:"Dân tộc",value:r,confidence:i}),l.a.createElement(d,{name:"Tôn giáo",value:u,confidence:o}),l.a.createElement(d,{name:"Ngày cấp",value:n,confidence:t}),l.a.createElement(d,{name:"Nơi cấp",value:c,confidence:m}))}function _(e){var a=e.data||{},n=a.id,t=a.id_confidence,c=a.name,m=a.name_confidence,i=a.born,u=a.dob_confidence,o=a.sex,s=a.gender_confidence,E=a.quoctich,v=a.nationality_confidence,h=a.dantoc,_=a.ethnicity_confidence,f=a.country,g=a.quequan_tinh,b=a.quequan_tinh_name,p=a.hometown_confidence,y=a.quequan_huyen,N=a.quequan_huyen_name,k=a.quequan_phuong,w=a.quequan_phuong_name,q=a.address,D=a.address_confidence,T=a.diachi_tinh,F=a.diachi_tinh_name,C=a.diachi_huyen,P=a.diachi_huyen_name,H=a.diachi_phuong,Q=a.diachi_phuong_name,S=a.duedate,j=a.due_date_confidence;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{name:"Số thẻ",value:n,confidence:t}),l.a.createElement(d,{name:"Họ tên",value:c,confidence:m}),l.a.createElement(d,{name:"Ngày sinh",value:i,confidence:u}),l.a.createElement(d,{name:"Giới tính",value:o,confidence:s}),l.a.createElement(d,{name:"Quốc tịch",value:E,confidence:v}),l.a.createElement(d,{name:"Dân tộc",value:h,confidence:_}),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"field-name"},"Quê quán:"),l.a.createElement("div",{className:"field-value"},f," ",l.a.createElement("span",{className:"confidence-label"},"- Độ tin cậy: "),r(p)," ",l.a.createElement("br",null),"Tỉnh/TP: ",g," - ",b,l.a.createElement("br",null),"Quận/Huyện: ",y," - ",N,l.a.createElement("br",null),"Phường/Xã: ",k," - ",w)),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"field-name"},"Thường trú:"),l.a.createElement("div",{className:"field-value"},q," ",l.a.createElement("span",{className:"confidence-label"},"- Độ tin cậy: "),r(D)," ",l.a.createElement("br",null),"Tỉnh/TP: ",T," - ",F,l.a.createElement("br",null),"Quận/Huyện: ",C," - ",P,l.a.createElement("br",null),"Phường/Xã: ",H," - ",Q)),l.a.createElement(d,{name:"Giá trị đến ngày",value:S,confidence:j}))}function f(e){var a=e.data||{},n=a.id,t=a.id_confidence,c=a.name,m=a.name_confidence,i=a.born,u=a.dob_confidence,o=a.country,s=a.quequan_tinh,E=a.quequan_tinh_name,v=a.hometown_confidence,h=a.quequan_huyen,_=a.quequan_huyen_name,f=a.quequan_phuong,g=a.quequan_phuong_name,b=a.address,p=a.address_confidence,y=a.diachi_tinh,N=a.diachi_tinh_name,k=a.diachi_huyen,w=a.diachi_huyen_name,q=a.diachi_phuong,D=a.diachi_phuong_name;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{name:"Số thẻ",value:n,confidence:t}),l.a.createElement(d,{name:"Họ tên",value:c,confidence:m}),l.a.createElement(d,{name:"Ngày sinh",value:i,confidence:u}),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"field-name"},"Quê quán:"),l.a.createElement("div",{className:"field-value"},o," ",l.a.createElement("span",{className:"confidence-label"},"- Độ tin cậy: "),r(v)," ",l.a.createElement("br",null),"Tỉnh/TP: ",s," - ",E,l.a.createElement("br",null),"Quận/Huyện: ",h," - ",_,l.a.createElement("br",null),"Phường/Xã: ",f," - ",g)),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"field-name"},"Thường trú:"),l.a.createElement("div",{className:"field-value"},b," ",l.a.createElement("span",{className:"confidence-label"},"- Độ tin cậy: "),r(p)," ",l.a.createElement("br",null),"Tỉnh/TP: ",y," - ",N,l.a.createElement("br",null),"Quận/Huyện: ",k," - ",w,l.a.createElement("br",null),"Phường/Xã: ",q," - ",D)))}},O8zm:function(e,a,n){"use strict";n.d(a,"a",(function(){return p}));n("14J3");var t=n("BMrR"),c=(n("jCWc"),n("kPKH")),l=(n("5NDa"),n("5rEg")),m=(n("DZo9"),n("8z0m")),r=(n("+L6B"),n("2/Rp")),i=n("ajDV"),d=n("xvlK"),u=n("ye1Q"),o=n("q1tI"),s=n.n(o),E=n("vDqi"),v=n.n(E),h=n("7eP+"),_=n("dbrF"),f=n("9/EM"),g=n("6urQ");n("fV52"),n("3I+P"),n("rxVv"),n("jhfD");var b="https://demo.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_infor_all";function p(e){var a=e.result,n=e.setResult,E=Object(o.useState)(!1),p=E[0],y=E[1],N=Object(o.useState)(null),k=N[0],w=N[1],q=Object(o.useState)(null),D=q[0],T=q[1],F=Object(o.useState)(""),C=F[0],P=F[1],H=Object(o.useState)(""),Q=H[0],S=H[1],j=k&&(null==a?void 0:a.data),O=function(){w(null),n(null),T(null),P("")};return s.a.createElement(s.a.Fragment,null,s.a.createElement(t.a,{gutter:[30,60]},s.a.createElement(c.a,{md:12,xs:24},s.a.createElement(m.a,{multiple:!1,accept:"image/*",beforeUpload:function(){return!1},showUploadList:!1,onChange:function(e){var a=e.file;w(a),n(null)},disabled:p||j,className:"image-uploader"},k||C?s.a.createElement("div",{style:{position:"relative"}},Q?s.a.createElement("div",{className:"upload-area"},Q):s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{src:k?URL.createObjectURL(k):D,alt:"avatar",style:{width:"100%"}}),s.a.createElement(r.a,{icon:s.a.createElement(i.a,null),style:{position:"absolute",top:0,right:0},type:"primary",onClick:function(e){e.stopPropagation(),O()}}))):s.a.createElement("div",{className:"upload-area"},s.a.createElement(d.a,null),s.a.createElement("div",{style:{marginTop:8}},"Upload"))),s.a.createElement(l.a,{value:C,onChange:function(e){var a=e.target.value;w(null),P(a),a?Object(_.b)(a)?(T(a),S(null)):S("Link ảnh không hợp lệ"):S(null)},placeholder:"Hoặc nhập link ảnh",style:{height:46,marginTop:8}}),s.a.createElement(r.a,{onClick:j?O:function(){if(k||D)if(Object(_.d)(window.location.pathname),k){var e=new FormData;e.append("image",k),y(!0),v()({method:"post",url:b,auth:{username:h.a.username,password:h.a.password},data:e,headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(e){n(e.data),y(!1)})).catch((function(e){console.log(e),y(!1)}))}else y(!0),v()({method:"get",url:b+"?url="+D,auth:{username:h.a.username,password:h.a.password},headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){n(e.data),y(!1)})).catch((function(e){console.log(e),y(!1)}))},loading:p,type:"primary",block:!0,style:{height:48,marginTop:24}},j?"Thử lại":"XỬ LÝ")),s.a.createElement(c.a,{md:12,xs:24},s.a.createElement("div",{className:"demo-result"},a?s.a.createElement(f.c,{result:a}):s.a.createElement("div",{className:"note"},p?s.a.createElement(u.a,{style:{fontSize:40}}):'Vui lòng thêm ảnh và nhấn "Xử lý" để trải nghiệm dịch vụ')),s.a.createElement(g.a,null))))}}}]);
//# sourceMappingURL=395f25257b1167cac7e109f4ef880c992656f31b-f86020e024541cb298ea.js.map