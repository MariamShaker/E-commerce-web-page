"use strict";(self.webpackChunkmy_market=self.webpackChunkmy_market||[]).push([[894],{4894:(H,p,c)=>{c.r(p),c.d(p,{HomeModule:()=>N});var i=c(6895),u=c(7407),g=c(9062),n=c(4650),O=c(6395),M=c(910),d=c(7556),v=c(6777);let l=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["slider"]],decls:16,vars:0,consts:[[1,"slider"],["data-aos","fade-right",1,"container"],[1,"row"],[1,"small-title"],[1,"title"],[1,"title-info"],[1,"description"],["routerLink","/shop",1,"shop-btn"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),n._uU(4,"Trade-in-offer"),n.qZA()(),n.TgZ(5,"div",2)(6,"h2",4),n._uU(7,"Super Value deals "),n.qZA(),n.TgZ(8,"h1",5),n._uU(9,"On All Products "),n.qZA()(),n.TgZ(10,"div",2)(11,"p",6),n._uU(12,"Save more with coupons & up to 70% offer!"),n.qZA()(),n.TgZ(13,"div",2)(14,"button",7),n._uU(15,"Shop Now"),n.qZA()()()())},dependencies:[g.rH],styles:["@media (max-width: 575.98px){.shop-btn[_ngcontent-%COMP%]{margin-left:0!important;margin:20px 0}.slider[_ngcontent-%COMP%]{background-position:top 20% left 0px!important;text-align:center!important}.slider[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:35px!important}.slider[_ngcontent-%COMP%]   .title-info[_ngcontent-%COMP%]{font-size:40px!important}}.slider[_ngcontent-%COMP%]{height:100vh;width:100%;background-image:url(hero4.cf210e190bcaa6dd.png);background-size:cover;background-position:top 20% right 0;display:flex;justify-content:center;align-items:flex-start;padding:0 80px;flex-direction:column;align-content:flex-start;text-align:left}.slider[_ngcontent-%COMP%]   .small-title[_ngcontent-%COMP%]{font-weight:600;color:#1a1a1a;padding-bottom:20px}.slider[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:52px;font-weight:700}.slider[_ngcontent-%COMP%]   .title-info[_ngcontent-%COMP%]{font-size:54px;font-weight:700;color:#088178}.slider[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#797c85;font-weight:500}.slider[_ngcontent-%COMP%]   .shop-btn[_ngcontent-%COMP%]{margin-left:70px;color:#088178;font-weight:700;border:none;background-color:transparent;background-image:url(button.2777f3c873a9c485.png);background-repeat:no-repeat;padding:11px;width:220px}"]}),e})();var _=c(9531),m=c(8650),C=c(7747);function h(e,o){1&e&&(n.TgZ(0,"span",17),n._uU(1,"\u2605"),n.qZA()),2&e&&n.ekj("filled",o.fill)}function x(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div")(1,"ngb-rating",16),n.NdJ("rateChange",function(a){n.CHM(t);const s=n.oxw(2);return n.KtG(s.currentRate=a)}),n.YNc(2,h,2,2,"ng-template"),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("rate",t.currentRate)("max",5)}}function Z(e,o){1&e&&(n.TgZ(0,"span",17),n._uU(1,"\u2605"),n.qZA()),2&e&&n.ekj("filled",o.fill)}function A(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div")(1,"ngb-rating",18),n.NdJ("rateChange",function(a){n.CHM(t);const s=n.oxw(2);return n.KtG(s.currentRate=a)}),n.YNc(2,Z,2,2,"ng-template"),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("rate",t.currentRate)("max",5)("readonly",!0)}}function T(e,o){if(1&e&&(n.TgZ(0,"div",5)(1,"div",6)(2,"div",7),n._UZ(3,"img",8),n.qZA(),n.TgZ(4,"p",9),n._uU(5),n.qZA(),n.TgZ(6,"p")(7,"a",10),n._uU(8),n.ALo(9,"titlecase"),n.qZA()(),n.YNc(10,x,3,2,"div",11),n.YNc(11,A,3,3,"div",11),n.TgZ(12,"div",12)(13,"p",13),n._uU(14),n.ALo(15,"currency"),n.qZA(),n.TgZ(16,"button",14),n._UZ(17,"i",15),n.qZA()()()()),2&e){const t=o.$implicit,r=n.oxw();n.xp6(3),n.s9C("src",t.imageUrl,n.LSH),n.xp6(2),n.hij(" ",t.brandName," "),n.xp6(3),n.Oqu(n.lcZ(9,6,t.name)),n.xp6(2),n.Q6J("ngIf",r.userActive),n.xp6(1),n.Q6J("ngIf",!r.userActive),n.xp6(3),n.Oqu(n.lcZ(15,8,t.price))}}let b=(()=>{class e{constructor(t,r,a){this.productService=t,this.authService=r,this.starService=a,this.product=[],this.userActive=!1,this.currentRate=5}ngOnInit(){this.getData(),this.authService.user.subscribe(t=>{this.userActive=!!t})}getData(){return this.productService.getFeatureProducts().subscribe(t=>{this.product=t.map(r=>({id:r.payload.doc.id,...r.payload.doc.data()}))})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(_.s),n.Y36(d.e),n.Y36(m.v))},e.\u0275cmp=n.Xpm({type:e,selectors:[["featured-products"]],decls:7,vars:1,consts:[["data-aos","fade-up",1,"featured"],[1,"section-title"],[1,"section-description"],[1,"row"],["class","col-lg-3 col-md-6",4,"ngFor","ngForOf"],[1,"col-lg-3","col-md-6"],["data-aos","fade-up-right",1,"product"],["width","262","height","262"],["alt","",1,"image",3,"src"],[1,"brand"],["routerLink","/cart",1,"name"],[4,"ngIf"],[1,"buy-product"],[1,"price"],["routerLink","/shop",1,"cart-icon"],[1,"fa","fa-cart-shopping"],[1,"rating",3,"rate","max","rateChange"],[1,"star"],[1,"rating",3,"rate","max","readonly","rateChange"]],template:function(t,r){1&t&&(n.TgZ(0,"section",0)(1,"h1",1),n._uU(2,"Featured Products"),n.qZA(),n.TgZ(3,"p",2),n._uU(4,"Summer Collection New Modern Design"),n.qZA(),n.TgZ(5,"div",3),n.YNc(6,T,18,10,"div",4),n.qZA()()),2&t&&(n.xp6(6),n.Q6J("ngForOf",r.product))},dependencies:[i.sg,i.O5,g.rH,g.yS,C.OC,i.rS,i.H9],styles:[".featured[_ngcontent-%COMP%], .arrivals[_ngcontent-%COMP%]{padding:100px 0;text-align:center}.featured[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .arrivals[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:55px;font-weight:700}.featured[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%], .arrivals[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#00000054}.product[_ngcontent-%COMP%]{border:1px solid #cce7de;padding:10px;text-align:left;box-shadow:20px 20px 30px #00000005;border-radius:26px;transition:.2s ease;margin-bottom:15px;cursor:pointer}.product[_ngcontent-%COMP%]:hover{box-shadow:20px 20px 30px #0000000f}.product[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%]{color:#088178}.product[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{border-radius:20px;margin-bottom:20px;width:100%}.product[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{font-weight:500;color:#dddbdb;margin-bottom:5px}.product[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{text-decoration:none;color:#000;font-weight:800}.product[_ngcontent-%COMP%]   .buy-product[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-content:center;align-items:baseline}.product[_ngcontent-%COMP%]   .buy-product[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:#088178;text-decoration:none;font-weight:800}.product[_ngcontent-%COMP%]   .buy-product[_ngcontent-%COMP%]   .cart-icon[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#00837a33;border-radius:50%;text-align:center;padding:8px;border:1px solid #c4e8df;font-size:20px;color:#088178}.product[_ngcontent-%COMP%]   .buy-product[_ngcontent-%COMP%]   .cart-icon[_ngcontent-%COMP%]:hover{box-shadow:0 0 20px #00000017}.product[_ngcontent-%COMP%]     .star{font-size:1.5rem;color:#b7b29a47;font-size:22px}.product[_ngcontent-%COMP%]   .filled[_ngcontent-%COMP%]{color:gold;font-size:22px}"]}),e})();function y(e,o){1&e&&(n.TgZ(0,"span",17),n._uU(1,"\u2605"),n.qZA()),2&e&&n.ekj("filled",o.fill)}function w(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div")(1,"ngb-rating",16),n.NdJ("rateChange",function(a){n.CHM(t);const s=n.oxw(2);return n.KtG(s.currentRate=a)}),n.YNc(2,y,2,2,"ng-template"),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("rate",t.currentRate)("max",5)}}function U(e,o){1&e&&(n.TgZ(0,"span",17),n._uU(1,"\u2605"),n.qZA()),2&e&&n.ekj("filled",o.fill)}function q(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div")(1,"ngb-rating",18),n.NdJ("rateChange",function(a){n.CHM(t);const s=n.oxw(2);return n.KtG(s.currentRate=a)}),n.YNc(2,U,2,2,"ng-template"),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("rate",t.currentRate)("max",5)("readonly",!0)}}function z(e,o){if(1&e&&(n.TgZ(0,"div",5)(1,"div",6)(2,"div",7),n._UZ(3,"img",8),n.qZA(),n.TgZ(4,"p",9),n._uU(5),n.qZA(),n.TgZ(6,"p")(7,"a",10),n._uU(8),n.qZA()(),n.YNc(9,w,3,2,"div",11),n.YNc(10,q,3,3,"div",11),n.TgZ(11,"div",12)(12,"p",13),n._uU(13),n.ALo(14,"currency"),n.qZA(),n.TgZ(15,"button",14),n._UZ(16,"i",15),n.qZA()()()()),2&e){const t=o.$implicit,r=o.index,a=n.oxw();n.xp6(3),n.s9C("src",t.imageUrl,n.LSH),n.MGl("alt","product-",r+1,""),n.xp6(2),n.hij(" ",t.brandName," "),n.xp6(3),n.Oqu(t.name),n.xp6(1),n.Q6J("ngIf",a.userActive),n.xp6(1),n.Q6J("ngIf",!a.userActive),n.xp6(3),n.Oqu(n.lcZ(14,7,t.price))}}let f=(()=>{class e{constructor(t,r,a){this.productService=t,this.authService=r,this.starService=a,this.product=[],this.userActive=!1,this.currentRate=5}ngOnInit(){this.getData(),this.authService.user.subscribe(t=>{this.userActive=!!t})}getData(){return this.productService.getArrivalProducts().subscribe(t=>{this.product=t.map(r=>({id:r.payload.doc.id,...r.payload.doc.data()}))})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(_.s),n.Y36(d.e),n.Y36(m.v))},e.\u0275cmp=n.Xpm({type:e,selectors:[["arrivals-products"]],decls:7,vars:1,consts:[["data-aos","fade-up",1,"arrivals"],[1,"section-title"],[1,"section-description"],[1,"row"],["class","col-lg-3 col-md-6",4,"ngFor","ngForOf"],[1,"col-lg-3","col-md-6"],["data-aos","fade-up-right",1,"product"],["width","262","height","262"],[1,"image",3,"src","alt"],[1,"brand"],["routerLink","/cart",1,"name"],[4,"ngIf"],[1,"buy-product"],[1,"price"],["routerLink","/shop",1,"cart-icon"],[1,"fa","fa-cart-shopping"],[1,"rating",3,"rate","max","rateChange"],[1,"star"],[1,"rating",3,"rate","max","readonly","rateChange"]],template:function(t,r){1&t&&(n.TgZ(0,"section",0)(1,"h1",1),n._uU(2,"New Arrival"),n.qZA(),n.TgZ(3,"p",2),n._uU(4,"Summer Collection New Modern Design"),n.qZA(),n.TgZ(5,"div",3),n.YNc(6,z,17,9,"div",4),n.qZA()()),2&t&&(n.xp6(6),n.Q6J("ngForOf",r.product))},dependencies:[i.sg,i.O5,g.rH,g.yS,C.OC,i.H9],styles:[".star{font-size:1.5rem;color:#b7b29a47;font-size:22px}.filled[_ngcontent-%COMP%]{color:gold;font-size:22px}"]}),e})();const S=[{path:"",component:(()=>{class e{constructor(t,r,a){this.goodService=t,this.cartService=r,this.authService=a,this.goods=[],this.userActive=!1}getId(){return this.goodService.getGoodById().subscribe(t=>{this.goods=t.map(r=>({id:r.payload.doc.id,...r.payload.doc.data()}))})}ngOnInit(){this.getId()}addToCart(t,r){let a=this.goods[r];this.cartService.addToCart({name:a.name,amount:+t,price:a.price}).then(()=>console.log("added"))}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(O.V),n.Y36(M.N),n.Y36(d.e))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-home"]],decls:65,vars:9,consts:[[1,"container"],["data-aos","zoom-in-up",1,"rapair-service"],[1,"row"],[1,"col-md-12"],[1,"offer"],[1,"persentage-offer"],[1,"offer-btn"],[1,"small-banners"],["data-aos","fade-right",1,"col-md-6"],[1,"crazy-banner"],[1,"banner-title"],[1,"description"],[1,"crazy-btn"],["data-aos","fade-left",1,"col-md-6"],[1,"spring-banner"],[1,"spring-btn"],["data-aos","fade-up-right",1,"col-md-4"],[1,"winter-banner"],[1,"banner-description"],["data-aos","fade-up",1,"col-md-4"],[1,"summer-banner"],["data-aos","fade-up-left",1,"col-md-4"],[1,"trendy-banner"]],template:function(t,r){1&t&&(n.TgZ(0,"section"),n._UZ(1,"slider"),n.TgZ(2,"div",0),n._UZ(3,"featured-products"),n.qZA(),n.TgZ(4,"div",1)(5,"div",0)(6,"div",2)(7,"div",3)(8,"p"),n._uU(9,"Repair Service"),n.qZA()(),n.TgZ(10,"div",3)(11,"h1",4),n._uU(12,"Up to "),n.TgZ(13,"span",5),n._uU(14,"70% Off"),n.qZA(),n._uU(15,"- All T-Shirts & Accessories "),n.qZA()(),n.TgZ(16,"div",3)(17,"button",6),n._uU(18,"Explore More"),n.qZA()()()()(),n.TgZ(19,"div",0),n._UZ(20,"arrivals-products"),n.TgZ(21,"section",7)(22,"div",2)(23,"div",8)(24,"div",9)(25,"p"),n._uU(26,"Crazy deals "),n.qZA(),n.TgZ(27,"h1",10),n._uU(28,"buy 1 get 1 free"),n.qZA(),n.TgZ(29,"p",11),n._uU(30,"the best classic dress is on sale at cara"),n.qZA(),n.TgZ(31,"button",12),n._uU(32,"learn more"),n.qZA()()(),n.TgZ(33,"div",13)(34,"div",14)(35,"p"),n._uU(36,"spring/Summer "),n.qZA(),n.TgZ(37,"h1",10),n._uU(38,"upcomming season"),n.qZA(),n.TgZ(39,"p",11),n._uU(40,"the best classic dress is on sale at cara"),n.qZA(),n.TgZ(41,"button",15),n._uU(42,"Collection"),n.qZA()()(),n.TgZ(43,"div",16)(44,"div",17)(45,"h1",10),n._uU(46),n.ALo(47,"uppercase"),n.qZA(),n.TgZ(48,"h3",18),n._uU(49,"Winter Collection -50% OFF"),n.qZA()()(),n.TgZ(50,"div",19)(51,"div",20)(52,"h1",10),n._uU(53),n.ALo(54,"uppercase"),n.qZA(),n.TgZ(55,"h3",18),n._uU(56,"Spring / Summer 2022"),n.qZA()()(),n.TgZ(57,"div",21)(58,"div",22)(59,"h1",10),n._uU(60),n.ALo(61,"uppercase"),n.qZA(),n.TgZ(62,"h3",18),n._uU(63,"New Trendy Printe"),n.qZA()()()()()(),n._UZ(64,"sign-up-section"),n.qZA()),2&t&&(n.xp6(46),n.Oqu(n.lcZ(47,3,"seasonal sale")),n.xp6(7),n.Oqu(n.lcZ(54,5,"New footwear collection")),n.xp6(7),n.Oqu(n.lcZ(61,7,"T-shirts")))},dependencies:[v.A,l,b,f,i.gd],styles:[".rapair-service[_ngcontent-%COMP%]{background-image:url(b2.0f5c902474603886.jpg);text-align:center;color:#fff;padding:75px 0 50px;background-repeat:no-repeat;width:100%;background-size:cover;background-position:center;font-weight:600}.rapair-service[_ngcontent-%COMP%]   .offer[_ngcontent-%COMP%]{font-weight:700;margin-bottom:20px}.rapair-service[_ngcontent-%COMP%]   .offer[_ngcontent-%COMP%]   .persentage-offer[_ngcontent-%COMP%]{color:#ef3636}.rapair-service[_ngcontent-%COMP%]   .offer-btn[_ngcontent-%COMP%]{padding:13px 24px;border-radius:4px;font-weight:600;font-size:14px;transition:.5s}.rapair-service[_ngcontent-%COMP%]   .offer-btn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#088178}.small-banners[_ngcontent-%COMP%]{padding:100px 0;overflow-x:hidden}.small-banners[_ngcontent-%COMP%]   .crazy-banner[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .spring-banner[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .winter-banner[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .summer-banner[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .trendy-banner[_ngcontent-%COMP%]{background-image:url(b17.be7609ff54ad2316.jpg);height:344px;background-repeat:no-repeat;padding:25px;background-position:top;background-size:cover;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;margin-bottom:20px;color:#fff}.small-banners[_ngcontent-%COMP%]   .crazy-banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .spring-banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .winter-banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .summer-banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .trendy-banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%]{font-weight:900}.small-banners[_ngcontent-%COMP%]   .crazy-banner[_ngcontent-%COMP%]   .crazy-btn[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .crazy-banner[_ngcontent-%COMP%]   .spring-btn[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .spring-banner[_ngcontent-%COMP%]   .crazy-btn[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .spring-banner[_ngcontent-%COMP%]   .spring-btn[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .winter-banner[_ngcontent-%COMP%]   .crazy-btn[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .winter-banner[_ngcontent-%COMP%]   .spring-btn[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .summer-banner[_ngcontent-%COMP%]   .crazy-btn[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .summer-banner[_ngcontent-%COMP%]   .spring-btn[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .trendy-banner[_ngcontent-%COMP%]   .crazy-btn[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .trendy-banner[_ngcontent-%COMP%]   .spring-btn[_ngcontent-%COMP%]{padding:11px 21px;border:none;color:#fff;background-color:#088178;font-size:14px;font-weight:600}.small-banners[_ngcontent-%COMP%]   .crazy-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .spring-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .winter-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .summer-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .trendy-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%]{color:#ec544e;font-weight:800;font-size:15px}.small-banners[_ngcontent-%COMP%]   .spring-banner[_ngcontent-%COMP%]{background-image:url(b10.7bb69aaf6d3ff957.jpg)}.small-banners[_ngcontent-%COMP%]   .spring-banner[_ngcontent-%COMP%]   .spring-btn[_ngcontent-%COMP%]{background-color:transparent!important;border:1px solid #fff!important;transition:.4s}.small-banners[_ngcontent-%COMP%]   .spring-banner[_ngcontent-%COMP%]   .spring-btn[_ngcontent-%COMP%]:hover{background-color:#088178!important}.small-banners[_ngcontent-%COMP%]   .winter-banner[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .summer-banner[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .trendy-banner[_ngcontent-%COMP%]{min-width:30%;height:43vh;margin-bottom:20px}.small-banners[_ngcontent-%COMP%]   .winter-banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .summer-banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%], .small-banners[_ngcontent-%COMP%]   .trendy-banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%]{font-size:22px}.small-banners[_ngcontent-%COMP%]   .winter-banner[_ngcontent-%COMP%]{background-image:url(b7.7cf90da45a9f743a.jpg)}.small-banners[_ngcontent-%COMP%]   .summer-banner[_ngcontent-%COMP%]{background-image:url(b4.f43dac3012b6201c.jpg)}.small-banners[_ngcontent-%COMP%]   .trendy-banner[_ngcontent-%COMP%]{background-image:url(b18.98ab265b1b7ebaeb.jpg)}"]}),e})()},{path:"slider",component:l}];let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[g.Bz.forChild(S),g.Bz]}),e})();var k=c(4466);let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[i.ez,F,u.yb,k.m,u.yb]}),e})()}}]);