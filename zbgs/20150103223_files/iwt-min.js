/*publish date:2015-01-26 16:42:42*/
(function(O,B){function G(b){var a;while(a=b.shift()){a()}}function z(){C.loading=1;var b,a="";try{b=O.navigator.plugins["Shockwave Flash"]||O.ActiveXObject,a=b.description||(new b("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(e){}a=(a.match(/\d+/g)||[0])[0];if(a<10){C._available=0,G(D);return}C._available=1,O[K]=function(){var c=arguments;setTimeout(function(){T.apply(O,c)},0)};var d=setInterval(function(){B.body&&(clearInterval(d),N(),setTimeout(function(){C.inited||(C._available=0,H.length=0,G(D))},10000))},50)}function T(b,a){switch(b){case"onecall":if(!O[a]){return}O[a].apply(O,[].slice.call(arguments,2)),O[a]=null;break;case"error":C._available=C.inited=0,G(D);break;case"load":C._available=C.inited=1,D.length=0,G(H)}}function N(){var a=B.createElement("div");a.setAttribute("style","display:block;position:absolute;right:0;bottom:0;border:none;"),B.body.firstChild?B.body.insertBefore(a,B.body.firstChild):B.body.appendChild(a),a.innerHTML='<object id="'+J()+'" data="'+C.SWF_URL+'" type="application/x-shockwave-flash" width="10" height="10" style="position:absolute;right:0;bottom:0;"><param name="movie" value="'+C.SWF_URL+'" /><param name="wmode" value="transparent" /><param name="version" value="10" /><param name="allowScriptAccess" value="always" /><param name="flashvars" value="jsproxyfunction='+K+'" /></object>',C.swf=a.firstChild}function J(){return"_"+(Math.random()*1000000000000000000).toString(36).slice(0,5).toUpperCase()}function Q(){}function L(c){var a=[],d,b;for(d in c){b=c[d],b&&a.push(d+"="+b)}return a.join("&")}function F(b,d){var c=J(),a;O[c]=function(){try{d.apply(O,arguments),a.parentNode.removeChild(a)}catch(e){}O[c]=null},b+="&jsonp="+c,a=P(b)}function P(b){var c=B.createElement("script"),a=B.getElementsByTagName("head")[0];return c.type="text/javascript",c.src=b,a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c),c}function R(e,h,f){var d={_iwt_id:f,_iwt_cid:M,_iwt_UA:e.UA},g,c;if(e.WITH_REF){try{g=O.top.document.referrer}catch(b){try{g=O.parent.document.referrer}catch(b){g=document.referrer}}d.ref=g}d=L(d);if(h&&(c=h.length)){while(c--){h[c]=encodeURIComponent(h[c])}d+="&p="+h}F(k.API_URL+d,function(a){C.set("_iwt_id",a),q()})}function q(){O.IWT_ID_READY_REQUEST_ONCE&&(P(O.IWT_ID_READY_REQUEST_ONCE),q=Q)}var H=[],D=[],K=J(),C={SWF_URL:"http://irs01.net/MTFlashStore.swf#",_available:1,_jpf:K,get:function(b,a){return C._sendFlashMsg(a,"jGetItem",b)},set:function(b,a,c){return C._sendFlashMsg(c,"jSetItem",b,a)},_sendFlashMsg:function(e,h,f,d){e=e||Q;var g=J(),c=arguments.length,b=C.swf;O[g]=e,c==2?b[h](g):c==3?b[h](f,g):b[h](f,d,g)},initSWF:function(b,a){if(!C._available){return a&&a()}if(C.inited){return b&&setTimeout(b,0)}b&&H.push(b),a&&D.push(a),C.loading||z()}},x="_iwt_cid=",I=location.search.indexOf(x),M=I>-1?location.search.slice(I+x.length).split("&",1)[0]:"",k={FC:C,API_URL:"http://irs01.com/irt?",track:function(b,a){b.NO_FLS?R(b,a):C.initSWF(function(){C.get("_iwt_id",function(c){R(b,a,c)})},function(){R(b,a)})}};O._iwt=k;if(O._iwtTQ){var A=O._iwtTQ,j;while(j=A.shift()){k.track(j[0],j[1])}}})(this,document);