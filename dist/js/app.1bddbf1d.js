(function(e){function t(t){for(var r,a,o=t[0],l=t[1],u=t[2],p=0,f=[];p<o.length;p++)a=o[p],s[a]&&f.push(s[a][0]),s[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("dropzone")],1)])},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.sendFile(t)}}},[e.message?n("div",{class:"message "+(e.error?"is-danger":"is-success")},[n("div",{staticClass:"message-body"},[e._v("\n        "+e._s(e.message)+"\n    ")])]):e._e(),n("div",{staticClass:"dropzone"},[n("input",{ref:"file",staticClass:"input-file",attrs:{type:"file"},on:{change:e.sendFile}}),e.uploading?e._e():n("p",{staticClass:"call-to-action"},[e._v("\n           Browse or Drag Your Files here\n         ")]),e.uploading?n("p",{staticClass:"progress-bar"},[n("progress",{staticClass:"progress is-primary",attrs:{max:"100"},domProps:{value:e.progress}},[e._v("\n             "+e._s(e.progress)+" %\n             ")])]):e._e()]),n("div",{staticClass:"content"},[e.uploadedFiles.length?n("ul",{staticClass:"list is-hoverable"},e._l(e.uploadedFiles,function(t){return n("li",{key:t.originalname,staticClass:"list-item"},[e._v("\n                 "+e._s(t.originalname)+" \n                "),n("i",{staticClass:"fas pull-right fa-check"})])}),0):e._e()])])},o=[],l=(n("96cf"),n("3b8d")),u=(n("6762"),n("bc3a")),c=n.n(u),p={name:"Dropzone",data:function(){return{file:"",message:"",error:!1,baseUrl:"http://128.199.59.139/vue-api/",uploading:!1,uploadedFiles:[],progress:0}},methods:{selectFile:function(){var e=["image/jpeg","image/png","image/gif"],t=2e7,n=this.$refs.file.files[0],r=n.size>t;e.includes(n.type)&&!r?(this.file=n,this.error=!1,this.message=""):(this.error=!0,this.message=r?"Too Large Max Size is ".concat(t/1e3,"Kb"):"Only images are allowed")},sendFile:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,n,r,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$refs.file.files[0],n=new FormData,n.append("file",t),e.prev=3,this.uploading=!0,e.next=7,c.a.post(this.baseUrl+"dropzone",n,{onUploadProgress:function(e){return s.progress=Math.round(100*e.loaded/e.total)}}).then(function(e){console.log(e)},function(e){console.log(e)});case 7:r=e.sent,this.uploadedFiles.push(r.data.file),this.uploading=!1,this.message="File has been uploaded",this.file="",this.error=!1,e.next=20;break;case 15:e.prev=15,e.t0=e["catch"](3),this.uploading=!1,this.message="File not uploaded",this.error=!0;case 20:case"end":return e.stop()}},e,this,[[3,15]])}));function t(){return e.apply(this,arguments)}return t}()}},f=p,d=(n("c3fd"),n("2877")),g=Object(d["a"])(f,a,o,!1,null,"72e7e160",null),h=g.exports,m={name:"app",components:{Dropzone:h}},v=m,b=Object(d["a"])(v,s,i,!1,null,null,null),y=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},a1b7:function(e,t,n){},c3fd:function(e,t,n){"use strict";var r=n("a1b7"),s=n.n(r);s.a}});
//# sourceMappingURL=app.1bddbf1d.js.map