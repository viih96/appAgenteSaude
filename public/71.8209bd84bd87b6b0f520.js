(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{lqtZ:function(e,t,n){"use strict";n.r(t),n.d(t,"UpdateUserPageModule",function(){return y});var o=n("SVse"),i=n("s7LF"),s=n("sZkV"),r=n("iInd"),a=n("mrSG");class u{constructor(){this.tipousuario="agentesaude",this.filePath="",this.imgUrl=""}}var b=n("8Y7J"),c=n("VRCc"),l=n("nYR2"),d=n("wD+u"),g=n("fMxG");let h=(()=>{class e{constructor(e,t){this.afs=e,this.storage=t,this.usersCollection=this.afs.collection("users")}getById(e){return this.usersCollection.doc(e).valueChanges()}updateUser(e,t,n){this.usersCollection.doc(t).update(Object.assign({},e)),n&&this.uploadImg(t,n)}uploadImg(e,t){const n=`users/${e}/${t.name}`,o=this.storage.ref(n);o.put(t).snapshotChanges().pipe(Object(l.a)(()=>{o.getDownloadURL().subscribe(t=>{this.usersCollection.doc(e).update({imgUrl:t,filePath:n})})})).subscribe()}removerImg(e,t,n=!0){this.storage.ref(t).delete(),n&&this.usersCollection.doc(e).update({imgUrl:"",filePath:""})}}return e.\u0275fac=function(t){return new(t||e)(b.Sb(d.a),b.Sb(g.a))},e.\u0275prov=b.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=n("UXh4");function p(e,t){1&e&&b.Mb(0,"img",22)}function f(e,t){if(1&e){const e=b.Pb();b.Ob(0,"ion-input",23),b.Wb("change",function(t){return b.jc(e),b.Yb(2).upload(t)}),b.Nb()}}function O(e,t){if(1&e&&(b.Ob(0,"ion-item"),b.mc(1,p,1,0,"img",20),b.mc(2,f,1,0,"ion-input",21),b.Nb()),2&e){const e=b.Yb();b.Bb(1),b.dc("ngIf",""==e.user.imgUrl),b.Bb(1),b.dc("ngIf",""==e.user.imgUrl)}}const M=function(){return["/dashboard"]},N=[{path:"",component:(()=>{class e{constructor(e,t,n,o){this.afa=e,this.updateU=t,this.toast=n,this.router=o,this.file=null,this.filePath="",this.imgUrl="",this.hasImg=!1}ngOnInit(){this.user=new u,this.afa.authState.subscribe(e=>{this.userId=e.uid,this.research()})}research(){const e=this.updateU.getById(this.userId).subscribe(t=>{e.unsubscribe();const{email:n,name:o,registro:i,address_state:s,sexo:r,contato:a,tipousuario:u,filePath:b,imgUrl:c}=t;this.user.email=n,this.user.name=o,this.user.registro=i,this.user.address_state=s,this.user.sexo=r,this.user.contato=a,this.user.tipousuario=u,b&&c&&(this.user.filePath=b,this.user.imgUrl=c),this.hasImg=""!=this.user.imgUrl})}upload(e){this.file=e.target.files.length?e.target.files[0]:null}removerImg(e,t){return Object(a.a)(this,void 0,void 0,function*(){try{yield this.updateU.removerImg(e,t),this.user.imgUrl="",this.user.filePath="",this.hasImg=!1}catch(n){this.toast.showMessageTop(n,"danger"),console.log(n)}})}onSubmit(){return Object(a.a)(this,void 0,void 0,function*(){try{yield this.updateU.updateUser(this.user,this.userId,this.file),this.toast.showMessageBottom("Usuario alterado com sucesso!!!","dark-green"),this.router.navigate(["dashboard/"])}catch(e){this.toast.showMessageTop(e,"danger"),console.log(e)}})}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(c.a),b.Lb(h),b.Lb(m.a),b.Lb(r.g))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-update-user"]],decls:47,vars:13,consts:[["color","dark-green"],["slot","start"],[3,"ngSubmit"],[4,"ngIf"],[3,"hidden"],["alt","",1,"img-thumbnail","d-block",2,"max-width","100px",3,"src","hidden"],["color","danger",3,"hidden","click"],["name","trash"],["position","stacked"],["name","email","type","email",3,"ngModel","ngModelChange"],["name","namecompleto","type","text",3,"ngModel","ngModelChange"],["name","profissional","type","text"],["name","registro","type","text",3,"ngModel","ngModelChange"],["name","estado","type","text",3,"ngModel","ngModelChange"],["name","contato","type","text",3,"ngModel","ngModelChange"],["name","sexo","type","text",3,"ngModel","ngModelChange"],[1,"btn"],[1,"botoes"],["expand","block","color","dark-green","id","salvar","type","submit",1,"botao"],["expand","block","color","warning",1,"botao",3,"routerLink"],["src","/assets/images/fotousuariopadrao.png","alt","","class","img-thumbnail d-block","style","max-width: 100px;",4,"ngIf"],["color","warning","type","file","accept","image/png,image/jpeg",3,"change",4,"ngIf"],["src","/assets/images/fotousuariopadrao.png","alt","",1,"img-thumbnail","d-block",2,"max-width","100px"],["color","warning","type","file","accept","image/png,image/jpeg",3,"change"]],template:function(e,t){1&e&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-buttons",1),b.Mb(3,"ion-menu-button"),b.Nb(),b.Ob(4,"ion-title"),b.nc(5,"Editar Perfil do Agente de Sa\xfade"),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content"),b.Ob(7,"form",2),b.Wb("ngSubmit",function(){return t.onSubmit()}),b.mc(8,O,3,2,"ion-item",3),b.Ob(9,"ion-item",4),b.Mb(10,"img",5),b.Ob(11,"ion-button",6),b.Wb("click",function(){return t.removerImg(t.userId,t.user.filePath)}),b.Mb(12,"ion-icon",7),b.Nb(),b.Nb(),b.Ob(13,"ion-item"),b.Ob(14,"ion-label",8),b.nc(15,"E-mail"),b.Nb(),b.Ob(16,"ion-input",9),b.Wb("ngModelChange",function(e){return t.user.email=e}),b.Nb(),b.Nb(),b.Ob(17,"ion-item"),b.Ob(18,"ion-label",8),b.nc(19,"Nome Completo"),b.Nb(),b.Ob(20,"ion-input",10),b.Wb("ngModelChange",function(e){return t.user.name=e}),b.Nb(),b.Nb(),b.Ob(21,"ion-item"),b.Ob(22,"ion-label",8),b.nc(23,"Profiss\xe3o"),b.Nb(),b.Mb(24,"ion-input",11),b.Nb(),b.Ob(25,"ion-item"),b.Ob(26,"ion-label",8),b.nc(27,"Registro"),b.Nb(),b.Ob(28,"ion-input",12),b.Wb("ngModelChange",function(e){return t.user.registro=e}),b.Nb(),b.Nb(),b.Ob(29,"ion-item"),b.Ob(30,"ion-label",8),b.nc(31,"Estado"),b.Nb(),b.Ob(32,"ion-input",13),b.Wb("ngModelChange",function(e){return t.user.address_state=e}),b.Nb(),b.Nb(),b.Ob(33,"ion-item"),b.Ob(34,"ion-label",8),b.nc(35,"Contato"),b.Nb(),b.Ob(36,"ion-input",14),b.Wb("ngModelChange",function(e){return t.user.contato=e}),b.Nb(),b.Nb(),b.Ob(37,"ion-item"),b.Ob(38,"ion-label",8),b.nc(39,"Sexo"),b.Nb(),b.Ob(40,"ion-input",15),b.Wb("ngModelChange",function(e){return t.user.sexo=e}),b.Nb(),b.Nb(),b.Ob(41,"div",16),b.Ob(42,"div",17),b.Ob(43,"ion-button",18),b.nc(44,"Salvar"),b.Nb(),b.Ob(45,"ion-button",19),b.nc(46,"Voltar"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.Bb(8),b.dc("ngIf",""==t.user.imgUrl),b.Bb(1),b.dc("hidden",!t.hasImg),b.Bb(1),b.ec("src",t.user.imgUrl,b.kc),b.dc("hidden",!t.hasImg),b.Bb(1),b.dc("hidden",!t.hasImg),b.Bb(5),b.dc("ngModel",t.user.email),b.Bb(4),b.dc("ngModel",t.user.name),b.Bb(8),b.dc("ngModel",t.user.registro),b.Bb(4),b.dc("ngModel",t.user.address_state),b.Bb(4),b.dc("ngModel",t.user.contato),b.Bb(4),b.dc("ngModel",t.user.sexo),b.Bb(5),b.dc("routerLink",b.fc(12,M)))},directives:[s.l,s.F,s.e,s.t,s.E,s.h,i.i,i.e,i.f,o.k,s.o,s.d,s.m,s.p,s.n,s.M,i.d,i.g,s.K,r.h],styles:[""]}),e})()}];let I=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[r.j.forChild(N)],r.j]}),e})(),y=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[o.c,i.a,s.G,I]]}),e})()}}]);