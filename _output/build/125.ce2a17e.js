"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[125,2363],{99308:(s,n,e)=>{e.r(n),e.d(n,{ISessions:()=>t,Sessions:()=>a});var i=e(20998);const t=new i.Token("@jupyterlite/session:ISessions");var o=e(85421),r=e(33625);class a{constructor(s){this._sessions=[],this._kernels=s.kernels}async get(s){const n=this._sessions.find((n=>n.id===s));if(!n)throw Error(`Session ${s} not found`);return n}async list(){return this._sessions}async patch(s){const{id:n,path:e,name:t,kernel:r}=s,a=this._sessions.findIndex((s=>s.id===n)),d=this._sessions[a];if(!d)throw Error(`Session ${n} not found`);const l={...d,path:null!=e?e:d.path,name:null!=t?t:d.name};if(r)if(r.id){const s=this._sessions.find((s=>{var n;return(null===(n=s.kernel)||void 0===n?void 0:n.id)===(null==r?void 0:r.id)}));s&&(l.kernel=s.kernel)}else if(r.name){const s=await this._kernels.startNew({id:i.UUID.uuid4(),name:r.name,location:o.PathExt.dirname(l.path)});s&&(l.kernel=s),this._handleKernelShutdown({kernelId:s.id,sessionId:d.id})}return this._sessions[a]=l,l}async startNew(s){var n,e,t,r;const{path:a,name:d}=s,l=this._sessions.find((s=>s.name===d));if(l)return l;const h=null!==(e=null===(n=s.kernel)||void 0===n?void 0:n.name)&&void 0!==e?e:"",u=null!==(t=s.id)&&void 0!==t?t:i.UUID.uuid4(),c=null!==(r=s.name)&&void 0!==r?r:s.path,_=o.PathExt.dirname(s.name)||o.PathExt.dirname(s.path),k=c.includes(":")?c.split(":")[0]:"",m=_.includes(k)?_:`${k}:${_}`,w=await this._kernels.startNew({id:u,name:h,location:m}),f={id:u,path:a,name:null!=d?d:a,type:"notebook",kernel:{id:w.id,name:w.name}};return this._sessions.push(f),this._handleKernelShutdown({kernelId:u,sessionId:f.id}),f}async shutdown(s){var n;const e=this._sessions.find((n=>n.id===s));if(!e)throw Error(`Session ${s} not found`);const i=null===(n=e.kernel)||void 0===n?void 0:n.id;i&&await this._kernels.shutdown(i),r.ArrayExt.removeFirstOf(this._sessions,e)}async _handleKernelShutdown({kernelId:s,sessionId:n}){const e=await this._kernels.get(s);e&&e.disposed.connect((()=>{this.shutdown(n)}))}}}}]);
//# sourceMappingURL=125.ce2a17e.js.map