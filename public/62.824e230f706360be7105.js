(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{f3GJ:function(n,t,o){"use strict";o.r(t),o.d(t,"AttendancePageModule",function(){return f});var e=o("SVse"),i=o("s7LF"),c=o("sZkV"),b=o("iInd"),r=o("8Y7J"),a=o("r97l");function s(n,t){1&n&&(r.Ob(0,"span",16),r.nc(1,"Atendimento em Aberto"),r.Nb())}function l(n,t){1&n&&(r.Ob(0,"span",17),r.nc(1,"Atendimento Realizado"),r.Nb())}function d(n,t){1&n&&r.Mb(0,"ion-icon",18)}function u(n,t){1&n&&r.Mb(0,"ion-icon",19)}const p=function(n){return["/attendance-information",n]};function O(n,t){if(1&n&&(r.Ob(0,"ion-list"),r.Ob(1,"ion-item"),r.Ob(2,"ion-grid"),r.Ob(3,"ion-row"),r.Ob(4,"ion-col",7),r.Ob(5,"ion-item"),r.Ob(6,"ion-label",8),r.nc(7,"Nome"),r.Nb(),r.Ob(8,"ion-input",9),r.Ob(9,"span"),r.nc(10),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(11,"ion-col",7),r.Ob(12,"ion-item"),r.Ob(13,"ion-label",8),r.nc(14,"Sus"),r.Nb(),r.Ob(15,"ion-input",9),r.Ob(16,"span"),r.nc(17),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(18,"ion-row"),r.Ob(19,"ion-col",4),r.Ob(20,"ion-item"),r.Ob(21,"ion-label",10),r.nc(22,"Data Abertura"),r.Nb(),r.Ob(23,"ion-input",9),r.Ob(24,"span"),r.nc(25),r.Nb(),r.Nb(),r.Nb(),r.Ob(26,"ion-item"),r.Ob(27,"ion-label",10),r.nc(28,"Data Encerramento"),r.Nb(),r.Ob(29,"ion-input",9),r.Ob(30,"span"),r.nc(31),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(32,"ion-col",4),r.Ob(33,"ion-item"),r.Ob(34,"ion-label",8),r.nc(35,"Status"),r.Nb(),r.Ob(36,"ion-input",9),r.mc(37,s,2,0,"span",11),r.mc(38,l,2,0,"span",12),r.Nb(),r.Ob(39,"ion-button",13),r.mc(40,d,1,0,"ion-icon",14),r.mc(41,u,1,0,"ion-icon",15),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&n){const n=t.$implicit;r.Bb(10),r.oc(n.name),r.Bb(7),r.oc(n.cartaosus),r.Bb(8),r.oc(n.date),r.Bb(6),r.oc(n.dateclosed),r.Bb(6),r.dc("ngIf","opened"==n.status),r.Bb(1),r.dc("ngIf","closed"==n.status),r.Bb(1),r.dc("routerLink",r.gc(9,p,n.id)),r.Bb(1),r.dc("ngIf","opened"==n.status),r.Bb(1),r.dc("ngIf","closed"==n.status)}}const N=[{path:"",component:(()=>{class n{constructor(n){this.attendanceService=n}ngOnInit(){this.getAll(),this.getAllU()}getAll(){this.attend=this.attendanceService.getAll()}getAllU(){this.symptoms=this.attendanceService.getAllU()}}return n.\u0275fac=function(t){return new(t||n)(r.Lb(a.a))},n.\u0275cmp=r.Fb({type:n,selectors:[["app-attendance"]],decls:15,vars:4,consts:[["color","dark-green"],["slot","start"],[3,"fullscreen"],["placeholder","Pesquisar pelo Sus",1,"barradepesquisa"],["size","12"],[2,"margin-top","20px"],[4,"ngFor","ngForOf"],["size","6"],["position","fixed",1,"texto"],["disabled","true",1,"input"],["position","stacked"],["class","textcolorwarning",4,"ngIf"],["class","textcolorgreen",4,"ngIf"],[1,"botao",3,"routerLink"],["name","add",4,"ngIf"],["name","search-circle-outline",4,"ngIf"],[1,"textcolorwarning"],[1,"textcolorgreen"],["name","add"],["name","search-circle-outline"]],template:function(n,t){1&n&&(r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar",0),r.Ob(2,"ion-buttons",1),r.Mb(3,"ion-menu-button"),r.Nb(),r.Ob(4,"ion-title"),r.nc(5,"ATENDIMENTO"),r.Nb(),r.Nb(),r.Nb(),r.Ob(6,"ion-content",2),r.Mb(7,"ion-searchbar",3),r.Ob(8,"ion-grid"),r.Ob(9,"ion-row"),r.Ob(10,"ion-col",4),r.Ob(11,"ion-title",5),r.nc(12,"Resultados:"),r.Nb(),r.Nb(),r.Nb(),r.mc(13,O,42,11,"ion-list",6),r.Zb(14,"async"),r.Nb(),r.Nb()),2&n&&(r.Bb(6),r.dc("fullscreen",!0),r.Bb(7),r.dc("ngForOf",r.ac(14,2,t.attend)))},directives:[c.l,c.F,c.e,c.t,c.E,c.h,c.z,c.M,c.k,c.y,c.g,e.j,c.q,c.o,c.p,c.n,e.k,c.d,c.K,b.h,c.m],pipes:[e.b],styles:[".barradepesquisa[_ngcontent-%COMP%]{margin-top:1rem}.topo[_ngcontent-%COMP%]{color:#0fff98}.texto[_ngcontent-%COMP%]{color:#000;font-size:15px;padding-left:2rem;margin-left:-2rem}.textcolorgreen[_ngcontent-%COMP%]{color:var(--ion-color-dark-green)}.textcolorwarning[_ngcontent-%COMP%]{color:var(--ion-color-warning)}"]}),n})()}];let g=(()=>{class n{}return n.\u0275mod=r.Jb({type:n}),n.\u0275inj=r.Ib({factory:function(t){return new(t||n)},imports:[[b.j.forChild(N)],b.j]}),n})(),m=(()=>{class n{}return n.\u0275mod=r.Jb({type:n}),n.\u0275inj=r.Ib({factory:function(t){return new(t||n)}}),n})(),f=(()=>{class n{}return n.\u0275mod=r.Jb({type:n}),n.\u0275inj=r.Ib({factory:function(t){return new(t||n)},imports:[[e.c,i.a,c.G,g,m]]}),n})()}}]);