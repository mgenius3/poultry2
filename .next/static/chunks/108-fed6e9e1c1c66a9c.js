(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[108],{993:function(){},7568:function(e,t,r){"use strict";function s(e,t,r,s,a,i,n){try{var o=e[i](n),u=o.value}catch(l){return void r(l)}o.done?t(u):Promise.resolve(u).then(s,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var n=e.apply(t,r);function o(e){s(n,a,i,o,u,"next",e)}function u(e){s(n,a,i,o,u,"throw",e)}o(void 0)}))}}r.d(t,{Z:function(){return a}})},7536:function(e,t,r){"use strict";r.d(t,{cI:function(){return Ae}});var s=r(7294),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,n=e=>null==e;const o=e=>"object"===typeof e;var u=e=>!n(e)&&!Array.isArray(e)&&o(e)&&!i(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),f=e=>Array.isArray(e)?e.filter(Boolean):[],d=e=>void 0===e,y=(e,t,r)=>{if(!t||!u(e))return r;const s=f(t.split(/[,[\].]+?/)).reduce(((e,t)=>n(e)?e:e[t]),e);return d(s)||s===e?d(e[t])?r:e[t]:s};const m="blur",h="focusout",v="onBlur",g="onChange",p="onSubmit",b="onTouched",_="all",V="max",A="min",w="maxLength",F="minLength",x="pattern",S="required",k="validate";s.createContext(null);var D=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==_&&(t._proxyFormState[a]=!s||_),r&&(r[a]=!0),e[a]}});return a},O=e=>u(e)&&!Object.keys(e).length,E=(e,t,r,s)=>{r(e);const{name:a,...i}=e;return O(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find((e=>t[e]===(!s||_)))},C=e=>Array.isArray(e)?e:[e];function T(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var L=e=>"string"===typeof e,N=(e,t,r,s,a)=>L(e)?(s&&t.watch.add(e),y(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),y(r,e)))):(s&&(t.watchAll=!0),r),j="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function U(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(j&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},Array.isArray(e)||(e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")})(e))for(const r in e)t[r]=U(e[r]);else t=e}return t}var B=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},M=e=>/^\w*$/.test(e),q=e=>f(e.replace(/["|']|\]/g,"").split(/\.|\[/));function P(e,t,r){let s=-1;const a=M(t)?[t]:q(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}const I=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=y(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else u(s)&&I(s,t)}}};var $=e=>({isOnSubmit:!e||e===p,isOnBlur:e===v,isOnChange:e===g,isOnAll:e===_,isOnTouch:e===b}),H=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),R=(e,t,r)=>{const s=f(y(e,r));return P(s,"root",t[r]),P(e,r,s),e},W=e=>"boolean"===typeof e,Z=e=>"file"===e.type,z=e=>"function"===typeof e,G=e=>{if(!j)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},J=e=>L(e),K=e=>"radio"===e.type,Q=e=>e instanceof RegExp;const X={value:!1,isValid:!1},Y={value:!0,isValid:!0};var ee=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!d(e[0].attributes.value)?d(e[0].value)||""===e[0].value?Y:{value:e[0].value,isValid:!0}:Y:X}return X};const te={isValid:!1,value:null};var re=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),te):te;function se(e,t,r="validate"){if(J(e)||Array.isArray(e)&&e.every(J)||W(e)&&!e)return{type:r,message:J(e)?e:"",ref:t}}var ae=e=>u(e)&&!Q(e)?e:{value:e,message:""},ie=async(e,t,r,s,i)=>{const{ref:o,refs:l,required:c,maxLength:f,minLength:m,min:h,max:v,pattern:g,validate:p,name:b,valueAsNumber:_,mount:D,disabled:E}=e._f,C=y(t,b);if(!D||E)return{};const T=l?l[0]:o,N=e=>{s&&T.reportValidity&&(T.setCustomValidity(W(e)?"":e||""),T.reportValidity())},j={},U=K(o),M=a(o),q=U||M,P=(_||Z(o))&&d(o.value)&&d(C)||G(o)&&""===o.value||""===C||Array.isArray(C)&&!C.length,I=B.bind(null,b,r,j),$=(e,t,r,s=w,a=F)=>{const i=e?t:r;j[b]={type:e?s:a,message:i,ref:o,...I(e?s:a,i)}};if(i?!Array.isArray(C)||!C.length:c&&(!q&&(P||n(C))||W(C)&&!C||M&&!ee(l).isValid||U&&!re(l).isValid)){const{value:e,message:t}=J(c)?{value:!!c,message:c}:ae(c);if(e&&(j[b]={type:S,message:t,ref:T,...I(S,t)},!r))return N(t),j}if(!P&&(!n(h)||!n(v))){let e,t;const s=ae(v),a=ae(h);if(n(C)||isNaN(C)){const r=o.valueAsDate||new Date(C),i=e=>new Date((new Date).toDateString()+" "+e),n="time"==o.type,u="week"==o.type;L(s.value)&&C&&(e=n?i(C)>i(s.value):u?C>s.value:r>new Date(s.value)),L(a.value)&&C&&(t=n?i(C)<i(a.value):u?C<a.value:r<new Date(a.value))}else{const r=o.valueAsNumber||(C?+C:C);n(s.value)||(e=r>s.value),n(a.value)||(t=r<a.value)}if((e||t)&&($(!!e,s.message,a.message,V,A),!r))return N(j[b].message),j}if((f||m)&&!P&&(L(C)||i&&Array.isArray(C))){const e=ae(f),t=ae(m),s=!n(e.value)&&C.length>e.value,a=!n(t.value)&&C.length<t.value;if((s||a)&&($(s,e.message,t.message),!r))return N(j[b].message),j}if(g&&!P&&L(C)){const{value:e,message:t}=ae(g);if(Q(e)&&!C.match(e)&&(j[b]={type:x,message:t,ref:o,...I(x,t)},!r))return N(t),j}if(p)if(z(p)){const e=se(await p(C,t),T);if(e&&(j[b]={...e,...I(k,e.message)},!r))return N(e.message),j}else if(u(p)){let e={};for(const s in p){if(!O(e)&&!r)break;const a=se(await p[s](C,t),T,s);a&&(e={...a,...I(s,a.message)},N(a.message),r&&(j[b]=e))}if(!O(e)&&(j[b]={ref:T,...e},!r))return j}return N(!0),j};function ne(e,t){const r=Array.isArray(t)?t:M(t)?[t]:q(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=d(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(u(s)&&O(s)||Array.isArray(s)&&function(e){for(const t in e)if(!d(e[t]))return!1;return!0}(s))&&ne(e,r.slice(0,-1)),e}function oe(){let e=[];return{get observers(){return e},next:t=>{let r=0;const s=e.length;for(;r<s;)e[r].next(t),++r},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var ue=e=>n(e)||!o(e);function le(e,t){if(ue(e)||ue(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!le(r,e):r!==e)return!1}}return!0}var ce=e=>"select-multiple"===e.type,fe=e=>G(e)&&e.isConnected,de=e=>{for(const t in e)if(z(e[t]))return!0;return!1};function ye(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!de(e[s])?(t[s]=Array.isArray(e[s])?[]:{},ye(e[s],t[s])):n(e[s])||(t[s]=!0);return t}function me(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!de(e[a])?d(t)||ue(r[a])?r[a]=Array.isArray(e[a])?ye(e[a],[]):{...ye(e[a])}:me(e[a],n(t)?{}:t[a],r[a]):le(e[a],t[a])?delete r[a]:r[a]=!0;return r}var he=(e,t)=>me(e,t,ye(t)),ve=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>d(e)?e:t?""===e?NaN:e?+e:e:r&&L(e)?new Date(e):s?s(e):e;function ge(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return Z(t)?t.files:K(t)?re(e.refs).value:ce(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?ee(e.refs).value:ve(d(t.value)?e.ref.value:t.value,e)}var pe=e=>d(e)?e:Q(e)?e.source:u(e)?Q(e.value)?e.value.source:e.value:e;function be(e,t,r){const s=y(e,r);if(s||M(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=y(t,s),n=y(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}const _e={mode:p,reValidateMode:g,shouldFocusError:!0};function Ve(e={},t){let r,s={..._e,...e},o={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},v={},g=(u(s.defaultValues)||u(s.values))&&U(s.defaultValues||s.values)||{},p=s.shouldUnregister?{}:U(g),b={action:!1,mount:!1,watch:!1},V={mount:new Set,unMount:new Set,array:new Set,watch:new Set},A=0;const w=e.resetOptions&&e.resetOptions.keepDirtyValues,F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={watch:oe(),array:oe(),state:oe()},S=$(s.mode),k=$(s.reValidateMode),D=s.criteriaMode===_,E=async e=>{if(F.isValid||e){const e=s.resolver?O((await J()).errors):await Q(v,!0);e!==o.isValid&&x.state.next({isValid:e})}},T=e=>F.isValidating&&x.state.next({isValidating:e}),B=(e,t,r,s)=>{const a=y(v,e);if(a){const i=y(p,e,d(r)?y(g,e):r);d(i)||s&&s.defaultChecked||t?P(p,e,t?i:ge(a._f)):ee(e,i),b.mount&&E()}},M=(e,t,r,s,a)=>{let i=!1,n=!1;const u={name:e};if(!r||s){F.isDirty&&(n=o.isDirty,o.isDirty=u.isDirty=X(),i=n!==u.isDirty);const r=le(y(g,e),t);n=y(o.dirtyFields,e),r?ne(o.dirtyFields,e):P(o.dirtyFields,e,!0),u.dirtyFields=o.dirtyFields,i=i||F.dirtyFields&&n!==!r}if(r){const t=y(o.touchedFields,e);t||(P(o.touchedFields,e,r),u.touchedFields=o.touchedFields,i=i||F.touchedFields&&t!==r)}return i&&a&&x.state.next(u),i?u:{}},q=(t,s,a,i)=>{const n=y(o.errors,t),u=F.isValid&&W(s)&&o.isValid!==s;var l;if(e.delayError&&a?(l=()=>((e,t)=>{P(o.errors,e,t),x.state.next({errors:o.errors})})(t,a),r=e=>{clearTimeout(A),A=setTimeout(l,e)},r(e.delayError)):(clearTimeout(A),r=null,a?P(o.errors,t,a):ne(o.errors,t)),(a?!le(n,a):n)||!O(i)||u){const e={...i,...u&&W(s)?{isValid:s}:{},errors:o.errors,name:t};o={...o,...e},x.state.next(e)}T(!1)},J=async e=>await s.resolver(p,s.context,((e,t,r,s)=>{const a={};for(const i of e){const e=y(t,i);e&&P(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||V.mount,v,s.criteriaMode,s.shouldUseNativeValidation)),Q=async(e,t,r={valid:!0})=>{for(const a in e){const i=e[a];if(i){const{_f:e,...a}=i;if(e){const a=V.array.has(e.name),n=await ie(i,p,D,s.shouldUseNativeValidation,a);if(n[e.name]&&(r.valid=!1,t))break;!t&&(y(n,e.name)?a?R(o.errors,n,e.name):P(o.errors,e.name,n[e.name]):ne(o.errors,e.name))}a&&await Q(a,t,r)}}return r.valid},X=(e,t)=>(e&&t&&P(p,e,t),!le(de(),g)),Y=(e,t,r)=>N(e,V,{...b.mount?p:d(t)?g:L(e)?{[e]:t}:t},r,t),ee=(e,t,r={})=>{const s=y(v,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&P(p,e,ve(t,r)),i=G(r.ref)&&n(t)?"":t,ce(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):Z(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||x.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&M(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ae(e)},te=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,o=y(v,n);!V.array.has(e)&&ue(a)&&(!o||o._f)||i(a)?ee(n,a,r):te(n,a,r)}},re=(e,r,s={})=>{const a=y(v,e),i=V.array.has(e),o=U(r);P(p,e,o),i?(x.array.next({name:e,values:p}),(F.isDirty||F.dirtyFields)&&s.shouldDirty&&x.state.next({name:e,dirtyFields:he(g,p),isDirty:X(e,o)})):!a||a._f||n(o)?ee(e,o,s):te(e,o,s),H(e,V)&&x.state.next({}),x.watch.next({name:e}),!b.mount&&t()},se=async e=>{const t=e.target;let a=t.name;const i=y(v,a);if(i){let u,c;const f=t.type?ge(i._f):l(e),d=e.type===m||e.type===h,g=!((n=i._f).mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate))&&!s.resolver&&!y(o.errors,a)&&!i._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(d,y(o.touchedFields,a),o.isSubmitted,k,S),b=H(a,V,d);P(p,a,f),d?(i._f.onBlur&&i._f.onBlur(e),r&&r(0)):i._f.onChange&&i._f.onChange(e);const _=M(a,f,d,!1),A=!O(_)||b;if(!d&&x.watch.next({name:a,type:e.type}),g)return F.isValid&&E(),A&&x.state.next({name:a,...b?{}:_});if(!d&&b&&x.state.next({}),T(!0),s.resolver){const{errors:e}=await J([a]),t=be(o.errors,v,a),r=be(e,v,t.name||a);u=r.error,a=r.name,c=O(e)}else u=(await ie(i,p,D,s.shouldUseNativeValidation))[a],u?c=!1:F.isValid&&(c=await Q(v,!0));i._f.deps&&ae(i._f.deps),q(a,c,u,_)}var n},ae=async(e,t={})=>{let r,a;const i=C(e);if(T(!0),s.resolver){const t=await(async e=>{const{errors:t}=await J();if(e)for(const r of e){const e=y(t,r);e?P(o.errors,r,e):ne(o.errors,r)}else o.errors=t;return t})(d(e)?e:i);r=O(t),a=e?!i.some((e=>y(t,e))):r}else e?(a=(await Promise.all(i.map((async e=>{const t=y(v,e);return await Q(t&&t._f?{[e]:t}:t)})))).every(Boolean),(a||o.isValid)&&E()):a=r=await Q(v);return x.state.next({...!L(e)||F.isValid&&r!==o.isValid?{}:{name:e},...s.resolver||!e?{isValid:r}:{},errors:o.errors,isValidating:!1}),t.shouldFocus&&!a&&I(v,(e=>e&&y(o.errors,e)),e?i:V.mount),a},de=e=>{const t={...g,...b.mount?p:{}};return d(e)?t:L(e)?y(t,e):e.map((e=>y(t,e)))},ye=(e,t)=>({invalid:!!y((t||o).errors,e),isDirty:!!y((t||o).dirtyFields,e),isTouched:!!y((t||o).touchedFields,e),error:y((t||o).errors,e)}),me=(e,t={})=>{for(const r of e?C(e):V.mount)V.mount.delete(r),V.array.delete(r),y(v,r)&&(t.keepValue||(ne(v,r),ne(p,r)),!t.keepError&&ne(o.errors,r),!t.keepDirty&&ne(o.dirtyFields,r),!t.keepTouched&&ne(o.touchedFields,r),!s.shouldUnregister&&!t.keepDefaultValue&&ne(g,r));x.watch.next({}),x.state.next({...o,...t.keepDirty?{isDirty:X()}:{}}),!t.keepIsValid&&E()},Ve=(e,t={})=>{let r=y(v,e);const i=W(t.disabled);return P(v,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),V.mount.add(e),r?i&&P(p,e,t.disabled?void 0:y(p,e,ge(r._f))):B(e,!0,t.value),{...i?{disabled:t.disabled}:{},...s.shouldUseNativeValidation?{required:!!t.required,min:pe(t.min),max:pe(t.max),minLength:pe(t.minLength),maxLength:pe(t.maxLength),pattern:pe(t.pattern)}:{},name:e,onChange:se,onBlur:se,ref:i=>{if(i){Ve(e,t),r=y(v,e);const s=d(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,n=(e=>K(e)||a(e))(s),o=r._f.refs||[];if(n?o.find((e=>e===s)):s===r._f.ref)return;P(v,e,{_f:{...r._f,...n?{refs:[...o.filter(fe),s,...Array.isArray(y(g,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),B(e,!1,void 0,s)}else r=y(v,e,{}),r._f&&(r._f.mount=!1),(s.shouldUnregister||t.shouldUnregister)&&(!c(V.array,e)||!b.action)&&V.unMount.add(e)}}},Ae=()=>s.shouldFocusError&&I(v,(e=>e&&y(o.errors,e)),V.mount),we=(r,s={})=>{const a=r||g,i=U(a),n=r&&!O(r)?i:g;if(s.keepDefaultValues||(g=a),!s.keepValues){if(s.keepDirtyValues||w)for(const e of V.mount)y(o.dirtyFields,e)?P(n,e,y(p,e)):re(e,y(n,e));else{if(j&&d(r))for(const e of V.mount){const t=y(v,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(G(e)){const t=e.closest("form");if(t){t.reset();break}}}}v={}}p=e.shouldUnregister?s.keepDefaultValues?U(g):{}:i,x.array.next({values:n}),x.watch.next({values:n})}V={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&t(),b.mount=!F.isValid||!!s.keepIsValid,b.watch=!!e.shouldUnregister,x.state.next({submitCount:s.keepSubmitCount?o.submitCount:0,isDirty:s.keepDirty?o.isDirty:!(!s.keepDefaultValues||le(r,g)),isSubmitted:!!s.keepIsSubmitted&&o.isSubmitted,dirtyFields:s.keepDirtyValues?o.dirtyFields:s.keepDefaultValues&&r?he(g,r):{},touchedFields:s.keepTouched?o.touchedFields:{},errors:s.keepErrors?o.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Fe=(e,t)=>we(z(e)?e(p):e,t);return z(s.defaultValues)&&s.defaultValues().then((e=>{Fe(e,s.resetOptions),x.state.next({isLoading:!1})})),{control:{register:Ve,unregister:me,getFieldState:ye,_executeSchema:J,_getWatch:Y,_getDirty:X,_updateValid:E,_removeUnmounted:()=>{for(const e of V.unMount){const t=y(v,e);t&&(t._f.refs?t._f.refs.every((e=>!fe(e))):!fe(t._f.ref))&&me(e)}V.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,i=!0)=>{if(s&&r){if(b.action=!0,i&&Array.isArray(y(v,e))){const t=r(y(v,e),s.argA,s.argB);a&&P(v,e,t)}if(i&&Array.isArray(y(o.errors,e))){const t=r(y(o.errors,e),s.argA,s.argB);a&&P(o.errors,e,t),((e,t)=>{!f(y(e,t)).length&&ne(e,t)})(o.errors,e)}if(F.touchedFields&&i&&Array.isArray(y(o.touchedFields,e))){const t=r(y(o.touchedFields,e),s.argA,s.argB);a&&P(o.touchedFields,e,t)}F.dirtyFields&&(o.dirtyFields=he(g,p)),x.state.next({name:e,isDirty:X(e,t),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else P(p,e,t)},_getFieldArray:t=>f(y(b.mount?p:g,t,e.shouldUnregister?y(g,t,[]):[])),_reset:we,_updateFormState:e=>{o={...o,...e}},_subjects:x,_proxyFormState:F,get _fields(){return v},get _formValues(){return p},get _stateFlags(){return b},set _stateFlags(e){b=e},get _defaultValues(){return g},get _names(){return V},set _names(e){V=e},get _formState(){return o},set _formState(e){o=e},get _options(){return s},set _options(e){s={...s,...e}}},trigger:ae,register:Ve,handleSubmit:(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let a=U(p);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:e,values:t}=await J();o.errors=e,a=t}else await Q(v);ne(o.errors,"root"),O(o.errors)?(x.state.next({errors:{}}),await e(a,r)):(t&&await t({...o.errors},r),Ae(),setTimeout(Ae)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(o.errors),submitCount:o.submitCount+1,errors:o.errors})},watch:(e,t)=>z(e)?x.watch.subscribe({next:r=>e(Y(void 0,t),r)}):Y(e,t,!0),setValue:re,getValues:de,reset:Fe,resetField:(e,t={})=>{y(v,e)&&(d(t.defaultValue)?re(e,y(g,e)):(re(e,t.defaultValue),P(g,e,t.defaultValue)),t.keepTouched||ne(o.touchedFields,e),t.keepDirty||(ne(o.dirtyFields,e),o.isDirty=t.defaultValue?X(e,y(g,e)):X()),t.keepError||(ne(o.errors,e),F.isValid&&E()),x.state.next({...o}))},clearErrors:e=>{e&&C(e).forEach((e=>ne(o.errors,e))),x.state.next({errors:e?o.errors:{}})},unregister:me,setError:(e,t,r)=>{const s=(y(v,e,{_f:{}})._f||{}).ref;P(o.errors,e,{...t,ref:s}),x.state.next({name:e,errors:o.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},setFocus:(e,t={})=>{const r=y(v,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ye}}function Ae(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:z(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Ve(e,(()=>a((e=>({...e}))))),formState:r});const i=t.current.control;return i._options=e,T({subject:i._subjects.state,next:e=>{E(e,i._proxyFormState,i._updateFormState,!0)&&a({...i._formState})}}),s.useEffect((()=>{i._stateFlags.mount||(i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()})),s.useEffect((()=>{e.values&&!le(e.values,i._defaultValues)&&i._reset(e.values,i._options.resetOptions)}),[e.values,i]),t.current.formState=D(r,i),t.current}}}]);