(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{Gl7d:function(n,t,e){"use strict";e.r(t),e.d(t,"AttendanceInformationPageModule",function(){return S});var o=e("SVse"),i=e("s7LF"),b=e("sZkV"),s=e("iInd"),c=e("I4Yg"),a=e("NLjV");class r{}var d=e("8Y7J"),u=e("cAy6"),l=e("r97l"),O=e("Na7f");function N(n,t){if(1&n&&(d.Ob(0,"ion-item"),d.Ob(1,"ion-label",6),d.nc(2,"Local"),d.Nb(),d.Ob(3,"ion-input"),d.nc(4),d.Nb(),d.Ob(5,"ion-label",6),d.nc(6,"Escala"),d.Nb(),d.Ob(7,"ion-input"),d.nc(8),d.Nb(),d.Nb()),2&n){const n=t.$implicit;d.Bb(4),d.oc(n.pain),d.Bb(4),d.oc(n.scale)}}function m(n,t){if(1&n&&(d.Ob(0,"ion-item"),d.Ob(1,"ion-input"),d.nc(2),d.Nb(),d.Nb()),2&n){const n=t.$implicit;d.Bb(2),d.oc(n.name)}}function h(n,t){if(1&n&&(d.Ob(0,"ion-item"),d.Ob(1,"ion-label",6),d.nc(2,"Observa\xe7\xe3o"),d.Nb(),d.Ob(3,"ion-input"),d.nc(4),d.Nb(),d.Ob(5,"ion-label",6),d.nc(6,"Rem\xe9dio"),d.Nb(),d.Ob(7,"ion-input"),d.nc(8),d.Nb(),d.Ob(9,"ion-label",6),d.nc(10,"Tipo"),d.Nb(),d.Ob(11,"ion-input"),d.nc(12),d.Nb(),d.Ob(13,"ion-label",6),d.nc(14,"Dosagem"),d.Nb(),d.Ob(15,"ion-input"),d.nc(16),d.Nb(),d.Ob(17,"ion-label",6),d.nc(18,"Hor\xe1rio"),d.Nb(),d.Ob(19,"ion-input"),d.nc(20),d.Nb(),d.Ob(21,"ion-label",6),d.nc(22),d.Nb(),d.Ob(23,"ion-input"),d.nc(24),d.Nb(),d.Nb()),2&n){const n=t.$implicit;d.Bb(4),d.oc(n.observacao),d.Bb(4),d.oc(n.remedio),d.Bb(4),d.oc(n.tipo),d.Bb(4),d.oc(n.dosagem),d.Bb(4),d.qc("de: ",n.horario," em ",n.horario,"hs"),d.Bb(2),d.qc("",n.professional," / Registro ",n.registro,""),d.Bb(2),d.oc(n.name)}}const p=function(n){return["/medicament",n]};function g(n,t){if(1&n&&(d.Ob(0,"ion-button",10),d.nc(1,"Medicar"),d.Nb()),2&n){const n=d.Yb();d.dc("routerLink",d.gc(1,p,n.attendId))}}const f=function(){return["/attendance"]},w=[{path:"",component:(()=>{class n{constructor(n,t,e,o,i){this.activatedRoute=n,this.userService=t,this.attendanceService=e,this.medicamentService=o,this.router=i,this.d=new Date,this.yearNow=this.d.getFullYear(),this.subAttends=[],this.subMedicaments=[],this.symptom=[]}ngOnInit(){if(this.attend=new c.a,this.subAttend=new r,this.user=new a.a,this.attendId=this.activatedRoute.snapshot.params.id,this.attendId){const n=this.attendanceService.getById(this.attendId).subscribe(t=>{n.unsubscribe();const{date:e,name:o,cartaosus:i,status:b,uId:s}=t;this.attend.name=o,this.attend.date=e,this.attend.cartaosus=i,this.attend.dateclosed=null==t.dateclosed?"":t.dateclosed,this.attend.status=b;const c=this.userService.getByIdPaciente(s).subscribe(n=>{c.unsubscribe();const{name:t,datanascimento:e,tiposanguineo:o,sexo:i,celular:b,faixaetaria:s,comorbidades:a,cartaosus:r}=n;this.user.name=t,this.user.datanascimento=e,this.dnascimento=this.yearNow-parseInt(e.substring(0,4)),this.user.tiposanguineo=o,this.user.sexo=i,this.user.celular=b,this.user.faixaetaria=s,this.user.comorbidades=a,this.user.cartaosus=r,console.log(n)})});this.getAllSubAttend(),this.getAllSymptoms(),this.getAllSubMedicament()}}getAllSubAttend(){const n=this.attendanceService.getAllSubAttend(this.attendId).subscribe(t=>{n.unsubscribe(),console.log(t),this.subAttends=t})}getAllSymptoms(){const n=this.attendanceService.getAllSymptoms(this.attendId).subscribe(t=>{n.unsubscribe(),console.log(t),this.symptom=t})}getAllSubMedicament(){const n=this.attendanceService.getAllSubMedicament(this.attendId).subscribe(t=>{n.unsubscribe(),console.log(t),this.subMedicaments=t})}getByUid(){const n=this.attendanceService.getByUid(this.userId).subscribe(t=>{n.unsubscribe();const{datanascimento:e,tiposanguineo:o,sexo:i}=t;this.user.datanascimento=null==this.user.datanascimento?"":e,this.user.tiposanguineo=o,this.user.sexo=i,console.log(t),this.users=t})}}return n.\u0275fac=function(t){return new(t||n)(d.Lb(s.a),d.Lb(u.a),d.Lb(l.a),d.Lb(O.a),d.Lb(s.g))},n.\u0275cmp=d.Fb({type:n,selectors:[["app-attendance-information"]],decls:98,vars:15,consts:[["color","dark-green"],["slot","start"],["size","12"],["position","stacked",1,"texto"],["disabled","true"],["size","6"],["position","stacked"],[4,"ngFor","ngForOf"],["expand","block","color","success",3,"routerLink",4,"ngIf"],["expand","block","color","warning",3,"routerLink"],["expand","block","color","success",3,"routerLink"]],template:function(n,t){1&n&&(d.Ob(0,"ion-header"),d.Ob(1,"ion-toolbar",0),d.Ob(2,"ion-buttons",1),d.Mb(3,"ion-menu-button"),d.Nb(),d.Ob(4,"ion-title"),d.nc(5,"INFORMA\xc7\xd5ES"),d.Nb(),d.Nb(),d.Nb(),d.Ob(6,"ion-content"),d.Ob(7,"ion-list"),d.Ob(8,"ion-item"),d.Ob(9,"ion-grid"),d.Ob(10,"ion-row"),d.Ob(11,"ion-col",2),d.Ob(12,"ion-item"),d.Ob(13,"ion-label",3),d.nc(14,"Data de abertura do atendimento"),d.Nb(),d.Ob(15,"ion-input",4),d.Ob(16,"span"),d.nc(17),d.Nb(),d.Nb(),d.Nb(),d.Ob(18,"ion-item"),d.Ob(19,"ion-label",3),d.nc(20,"Data de fechamento do atendimento"),d.Nb(),d.Ob(21,"ion-input",4),d.Ob(22,"span"),d.nc(23),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(24,"ion-row"),d.Ob(25,"ion-col",5),d.Ob(26,"ion-item"),d.Ob(27,"ion-label",3),d.nc(28,"Paciente"),d.Nb(),d.Ob(29,"ion-input",4),d.Ob(30,"span"),d.nc(31),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(32,"ion-col",5),d.Ob(33,"ion-item"),d.Ob(34,"ion-label",3),d.nc(35,"SUS"),d.Nb(),d.Ob(36,"ion-input",4),d.Ob(37,"span"),d.nc(38),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(39,"ion-row"),d.Ob(40,"ion-col",5),d.Ob(41,"ion-item"),d.Ob(42,"ion-label",3),d.nc(43,"Faixa etaria"),d.Nb(),d.Ob(44,"p"),d.nc(45),d.Nb(),d.Nb(),d.Nb(),d.Ob(46,"ion-col",5),d.Ob(47,"ion-item"),d.Ob(48,"ion-label",3),d.nc(49,"Idade"),d.Nb(),d.Ob(50,"p"),d.nc(51),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(52,"ion-row"),d.Ob(53,"ion-col",5),d.Ob(54,"ion-item"),d.Ob(55,"ion-label",3),d.nc(56,"Sexo"),d.Nb(),d.Ob(57,"p"),d.nc(58),d.Nb(),d.Nb(),d.Nb(),d.Ob(59,"ion-col",5),d.Ob(60,"ion-item"),d.Ob(61,"ion-label",3),d.nc(62,"Sangue"),d.Nb(),d.Ob(63,"p"),d.nc(64),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(65,"ion-row"),d.Ob(66,"ion-col",2),d.Ob(67,"ion-item"),d.Ob(68,"ion-label",3),d.nc(69,"Comorbidades"),d.Nb(),d.Ob(70,"p"),d.nc(71),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(72,"ion-row"),d.Ob(73,"ion-col",2),d.Ob(74,"h5",6),d.nc(75,"Dores"),d.Nb(),d.Nb(),d.Nb(),d.Ob(76,"ion-row"),d.Ob(77,"ion-col"),d.mc(78,N,9,2,"ion-item",7),d.Nb(),d.Nb(),d.Ob(79,"ion-row"),d.Ob(80,"ion-col",2),d.Ob(81,"h5",6),d.nc(82,"Sintomas"),d.Nb(),d.Nb(),d.Nb(),d.Ob(83,"ion-row"),d.Ob(84,"ion-col"),d.mc(85,m,3,1,"ion-item",7),d.Nb(),d.Nb(),d.Ob(86,"ion-row"),d.Ob(87,"ion-col",2),d.Ob(88,"h5",6),d.nc(89,"Medica\xe7\xf5es"),d.Nb(),d.Nb(),d.Nb(),d.Ob(90,"ion-row"),d.Ob(91,"ion-col"),d.mc(92,h,25,9,"ion-item",7),d.Nb(),d.Nb(),d.Ob(93,"ion-row"),d.Ob(94,"ion-col",2),d.mc(95,g,2,3,"ion-button",8),d.Ob(96,"ion-button",9),d.nc(97,"Voltar"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb()),2&n&&(d.Bb(17),d.oc(t.attend.date),d.Bb(6),d.oc(t.attend.dateclosed),d.Bb(8),d.oc(t.attend.name),d.Bb(7),d.oc(t.attend.cartaosus),d.Bb(7),d.oc(t.user.faixaetaria),d.Bb(6),d.oc(t.dnascimento),d.Bb(7),d.oc(t.user.sexo),d.Bb(6),d.oc(t.user.tiposanguineo),d.Bb(7),d.oc(t.user.comorbidades),d.Bb(7),d.dc("ngForOf",t.subAttends),d.Bb(7),d.dc("ngForOf",t.symptom),d.Bb(7),d.dc("ngForOf",t.subMedicaments),d.Bb(3),d.dc("ngIf","opened"==t.attend.status),d.Bb(1),d.dc("routerLink",d.fc(14,f)))},directives:[b.l,b.F,b.e,b.t,b.E,b.h,b.q,b.o,b.k,b.y,b.g,b.p,b.n,b.M,o.j,o.k,b.d,b.K,s.h],styles:[".dor[_ngcontent-%COMP%]{margin-bottom:1rem}"]}),n})()}];let B=(()=>{class n{}return n.\u0275mod=d.Jb({type:n}),n.\u0275inj=d.Ib({factory:function(t){return new(t||n)},imports:[[s.j.forChild(w)],s.j]}),n})(),S=(()=>{class n{}return n.\u0275mod=d.Jb({type:n}),n.\u0275inj=d.Ib({factory:function(t){return new(t||n)},imports:[[o.c,i.a,b.G,B]]}),n})()}}]);