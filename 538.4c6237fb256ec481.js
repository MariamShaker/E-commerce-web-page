"use strict";(self.webpackChunkmy_market=self.webpackChunkmy_market||[]).push([[538],{3538:(G,u,i)=>{i.r(u),i.d(u,{SignupModule:()=>E});var p=i(6895),d=i(1205),a=i(9062),l=i(433);function c(e){const t=e.get("password"),o=e.get("confirmPassword");return t?.pristine||o?.pristine?null:t&&o&&t.value!=o.value?{misMatch:!0}:null}function g(e){return t=>e.test(t.value)?{forbiddenName:{value:t.value}}:null}var f=i(545),n=i(4650),_=i(7556),w=i(7407),h=i(2084);let m=(()=>{class e{constructor(o,s,r){this.fireStore=o,this.fireStorage=s,this.router=r}addUser(o,s){return this.fireStore.collection("users").doc(s).set({id:o.id}).then(()=>{this.router.navigate(["/"])})}}return e.\u0275fac=function(o){return new(o||e)(n.LFG(w.ST),n.LFG(h.Q1),n.LFG(a.F0))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Z(e,t){1&e&&(n.TgZ(0,"small",7),n._uU(1,"Enter Your Name "),n.qZA())}function v(e,t){if(1&e&&(n.TgZ(0,"small",7),n._uU(1),n.qZA()),2&e){const o=n.oxw(2);n.xp6(1),n.hij("",null==o.userName||null==o.userName.errors?null:o.userName.errors.forbiddenName.value," Not Allowed")}}function C(e,t){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,Z,2,0,"small",25),n.YNc(2,v,2,1,"small",25),n.qZA()),2&e){const o=n.oxw();n.xp6(1),n.Q6J("ngIf",null==o.userName||null==o.userName.errors?null:o.userName.errors.required),n.xp6(1),n.Q6J("ngIf",null==o.userName||null==o.userName.errors?null:o.userName.errors.forbiddenName)}}function N(e,t){1&e&&(n.TgZ(0,"small",7),n._uU(1,"Please Enter Your Email"),n.qZA())}function x(e,t){1&e&&(n.TgZ(0,"small",7),n._uU(1,"follow the email style"),n.qZA())}function T(e,t){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,N,2,0,"small",25),n.YNc(2,x,2,0,"small",25),n.qZA()),2&e){const o=n.oxw();n.xp6(1),n.Q6J("ngIf",null==o.email||null==o.email.errors?null:o.email.errors.required),n.xp6(1),n.Q6J("ngIf",null==o.email||null==o.email.errors?null:o.email.errors.email)}}function P(e,t){if(1&e){const o=n.EpF();n.TgZ(0,"span",26),n.NdJ("click",function(){n.CHM(o);const r=n.oxw();return n.KtG(r.showPasswordPassword())}),n._UZ(1,"i",27),n.qZA()}}function S(e,t){if(1&e){const o=n.EpF();n.TgZ(0,"span",26),n.NdJ("click",function(){n.CHM(o);const r=n.oxw();return n.KtG(r.showPasswordPassword())}),n._UZ(1,"i",28),n.qZA()}}function M(e,t){1&e&&(n.TgZ(0,"small",7),n._uU(1,"Enter The Password "),n.qZA())}function U(e,t){1&e&&(n.TgZ(0,"small",7),n._uU(1," Space Not Allowed "),n.qZA())}function b(e,t){1&e&&(n.TgZ(0,"small",7),n._uU(1,"Min Length 6 numbers or char"),n.qZA())}function I(e,t){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,M,2,0,"small",25),n.YNc(2,U,2,0,"small",25),n.YNc(3,b,2,0,"small",25),n.qZA()),2&e){const o=n.oxw();n.xp6(1),n.Q6J("ngIf",null==o.password||null==o.password.errors?null:o.password.errors.required),n.xp6(1),n.Q6J("ngIf",null==o.password||null==o.password.errors?null:o.password.errors.noSpace),n.xp6(1),n.Q6J("ngIf",null==o.password?null:o.password.hasError("minlength"))}}function A(e,t){if(1&e){const o=n.EpF();n.TgZ(0,"span",26),n.NdJ("click",function(){n.CHM(o);const r=n.oxw();return n.KtG(r.showPassword())}),n._UZ(1,"i",27),n.qZA()}}function y(e,t){if(1&e){const o=n.EpF();n.TgZ(0,"span",26),n.NdJ("click",function(){n.CHM(o);const r=n.oxw();return n.KtG(r.showPassword())}),n._UZ(1,"i",28),n.qZA()}}function q(e,t){1&e&&(n.TgZ(0,"span",29),n._uU(1,"password not match"),n.qZA())}function J(e,t){1&e&&(n.TgZ(0,"small",7),n._uU(1,"Address Is Required"),n.qZA())}function O(e,t){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,J,2,0,"small",25),n.qZA()),2&e){const o=n.oxw();let s;n.xp6(1),n.Q6J("ngIf",null==(s=o.form.get("address"))||null==s.errors?null:s.errors.required)}}function Y(e,t){if(1&e&&(n.TgZ(0,"div",30),n._uU(1),n.qZA()),2&e){const o=n.oxw();n.xp6(1),n.hij(" ",o.errMassage," ")}}const Q=[{path:"",component:(()=>{class e{constructor(o,s,r){this.authServices=o,this.users=s,this.userService=r,this.showP=!1,this.show=!1,this.form=new l.cw({userName:new l.NI("",[l.kI.required,g(/admin/)]),email:new l.NI("",[l.kI.required,l.kI.email]),password:new l.NI("",[l.kI.required,f.T,l.kI.minLength(6)]),confirmPassword:new l.NI("",[l.kI.required]),address:new l.NI("",l.kI.required)},{validators:c}),this.errMassage=""}showPasswordPassword(){this.showP=!this.showP}showPassword(){this.show=!this.show}ngOnInit(){}get email(){return this.form.get("email")}get password(){return this.form.get("password")}get confirmPassword(){return this.form.get("confirmPassword")}get userName(){return this.form.get("userName")}signUp(o){let s=o.value;this.authServices.signUp(s.email,s.password).then(r=>{this.errMassage="",this.userService.addUser(s,r.user?.uid)}).catch(r=>{this.errMassage=r,console.log("a >",r)})}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(_.e),n.Y36(m),n.Y36(m))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signup"]],decls:52,vars:15,consts:[[1,"sign-in"],[1,"container"],[1,"form-section"],[1,"text-center","title"],[3,"formGroup"],[1,"mb-5"],["for","userName",1,"form-label"],[1,"text-danger"],["type","text","id","userName","formControlName","userName",1,"form-control"],[4,"ngIf"],["for","emailId",1,"form-label"],["type","email","formControlName","email","id","emailId","aria-describedby","emailHelp",1,"form-control"],["id","emailHelp",1,"form-text"],[1,"mb-5","pass-box"],["for","password",1,"form-label"],["type","password","id","password","formControlName","password","minlength","6",1,"form-control",3,"type"],["class","display-pass",3,"click",4,"ngIf"],["for","confirmPass",1,"form-label"],["type","password","id","confirmPass","formControlName","confirmPassword","userName","confirmPassword",1,"form-control",3,"type"],["class","text-danger mb-1",4,"ngIf"],["for","address",1,"form-label"],["type","text","id","address","formControlName","address",1,"form-control"],[1,"text-center"],["type","submit",1,"btn","btn-primary",3,"click"],["class","alert alert-danger",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"display-pass",3,"click"],[1,"fa-solid","fa-eye"],[1,"fa-solid","fa-eye-slash"],[1,"text-danger","mb-1"],[1,"alert","alert-danger"]],template:function(o,s){if(1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),n._uU(4,"Sign Up"),n.qZA(),n.TgZ(5,"form",4)(6,"div",5)(7,"label",6),n._uU(8,"Your Name "),n.TgZ(9,"span",7),n._uU(10,"*"),n.qZA()(),n._UZ(11,"input",8),n.YNc(12,C,3,2,"div",9),n.qZA(),n.TgZ(13,"div",5)(14,"label",10),n._uU(15,"Email"),n.TgZ(16,"span",7),n._uU(17,"*"),n.qZA()(),n._UZ(18,"input",11),n.TgZ(19,"div",12),n._uU(20,"We'll never share your email with anyone else."),n.qZA(),n.YNc(21,T,3,2,"div",9),n.qZA(),n.TgZ(22,"div",13)(23,"label",14),n._uU(24,"Password"),n.TgZ(25,"span",7),n._uU(26,"*"),n.qZA()(),n._UZ(27,"input",15),n.YNc(28,P,2,0,"span",16),n.YNc(29,S,2,0,"span",16),n.YNc(30,I,4,3,"div",9),n.qZA(),n.TgZ(31,"div",13)(32,"label",17),n._uU(33,"Confirm Password"),n.TgZ(34,"span",7),n._uU(35,"*"),n.qZA()(),n._UZ(36,"input",18),n.YNc(37,A,2,0,"span",16),n.YNc(38,y,2,0,"span",16),n.YNc(39,q,2,0,"span",19),n.qZA(),n.TgZ(40,"div",5)(41,"label",20),n._uU(42,"Address"),n.TgZ(43,"span",7),n._uU(44,"*"),n.qZA()(),n._UZ(45,"input",21),n.YNc(46,O,2,1,"div",9),n.qZA(),n.TgZ(47,"div",22)(48,"button",23),n.NdJ("click",function(){return s.signUp(s.form)}),n._uU(49,"Submit"),n.qZA()()(),n._UZ(50,"br"),n.YNc(51,Y,2,1,"div",24),n.qZA()()()),2&o){let r;n.xp6(5),n.Q6J("formGroup",s.form),n.xp6(6),n.ekj("is-invalid",(null==s.userName?null:s.userName.invalid)&&(null==s.userName?null:s.userName.touched)),n.xp6(1),n.Q6J("ngIf",(null==s.userName?null:s.userName.touched)&&(null==s.userName?null:s.userName.invalid)),n.xp6(9),n.Q6J("ngIf",(null==s.email?null:s.email.invalid)&&(null==s.email?null:s.email.touched)),n.xp6(6),n.Q6J("type",s.showP?"text":"password"),n.xp6(1),n.Q6J("ngIf",s.showP),n.xp6(1),n.Q6J("ngIf",!s.showP),n.xp6(1),n.Q6J("ngIf",(null==s.password?null:s.password.touched)&&(null==s.password?null:s.password.invalid)),n.xp6(6),n.Q6J("type",s.show?"text":"password"),n.xp6(1),n.Q6J("ngIf",s.show),n.xp6(1),n.Q6J("ngIf",!s.show),n.xp6(1),n.Q6J("ngIf",null==s.form||null==s.form.errors?null:s.form.errors.misMatch),n.xp6(7),n.Q6J("ngIf",(null==(r=s.form.get("address"))?null:r.touched)&&(null==(r=s.form.get("address"))?null:r.invalid)),n.xp6(5),n.Q6J("ngIf",s.errMassage)}},dependencies:[p.O5,l._Y,l.Fj,l.JJ,l.JL,l.wO,l.sg,l.u],styles:[".text-danger[_ngcontent-%COMP%]{color:red;font-weight:500}.sign-in[_ngcontent-%COMP%]{padding:50px 0;background-color:#e3e6f352}.sign-in[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{width:60%;margin:30px auto auto;background-color:#fff;border-radius:35px;padding:90px;border:1px solid #e3e6f3;box-shadow:20px 20px 30px #00000005}.sign-in[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:64px}.sign-in[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%]{font-weight:600}.sign-in[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{margin-bottom:5px;background-color:#e3e6f3bd;border:1px solid #e3e6f3}.sign-in[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{box-shadow:none;border:none}.sign-in[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .pass-box[_ngcontent-%COMP%]{position:relative}.sign-in[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .pass-box[_ngcontent-%COMP%]   .display-pass[_ngcontent-%COMP%]{position:absolute;right:13px;top:41px;cursor:pointer}.sign-in[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{font-weight:600}.sign-in[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{background-color:#088178;border:none;padding:12px 25px;font-weight:600}"]}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[a.Bz.forChild(Q),a.Bz]}),e})();var F=i(4466);let E=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[p.ez,k,F.m,d.ww]}),e})()}}]);