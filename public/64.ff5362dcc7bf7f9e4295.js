(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{TDBs:function(e,t,n){"use strict";n.r(t),n.d(t,"DashboardPageModule",function(){return u});var o=n("SVse"),a=n("s7LF"),s=n("sZkV"),i=n("iInd"),c=n("8Y7J"),b=n("cAy6"),r=n("r97l");const l=[{path:"",component:(()=>{class e{constructor(e,t){this.usersService=e,this.attendanceService=t}ngOnInit(){this.totalUserAgentesaude=this.usersService.getTotalUsers("agentesaude"),this.totalUserPacientes=this.usersService.getTotalUsers("paciente"),this.totalAttendanceOpened=this.attendanceService.getTotalAttendance("opened"),this.totalAttendanceClosed=this.attendanceService.getTotalAttendance("closed")}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(b.a),c.Lb(r.a))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-dashboard"]],decls:39,vars:12,consts:[["color","dark-green"],["slot","start"],[1,"ion-activated"],["name","walk-outline","slot","start"],[1,"fontesize"],["name","heart-half-outline","slot","start"],["name","pulse-outline","slot","start"],["name","bag-add-outline","slot","start"]],template:function(e,t){1&e&&(c.Ob(0,"ion-header"),c.Ob(1,"ion-toolbar",0),c.Ob(2,"ion-buttons",1),c.Mb(3,"ion-menu-button"),c.Nb(),c.Ob(4,"ion-title"),c.nc(5,"Dashboard"),c.Nb(),c.Nb(),c.Nb(),c.Ob(6,"ion-content"),c.Ob(7,"ion-card"),c.Ob(8,"ion-item",2),c.Mb(9,"ion-icon",3),c.Ob(10,"ion-label"),c.nc(11,"Total de Pacientes"),c.Nb(),c.Ob(12,"p",4),c.nc(13),c.Zb(14,"async"),c.Nb(),c.Nb(),c.Nb(),c.Ob(15,"ion-card"),c.Ob(16,"ion-item",2),c.Mb(17,"ion-icon",5),c.Ob(18,"ion-label"),c.nc(19,"Total de Agentes de Sa\xfade"),c.Nb(),c.Ob(20,"p",4),c.nc(21),c.Zb(22,"async"),c.Nb(),c.Nb(),c.Nb(),c.Ob(23,"ion-card"),c.Ob(24,"ion-item",2),c.Mb(25,"ion-icon",6),c.Ob(26,"ion-label"),c.nc(27,"Atendimentos em aberto"),c.Nb(),c.Ob(28,"p",4),c.nc(29),c.Zb(30,"async"),c.Nb(),c.Nb(),c.Nb(),c.Ob(31,"ion-card"),c.Ob(32,"ion-item",2),c.Mb(33,"ion-icon",7),c.Ob(34,"ion-label"),c.nc(35,"Atendimentos realizados"),c.Nb(),c.Ob(36,"p",4),c.nc(37),c.Zb(38,"async"),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e&&(c.Bb(13),c.oc(c.ac(14,4,t.totalUserPacientes)),c.Bb(8),c.oc(c.ac(22,6,t.totalUserAgentesaude)),c.Bb(8),c.oc(c.ac(30,8,t.totalAttendanceOpened)),c.Bb(8),c.oc(c.ac(38,10,t.totalAttendanceClosed)))},directives:[s.l,s.F,s.e,s.t,s.E,s.h,s.f,s.o,s.m,s.p],pipes:[o.b],styles:["ion-icon[_ngcontent-%COMP%]{font-size:4rem}.fontesize[_ngcontent-%COMP%]{font-size:2.5rem}"]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[i.j.forChild(l)],i.j]}),e})(),u=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[o.c,a.a,s.G,d]]}),e})()}}]);