(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),l=a(7),r=(a(0),a(197)),i={title:"Pulsar",permalink:"wiki/Pulsar/",layout:"wiki",id:"Pulsar"},o={unversionedId:"getting-started/editor/Pulsar",id:"getting-started/editor/Pulsar",isDocsHomePage:!1,title:"Pulsar",description:"----",source:"@site/docs/getting-started/editor/Pulsar.md",slug:"/getting-started/editor/Pulsar",permalink:"/docs/getting-started/editor/Pulsar",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/editor/Pulsar.md",version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1671170078,sidebar:"docs",previous:{title:"Atom",permalink:"/docs/getting-started/editor/Atom"},next:{title:"Vim and Neovim",permalink:"/docs/getting-started/editor/Vim"}},s=[{value:"Installation",id:"installation",children:[{value:"Download &amp; start Pulsar",id:"download--start-pulsar",children:[]},{value:"Manual install of Tidal package",id:"manual-install-of-tidal-package",children:[]},{value:"Install the node.js modules",id:"install-the-nodejs-modules",children:[]},{value:"Configure Pulsar",id:"configure-pulsar",children:[]}]},{value:"More about the Tidalcycles Package",id:"more-about-the-tidalcycles-package",children:[{value:"Forum discussion",id:"forum-discussion",children:[]},{value:"GitHub repository",id:"github-repository",children:[]}]}],c={toc:s};function u(e){var t=e.components,i=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("img",{alt:"pulsaricon",src:a(294).default})),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://pulsar-edit.dev/"},"Pulsar")," is a new code editor that is open-source and community-led. It is based on Atom and was started after the announcement to ",Object(r.b)("a",{parentName:"p",href:"https://github.blog/2022-06-08-sunsetting-atom/"},"Sunset Atom"),". The ",Object(r.b)("a",{parentName:"p",href:"https://pulsar-edit.dev/about.html"},"stated goal"),' is to "modernize, update and improve the original Atom project into a contemporary, hackable and fully open editor." This includes support for the package repository which provides for community contributions, including our Tidal package.'),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"UPDATE - Dec 15,2022"),": ",Object(r.b)("a",{parentName:"p",href:"https://github.com/pulsar-edit/pulsar/releases/tag/v1.100.0-beta"},"Pulsar v1.100.0")," is released (first tagged beta). See the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/pulsar-edit/pulsar/blob/master/CHANGELOG.md"},"ChangeLog")," - including support for Apple Silicon. The new ",Object(r.b)("a",{parentName:"p",href:"https://pulsar-edit.dev/"},"Pulsar web site")," is also a good source of information, including downloads and documentation."),Object(r.b)("p",null,"Known issues:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"macOS performance:")," this may be resolved by disabling the ",Object(r.b)("inlineCode",{parentName:"li"},"github")," package"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"macOS dmg install:"),' Current binaries are not signed. Launching Pulsar will produce an error "Pulsar cannot be opened because the developer cannot be verified". This can be fixed by running: ',Object(r.b)("inlineCode",{parentName:"li"},"xattr -cr /Applications/Pulsar.app/"))),Object(r.b)("p",null,"Other issues:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Auto-complete with default settings can be slower and more intrusive for livecoding. Possble workarounds:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"autocomplete-plus package:"),' increase "Delay Before Suggestions are Shown": to 100 or 1000.'),Object(r.b)("li",{parentName:"ul"},"disable the autocomplete-plus package")))),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE for Atom Users"),": The timeline to have Pulsar ready with the Tidalcycles package automation is the end of 2022. Tidal users who have a working Atom editor configured with the Tidalcycles package can continue to use it. ",Object(r.b)("em",{parentName:"p"},"However, the Atom package manager is no longer available to install or update the Tidal package and no further updates to Atom will be available.")," Tidal users are encouraged to migrate to Pulsar."),Object(r.b)("p",null,"See our Discord / #pulsar channel for more info: ",Object(r.b)("a",{parentName:"p",href:"https://discord.com/channels/779427371270275082/1047429699346903132"},"https://discord.com/channels/779427371270275082/1047429699346903132")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"Installation of the Tidalcycles Pulsar package is not automated. Proceed with manual install only if you are comfortable with package installs, using git, troubleshooting, etc."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"MacOS: see below"),Object(r.b)("li",{parentName:"ul"},"Linux: the manual instructions below should generally apply to Linux. Be sure to get the correct Pulsar download for your flavor."),Object(r.b)("li",{parentName:"ul"},"Linux with automated install: the Ansible install for a complete Tidal environment now includes Pulsar.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"See ",Object(r.b)("a",{parentName:"li",href:"https://github.com/cleary/ansible-tidalcycles"},"Installation of tidalcycles and editor(s) with ansible")))),Object(r.b)("li",{parentName:"ul"},"Windows (documentation coming)")),Object(r.b)("h3",{id:"download--start-pulsar"},"Download & start Pulsar"),Object(r.b)("p",null,"There are two ways to download:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Pulsar ",Object(r.b)("a",{parentName:"li",href:"https://pulsar-edit.dev/download.html"},"download page"),"."),Object(r.b)("li",{parentName:"ol"},"Pulsar download link + add your specific query parameters:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://web.pulsar-edit.dev/download"},"https://web.pulsar-edit.dev/download")," (need to add query string)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/pulsar-edit/package-frontend/blob/main/docs/download_links.md"},"https://github.com/pulsar-edit/package-frontend/blob/main/docs/download_links.md")," instructions on building your URL query string."),Object(r.b)("li",{parentName:"ul"},"For example: ",Object(r.b)("a",{parentName:"li",href:"https://web.pulsar-edit.dev/download?os=intel_mac&type=mac_dmg"},"https://web.pulsar-edit.dev/download?os=intel_mac&type=mac_dmg"))))),Object(r.b)("p",null,"When you start Pulsar the first time, it will create a hidden folder in your home directory ",Object(r.b)("inlineCode",{parentName:"p"},"~/.pulsar"),"."),Object(r.b)("h3",{id:"manual-install-of-tidal-package"},"Manual install of Tidal package"),Object(r.b)("p",null,"There is a community package for Tidal to be manually installed: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tidalcycles/atom-tidalcycles"},"atom-tidalcycles on github")),Object(r.b)("p",null,"From a command line using ",Object(r.b)("inlineCode",{parentName:"p"},"git"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"> cd ~/.pulsar/packages\n> git clone https://github.com/tidalcycles/atom-tidalcycles tidalcycles\n")),Object(r.b)("p",null,"This will install the tidalcycles package into a directory named ",Object(r.b)("inlineCode",{parentName:"p"},"tidalcycles"),"."),Object(r.b)("h3",{id:"install-the-nodejs-modules"},"Install the node.js modules"),Object(r.b)("p",null,"Pre-requisite: npm (node package manager)"),Object(r.b)("h4",{id:"install-nvm-node-version-manager---used-to-install-and-manage-npm"},"Install nvm (node version manager - used to install and manage npm)"),Object(r.b)("p",null,"If npm is installed, you can skip these steps and go to Install the tidalcycles node modules."),Object(r.b)("p",null,"The recommended method to install npm is via the node version manager."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"See ",Object(r.b)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"NPM Docs")," for options and instructions."),Object(r.b)("li",{parentName:"ul"},"Or go directly to the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm install script")," in GH. It has lots of detail, troubleshooting, and support for different OS, etc. See the section on Installing and Updating. The ",Object(r.b)("inlineCode",{parentName:"li"},"curl")," option is good.  "),Object(r.b)("li",{parentName:"ul"},"The nvm install script will add lines to your shell profile (.bash_profile, ~/.zshrc, ~/.bashrc etc). This can result in a short delay when starting the shell."),Object(r.b)("li",{parentName:"ul"},"run ",Object(r.b)("inlineCode",{parentName:"li"},"command -v nvm")," to verify nvm install - expected output ",Object(r.b)("inlineCode",{parentName:"li"},"nvm"),"."),Object(r.b)("li",{parentName:"ul"},"now use nvm to install npm:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"> nvm install node\n")),Object(r.b)("h4",{id:"install-the-tidalcycle-node-modules"},"Install the tidalcycle node modules"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"[userHome]/.pulsar/packages/tidalcycles > npm install\n")),Object(r.b)("h4",{id:"validate-results"},"Validate results"),Object(r.b)("p",null,"The node modules directory should now be present: ",Object(r.b)("inlineCode",{parentName:"p"},"~/.pulsar/packages/tidalcycles/node_modules/"),"\nThere should be three sub-directories: ",Object(r.b)("inlineCode",{parentName:"p"},"binpack")," ",Object(r.b)("inlineCode",{parentName:"p"},"directory-tree")," ",Object(r.b)("inlineCode",{parentName:"p"},"osc-min"),"."),Object(r.b)("h3",{id:"configure-pulsar"},"Configure Pulsar"),Object(r.b)("p",null,"Pulsar works just like Atom. To configure:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Main menu: Pulsar > Preferences  (will load the Settings tab)"),Object(r.b)("li",{parentName:"ul"},"Select: Packages > Community Packages > tidalcycles > Settings"),Object(r.b)("li",{parentName:"ul"},"set your Ghci Path, Boot Tidal Path"),Object(r.b)("li",{parentName:"ul"},"optional: Set your Sound Browser Folders - if you add the full path to your SuperCollider - Dirt-Samples, then you can easily browse and play these from Pulsar once you start tidal."),Object(r.b)("li",{parentName:"ul"},"MacOS: disable the GitHub package. There is a known performance issue on MacOS. See ",Object(r.b)("a",{parentName:"li",href:"https://pulsar-edit.dev/"},"https://pulsar-edit.dev/"))),Object(r.b)("h2",{id:"more-about-the-tidalcycles-package"},"More about the Tidalcycles Package"),Object(r.b)("h3",{id:"forum-discussion"},"Forum discussion"),Object(r.b)("p",null,"The Tidal Package for Atom is developed by ",Object(r.b)("inlineCode",{parentName:"p"},"ndr_brt")," - who is also working on preparing this for use in the new Pulsar package manager. There is a ",Object(r.b)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/the-atom-plugin-thread/2244"},"Tidal Club forum thread")," with more information and history of the development."),Object(r.b)("h3",{id:"github-repository"},"GitHub repository"),Object(r.b)("p",null,"There is a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tidalcycles/atom-tidalcycles"},"GitHub repository")," if you want to contribute, report an issue or follow the development."))}u.isMDXComponent=!0},197:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),u=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||r;return a?l.a.createElement(m,o(o({ref:t},c),{},{components:a})):l.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},294:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pulsaricon-180f9ce007553b403b723e7f049ba57d.png"}}]);