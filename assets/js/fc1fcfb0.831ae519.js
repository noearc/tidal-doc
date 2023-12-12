"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5952],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const o={title:"What is a pattern?",id:"what_is_a_pattern"},i=void 0,s={unversionedId:"innards/what_is_a_pattern",id:"innards/what_is_a_pattern",title:"What is a pattern?",description:"Introduction",source:"@site/docs/innards/what_is_a_pattern.md",sourceDirName:"innards",slug:"/innards/what_is_a_pattern",permalink:"/docs/innards/what_is_a_pattern",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/innards/what_is_a_pattern.md",tags:[],version:"current",lastUpdatedAt:1702361212,formattedLastUpdatedAt:"Dec 12, 2023",frontMatter:{title:"What is a pattern?",id:"what_is_a_pattern"},sidebar:"docs",previous:{title:"Contributing Tests",permalink:"/docs/innards/contributing_test"},next:{title:"Changelog",permalink:"/docs/around_tidal/changelog"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Types of pattern",id:"types-of-pattern",level:2},{value:"Analogue and Digital patterns",id:"analogue-and-digital-patterns",level:2}],u={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"Tidal"),", what is a pattern? There are a lot of ways of answering this question. A technical definition is that under the hood, a pattern is a function from time to events. You give a pattern a start and end time, and it gives you back the events that are active (in part or in whole) during that timespan. An event is itself a value with a start and end time."),(0,r.kt)("p",null,"This is mostly hidden when it comes to using ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," to make music, but lets have a closer look at the innards of a really simple pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'"1 2 3"\n')),(0,r.kt)("p",null,"The above might look like a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", but ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," quietly parses it into a pattern for you (using a hidden function called ",(0,r.kt)("inlineCode",{parentName:"p"},"parseBP_E"),"). We can ask that pattern for values by casting the string pattern to a Tidal pattern by appending ",(0,r.kt)("inlineCode",{parentName:"p"},":: Pattern String")," to the pattern string. You're kind of telling ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," to treat this string as a pattern and show you what it sees:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'"1 2 3" :: Pattern String\n')),(0,r.kt)("p",null,"If you run the above, you should see the contents of the first cycle in the output buffer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'(0>\u2153)|"1"\n(\u2153>\u2154)|"2"\n(\u2154>1)|"3"\n')),(0,r.kt)("p",null,"From that we can see the first event ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," is active for the first third of the cycle, and so on."),(0,r.kt)("p",null,"So a pattern is a function from a ",(0,r.kt)("inlineCode",{parentName:"p"},"timespan")," (also known as an ",(0,r.kt)("inlineCode",{parentName:"p"},"arc"),"), to values with each have a beginning and end. A function like ",(0,r.kt)("inlineCode",{parentName:"p"},"rev"),", is therefore a combinator, which takes such a function as input, and gives a new function as output (with input and output timing manipulations baked-in, in order to reverse the pattern)."),(0,r.kt)("h2",{id:"types-of-pattern"},"Types of pattern"),(0,r.kt)("p",null,"That's the basics, lets have a look at some code. The core representation for patterns is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sound.Tidal.Pattern")," module. The core representation is in the ten or so lines at the top. Lets step through it. Some ",(0,r.kt)("strong",{parentName:"p"},"Haskell")," knowledge will be helpful here, but you will hopefully get the gist even without software development experience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- | Time is rational\ntype Time = Rational\n")),(0,r.kt)("p",null,"The above states that time is rational. This means that rather than representing time as integers (whole numbers), or as floating point numbers, ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," represents time as a ratio of two integers. This means that for example a third can be represented precisely, as one over three. Music is of course full of such ratios, and not representing them as such can cause a great deal of problems.. Basically, this means that if you add three one-thirds together, you'll get a whole. Seems obvious but not all systems do this!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- | A time arc (start and end)\ntype Arc = (Time, Time)\n")),(0,r.kt)("p",null,"This is the representation of an ",(0,r.kt)("inlineCode",{parentName:"p"},"arc"),", or timespan. We like to call this a time arc rather than a time span, because in Tidal the notion of time is cyclic. Here the two time values are simply the beginning and end of an arc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- | The second arc (the part) should be equal to or fit inside the\n-- first one (the whole that it's a part of).\ntype Part = (Arc, Arc)\n")),(0,r.kt)("p",null,"Tidal often needs to represent part of an ",(0,r.kt)("inlineCode",{parentName:"p"},"arc"),". It does so with two ",(0,r.kt)("inlineCode",{parentName:"p"},"arcs"),", the first representing the whole of the part, and the second the part itself. Often both arcs will be the same, which simply means that we have a whole that has a single part."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- | An event is a value that's active during a timespan\ntype Event a = (Part, a)\n")),(0,r.kt)("p",null,"An event then, consists of a part, and a value of type a. This a can stand for any type (but you can only have events of the same type in any one pattern). For example you can have a pattern of words, of numbers, of colours or even of other patterns.."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"data State = State {arc :: Arc,\n                    controls :: ControlMap\n                   }\n")),(0,r.kt)("p",null,"Since version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0"),", ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," patterns can also respond to changing state as well as progressing time. So the above represents the entire input to a ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," pattern, the current timespan, and the current state of external controllers (whether MIDI controllers, or other software). What is interesting is that the current time (the arc isn't a point in time, but an ",(0,r.kt)("inlineCode",{parentName:"p"},"arc"),", or timespan. This aligns with the idea of the psychological 'specious present' having a duration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- | A function that represents events taking place over time\ntype Query a = (State -> [Event a])\n")),(0,r.kt)("p",null,"Here is that function from time to events we were talking about earlier. We simplified a bit - it's a function from a timespan plus some additional state, to events. Notice the a is carried from the type of the events to the type of the query. This again shows how a particular pattern can only represent events of the same type."),(0,r.kt)("p",null,"Notice also that a list of events is returned (denoted by the square brackets). This simply means that tidal supports polyphony - many events can take place at the same time. Remember though that each event has its own ",(0,r.kt)("inlineCode",{parentName:"p"},"arc"),"; two events might be returned for the same timespan, but they may well not start and end at the same time, and might not overlap at all."),(0,r.kt)("p",null,"It may also be that the arc of an event might extend outside the arc in the query state. This is one case where we get part of an arc back - the part will be the intersection of the arc of the query and that of the event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- | Also known as Continuous vs Discrete/Amorphous vs Pulsating etc.\ndata Nature = Analog | Digital\n            deriving Eq\n")),(0,r.kt)("h2",{id:"analogue-and-digital-patterns"},"Analogue and Digital patterns"),(0,r.kt)("p",null,"An important feature of ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," is that you can accurately compose analogue (continuous) and digital (discrete) patterns together. For example it can be nice to multiply a discrete pattern of notes by a continuously varying sinewave. It's a bit of a myth that computers can only represent digital structures, but when it comes to combining analogue and digital patterns together, it's useful to be able to know which is which, hence the above datatype for doing that."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- | A datatype that's basically a query, plus a hint about whether its events\n-- are Analogue or Digital by nature\ndata Pattern a = Pattern {nature :: Nature, query :: Query a}\n")),(0,r.kt)("p",null,"Here finally we arrive at the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pattern")," datatype, which simply consists of an either digital or analogue nature, plus a query for calculating events for a particular timespan."),(0,r.kt)("p",null,"The only thing we haven't done is define what the ",(0,r.kt)("inlineCode",{parentName:"p"},"ControlMap")," type is that we saw earlier. As well as being used to represent controller state, it's part of the definition of one more type, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ControlPattern"),", here we go:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"data Value = VS { svalue :: String }\n           | VF { fvalue :: Double }\n           | VI { ivalue :: Int }\n           deriving (Eq,Ord,Typeable,Data)\n\ntype ControlMap = Map.Map String Value\ntype ControlPattern = Pattern ControlMap\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ControlMap")," is simply a dictionary (or ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),") for storing some values by name (using a string). As well as using it for external control values within the State datatype, we also use it to make ControlPatterns. They are simply patterns of controlmaps, and are used for representing patterns of synthesiser messages. So for example the speed function in ",(0,r.kt)("inlineCode",{parentName:"p"},'sound "bd sn" # speed "2 3"'),") turns a pattern of numbers into a pattern of controlmaps, the sound turns a pattern of words into a pattern of controlmaps, and the # composes them together into a new pattern of controlmaps. Feel free to comment on the discussion page if something is unclear!"))}h.isMDXComponent=!0}}]);