"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={title:"Contributing tests",permalink:"wiki/Contributing_tests/",layout:"wiki",tags:["Reference"]},i=void 0,s={unversionedId:"resource/Contributing_tests",id:"resource/Contributing_tests",title:"Contributing tests",description:"Unit tests are small bits of code that check that a function works as",source:"@site/docs/resource/Contributing_tests.md",sourceDirName:"resource",slug:"/resource/Contributing_tests",permalink:"/docs/resource/Contributing_tests",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/resource/Contributing_tests.md",tags:[{label:"Reference",permalink:"/docs/tags/reference"}],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1675657763,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Contributing tests",permalink:"wiki/Contributing_tests/",layout:"wiki",tags:["Reference"]},sidebar:"community",previous:{title:"Friends and relations",permalink:"/docs/resource/Friends_and_relations"},next:{title:"Academic publications",permalink:"/docs/resource/Academic_publications"}},l={},c=[{value:"Running tests",id:"running-tests",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unit tests are small bits of code that check that a function works as\nexpected. You might want to contribute a test for one or more reasons,\ne.g."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To demonstrate a bug or other unexpected behaviour in a clear way"),(0,a.kt)("li",{parentName:"ul"},"To explain how a new feature works"),(0,a.kt)("li",{parentName:"ul"},"Because there's a feature you really like and you don't want it to\nbreak in the futrue"),(0,a.kt)("li",{parentName:"ul"},"To generally help make Tidal more resilient")),(0,a.kt)("h1",{id:"test-modules"},"Test modules"),(0,a.kt)("p",null,"You can browse the test modules that already exist here:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/tree/master/test/Sound/Tidal"},"https://github.com/tidalcycles/Tidal/tree/master/test/Sound/Tidal")),(0,a.kt)("p",null,"The test modules are named after the modules they are testing, e.g.\n/test/Sound/Tidal/UITest.hs has tests for Sound.Tidal.UITest. Here's an\nexample from that file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    describe "euclidFull" $ do\n      it "can match against silence" $ do\n        compareP (Arc 0 1)\n          (euclidFull 3 8 "bd" silence)\n          ("bd(3,8)" :: Pattern String)\n')),(0,a.kt)("p",null,"This tests that ",(0,a.kt)("a",{parentName:"p",href:"euclidFull",title:"wikilink"},"euclidFull")," works OK if its\nfourth parameter was silence. There was one a bug where it didn't, and\nthe existence of this test means that if this bug comes back, we'll know\nabout it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"compareP\n")),(0,a.kt)("p",null,"is for comparing two patterns. It takes three parameters - an Arc with a\nstart and stop time -- in this case 0 and 1, which means that all the\nevents in the first cycle (i.e, between time position 0 and 1) are\ncompared. Then come the two patterns that are to be compared."),(0,a.kt)("p",null,"You'll also see"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"comparePD\n")),(0,a.kt)("p",null,"-"," the final 'D' stands for ",(0,a.kt)("em",{parentName:"p"},"defragment"),". There are cases where a\nfunction event gets split into two parts, and"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"comparePD\n")),(0,a.kt)("p",null,"simply joins such events back together before comparing the patterns\nwith each other."),(0,a.kt)("h1",{id:"contributing-tests"},"Contributing tests"),(0,a.kt)("p",null,"To contribute a test, you'll have to fork the Tidal project. You'll need\nto create a (free!) account on github.com if you don't already have one,\nthen go to the ","[","tidal project ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/tidal"},"https://github.com/tidalcycles/tidal"),"]","\nand click the 'fork' button."),(0,a.kt)("p",null,"Once you've done that, you'll need to 'clone' your new fork to your\ncomputer, and set that folder to be your current working directory. You\ncan do that with this command, ",(0,a.kt)("em",{parentName:"p"},'being sure to replace "(your username)"\nin the above with whatever your username is on github.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/(your username)/Tidal/\ncd Tidal\n")),(0,a.kt)("h2",{id:"running-tests"},"Running tests"),(0,a.kt)("p",null,"Before you do anything else, it's a good idea run the tests to make sure\neverything completes OK. You can do that with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cabal test\n")),(0,a.kt)("h1",{id:"writing-and-contributing-your-test"},"Writing and contributing your test"),(0,a.kt)("p",null,"It's now time to make a 'branch' for creating your test, and then send\nit to the Tidal maintainers as a 'pull request'. This is general\ndevelopment stuff, so we'll ",(0,a.kt)("a",{parentName:"p",href:"https://codeburst.io/a-step-by-step-guide-to-making-your-first-github-contribution-5302260a2940"},"defer to this handy\nguide"),'.\nYou can start with step 3 - "create a branch".'))}p.isMDXComponent=!0}}]);