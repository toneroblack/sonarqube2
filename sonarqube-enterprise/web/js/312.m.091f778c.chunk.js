(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{1881:function(e,t,n){"use strict";n.r(t),n.d(t,"Security",(function(){return d}));var r=n(2),o=n(336),a=n(325),s=n(31),i=n(865),l=n(327),c=n(460),u=n(985);function m({login:e}){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(s.translate)("users.tokens")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("div",{className:"big-spacer-bottom big-spacer-right markdown"},r.createElement(c.a,{message:Object(s.translate)("my_account.tokens_description")})),r.createElement(u.a,{deleteConfirmation:"modal",login:e})))}function d({user:e}){return r.createElement("div",{className:"account-body account-container"},r.createElement(o.a,{defer:!1,title:Object(s.translate)("my_account.security")}),r.createElement(m,{login:e.login}),e.local&&r.createElement("section",{className:"boxed-group"},r.createElement("h2",{className:"spacer-bottom"},Object(s.translate)("my_profile.password.title")),r.createElement(i.a,{className:"boxed-group-inner",user:e})))}t.default=Object(a.b)(e=>({user:Object(l.getCurrentUser)(e)}))(d)},332:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=n(331),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,o=(e.onSubmit,s(e,["children","header","onClose","onSubmit"]));return i.createElement(l.default,a({contentLabel:n,onRequestClose:r},o),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(i.Component);t.default=c},340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(311),o=n(2),a=n(31);t.default=function(e){var t=e.className;return o.createElement("em",{"aria-label":a.translate("field_required"),className:r("mandatory little-spacer-left",t)},"*")}},346:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(311),o=n(2),a=n(316),s=n(31);t.default=function(e){var t=e.className;return o.createElement("div",{"aria-hidden":!0,className:r("text-muted",t)},o.createElement(a.FormattedMessage,{id:"fields_marked_with_x_required",defaultMessage:s.translate("fields_marked_with_x_required"),values:{star:o.createElement("em",{className:"mandatory"},"*")}}))}},358:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),i=n(31),l=n(319),c=n(312),u=n(441),m=n(332),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.handleSubmit=function(){var e=t.props.onConfirm(t.props.confirmData);return e?e.then(t.props.onClose,(function(){})):void t.props.onClose()},t.renderModalContent=function(e){var n=e.onCloseClick,r=e.onFormSubmit,o=e.submitting,a=t.props,m=a.children,d=a.confirmButtonText,p=a.confirmDisable,h=a.header,f=a.headerDescription,b=a.isDestructive,g=a.cancelButtonText,v=void 0===g?i.translate("cancel"):g;return s.createElement(u.default,null,s.createElement("form",{onSubmit:r},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,h),f),s.createElement("div",{className:"modal-body"},m),s.createElement("footer",{className:"modal-foot"},s.createElement(l.default,{className:"spacer-right",loading:o}),s.createElement(c.SubmitButton,{autoFocus:!0,className:b?"button-red":void 0,disabled:o||p},d),s.createElement(c.ResetButtonLink,{disabled:o,onClick:n},v))))},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return s.createElement(m.default,a({onSubmit:this.handleSubmit},t),this.renderModalContent)},t}(s.PureComponent);t.default=d},363:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(316),s=n(26);t.formatterOption={year:"numeric",month:"short",day:"2-digit"},t.longFormatterOption={year:"numeric",month:"long",day:"numeric"},t.default=function(e){var n=e.children,i=e.date,l=e.long;return o.createElement(a.FormattedDate,r({value:s.parseDate(i)},l?t.longFormatterOption:t.formatterOption),n)}},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(453),o=n(2),a=n(316),s=n(26),i=n(31),l=n(366);t.default=function(e){var t=e.children,n=void 0===t?function(e){return e}:t,c=e.date,u=e.hourPrecision,m=n;if(!c)return o.createElement(o.Fragment,null,n(i.translate("never")));c&&u&&r.differenceInHours(Date.now(),c)<1&&(m=function(){return n(i.translate("less_than_1_hour_ago"))});var d=s.parseDate(c);return o.createElement(l.default,{date:d},(function(e){return o.createElement("span",{title:e},o.createElement(a.FormattedRelative,{value:d},m))}))}},396:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=n(358),c=n(397),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderConfirmModal=function(e){var n=e.onClose,r=t.props,o=(r.children,r.modalBody),c=r.modalHeader,u=r.modalHeaderDescription,m=s(r,["children","modalBody","modalHeader","modalHeaderDescription"]);return i.createElement(l.default,a({header:c,headerDescription:u,onClose:n},m),o)},t}return o(t,e),t.prototype.render=function(){return i.createElement(c.default,{modal:this.renderConfirmModal},this.props.children)},t}(i.PureComponent);t.default=u},397:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={modal:!1},t.handleButtonClick=function(){t.setState({modal:!0})},t.handleFormSubmit=function(e){e&&e.preventDefault(),t.setState({modal:!0})},t.handleCloseModal=function(){t.mounted&&t.setState({modal:!1})},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return a.createElement(a.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},t}(a.PureComponent);t.default=s},603:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(9),o=n(324);function a(e){return Object(r.getJSON)("/api/user_tokens/search",{login:e}).then(e=>e.userTokens,o.a)}function s(e){return Object(r.postJSON)("/api/user_tokens/generate",e).catch(o.a)}function i(e){return Object(r.post)("/api/user_tokens/revoke",e).catch(o.a)}},865:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(2),o=n(312),a=n(322),s=n(340),i=n.n(s),l=n(346),c=n.n(l),u=n(31),m=n(449);class d extends r.Component{constructor(){super(...arguments),this.oldPassword=null,this.password=null,this.passwordConfirmation=null,this.state={success:!1},this.handleSuccessfulChange=()=>{this.oldPassword&&this.password&&this.passwordConfirmation&&(this.oldPassword.value="",this.password.value="",this.passwordConfirmation.value="",this.setState({success:!0,errors:void 0}),this.props.onPasswordChange&&this.props.onPasswordChange())},this.setErrors=e=>{this.setState({success:!1,errors:e})},this.handleChangePassword=e=>{if(e.preventDefault(),!this.oldPassword||!this.password||!this.passwordConfirmation)return;const{user:t}=this.props,n=this.oldPassword.value,r=this.password.value;r!==this.passwordConfirmation.value?(this.password.focus(),this.setErrors([Object(u.translate)("user.password_doesnt_match_confirmation")])):Object(m.a)({login:t.login,password:r,previousPassword:n}).then(this.handleSuccessfulChange,()=>{})}}render(){const{className:e}=this.props,{success:t,errors:n}=this.state;return r.createElement("form",{className:e,onSubmit:this.handleChangePassword},t&&r.createElement(a.Alert,{variant:"success"},Object(u.translate)("my_profile.password.changed")),n&&n.map((e,t)=>r.createElement(a.Alert,{key:t,variant:"error"},e)),r.createElement(c.a,{className:"form-field"}),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"old_password"},Object(u.translate)("my_profile.password.old"),r.createElement(i.a,null)),r.createElement("input",{autoComplete:"off",id:"old_password",name:"old_password",ref:e=>this.oldPassword=e,required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"password"},Object(u.translate)("my_profile.password.new"),r.createElement(i.a,null)),r.createElement("input",{autoComplete:"off",id:"password",name:"password",ref:e=>this.password=e,required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"password_confirmation"},Object(u.translate)("my_profile.password.confirm"),r.createElement(i.a,null)),r.createElement("input",{autoComplete:"off",id:"password_confirmation",name:"password_confirmation",ref:e=>this.passwordConfirmation=e,required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement(o.SubmitButton,{id:"change-password"},Object(u.translate)("update_verb"))))}}},985:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(2),o=n(312),a=n(319),s=n.n(a),i=n(31),l=n(603),c=n(316),u=n(396),m=n.n(u),d=n(318),p=n.n(d),h=n(363),f=n.n(h),b=n(367),g=n.n(b),v=n(404);class _ extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,showConfirmation:!1},this.handleClick=()=>{this.state.showConfirmation?this.handleRevoke().then(()=>{this.mounted&&this.setState({showConfirmation:!1})}):this.setState({showConfirmation:!0})},this.handleRevoke=()=>(this.setState({loading:!0}),Object(l.c)({login:this.props.login,name:this.props.token.name}).then(()=>this.props.onRevokeToken(this.props.token),()=>{this.mounted&&this.setState({loading:!1})}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{deleteConfirmation:e,token:t}=this.props,{loading:n,showConfirmation:a}=this.state;return r.createElement("tr",null,r.createElement("td",null,r.createElement(p.a,{overlay:t.name},r.createElement("span",null,Object(v.limitComponentName)(t.name,20)))),r.createElement("td",{className:"nowrap"},r.createElement(g.a,{date:t.lastConnectionDate,hourPrecision:!0})),r.createElement("td",{className:"thin nowrap text-right"},r.createElement(f.a,{date:t.createdAt,long:!0})),r.createElement("td",{className:"thin nowrap text-right"},r.createElement(s.a,{loading:n},r.createElement("i",{className:"deferred-spinner-placeholder"})),"modal"===e?r.createElement(m.a,{confirmButtonText:Object(i.translate)("users.tokens.revoke_token"),isDestructive:!0,modalBody:r.createElement(c.FormattedMessage,{defaultMessage:Object(i.translate)("users.tokens.sure_X"),id:"users.tokens.sure_X",values:{token:r.createElement("strong",null,t.name)}}),modalHeader:Object(i.translate)("users.tokens.revoke_token"),onConfirm:this.handleRevoke},({onClick:e})=>r.createElement(o.Button,{className:"spacer-left button-red input-small",disabled:n,onClick:e,title:Object(i.translate)("users.tokens.revoke_token")},Object(i.translate)("users.tokens.revoke"))):r.createElement(o.Button,{className:"button-red input-small spacer-left",disabled:n,onClick:this.handleClick},a?Object(i.translate)("users.tokens.sure"):Object(i.translate)("users.tokens.revoke"))))}}var y=n(354),k=n(322);function E({token:e}){return r.createElement("div",{className:"panel panel-white big-spacer-top"},r.createElement(k.Alert,{variant:"warning"},Object(i.translateWithParameters)("users.tokens.new_token_created",e.name)),r.createElement(y.ClipboardButton,{copyValue:e.token}),r.createElement("code",{className:"big-spacer-left text-success"},e.token))}class O extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={generating:!1,loading:!0,newTokenName:"",tokens:[]},this.fetchTokens=()=>{this.setState({loading:!0}),Object(l.b)(this.props.login).then(e=>{this.mounted&&this.setState({loading:!1,tokens:e})},()=>{this.mounted&&this.setState({loading:!1})})},this.updateTokensCount=()=>{this.props.updateTokensCount&&this.props.updateTokensCount(this.props.login,this.state.tokens.length)},this.handleGenerateToken=e=>{e.preventDefault(),this.state.newTokenName.length>0&&(this.setState({generating:!0}),Object(l.a)({name:this.state.newTokenName,login:this.props.login}).then(e=>{this.mounted&&this.setState(t=>{const n=[...t.tokens,{name:e.name,createdAt:e.createdAt}];return{generating:!1,newToken:e,newTokenName:"",tokens:n}},this.updateTokensCount)},()=>{this.mounted&&this.setState({generating:!1})}))},this.handleRevokeToken=e=>{this.setState(t=>({tokens:t.tokens.filter(t=>t.name!==e.name)}),this.updateTokensCount)},this.handleNewTokenChange=e=>this.setState({newTokenName:e.currentTarget.value})}componentDidMount(){this.mounted=!0,this.fetchTokens()}componentWillUnmount(){this.mounted=!1}renderItems(){const{tokens:e}=this.state;return e.length<=0?r.createElement("tr",null,r.createElement("td",{className:"note",colSpan:3},Object(i.translate)("users.no_tokens"))):e.map(e=>r.createElement(_,{deleteConfirmation:this.props.deleteConfirmation,key:e.name,login:this.props.login,onRevokeToken:this.handleRevokeToken,token:e}))}render(){const{generating:e,loading:t,newToken:n,newTokenName:a,tokens:l}=this.state,c=r.createElement("tr",null,r.createElement("td",null,r.createElement("i",{className:"spinner"})));return r.createElement(r.Fragment,null,r.createElement("h3",{className:"spacer-bottom"},Object(i.translate)("users.generate_tokens")),r.createElement("form",{autoComplete:"off",className:"display-flex-center",id:"generate-token-form",onSubmit:this.handleGenerateToken},r.createElement("input",{className:"input-large spacer-right",maxLength:100,onChange:this.handleNewTokenChange,placeholder:Object(i.translate)("users.enter_token_name"),required:!0,type:"text",value:a}),r.createElement(o.SubmitButton,{className:"js-generate-token",disabled:e||a.length<=0},Object(i.translate)("users.generate"))),n&&r.createElement(E,{token:n}),r.createElement("table",{className:"data zebra big-spacer-top"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,Object(i.translate)("name")),r.createElement("th",null,Object(i.translate)("my_account.tokens_last_usage")),r.createElement("th",{className:"text-right"},Object(i.translate)("created")),r.createElement("th",null))),r.createElement("tbody",null,r.createElement(s.a,{customSpinner:c,loading:t&&l.length<=0},this.renderItems()))))}}}}]);
//# sourceMappingURL=312.m.091f778c.chunk.js.map