(function(t){function e(e){for(var a,r,c=e[0],s=e[1],u=e[2],d=0,l=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"952bc944"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"3eb05a46"}[t]+".css",i=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===i))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===a||d===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],p.parentNode.removeChild(p),n(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(t);var l=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}i[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"5c0b":function(t,e,n){"use strict";var a=n("8624"),r=n.n(a);r.a},6:function(t,e){},"6f5f":function(t,e,n){t.exports=n.p+"img/FactsMissionTEO.167b9ed1.png"},7:function(t,e){},8:function(t,e){},8624:function(t,e,n){},9:function(t,e){},cd49:function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var a,r,i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("main",{staticClass:"container"},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/advanced"}},[t._v("Advanced")])],1),n("router-view")],1),t._m(1)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"plazi-header"},[a("div",{staticClass:"container"},[a("a",{attrs:{href:"http://plazi.org/"}},[a("img",{attrs:{src:n("cf05"),alt:"Plazi - take care of freedom",width:"200",height:"50"}})]),a("a",{attrs:{href:"https://factsmission.com"}},[a("img",{attrs:{src:n("6f5f"),alt:"FactsMission",height:"20"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plazi-footer"},[n("div",{staticClass:"container"},[t._v(" Synospecies is created and maintained by "),n("a",{attrs:{href:"https://factsmission.com"}},[t._v("FactsMission")]),t._v(" and uses the taxonomic treatment data provided by "),n("a",{attrs:{href:"http://plazi.org/"}},[t._v("Plazi")]),t._v(". ")])])}],s=n("276c"),u=n("e1a7"),d=n("f20d"),l=n("920b"),p=n("9ab4"),f=n("60a3"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("SynoSpecies")]),n("form",{attrs:{id:"search-form"}},[n("span",[t._v("Input Genus and species here:")]),n("input",{attrs:{type:"text",id:"combinedfield",placeholder:"Sadayoshia acroporae"}}),n("button",{attrs:{id:"lookup"},on:{click:function(e){return e.preventDefault(),t.onClick(e)}}},[t._v("Look up")])]),n("hr"),n("div",{staticClass:"section",attrs:{id:"taxon-name"}}),n("div",{staticClass:"section",attrs:{id:"image-area"}}),n("div",{staticClass:"section",attrs:{id:"vernacular-area"}}),n("div",{staticClass:"section",attrs:{id:"wikidata-area"}})])},h=[],g=(n("c975"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("841c"),n("ddb0"),n("2b3d"),n("e954")),v=(n("2d26"),n("96cf"),n("9dbb"),n("91b7")),b=n.n(v),w=n("6d5e"),T=n.n(w),y=n("a36f"),x=n.n(y),_=function(){function t(e){Object(s["a"])(this,t),this._element=e,this._taxonNames={},this._sparqlEndpoint=new b.a("https://query.wikidata.org/sparql"),this._query=function(t){return'\n            DESCRIBE ?item WHERE \n            {\n                ?item wdt:P225 "'.concat(t,'"\n            }')}}return Object(g["a"])(t,[{key:"addTaxon",value:function(t){var e=this;function n(t){return T.a.sym("http://www.wikidata.org/prop/direct/"+t)}function a(t){return T.a.sym("http://www.wikidata.org/entity/"+t)}function r(t){return T.a.sym("http://schema.org/"+t)}function i(t){var e='<div>Wikidata Resource: <a href="'+t.value+'">'+t.value+"</a>";return e+="<ul>",t.out(n("P225")).each((function(t){e+="<li>Taxon Name "+t.value+"</li>"})),t.in(r("about")).each((function(t){e+='<li>Is subject of: <a href="'+t.value+'">'+decodeURI(t.value)+"</a></li>"})),t.out(n("P846")).each((function(t){e+='<li>GBIF ID <a href="https://www.gbif.org/species/'+t.value+'">'+t.value+"</a></li>"})),e+="</ul>",e+="</div>",e}if(!this._taxonNames[t])return this._taxonNames[t]=!0,this._sparqlEndpoint.getSparqlRDF(this._query(t)).then((function(e){if(0===e.length)throw Error("Not in wikidata: "+t);var r=x()(a("Q16521"),e),i=r.in(n("P31"));return 0===i.nodes.length&&(r=x()(a("Q23038290"),e),i=r.in(n("P31"))),i})).then((function(t){e._element.innerHTML=e._element.innerHTML+i(t)}))}},{key:"reset",value:function(){this._element.innerHTML="",this._taxonNames={}}}]),t}(),E=(n("99af"),function(){function t(e){Object(s["a"])(this,t),this._element=e,this._taxonUrls={},this._sparqlEndpoint=new b.a("https://vernacular.plazi.org/sparql"),this._query=function(t){return"PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nprefix slang: <https://vocab.plazi.org/vernacular/>\n\nSELECT DISTINCT ?value (GROUP_CONCAT(DISTINCT(?af); separator='; ') as ?afs) WHERE {\n    GRAPH ?g {\n        ?no a slang:NameOccurrence .\n        ?no rdf:value ?value .\n        OPTIONAL { ?no slang:areaFine ?af . }\n        ?no slang:taxon <".concat(t,"> .\n    }\n}\nGROUP BY ?value")}}return Object(g["a"])(t,[{key:"addTaxonUrl",value:function(t){var e=this,n=function(t){if(t.length>0){for(var e='<table class="table"><thead><tr><th scope="col">Vernacular Name</th><th scope="col">Area</th></tr></thead><tbody>',n=0;n<t.length;n++)e+="<tr><td>".concat(t[n].value.value,"</td><td>").concat(t[n].afs.value,"</td></tr>");return e+="</tbody></table>",e}return!1};if(!this._taxonUrls[t])return this._taxonUrls[t]=!0,this._sparqlEndpoint.getSparqlResultSet(this._query(t)).then((function(t){e._element.innerHTML=n(t.results.bindings)||""}))}},{key:"addTaxon",value:function(t){return this.addTaxonUrl("http://taxon-concept.plazi.org/id/Plantae/"+t.replace(/\s/g,"_"))}},{key:"reset",value:function(){this._element.innerHTML="",this._taxonUrls={}}}]),t}()),O=(n("a4d3"),n("e01a"),n("4160"),n("fb6a"),n("b64b"),n("159b"),function(){function t(e,n){Object(s["a"])(this,t),this._element=n,this._taxaManager=e,this.addedImages={},this.to_html=function(t){var e=t.description||"",n=document.createElement("figure"),a=document.createElement("img");a.setAttribute("src",t.url),a.setAttribute("alt",e);var r=document.createElement("figcaption");if(e.length>400){r.innerHTML=e.slice(0,401)+'<span hidden aria-hidden="false">'+e.slice(401)+"</span>";var i=document.createElement("span");i.innerHTML="...",i.classList.add("expandbtn"),i.addEventListener("click",(function(t){r.innerHTML=e,t.preventDefault()})),r.append(i)}else r.textContent=e;return n.append(a),n.append(r),n}}return Object(g["a"])(t,[{key:"appendImages",value:function(t){var e=this;this._taxaManager.getImages(t).then((function(t){t.forEach((function(t){e.addedImages[t.url]||(e.addedImages[t.url]=!0,e._element.append(e.to_html(t)))})),Object.keys(e.addedImages).length<=2?e._element.classList.add("twocol"):3===Object.keys(e.addedImages).length&&e._element.classList.add("threecol")}))}},{key:"reset",value:function(){this._element.innerHTML="",this._element.classList.remove("twocol"),this._element.classList.remove("threecol"),this.addedImages={}}}]),t}()),k=(n("d81d"),function(){function t(e){Object(s["a"])(this,t),this._sparqlEndpoint=e}return Object(g["a"])(t,[{key:"getNewTaxa",value:function(t){var e="PREFIX treat: <http://plazi.org/vocab/treatment#>\nPREFIX dwc: <http://rs.tdwg.org/dwc/terms/>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nCONSTRUCT {\n  ?tc dwc:rank ?rank .\n  ?tc dwc:phylum ?phylum .\n  ?tc dwc:kingdom ?kingdom .\n  ?tc dwc:class ?class .\n  ?tc dwc:family ?family .\n  ?tc dwc:order ?oder .\n  ?tc dwc:genus ?genus .\n  ?tc dwc:species ?species .\n  ?tc a <http://filteredpush.org/ontologies/oa/dwcFP#TaxonConcept> .\n  ?treatment treat:preferedName ?tc.\n  ?treatment dc:creator ?treatmentCreator .\n  ?treatment dc:date ?date . \n  ?augmentingTreatment treat:augmentsTaxonConcept ?tc .\n  ?augmentingTreatment dc:creator ?augmentingTreatmentCreator .\n  ?augmentingTreatment dc:date ?augmentingDate . \n  ?definingTreatment treat:definesTaxonConcept ?tc .\n  ?definingTreatment dc:creator ?definingTreatmentCreator .\n  ?definingTreatment dc:date ?definingDate . \n} WHERE { \n  ?treatment (treat:augmentsTaxonConcept|treat:definesTaxonConcept) ?tc .\n  ?treatment treat:deprecates <"+t+">.\n  ?tc dwc:rank ?rank .\n  ?tc dwc:phylum ?phylum .\n  ?tc dwc:kingdom ?kingdom .\n  ?tc dwc:class ?class .\n  ?tc dwc:family ?family .\n  ?tc dwc:order ?oder .\n  ?tc dwc:genus ?genus .\n  ?tc dwc:species ?species .\n  ?treatment ?treatmentTaxonRelation ?tc .\n  ?treatment dc:creator ?treatmentCreator .\n  OPTIONAL { ?treatment treat:publishedIn ?publ .\n    ?publ dc:date ?date . } \n  OPTIONAL { ?augmentingTreatment treat:augmentsTaxonConcept ?tc .\n    ?augmentingTreatment dc:creator ?augmentingTreatmentCreator .\n    OPTIONAL { ?augmentingTreatment treat:publishedIn ?augmentingPubl .\n      ?augmentingPubl dc:date ?augmentingDate . }} \n  OPTIONAL { ?definingTreatment treat:definesTaxonConcept ?tc .\n    ?definingTreatment dc:creator ?definingTreatmentCreator .\n    OPTIONAL { ?definingTreatment treat:publishedIn ?definingPubl .\n      ?definingPubl dc:date ?definingDate . }} \n}";return this._sparqlEndpoint.getSparqlRDF(e).then((function(t){var e=x()(T.a.sym("http://filteredpush.org/ontologies/oa/dwcFP#TaxonConcept"),t);return e.in(T.a.sym("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"))}))}},{key:"getImages",value:function(t){var e="PREFIX treat: <http://plazi.org/vocab/treatment#>\nPREFIX dwc: <http://rs.tdwg.org/dwc/terms/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX fabio: <http://purl.org/spar/fabio/>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nSELECT ?url ?description WHERE {   \n  ?treatment (treat:augmentsTaxonConcept|treat:definesTaxonConcept) <"+t+"> .\n  ?treatment <http://purl.org/spar/cito/cites> ?cites.\n  ?cites rdf:type fabio:Figure. \n  ?cites fabio:hasRepresentation ?url.\n  ?cites dc:description ?description.  \n} ";return this._sparqlEndpoint.getSparqlResultSet(e).then((function(t){return t.results.bindings.map((function(t){var e={};return e.url=t.url.value,e.description=t.description.value,e}))}))}},{key:"getTaxonConcepts",value:function(t,e){var n='PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>\nPREFIX treat: <http://plazi.org/vocab/treatment#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nCONSTRUCT {\n  ?tc dwc:rank ?rank .\n  ?tc dwc:phylum ?phylum .\n  ?tc dwc:kingdom ?kingdom .\n  ?tc dwc:class ?class .\n  ?tc dwc:family ?family .\n  ?tc dwc:order ?oder .\n  ?tc dwc:genus "'+t+'" .\n  ?tc dwc:species "'+e+'" .\n  ?tc a <http://filteredpush.org/ontologies/oa/dwcFP#TaxonConcept> .\n  ?tc treat:hasTaxonName ?tn .\n  ?augmentingTreatment treat:augmentsTaxonConcept ?tc .\n  ?augmentingTreatment dc:creator ?augmentingTreatmentCreator .\n  ?augmentingTreatment dc:date ?augmentingDate . \n  ?definingTreatment treat:definesTaxonConcept ?tc .\n  ?definingTreatment dc:creator ?definingTreatmentCreator .\n  ?definingTreatment dc:date ?definingDate . \n} WHERE { \n  ?tc dwc:rank ?rank .\n  ?tc dwc:phylum ?phylum .\n  ?tc dwc:kingdom ?kingdom .\n  ?tc dwc:class ?class .\n  ?tc dwc:family ?family .\n  ?tc dwc:order ?oder .\n  ?tc dwc:genus "'+t+'" .\n  ?tc dwc:species "'+e+'" .\n  ?tc a <http://filteredpush.org/ontologies/oa/dwcFP#TaxonConcept> . \n  OPTIONAL { ?tc treat:hasTaxonName ?tn . }\n  OPTIONAL { ?augmentingTreatment treat:augmentsTaxonConcept ?tc .\n    ?augmentingTreatment dc:creator ?augmentingTreatmentCreator .\n    OPTIONAL { ?augmentingTreatment treat:publishedIn ?augmentingPubl .\n      ?augmentingPubl dc:date ?augmentingDate . }} \n  OPTIONAL { ?definingTreatment treat:definesTaxonConcept ?tc .\n    ?definingTreatment dc:creator ?definingTreatmentCreator .\n    OPTIONAL { ?definingTreatment treat:publishedIn ?definingPubl .\n      ?definingPubl dc:date ?definingDate . }} \n}';return this._sparqlEndpoint.getSparqlRDF(n).then((function(t){var e=x()(T.a.sym("http://filteredpush.org/ontologies/oa/dwcFP#TaxonConcept"),t);return e.in(T.a.sym("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"))}))}}]),t}()),C=(n("a15b"),n("baa5"),n("4d63"),n("25f0"),n("c964")),P=function(){function t(e,n){Object(s["a"])(this,t),this._element=n,this._taxaManager=e}return Object(g["a"])(t,[{key:"setTaxon",value:function(t,e){var n=this,a=this,r={};function i(t){return T.a.sym("http://rs.tdwg.org/dwc/terms/"+t)}function o(t){return T.a.sym("http://plazi.org/vocab/treatment#"+t)}function c(t){return T.a.sym("http://purl.org/dc/elements/1.1/"+t)}function s(){var t=document.getElementsByClassName("truncate");t.forEach((function(t){var e=t.textContent;if(e.length>80){t.innerHTML=e.slice(0,81)+'<span hidden aria-hidden="false">'+e.slice(81)+"</span>";var n=document.createElement("span");n.innerHTML="...",n.classList.add("expandbtn"),n.addEventListener("click",(function(n){t.innerHTML=e,n.preventDefault()})),t.append(n)}}))}function u(t){var e=t.substring(t.lastIndexOf("/")+1),n=e.lastIndexOf("_");return e.substring(0,n).replace(new RegExp("_","g")," ")+", "+e.substring(n+1)}function d(t,e,n){t.each((function(t){return t})).then((function(t){return Promise.all(t.sort((function(t,e){var n=t.value.substring(t.value.length-4),a=e.value.substring(e.value.length-4);return n-a})).map(function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){var n,s,l,p,f,m,h,g,v,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=function(t){return t.each((function(t){return t})).then((function(t){return Promise.all(t.map(function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=' <a class="truncate" href="'+e.value+'">',t.next=3,e.out(c("creator")).each((function(t){return t.value}));case 3:return t.t1=t.sent.join("; "),t.t2=t.t0+t.t1,t.next=7,e.out(c("date")).each((function(t){return" "+t.value}));case 7:return t.t3=t.sent.join("/"),t.t4=t.t2+t.t3,t.abrupt("return",t.t4+"</a>");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(t){return t.join(" - ")}))}))},t.next=3,Promise.all(["kingdom","phylum","class","order","family","genus","species"].map(function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.out(i(n)).each((function(t){return t.value})).then((function(t){return t.join(", ")}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(t){return"<tr><td>"+t.join("</td><td>")+"</td></tr>"}));case 3:if(n=t.sent,l=e.in(o("preferedName")),!(l.nodes.length>0)){t.next=11;break}return t.next=8,s(l);case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0="";case 12:if(p=t.t0,f=e.in(o("definesTaxonConcept")),!(f.nodes.length>0)){t.next=21;break}return t.next=17,s(f);case 17:t.t2=t.sent,t.t1="Defined by: "+t.t2,t.next=22;break;case 21:t.t1="Defining treatment not yet on plazi";case 22:if(m=t.t1,h=e.in(o("augmentsTaxonConcept")),!(h.nodes.length>0)){t.next=31;break}return t.next=27,s(h);case 27:t.t4=t.sent,t.t3="Augmented by: "+t.t4,t.next=32;break;case 31:t.t3="";case 32:return g=t.t3,v=document.createElement("li"),v.innerHTML+="<strong>"+u(e.value)+"</strong>",v.innerHTML+=p,v.innerHTML+='<table class="nobold card"><tr><th>Kingdom</th><th>Phylum</th><th>Class</th><th>Order</th><th>Family</th><th>Genus</th><th>Species</th></tr>'+n+"</table>",v.innerHTML+="<br/>"+m+"<br/>"+g,r[e.value]||(b=document.createElement("div"),b.classList.add("deprecations"),b.innerHTML="looking for deprecations...",v.appendChild(b),r[e.value]=!0,a._taxaManager.getNewTaxa(e.value).then((function(t){d(t,"Deprecated by",b),t.each((function(t){a.relatedTaxonEncountered(t.out(i("genus")).value+" "+t.out(i("species")).value)}))}))),a.taxonRendered(e.value),t.abrupt("return",v);case 41:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))})).then((function(t){if(t.length>0){n.innerHTML="<h4>"+e+"</h4>";var a=document.createElement("ul");t.forEach((function(t){return a.appendChild(t)})),n.appendChild(a),s()}else n.innerHTML=""}))}this._taxaManager.getTaxonConcepts(t,e).then((function(a){0===a.nodes.length?n._element.innerHTML="No treatment for "+t+" "+e+" found on plazi.":(window.location.hash=t+"+"+e,d(a,t+" "+e,n._element))}))}},{key:"reset",value:function(){this._element.innerHTML=""}},{key:"relatedTaxonEncountered",value:function(t,e){}},{key:"taxonRendered",value:function(t){}}]),t}(),I=n("96b7"),L=Object(f["a"])(a=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(g["a"])(e,[{key:"onClick",value:function(){r.lookup()}},{key:"mounted",value:function(){var t=new URLSearchParams(window.location.search),e=new b.a(t.get("endpoint")||"https://treatment.ld.plazi.org/sparql"),n=new k(e),a=new P(n,document.getElementById("taxon-name")),i=new O(n,document.getElementById("image-area")),o=new _(document.getElementById("wikidata-area")),c=new E(document.getElementById("vernacular-area")),s=document.getElementById("combinedfield");r=new I["a"](s,e),r.action=function(t){o.reset(),c.reset(),i.reset(),a.reset();var e=t.substring(0,t.indexOf(" ")),n=t.substr(t.indexOf(" ")+1);a.relatedTaxonEncountered=function(t,e){o.addTaxon(t+" "+e),c.addTaxon(t+" "+e)},a.taxonRendered=function(t){i.appendImages(t)},a.setTaxon(e,n),o.addTaxon(e+" "+n),c.addTaxon(e+" "+n)},!s.value&&window.location.hash&&(s.value=window.location.hash.substring(1).replace("+"," "),r.lookup())}}]),e}(f["c"]))||a,j=L,R=n("2877"),N=Object(R["a"])(j,m,h,!1,null,"5506847b",null),M=N.exports,F=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(f["c"]);F=Object(p["a"])([Object(f["a"])({components:{Classic:M}})],F);var H=F,S=H,A=(n("5c0b"),Object(R["a"])(S,o,c,!1,null,null,null)),q=A.exports,D=n("8c4f");i["a"].use(D["a"]);var z=[{path:"/",name:"classic",component:M},{path:"/advanced",name:"advanced",component:function(){return n.e("about").then(n.bind(null,"fbe6"))}}],U=new D["a"]({mode:"history",routes:z}),X=U;i["a"].config.productionTip=!1,new i["a"]({router:X,render:function(t){return t(q)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.ab5edf36.png"}});
//# sourceMappingURL=app.469036c7.js.map