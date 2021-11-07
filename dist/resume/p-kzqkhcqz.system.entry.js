System.register(["./p-a5316b19.system.js"],(function(l){"use strict";var n,t;return{setters:[function(l){n=l.h;t=l.r}],execute:function(){var c=function(l,t){var c=l.company,e=l.jobTitle,a=l.location,s=l.startDate,u=l.endDate;return n("div",{class:"experience"},n("div",{class:"title"},n("div",null,n("span",{class:"company-name"},c)),n("small",null,e," | ",n("svg-icon",{name:"location",small:true})," ",a," | ",s," ~ ",u||"Now")),t)};var e=l("az_resume",function(){function l(l){t(this,l);this.showDownloadLink=false}l.prototype.calcYearsSince=function(l){var n=new Date(l);var t=Date.now()-n.getTime();var c=new Date(t);return Math.abs(c.getUTCFullYear()-1970)};l.prototype.render=function(){return n("article",{class:"resume"},this.showDownloadLink?n("div",{class:"download-pdf screen-only"},n("a",{href:"https://github.com/yzalvin/resume/raw/master/Alvin%Zhao's%20Resume.pdf"},"Download as PDF")):"",n("section",{class:"name-and-contact"},n("div",null,n("h1",null,"Alvin Zhao"),n("h5",null,"Software Developer")),n("ul",null,n("li",{class:"location"},n("svg-icon",{name:"location"}),n("span",null,"Melbourne, VIC, Australia")),n("li",{class:"languages"},n("svg-icon",{name:"languages"}),n("span",null,"English, Teochew")),n("li",{class:"email"},n("svg-icon",{name:"email"}),n("a",{href:"mailto:alvin99yz@gmail.com"},"alvin99yz@gmail.com")),n("li",{class:"linkedin screen-only"},n("svg-icon",{name:"linkedin"}),n("a",{href:"https://www.linkedin.com/in/alvin-zhao/",target:"_blank"},"LinkedIn Profile")),n("li",{class:"website"},n("svg-icon",{name:"website"}),n("a",{href:"https://yzalvin.github.io",target:"_blank"},"yzalvin.github.io")),n("li",{class:"github screen-only"},n("svg-icon",{name:"github"}),n("a",{href:"https://github.com/yzAlvin",target:"_blank"},"GitHub Profile")))),n("section",{class:"about"},n("p",{class:"section-title"},"About"),n("p",null,"I enjoy learning and building things. I have a passion for software development, and am able to work across all layers of software. I started writing scripts in primary school and have been coding ever since.")),n("section",{class:"work"},n("p",{class:"section-title"},"Professional Experience"),n("div",{class:"experiences-container"},n(c,{company:"MYOB",jobTitle:"Associate Developer",location:"Cremorne, VIC",startDate:"Hopefully soon",endDate:"???"},n("ul",null,n("li",null,"Thing 1;"),n("li",null,"Thing 2;"),n("li",null,"Thing 3;"))),n(c,{company:"MYOB",jobTitle:"Protege Developer",location:"Cremorne, VIC",startDate:"Feb 2021"},n("ul",null,n("li",null,"Learning;"),n("li",null,"Thing 2;"),n("li",null,"Thing 3;"))))),n("section",{class:"education"},n("p",{class:"section-title"},"Education"),n("p",null,n("u",null,"Bachelor of Computer Science (Advanced Computer Science)")," from"," ",n("i",null,"Monash University"),", 2021."),n("p",null,n("u",null,"Certificate IV in Cyber Security")," from"," ",n("i",null,"Holmesglen Institute"),", 2021.")),n("section",{class:"skills"},n("p",{class:"section-title"},"Skills"),n("ul",null,n("li",null,"Frontend",n("div",{class:"tags-container"},n("span",{class:"tag"},"TypeScript"),n("span",{class:"tag"},"JavaScript"),n("span",{class:"tag"},"React"))),n("li",null,"Backend",n("div",{class:"tags-container"},n("span",{class:"tag secondary"},"C#"),n("span",{class:"tag secondary"},".NET"),n("span",{class:"tag secondary"},"NodeJS"),n("span",{class:"tag secondary"},"PostgreSQL"))),n("li",null,"Devops",n("div",{class:"tags-container"},n("span",{class:"tag"},"Buildkite"),n("span",{class:"tag"},"Github Actions"),n("span",{class:"tag"},"Docker"),n("span",{class:"tag"},"AWS"),n("span",{class:"tag"},"Kubernetes"))))))};Object.defineProperty(l,"style",{get:function(){return"\@import url(\"https://yzalvin.github.io/fonts/lato.css\");\@import url(\"https://yzalvin.github.io/fonts/wotfard.css\");:host{--background-color:#fff;--accent-color:#0ca4a5;--subtle-accent-color:#e3ffff;--secondary-color:#7d68d0;--subtle-secondary-color:#f2efff;--text-color:#333;--subtle-text-color:#777;display:block;font-size:18px}:host .resume{border-radius:10px;padding:35px 0 10px 0;display:grid;color:var(--text-color);font-family:Lato,sans-serif;font-size:16px;background-color:var(--background-color);position:relative}:host .resume section{padding:5px;margin:10px;border-radius:10px}:host .resume section .section-title{font-size:24px;margin:0;margin-bottom:16px;border-bottom:1px solid var(--accent-color);font-family:Wotfard,sans-serif}:host .resume section.name-and-contact{grid-area:name;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}:host .resume section.name-and-contact h1{font-size:56px;margin:0;font-weight:700;color:var(--accent-color);text-align:center;font-family:Wotfard,sans-serif}:host .resume section.name-and-contact h5{color:var(--subtle-text-color);margin:0;font-size:24px;font-weight:300;text-align:center;font-family:Wotfard,sans-serif}:host .resume section.name-and-contact ul{list-style:none;padding:0;display:grid;margin-left:auto;margin-right:auto}:host .resume section.name-and-contact ul li{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .resume section.name-and-contact ul li svg-icon{margin-right:10px}:host .resume section.name-and-contact ul li a{text-decoration:none;color:var(--text-color);border-bottom:1px dotted var(--accent-color);padding-bottom:2px}:host .resume section.name-and-contact ul li a:hover{color:var(--accent-color);border-bottom-style:solid}:host .resume section.name-and-contact ul li.birthday{grid-area:birthday}:host .resume section.name-and-contact ul li.location{grid-area:location}:host .resume section.name-and-contact ul li.experience{grid-area:experience}:host .resume section.name-and-contact ul li.email{grid-area:email}:host .resume section.name-and-contact ul li.linkedin{grid-area:linkedin}:host .resume section.name-and-contact ul li.website{grid-area:website}:host .resume section.name-and-contact ul li.github{grid-area:github}:host .resume section.name-and-contact ul li.languages{grid-area:languages}:host .resume section.photo{grid-area:photo;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .resume section.photo .avatar{border-radius:50%;border:3px solid var(--accent-color);max-width:100%;max-height:150px;-webkit-box-sizing:border-box;box-sizing:border-box}:host .resume section.about{grid-area:about}:host .resume section.work{grid-area:work}:host .resume section.work .experiences-container .experience{margin-top:16px}:host .resume section.work .experiences-container .experience .title div{font-size:18px;display:block;margin-bottom:5px;color:var(--subtle-text-color)}:host .resume section.work .experiences-container .experience .title div .company-name{color:var(--accent-color);font-size:20px;font-family:Wotfard,sans-serif}:host .resume section.work .experiences-container .experience .title small{font-size:16px;color:var(--subtle-text-color);fill:var(--subtle-text-color)}:host .resume section.work .experiences-container .experience ul{padding:0;margin-top:20px;padding-left:16px;text-align:justify}:host .resume section.work .experiences-container .experience ul li{margin-bottom:5px;font-size:16px}:host .resume section.work .experiences-container .experience ul li::marker{color:var(--accent-color)}:host .resume section.education{grid-area:education}:host .resume section.community{grid-area:community}:host .resume section.skills{grid-area:skills}:host .resume section.skills ul{list-style:none;padding:0}:host .tags-container{display:grid;grid-template-columns:1fr 1fr 1fr;margin:2px 0 5px}:host .tag{background-color:var(--subtle-accent-color);border:1px solid var(--accent-color);color:var(--accent-color);border-radius:.25em;display:inline-block;font-size:.75em;line-height:2em;margin:.125em;padding:0 .5em;text-decoration:none;white-space:nowrap}:host .tag.secondary{background-color:var(--subtle-secondary-color);border:1px solid var(--secondary-color);color:var(--secondary-color)}:host .resume{grid-gap:5px;grid-template-columns:1fr;grid-template-areas:\"photo\" \"name\" \"about\" \"skills\" \"work\" \"education\"}\@media (min-width:768px),print{:host .resume{padding:30px 20px;grid-template-columns:2fr 1fr;grid-template-rows:1fr 1fr 1fr 1fr;grid-template-areas:\"name photo\" \"work about\" \"work skills\" \"work education\"}:host .resume section.name-and-contact h1,:host .resume section.name-and-contact h5{text-align:left}}\@media (min-width:900px),print{:host .resume{margin:20px auto;max-width:210mm;-webkit-box-shadow:8px 14px 38px rgba(39,44,49,.6),1px 3px 8px rgba(39,44,49,.3);box-shadow:8px 14px 38px rgba(39,44,49,.6),1px 3px 8px rgba(39,44,49,.3)}}:host .resume section.name-and-contact ul{grid-gap:10px;grid-template-columns:1fr 1fr;grid-template-areas:\"email email\" \"website website\" \"location languages\" \"birthday experience\" \"github linkedin\"}:host .resume section.name-and-contact ul li.email{margin:0 auto}:host .resume section.name-and-contact ul li.website{display:none}\@media (min-width:768px),print{:host .resume section.name-and-contact ul{margin-left:0;margin-right:0;grid-gap:5px;grid-template-columns:1fr 1fr;grid-template-areas:\"location github\" \"languages linkedin\" \"experience email\" \". website\"}:host .resume section.name-and-contact ul li.email{margin:0}:host .resume section.name-and-contact ul li.website{display:block}}.download-pdf{position:absolute;top:15px;right:20px}.download-pdf a{text-decoration:none;color:var(--text-color);border-bottom:1px dotted var(--accent-color);padding-bottom:2px}.download-pdf a:hover{color:var(--accent-color);border-bottom-style:solid}\@media (min-width:768px){.download-pdf{top:20px}}\@media (prefers-color-scheme:dark){:host{--background-color:#32343e;--accent-color:#00f9fb;--subtle-accent-color:#005b5b;--secondary-color:#a491f1;--subtle-secondary-color:#2d2a3e;--text-color:#dffcfd;--subtle-text-color:#9eb4b5}}\@media print{:host .resume{-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;max-height:287mm;overflow:hidden}:host .resume section{margin:0}:host .resume section.name-and-contact ul{grid-template-areas:\"location email\" \"birthday website\" \"experience .\" \"languages .\"}:host .resume .screen-only{display:none!important}:host .resume a{border:none!important}}\@page{padding:0;margin:0;size:A4 portrait}"},enumerable:true,configurable:true});return l}());var a=l("svg_icon",function(){function l(l){t(this,l)}l.prototype.render=function(){return n("span",{class:this.small?"small":""},this.name=="birthday"?n("svg",{viewBox:"0 0 469.333 469.333"}," ",n("g",null," ",n("g",null," ",n("g",null," ",n("path",{d:"M234.56,128c23.573,0,42.667-19.093,42.667-42.667c0-8-2.24-15.573-6.08-21.973L234.56,0l-36.587,63.36 c-3.84,6.4-6.08,13.973-6.08,21.973C191.893,108.907,210.987,128,234.56,128z"})," ",n("path",{d:"M362.56,192L362.56,192H255.893v-42.667h-42.667V192H106.56c-35.307,0-64,28.693-64,64v32.853 c0,23.04,18.773,41.813,41.813,41.813c11.2,0,21.653-4.373,29.547-12.267l45.653-45.547l45.547,45.44 c15.787,15.787,43.307,15.787,59.093,0l45.653-45.44l45.547,45.44c7.893,7.893,18.347,12.267,29.547,12.267 c23.04,0,41.813-18.773,41.813-41.813V256C426.56,220.693,397.867,192,362.56,192z"})," ",n("path",{d:"M332.587,341.013L332.587,341.013l-22.933-22.933l-23.04,22.933c-27.84,27.84-76.48,27.84-104.32,0L159.36,318.08 l-23.04,22.933c-13.76,13.973-32.213,21.653-51.947,21.653c-15.467,0-29.867-4.907-41.813-13.12V448 c0,11.733,9.6,21.333,21.333,21.333h341.333c11.733,0,21.333-9.6,21.333-21.333v-98.453c-11.947,8.213-26.24,13.12-41.813,13.12 C365.013,362.667,346.56,354.987,332.587,341.013z"})," ")," ")," ")," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," "):this.name=="location"?n("svg",{viewBox:"0 0 430.114 430.114"}," ",n("g",null," ",n("path",{id:"Facebook_Places",d:"M356.208,107.051c-1.531-5.738-4.64-11.852-6.94-17.205C321.746,23.704,261.611,0,213.055,0 C148.054,0,76.463,43.586,66.905,133.427v18.355c0,0.766,0.264,7.647,0.639,11.089c5.358,42.816,39.143,88.32,64.375,131.136 c27.146,45.873,55.314,90.999,83.221,136.106c17.208-29.436,34.354-59.259,51.17-87.933c4.583-8.415,9.903-16.825,14.491-24.857\tc3.058-5.348,8.9-10.696,11.569-15.672c27.145-49.699,70.838-99.782,70.838-149.104v-20.262 C363.209,126.938,356.581,108.204,356.208,107.051z M214.245,199.193c-19.107,0-40.021-9.554-50.344-35.939 c-1.538-4.2-1.414-12.617-1.414-13.388v-11.852c0-33.636,28.56-48.932,53.406-48.932c30.588,0,54.245,24.472,54.245,55.06 C270.138,174.729,244.833,199.193,214.245,199.193z"})," ")," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," "):this.name=="email"?n("svg",{viewBox:"0 0 511.626 511.626"}," ",n("g",null," ",n("g",null," ",n("path",{d:"M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099\t\t\tc1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277\t\t\tc5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569\t\t\tc5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852\t\t\tc6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116\t\t\tc9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679\t\t\tc-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974\t\t\tC26.169,159.743,37.307,170.736,49.106,178.729z"})," ",n("path",{d:"M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699\t\t\tc-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287\t\t\tc-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699\t\t\tc-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265\t\t\tc8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265\t\t\tV184.437C503.441,193.569,493.927,201.854,483.072,209.275z"})," ")," ")," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," "):this.name=="linkedin"?n("svg",{viewBox:"0 0 430.117 430.118"}," ",n("g",null," ",n("path",{id:"LinkedIn__x28_alt_x29_",d:"M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471\t\tc0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z\t\t M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563\t\tc0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z\t\t M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621\t\tc-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531\t\tc8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99\t\tc0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"})," ")," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," ",n("g",null)," "):this.name=="website"?n("svg",{viewBox:"0 0 512 512"},n("path",{d:"m321.324219 83.367188c-12.8125-33.246094-28.917969-61.246094-47.425781-82.714844-6.078126-.429688-12.195313-.652344-18.34375-.652344-6.152344 0-12.269532.222656-18.34375.652344-18.511719 21.46875-34.617188 49.464844-47.425782 82.714844-4.136718 10.734374-7.855468 21.863281-11.15625 33.316406h153.851563c-3.304688-11.453125-7.023438-22.582032-11.15625-33.316406zm0 0"}),n("path",{d:"m171.101562 365.316406h168.902344c6.457032-30.007812 10.207032-61.765625 11.089844-94.316406h-191.082031c.882812 32.554688 4.632812 64.308594 11.089843 94.316406zm0 0"}),n("path",{d:"m340.003906 146.683594h-168.902344c-6.457031 30.007812-10.207031 61.765625-11.089843 94.316406h191.082031c-.882812-32.554688-4.632812-64.308594-11.089844-94.316406zm0 0"}),n("path",{d:"m189.78125 428.632812c12.8125 33.246094 28.917969 61.246094 47.425781 82.714844 6.078125.429688 12.195313.652344 18.347657.652344 6.148437 0 12.265624-.222656 18.34375-.652344 18.507812-21.46875 34.613281-49.464844 47.421874-82.714844 4.136719-10.734374 7.855469-21.863281 11.15625-33.316406h-153.847656c3.300782 11.453125 7.019532 22.582032 11.152344 33.316406zm0 0"}),n("path",{d:"m370.59375 146.683594c6.050781 29.953125 9.660156 61.664062 10.507812 94.316406h130.003907c-1.898438-33.089844-10.054688-65-23.929688-94.339844-.144531.003906-.285156.023438-.429687.023438zm0 0"}),n("path",{d:"m140.515625 365.316406c-6.054687-29.953125-9.664063-61.664062-10.511719-94.316406h-130.003906c1.898438 33.089844 10.054688 65 23.929688 94.339844.144531-.003906.285156-.023438.429687-.023438zm0 0"}),n("path",{d:"m363.554688 395.316406c-11.167969 41.644532-27.277344 78.976563-47.363282 109.484375 45.199219-10.929687 86.664063-34.066406 120.378906-67.78125 12.847657-12.847656 24.144532-26.828125 33.832032-41.703125zm0 0"}),n("path",{d:"m147.550781 116.683594c11.171875-41.644532 27.277344-78.976563 47.363281-109.484375-45.195312 10.929687-86.664062 34.066406-120.382812 67.78125-12.84375 12.847656-24.140625 26.828125-33.828125 41.703125zm0 0"}),n("path",{d:"m147.550781 395.316406h-106.847656c9.6875 14.875 20.984375 28.855469 33.828125 41.703125 33.71875 33.714844 75.183594 56.851563 120.378906 67.78125-20.082031-30.507812-36.1875-67.839843-47.359375-109.484375zm0 0"}),n("path",{d:"m363.554688 116.683594h106.847656c-9.6875-14.875-20.980469-28.855469-33.828125-41.703125-33.71875-33.714844-75.183594-56.851563-120.382813-67.78125 20.085938 30.507812 36.195313 67.839843 47.363282 109.484375zm0 0"}),n("path",{d:"m381.101562 271c-.847656 32.652344-4.453124 64.363281-10.507812 94.316406h116.152344c.144531 0 .285156.019532.429687.023438 13.875-29.339844 22.03125-61.25 23.929688-94.339844zm0 0"}),n("path",{d:"m130.003906 241c.847656-32.652344 4.457032-64.363281 10.511719-94.316406h-116.15625c-.144531 0-.285156-.019532-.429687-.023438-13.875 29.339844-22.03125 61.25-23.929688 94.339844zm0 0"})):this.name=="experience"?n("svg",{viewBox:"0 0 512.001 512.001"}," ",n("g",null," ",n("g",null," ",n("path",{d:"M491.244,124.541h-83.027h-0.001l-387.459,0.025C9.292,124.566,0,133.858,0,145.321v276.733 c0,49.596,40.348,89.946,89.946,89.946h249.081c49.598,0,89.946-40.35,89.946-89.946v-83.027h62.27 c11.463,0,20.757-9.294,20.757-20.757V145.298C512,133.835,502.707,124.541,491.244,124.541z M153.055,345.107 c8.106,8.105,8.106,21.248,0,29.354c-4.052,4.053-9.364,6.08-14.676,6.08c-5.312,0-10.625-2.027-14.676-6.079l-41.513-41.514 c-8.106-8.105-8.106-21.248,0-29.354l41.513-41.514c8.105-8.105,21.248-8.105,29.354,0c8.106,8.105,8.106,21.248,0,29.354 l-26.837,26.836L153.055,345.107z M241.88,280.17l-13.838,83.027c-1.692,10.153-10.486,17.347-20.45,17.347 c-1.132,0-2.28-0.091-3.436-0.285c-11.308-1.885-18.947-12.579-17.062-23.887l13.838-83.027 c1.883-11.308,12.58-18.959,23.887-17.062C236.126,258.168,243.765,268.862,241.88,280.17z M346.785,332.947l-41.514,41.513 c-4.052,4.053-9.364,6.08-14.676,6.08s-10.625-2.027-14.676-6.079c-8.106-8.106-8.106-21.248,0-29.354l26.836-26.837 l-26.836-26.836c-8.106-8.105-8.106-21.248,0-29.354c8.105-8.105,21.248-8.105,29.354,0l41.513,41.514 C354.892,311.699,354.892,324.843,346.785,332.947z M470.487,297.514h-41.514V166.055h41.514V297.514z"})," ")," ")," ",n("g",null," ",n("g",null," ",n("path",{d:"M312.19,6.08c-8.105-8.106-21.248-8.106-29.354,0l-41.514,41.513c-8.106,8.105-8.106,21.248,0,29.354 c4.053,4.053,9.365,6.08,14.678,6.08c5.312,0,10.625-2.027,14.676-6.08l41.514-41.513C320.296,27.328,320.296,14.186,312.19,6.08z "})," ")," ")," ",n("g",null," ",n("g",null," ",n("path",{d:"M187.65,6.08c-8.105-8.106-21.248-8.106-29.354,0l-41.513,41.513c-8.106,8.105-8.106,21.248,0,29.354 c4.053,4.053,9.365,6.08,14.678,6.08c5.312,0,10.625-2.027,14.676-6.08l41.514-41.513C195.756,27.328,195.756,14.186,187.65,6.08z "})," ")," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," "):this.name=="github"?n("svg",{viewBox:"0 0 24 24"},n("path",{d:"m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"})):this.name=="languages"?n("svg",{viewBox:"0 0 472.615 472.615"}," ",n("g",null," ",n("g",null," ",n("path",{d:"M236.308,40.759C105.799,40.759,0,117.58,0,212.342c0,53.876,34.198,101.952,87.693,133.409l-24.219,86.105 l114.219-53.252c18.742,3.473,38.381,5.319,58.614,5.319c130.509,0,236.308-76.82,236.308-171.581 C472.615,117.58,366.816,40.759,236.308,40.759z M120.701,243.495c-18.687,0-33.836-15.148-33.836-33.836 c0-18.686,15.149-33.835,33.836-33.835s33.836,15.149,33.836,33.835C154.537,228.347,139.388,243.495,120.701,243.495z M236.308,243.495c-18.687,0-33.836-15.148-33.836-33.836c0-18.686,15.149-33.835,33.836-33.835 c18.687,0,33.836,15.149,33.836,33.835C270.144,228.347,254.995,243.495,236.308,243.495z M351.914,243.495 c-18.687,0-33.836-15.148-33.836-33.836c0-18.686,15.149-33.835,33.836-33.835s33.836,15.149,33.836,33.835 C385.751,228.347,370.601,243.495,351.914,243.495z"})," ")," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," ",n("g",null," ")," "):"")};Object.defineProperty(l,"style",{get:function(){return":host{display:inline}:host svg{fill:var(--accent-color);max-width:20px;height:20px}:host .small svg{fill:var(--subtle-text-color);max-width:14px;height:14px}"},enumerable:true,configurable:true});return l}())}}}));