(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(t){t.exports=JSON.parse('["2019-chiba-typhoon-15.json"]')},185:function(t){t.exports=JSON.parse('{"map_id":"2019-chiba-typhoon-15","map_title":"印刷できる台風災害支援情報マップ（千葉県）","map_description":"SNSで流れる給水所等の情報をネットを見れない地域の人にも伝えられるよう、印刷に最適化したマップです。マップを必要な地域のところに調整すると、A4サイズにちょうどよく印刷され、かつ必要な場所の情報がリストとして表示されます。（GS・給水・避難所・充電・無料Wifi）  ぜひ印刷して必要な人に届けてあげてください！","sources":[{"url":"https://www.google.com/maps/d/kml?mid=18v4csEC-qPW_aeXhEnuzgMfUAqWcbF5q&forcekml=1","type":"kml","title":"2019千葉台風15号","show":true}],"default_hash":"35.034970230243786,139.83536606997205-34.998870264553034,139.90144296563784","center":[139.83536606997205,35.034970230243786],"type":"KML","layer_settings":[{"name":"GS(赤：無事)","color":"#992222","bg_color":"#CA9491","icon_class":"fas fa-heart","class":"layer_gs_ok"},{"name":"GS (黒点：未確認)","color":"#4F4F5A","bg_color":"#B7B7BE","icon_class":"fas fa-eye-slash","class":"layer_gs_undefined"},{"name":"給水所_(千葉市・県指定除く）","color":"#285797","bg_color":"#A3BBDA","icon_class":"fas fa-tint","class":"layer_water_chibacity"},{"name":"避難所","color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},{"name":"携帯充電_ほか","color":"#6D4615","bg_color":"#C1B17E","icon_class":"fas fa-plug","class":"layer_charger"},{"name":"無料Wifi","color":"#604490","bg_color":"#BDB1D8","icon_class":"fas fa-wifi","class":"layer_wifi"}]}')},186:function(t,e,r){var map={"./2019-chiba-typhoon-15":185,"./2019-chiba-typhoon-15.json":185,"./list":184,"./list.json":184};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=186},188:function(t,e,r){t.exports=r.p+"img/bbb22c3.jpg"},195:function(t,e,r){"use strict";r.r(e),r.d(e,"DEFAULT_ICON_COLOR",(function(){return f})),r.d(e,"default",(function(){return m})),r.d(e,"readCategoryOfFolder",(function(){return h}));r(111);var n=r(41),o=(r(61),r(196)),l=r(197),c=r(104),d=r(198),f="lightgreen",m=function(){function t(){Object(o.a)(this,t)}return Object(l.a)(t,[{key:"parse",value:function(t,data,e){switch(t){case"kml":var r=(new DOMParser).parseFromString(data,"text/xml");return this.loadKMLData(r,e);case"umal":this.loadUmapJsonData(data)}}},{key:"addFeatureCollection",value:function(t,e){t.features.forEach((function(t){t.geometry.type}))}},{key:"loadUmapJsonData",value:function(data){data.layers.forEach((function(t){t._umap_options;t.features.forEach((function(t){}))}))}},{key:"loadKMLData",value:function(data,t){var e=this,r=this,n=data.getElementsByTagName("Folder");0==n.length&&(n=data.getElementsByTagName("Document"));var o=[];return Array.prototype.forEach.call(n,(function(n){var l=h(n,data);if(t&&(l=e.convertCategoryStyle(l,t)),"FeatureCollection"==d.kml(n).type){var c=d.kml(n,{styles:!0});if(c.features.length>0)return r.addFeatureCollection(c,l),c.features.map((function(t){"Point"==t.geometry.type&&o.push({feature:t,category:l})}))}else{var f=d.kml(n,{styles:!0});o.push({geojsondata:f,category:l})}})),o}},{key:"inBounds",value:function(t,e){var r=(t[0]-e.getNorthEast().lng)*(t[0]-e.getSouthWest().lng)<0,n=(t[1]-e.getNorthEast().lat)*(t[1]-e.getSouthWest().lat)<0;return r&&n}},{key:"convertCategoryStyle",value:function(t,e){return null==e?t:(e.forEach((function(e){if(e.name==t.name)return t.color=e.color,t.bgColor=e.bg_color,t.iconClass=e.icon_class,t.class=e.class,t})),t)}},{key:"tileServerAttribution",value:function(t){return"codeforjapan.github.io"===t?"Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.":'Map data © <a href="http://openstreetmap.org/">OpenStreetMap</a>'}},{key:"getStyle",value:function(t,e){return{version:8,sources:{OSM:{type:"raster",tiles:this.tileServerUrl(t,e),tileSize:256,attribution:this.tileServerAttribution(e)}},layers:[{id:"OSM",type:"raster",source:"OSM",minzoom:0,maxzoom:22}]}}},{key:"tileServerUrl",value:function(t,e){return["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png","https://b.tile.openstreetmap.org/{z}/{x}/{y}.png","https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"]}},{key:"serializeLatLng",value:function(t){return t.lat+","+t.lng}},{key:"serializeBounds",value:function(t){return this.serializeLatLng(t.getNorthWest())+"-"+this.serializeLatLng(t.getSouthEast())}},{key:"deserializeLatLng",value:function(s){var t=s.split(",",2),e=Object(n.a)(t,2),r=e[0],o=e[1],l=parseFloat(o),d=parseFloat(r);return new c.LngLat(l,d)}},{key:"deserializeBounds",value:function(s){try{var t=this;return new c.LngLatBounds(s.split("-",2).map((function(e){return t.deserializeLatLng(e)})))}catch(t){return}}}]),t}();function h(t,e){var r=t.getElementsByTagName("name")[0].textContent,n="red";console.log(t);try{var o=t.getElementsByTagName("styleUrl")[0].textContent;if(o){var l=e.querySelectorAll(o+" Pair");l.length>0&&Array.prototype.forEach.call(l,(function(t){var r=t.querySelector("key");if(r&&"normal"==r.textContent){var o=t.querySelector("styleUrl").textContent,style=e.querySelector(o);try{n="#"+style.querySelector("IconStyle color").textContent.substr(0,6)}catch(t){n=f}}}))}}catch(e){console.log("#category read error"),console.log(e),console.log(t)}return{name:r,color:n,iconUrl:void 0}}},199:function(t,e){},202:function(t,e,r){"use strict";r.r(e);var n,o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"print-button-outer"},[e("button",{attrs:{id:"print"}},[this._v("印刷する（A4タテ）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("このサイトのソースコードはオープンに公開しております。開発にご協力いただける方は、"),e("a",{attrs:{href:"https://github.com/codeforjapan/mapprint"}},[this._v("Code for Japan の Github リポジトリ")]),this._v("から、開発にご参加ください。JavaScript や Leaflet などの経験がある方、大歓迎です。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:r(188)}})])}];r(61),r(189),r(193);var l={props:["map_config"],previous_hash:"",computed:{center:function(){return this.map_config.center},inBoundsMarkers:function(){var t=this,e=[];return this.layers.map((function(r){r.source.show&&r.markers.map((function(marker){t.bounds&&n.inBounds(marker.feature.geometry.coordinates,t.bounds)&&e.push(marker)}))})),e},displayMarkersGroupByCategory:function(){return this.inBoundsMarkers.reduce((function(t,e){var r=t.find((function(g){return g.name===e.category.name}));return r||(r={name:e.category.name,prop:e.category,markers:[]},t.push(r)),r.markers.push(e),t}),[])}},data:function(){return{layers:[],map:null,bounds:null,updated_at:null,isOpenLegend:!1}},methods:{load:function(t){var e=window.location.hash.substr(1),r=n.deserializeBounds(e);this.map=t.map,null!=r&&this.map.fitBounds(r,{linear:!1}),this.map.on("moveend",this.etmitBounds),this.etmitBounds()},etmitBounds:function(){this.bounds=this.map.getBounds(),this.setHash(this.bounds)},setHash:function(t){var s=n.serializeBounds(t),path=location.pathname;s!=this.prvious_hash&&window.history.pushState("","",path+"#"+s),this.previous_hash=s}},mounted:function(){var t=this,e=r(195).default;n=new e,this.map_config.sources.forEach((function(source){var dt;t.updated_at=(dt=new Date).getFullYear()+"年"+("00"+(dt.getMonth()+1)).slice(-2)+"月"+("00"+dt.getDate()).slice(-2)+"日"+("00"+dt.getHours()).slice(-2)+"時"+("00"+dt.getMinutes()).slice(-2)+"分",$nuxt.$axios.get(source.url).then((function(e){t.layers.push({source:source,markers:n.parse(source.type,e.data,t.map_config.layer_settings)})}))}))}},c=r(11),d={components:{PrintableMap:Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("div",[r("div",t._l(t.map_config.sources,(function(source){return r("label",{staticClass:"header-label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:source.show,expression:"source.show"}],staticClass:"header-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(source.show)?t._i(source.show,null)>-1:source.show},on:{change:function(e){var r=source.show,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&t.$set(source,"show",r.concat([null])):l>-1&&t.$set(source,"show",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(source,"show",o)}}}),t._v(t._s(source.title))])})),0),r("div",{staticClass:"header-datetime"},[t._v("データ最終更新日： "+t._s(t.updated_at))]),r("div",{staticClass:"map-outer"},[r("MglMap",{attrs:{"access-token":"pk.eyJ1IjoibWlra2FtZSIsImEiOiJjamtpNnczNTQxMXJuM3FtbHl1a3dyMmgxIn0.d4Xr7p5rC24rYg4pFVWwqg","map-style":"mapbox://styles/mapbox/streets-v11",center:t.center,zoom:15,preserveDrawingBuffer:"",id:"map"},on:{load:t.load}},[r("MglGeolocateControl"),r("div",{staticClass:"legend",class:{open:t.isOpenLegend}},[r("div",{staticClass:"legend-inner"},[t._l(t.map_config.layer_settings,(function(e){return r("div",{staticClass:"legend-type"},[r("i",{class:[e.icon_class],style:{backgroundColor:e.color}}),r("span",{staticClass:"poi-type"},[t._v(t._s(e.name))])])})),r("div",{staticClass:"legend-trigger",class:{close:!t.isOpenLegend},on:{click:function(e){t.isOpenLegend=!t.isOpenLegend}}},[t.isOpenLegend?r("div",{staticClass:"legend-trigger-icon"},[r("i",{staticClass:"fas fa-caret-right"}),r("span",[t._v("とじる")])]):r("div",{staticClass:"legend-trigger-icon"},[r("i",{staticClass:"fas fa-caret-left"}),r("span",[t._v("凡例")])])])],2)]),t._l(t.layers,(function(e){return e.source.show?t._l(e.markers,(function(marker,e){return r("MglMarker",{key:e,attrs:{coordinates:marker.feature.geometry.coordinates}},[r("template",{slot:"marker"},[r("div",{staticClass:"marker"},[r("span",{style:{background:marker.category.color}},[r("i",{class:[marker.category.iconClass,marker.category.class],style:{backgroundColor:marker.category.color}}),r("b",{staticClass:"number",style:{background:marker.category.bgColor}},[t._v(t._s(t.inBoundsMarkers.indexOf(marker)+1))])])])]),r("MglPopup",[r("div",{staticClass:"legend-type"},[r("i",{class:[marker.category.iconClass,marker.category.class],style:{backgroundColor:marker.category.color}}),r("span",{staticClass:"poi-type"},[t._v(t._s(marker.category.name))]),r("p",[t._v("名称: "+t._s(marker.feature.properties.name)+"\n"+t._s(marker.feature.properties.description?marker.feature.properties.description:""))])])])],2)})):t._e()}))],2)],1),r("div",t._l(t.displayMarkersGroupByCategory,(function(e){return r("section",[r("h2",{staticClass:"list-title"},[r("span",{staticClass:"list-title-mark",style:{backgroundColor:e.prop.color}},[r("i",{class:[e.prop.iconClass]})]),r("span",[t._v(t._s(e.prop.name))])]),r("ul",{staticClass:"list-items grid-noGutter"},t._l(e.markers,(function(marker){return r("li",{staticClass:"col-12_xs-6"},[r("span",{staticClass:"item-number"},[t._v(t._s(t.inBoundsMarkers.indexOf(marker)+1))]),r("span",{staticClass:"item-name"},[t._v(t._s(marker.feature.properties.name))])])})),0)])})),0)])])}),[],!1,null,null,null).exports},data:function(){return{map_config:null,isOpenExplain:!1}},mounted:function(){this.map_config=r(186)("./"+$nuxt.$route.params.map)}},f=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout-container-inner grid"},[r("aside",{staticClass:"not_print_area col-12_md-3",attrs:{id:"explain"}},[t._m(0),r("h2",{staticClass:"explain-title-pc"},[t._v("このサイトについて")]),r("div",{staticClass:"explain-title-sp",on:{click:function(e){t.isOpenExplain=!t.isOpenExplain}}},[t._v("このサイトについて")]),r("div",{staticClass:"explain",class:{open:t.isOpenExplain}},[t.map_config?r("p",[t._v(t._s(t.map_config.map_description))]):t._e(),t._m(1)])]),r("main",{staticClass:"sheet col-12_md-9"},[r("header",{staticClass:"header"},[r("div",{staticClass:"qrcode",attrs:{id:"qrcodecontainer"}}),r("div",{staticClass:"banner"},[t._m(2),t.map_config?r("h1",{staticClass:"title"},[t._v(t._s(t.map_config.map_title))]):t._e()])]),r("div",{attrs:{id:"content"}},[r("div",{attrs:{id:"page"}},[r("div",{staticClass:"print_area",attrs:{id:"date"}}),t.map_config?r("printable-map",{attrs:{map_config:t.map_config}}):t._e()],1),r("div",{staticClass:"print_area",attrs:{id:"footer"}})])])])}),o,!1,null,null,null);e.default=f.exports}}]);