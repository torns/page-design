(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{752:function(e,n,t){var o=t(753);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(175).default)("7fb69468",o,!1,{})},753:function(e,n,t){(e.exports=t(132)(!1)).push([e.i,"\n.component-wrapper[data-v-59dcc63e] {\n  display: flex;\n  justify-content: center;\n  width: 10rem;\n}\n.component-wrapper ul[data-v-59dcc63e] {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n  margin: 0.32rem 0.32rem 0.08rem;\n  padding: 0;\n  width: 100%;\n}\n.component-wrapper ul li[data-v-59dcc63e] {\n  position: relative;\n  width: 4.56rem;\n  margin-bottom: 0.24rem;\n  background-color: #FFFFFF;\n  overflow: hidden;\n}\n.component-wrapper ul .item-image[data-v-59dcc63e] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6.08rem;\n}\n.component-wrapper ul .item-image .image-goods img[data-v-59dcc63e] {\n  width: 100%;\n}\n.component-wrapper ul .item-info[data-v-59dcc63e] {\n  padding-left: 0.32rem;\n  margin-bottom: 0.32rem;\n}\n.component-wrapper ul .item-title[data-v-59dcc63e] {\n  box-sizing: content-box;\n  width: 3.92rem;\n  font-size: 0.29333333rem;\n  height: 0.4rem;\n  line-height: 0.4rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: keep-all;\n  word-wrap: break-word;\n  padding-top: 0.24rem;\n  margin-bottom: 0.10666667rem;\n  color: #333333;\n}\n.component-wrapper ul .item-title a[data-v-59dcc63e] {\n  color: #333333;\n}\n.component-wrapper ul .item-title a[data-v-59dcc63e]:hover {\n  color: #333333;\n}\n.component-wrapper ul .item-shop-market[data-v-59dcc63e] {\n  width: 100%;\n}\n.component-wrapper ul .item-shop-market .item-shop[data-v-59dcc63e] {\n  display: flex;\n  flex-flow: row wrap;\n  color: #333333;\n  line-height: 0.64rem;\n  align-items: baseline;\n}\n.component-wrapper ul .item-shop-market .item-shop .shop-title[data-v-59dcc63e] {\n  font-size: 0.34666667rem;\n  max-width: 3.92rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: keep-all;\n  word-wrap: break-word;\n}\n.component-wrapper ul .item-shop-market .item-shop .shop-title-block[data-v-59dcc63e] {\n  display: inline-block;\n  width: 0.10695187rem;\n}\n.component-wrapper ul .item-shop-market .item-shop .shop-price[data-v-59dcc63e] {\n  font-size: 0.48rem;\n  font-weight: bold;\n}\n.component-wrapper ul .item-market[data-v-59dcc63e] {\n  color: #999999;\n  line-height: 0.45333333rem;\n}\n.component-wrapper ul .item-soldOut[data-v-59dcc63e] {\n  position: absolute;\n  top: 2.42666667rem;\n  left: 0.32rem;\n  width: 3.92rem;\n  height: 0.80213904rem;\n  line-height: 0.80213904rem;\n  border-radius: 1.06666667rem;\n  background-color: #000000;\n  opacity: 0.4;\n  z-index: 1;\n}\n.component-wrapper ul .item-soldOut > span[data-v-59dcc63e] {\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.32rem;\n  color: #ffffff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: keep-all;\n  word-wrap: break-word;\n  width: 100%;\n}\n.component-wrapper.is-whole ul[data-v-59dcc63e] {\n  margin: 0.32rem;\n  padding: 0.32rem 0.32rem 0rem;\n  width: 100%;\n  background-color: #ffffff;\n}\n.component-wrapper.is-whole ul li[data-v-59dcc63e] {\n  width: 4.24rem;\n}\n.component-wrapper.is-whole ul .item-image[data-v-59dcc63e] {\n  height: 5.65333333rem;\n}\n.component-wrapper.is-whole ul .item-info[data-v-59dcc63e] {\n  padding-left: 0rem;\n}\n.component-wrapper.is-whole ul .item-soldOut[data-v-59dcc63e] {\n  position: absolute;\n  top: 2.42666667rem;\n  width: 3.6rem;\n}\n",""])},775:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this.styles,n=e.margin_top,t=e.margin_bottom,o=e.bg_color,i=e.bg_radius,r=e.item_radius,a=e.shop_price_color;return"\n        .component-"+this.id+" {\n            margin-top: "+this.px2rem(n)+";\n            margin-bottom: "+this.px2rem(t)+";\n            background-color: "+(o||"#f8f8f8")+";\n        }\n\n        .component-"+this.id+" ul {\n            border-radius: "+this.px2rem(i||12)+";\n        }\n\n        .component-"+this.id+" li {\n            border-radius: "+this.px2rem(r||12)+";\n        }\n\n        .component-"+this.id+" .item-shop .shop-price {\n            color: "+a+";\n        }\n    "},i={props:["id","datas","styles","goodsSKU","languages"],computed:{css:function(){return"<style>"+o.call(this)+"</style>"},className:function(){var e=["component-wrapper","component-"+this.id];return this.whole&&e.push("is-whole"),e},env:function(){return this.$store.state.page.env},list:function(){try{return this.goodsSKU[0].goodsInfo||[]}catch(e){return[]}},whole:function(){return 1==this.styles.box_is_whole}},methods:{px2rem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e/75+"rem"}},watch:{list:function(){this.$store.dispatch("global/async_goods_init_2",this)}},mounted:function(){this.$emit("loaded"),this.$store.dispatch("global/async_goods_init_2",this)}},r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.list.length>0?t("div",{class:e.className},[t("div",{domProps:{innerHTML:e._s(e.css)}}),e._v(" "),t("ul",e._l(e.list,(function(n,o){return t("li",{key:o+"-"+n.goods_sn},[t("discount-zaful-m",{attrs:{value:n.discount,config:e.styles}}),e._v(" "),t("div",{staticClass:"item-image"},[t("a",{attrs:{href:n.goods_number>0?n.url_title:"javascript:void(0);"}},[t("div",{staticClass:"image-goods"},[t("goods-image-zaful",{attrs:{src:n.goods_img,sku:n.goods_sn,index:o}})],1)]),e._v(" "),n.goods_number<=0?t("div",{staticClass:"item-soldOut"},[t("span",[e._v(e._s(e.languages.sold_out))])]):e._e()]),e._v(" "),t("div",{staticClass:"item-info"},[t("div",{staticClass:"item-title"},[t("a",{attrs:{href:n.goods_number>0?n.url_title:"javascript:void(0);"}},[e._v(e._s(n.goods_title))])]),e._v(" "),t("div",{staticClass:"item-shop-market"},[t("div",{staticClass:"item-shop bold"},[t("div",{staticClass:"shop-title"},[e._v(e._s(e.styles.shop_price_title))]),e._v(" "),t("span",{staticClass:"shop-title-block"}),e._v(" "),t("div",{staticClass:"shop-price"},[t("shop-price-zaful",{attrs:{value:n.shop_price,config:e.styles}})],1)]),e._v(" "),t("div",{staticClass:"item-market"},[t("market-price-zaful",{attrs:{value:n.market_price,"shop-price":n.shop_price,config:e.styles}})],1)])])],1)})),0)]):e._e()};r._withStripped=!0;var a=t(103);var s=function(e){t(752)},p=Object(a.a)(i,r,[],!1,s,"data-v-59dcc63e",null);p.options.__file="src/components/ui-component/U000245/m/index.vue";n.default=p.exports}}]);