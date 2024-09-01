(()=>{"use strict";var t={247:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(601),r=n.n(o),s=n(314),a=n.n(s)()(r());a.push([t.id,".modal{\n    padding:20px;\n    position: absolute;\n    top: 10%;\n    left: 40%;\n    max-width: 30%;\n    border: 1px solid lightblue;\n    border-radius:20px;\n\n    .form{\n        display: grid;\n        gap:5px;\n        \n        input,button{\n            border: 1px solid lightblue;\n            border-radius: 10px;\n            padding: 0px 10px;\n            outline: none;\n        }\n       \n        button {\n            margin-top: 15px;\n        }\n\n        input:focus{\n            outline: 1px solid rgb(50, 155, 50);            \n        }\n\n        button:hover{\n            background-color: lightblue;\n        }\n    }\n}\n\n.modal::backdrop{\n    background-color: rgba(0, 0, 0, 0.5);\n    /* background-color: #bd4949; */\n}\n\n",""]);const i=a},427:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(601),r=n.n(o),s=n(314),a=n.n(s)()(r());a.push([t.id,'*, *::before, *::after {\n    box-sizing: border-box; /*1. Use a more-intuitive box-sizing model.*/\n}\n\n* {\n    margin: 0; /* 2. Remove default margin */\n}\n\nimg, picture, video, canvas, svg { /* 5. Improve media defaults */\n    display: block;\n    max-width: 100%;\n\n}\n\ninput, button, textarea, select { /* 6. Remove built-in form typography styles */\n    font: inherit;\n}\n\np, h1, h2, h3, h4, h5, h6 { /*7. Avoid text overflows */\n    overflow-wrap: break-word;\n}\n\n#root, #__next { /* 8. Create a root stacking context */\n    isolation: isolate;\n}\n\nbody {\n    line-height: 1.5; /* Typographic tweaks! 3. Add accessible line-height  4. Improve text rendering */\n    -webkit-font-smoothing: antialiased;\n    display: grid;\n    grid-template: 92vh 8vh/1fr;\n    font-family: monospace;\n    font-weight: 700;\n    font-size: 0.7rem;\n    color: black;\n    button{\n        color: black;\n    } \n    background-color: #040725;\n\n    #main{\n        display: grid;\n        grid-template-columns:25% 74.8%;\n        overflow: auto;\n    }\n\n    footer{\n        box-shadow: 0 0 5px rgb(68, 68, 68);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 1rem;\n        font-family: "Roboto",sans-serif;\n\n        a {\n            text-decoration: none;\n            color: white;\n        }\n    }\n}\n\n/* div{\n    border: 1px solid red;\n} */',""]);const i=a},880:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(601),r=n.n(o),s=n(314),a=n.n(s)()(r());a.push([t.id,'#projects{\n    display: flex;\n    flex-direction: column;\n    gap:30px;\n    overflow: auto;\n    padding: 20% 10%;\n    box-shadow: 0 0 5px rgb(37, 35, 65);\n    \n\n    #addProjects{\n        display: flex;\n        gap: 20px;\n        align-items: center;\n        /* border: 1px solid gray; */\n        border-radius: 10px;\n        padding: 5px 10px;\n        box-shadow: 0 0 5px rgb(61, 59, 59);\n        color: white;\n\n        button{\n            width: 30px;\n            height: 30px;\n            border-radius: 50%;\n            border: none;\n            box-shadow: 0 0 10px rgb(75, 72, 72);\n            background-color: lightblue;\n        }\n\n        button:hover{\n            background-color: rgb(218, 74, 74);\n        }\n    }\n\n    .projectsContainer{\n        display: grid;\n        gap: 20px;\n        \n\n        .projectDiv{\n            box-shadow: 0 0 5px rgb(88, 85, 85);\n            border-radius: 10px;\n            padding: 10px;\n            display: grid;\n            gap: 2px;\n\n            > div > div{\n                background-color:rgb(202, 205, 206);\n                border: 0.5px solid lightblue;\n                border-radius: 10px;\n                padding: 10px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                box-shadow: 0 0 3px rgb(199, 241, 255);\n                color: black;\n            }\n            \n            .projectBar{\n                display: grid;\n                grid-template: 0fr/1fr;\n                gap: 5px;\n                margin-bottom: 10px;\n\n                .projectTitle{\n                    grid-column:1/-1;\n                    justify-content: flex-start;\n                    cursor: pointer;\n                    user-select: none;\n                }\n\n                .projectTitle:hover{\n                    background-color: rgb(241, 156, 156);\n                }\n            }\n\n            .projectContentWrapper{\n                display: none;\n                min-width: 100%;\n                padding: 0px;\n\n                > div{\n                    background-color: transparent;\n                    border: none;\n                    display: grid;\n                    grid-template:0fr/100%;\n                    padding: 0px;\n                    gap:5px;\n                    box-shadow: none;\n\n\n                    > div{\n                        min-width: 100%;\n                        box-shadow: 0 0 3px rgb(199, 241, 255);\n                        border: 1px solid lightblue;\n                        border-radius: 10px;\n                        padding: 5px;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;   \n                        background-color: rgb(202, 205, 206); \n                        font-family: "Roboto",sans-serif;              \n                    }\n\n                    .openProject{    \n                        button {\n                            border-radius: 10px;\n                            border: none;\n                            max-height: 30px;\n                            width: 100%;\n                            text-align: center;\n                            font-size: 0.7rem;\n                            font-weight: 800;\n                        }\n\n                        button:hover{\n                            background-color: lightblue;\n                        }\n                        \n                    }\n                }\n            }\n        }\n\n        .projectDiv-Open .projectContentWrapper{\n            display: grid;\n            transition: display 1s ease-out;\n            min-width: 100%;\n        }\n    }\n\n\n}\n',""]);const i=a},499:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(601),r=n.n(o),s=n(314),a=n.n(s)()(r());a.push([t.id,'#project{\n    overflow: auto;\n    display: grid;\n    grid-template-rows: 20% 80%;\n\n    > div {\n        overflow: auto;\n        min-width: 100%;\n    }\n\n    #projectInfo{\n        display: grid;\n        grid-template-rows: 60% 30%;\n        gap: 10px;\n        padding: 8px 20px;\n        box-shadow: 0 0 5px rgb(100, 100, 100);\n\n        .projectInfoTitle{\n            font-size: 2rem;\n            font-weight: 800;\n            font-family: "New Amsterdam",sans-serif;\n            color: white;\n        }\n\n        .projectInfoAdditional{\n            display: flex;\n            justify-content: space-between;\n            /* gap:30px; */\n\n            div{\n                \n                div,button {\n                    background-color: white;\n                    border-radius: 10px;\n                    border: none;\n                    padding: 2px 10px;\n                    color: black;\n                }\n\n                button{\n                    background-color: aquamarine;\n                }\n\n                button:hover{\n                    background-color: lightblue;\n                }\n                \n                display: flex;\n                align-items: center;\n                gap:20px;\n            }\n        }\n    }\n\n    #todo{\n        display: grid;\n        grid-template-columns: 75% 25%;\n        padding: 20px;\n\n        .projectTasks{\n            display: grid;\n            grid-template: 0fr/1fr 1fr;\n            grid-auto-rows: 0fr;\n            gap: 20px;\n\n            .Tasks{\n                display: flex;\n                flex-direction: column;\n                gap: 5px;\n                padding: 10px;\n                max-inline-size: 30ch;\n                box-shadow: 0 0 3px rgb(199, 241, 255);\n                border: 1px solid lightblue;\n                border-radius: 10px;\n                /* max-height: 220px; */\n\n                > div {\n                    border: 1px solid rgb(170, 163, 163);\n                    background-color: rgb(238, 225, 225);\n                    border-radius: 10px;\n                    padding: 10px;\n                }\n\n                .taskTitle{\n                    cursor: pointer;\n                }\n\n                .taskContentWrapper{\n                    display: none;\n                    border: none;\n                    background-color: transparent;\n                    padding: 0px;\n\n                    > div{\n                        display: grid;\n                        gap: 5px;\n                    } \n                    \n                    > div > div{\n                        border: 1px solid rgb(170, 163, 163);\n                        background-color: rgb(228, 226, 226);\n                        padding: 10px;\n                        border-radius: 10px;\n                        background-color: rgb(238, 225, 225);\n                        display: flex;\n                        gap:20px;\n\n                        button{\n                            border-radius: 10px;\n                            outline: none;\n                            border: none;\n                            background-color: lightblue;\n                            width: 30%;\n                        }\n\n                        button:hover{\n                            opacity: 0.7;\n                        }\n                    }\n                }\n            }\n\n            .Tasks-Open .taskContentWrapper{\n                display: grid;\n                transition: display 1s ease-out;\n            }\n        }\n\n\n        .aboutProject{\n            display: grid;\n            grid-template-rows:200px  200px;\n            gap: 10px;\n            padding: 0px;\n\n            > div{\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n                max-height: 200px;\n            }\n\n            .projectNote,.projectDescription{\n                padding: 10px;\n                overflow: auto;\n                box-shadow: 0 0 5px rgb(68, 70, 70);\n                background-color: rgb(201, 201, 201);\n                color: black;\n                height: 200px;\n                border-radius: 10px;\n                font-family: "Roboto",sans-serif;\n            }\n\n            .descriptionTitle,.noteTitle{\n                color: white;\n            }\n        }\n    }\n}',""]);const i=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var s={},a=[],i=0;i<t.length;i++){var d=t[i],c=o.base?d[0]+o.base:d[0],l=s[c]||0,p="".concat(c," ").concat(l);s[c]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var b=r(m,o);o.byIndex=i,e.splice(i,0,{identifier:p,updater:b,references:1})}a.push(p)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var s=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<s.length;a++){var i=n(s[a]);e[i].references--}for(var d=o(t,r),c=0;c<s.length;c++){var l=n(s[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}s=d}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={id:o,exports:{}};return t[o](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var o=n(72),r=n.n(o),s=n(825),a=n.n(s),i=n(659),d=n.n(i),c=n(56),l=n.n(c),p=n(540),u=n.n(p),m=n(113),b=n.n(m),g=n(427),f={};function h(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function x(t){let e={title:t.title,description:t.description,dueDate:t.dueDate,urgent:t.urgent,notes:t.notes,id:-1,complete:!1};return Object.assign({getID:()=>e.id,toggleComplete:()=>{e.complete?e.complete=!1:e.complete=!0},getCompleteStatus:()=>e.complete,state:e},v(e))}f.styleTagTransform=b(),f.setAttributes=l(),f.insert=d().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),r()(g.A,f),g.A&&g.A.locals&&g.A.locals;const v=t=>({setID:e=>{t.id=e},isDue:()=>{if(!t.dueDate)return!1;let e=t.dueDate.split("-").map((t=>parseInt(t))),n=new Date(e[0],e[1]-1,[e[2]]);return function(t,e){return+h(t)<+h(e)}(Date.now(),n)},changeState:e=>{t.title=e.title,t.description=e.description,t.dueDate=e.dueDate,t.urgent=e.urgent,t.notes=e.notes,t.complete=!1}});var C=n(880),k={};k.styleTagTransform=b(),k.setAttributes=l(),k.insert=d().bind(null,"head"),k.domAPI=a(),k.insertStyleElement=u(),r()(C.A,k),C.A&&C.A.locals&&C.A.locals;var A=n(499),y={};y.styleTagTransform=b(),y.setAttributes=l(),y.insert=d().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=u(),r()(A.A,y),A.A&&A.A.locals&&A.A.locals;const E=document.createElement("div");E.setAttribute("id","project");const j=t=>{D();const e=document.createElement("div");e.setAttribute("id","projectInfo");const n=document.createElement("div");n.setAttribute("id","todo");const o=document.createElement("div");o.setAttribute("class","aboutProject");const r=document.createElement("div");r.setAttribute("class","noteContainer");const s=document.createElement("div");s.setAttribute("class","noteTitle");const a=document.createElement("div");a.setAttribute("class","projectNote");const i=document.createElement("div");i.setAttribute("class","descriptionContainer");const d=document.createElement("div");d.setAttribute("class","descriptionTitle");const c=document.createElement("div");c.setAttribute("class","projectDescription"),w(t.state.tasks,n),T(t,e),s.textContent="Notes",a.textContent=t.state.notes,d.textContent="Description",c.textContent=t.state.description,r.appendChild(s),r.appendChild(a),i.appendChild(d),i.appendChild(c),o.appendChild(i),o.appendChild(r),n.appendChild(o),E.appendChild(e),E.appendChild(n)},w=(t,e)=>{const n=document.createElement("div");n.setAttribute("class","projectTasks"),t.forEach((t=>{const e=document.createElement("div");e.setAttribute("class","Tasks"),e.setAttribute("id",`${Number(t.state.id)}`);const o=document.createElement("div");o.setAttribute("class","taskTitle"),o.textContent=t.state.title;const r=document.createElement("div");r.setAttribute("class","dueDate"),r.textContent=t.state.dueDate;const s=document.createElement("div");s.setAttribute("class","urgency"),s.textContent=t.state.urgent;const a=document.createElement("div");a.setAttribute("class","taskContentWrapper");const i=document.createElement("div");i.setAttribute("class","taskContent");const d=document.createElement("div");d.setAttribute("class","description"),d.textContent=t.state.description;const c=document.createElement("div");c.setAttribute("class","note"),c.textContent=t.state.notes;const l=document.createElement("div");l.setAttribute("class","buttonContainer");const p=document.createElement("button");p.setAttribute("class","deleteTaskButton"),p.textContent="Delete";const u=document.createElement("button");u.setAttribute("class","editTaskButton"),u.textContent="Edit";const m=document.createElement("button");m.setAttribute("class","taskCompletedButton"),m.textContent="Done",t.state.complete?(e.setAttribute("style","background-color:lightgreen;"),i.setAttribute("style","background-color:lightgreen;"),m.setAttribute("style","background-color:lightgreen;")):t.isDue()||(e.setAttribute("style","background-color:#bd4949; color:red;"),i.setAttribute("style","background-color:#bd4949;"),m.setAttribute("style","background-color:#bd4949;")),l.appendChild(u),l.appendChild(p),l.appendChild(m),e.appendChild(o),e.appendChild(r),e.appendChild(s),i.appendChild(d),i.appendChild(c),i.appendChild(l),a.appendChild(i),e.appendChild(a),n.appendChild(e)})),e.appendChild(n)},T=(t,e)=>{const n=document.createElement("div");n.setAttribute("class","projectInfoTitle");const o=document.createElement("div");o.setAttribute("class","projectInfoAdditional");const r=document.createElement("div");r.setAttribute("class","left");const s=document.createElement("div");s.setAttribute("class","urgencyContainer");const a=document.createElement("div");a.setAttribute("class","dueDateContainer");const i=document.createElement("div");i.setAttribute("class","numberOfTasksContainer"),i.textContent="Tasks: "+t.state.tasks.length,n.textContent=t.state.title,s.textContent=t.state.urgent,a.textContent=t.state.dueDate;const d=document.createElement("div");d.setAttribute("class","right");const c=document.createElement("button");c.setAttribute("class","addTaskButton");const l=document.createElement("button");l.setAttribute("class","deleteProjectButton");const p=document.createElement("button");p.setAttribute("class","editProjectButton"),c.textContent="Add Task",l.textContent="Delete Project",p.textContent="Edit Project",r.appendChild(s),r.appendChild(a),r.appendChild(i),d.appendChild(c),d.appendChild(p),d.appendChild(l),o.appendChild(r),o.appendChild(d),e.appendChild(n),e.appendChild(o)},D=()=>{for(;E.firstChild;)E.removeChild(E.firstChild)},I=t=>t.map((t=>{return e=t.state,Object.assign({state:e},v(e),(t=>({getID:()=>t.id,getCompleteStatus:()=>t.complete,toggleComplete:()=>{t.complete?t.complete=!1:t.complete=!0}}))(e));var e}));let S=[],P=1,N=0;const O=document.createElement("div");O.setAttribute("id","projects");const B=document.createElement("div");B.setAttribute("id","addProjects");const M=document.createElement("button");M.setAttribute("id","addProject"),M.textContent="+",B.appendChild(M);const U=document.createElement("div");U.textContent="Add Project",B.appendChild(U);const q=document.createElement("div");q.setAttribute("class","projectsContainer");const R=t=>{const e=function(t){let e={title:t.title,description:t.description,dueDate:t.dueDate,urgent:t.urgent,notes:t.notes,id:-1,complete:!1,tasks:[],tasksIds:0},n=t=>{for(let n of e.tasks)if(n.state.id==t)return n};return Object.assign({addTask:t=>{const n=x(t);n.setID(++e.tasksIds),e.tasks.push(n)},deleteTask:t=>(e.tasks=e.tasks.filter((e=>e.state.id!=t)),e.tasks),markCompleted:()=>{if(0==e.tasks.length)return!1;for(let t of e.tasks)if(!t.getCompleteStatus())return!1;return!0},completedTask:t=>{n(t).toggleComplete()},findTask:n,state:e},v(e))}(t);e.setID(++N),S.push(e),j(e),P=e.state.id,L(),W(),e.isDue(),z()},z=()=>{for(;q.firstChild;)q.removeChild(q.firstChild);L(),S.forEach((t=>{const e=document.createElement("div");e.setAttribute("class","projectDiv"),e.setAttribute("id",`${t.state.id}`);const n=document.createElement("div");n.setAttribute("class","projectBar");const o=document.createElement("div");o.setAttribute("class","projectTitle"),o.textContent=t.state.title;const r=document.createElement("div");r.setAttribute("class","dueDate"),r.textContent=t.state.dueDate;const s=document.createElement("div");s.setAttribute("class","urgency"),s.textContent=t.state.urgent;const a=document.createElement("div");a.setAttribute("class","projectContentWrapper");const i=document.createElement("div");i.setAttribute("class","projectContent"),t.markCompleted()?(e.setAttribute("style","background-color:lightgreen;"),a.setAttribute("style","background-color:lightgreen;")):t.isDue()||(e.setAttribute("style","background-color:#bd4949; color:red;"),a.setAttribute("style","background-color:#bd4949; color:red;"));const d=document.createElement("div"),c=document.createElement("button");d.setAttribute("class","openProject"),c.setAttribute("class","openProject"),c.textContent="Open Project",d.appendChild(c),n.appendChild(o),n.appendChild(r),n.appendChild(s),i.appendChild(d),a.appendChild(i),e.appendChild(n),e.appendChild(a),q.appendChild(e)}))};O.appendChild(B),O.appendChild(q);const L=()=>{localStorage.setItem("projects",JSON.stringify(S))},W=()=>{localStorage.setItem("projectIds",N)};(()=>{const t=JSON.parse(localStorage.getItem("projects"));t?(S=(t=>t.map((t=>{return(e=t.state).tasks=I(e.tasks),Object.assign({state:e},v(e),(t=>({addTask:e=>{const n=x(e);n.setID(++t.tasksIds),t.tasks.push(n)},deleteTask:e=>(t.tasks=t.tasks.filter((t=>t.state.id!=e)),t.tasks),completedTask:e=>{let n;for(let o of t.tasks)o.state.id==e&&(n=o);n.state.complete?n.state.complete=!1:n.state.complete=!0},findTask:e=>{for(let n of t.tasks)if(n.state.id==e)return n},markCompleted:()=>{if(0==t.tasks.length)return!1;for(let e of t.tasks)if(!e.getCompleteStatus())return!1;return!0}}))(e));var e})))(t),N=Number(localStorage.getItem("projectIds"))):(R({title:"PROJECT X",description:"Short and brief Description",notes:"Very long note to remember",dueDate:"2100-12-21",urgent:"Urgent/Important"}),localStorage.setItem("projects",JSON.stringify(S)),localStorage.setItem("projectIds",N)),z()})();var J=n(247),_={};_.styleTagTransform=b(),_.setAttributes=l(),_.insert=d().bind(null,"head"),_.domAPI=a(),_.insertStyleElement=u(),r()(J.A,_),J.A&&J.A.locals&&J.A.locals;let F,$,H=-1;G("submit",".form",(t=>{const e=document.querySelector(".form");t.preventDefault();const n=new FormData(e);F.close();let o={title:n.get("title"),description:n.get("description"),urgent:n.get("urgent"),dueDate:n.get("dueDate"),notes:n.get("notes")};switch(H){case 1:R(o);break;case 2:(t=>{for(let e of S)e.state.id==P&&(e.changeState(t),j(e),z())})(o);break;case 3:(t=>{for(let e of S)e.state.id==P&&(e.addTask(t),j(e),z())})(o);break;case 4:((t,e)=>{const n=e.target.closest(".Tasks").id;for(let e of S)e.state.id==P&&(e.findTask(n).changeState(t),j(e))})(o,$)}e.reset()}));const V=document.querySelector("#main"),X=(()=>{const t=document.createElement("dialog");t.setAttribute("class","modal");const e=document.createElement("form");e.setAttribute("class","form"),e.setAttribute("method","dialog");const n=document.createElement("label");n.textContent="Title",n.setAttribute("for","title");const o=document.createElement("input");o.setAttribute("id","title"),o.setAttribute("name","title"),o.required=!0,e.appendChild(n),e.appendChild(o);const r=document.createElement("label");r.textContent="Description",r.setAttribute("for","description");const s=document.createElement("input");s.setAttribute("id","description"),s.setAttribute("name","description"),s.required=!0,e.appendChild(r),e.appendChild(s);const a=document.createElement("label");a.textContent="Notes",a.setAttribute("for","notes");const i=document.createElement("input");i.setAttribute("id","notes"),i.setAttribute("name","notes"),i.required=!0,e.appendChild(a),e.appendChild(i);const d=document.createElement("label");d.textContent="DueDate",d.setAttribute("for","dueDate");const c=document.createElement("input");c.setAttribute("id","dueDate"),c.setAttribute("type","date"),c.setAttribute("name","dueDate"),c.required=!0,e.appendChild(d),e.appendChild(c);const l=document.createElement("label");l.textContent="Urgency",l.setAttribute("for","urgent");const p=document.createElement("select");["Urgent/Important","Important/Not Urgent","Urgent/Not Important","Not Important/Not Urgent"].forEach((t=>{const e=document.createElement("option");e.textContent=t,e.setAttribute("value",`${t}`),p.appendChild(e)})),p.setAttribute("id","urgent"),p.setAttribute("name","urgent"),e.appendChild(l),e.appendChild(p);const u=document.createElement("button");return u.setAttribute("class","doneButton"),u.setAttribute("type","submit"),u.textContent="Done",e.appendChild(u),t.appendChild(e),t})();function G(t,e,n){document.addEventListener(t,(t=>{t.target.matches(e)&&n(t)}))}V.appendChild(O),V.appendChild(E),V.appendChild(X),G("click",".projectTitle",(t=>{t.target.closest(".projectDiv").classList.toggle("projectDiv-Open")})),G("click","button.openProject",(t=>{const e=t.target.closest(".projectDiv").id;for(let t of S)t.state.id==e&&(j(t),P=t.state.id)})),G("click",".taskTitle",(t=>{t.target.closest(".Tasks").classList.toggle("Tasks-Open")})),G("click",".addTaskButton",(()=>{(t=>{t.showModal(),F=t,H=3})(X)})),G("click","button#addProject",(t=>{(t=>{t.showModal(),F=t,H=1})(X)})),G("click",".editProjectButton",(()=>{(t=>{t.showModal(),F=t,H=2})(X)})),G("click",".deleteProjectButton",(()=>{S=S.filter((t=>t.state.id!=P)),D(),P=1,z()})),G("click",".deleteTaskButton",(t=>{const e=t.target.closest(".Tasks").id;for(let t of S)t.state.id==P&&(t.state.tasks=t.deleteTask(e),j(t),z())})),G("click",".editTaskButton",(t=>{((t,e)=>{t.showModal(),F=t,H=4,$=e})(X,t)})),G("click",".taskCompletedButton",(t=>{t.target;const e=t.target.closest(".Tasks").id;for(let t of S)t.state.id==P&&(t.completedTask(e),j(t),z())}))})();