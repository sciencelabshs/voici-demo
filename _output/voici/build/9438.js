"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9438,3414],{93414:(e,t,a)=>{a.r(t),a.d(t,{MathJaxTypesetter:()=>o,default:()=>r});var n,i=a(50558),s=a(88252);!function(e){e.copy="mathjax:clipboard",e.scale="mathjax:scale"}(n||(n={}));class o{constructor(){this._initialized=!1}async _ensureInitialized(){this._initialized||(this._mathDocument=await c.ensureMathDocument(),this._initialized=!0)}async mathDocument(){return await this._ensureInitialized(),this._mathDocument}async typeset(e){try{await this._ensureInitialized()}catch(e){return void console.error(e)}this._mathDocument.options.elements=[e],this._mathDocument.clear().render(),delete this._mathDocument.options.elements}}const r={id:"@jupyterlab/mathjax-extension:plugin",description:"Provides the LaTeX mathematical expression interpreter.",provides:s.ILatexTypesetter,activate:e=>{const t=new o;return e.commands.addCommand(n.copy,{execute:async()=>{const e=(await t.mathDocument()).outputJax;await navigator.clipboard.writeText(e.math.math)},label:"MathJax Copy Latex"}),e.commands.addCommand(n.scale,{execute:async e=>{const a=await t.mathDocument(),n=e.scale||1;a.outputJax.options.scale=n,a.rerender()},label:e=>"Mathjax Scale "+(e.scale?`x${e.scale}`:"Reset")}),t},autoStart:!0};var c;!function(e){let t=null;e.ensureMathDocument=async function(){if(!t){t=new i.PromiseDelegate,Promise.all([a.e(990),a.e(5729),a.e(1683)]).then(a.t.bind(a,71683,23));const[{mathjax:e},{CHTML:n},{TeX:s},{TeXFont:o},{AllPackages:r},{SafeHandler:c},{HTMLHandler:l},{browserAdaptor:m},{AssistiveMmlHandler:h}]=await Promise.all([a.e(8911).then(a.bind(a,98911)),Promise.all([a.e(990),a.e(6046),a.e(2392),a.e(965)]).then(a.t.bind(a,70965,23)),Promise.all([a.e(990),a.e(5729),a.e(3985),a.e(2322)]).then(a.t.bind(a,2322,23)),Promise.all([a.e(2392),a.e(8440)]).then(a.t.bind(a,12392,23)),Promise.all([a.e(990),a.e(5729),a.e(3985),a.e(1962)]).then(a.bind(a,81962)),a.e(3682).then(a.t.bind(a,63682,23)),Promise.all([a.e(990),a.e(6046),a.e(9231),a.e(4421)]).then(a.t.bind(a,74421,23)),a.e(7168).then(a.bind(a,67168)),Promise.all([a.e(990),a.e(6046),a.e(9231),a.e(2916)]).then(a.t.bind(a,22916,23))]);e.handlers.register(h(c(new l(m()))));class d extends o{}d.defaultFonts={};const u=new n({font:new d}),p=new s({packages:r.concat("require"),inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]],processEscapes:!0,processEnvironments:!0}),x=e.document(window.document,{InputJax:p,OutputJax:u});t.resolve(x)}return t.promise}}(c||(c={}))}}]);