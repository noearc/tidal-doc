"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(3117),r=(n(7294),n(3905));const l={title:"mi-UGens",id:"mi-ugens"},i=void 0,o={unversionedId:"reference/mi-ugens",id:"reference/mi-ugens",title:"mi-UGens",description:"Description",source:"@site/docs/reference/mi-ugens.md",sourceDirName:"reference",slug:"/reference/mi-ugens",permalink:"/docs/reference/mi-ugens",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/mi-ugens.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1672305803,formattedLastUpdatedAt:"Dec 29, 2022",frontMatter:{title:"mi-UGens",id:"mi-ugens"},sidebar:"reference",previous:{title:"Composition",permalink:"/docs/reference/composition"},next:{title:"Control Busses",permalink:"/docs/reference/control_busses"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Contents",id:"contents",level:2},{value:"Synthdefs Reference",id:"synthdefs-reference",level:2},{value:"<code>omi</code>",id:"omi",level:3},{value:"<code>braids</code>",id:"braids",level:3},{value:"<code>plaits</code>",id:"plaits",level:3},{value:"Effects (Global)",id:"effects-global",level:2},{value:"verb",id:"verb",level:3},{value:"clouds",id:"clouds",level:3},{value:"etc",id:"etc",level:3}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mutable-instruments.net/"},"Mutable Instruments")," was a popular Eurorack module company from Normandy. The designer, engineer, and founder of Mutable Instruments, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pichenettes"},"\xc9milie Gillet"),", has made all of her work ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pichenettes/eurorack"},"open source"),". ",(0,r.kt)("a",{parentName:"p",href:"https://vboehm.net/"},"Volker B\xf6hm")," has taken the time to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/v7b1/mi-UGens"},"port")," some of these modules to ",(0,r.kt)("a",{parentName:"p",href:"https://supercollider.github.io/"},"SuperCollider")," under the project title ",(0,r.kt)("strong",{parentName:"p"},"mi-UGens")," (no affiliation with Mutable Instruments)."),(0,r.kt)("p",null,"Significant further work to make mi-UGens functional in Tidal was done by a large number of forum users, documented in ",(0,r.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/mutable-instruments-ugens/2730"},"this thread")," by ",(0,r.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/u/chrislo/summary"},"@chrislo")),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/mi-ugens-installation"},"Installation Method (opens a new page)")," for Windows, Mac and Linux"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/mi-ugens#synthdefs-reference"},"Synthdefs Reference")," for miOmi, miBraids and miPlaits"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/mi-ugens#effects-global"},"Effects Reference")," for miVerb, miClouds, miRings, etc (todo)")),(0,r.kt)("h2",{id:"synthdefs-reference"},"Synthdefs Reference"),(0,r.kt)("p",null,"All mi-UGens Synth modules support the following common SynthDef parameters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Supported parameters (default value)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"freq")),(0,r.kt)("td",{parentName:"tr",align:null},"440")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sustain")),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pan")),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"begin")),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"end")),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"speed")),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"accelerate")),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h3",{id:"omi"},(0,r.kt)("inlineCode",{parentName:"h3"},"omi")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),' miOmi or "Ominous Voice", an almost vibraphone-like synth, electric bass lows and tinkling highs. ',(0,r.kt)("inlineCode",{parentName:"p"},"omi")," does not take any extra parameters. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "omi" <| note "a [~ g] [c b] [g gs]" \n    # octave "<3 4 5 6 7 8>"\n    # sustain "{1 2 1}%8"\n')),(0,r.kt)("h3",{id:"braids"},(0,r.kt)("inlineCode",{parentName:"h3"},"braids")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," miBraids is a voltage-controlled monophonic digital sound source. Each algorithm is controlled by two continuously variable parameters, ",(0,r.kt)("inlineCode",{parentName:"p"},"timbre")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"color"),". ",(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20200508162718/https://mutable-instruments.net/modules/braids/manual/"},"More information...")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter (def)"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"model")," (0)"),(0,r.kt)("td",{parentName:"tr",align:null},"0-47"),(0,r.kt)("td",{parentName:"tr",align:null},"48 available model selections, for details on each of the models see this ",(0,r.kt)("a",{parentName:"td",href:"https://web.archive.org/web/20200508162718/https://mutable-instruments.net/modules/braids/manual/"},"manual"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timbre")," (0.5)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"model specific tone control")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color")," (0.5)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"model specific tone control")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "braids" <| note "a [~ g] [c b] [g gs]" \n    # octave "<3 4 5 6 7 8>"\n    # sustain "{1 2 1}%8"\n    # model (slow 48 $ run 48)\n    # timbre (slow 3 sine)\n    # color (saw)\n')),(0,r.kt)("h3",{id:"plaits"},(0,r.kt)("inlineCode",{parentName:"h3"},"plaits")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," miPlaits is the spiritual successor of ",(0,r.kt)("em",{parentName:"p"},"miBraids"),", with direct access to a large palette of easily tweakable raw sonic material, covering the whole gamut of synthesis techniques. ",(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20201111233906/https://mutable-instruments.net/modules/plaits/manual/"},"More information...")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter (def)"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"engine")," (0)"),(0,r.kt)("td",{parentName:"tr",align:null},"0-15"),(0,r.kt)("td",{parentName:"tr",align:null},"16 available engine selections, the later numbers focus on noisy and percussive sounds. For details, see this ",(0,r.kt)("a",{parentName:"td",href:"https://web.archive.org/web/20201111233906/https://mutable-instruments.net/modules/plaits/manual/"},"manual"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timbre")," (0.5)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"engine specific tone control - sweeps the spectral content from dark/sparse to bright/dense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"harm")," (0.5)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"engine specific tone control - ",(0,r.kt)("strong",{parentName:"td"},"harmonics")," controls the frequency spread or the balance between the various constituents of the tone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"morph")," (0.5)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"engine specific tone control - explores lateral timbral variations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"level")," (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Opens the internal low-pass gate, to simultaneously control the amplitude and brightness of the output signal. Also acts as an accent control when triggering the physical or percussive models")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lpgdecay")," (0)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"adjust the ringing time of the LPG and the decay time of the internal envelope")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lpgcolour")," (0)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"adjust the response of the LPG, from VCFA to VCA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lpg d c")),(0,r.kt)("td",{parentName:"tr",align:null},"see above"),(0,r.kt)("td",{parentName:"tr",align:null},"convenience function for simultaneous ",(0,r.kt)("inlineCode",{parentName:"td"},"lpgdecay")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"lpgcolour")," control")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1  $ s "plaits" <| note "a [~ g] [c b] [g gs]" \n    # octave "<3 4 5 6 7 8>"\n    # sustain "{1 2 1}%8"\n    # engine (slow 16 $ run 16)\n    # timbre (slow 3 sine)   \n    # harm (slow 4 saw)  \n    # morph (slow 9 saw)\n    # level (slow 8 sine)\n')),(0,r.kt)("h2",{id:"effects-global"},"Effects (Global)"),(0,r.kt)("h3",{id:"verb"},"verb"),(0,r.kt)("p",null,"Description: todo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"param"),(0,r.kt)("li",{parentName:"ul"},"param"),(0,r.kt)("li",{parentName:"ul"},"param")),(0,r.kt)("h3",{id:"clouds"},"clouds"),(0,r.kt)("p",null,"Description: todo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"param"),(0,r.kt)("li",{parentName:"ul"},"param"),(0,r.kt)("li",{parentName:"ul"},"param")),(0,r.kt)("h3",{id:"etc"},"etc"))}d.isMDXComponent=!0}}]);