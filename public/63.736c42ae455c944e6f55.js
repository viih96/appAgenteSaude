(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"74El":function(n,t,o){"use strict";o.r(t),o.d(t,"CreateProfessionPageModule",function(){return m});var i=o("SVse"),e=o("s7LF"),r=o("sZkV"),s=o("iInd"),c=o("mrSG");class a{constructor(){this.description=""}}var b=o("8Y7J"),d=o("U6Ex"),u=o("UXh4");function l(n,t){1&n&&(b.Ob(0,"div"),b.nc(1," Texto \xe9 obrigatorio. "),b.Nb())}function p(n,t){if(1&n&&(b.Ob(0,"ion-item",9),b.mc(1,l,2,0,"div",10),b.Nb()),2&n){b.Yb();const n=b.ic(12);b.Bb(1),b.dc("ngIf",null==n?null:n.errors.required)}}const f=[{path:"",component:(()=>{class n{constructor(n,t,o){this.Profession=n,this.toast=t,this.router=o}ngOnInit(){this.p=new a}onSubmit(){return Object(c.a)(this,void 0,void 0,function*(){try{yield this.Profession.addProfession(this.p),this.toast.showMessageBottom("Profiss\xe3o inserids com sucesso!!!","success"),this.router.navigate(["/profession-list"])}catch(n){this.toast.showMessageTop(n,"danger")}})}}return n.\u0275fac=function(t){return new(t||n)(b.Lb(d.a),b.Lb(u.a),b.Lb(s.g))},n.\u0275cmp=b.Fb({type:n,selectors:[["app-create-profession"]],decls:17,vars:2,consts:[["color","dark-green"],["slot","start"],[3,"ngSubmit"],["position","floating"],["placeholder","M\xe9dico, Fisioterapeuta, Enfermeiro","type","text","name","description","required","",3,"ngModel","ngModelChange"],["description","ngModel"],[1,"form-button"],["expand","full","type","submit","id","salvar","color","dark-green"],["color","danger",4,"ngIf"],["color","danger"],[4,"ngIf"]],template:function(n,t){if(1&n&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-buttons",1),b.Mb(3,"ion-menu-button"),b.Nb(),b.Ob(4,"ion-title"),b.nc(5,"Cadastrar Profissional Agente de Sa\xfade"),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content"),b.Ob(7,"form",2),b.Wb("ngSubmit",function(){return t.onSubmit()}),b.Ob(8,"ion-item"),b.Ob(9,"ion-label",3),b.nc(10,"Profissional"),b.Nb(),b.Ob(11,"ion-input",4,5),b.Wb("ngModelChange",function(n){return t.p.description=n}),b.Nb(),b.Nb(),b.Ob(13,"div",6),b.Ob(14,"ion-button",7),b.nc(15,"Enviar"),b.Nb(),b.Nb(),b.Nb(),b.mc(16,p,2,1,"ion-item",8),b.Nb()),2&n){const n=b.ic(12);b.Bb(11),b.dc("ngModel",t.p.description),b.Bb(5),b.dc("ngIf",n.invalid&&(n.dirty||n.touched))}},directives:[r.l,r.F,r.e,r.t,r.E,r.h,e.i,e.e,e.f,r.o,r.p,r.n,r.M,e.h,e.d,e.g,r.d,i.k],styles:["ion-item[_ngcontent-%COMP%]{margin:0 10px}.form-button[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:1rem}.form-button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:99vw;opacity:1}"]}),n})()}];let g=(()=>{class n{}return n.\u0275mod=b.Jb({type:n}),n.\u0275inj=b.Ib({factory:function(t){return new(t||n)},imports:[[s.j.forChild(f)],s.j]}),n})(),m=(()=>{class n{}return n.\u0275mod=b.Jb({type:n}),n.\u0275inj=b.Ib({factory:function(t){return new(t||n)},imports:[[i.c,e.a,r.G,g]]}),n})()}}]);