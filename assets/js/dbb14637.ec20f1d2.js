"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(3117),r=(n(7294),n(3905));const l={title:"Accumulation",id:"accumulation"},i=void 0,s={unversionedId:"reference/accumulation",id:"reference/accumulation",title:"Accumulation",description:"This page will present you all the functions that can be used to pile up things",source:"@site/docs/reference/accumulation.md",sourceDirName:"reference",slug:"/reference/accumulation",permalink:"/docs/reference/accumulation",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/accumulation.md",tags:[],version:"current",lastUpdatedAt:1680364456,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"Accumulation",id:"accumulation"},sidebar:"reference",previous:{title:"Concatenation",permalink:"/docs/reference/concatenation"},next:{title:"Alteration",permalink:"/docs/reference/alteration"}},p={},o=[{value:"Superposition",id:"superposition",level:2},{value:"overlay",id:"overlay",level:3},{value:"&lt;&gt;",id:"",level:3},{value:"stack",id:"stack",level:3},{value:"superimpose",id:"superimpose",level:3},{value:"layer",id:"layer",level:3},{value:"steps",id:"steps",level:3},{value:"Building iterations",id:"building-iterations",level:2},{value:"iter",id:"iter",level:3},{value:"iter&#39;",id:"iter-1",level:3}],u={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page will present you all the functions that can be used to pile up things: sounds, patterns, etc... Each function will be presented following the same model:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,r.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,r.kt)("h2",{id:"superposition"},"Superposition"),(0,r.kt)("h3",{id:"overlay"},"overlay"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: overlay :: Pattern a -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"overlay")," function is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"cat"),", but combines two patterns, rather than a list of patterns. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (overlay "bd sn:2" "cp*3")\n')),(0,r.kt)("p",null,"...is the same as..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "[bd sn:2, cp*3]"\n')),(0,r.kt)("h3",{id:""},"\\<",">"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: (<>) :: Pattern a -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\\<\\>")," is the same as overlay described above but in operator form. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound ("bd sn:2" <> "cp*3")\n')),(0,r.kt)("h3",{id:"stack"},"stack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: stack :: [Pattern a] -> Pattern a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stack")," takes a list of patterns and combines them into a new pattern by layering them up - effectively playing all of the patterns in the list simultaneously:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stack [ \n  sound "bd bd*2", \n  sound "hh*2 [sn cp] cp future*4", \n  sound "arpy" +| n "0 .. 15"\n]\n')),(0,r.kt)("p",null,"This is particularly useful if you want to apply a function or synth control pattern to multiple patterns at once:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ whenmod 5 3 (striate 3) $ stack [ \n  sound "bd bd*2", \n  sound "hh*2 [sn cp] cp future*4", \n  sound "arpy" +| n "0 .. 15"\n] # speed "[[1 0.8], [1.5 2]*2]/3"\n')),(0,r.kt)("h3",{id:"superimpose"},"superimpose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: superimpose :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"superimpose")," plays a modified version of a pattern 'on top of' the original pattern, resulting in the modified and original version of the patterns being played at the same time. For example this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ superimpose (fast 2) $ sound "bd sn [cp ht] hh"\n')),(0,r.kt)("p",null,"...is the same as this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stack [sound "bd sn [cp ht] hh",\n            fast 2 $ sound "bd sn [cp ht] hh"\n           ]\n')),(0,r.kt)("h3",{id:"layer"},"layer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: [a -> Pattern b] -> a -> Pattern b\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"layer")," function allows you to layer up multiple functions on one pattern. For example the following will play two versions of the pattern at the same time, one reversed and one at twice the speed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ layer [rev, fast 2] $ sound "arpy [~ arpy:4]"\n')),(0,r.kt)("p",null,"If you want to include the original version of the pattern in the layering, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ layer [id, rev, fast 2] $ sound "arpy [~ arpy:4]"\n')),(0,r.kt)("h3",{id:"steps"},"steps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: steps :: [(String,String)] -> Pattern String\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"steps")," is like ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," but it takes a list of pairs like ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," would and it plays them all simultaneously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s (steps [("cp","x  x x  x x  x"),("bd", "xxxx")])\n')),(0,r.kt)("h2",{id:"building-iterations"},"Building iterations"),(0,r.kt)("h3",{id:"iter"},"iter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: iter :: Pattern Int -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"iter")," divides a pattern into a given number of subdivisions, plays the subdivisions in order, but increments the starting subdivision each cycle. The pattern wraps to the first subdivision after the last subdivision is played. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ iter 4 $ sound "bd hh sn cp"\n')),(0,r.kt)("p",null,"This will produce the following over four cycles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"bd hh sn cp\nhh sn cp bd\nsn cp bd hh\ncp bd hh sn\n")),(0,r.kt)("h3",{id:"iter-1"},"iter'"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"iter'")," does the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"iter")," but in the other direction. So this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ iter\' 4 $ sound "bd hh sn cp"\n')),(0,r.kt)("p",null,"Produces this pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"bd hh sn cp\ncp bd hh sn\nsn cp bd hh\nhh sn cp bd\n")))}c.isMDXComponent=!0}}]);