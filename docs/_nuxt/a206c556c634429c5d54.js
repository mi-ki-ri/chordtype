(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{185:function(t,e,r){var content=r(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("e5e5bc30",content,!0,{sourceMap:!1})},212:function(t,e,r){"use strict";var o=r(185);r.n(o).a},213:function(t,e,r){(e=r(49)(!1)).push([t.i,".header[data-v-72181e0f]{background-color:var(--cyan);height:12vh}.editor[data-v-72181e0f]{min-height:84vh;border:1px solid #ccc}.editor[data-v-72181e0f],.visualArea[data-v-72181e0f]{width:100%}#visual[data-v-72181e0f]{width:600px;max-width:600px;min-height:800px}.bar[data-v-72181e0f]{border-right:1px solid #ccc}.bar[data-v-72181e0f]:last-of-type{border-right:none}.chords[data-v-72181e0f]{color:var(--gray);margin-bottom:.1rem;line-height:1;width:100%;display:flex;justify-content:space-between;align-items:baseline}.chord[data-v-72181e0f]{flex-grow:1;text-align:left}.lyric[data-v-72181e0f]{color:var(--dark);margin-bottom:.5rem;width:100%;display:flex;justify-content:space-between;align-items:baseline}.lyric-sentence[data-v-72181e0f]{flex-grow:1;text-align:left}.btnCol[data-v-72181e0f]{display:flex;justify-content:flex-end;align-items:center}.underline[data-v-72181e0f]{border-bottom:1px dashed #ccc}.chapter[data-v-72181e0f]{font-weight:700}",""]),t.exports=e},215:function(t,e,r){"use strict";r.r(e);r(96),r(23);var o=r(194),l=r.n(o),n=(r(195),{data:function(){return{editorText:"",editorTitle:""}},computed:{formattedObj:function(){var t=this.editorText.split("\n\n"),e=[];return(t=0==t.length?[this.editorText]:t).forEach((function(t,r,o){console.log("elm",t);var l=[];if("---"==t)return l.push({chords:[""],lyric:[""],class:"underline"}),void e.push(l);if(t.match(/^\[[a-zA-Z0-9]\]/gi))return l.push({chords:[t.match(/^\[[a-zA-Z0-9]+\]/gi)[0]],lyric:[""],class:"chapter"}),void e.push(l);var n=t.split("\n"),c=n[0],d=n[1],h=void 0!==c?c.split("|"):[c],v=void 0!==d?d.split("|"):[d];console.log("spltdchrd",h);var f=Math.max(h.length,v.length);console.log("bars",f);for(var i=0;i<f;i++){for(var m=(void 0!==h[i]?h[i]:"").split(","),x=(void 0!==v[i]?v[i]:"").split(","),w=Math.max(m.length,x.length),y=[],_=[],C=0;C<w;C++)y.push(void 0!==m[C]?m[C]:""),_.push(void 0!==x[C]?x[C]:"");l.push({chords:y,lyric:_,class:"normal"})}e.push(l)})),console.log(e),e}},methods:{download:function(){var t=this;l()(document.querySelector("#visual")).then((function(canvas){var link=document.createElement("a");link.href=canvas.toDataURL("image/png"),link.download=t.editorTitle+".png",link.click()}))}}}),c=(r(212),r(45)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-container",{staticClass:"header",attrs:{tag:"header",fluid:""}},[r("b-row",[r("b-col",[t._v("\n         \n      ")]),t._v(" "),r("b-col",[r("h1",{staticClass:"text-center text-white"},[t._v("\n          ChordType\n        ")])]),t._v(" "),r("b-col",{staticClass:"btnCol"},[r("b-button",{on:{click:t.download}},[t._v("\n          DL\n        ")]),t._v(" "),r("b-link",{staticClass:"text-light ml-2",attrs:{href:"https://github.com/mi-ki-ri/chordtype"}},[t._v("ReadMe")])],1)],1)],1),t._v(" "),r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{staticClass:"editorArea m-2"},[r("b-input",{staticClass:"mb-1",attrs:{placeholder:"Title",type:"text"},model:{value:t.editorTitle,callback:function(e){t.editorTitle=e},expression:"editorTitle"}}),t._v(" "),r("b-textarea",{staticClass:"editor",attrs:{placeholder:"F,G|Am"},model:{value:t.editorText,callback:function(e){t.editorText=e},expression:"editorText"}})],1),t._v(" "),r("b-col",{staticClass:"visualArea m-2"},[r("b-container",{attrs:{id:"visual"}},[r("b-row",[r("b-col",[r("h2",{staticClass:"text-center"},[t._v("\n                "+t._s(t.editorTitle)+"\n              ")])])],1),t._v(" "),t._l(t.formattedObj,(function(line,e){return r("b-row",{key:e},t._l(line,(function(e,o){return r("b-col",{key:o,staticClass:"bar"},[r("b-row",{staticClass:"chords"},t._l(e.chords,(function(e,o){return r("b-col",{key:o,class:"chord "+line[0].class},[t._v("\n                  "+t._s(e||" ")+"\n                ")])})),1),t._v(" "),r("b-row",{staticClass:"lyric"},t._l(e.lyric,(function(e,o){return r("b-col",{key:o,staticClass:"lyric-sentence"},[t._v("\n                  "+t._s(e||" ")+"\n                ")])})),1)],1)})),1)}))],2)],1)],1)],1)],1)}),[],!1,null,"72181e0f",null);e.default=component.exports}}]);