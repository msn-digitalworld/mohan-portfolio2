(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2822:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d}),r(3563),r(7716),r(5866);var a=r(3191),o=r(8716),s=r(7922),i=r.n(s),n=r(5231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3563)),"F:\\Company\\Resume\\Portfolio\\My Online Portfolio\\My_ChatGPT_Portfolio_Next_Tailwind_Versal\\portfolio1\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,7716)),"F:\\Company\\Resume\\Portfolio\\My Online Portfolio\\My_ChatGPT_Portfolio_Next_Tailwind_Versal\\portfolio1\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["F:\\Company\\Resume\\Portfolio\\My Online Portfolio\\My_ChatGPT_Portfolio_Next_Tailwind_Versal\\portfolio1\\app\\page.tsx"],m="/page",p={require:r,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6216:(e,t,r)=>{Promise.resolve().then(r.bind(r,4633)),Promise.resolve().then(r.bind(r,4831))},5243:(e,t,r)=>{Promise.resolve().then(r.bind(r,8717))},4230:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},8717:(e,t,r)=>{"use strict";r.d(t,{default:()=>B});var a,o=r(326),s=r(7577);let i={data:""},n=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,m=(e,t)=>{let r="",a="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+i+";":a+="f"==s[1]?m(i,s):s+"{"+m(i,"k"==s[1]?"":t)+"}":"object"==typeof i?a+=m(i,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=m.p?m.p(s,i):s+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+a},p={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e},x=(e,t,r,a,o)=>{let s=u(e),i=p[s]||(p[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!p[i]){let t=s!==e?e:(e=>{let t,r,a=[{}];for(;t=l.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(c," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(c," ").trim();return a[0]})(e);p[i]=m(o?{["@keyframes "+i]:t}:t,r?"":"."+i)}let n=r&&p.g?p.g:null;return r&&(p.g=p[i]),((e,t,r,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(p[i],t,a,n),i},g=(e,t,r)=>e.reduce((e,a,o)=>{let s=t[o];if(s&&s.call){let e=s(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==s?"":s)},"");function h(e){let t=this||{},r=e.call?e(t.p):e;return x(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,n(t.target),t.g,t.o,t.k)}h.bind({g:1});let f,b,y,v=h.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=h.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),y&&d[0]&&y(n),f(d,n)}return t?t(o):o}}var j=e=>"function"==typeof e,k=(e,t)=>j(e)?e(t):e,P=(()=>{let e=0;return()=>(++e).toString()})(),_=((()=>{let e;return()=>e})(),"default"),N=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return N(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},T=[],C={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},M={},S=(e,t=_)=>{M[t]=N(M[t]||C,e),T.forEach(([e,r])=>{e===t&&r(M[t])})},A=e=>Object.keys(M).forEach(t=>S(e,t)),q=e=>Object.keys(M).find(t=>M[t].toasts.some(t=>t.id===e)),F=(e=_)=>t=>{S(t,e)},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||P()}),I=e=>(t,r)=>{let a=O(t,e,r);return F(a.toasterId||q(a.id))({type:2,toast:a}),a.id},$=(e,t)=>I("blank")(e,t);$.error=I("error"),$.success=I("success"),$.loading=I("loading"),$.custom=I("custom"),$.dismiss=(e,t)=>{let r={type:3,toastId:e};t?F(t)(r):A(r)},$.dismissAll=e=>$.dismiss(void 0,e),$.remove=(e,t)=>{let r={type:4,toastId:e};t?F(t)(r):A(r)},$.removeAll=e=>$.remove(void 0,e),$.promise=(e,t,r)=>{let a=$.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?k(t.success,e):void 0;return o?$.success(o,{id:a,...r,...null==r?void 0:r.success}):$.dismiss(a),e}).catch(e=>{let o=t.error?k(t.error,e):void 0;o?$.error(o,{id:a,...r,...null==r?void 0:r.error}):$.dismiss(a)}),e};var R=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,G=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,E=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,V=(w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${G} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${E} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`),z=(w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${V} 1s linear infinite;
`,v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`),L=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,H=(w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${L} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,w("div")`
  position: absolute;
`,w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`);function B(){let[e,t]=(0,s.useState)(!1),r=async e=>{e.preventDefault(),t(!0);let r=e.currentTarget,a=new FormData(r);try{(await fetch("https://formspree.io/f/xjkoqyvp",{method:"POST",body:a,headers:{Accept:"application/json"}})).ok?($.success("✅ Message sent successfully!"),r.reset()):$.error("❌ Failed to send message. Try again!")}catch(e){$.error("⚠️ Something went wrong. Please try later.")}finally{t(!1)}};return o.jsx("section",{id:"contact",className:"py-16 bg-white dark:bg-gray-900 transition-colors duration-300",children:(0,o.jsxs)("div",{className:"max-w-4xl mx-auto px-6",children:[o.jsx("h2",{className:"text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white",children:"Get In Touch"}),o.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-center mb-12",children:"Interested in working together or have a question? Drop me a message!"}),(0,o.jsxs)("form",{onSubmit:r,className:"grid gap-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg",children:[(0,o.jsxs)("div",{children:[o.jsx("label",{className:"block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200",children:"Name"}),o.jsx("input",{type:"text",name:"name",required:!0,className:"w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"})]}),(0,o.jsxs)("div",{children:[o.jsx("label",{className:"block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200",children:"Email"}),o.jsx("input",{type:"email",name:"email",required:!0,className:"w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"})]}),(0,o.jsxs)("div",{children:[o.jsx("label",{className:"block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200",children:"Message"}),o.jsx("textarea",{name:"message",rows:5,required:!0,className:"w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"})]}),o.jsx("button",{type:"submit",disabled:e,className:"w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:e?"Sending...":"Send Message"})]})]})})}w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,a=s.createElement,m.p=void 0,f=a,b=void 0,y=void 0,h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`},4633:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(326),o=r(4831),s=r(7577),i=r(850),n=r(2607);function l(){let{theme:e,setTheme:t}=(0,o.F)(),[r,l]=(0,s.useState)(!1);return r?a.jsx("button",{onClick:()=>t("dark"===e?"light":"dark"),className:"p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition",children:"dark"===e?a.jsx(i.Z,{className:"w-5 h-5 text-yellow-400"}):a.jsx(n.Z,{className:"w-5 h-5 text-gray-900"})}):null}},7716:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>p});var a=r(9510),o=r(7366),s=r.n(o);r(7272);var i=r(9552),n=r(8570);let l=(0,n.createProxy)(String.raw`F:\Company\Resume\Portfolio\My Online Portfolio\My_ChatGPT_Portfolio_Next_Tailwind_Versal\portfolio1\components\ThemeToggle.tsx`),{__esModule:d,$$typeof:c}=l;l.default;let m=(0,n.createProxy)(String.raw`F:\Company\Resume\Portfolio\My Online Portfolio\My_ChatGPT_Portfolio_Next_Tailwind_Versal\portfolio1\components\ThemeToggle.tsx#default`),p={title:"Mohan's Portfolio",description:"Front-End Developer Portfolio built with Next.js & Tailwind"};function u({children:e}){return a.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:a.jsx("body",{className:`${s().className} bg-white text-black dark:bg-gray-900 dark:text-white`,children:(0,a.jsxs)(i.f,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:[(0,a.jsxs)("header",{className:"flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700",children:[a.jsx("h1",{className:"text-xl font-bold",children:"Mohan's Portfolio"}),a.jsx(m,{})]}),a.jsx("main",{children:e}),(0,a.jsxs)("footer",{className:"mt-12 border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-gray-600 dark:text-gray-400",children:["\xa9 ",new Date().getFullYear()," Mohan Kumar. All rights reserved."]})]})})})}},3563:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(9510);r(1159);let o=[{title:"E-commerce Store",description:"Built with React, Context API, and Tailwind. Includes login, cart, category filtering, and responsive design.",tech:["React","Tailwind","Context API"],github:"https://github.com/yourusername/ecommerce",demo:"https://ecommerce-demo.vercel.app"},{title:"Yahoo Interactive Ads",description:"Developed custom rich media ads and premium ad innovations at Yahoo with HTML5, CSS3, and JS.",tech:["HTML5","CSS3","JavaScript"],github:"#",demo:"https://global.adshowcase.yahooinc.com/"},{title:"Portfolio Website",description:"This portfolio is built using Next.js, Tailwind CSS, and deployed on Vercel.",tech:["Next.js","Tailwind","TypeScript"],github:"https://github.com/yourusername/portfolio",demo:"https://mohan-portfolio2.vercel.app"}];function s(){return a.jsx("section",{id:"projects",className:"py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto px-6",children:[a.jsx("h2",{className:"text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white",children:"Projects"}),a.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:o.map((e,t)=>(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition",children:[(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"text-xl font-semibold mb-2 text-gray-900 dark:text-white",children:e.title}),a.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:e.description}),a.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:e.tech.map((e,t)=>a.jsx("span",{className:"text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full",children:e},t))})]}),(0,a.jsxs)("div",{className:"flex justify-between mt-4",children:[a.jsx("a",{href:e.github,target:"_blank",className:"text-blue-600 dark:text-blue-400 font-medium hover:underline",children:"GitHub"}),a.jsx("a",{href:e.demo,target:"_blank",className:"text-green-600 dark:text-green-400 font-medium hover:underline",children:"Live Demo"})]})]},t))})]})})}var i=r(8570);let n=(0,i.createProxy)(String.raw`F:\Company\Resume\Portfolio\My Online Portfolio\My_ChatGPT_Portfolio_Next_Tailwind_Versal\portfolio1\components\Contact.tsx`),{__esModule:l,$$typeof:d}=n;n.default;let c=(0,i.createProxy)(String.raw`F:\Company\Resume\Portfolio\My Online Portfolio\My_ChatGPT_Portfolio_Next_Tailwind_Versal\portfolio1\components\Contact.tsx#default`);function m(){return(0,a.jsxs)("main",{children:[(0,a.jsxs)("section",{className:"flex flex-col items-center justify-center text-center px-6 py-24",children:[a.jsx("h1",{className:"text-5xl font-extrabold tracking-tight",children:"Hi, I’m Mohan \uD83D\uDC4B"}),a.jsx("h2",{className:"mt-4 max-w-2xl text-lg italic text-gray-600 dark:text-gray-300",children:"Building interactive, scalable, and pixel-perfect front-end solutions."}),(0,a.jsxs)("p",{className:"mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300",children:["Front-End Developer specializing in ",a.jsx("strong",{children:"React, Next.js"}),", modern"," ",a.jsx("strong",{children:"UI/UX"}),", and ",a.jsx("strong",{children:"Rich Media Ads"}),". I build fast, accessible, and delightful web apps."]}),a.jsx("div",{className:"mt-8 flex gap-4",children:a.jsx("a",{href:"/MohanKumar_React_TypeScript.pdf",target:"_blank",className:"rounded-lg border border-blue-600 dark:border-blue-400 px-6 py-3 font-semibold    text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800",children:"Download Resume"})}),a.jsx("br",{}),a.jsx(s,{})]}),a.jsx(c,{})]})}},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[51],()=>r(2822));module.exports=a})();