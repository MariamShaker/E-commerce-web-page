"use strict";(self.webpackChunkmy_market=self.webpackChunkmy_market||[]).push([[697],{8697:(_,l,g)=>{g.r(l),g.d(l,{BlogModule:()=>h});var c=g(6895),a=g(9062),n=g(4650),s=g(2340),p=g(7407);let u=(()=>{class t{constructor(o){this.fireStore=o}getData(){return this.fireStore.collection(`${s.N.blogApi}`,o=>o.orderBy("number","asc")).valueChanges()}}return t.\u0275fac=function(o){return new(o||t)(n.LFG(p.ST))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var r=g(4333),d=g(6777);let b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["slider"]],decls:5,vars:0,consts:[[1,"slider"],[1,"title"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0)(1,"h1",1),n._uU(2,"#readmore"),n.qZA(),n.TgZ(3,"p"),n._uU(4,"Read all case studies about our products!"),n.qZA()())},styles:[".slider[_ngcontent-%COMP%]{background-image:url(b19.3f736dc75b153b83.jpg);background-position:top;height:50vh}"]}),t})();function C(t,e){if(1&t&&(n.TgZ(0,"div",6)(1,"div",7)(2,"h3",8),n._uU(3),n.qZA(),n.TgZ(4,"div",9),n._UZ(5,"img",10),n.qZA()(),n.TgZ(6,"div",11)(7,"h4",12),n._uU(8),n.ALo(9,"titlecase"),n.qZA(),n.TgZ(10,"p"),n._uU(11),n.qZA(),n.TgZ(12,"a",13),n._uU(13),n.ALo(14,"uppercase"),n.qZA()()()),2&t){const o=e.$implicit;n.xp6(3),n.Oqu(o.number),n.xp6(2),n.s9C("src",o.imageUrl,n.LSH),n.xp6(3),n.Oqu(n.lcZ(9,5,o.title)),n.xp6(3),n.Oqu(o.description),n.xp6(2),n.Oqu(n.lcZ(14,7,o.continueLink))}}const m=function(t,e,o){return{itemsPerPage:t,currentPage:e,totalItems:o}},O=[{path:"",component:(()=>{class t{constructor(o){this.blogService=o,this.blog=[],this.page=1,this.count=0,this.tableSize=5,this.tableSizes=[5,10,15,20]}ngOnInit(){this.getAllData()}getAllData(){return this.blogService.getData().subscribe(o=>{this.blog=o})}onDataChanged(o){this.page=o,this.getAllData()}onDataSizeChanged(o){this.tableSize=o.target.value,this.page=1,this.getAllData()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(u))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-blog"]],decls:9,vars:8,consts:[[1,"blog-section"],[1,"container"],["class","row blog",4,"ngFor","ngForOf"],[1,"row"],[1,"col-md-12","text-center"],["previousLabel","","nextLabel","",1,"my-pagination",3,"pageChange"],[1,"row","blog"],[1,"col-md-6","blog-box"],[1,"number"],[1,"image-box"],["alt","","height","500",1,"image",3,"src"],[1,"col-md-6","blog-details"],[1,"title"],["href","#",1,"continue"]],template:function(o,i){1&o&&(n._UZ(0,"slider"),n.TgZ(1,"section",0)(2,"div",1),n.YNc(3,C,15,9,"div",2),n.ALo(4,"paginate"),n.TgZ(5,"div",3)(6,"div",4)(7,"pagination-controls",5),n.NdJ("pageChange",function(f){return i.onDataChanged(f)}),n.qZA()()()()(),n._UZ(8,"sign-up-section")),2&o&&(n.xp6(3),n.Q6J("ngForOf",n.xi3(4,1,i.blog,n.kEZ(4,m,i.tableSize,i.page,i.count))))},dependencies:[c.sg,r.LS,d.A,b,c.gd,c.rS,r._s],styles:['.blog-section[_ngcontent-%COMP%]{padding:150px 0}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]{margin-bottom:150px}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-box[_ngcontent-%COMP%]{position:relative}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-box[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{color:#c9cbce;font-size:70px;font-weight:700;position:absolute;top:-55px;z-index:-1}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-box[_ngcontent-%COMP%]   .image-box[_ngcontent-%COMP%]{margin-right:40px}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-box[_ngcontent-%COMP%]   .image-box[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;height:300px;object-fit:cover}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:25px}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-details[_ngcontent-%COMP%]   .continue[_ngcontent-%COMP%]{font-weight:700;text-decoration:none;color:#000;transition:.3s ease;font-size:12px}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-details[_ngcontent-%COMP%]   .continue[_ngcontent-%COMP%]:hover{color:#088178}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-details[_ngcontent-%COMP%]   .continue[_ngcontent-%COMP%]:hover:after{background-color:#088178}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-details[_ngcontent-%COMP%]   .continue[_ngcontent-%COMP%]:after{content:"";display:inline-block;width:60px;height:1px;background-color:#000;margin-left:15px;border-radius:3px;margin-bottom:3px}.blog-section[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%]   .blog-details[_ngcontent-%COMP%]   .continue[_ngcontent-%COMP%]:after:hover{background-color:#088178}.blog-section[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination{display:flex;justify-content:center;align-items:center}.blog-section[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination a{text-decoration:none;color:#fff;padding:0}.blog-section[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover{background:transparent}.blog-section[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current, .blog-section[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination li{background:#088178;width:40px;padding:10px;height:40px;text-align:center;color:#fff;border-radius:5px;font-weight:500;text-decoration:none;transition:.3s;cursor:pointer;margin-right:4px}.blog-section[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover, .blog-section[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination li:hover{background:#fff;color:#088178}']}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[a.Bz.forChild(O),a.Bz]}),t})();var P=g(4466);let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.ez,M,P.m]}),t})()}}]);