"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9958],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>k});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),i=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=i(e.components);return t.createElement(p.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=i(n),m=l,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?t.createElement(k,s(s({ref:a},d),{},{components:n})):t.createElement(k,s({ref:a},d))}));function k(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var i=2;i<r;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6946:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var t=n(3117),l=(n(7294),n(3905));const r={title:"Workshop (0.9.10)",id:"workshop"},s=void 0,o={unversionedId:"reference/workshop",id:"reference/workshop",title:"Workshop (0.9.10)",description:"----",source:"@site/docs/reference/workshop.md",sourceDirName:"reference",slug:"/reference/workshop",permalink:"/docs/reference/workshop",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/workshop.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1674853655,formattedLastUpdatedAt:"Jan 27, 2023",frontMatter:{title:"Workshop (0.9.10)",id:"workshop"}},p={},i=[{value:"Getting started",id:"getting-started",level:2},{value:"Notes in Haskell",id:"notes-in-haskell",level:3},{value:"Basic patterns",id:"basic-patterns",level:2},{value:"Default sample library",id:"default-sample-library",level:3},{value:"More variety",id:"more-variety",level:3},{value:"Effects",id:"effects",level:2},{value:"Learn more about effects",id:"learn-more-about-effects",level:3},{value:"Transforming patterns",id:"transforming-patterns",level:2},{value:"Slow, fast and hurry",id:"slow-fast-and-hurry",level:3},{value:"Reorganise patterns",id:"reorganise-patterns",level:3},{value:"Even further into transformations",id:"even-further-into-transformations",level:3},{value:"Different kind of patterns",id:"different-kind-of-patterns",level:2},{value:"Cyclic / repetitive",id:"cyclic--repetitive",level:3},{value:"Symmetry",id:"symmetry",level:3},{value:"Polymetric / polyrhythmic sequences",id:"polymetric--polyrhythmic-sequences",level:3},{value:"Euclidean rhythm/Bjorklund",id:"euclidean-rhythmbjorklund",level:3},{value:"Randomness",id:"randomness",level:2},{value:"Manipulating Samples",id:"manipulating-samples",level:2}],d={toc:i};function u(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This tutorial is based on Tidalcycles version 0.9.10. Some of the latest features (post 1.0.0) will not be presented. Major features and changes were added post 1.0. This tutorial should still work as an introduction to Tidal but might not present the most recent and ",(0,l.kt)("em",{parentName:"p"},"exciting")," features.")),(0,l.kt)("p",null,"Welcome to this ",(0,l.kt)("strong",{parentName:"p"},"Tidal Cycles")," tutorial. This is designed to be used as a worksheet during hands-on beginner/mixed workshops, and is based on Tidalcycles version ",(0,l.kt)("inlineCode",{parentName:"p"},"0.9.10"),". By Lucy Cheesman, adapted to wiki format by Alex McLean."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("p",null,"Once everything is installed, follow the following startup procedure\neach time."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Launch ",(0,l.kt)("strong",{parentName:"li"},"SuperDirt")," - In ",(0,l.kt)("strong",{parentName:"li"},"SuperCollider"),", type ",(0,l.kt)("inlineCode",{parentName:"li"},"'SuperDirt.start'")," and run\nthe code by holding down ",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl")," and pressing ",(0,l.kt)("inlineCode",{parentName:"li"},"Enter")," (while your\ncursor is on the same line as the code)."),(0,l.kt)("li",{parentName:"ol"},"Launch ",(0,l.kt)("strong",{parentName:"li"},"Tidal Cycles")," - In Atom, start a new file and save it with a ",(0,l.kt)("inlineCode",{parentName:"li"},".tidal")," extension (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"examples.tidal"),").")),(0,l.kt)("h3",{id:"notes-in-haskell"},"Notes in Haskell"),(0,l.kt)("p",null,"Haskell is using double dashes ",(0,l.kt)("inlineCode",{parentName:"p"},"--")," at the beginning of a line to denotate a comment. A comment is a piece of code that will be ignored by the interpreter. You can use comments to take notes in your code. You can also use comments to ignore a specific line or pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'\u2013- I\'m a comment\n\n-- this pattern will not play\n-- d1 $\xa0s "bd hh sn hh"\n\n-- "fast 2" will be ignored\nd1\n--  $\xa0fast 2\n  $ s "hh*8"\n\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"basic-patterns"},"Basic patterns"),(0,l.kt)("p",null,"The basic format for making sound in Tidal looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum"\n')),(0,l.kt)("p",null,"You can stop making a sound using ",(0,l.kt)("inlineCode",{parentName:"p"},"silence"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"d1 $ silence\n")),(0,l.kt)("p",null,"Pick a different sound from the same set, with ",(0,l.kt)("inlineCode",{parentName:"p"},":"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum:1"\n')),(0,l.kt)("h3",{id:"default-sample-library"},"Default sample library"),(0,l.kt)("p",null,"Some of the samples which come with ",(0,l.kt)("strong",{parentName:"p"},"Tidal")," are listed below. Try some out!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"flick sid can metal future gabba sn mouth co gretsch mt arp h cp\ncr newnotes bass hc tabla bass0 hh bass1 bass2 oc bass3 ho odx\ndiphone2 house off ht tink perc bd industrial pluck trump printshort\njazz voodoo birds3 procshort blip drum jvbass psr wobble drumtraks koy\nrave bottle kurt latibro rm sax lighter lt arpy feel less stab ul\n")),(0,l.kt)("p",null,"You can see what other sounds there are (or add your own) by looking in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dirt-Samples")," folder. You can find it via the ",(0,l.kt)("inlineCode",{parentName:"p"},"SuperCollider")," menu: ",(0,l.kt)("inlineCode",{parentName:"p"},"'File > Open user support directory > downloaded-quarks > Dirt-Samples'"),". Make a sequence:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd hh sn hh"\n')),(0,l.kt)("p",null,"The more steps in the sequence, the faster it goes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd bd hh bd sn bd hh bd"\n')),(0,l.kt)("p",null,"This is because of the way ",(0,l.kt)("strong",{parentName:"p"},"Tidal")," handles time. There is a universal ",(0,l.kt)("inlineCode",{parentName:"p"},"\u2018cycle\u2019")," (sort of like a musical 'bar') which is always running. ",(0,l.kt)("strong",{parentName:"p"},"Tidal")," will play all of the sounds between the speech marks in one cycle, unless we tell it not to (we\u2019ll learn how to do that later). You\u2019ll also notice ",(0,l.kt)("inlineCode",{parentName:"p"},"Tidal")," will space the sounds out evenly within the cycle Which means we can end up with polyrhythmic structures (more on those later). We can change the length of the cycle using ",(0,l.kt)("inlineCode",{parentName:"p"},"setcps")," (where ",(0,l.kt)("inlineCode",{parentName:"p"},"cps")," stands for cycles per second) - this is a bit like bpm (beats per minute)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"setcps 0.6\n")),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"d1, d2, d3...d9")," to play multiple sequences at the same time:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d2 $ sound "sn sn:2 sn bd sn"\n')),(0,l.kt)("p",null,"You can stop all the running patterns with ",(0,l.kt)("inlineCode",{parentName:"p"},"hush"),"."),(0,l.kt)("p",null,"You can pause everything by changing the cycle length to a negative number (remember to put negative numbers in brackets)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"setcps (-1)\n")),(0,l.kt)("p",null,"Start it up again with a positive number"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"setcps 0.6\n")),(0,l.kt)("p",null,"Or you can ",(0,l.kt)("inlineCode",{parentName:"p"},"solo")," one channel:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy cp arpy:2"\n\nd2 $ sound "sn sn:2 bd sn"\n\nsolo 2\n\n-- now only the second pattern will be playing\n\nunsolo 2\n\n-- now both will be playing, again\n')),(0,l.kt)("h3",{id:"more-variety"},"More variety"),(0,l.kt)("p",null,"Let's add some more variety to our sequences:"),(0,l.kt)("p",null,"Add a silence/rest with ",(0,l.kt)("inlineCode",{parentName:"p"},"~"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd ~ sn:3 bd sn:5 ~ bd:2 sn:2"\n')),(0,l.kt)("p",null,"Fit a subsequence into a step with square brackets:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd [bd cp] bd bd"\n')),(0,l.kt)("p",null,"This can make for flexible time signatures:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "[bd bd sn:5] [bd sn:3]"\n')),(0,l.kt)("p",null,"You can put subsequences inside subsequences:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "[[bd bd] bd sn:5] [bd sn:3]"\n')),(0,l.kt)("p",null,"Keep going.."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "[[bd [bd bd bd bd]] bd sn:5] [bd sn:3]"\n')),(0,l.kt)("p",null,"You can repeat a step with ",(0,l.kt)("inlineCode",{parentName:"p"},"*"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd sd*2"\n')),(0,l.kt)("p",null,"This works with subsequences too:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd [sd cp]*2"\n')),(0,l.kt)("p",null,"Or you can do the opposite using ",(0,l.kt)("em",{parentName:"p"},"/"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd sn/2"\n\nd1 $ sound "bd [sn cp]/2"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"*")," works by 'speeding up' a step to play it multiple times. ",(0,l.kt)("inlineCode",{parentName:"p"},"/")," works by 'slowing it down'."),(0,l.kt)("p",null,"We can also schedule patterns across cycles using ",(0,l.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,l.kt)("inlineCode",{parentName:"p"},">"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd <sd cp arpy>"\n\nd1 $ sound "<bd sn> <sd [cp cp]> <bd [cp cp]>"\n')),(0,l.kt)("h2",{id:"effects"},"Effects"),(0,l.kt)("p",null,"Tidal has lots of effects we can use to change the way things sound. ",(0,l.kt)("inlineCode",{parentName:"p"},"vowel")," is a filter which adds a vowel sound -- try ",(0,l.kt)("inlineCode",{parentName:"p"},"a, e, i, o")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum drum drum drum" # vowel "a"\n')),(0,l.kt)("p",null,"We create patterns of effects in much the same way we create patterns of sounds. We call these effect and sound patterns 'control patterns'. So:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o e e"\n')),(0,l.kt)("p",null,"Remember that we can use ",(0,l.kt)("inlineCode",{parentName:"p"},'"<>"')," to schedule across cycles:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum drum drum drum" # vowel "<a o e e>"\n')),(0,l.kt)("p",null,"You can add a non-vowel letter to pause the ",(0,l.kt)("inlineCode",{parentName:"p"},"vowel")," effect:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o p p"\n')),(0,l.kt)("p",null,"Tidal does its best to map patterns across to one another:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o e"\n')),(0,l.kt)("p",null,"The structure comes from the left - try swapping the parameters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ vowel "a o ~ i" # sound "drum"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gain")," changes the volume of different sounds:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd hh sn:1 hh sn:1 hh" # gain "1 0.7 0.5"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"speed")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"note")," are used for pitching samples. ",(0,l.kt)("inlineCode",{parentName:"p"},"speed")," affects the speed of playback (e.g. 2 = up an octave):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # speed "1 1.5 2 0.5"\n')),(0,l.kt)("p",null,"Or we can take the pattern from the speed parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ speed "1 2 4" # sound "jungbass:6"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"note")," pitches the sample up in semitones (e.g. 12 = up an octave):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ up "0 ~ 12 24" # sound "jungbass:6"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pan")," allows us to create stereo effects (0 = left, 0.5 = middle, 1 = right):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # pan "0 0.5 1"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"shape")," adds distortion (but be careful - it also makes the sound much louder):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "kurt:4 kurt:4" # shape "0 0.78" # gain "0.7"\n')),(0,l.kt)("h3",{id:"learn-more-about-effects"},"Learn more about effects"),(0,l.kt)("p",null,"You can take a look at the ",(0,l.kt)("inlineCode",{parentName:"p"},"Basics > Effects")," section to learn more about effects and to see the complete list of effects. We also suggest you to take a look at the ",(0,l.kt)("inlineCode",{parentName:"p"},"Basics > Oscillators")," section to see how you can apply an LFO to some of these effects."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"transforming-patterns"},"Transforming patterns"),(0,l.kt)("p",null,"We can start to make much more complex patterns using transformations. Using functions like ",(0,l.kt)("inlineCode",{parentName:"p"},"slow")," you can start to transcend the cycle. ",(0,l.kt)("inlineCode",{parentName:"p"},"slow")," stretches the pattern over more cycles:"),(0,l.kt)("h3",{id:"slow-fast-and-hurry"},"Slow, fast and hurry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy arpy:1 arpy:2 arpy:3"\n\nd1 $ slow 2 $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fast")," squashes the pattern into less than one cycle. You might also see people writing ",(0,l.kt)("inlineCode",{parentName:"p"},"density")," - it\u2019s the same thing. Take a look:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'fast 0.5 is the same as slow 2!\n\nd1 $ fast 2 $ sound "arpy arpy:1 arpy:2 arpy:3"\n\nd1 $ fast 0.5 $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"hurry")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"fast"),", but also applies a speed transformation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy arpy arpy:1 arpy:2"\nd1 $ hurry 2 $ sound "arpy arpy arpy:1 arpy:2"\nd1 $ hurry 0.5 $ sound "arpy arpy arpy:1 arpy:2"\n')),(0,l.kt)("h3",{id:"reorganise-patterns"},"Reorganise patterns"),(0,l.kt)("p",null,"You can reverse a pattern with ",(0,l.kt)("inlineCode",{parentName:"p"},"rev"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ rev $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),(0,l.kt)("p",null,"Or play it forwards and then backwards with ",(0,l.kt)("inlineCode",{parentName:"p"},"palindrome"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ palindrome $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"iter")," starts the pattern at a different point each cycle, shifting it the given number of times until it gets back to where it started:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ iter 4 $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"every")," allows us to schedule transformations or effects in different cycles. The following example will play twice as fast every four cycles: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 4 (fast 2) $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),(0,l.kt)("p",null,"... or you could schedule an effect in the same way, using ",(0,l.kt)("inlineCode",{parentName:"p"},"#"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 4 (# vowel "a o") $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jux")," (short for ",(0,l.kt)("inlineCode",{parentName:"p"},"juxtapose"),") takes a transformation or an effect and plays it in one speaker the original pattern plays in the other speaker:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy arpy:1 arpy:2 arpy:3"\nd1 $ jux (rev) $ sound "arpy arpy:1 arpy:2 arpy:3"\nd1 $ jux (hurry 2) $ sound "arpy arpy arpy:1 arpy:2"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chunk")," applies a transformation or an effect to a different part of the pattern each time. For example with 4 as a parameter, it will step through each quarter of the cycle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chunk 4 (hurry 2) $ sound  "arpy arpy:1 arpy:2 arpy:3"\nd1 $ chunk 4 (# speed 2) $ sound  "alphabet:0 alphabet:1 alphabet:2 alphabet:3"\n')),(0,l.kt)("h3",{id:"even-further-into-transformations"},"Even further into transformations"),(0,l.kt)("p",null,"More than one transformation is possible! You can chain them together using ",(0,l.kt)("inlineCode",{parentName:"p"},"."),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux (rev . (slow 1.5)) $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),(0,l.kt)("p",null,"Remember that (almost) everything is a pattern so we can apply these transformations to our effects too:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # note "1 [3 5] 7"\nd1 $ sound "jvbass [jvbass jvbass] jvbass ~" # iter 3 (note "1 [3 5] 7")\n')),(0,l.kt)("p",null,"What about slowing down or scaling (using ",(0,l.kt)("inlineCode",{parentName:"p"},"scale"),") ",(0,l.kt)("inlineCode",{parentName:"p"},"sine")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"saw"),"?"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"different-kind-of-patterns"},"Different kind of patterns"),(0,l.kt)("p",null,"What is pattern, anyway? Let's think about some different kinds of pattern and how ",(0,l.kt)("strong",{parentName:"p"},"Tidal")," can represent them."),(0,l.kt)("h3",{id:"cyclic--repetitive"},"Cyclic / repetitive"),(0,l.kt)("p",null,"We can use ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," to choose samples from a folder, this allows us to apply patterns there too:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "0 1 2 3" # sound "arpy"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"run")," is a short way of writing out sequential patterns:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (run 4) # sound "arpy"\n')),(0,l.kt)("p",null,"or we can use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "0 .. 3" # sound "arpy"\n')),(0,l.kt)("h3",{id:"symmetry"},"Symmetry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ n "0 1 2 3 3 2 1 0" # sound "arpy"\nd1 $ palindrome $ n (run 4) # sound "arpy"\n')),(0,l.kt)("h3",{id:"polymetric--polyrhythmic-sequences"},"Polymetric / polyrhythmic sequences"),(0,l.kt)("p",null,"Play two subsequences at once by using square brackets (sort of like one big subsequence!) separating with a comma:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"\n')),(0,l.kt)("p",null,"If you use curly brackets instead of square you get a different effect. With square brackets both halves of the sequence are fitted into the cycle (polyrhythm). With curly brackets the pulse is set by the left hand pattern. The right hand pattern can then overlap (or underlap!) (polymeter):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"\nd1 $ sound "{voodoo voodoo:3, arpy arpy:4 arpy:2}"\nd1 $ sound "[drum bd hh bd, can can:2 can:3 can:4 can:2]"\nd1 $ sound "{drum bd hh bd, can can:2 can:3 can:4 can:2}"\nd1 $ sound "[bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5]"\nd1 $ sound "{bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5}"\n')),(0,l.kt)("h3",{id:"euclidean-rhythmbjorklund"},"Euclidean rhythm/Bjorklund"),(0,l.kt)("p",null,"If you give two numbers in brackets after an element in a pattern, then ",(0,l.kt)("strong",{parentName:"p"},"Tidal")," will try to distribute the first number of sounds equally across the second number of steps:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd(5,8)"\n')),(0,l.kt)("p",null,"You can use this notation within a single element of a pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd(3,8) sn*2"\nd1 $ sound "bd(3,8) sn(5,8)"\n')),(0,l.kt)("p",null,"You can also add a third parameter, which \u2018rotates\u2019 the pattern so it starts on a different step:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd(5,8,2)"\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"randomness"},"Randomness"),(0,l.kt)("p",null,"Randomness can help us quickly introduce character and variation into our patterns. ",(0,l.kt)("inlineCode",{parentName:"p"},"sometimes")," works a bit like ",(0,l.kt)("inlineCode",{parentName:"p"},"every"),", but instead of happening after a set period, changes have a random chance of appearing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sometimes (# speed "2") $ sound "drum*8"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"often")," (75%) works like ",(0,l.kt)("inlineCode",{parentName:"p"},"sometimes")," (50%) but happens more often:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ often (# speed "2") $ sound "drum*8"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"irand")," generates a random integer up to the number specified. (e.g. to play a random sample):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy(3,8)" # n (irand 16)\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rand")," generates a random decimal between ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "tink*16" # gain rand\n')),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"degradeBy")," to remove random elements. The number indicates how likely a sample is to play:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ degradeBy 0.2 $ sound "tink*16"\n')),(0,l.kt)("p",null,"(",(0,l.kt)("inlineCode",{parentName:"p"},"degrade")," on its own is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"degradeBy 0.5"),")"),(0,l.kt)("p",null,"Or, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"?")," to remove sounds with a 50% likelihood:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd sn:2? bd sn?"\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"manipulating-samples"},"Manipulating Samples"),(0,l.kt)("p",null,"So far we've just used short samples. Longer samples can cause us some problems if we\u2019re not careful. Let\u2019s see what happens with a long sample:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bev"\n-- wait a bit, then..\nhush\n')),(0,l.kt)("p",null,"As you can hear, ",(0,l.kt)("strong",{parentName:"p"},"Tidal")," will keep triggering the sample each cycle, even if it\u2019s very long. Even if you stop the pattern playing, you will still need to listen while the samples play out. You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"cut")," to truncate the sample when the next one is triggered:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bev" # cut 1\n')),(0,l.kt)("p",null,"The number in ",(0,l.kt)("inlineCode",{parentName:"p"},"cut")," define a group, so you can play with interference across different patterns:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bev ~" # cut 1\nd2 $ slow 4 $ sound "pebbles ~" # cut 1\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"legato")," also truncates samples, but using a fixed length:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bev ~ bev ~" # legato 1\n')),(0,l.kt)("p",null,"We can also ",(0,l.kt)("inlineCode",{parentName:"p"},"chop")," samples for a ",(0,l.kt)("em",{parentName:"p"},"granular synthesis")," effect:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chop 32 $ sound "bev"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"striate")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"chop")," but organises the playback in a different way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 4 $ chop 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"\nd1 $ slow 4 $ striate 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"randslice")," chops the sample into pieces and then plays back a random one each cycle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ randslice 32 $ sound "bev"\n')),(0,l.kt)("p",null,"We can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"loopAt")," to fit samples to a set number of cycles:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ loopAt 8 $ sound "bev"\n')),(0,l.kt)("p",null,"As always we can add patterns and transformations to these functions, or combine them for interesting effects:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ loopAt "<8 4 16>" $ chop 64 $  sound "bev*4" # cut 1\nd1 $ rev $ loopAt 8 $ chop 128 $ sound "bev"\n')))}u.isMDXComponent=!0}}]);