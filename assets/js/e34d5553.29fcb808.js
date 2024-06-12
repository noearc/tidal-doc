"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(3117),i=(n(7294),n(3905));const o={title:"Multi-User Tidal",id:"multiuser-tidal"},r=void 0,l={unversionedId:"configuration/multiuser-tidal",id:"configuration/multiuser-tidal",title:"Multi-User Tidal",description:"-----",source:"@site/docs/configuration/Multi-User Tidal.md",sourceDirName:"configuration",slug:"/configuration/multiuser-tidal",permalink:"/docs/configuration/multiuser-tidal",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/Multi-User Tidal.md",tags:[],version:"current",lastUpdatedAt:1718168008,formattedLastUpdatedAt:"Jun 12, 2024",frontMatter:{title:"Multi-User Tidal",id:"multiuser-tidal"},sidebar:"docs",previous:{title:"Sublime Text",permalink:"/docs/getting-started/editor/Sublime_Text"},next:{title:"The Boot File",permalink:"/docs/configuration/boot-tidal"}},s={},d=[{value:"Shared Editors",id:"shared-editors",level:2},{value:"Troop",id:"troop",level:3},{value:"Extramuros",id:"extramuros",level:3},{value:"Estuary",id:"estuary",level:3},{value:"Estuary online",id:"estuary-online",level:4},{value:"Network tempo sharing",id:"network-tempo-sharing",level:2},{value:"1) Sync computer clocks",id:"1-sync-computer-clocks",level:3},{value:"2) Start Tidal on your computer",id:"2-start-tidal-on-your-computer",level:3},{value:"3) Sync the other computers to the clock server",id:"3-sync-the-other-computers-to-the-clock-server",level:3},{value:"4) Setting CPS",id:"4-setting-cps",level:3},{value:"5) adjust latency",id:"5-adjust-latency",level:3},{value:"Link Protocol Synchronization",id:"link-protocol-synchronization",level:2},{value:"Native Link Protocol Synchronization",id:"native-link-protocol-synchronization",level:2},{value:"Adjusting Quantum and Cycles per Beat",id:"adjusting-quantum-and-cycles-per-beat",level:3},{value:"Adjusting latency",id:"adjusting-latency",level:3},{value:"How to adjust latency",id:"how-to-adjust-latency",level:4},{value:"Disabling Link synchronization",id:"disabling-link-synchronization",level:3},{value:"Tidal instances don&#39;t automatically have the same cycle",id:"tidal-instances-dont-automatically-have-the-same-cycle",level:3},{value:"Link Protocol Synchronization using Carabiner",id:"link-protocol-synchronization-using-carabiner",level:2},{value:"ESPGrid tempo sharing",id:"espgrid-tempo-sharing",level:2},{value:"1) Start EspGrid/espgridd",id:"1-start-espgridespgridd",level:3},{value:"2) Start Tidal and SuperDirt",id:"2-start-tidal-and-superdirt",level:3},{value:"3) Sync with EspGrid",id:"3-sync-with-espgrid",level:3},{value:"4) Change the tempo",id:"4-change-the-tempo",level:3},{value:"CPS and BPM",id:"cps-and-bpm",level:3},{value:"Understanding the Link command",id:"understanding-the-link-command",level:3}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"There are different ways to use Tidal with your friends."),(0,i.kt)("h2",{id:"shared-editors"},"Shared Editors"),(0,i.kt)("h3",{id:"troop"},"Troop"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"troop",src:n(6331).Z,width:"993",height:"622"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Qirky/Troop"},"Troop")," is described by it author, Ryan Kirkbride (",(0,i.kt)("inlineCode",{parentName:"p"},"Qirky"),"), as ",(0,i.kt)("em",{parentName:"p"},'"a real-time collaborative tool that enables group live coding within the same document across multiple computers."')," Troop is a preconfigured text editor for collaborative live-coding on a network. Troop is written in ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/"},"Python 3"),". You will need to install Python and ",(0,i.kt)("inlineCode",{parentName:"p"},"tkinter")," for your specific OS/distribution. Linux users might need to install a few more dependencies, but it should be straightforward."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Note that you will also need to install ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider")," and ",(0,i.kt)("strong",{parentName:"p"},"Tidal Cycles")," to use ",(0,i.kt)("strong",{parentName:"p"},"Troop")," on your computer. ")),(0,i.kt)("p",null,"For the installation / configuration process, please report to the README on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Qirky/Troop"},"GitHub repository"),"."),(0,i.kt)("h3",{id:"extramuros"},"Extramuros"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://iclc.toplap.org/2015/html/extramuros-screenshot.png",alt:"extramuros"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dktr0/extramuros"},"Extramuros"),", programmed by David Ogborn (",(0,i.kt)("inlineCode",{parentName:"p"},"dktr0"),"), is an optimized collaborative environment for live coding. The text editor itself is embedded in a web browser. A server, receiving all the incoming code/data from the users, is connected to the interpreter. The editor can be divided in many zones, each one being an interpreter. Head to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dktr0/extramuros"},"GitHub Repository")," page to learn more about the installation / configuration process."),(0,i.kt)("h3",{id:"estuary"},"Estuary"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"estuary",src:n(5789).Z,width:"1913",height:"975"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dktr0/estuary"},"Estuary"),", also programmed by David Ogborn(",(0,i.kt)("inlineCode",{parentName:"p"},"dktr0"),") is a collaborative live coding environment with some components taken and extended from ",(0,i.kt)("a",{parentName:"p",href:"###Extramuros"},"Extramuros"),". Estuary is embedding ",(0,i.kt)("inlineCode",{parentName:"p"},"minitidal"),", a subset of Tidal Cycles that works directly (including sound!) in your web browser. No installation is required."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/chrome/"},"Chrome")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.chromium.org/"},"Chromium")," is ",(0,i.kt)("strong",{parentName:"p"},"highly recommended")," for a better user experience."),(0,i.kt)("h4",{id:"estuary-online"},"Estuary online"),(0,i.kt)("p",null,"There is a ",(0,i.kt)("a",{parentName:"p",href:"https://estuary.mcmaster.ca"},"server")," running 24/7 on the McMaster University servers, on a server belonging to the research group behind the project. It means that you can try ",(0,i.kt)("strong",{parentName:"p"},"Tidal Cycles")," online with your friends without having to install anything!"),(0,i.kt)("h2",{id:"network-tempo-sharing"},"Network tempo sharing"),(0,i.kt)("p",null,'Network tempo sharing is one way of synchronizing Tidal to other instances running on different computers. This approach is more complex and "hands-on" than the ones described above. They might be better suited to more advanced / technically skilled users. '),(0,i.kt)("p",null,"Note: This method does not work as of Tidal 1.9. Consider using ",(0,i.kt)("a",{parentName:"p",href:"#native-link-protocol-synchronization"},"Native Link Protocol Synchronization")," instead."),(0,i.kt)("h3",{id:"1-sync-computer-clocks"},"1) Sync computer clocks"),(0,i.kt)("p",null,"Ensure that the system clocks of all the computers are already in sync. This can be done by making sure the computers are ",(0,i.kt)("em",{parentName:"p"},"syncing with a network clock via system settings"),", but this isn't ideal. Under the hood that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"ntpd"),", which is designed for slowly bringing computers into synchrony over the internet, not for quickly getting computers in sync locally. "),(0,i.kt)("p",null,"Instead, using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ptpd/ptpd"},"ptpd")," is recommended. "),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/ptpd/ptpd"},"ptpd")," is available for Linux and MacOS only.")),(0,i.kt)("h3",{id:"2-start-tidal-on-your-computer"},"2) Start Tidal on your computer"),(0,i.kt)("p",null,"Nominate ",(0,i.kt)("strong",{parentName:"p"},"one")," computer as the ",(0,i.kt)("inlineCode",{parentName:"p"},"clock server")," and start Tidal there. You will need to know the network address of this computer on the local network. You should be able to find this in your system settings. "),(0,i.kt)("h3",{id:"3-sync-the-other-computers-to-the-clock-server"},"3) Sync the other computers to the clock server"),(0,i.kt)("p",null,"Change your Tidal Boot configuration on the other computers to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"cTempoAddr")," option to the IP address of the clock server. For example, if the clock server had the IP address ",(0,i.kt)("inlineCode",{parentName:"p"},"'192.168.0.10'"),", your ",(0,i.kt)("inlineCode",{parentName:"p"},"startTidal")," line would look something like this: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'tidal <- startTidal (superdirtTarget {oLatency = 0.02}) (defaultConfig {cFrameTimespan = 1/20, cTempoAddr = "192.168.0.10"})\n')),(0,i.kt)("h3",{id:"4-setting-cps"},"4) Setting CPS"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"setcps")," on one of the computers to get all the computers in sync (g.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"setcps 1.1"),"). "),(0,i.kt)("h3",{id:"5-adjust-latency"},"5) adjust latency"),(0,i.kt)("p",null,"You will probably find that your computers are still 'out of phase': running at the same cps, but with an offset. Set the cps low (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"setcps 0.25"),"), run a simple pattern on the clock server (",(0,i.kt)("inlineCode",{parentName:"p"},'d1 $ s "cp"'),") and one of the other computers, and use nudge to find the offset (",(0,i.kt)("inlineCode",{parentName:"p"},'d1 $ s "cp" # nudge 0.05'),")."),(0,i.kt)("p",null,"Once you know the right offset you can make it permanent by adding it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"oLatency")," value in your configuration. As long as you use the same audio device and so on, you shouldn't have to adjust it again."),(0,i.kt)("p",null,"If you find you have to nudge backwards (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'d1 $ s "cp" # nudge (-0.05)'),") this will only work up to a certain point. It's better to add latency to the clock server in that case. "),(0,i.kt)("h2",{id:"link-protocol-synchronization"},"Link Protocol Synchronization"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ableton.com/en/link/"},"Link")," is a protocol for\nsynchronizing musical gear, software or hardware. Link will\nsynchronize all the devices found on a local network together. Timing\nand tempo will be shared by all clients. It was originally created by\na music software company called Ableton, but they shared it with the\nopen source community and it doesn't require any of their software to\nuse."),(0,i.kt)("h2",{id:"native-link-protocol-synchronization"},"Native Link Protocol Synchronization"),(0,i.kt)("p",null,"Tidal version 1.9 directly integrates with Ableton Link.  Link\nSynchronization is enabled by default and Tidal will automatically\nconnect with other link-compatible applications on the same local\nnetwork, including other Tidal instances."),(0,i.kt)("h3",{id:"adjusting-quantum-and-cycles-per-beat"},"Adjusting Quantum and Cycles per Beat"),(0,i.kt)("p",null,"In addition to aligning beats, Link aligns bars / loop boundaries. Quoting ",(0,i.kt)("a",{parentName:"p",href:"http://ableton.github.io/link/"},"Link documentation"),' on Phase Synchronization: "In order to enable the desired bar and loop alignment, an application provides a quantum value to Link that specifies, in beats, the desired unit of phase synchronization. Link guarantees that session participants with the same quantum value will be phase aligned, meaning that if two participants have a 4 beat quantum, beat 3 on one participant\u2019s timeline could correspond to beat 11 on another\u2019s, but not beat 12."'),(0,i.kt)("p",null,"Quantum can be set in the Tidal Boot configuration, using the option ",(0,i.kt)("inlineCode",{parentName:"p"},"cQuantum"),". The default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"cQuantum")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),"."),(0,i.kt)("p",null,"In addition to quantum, Tidal lets you configure the number of beats there should be per cycle. This is done using the option ",(0,i.kt)("inlineCode",{parentName:"p"},"cBeatsPerCycle"),". The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),". In this case, a BPM (beats per minute) of ",(0,i.kt)("inlineCode",{parentName:"p"},"120")," corresponds to a CPS (cycles per second) of ",(0,i.kt)("inlineCode",{parentName:"p"},"120 / 60 / 4"),". See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/tutorial"},"Getting Started Tutorial")," for more information on converting between BPM and CPS."),(0,i.kt)("p",null,"It's possible to use any combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"cQuantum")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cBeatsPerCycle")," but some combinations might produce unintuitive results.\nWe advice you to start with ",(0,i.kt)("inlineCode",{parentName:"p"},"cQuantum = cBeatsPerCycle"),", but please share findings from your experiments!"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"tidal <- startTidal superdirtTarget (defaultConfig {cQuantum = 3, cBeatsPerCycle = 3})\n")),(0,i.kt)("h3",{id:"adjusting-latency"},"Adjusting latency"),(0,i.kt)("p",null,"You might find that even though tempo is synchronized, events don't quite line up. This happens because Ableton Link is not aware of the latencies of different devices or software."),(0,i.kt)("p",null,"Link uses the concept of a shared timeline where a timestamp corresponds to when the sound should hit the speakers. But it does not know how far ahead a sound should be produced to hit the speakers at the right time. Different devices or software will have different latency and we thus need to adjust for that. The document ",(0,i.kt)("a",{parentName:"p",href:"https://help.ableton.com/hc/en-us/articles/360003280139-How-to-adjust-sync-when-using-Link"},"How to adjust sync when using Link"),' says "Sometimes playback might be slightly offset, this is usually due to different playback latency of devices."'),(0,i.kt)("h4",{id:"how-to-adjust-latency"},"How to adjust latency"),(0,i.kt)("p",null,"The first step of adjusting latency is to find how much to adjust it.\nSet the cps low, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"setcps 0.25\n")),(0,i.kt)("p",null,"Run a simple pattern, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'d1 $ s "cp"\n')),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"/docs/patternlib/howtos/startpattern#nudge"},"nudge")," to\nfind the offset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'d1 $ s "cp" # nudge 0.05\n')),(0,i.kt)("p",null,"Once you know the right offset you can make it permanent by subtracting it from\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/boot-tidal#controlling-latency"},"oLatency value in your configuration"),". As\nlong as you use the same audio device and so on, you shouldn't have to\nadjust it again. We need to use subtraction because nudge moves events later in time whereas oLatency moves events earlier in time."),(0,i.kt)("p",null,"You might have to nudge backwards, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'d1 $ s "cp" # nudge (-0.05)\n')),(0,i.kt)("p",null,"This is equivalent to increasing oLatency. When nudging backwards a lot, or when olatency is very high, Tidal might start processing the event too late. This can be avoided by adjusting ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/boot-tidal#controlling-latency"},"cProcessAhead in your configuration")),(0,i.kt)("h3",{id:"disabling-link-synchronization"},"Disabling Link synchronization"),(0,i.kt)("p",null,"Tidal can be configured to not synchronize with other Link session."),(0,i.kt)("p",null,"Change your Tidal Boot configuration to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"cEnableLink")," option to False. As an example, your ",(0,i.kt)("inlineCode",{parentName:"p"},"startTidal")," line would look something like this: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"tidal <- startTidal superdirtTarget (defaultConfig {cEnableLink = False})\n")),(0,i.kt)("h3",{id:"tidal-instances-dont-automatically-have-the-same-cycle"},"Tidal instances don't automatically have the same cycle"),(0,i.kt)("p",null,"Link does not align beat/cycle values between session participants. Quoting ",(0,i.kt)("a",{parentName:"p",href:"http://ableton.github.io/link/"},"Link documentation"),' "For example, beat 1 on one participant\u2019s timeline might correspond to beat 3 or beat 4 on another\u2019s, but it cannot correspond to beat 3.5". If aligned cycles is desired, use ',(0,i.kt)("inlineCode",{parentName:"p"},"resetcycles")," in each Tidal instance simultaneously."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/issues/936"},"Automatic alignment of cycles in Link sessions - issue #936")," for further discussion."),(0,i.kt)("h2",{id:"link-protocol-synchronization-using-carabiner"},"Link Protocol Synchronization using Carabiner"),(0,i.kt)("p",null,"Tidal version 1.0.11 and 1.8 supports a rudimentary integration with Link, using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Deep-Symmetry/carabiner"},"Carabiner"),"."),(0,i.kt)("p",null,"To synchronise with the Link protocol, follow the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download and run Carabiner, which acts as a bridge between the Link protocol and software like Tidal.\nIf you are on a Mac OS X, Windows x64, Linux x64, or Raspberry Pi system, you can download the executable from the Carabiner ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/brunchboy/carabiner/releases"},"releases")," page. Other users can find instructions for compiling ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Deep-Symmetry/carabiner#building"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},"Have another link-compatible application to hand that you want to sync to. "),(0,i.kt)("li",{parentName:"ol"},"Start Tidal in your editor, and run the following to connect to carabiner:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"sock <- carabiner tidal 4 (-0.14)\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Run a Tidal pattern (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'d1 $\xa0(sound "cp bd bd bd")'),"), change the BPM in another link-compatible application and see if it works.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To change the BPM from tidal, you currently have to run e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'sendMsg sock "bpm 155"'))),(0,i.kt)("h2",{id:"espgrid-tempo-sharing"},"ESPGrid tempo sharing"),(0,i.kt)("p",null,"EspGrid is a language-neutral, separate piece of open source software for sharing tempo and other things in electronic ensembles. The software is available on ",(0,i.kt)("a",{parentName:"p",href:"https://dktr0.github.io/EspGrid/install.html"},"dktr0's website"),". It is made so that changing the tempo on one instance will change the tempo on all the instances. Every change is reflected everywhere."),(0,i.kt)("p",null,"Note: The ESPGrid integration was removed in Tidal 1.9 when Tidal started using Link for scheduling events."),(0,i.kt)("h3",{id:"1-start-espgridespgridd"},"1) Start EspGrid/espgridd"),(0,i.kt)("p",null,"Detailled instructions for installing, starting and configuring EspGrid/espgridd are available at the link mentionned above."),(0,i.kt)("h3",{id:"2-start-tidal-and-superdirt"},"2) Start Tidal and SuperDirt"),(0,i.kt)("p",null,"Start Tidal the usual way. "),(0,i.kt)("h3",{id:"3-sync-with-espgrid"},"3) Sync with EspGrid"),(0,i.kt)("p",null,"Just evaluate ",(0,i.kt)("inlineCode",{parentName:"p"},"espgrid tidal")," in your editor session."),(0,i.kt)("h3",{id:"4-change-the-tempo"},"4) Change the tempo"),(0,i.kt)("p",null,"You can change the tempo for everyone synced to EspGrid with ",(0,i.kt)("inlineCode",{parentName:"p"},"cpsEsp 0.5"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cpsEsp 0.75"),", etc. If others change the tempo (including via the OSX GUI ",(0,i.kt)("strong",{parentName:"p"},"EspGrid")," app, SuperCollider quarks, etc) your tempo should change as well. "),(0,i.kt)("h3",{id:"cps-and-bpm"},"CPS and BPM"),(0,i.kt)("p",null,"You can't adjust ",(0,i.kt)("inlineCode",{parentName:"p"},"cps")," in Tidal and have that change BPM in the link network yet - this will be fixed up soon. You can tweak the startup command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"sock <- carabiner tidal 4 (-0.14)\n")),(0,i.kt)("p",null,"You can't adjust cps in Tidal and have that change bpm in the link network yet - this will be fixed up soon."),(0,i.kt)("h3",{id:"understanding-the-link-command"},"Understanding the Link command"),(0,i.kt)("p",null,"Let's get a closer look at this cryptic line of code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"sock <- carabiner tidal 4 (-0.14)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4"),": the number of beats per cycle. Used to convert between link's beat-per-minute and Tidal's cycles-per-second. You might prefer 2 (or 3 if you're doing a waltz)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-0.14"),": latency time adjustment to get Tidal in phase. You might need to tweak it, to get it bang on.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You have to restart Tidal everytime you adjust these numbers. You can do that by restarting your text editor. This will be more easily configured in the future. ")),(0,i.kt)("p",null,"Report your good or bad experiences ",(0,i.kt)("a",{parentName:"p",href:"https://toplap.lurk.org/t/link-support-preview/418"},"here"),"."))}c.isMDXComponent=!0},5789:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/estuary-f58bc1c68e0160f72700fd2e507b7f90.png"},6331:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/troop-e731daa1b6db39bc2354ef215a554c1e.png"}}]);