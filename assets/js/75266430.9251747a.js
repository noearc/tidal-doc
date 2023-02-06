"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const l={title:"Pattern Structure",id:"pattern_structure"},i=void 0,o={unversionedId:"reference/pattern_structure",id:"reference/pattern_structure",title:"Pattern Structure",description:"A core feature of Tidal is the ease in which two patterns can be combined. For example, these are two patterns being combined by adding together their elements:",source:"@site/docs/reference/pattern_structure.md",sourceDirName:"reference",slug:"/reference/pattern_structure",permalink:"/docs/reference/pattern_structure",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/pattern_structure.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1675657763,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Pattern Structure",id:"pattern_structure"},sidebar:"reference",previous:{title:"Patterns",permalink:"/docs/reference/patterns"},next:{title:"Mini Notation",permalink:"/docs/reference/mini_notation"}},p={},u=[{value:"Structure from the left",id:"structure-from-the-left",level:2},{value:"Structure from the right",id:"structure-from-the-right",level:2},{value:"All the operators",id:"all-the-operators",level:2},{value:"Combining control patterns",id:"combining-control-patterns",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A core feature of ",(0,a.kt)("strong",{parentName:"p"},"Tidal")," is the ease in which two patterns can be combined. For example, these are two patterns being combined by adding together their elements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'"2 3" + "4 5 6"\n')),(0,a.kt)("p",null,"The result of the above is equivalent to the pattern ",(0,a.kt)("inlineCode",{parentName:"p"},'"6 [7 8] 9"'),". But why? Let's look closer. The two patterns line up over time like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"  |  2  |  3  |\n+ | 4 | 5 | 6 |\n")),(0,a.kt)("p",null,"Unlike in previous versions of ",(0,a.kt)("strong",{parentName:"p"},"Tidal"),", when you combine two patterns in this way, by default the structure now comes from both patterns. This means you end up with four events, because the ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," in the middle lines up both with the ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),", and gets split in half between them. We can add the resulting pattern to our table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"  |  2  |  3  |\n+ | 4 | 5 | 6 |\n= | 6 |7|8| 9 |\n")),(0,a.kt)("p",null,"You can see that the ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," fits inside ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),", so where they intersect, you get a new event equal to their sum ",(0,a.kt)("inlineCode",{parentName:"p"},"6"),"."),(0,a.kt)("p",null,"Also see that the event with value ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," is cut in half, to create two, shorter events. Half matches with the ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," event and the other half matches with the ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," event."),(0,a.kt)("p",null,"The fourth and final event comes from the intersection of ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"6"),", giving a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"9"),"."),(0,a.kt)("h2",{id:"structure-from-the-left"},"Structure from the left"),(0,a.kt)("p",null,"In previous versions of Tidal, the structure always came from the left. You can still do this, but in this case using ",(0,a.kt)("inlineCode",{parentName:"p"},"|+"),". For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'"2 3" |+ "4 5 6"\n')),(0,a.kt)("p",null,"In the above example, you end up with structure from the first (leftmost) pattern, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"   |  2  |  3  |\n|+ | 4 | 5 | 6 |\n = |  6  |  8  |\n")),(0,a.kt)("p",null,"You can see the structure comes from the ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," lines up with ",(0,a.kt)("inlineCode",{parentName:"p"},"4"),", and the start of ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," is in ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),", so you end up with ",(0,a.kt)("inlineCode",{parentName:"p"},"2+4=6")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"3+5=8"),". The result is the equivalent of ",(0,a.kt)("inlineCode",{parentName:"p"},'"6 8"'),"."),(0,a.kt)("h2",{id:"structure-from-the-right"},"Structure from the right"),(0,a.kt)("p",null,"Likewise, you can take the structure from the right, with ",(0,a.kt)("inlineCode",{parentName:"p"},"+|"),". So ",(0,a.kt)("inlineCode",{parentName:"p"},'"2 3" +| "4 5 6"')," looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"   |  2  |  3  |\n+| | 4 | 5 | 6 |\n = | 6 | 7 | 9 |\n")),(0,a.kt)("p",null,"The result is the equivalent of ",(0,a.kt)("inlineCode",{parentName:"p"},'"6 7 9"'),"."),(0,a.kt)("h2",{id:"all-the-operators"},"All the operators"),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," is actually an alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"|+|"),". So ",(0,a.kt)("inlineCode",{parentName:"p"},"|+")," is to take the structure from the left, ",(0,a.kt)("inlineCode",{parentName:"p"},"+|")," from the right, and ",(0,a.kt)("inlineCode",{parentName:"p"},"|+|")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," for both. Here are the basic operators you can use to combine numerical patterns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function"),(0,a.kt)("th",{parentName:"tr",align:null},"Both"),(0,a.kt)("th",{parentName:"tr",align:null},"Left"),(0,a.kt)("th",{parentName:"tr",align:null},"Right"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Add"),(0,a.kt)("td",{parentName:"tr",align:null},"|","+","|"," or (+)"),(0,a.kt)("td",{parentName:"tr",align:null},"|","+"),(0,a.kt)("td",{parentName:"tr",align:null},"+","|")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Subtract"),(0,a.kt)("td",{parentName:"tr",align:null},"|","-","|"," or (-)"),(0,a.kt)("td",{parentName:"tr",align:null},"|","-"),(0,a.kt)("td",{parentName:"tr",align:null},"-","|")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Multiply"),(0,a.kt)("td",{parentName:"tr",align:null},"|","*","|"," or (*)"),(0,a.kt)("td",{parentName:"tr",align:null},"|","*"),(0,a.kt)("td",{parentName:"tr",align:null},"*","|")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Divide"),(0,a.kt)("td",{parentName:"tr",align:null},"|","/","|"," or (/)"),(0,a.kt)("td",{parentName:"tr",align:null},"|","/"),(0,a.kt)("td",{parentName:"tr",align:null},"/","|")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Modulo"),(0,a.kt)("td",{parentName:"tr",align:null},"|","%","|"," or (%)"),(0,a.kt)("td",{parentName:"tr",align:null},"|","%"),(0,a.kt)("td",{parentName:"tr",align:null},"%","|")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Left values"),(0,a.kt)("td",{parentName:"tr",align:null},"|","<","|"," or (<)"),(0,a.kt)("td",{parentName:"tr",align:null},"|","<"),(0,a.kt)("td",{parentName:"tr",align:null},"<","|")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Right Values"),(0,a.kt)("td",{parentName:"tr",align:null},"|",">","|"," or (>)"),(0,a.kt)("td",{parentName:"tr",align:null},"|",">"),(0,a.kt)("td",{parentName:"tr",align:null},">","|")))),(0,a.kt)("p",null,"The last two are interesting, they let you only take values from one side. So for example you could take structure from the left, but values from the right with ",(0,a.kt)("inlineCode",{parentName:"p"},"|>"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"   |  2  |  3  |\n|> | 4 | 5 | 6 |\n = |  4  |  5  |\n")),(0,a.kt)("p",null,"This is very similar to how ",(0,a.kt)("inlineCode",{parentName:"p"},"|+|")," used to work in the versions of tidal prior to 1.0.0 - it took structure from the left, but values from the right. In fact, ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," is an alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"|>"),", mirroring the behaviour in previous versions of tidal."),(0,a.kt)("h2",{id:"combining-control-patterns"},"Combining control patterns"),(0,a.kt)("p",null,"A control pattern (formerly known as a ",(0,a.kt)("inlineCode",{parentName:"p"},"param pattern"),"), is a pattern that's been given a control name. For example the number pattern ",(0,a.kt)("inlineCode",{parentName:"p"},'"1 2 3"')," can be turned into a control pattern like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},'speed "1 2 3"\n')),(0,a.kt)("p",null,"Control patterns can be combined together in the same way as numerical patterns. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "drum" |+| n "1 2 3"\n')),(0,a.kt)("p",null,"Nothing actually gets added together in the above, they're just combined into the equivalent of ",(0,a.kt)("inlineCode",{parentName:"p"},'d1 $ sound "drum:1 drum:2 drum:3"'),". However if you specify the same numerical control more than once, then their values ",(0,a.kt)("em",{parentName:"p"},"will")," be combined. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "drum" |+| n "2 3" |+| n "4 5 6"\n')),(0,a.kt)("p",null,"The above will be equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "drum" |+| n "6 [7 8] 9"\n')))}m.isMDXComponent=!0}}]);