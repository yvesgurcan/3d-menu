(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(23),i=n.n(r),c=n(5),l=n(9),d=n(3),u=n(24),m=n.n(u),s=n(10),h=n(1),p=n(25),b=n.n(p),g=n(8);function v(){var e=b()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n    background: rgb(140, 140, 255);\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return v=function(){return e},e}var E=Object(g.a)(v()),f=n(29);Object(s.b)({OrbitControls:f.a});var y=function(e){var t=e.delayRotation,n=e.autoRotate,r=void 0!==n&&n,i=Object(o.useRef)(),c=Object(s.d)(),l=c.camera,d=c.gl;return Object(s.c)((function(){t||i.current.update()})),a.a.createElement("orbitControls",{enabled:!0,autoRotate:r,ref:i,args:[l,d.domElement],enableDamping:!0,dampingFactor:.1,rotateSpeed:.5})},w=function(e){var t=e.color,n=void 0===t?"rgb(0, 120, 0)":t,o=e.x,r=void 0===o?0:o,i=e.y,c=void 0===i?0:i;return a.a.createElement("mesh",{position:[0,0+r,0+c],rotation:[0,0,0],castShadow:!0},a.a.createElement("sphereGeometry",{attach:"geometry",args:[3.5,100,100]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:n,transparent:!0,roughness:.1,metalness:.1}))},x=n(12),z=n.n(x),k=n(16),C=n.n(k),I=function(e){var t=e.to,n=void 0===t?"/":t,o=e.y,r=void 0===o?0:o,i=e.z,c=void 0===i?0:i,l=e.color,d=void 0===l?"rgb(200, 50, 50)":l,u=C()(e,["to","y","z","color"]);return a.a.createElement("mesh",z()({onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)},position:[0,1.25+r,0+c]},u),a.a.createElement("coneBufferGeometry",{attach:"geometry",args:[1.6,.5,4]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:d,roughness:.3}))},M=function(e){var t=e.to,n=void 0===t?"/":t,o=e.y,r=void 0===o?0:o,i=e.z,c=void 0===i?0:i,l=e.color,d=void 0===l?"moccasin":l,u=C()(e,["to","y","z","color"]);return a.a.createElement("mesh",z()({onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)},position:[0,.5+r,0+c]},u),a.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,1,2]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:d,roughness:.5}))},L=function(e){var t=e.to,n=void 0===t?"/menu1":t,o=e.mainColor,r=void 0===o?"rgb(220, 0, 60)":o,i=e.roofColor,c=void 0===i?"rgb(140, 0, 30)":i,l=e.y,d=void 0===l?0:l,u=e.z,m=void 0===u?3.5:u,s=e.mainRotation,h=void 0===s?[.5*Math.PI,.25*Math.PI,0]:s,p=e.roofRotation,b=void 0===p?[.5*Math.PI,.5*Math.PI,0]:p;return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,{to:n,y:d-.75,z:m+.75,color:c,rotation:b}),a.a.createElement(M,{to:n,y:d,z:m,color:r,rotation:h}))},O=function(e){var t=e.to,n=void 0===t?"/menu2":t,o=e.mainColor,r=void 0===o?"yellow":o,i=e.roofColor,c=void 0===i?"darkkhaki":i,l=e.y,d=void 0===l?3:l,u=e.z,m=void 0===u?0:u,s=e.mainRotation,h=void 0===s?[0,.25*Math.PI,0]:s,p=e.roofRotation,b=void 0===p?[0,0,0]:p;return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,{to:n,color:c,y:d,z:m,rotation:b}),a.a.createElement(M,{to:n,y:d,z:m,color:r,rotation:h}))},R=function(e){var t=e.to,n=void 0===t?"/inside":t,o=e.mainColor,r=void 0===o?"blue":o,i=e.roofColor,c=void 0===i?"darkblue":i,l=e.y,d=void 0===l?-.25:l,u=e.z,m=void 0===u?-3.5:u,s=e.mainRotation,h=void 0===s?[.5*Math.PI,.25*Math.PI,0]:s,p=e.roofRotation,b=void 0===p?[-.5*Math.PI,0,0]:p;return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,{to:n,y:d-.75,z:m-.75,color:c,rotation:b}),a.a.createElement(M,{to:n,y:d,z:m,color:r,rotation:h}))},j=function(){var e=Object(o.useState)(0),t=m()(e,2),n=t[0],r=t[1],i=Object(o.useRef)(),c=Object(o.useRef)(n);function l(){c.current=3e3,r(3e3)}function d(e){var t=Math.max(0,c.current-1e3);r(t),c.current=t}return Object(o.useEffect)((function(){if(i.current)return i.current.addEventListener("click",l),setInterval((function(){return d(n)}),1e3),i.current.addEventListener("touchstart",l),setInterval((function(){return d(n)}),1e3),function(){i.current.removeEventListener("click",l),i.current.removeEventListener("touchstart",l)}}),[i]),a.a.createElement("span",{ref:i},a.a.createElement(E,null),a.a.createElement(s.a,{shadowMap:!0,camera:{position:new h.Vector3(-10,0,0)}},a.a.createElement("ambientLight",{intensity:.9}),a.a.createElement("directionalLight",{color:"rgb(200, 200, 100)",intensity:.3,position:[-2,9,0]}),a.a.createElement("directionalLight",{color:"rgb(200, 200, 100)",intensity:.2,position:[7,-3,-5]}),a.a.createElement("directionalLight",{color:"rgb(200, 200, 100)",intensity:.1,position:[10,6,5]}),a.a.createElement(L,null),a.a.createElement(O,null),a.a.createElement(R,null),a.a.createElement(w,null),a.a.createElement(y,{autoRotate:!0,delayRotation:n})))},q=g.b.div.withConfig({displayName:"ViewLayer",componentId:"sc-2epb9-0"})(["background:",";position:absolute;top:0;left:0;width:100vw;height:100vh;box-sizing:border-box;z-index:",";color:white;"],(function(e){return e.backgroundColor}),(function(e){return e.zIndex})),P=function(e){var t=e.color,n=void 0===t?"rgb(200, 200, 200)":t,o=e.x,r=void 0===o?0:o,i=e.y,c=void 0===i?0:i,l=e.z,d=void 0===l?0:l,u=e.length,m=void 0===u?0:u,s=e.width,h=void 0===s?0:s,p=e.depth,b=void 0===p?0:p,g=e.props;return a.a.createElement("mesh",z()({position:[0+r,0+c,0+d]},g),a.a.createElement("boxBufferGeometry",{attach:"geometry",args:[b,h,m]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:n,roughness:.5}))},B=P,S=P,H=Object(g.b)(l.b).withConfig({displayName:"Inside__BackLink",componentId:"tfw893-0"})(["padding:2rem;position:absolute;z-index:610;"]),N=g.b.div.withConfig({displayName:"MenuOverlay",componentId:"sc-1hgrzbb-0"})(["position:absolute;top:0;left:0;padding:3rem;width:100vw;height:100vh;box-sizing:border-box;color:white;"]),F=g.b.div.withConfig({displayName:"MenuContent",componentId:"sc-1amt43g-0"})(["background:",";padding:3rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor})),G=Object(g.b)(q).withConfig({displayName:"Menu2__ViewLayer",componentId:"caebbu-0"})(["padding:2rem;"]),U=document.getElementById("root"),V=Object(c.a)();i.a.render(a.a.createElement(l.a,{history:V},a.a.createElement(d.a,{component:function(e){var t=e.history;return window.appHistory=t,a.a.createElement(j,null)}}),a.a.createElement(d.c,null,a.a.createElement(d.a,{path:"/inside",component:function(){return a.a.createElement(q,{backgroundColor:"rgb(140, 140, 255)",zIndex:600},a.a.createElement(H,{to:"/"},"Back"),a.a.createElement(s.a,{shadowMap:!0,camera:{position:new h.Vector3(-10,0,0)}},a.a.createElement("ambientLight",{intensity:.5}),a.a.createElement("hemisphereLight",{color:"rgb(100, 100, 100)",intensity:.5,position:[10,5,0]}),a.a.createElement(B,{color:"rgb(0, 0, 205)",x:-60,y:0,z:0,length:70,width:30}),a.a.createElement(B,{color:"rgb(0, 0, 205)",x:60,y:0,z:0,length:70,width:30}),a.a.createElement(B,{color:"rgb(0, 0, 205)",x:0,y:15,z:0,length:70,depth:120}),a.a.createElement(B,{color:"rgb(0, 0, 205)",x:0,y:-15,z:0,length:70,depth:120}),a.a.createElement(B,{color:"rgb(0, 0, 205)",x:0,y:0,z:35,depth:120,width:30}),a.a.createElement(B,{color:"rgb(0, 0, 205)",x:0,y:0,z:-35,depth:120,width:30}),a.a.createElement(S,{color:"rgb(50, 50, 50)",x:30,y:-12,z:-10,depth:5,width:5,length:5}),a.a.createElement(S,{color:"rgb(50, 50, 50)",x:35,y:-12,z:0,depth:5,width:5,length:5}),a.a.createElement(S,{color:"rgb(50, 50, 50)",x:30,y:-12,z:10,depth:5,width:5,length:5}),a.a.createElement(S,{color:"rgb(50, 50, 50)",x:-30,y:-12,z:-10,depth:5,width:5,length:5}),a.a.createElement(S,{color:"rgb(50, 50, 50)",x:-35,y:-12,z:0,depth:5,width:5,length:5}),a.a.createElement(S,{color:"rgb(50, 50, 50)",x:-30,y:-12,z:10,depth:5,width:5,length:5}),a.a.createElement(y,null)))}}),a.a.createElement(d.a,{path:"/menu1",component:function(){return a.a.createElement(N,null,a.a.createElement(F,{backgroundColor:"rgb(245, 0, 0, 0.75)"},a.a.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),a.a.createElement("br",null),a.a.createElement(l.b,{to:"/"},"Back")))}}),a.a.createElement(d.a,{path:"/menu2",component:function(){return a.a.createElement(G,{backgroundColor:"rgb(180, 180, 0)",zIndex:600},a.a.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),a.a.createElement("br",null),a.a.createElement(l.b,{to:"/"},"Back"))}}))),U)}},[[53,1,2]]]);