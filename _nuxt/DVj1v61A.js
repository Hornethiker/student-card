import{_ as b}from"./X9Z4WUA0.js";import{d as f,J as g,r as A,t as d,v as i,K as o,x as t,y as l,L as x}from"./COQk30Az.js";const c=[{id:"Irsmushs",name:"IRSHAD MUSILIYARAKATH",dob:"21/07/1997",passport:"X8999044"},{id:"Lsbuna",name:"LIBINA SIBY",dob:"08/02/1999",passport:"U5568663"},{id:"Hjsans",name:"JANARDHANAN HARIHARASUBRAMANIAN",dob:"19/03/1998",passport:"P1612395"},{id:"Rhnsotsh",name:"ROHITH NARENDRA BABU",dob:"12/11/1992",passport:"W1931352"}],I={class:"relative min-h-screen flex flex-col items-center bg-[#102236] text-white"},N={key:0,class:"absolute w-[90%] max-w-[600px] min-w-[420px] -ml-5 border border-gray-700 mt-[150px] rounded-md overflow-hidden"},R={class:"p-3 border rounded-lg"},y=f({__name:"[name]",setup(v){const u=g().params.name,r=A(c.find(n=>n.id===u));function m(n){const e=n.split(" ");return e.map((s,a)=>a===0||a===e.length-1?s.length<=3?s:s[0]+"?".repeat(s.length-4)+s.slice(-3):"?".repeat(s.length)).join(" ")}function p(n){return n.length<=6?n:n[0]+"?".repeat(n.length-4)+n.slice(-3)}return(n,e)=>(d(),i("div",I,[o(r)?(d(),i("div",N,[t("div",R,[e[3]||(e[3]=t("div",{class:"bg-green-500 border border-[#ddd] px-3 text-white py-2 font-bold"}," Individual Details ",-1)),t("table",null,[t("tbody",null,[t("tr",null,[e[0]||(e[0]=t("td",null,"Full Name",-1)),t("td",null,l(m(o(r).name)),1)]),t("tr",null,[e[1]||(e[1]=t("td",null,"Date of Birth",-1)),t("td",null,l(o(r).dob),1)]),t("tr",null,[e[2]||(e[2]=t("td",null,"Passport",-1)),t("td",null,l(p(o(r).passport)),1)])])])])])):x("",!0),e[4]||(e[4]=t("div",{class:"absolute bottom-[20%] right-0 text-center text-gray-400"},[t("img",{src:b,alt:"Pedagogium Logo",class:"mx-auto mb-2"})],-1))]))}});export{y as default};
