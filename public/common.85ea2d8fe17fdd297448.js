(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n("A36C"),s=n("iWo5"),i=n("qULd");const a=(t,e)=>{let n,a;const r=(t,o,s)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(t,o);i&&e(i)?i!==n&&(l(),c(i,s)):l()},c=(t,e)=>{n=t,a||(a=n);const s=n;Object(o.f)(()=>s.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(o.f)(()=>e.classList.remove("ion-activated")),t&&a!==n&&n.click(),n=void 0};return Object(s.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>r(t.currentX,t.currentY,i.a),onMove:t=>r(t.currentX,t.currentY,i.b),onEnd:()=>{l(!0),Object(i.e)(),a=void 0}})}},"5eYs":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n("lJxs"),s=n("nYR2"),i=n("8Y7J"),a=n("wD+u"),r=n("fMxG");let c=(()=>{class t{constructor(t,e){this.afs=t,this.storage=e,this.symptomsCollection=this.afs.collection("symptoms")}getAll(){return this.afs.collection("symptoms").snapshotChanges().pipe(Object(o.a)(t=>t.map(t=>{const e=t.payload.doc.id,n=t.payload.doc.data();return Object.assign({id:e},n)})))}getById(t){return this.symptomsCollection.doc(t).valueChanges()}addSymptoms(t,e){const n=this.afs.createId(),{name:o,idname:s,description:i}=t;this.afs.collection("symptoms").doc(n).set({name:o,idname:s,description:i}),e&&this.uploadImg(n,e)}updateSymptoms(t,e,n){this.symptomsCollection.doc(e).update(Object.assign({},t)),n&&this.uploadImg(e,n)}deleteSymptoms(t,e){this.symptomsCollection.doc(t).delete(),e&&this.removerImg(t,e,!1)}uploadImg(t,e){const n=`symptoms/${t}/${e.name}`,o=this.storage.ref(n);o.put(e).snapshotChanges().pipe(Object(s.a)(()=>{o.getDownloadURL().subscribe(e=>{this.symptomsCollection.doc(t).update({imgUrl:e,filePath:n})})})).subscribe()}removerImg(t,e,n=!0){this.storage.ref(e).delete(),n&&this.symptomsCollection.doc(t).update({imgUrl:"",filePath:""})}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(a.a),i.Sb(r.a))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"74mu":function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return r});const o=(t,e)=>null!==e.closest(t),s=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},a=/^[a-z][a-z0-9+\-.]*:/,r=async(t,e,n,o)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,n,o)}return!1}},FlJQ:function(t,e,n){"use strict";n.d(e,"a",function(){return o});class o{constructor(){this.tipousuario="paciente"}}},I4Yg:function(t,e,n){"use strict";n.d(e,"a",function(){return o});class o{}},NLjV:function(t,e,n){"use strict";n.d(e,"a",function(){return o});class o{constructor(){this.datanascimento="",this.tiposanguineo="",this.sexo=""}}},Na7f:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n("8Y7J"),s=n("wD+u"),i=n("fMxG");let a=(()=>{class t{constructor(t,e){this.afs=t,this.storage=e,this.attendanceCollection=this.afs.collection("attend"),this.agenteCollection=this.afs.collection("users"),this.attendCollection=this.afs.collection("attend"),this.dateclosed=this.dateFormat()}dateFormat(){var t=new Date,e=t.getDate().toString(),n=1==e.length?"0"+e:e,o=(t.getMonth()+1).toString();return n+"/"+(1==o.length?"0"+o:o)+"/"+t.getFullYear()}getById(t){return this.attendanceCollection.doc(t).valueChanges()}getByIdAttend(t){return this.attendCollection.doc(t).valueChanges()}updateStatus(t,e){this.attendCollection.doc(e).update({status:"closed",dateclosed:this.dateclosed})}getByAgId(t){return this.agenteCollection.doc(t).valueChanges()}addMedicament(t,e,n){const{remedio:o,tipo:s,dosagem:i,horario:a,observacao:r}=e,{name:c,registro:l,professional:d}=n;this.attendanceCollection.doc(t).collection("subMedicament").add({remedio:o,tipo:s,dosagem:i,horario:a,observacao:r,name:c,registro:l,professional:d})}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(s.a),o.Sb(i.a))},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},U6Ex:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n("lJxs"),s=n("8Y7J"),i=n("wD+u");let a=(()=>{class t{constructor(t){this.afs=t,this.professionCollection=this.afs.collection("professional")}addProfession(t){const{description:e}=t;this.afs.collection("professional").doc().set({description:e})}getAll(){return this.afs.collection("professional").snapshotChanges().pipe(Object(o.a)(t=>t.map(t=>{const e=t.payload.doc.id,n=t.payload.doc.data();return Object.assign({id:e},n)})))}deleteProfession(t){this.professionCollection.doc(t).delete()}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(i.a))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},ZaV5:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s});const o=async(t,e,n,o,s)=>{if(t)return t.attachViewToDom(e,n,s,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>i.classList.add(t)),s&&Object.assign(i,s),e.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"cK+P":function(t,e,n){"use strict";n.d(e,"a",function(){return o});class o{constructor(){this.address_state="",this.tipousuario="agentesaude",this.admin=!1}}},d3Ko:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n("mrSG"),s=n("8Y7J"),i=n("sZkV");let a=(()=>{class t{constructor(t){this.alertController=t}"showConfirmarExclus\xe3o"(t,e){return Object(o.a)(this,void 0,void 0,function*(){const n=yield this.alertController.create({header:"Remover o item? ",message:`Deseja remover o item: ${t}`,buttons:[{text:"Cancelar"},{text:"Remover",handler:()=>{e()}}]});yield n.present()})}"showConfirmarExclus\xe3oProf"(t,e){return Object(o.a)(this,void 0,void 0,function*(){const n=yield this.alertController.create({header:"Remover o item? ",message:`Deseja remover o item: ${t}`,buttons:[{text:"Cancelar"},{text:"Remover",handler:()=>{e()}}]});yield n.present()})}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(i.a))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},h3R7:function(t,e,n){"use strict";n.d(e,"a",function(){return o});const o={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const o=t*e/n-t+"ms",s=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const o=e/n,s=t*o-t+"ms",i=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},qULd:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return r});const o={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},s=()=>{o.selection()},i=()=>{o.selectionStart()},a=()=>{o.selectionChanged()},r=()=>{o.selectionEnd()},c=t=>{o.impact(t)}},r97l:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n("lJxs"),s=n("8Y7J"),i=n("wD+u");let a=(()=>{class t{constructor(t){this.afs=t,this.attendanceCollection=this.afs.collection("attend"),this.usersCollection=this.afs.collection("users")}getAll(){return this.afs.collection("attend",t=>t.orderBy("status","desc")).snapshotChanges().pipe(Object(o.a)(t=>t.map(t=>{const e=t.payload.doc.id,n=t.payload.doc.data();return Object.assign({id:e},n)})))}getAllU(){return this.afs.collection("users").snapshotChanges().pipe(Object(o.a)(t=>t.map(t=>{const e=t.payload.doc.id,n=t.payload.doc.data();return Object.assign({id:e},n)})))}getById(t){return this.attendanceCollection.doc(t).valueChanges()}getByUid(t){return this.usersCollection.doc(t).valueChanges()}getAllSubAttend(t){return this.afs.collection("attend").doc(t).collection("subAttend").snapshotChanges().pipe(Object(o.a)(t=>t.map(t=>{const e=t.payload.doc.id,n=t.payload.doc.data();return Object.assign({id:e},n)})))}getAllSubMedicament(t){return this.afs.collection("attend").doc(t).collection("subMedicament").snapshotChanges().pipe(Object(o.a)(t=>t.map(t=>{const e=t.payload.doc.id,n=t.payload.doc.data();return Object.assign({id:e},n)})))}getAllSymptoms(t){return this.afs.collection("attend").doc(t).collection("subSymptoms").snapshotChanges().pipe(Object(o.a)(t=>t.map(t=>{const e=t.payload.doc.id,n=t.payload.doc.data();return Object.assign({id:e},n)})))}getTotalAttendance(t){return this.afs.collection("attend",e=>e.where("status","==",t)).snapshotChanges().pipe(Object(o.a)(t=>t.length))}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(i.a))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);