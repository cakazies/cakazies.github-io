/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.2 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/tbaltrushaitis/cv
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t,i,n,o=[],r=document,f=window,l=r.documentElement;function checkInView(){if(o.length){var n=0,a=e.map(o,function(e){var t=e.data.selector,i=e.$element;return t?i.find(t):i});for(t=t||function getViewportSize(){var t,i,n={height:f.innerHeight,width:f.innerWidth};return n.height||!(t=r.compatMode)&&e.support.boxModel||(n={height:(i="CSS1Compat"===t?l:r.body).clientHeight,width:i.clientWidth}),n}(),i=i||function getViewportOffset(){return{top:f.pageYOffset||l.scrollTop||r.body.scrollTop,left:f.pageXOffset||l.scrollLeft||r.body.scrollLeft}}();n<o.length;n++)if(e.contains(l,a[n][0])){var h=e(a[n]),c={height:h[0].offsetHeight,width:h[0].offsetWidth},d=h.offset(),u=h.data("inview");if(!i||!t)return;d.top+c.height>i.top&&d.top<i.top+t.height&&d.left+c.width>i.left&&d.left<i.left+t.width?u||h.data("inview",!0).trigger("inview",[!0]):u&&h.data("inview",!1).trigger("inview",[!1])}}}e.event.special.inview={add:function(t){o.push({data:t,$element:e(this),element:this}),!n&&o.length&&(n=setInterval(checkInView,250))},remove:function(e){for(var t=0;t<o.length;t++){var i=o[t];if(i.element===this&&i.data.guid===e.guid){o.splice(t,1);break}}o.length||(clearInterval(n),n=null)}},e(f).bind("scroll resize scrollstop",function(){t=i=null}),!l.addEventListener&&l.attachEvent&&l.attachEvent("onfocusin",function(){i=null})});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.2
 * Build:    production-b76
 * Compiled: 2019-05-05T11:53:12 UTC
 * Commit:   854391a90d7eb3a4d553e2c6f7868d6612a13f7c
 */