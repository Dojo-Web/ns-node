import{d as o,a4 as g,j as y,k as u,o as k,c as d,l as e,r as c,n as _,_ as F,a as i,I as s,w as t,a5 as r,E as b}from"./chunks/framework.D6ddHU4p.js";const m=["disabled"],C=o({name:"NsButton",__name:"index",props:{type:{type:String||void 0,default:""},disable:{type:Boolean,default:!1}},setup(p){const h=g(),l=y(!1),a={"":!0,undefined:!1,null:!1,true:!0,false:!1};return u(()=>{l.value=a[h.disabled]||!1}),(E,x)=>(k(),d("button",{disabled:l.value,class:_(`ns-button  ns-button-${p.type} ${l.value?"is-disable":""}`)},[e("span",null,[c(E.$slots,"default",{},void 0,!0)])],10,m))}}),n=F(C,[["__scopeId","data-v-43330aa8"]]),f=r("",4),B={style:{padding:"30px",border:"1px solid #ccc"}},v=r("",1),q=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"component/button.md","filePath":"component/button.md"}'),A={name:"component/button.md"},T=Object.assign(A,{setup(p){return(h,l)=>{const a=b("Badge");return k(),d("div",null,[f,e("p",null,[i("使用 "),s(a,{type:"info",text:"primary"}),i(),s(a,{type:"info",text:"warning"}),s(a,{type:"info",text:"isdisable"}),s(a,{type:"info",text:"danger"}),i(" 来定义按钮的样式。")]),e("div",B,[s(n,null,{default:t(()=>[i("primary")]),_:1}),s(n,{type:"primary"},{default:t(()=>[i("default")]),_:1}),s(n,{type:"danger"},{default:t(()=>[i("danger")]),_:1}),s(n,{type:"warning"},{default:t(()=>[i("warning")]),_:1}),s(n,{isdisable:""},{default:t(()=>[i("disable")]),_:1})]),v])}}});export{q as __pageData,T as default};
