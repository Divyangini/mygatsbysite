webpackJsonp([35783957827783],{102:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var s=a(24),l=i(s),r=a(42),n=i(r),d=a(41),u=i(d),c=a(76),f=i(c),p=a(75),h=i(p),y=a(2),g=i(y),m=a(6),b=i(m),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},E=void 0,L=[],j=function(e,t){o().observe(e),L.push([e,t])},O=null,z=function(){if(null!==O)return O;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return O=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},T=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",n=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+l+r+t+a+s+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+n+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},I=function(e){var t=e.style,a=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,h.default)({},i,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};I.propTypes={style:b.default.object,onLoad:b.default.func};var R=function(e){function t(a){(0,l.default)(this,t);var i=(0,n.default)(this,e.call(this,a)),o=!0,s=!0,r=!1,d=S(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,s=!1,r=!0),"undefined"==typeof window&&(o=!1,s=!1),i.state={isVisible:o,imgLoaded:s,IOSupported:r},i.handleRef=i.handleRef.bind(i),i}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,o=t.className,s=t.outerWrapperClassName,l=t.style,r=void 0===l?{}:l,n=t.imgStyle,d=void 0===n?{}:n,u=t.placeholderStyle,c=void 0===u?{}:u,f=t.sizes,p=t.resolutions,y=t.backgroundColor,m=t.Tag,b=void 0;b="boolean"==typeof y?"lightgray":y;var w=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d,c),S=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(f){var E=f;return E.srcWebp&&E.srcSetWebp&&z()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),g.default.createElement(m,{className:(s?s:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},g.default.createElement(m,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef},g.default.createElement(m,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&g.default.createElement(I,{alt:i,title:a,src:E.base64,style:w}),E.tracedSVG&&g.default.createElement(I,{alt:i,title:a,src:E.tracedSVG,style:w}),b&&g.default.createElement(m,{title:a,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(I,{alt:i,title:a,srcSet:E.srcSet,src:E.src,sizes:E.sizes,style:S,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,h.default)({alt:i,title:a},E))}})))}if(p){var L=p,j=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},r);return"inherit"===r.display&&delete j.display,L.srcWebp&&L.srcSetWebp&&z()&&(L.src=L.srcWebp,L.srcSet=L.srcSetWebp),g.default.createElement(m,{className:(s?s:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},g.default.createElement(m,{className:(o?o:"")+" gatsby-image-wrapper",style:j,ref:this.handleRef},L.base64&&g.default.createElement(I,{alt:i,title:a,src:L.base64,style:w}),L.tracedSVG&&g.default.createElement(I,{alt:i,title:a,src:L.tracedSVG,style:w}),b&&g.default.createElement(m,{title:a,style:{backgroundColor:b,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&g.default.createElement(I,{alt:i,title:a,width:L.width,height:L.height,srcSet:L.srcSet,src:L.src,style:S,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,h.default)({alt:i,title:a,width:L.width,height:L.height},L))}})))}return null},t}(g.default.Component);R.defaultProps={fadeIn:!0,alt:"",Tag:"div"},R.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=R},66:function(e,t,a){!function(t,a){e.exports=a()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,r=l&&l(Object);return function n(d,u,c){if("string"!=typeof u){if(r){var f=l(u);f&&f!==r&&n(d,f,c)}var p=i(u);o&&(p=p.concat(o(u)));for(var h=0;h<p.length;++h){var y=p[h];if(!(e[y]||t[y]||c&&c[y])){var g=s(u,y);try{a(d,y,g)}catch(e){}}}return d}return d}})},205:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=a(2),s=i(o),l=a(103),r=i(l),n=a(102),d=i(n),u=function(e){var t=e.data;return s.default.createElement("div",null,s.default.createElement("h1",null,"Hi people"),s.default.createElement("p",null,"Welcome to your new Gatsby site."),s.default.createElement("p",null,s.default.createElement("b",null,t.site.siteMetadata.title)),s.default.createElement("p",null,s.default.createElement("i",null,t.site.siteMetadata.desc)),s.default.createElement("p",null,"Now go build something great."),s.default.createElement(d.default,{sizes:t.background.sizes}),"hello",s.default.createElement(d.default,{sizes:t.background2.sizes}),s.default.createElement(r.default,{to:"/page-2/"},"Go to page 2"))};t.default=u;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-693d0fa5c530e140bee1.js.map