"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3515],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1172:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const o={title:"Control Voltage/CV",id:"control-voltage",permalink:"wiki/CV/",layout:"wiki"},l=void 0,i={unversionedId:"configuration/MIDIOSC/control-voltage",id:"configuration/MIDIOSC/control-voltage",title:"Control Voltage/CV",description:"Tidal can send control voltage to modular synthesizers when using audio cards with DC output. A collection of CV helpers for Tidal is published in the SuperDirt Voltage library.",source:"@site/docs/configuration/MIDIOSC/Control_Voltage.md",sourceDirName:"configuration/MIDIOSC",slug:"/configuration/MIDIOSC/control-voltage",permalink:"/docs/configuration/MIDIOSC/control-voltage",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/MIDIOSC/Control_Voltage.md",tags:[],version:"current",lastUpdatedAt:1686606244,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"Control Voltage/CV",id:"control-voltage",permalink:"wiki/CV/",layout:"wiki"},sidebar:"docs",previous:{title:"DAW",permalink:"/docs/configuration/MIDIOSC/connecting_to_a_daw"},next:{title:"Custom Samples",permalink:"/docs/configuration/AudioSamples/audiosamples"}},c={},p=[{value:"SuperDirt Voltage",id:"superdirt-voltage",level:2},{value:"Pitch, with scale quantisation",id:"pitch-with-scale-quantisation",level:3},{value:"Gate",id:"gate",level:3},{value:"Voltage automation",id:"voltage-automation",level:3},{value:"AR (Attack + Release)",id:"ar-attack--release",level:3},{value:"Clock",id:"clock",level:3}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tidal can send control voltage to modular synthesizers when using audio cards with DC output. A collection of CV helpers for Tidal is published in the SuperDirt Voltage library."),(0,r.kt)("h2",{id:"superdirt-voltage"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/mashaal/superdirt-voltage"},"SuperDirt Voltage")),(0,r.kt)("h3",{id:"pitch-with-scale-quantisation"},"Pitch, with scale quantisation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- change notes per octave on each cycle\nd1 $ pitch "0 10 8 1" # scale "<12 31 8>" # x 0\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pitch")," allows a pattern of note values. ",(0,r.kt)("inlineCode",{parentName:"p"},"scale")," sets the amount of notes per octave. The pitch and scale values will be converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"1v/octave"),". Both ",(0,r.kt)("inlineCode",{parentName:"p"},"pitch")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scale")," can be sequenced for some microtonal madness..."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"glide")," accepts a strengh (in semitones, relative to scale), a rate (in step length)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- glide to pitch\nd1 $ pitch "0 10 8 1" # scale "<12 31 8>" # x 0 # glide 12 0.5\n')),(0,r.kt)("h3",{id:"gate"},"Gate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- sequence gate inputs\nd2 $ gate "0 1 0 0 1 1 1" # x 1\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gate")," will take a 0/1 pattern and return +5v signals for the ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," values. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," if you need a -5v."),(0,r.kt)("h3",{id:"voltage-automation"},"Voltage automation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- create stepped automation\nd3 $ volt "1 0.2 0.5 -0.2" # x 2\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"volt")," will allow you to sequence voltages however you like."),(0,r.kt)("h3",{id:"ar-attack--release"},"AR (Attack + Release)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- create ar\nd4 $ trig "1 ~ 1 1" # ar 0 0.5 # x 3\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- patternise adsr\nd5 $ trig "1 ~ 1 1" # ar (range 0.1 1 sine) "<0 0.4>" # x 4\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"trig")," will create a trigger sequence, ",(0,r.kt)("inlineCode",{parentName:"p"},"ar")," will generate a new envelope for each trigger. Both of these can be sequenced."),(0,r.kt)("p",null,"In the second example, the attack time would grow for each triggered envelope over course of the cycle."),(0,r.kt)("h3",{id:"clock"},"Clock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- clock cv output\nd6 $ clock # x 5\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clock")," will output a clock cv, which matches the bpm of your tidal project. You can ",(0,r.kt)("inlineCode",{parentName:"p"},"slow")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"fast")," this as well."))}u.isMDXComponent=!0}}]);