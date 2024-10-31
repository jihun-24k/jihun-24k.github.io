"use strict";(self.webpackChunkkjh_gatsby_blog=self.webpackChunkkjh_gatsby_blog||[]).push([[49],{7980:function(e,t,n){n.d(t,{o:function(){return L},Z:function(){return z}});var i=n(8872),o=n(8032),a=n(6437),d=n(7294),r=n(5086);const c={[a.BLOCKS.HEADING_1]:r.default.h1.withConfig({displayName:"Heading__HEADING_1",componentId:"sc-1pzg5c4-0"})(["font-size:30px;font-weight:700;* + &{margin-top:80px;}hr + &{margin-top:0;}"]),[a.BLOCKS.HEADING_2]:r.default.h2.withConfig({displayName:"Heading__HEADING_2",componentId:"sc-1pzg5c4-1"})(["font-size:25px;font-weight:700;padding-bottom:0.2em;border-bottom:1px solid #CCEEFF;* + &{margin-top:60px;margin-bottom:20px;}hr + &{margin-top:0;}"]),[a.BLOCKS.HEADING_3]:r.default.h3.withConfig({displayName:"Heading__HEADING_3",componentId:"sc-1pzg5c4-2"})(["font-size:20px;font-weight:700;* + &{margin-top:40px;}hr + &{margin-top:0;}"])};function l(e){let{type:t,children:n,...i}=e;return(0,d.createElement)(c[t],i,n)}var s=n(5893);const p=r.default.ol.withConfig({displayName:"OrderedList__List",componentId:"sc-1r6evjk-0"})(["margin:4px 0px 8px 20px;ul p,ol p,li p{margin-bottom:0;}"]);function m(e){let{children:t,...n}=e;return(0,s.jsx)(p,{...n,children:t})}const f=r.default.ul.withConfig({displayName:"UnorderedList__List",componentId:"sc-dzskqa-0"})(["margin:4px 0px 8px 20px;ul p,ol p,li p{margin-bottom:0;}"]);function h(e){let{children:t,...n}=e;return(0,s.jsx)(f,{...n,children:t})}const x=r.default.hr.withConfig({displayName:"HorizontalRule__Component",componentId:"sc-ny80hu-0"})(["border:1px solid rgba(0,0,0,0.5);margin:80px 0;"]);function g(e){return(0,s.jsx)(x,{...e})}const u=r.default.blockquote.withConfig({displayName:"Blockquote__Component",componentId:"sc-4r2gpz-0"})(["margin-top:0;margin-bottom:1rem;padding:0 1em;border-left:0.25em solid #dfe2e5;color:#6a737d;"]);function b(e){let{children:t,...n}=e;return(0,s.jsx)(u,{...n,children:t})}const w=r.default.div.withConfig({displayName:"Image__Wrapper",componentId:"sc-a9911r-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;margin:30px 0;max-width:774px;"]),_=(0,r.default)(o.G).withConfig({displayName:"Image__Content",componentId:"sc-a9911r-1"})(["margin-top:30px;margin-bottom:10px;& + &{margin:-20px 0 30px 0;}"]),C=r.default.p.withConfig({displayName:"Image__Caption",componentId:"sc-a9911r-2"})(["font-size:13px;color:#313131;text-align:center;@media(max-width:768px){font-size:11px;}"]);function I(e){let{image:t,alt:n}=e;return(0,s.jsxs)(w,{children:[(0,s.jsx)(_,{image:t,alt:n}),n&&(0,s.jsx)(C,{children:n})]})}const y=r.default.a.withConfig({displayName:"Link__Component",componentId:"sc-buwszx-0"})(["color:#3399FF;text-decoration:underline;"]);function j(e){let{children:t,...n}=e;return(0,s.jsx)(y,{...n,children:t})}const N=r.default.code.withConfig({displayName:"Code__InlineCode",componentId:"sc-1ext1m7-0"})(["padding:2px 5px;border-radius:3px;font-family:'Nanum Gothic Coding',monospace;color:#3399FF;font-weight:500;background:#CCEEFF;"]),S=r.default.pre.withConfig({displayName:"Code__BlockCode",componentId:"sc-1ext1m7-1"})(["margin:30px 0 !important;border-radius:8px;& *{font-family:'Nanum Gothic Coding',monospace !important;}"]);function E(e){let{isBlock:t=!1,children:n,...i}=e;return t?(0,s.jsx)(S,{children:(0,s.jsx)("code",{...i,children:n})}):(0,s.jsx)(N,{...i,children:n})}const L=[a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3],k=/^language::(\w+)/,v={renderMark:{[a.MARKS.CODE]:e=>{var t;return!!e&&k.test(e.toString())?(0,s.jsx)(E,{isBlock:!0,className:`language-${null===(t=k.exec(e.toString()))||void 0===t?void 0:t[1]}`,children:e.toString().replace(k,"").trimStart()}):(0,s.jsx)(E,{children:e})}},renderNode:{...L.reduce(((e,t)=>(e[t]=(e,n)=>(0,s.jsx)(l,{type:t,id:`${e.content[0].value.replaceAll(" ","-")}_`,children:n}),e)),{}),[a.BLOCKS.OL_LIST]:(e,t)=>(0,s.jsx)(m,{children:t}),[a.BLOCKS.UL_LIST]:(e,t)=>(0,s.jsx)(h,{children:t}),[a.BLOCKS.HR]:()=>(0,s.jsx)(g,{}),[a.BLOCKS.QUOTE]:(e,t)=>(0,s.jsx)(b,{children:t}),[a.BLOCKS.EMBEDDED_ASSET]:e=>{const{gatsbyImageData:t,description:n}=e.data.target,i=(0,o.c)(t);if(i)return(0,s.jsx)(I,{image:i,alt:n})},[a.INLINES.HYPERLINK]:(e,t)=>(0,s.jsx)(j,{href:e.data.uri,target:"_blank",rel:"noopener noreferrer",children:t})}};function z(e){let{raw:t,references:n}=e;return t?(0,i.Z)({raw:t,references:n},v):null}},2766:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h}});var i=n(1883),o=n(8032),a=n(7980),d=n(5086),r=n(8347),c=n(5893);const l=d.default.div.withConfig({displayName:"about__Wrapper",componentId:"sc-18yqcsr-0"})(["display:flex;width:100%;justify-content:space-between;margin-bottom:40px;"]),s=d.default.div.withConfig({displayName:"about__ProfileImage",componentId:"sc-18yqcsr-1"})(["overflow:hidden;width:140px;height:140px;margin-bottom:30px;border-radius:50%;@media (max-width:768px){width:100px;height:100px;}"]),p=d.default.div.withConfig({displayName:"about__Info",componentId:"sc-18yqcsr-2"})(["display:flex;flex-direction:column;line-height:2;a{text-decoration:none;&:hover{text-decoration:underline;}}"]),m=d.default.div.withConfig({displayName:"about__Title",componentId:"sc-18yqcsr-3"})(["font-size:30px;font-weight:700;@media (max-width:1024px){font-size:25px;}@media (max-width:768px){font-size:20px;}"]),f=d.default.div.withConfig({displayName:"about__Content",componentId:"sc-18yqcsr-4"})(["display:flex;flex-direction:column;width:768px;font-size:16px;line-height:2;word-break:break-all;color:#313131;a{text-decoration:none;}p{margin-bottom:1.5em;}h3{margin:0;}@media (max-width:1024px){width:100%;}@media (max-width:768px){gap:50px;font-size:14px;line-height:1.8;}"]),h=()=>(0,c.jsx)(r.Z,{title:"김지훈 | 백엔드 개발자",description:"이력서 입니다."});t.default=()=>{const e=(0,i.useStaticQuery)("1107034758"),t=(0,a.Z)(e.contentfulAbout.info),d=(0,a.Z)(e.contentfulAbout.content);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(l,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(s,{children:(0,c.jsx)(o.S,{src:"../images/thumbnail.jpeg",alt:"Profile Image",__imageData:n(2096)})}),(0,c.jsx)(m,{children:"진심이 담긴 개발자, 김지훈입니다"})]}),(0,c.jsx)(p,{children:t})]}),(0,c.jsx)(f,{children:d})]})}},2096:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8e8e8","images":{"fallback":{"src":"/static/6bdf885ce80fc3e5082bd5c0e046bcdd/2787c/thumbnail.jpg","srcSet":"/static/6bdf885ce80fc3e5082bd5c0e046bcdd/66ca4/thumbnail.jpg 35w,\\n/static/6bdf885ce80fc3e5082bd5c0e046bcdd/19d7e/thumbnail.jpg 70w,\\n/static/6bdf885ce80fc3e5082bd5c0e046bcdd/2787c/thumbnail.jpg 140w","sizes":"(min-width: 140px) 140px, 100vw"},"sources":[{"srcSet":"/static/6bdf885ce80fc3e5082bd5c0e046bcdd/dbb7e/thumbnail.webp 35w,\\n/static/6bdf885ce80fc3e5082bd5c0e046bcdd/299bc/thumbnail.webp 70w,\\n/static/6bdf885ce80fc3e5082bd5c0e046bcdd/29111/thumbnail.webp 140w","type":"image/webp","sizes":"(min-width: 140px) 140px, 100vw"}]},"width":140,"height":140}')}}]);
//# sourceMappingURL=component---src-pages-about-tsx-e60c8c4a65dd386f8728.js.map