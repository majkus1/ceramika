"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{6385:function(t,e,r){r.d(e,{Z:function(){return Ft}});var n,s,i,a,o,l,c,u,p=r(7294),f=r(5317),h={},g=180/Math.PI,d=Math.PI/180,m=Math.atan2,y=/([A-Z])/g,v=/(left|right|width|margin|padding|x)/i,x=/[\s,\(]\S/,b={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},O=function(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},_=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},w=function(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)},P=function(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)},M=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},E=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},k=function(t,e,r){return t.style[e]=r},A=function(t,e,r){return t.style.setProperty(e,r)},F=function(t,e,r){return t._gsap[e]=r},C=function(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r},S=function(t,e,r,n,s){var i=t._gsap;i.scaleX=i.scaleY=r,i.renderTransform(s,i)},B=function(t,e,r,n,s){var i=t._gsap;i[e]=r,i.renderTransform(s,i)},Y="transform",T=Y+"Origin",X=function t(e,r){var n=this,s=this.target,i=s.style;if(e in h&&i){if(this.tfm=this.tfm||{},"transform"===e)return b.transform.split(",").forEach((function(e){return t.call(n,e,r)}));if(~(e=b[e]||e).indexOf(",")?e.split(",").forEach((function(t){return n.tfm[t]=Q(s,t)})):this.tfm[e]=s._gsap.x?s._gsap[e]:Q(s,e),this.props.indexOf(Y)>=0)return;s._gsap.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(T,r,"")),e=Y}(i||r)&&this.props.push(e,r,i[e])},z=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},L=function(){var t,e,r=this.props,n=this.target,s=n.style,i=n._gsap;for(t=0;t<r.length;t+=3)r[t+1]?n[r[t]]=r[t+2]:r[t+2]?s[r[t]]=r[t+2]:s.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(y,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)i[e]=this.tfm[e];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),(t=c())&&t.isStart||s[Y]||(z(s),i.uncache=1)}},N=function(t,e){var r={target:t,props:[],revert:L,save:X};return t._gsap||f.p8.core.getCache(t),e&&e.split(",").forEach((function(t){return r.save(t)})),r},W=function(t,e){var r=s.createElementNS?s.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):s.createElement(t);return r.style?r:s.createElement(t)},I=function t(e,r,n){var s=getComputedStyle(e);return s[r]||s.getPropertyValue(r.replace(y,"-$1").toLowerCase())||s.getPropertyValue(r)||!n&&t(e,V(r)||r,1)||""},D="O,Moz,ms,Ms,Webkit".split(","),V=function(t,e,r){var n=(e||o).style,s=5;if(t in n&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(D[s]+t in n););return s<0?null:(3===s?"ms":s>=0?D[s]:"")+t},R=function(){"undefined"!=typeof window&&window.document&&(n=window,s=n.document,i=s.documentElement,o=W("div")||{style:{}},W("div"),Y=V(Y),T=Y+"Origin",o.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",u=!!V("perspective"),c=f.p8.core.reverting,a=1)},j=function t(e){var r,n=W("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=this.parentNode,a=this.nextSibling,o=this.style.cssText;if(i.appendChild(n),n.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch(l){}else this._gsapBBox&&(r=this._gsapBBox());return s&&(a?s.insertBefore(this,a):s.appendChild(this)),i.removeChild(n),this.style.cssText=o,r},q=function(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])},G=function(t){var e;try{e=t.getBBox()}catch(r){e=j.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===j||(e=j.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+q(t,["x","cx","x1"])||0,y:+q(t,["y","cy","y1"])||0,width:0,height:0}},K=function(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!G(t))},Z=function(t,e){if(e){var r=t.style;e in h&&e!==T&&(e=Y),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(y,"-$1").toLowerCase())):r.removeAttribute(e)}},$=function(t,e,r,n,s,i){var a=new f.Fo(t._pt,e,r,0,1,i?E:M);return t._pt=a,a.b=n,a.e=s,t._props.push(r),a},H={deg:1,rad:1,turn:1},U={grid:1,flex:1},J=function t(e,r,n,i){var a,l,c,u,p=parseFloat(n)||0,g=(n+"").trim().substr((p+"").length)||"px",d=o.style,m=v.test(r),y="svg"===e.tagName.toLowerCase(),x=(y?"client":"offset")+(m?"Width":"Height"),b=100,O="px"===i,_="%"===i;return i===g||!p||H[i]||H[g]?p:("px"!==g&&!O&&(p=t(e,r,n,"px")),u=e.getCTM&&K(e),!_&&"%"!==g||!h[r]&&!~r.indexOf("adius")?(d[m?"width":"height"]=b+(O?g:i),l=~r.indexOf("adius")||"em"===i&&e.appendChild&&!y?e:e.parentNode,u&&(l=(e.ownerSVGElement||{}).parentNode),l&&l!==s&&l.appendChild||(l=s.body),(c=l._gsap)&&_&&c.width&&m&&c.time===f.xr.time&&!c.uncache?(0,f.Pr)(p/c.width*b):((_||"%"===g)&&!U[I(l,"display")]&&(d.position=I(e,"position")),l===e&&(d.position="static"),l.appendChild(o),a=o[x],l.removeChild(o),d.position="absolute",m&&_&&((c=(0,f.DY)(l)).time=f.xr.time,c.width=l[x]),(0,f.Pr)(O?a*p/b:a&&p?b/a*p:0))):(a=u?e.getBBox()[m?"width":"height"]:e[x],(0,f.Pr)(_?p/a*b:p/100*a)))},Q=function(t,e,r,n){var s;return a||R(),e in b&&"transform"!==e&&~(e=b[e]).indexOf(",")&&(e=e.split(",")[0]),h[e]&&"transform"!==e?(s=ut(t,n),s="transformOrigin"!==e?s[e]:s.svg?s.origin:pt(I(t,T))+" "+s.zOrigin+"px"):(!(s=t.style[e])||"auto"===s||n||~(s+"").indexOf("calc("))&&(s=nt[e]&&nt[e](t,e,r)||I(t,e)||(0,f.Ok)(t,e)||("opacity"===e?1:0)),r&&!~(s+"").trim().indexOf(" ")?J(t,e,s,r)+r:s},tt=function(t,e,r,n){if(!r||"none"===r){var s=V(e,t,1),i=s&&I(t,s,1);i&&i!==r?(e=s,r=i):"borderColor"===e&&(r=I(t,"borderTopColor"))}var a,o,l,c,u,p,h,g,d,m,y,v=new f.Fo(this._pt,t.style,e,0,1,f.Ks),x=0,b=0;if(v.b=r,v.e=n,r+="","auto"===(n+="")&&(t.style[e]=n,n=I(t,e)||n,t.style[e]=r),a=[r,n],(0,f.kr)(a),n=a[1],l=(r=a[0]).match(f.d4)||[],(n.match(f.d4)||[]).length){for(;o=f.d4.exec(n);)h=o[0],d=n.substring(x,o.index),u?u=(u+1)%5:"rgba("!==d.substr(-5)&&"hsla("!==d.substr(-5)||(u=1),h!==(p=l[b++]||"")&&(c=parseFloat(p)||0,y=p.substr((c+"").length),"="===h.charAt(1)&&(h=(0,f.cy)(c,h)+y),g=parseFloat(h),m=h.substr((g+"").length),x=f.d4.lastIndex-m.length,m||(m=m||f.Fc.units[e]||y,x===n.length&&(n+=m,v.e+=m)),y!==m&&(c=J(t,e,p,m)||0),v._pt={_next:v._pt,p:d||1===b?d:",",s:c,c:g-c,m:u&&u<4||"zIndex"===e?Math.round:0});v.c=x<n.length?n.substring(x,n.length):""}else v.r="display"===e&&"none"===n?E:M;return f.bQ.test(n)&&(v.e=0),this._pt=v,v},et={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rt=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,n,s,i=e.t,a=i.style,o=e.u,l=i._gsap;if("all"===o||!0===o)a.cssText="",n=1;else for(s=(o=o.split(",")).length;--s>-1;)r=o[s],h[r]&&(n=1,r="transformOrigin"===r?T:Y),Z(i,r);n&&(Z(i,Y),l&&(l.svg&&i.removeAttribute("transform"),ut(i,1),l.uncache=1,z(a)))}},nt={clearProps:function(t,e,r,n,s){if("isFromStart"!==s.data){var i=t._pt=new f.Fo(t._pt,e,r,0,0,rt);return i.u=n,i.pr=-10,i.tween=s,t._props.push(r),1}}},st=[1,0,0,1,0,0],it={},at=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},ot=function(t){var e=I(t,Y);return at(e)?st:e.substr(7).match(f.SI).map(f.Pr)},lt=function(t,e){var r,n,s,a,o=t._gsap||(0,f.DY)(t),l=t.style,c=ot(t);return o.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(c=[(s=t.transform.baseVal.consolidate().matrix).a,s.b,s.c,s.d,s.e,s.f]).join(",")?st:c:(c!==st||t.offsetParent||t===i||o.svg||(s=l.display,l.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,n=t.nextElementSibling,i.appendChild(t)),c=ot(t),s?l.display=s:Z(t,"display"),a&&(n?r.insertBefore(t,n):r?r.appendChild(t):i.removeChild(t))),e&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},ct=function(t,e,r,n,s,i){var a,o,l,c=t._gsap,u=s||lt(t,!0),p=c.xOrigin||0,f=c.yOrigin||0,h=c.xOffset||0,g=c.yOffset||0,d=u[0],m=u[1],y=u[2],v=u[3],x=u[4],b=u[5],O=e.split(" "),_=parseFloat(O[0])||0,w=parseFloat(O[1])||0;r?u!==st&&(o=d*v-m*y)&&(l=_*(-m/o)+w*(d/o)-(d*b-m*x)/o,_=_*(v/o)+w*(-y/o)+(y*b-v*x)/o,w=l):(_=(a=G(t)).x+(~O[0].indexOf("%")?_/100*a.width:_),w=a.y+(~(O[1]||O[0]).indexOf("%")?w/100*a.height:w)),n||!1!==n&&c.smooth?(x=_-p,b=w-f,c.xOffset=h+(x*d+b*y)-x,c.yOffset=g+(x*m+b*v)-b):c.xOffset=c.yOffset=0,c.xOrigin=_,c.yOrigin=w,c.smooth=!!n,c.origin=e,c.originIsAbsolute=!!r,t.style[T]="0px 0px",i&&($(i,c,"xOrigin",p,_),$(i,c,"yOrigin",f,w),$(i,c,"xOffset",h,c.xOffset),$(i,c,"yOffset",g,c.yOffset)),t.setAttribute("data-svg-origin",_+" "+w)},ut=function(t,e){var r=t._gsap||new f.l1(t);if("x"in r&&!e&&!r.uncache)return r;var n,s,i,a,o,l,c,p,h,y,v,x,b,O,_,w,P,M,E,k,A,F,C,S,B,X,z,L,N,W,D,V,R=t.style,j=r.scaleX<0,q="px",G="deg",Z=getComputedStyle(t),$=I(t,T)||"0";return n=s=i=l=c=p=h=y=v=0,a=o=1,r.svg=!(!t.getCTM||!K(t)),Z.translate&&("none"===Z.translate&&"none"===Z.scale&&"none"===Z.rotate||(R[Y]=("none"!==Z.translate?"translate3d("+(Z.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==Z.rotate?"rotate("+Z.rotate+") ":"")+("none"!==Z.scale?"scale("+Z.scale.split(" ").join(",")+") ":"")+("none"!==Z[Y]?Z[Y]:"")),R.scale=R.rotate=R.translate="none"),O=lt(t,r.svg),r.svg&&(r.uncache?(B=t.getBBox(),$=r.xOrigin-B.x+"px "+(r.yOrigin-B.y)+"px",S=""):S=!e&&t.getAttribute("data-svg-origin"),ct(t,S||$,!!S||r.originIsAbsolute,!1!==r.smooth,O)),x=r.xOrigin||0,b=r.yOrigin||0,O!==st&&(M=O[0],E=O[1],k=O[2],A=O[3],n=F=O[4],s=C=O[5],6===O.length?(a=Math.sqrt(M*M+E*E),o=Math.sqrt(A*A+k*k),l=M||E?m(E,M)*g:0,(h=k||A?m(k,A)*g+l:0)&&(o*=Math.abs(Math.cos(h*d))),r.svg&&(n-=x-(x*M+b*k),s-=b-(x*E+b*A))):(V=O[6],W=O[7],z=O[8],L=O[9],N=O[10],D=O[11],n=O[12],s=O[13],i=O[14],c=(_=m(V,N))*g,_&&(S=F*(w=Math.cos(-_))+z*(P=Math.sin(-_)),B=C*w+L*P,X=V*w+N*P,z=F*-P+z*w,L=C*-P+L*w,N=V*-P+N*w,D=W*-P+D*w,F=S,C=B,V=X),p=(_=m(-k,N))*g,_&&(w=Math.cos(-_),D=A*(P=Math.sin(-_))+D*w,M=S=M*w-z*P,E=B=E*w-L*P,k=X=k*w-N*P),l=(_=m(E,M))*g,_&&(S=M*(w=Math.cos(_))+E*(P=Math.sin(_)),B=F*w+C*P,E=E*w-M*P,C=C*w-F*P,M=S,F=B),c&&Math.abs(c)+Math.abs(l)>359.9&&(c=l=0,p=180-p),a=(0,f.Pr)(Math.sqrt(M*M+E*E+k*k)),o=(0,f.Pr)(Math.sqrt(C*C+V*V)),_=m(F,C),h=Math.abs(_)>2e-4?_*g:0,v=D?1/(D<0?-D:D):0),r.svg&&(S=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!at(I(t,Y)),S&&t.setAttribute("transform",S))),Math.abs(h)>90&&Math.abs(h)<270&&(j?(a*=-1,h+=l<=0?180:-180,l+=l<=0?180:-180):(o*=-1,h+=h<=0?180:-180)),e=e||r.uncache,r.x=n-((r.xPercent=n&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-n)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+q,r.y=s-((r.yPercent=s&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-s)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+q,r.z=i+q,r.scaleX=(0,f.Pr)(a),r.scaleY=(0,f.Pr)(o),r.rotation=(0,f.Pr)(l)+G,r.rotationX=(0,f.Pr)(c)+G,r.rotationY=(0,f.Pr)(p)+G,r.skewX=h+G,r.skewY=y+G,r.transformPerspective=v+q,(r.zOrigin=parseFloat($.split(" ")[2])||0)&&(R[T]=pt($)),r.xOffset=r.yOffset=0,r.force3D=f.Fc.force3D,r.renderTransform=r.svg?vt:u?yt:ht,r.uncache=0,r},pt=function(t){return(t=t.split(" "))[0]+" "+t[1]},ft=function(t,e,r){var n=(0,f.Wy)(e);return(0,f.Pr)(parseFloat(e)+parseFloat(J(t,"x",r+"px",n)))+n},ht=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,yt(t,e)},gt="0deg",dt="0px",mt=") ",yt=function(t,e){var r=e||this,n=r.xPercent,s=r.yPercent,i=r.x,a=r.y,o=r.z,l=r.rotation,c=r.rotationY,u=r.rotationX,p=r.skewX,f=r.skewY,h=r.scaleX,g=r.scaleY,m=r.transformPerspective,y=r.force3D,v=r.target,x=r.zOrigin,b="",O="auto"===y&&t&&1!==t||!0===y;if(x&&(u!==gt||c!==gt)){var _,w=parseFloat(c)*d,P=Math.sin(w),M=Math.cos(w);w=parseFloat(u)*d,_=Math.cos(w),i=ft(v,i,P*_*-x),a=ft(v,a,-Math.sin(w)*-x),o=ft(v,o,M*_*-x+x)}m!==dt&&(b+="perspective("+m+mt),(n||s)&&(b+="translate("+n+"%, "+s+"%) "),(O||i!==dt||a!==dt||o!==dt)&&(b+=o!==dt||O?"translate3d("+i+", "+a+", "+o+") ":"translate("+i+", "+a+mt),l!==gt&&(b+="rotate("+l+mt),c!==gt&&(b+="rotateY("+c+mt),u!==gt&&(b+="rotateX("+u+mt),p===gt&&f===gt||(b+="skew("+p+", "+f+mt),1===h&&1===g||(b+="scale("+h+", "+g+mt),v.style[Y]=b||"translate(0, 0)"},vt=function(t,e){var r,n,s,i,a,o=e||this,l=o.xPercent,c=o.yPercent,u=o.x,p=o.y,h=o.rotation,g=o.skewX,m=o.skewY,y=o.scaleX,v=o.scaleY,x=o.target,b=o.xOrigin,O=o.yOrigin,_=o.xOffset,w=o.yOffset,P=o.forceCSS,M=parseFloat(u),E=parseFloat(p);h=parseFloat(h),g=parseFloat(g),(m=parseFloat(m))&&(g+=m=parseFloat(m),h+=m),h||g?(h*=d,g*=d,r=Math.cos(h)*y,n=Math.sin(h)*y,s=Math.sin(h-g)*-v,i=Math.cos(h-g)*v,g&&(m*=d,a=Math.tan(g-m),s*=a=Math.sqrt(1+a*a),i*=a,m&&(a=Math.tan(m),r*=a=Math.sqrt(1+a*a),n*=a)),r=(0,f.Pr)(r),n=(0,f.Pr)(n),s=(0,f.Pr)(s),i=(0,f.Pr)(i)):(r=y,i=v,n=s=0),(M&&!~(u+"").indexOf("px")||E&&!~(p+"").indexOf("px"))&&(M=J(x,"x",u,"px"),E=J(x,"y",p,"px")),(b||O||_||w)&&(M=(0,f.Pr)(M+b-(b*r+O*s)+_),E=(0,f.Pr)(E+O-(b*n+O*i)+w)),(l||c)&&(a=x.getBBox(),M=(0,f.Pr)(M+l/100*a.width),E=(0,f.Pr)(E+c/100*a.height)),a="matrix("+r+","+n+","+s+","+i+","+M+","+E+")",x.setAttribute("transform",a),P&&(x.style[Y]=a)},xt=function(t,e,r,n,s){var i,a,o=360,l=(0,f.r9)(s),c=parseFloat(s)*(l&&~s.indexOf("rad")?g:1)-n,u=n+c+"deg";return l&&("short"===(i=s.split("_")[1])&&(c%=o)!==c%180&&(c+=c<0?o:-360),"cw"===i&&c<0?c=(c+36e9)%o-~~(c/o)*o:"ccw"===i&&c>0&&(c=(c-36e9)%o-~~(c/o)*o)),t._pt=a=new f.Fo(t._pt,e,r,n,c,_),a.e=u,a.u="deg",t._props.push(r),a},bt=function(t,e){for(var r in e)t[r]=e[r];return t},Ot=function(t,e,r){var n,s,i,a,o,l,c,u=bt({},r._gsap),p=r.style;for(s in u.svg?(i=r.getAttribute("transform"),r.setAttribute("transform",""),p[Y]=e,n=ut(r,1),Z(r,Y),r.setAttribute("transform",i)):(i=getComputedStyle(r)[Y],p[Y]=e,n=ut(r,1),p[Y]=i),h)(i=u[s])!==(a=n[s])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(s)<0&&(o=(0,f.Wy)(i)!==(c=(0,f.Wy)(a))?J(r,s,i,c):parseFloat(i),l=parseFloat(a),t._pt=new f.Fo(t._pt,n,s,o,l-o,O),t._pt.u=c||0,t._props.push(s));bt(n,u)};(0,f.fS)("padding,margin,Width,Radius",(function(t,e){var r="Top",n="Right",s="Bottom",i="Left",a=(e<3?[r,n,s,i]:[r+i,r+n,s+n,s+i]).map((function(r){return e<2?t+r:"border"+r+t}));nt[e>1?"border"+t:t]=function(t,e,r,n,s){var i,o;if(arguments.length<4)return i=a.map((function(e){return Q(t,e,r)})),5===(o=i.join(" ")).split(i[0]).length?i[0]:o;i=(n+"").split(" "),o={},a.forEach((function(t,e){return o[t]=i[e]=i[e]||i[(e-1)/2|0]})),t.init(e,o,s)}}));var _t,wt,Pt,Mt={name:"css",register:R,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,r,n,s){var i,o,l,c,u,p,g,d,m,y,v,_,M,E,k,A,F,C,S,B,X=this._props,z=t.style,L=r.vars.startAt;for(g in a||R(),this.styles=this.styles||N(t),A=this.styles.props,this.tween=r,e)if("autoRound"!==g&&(o=e[g],!f.$i[g]||!(0,f.if)(g,e,r,n,t,s)))if(u=typeof o,p=nt[g],"function"===u&&(u=typeof(o=o.call(r,n,t,s))),"string"===u&&~o.indexOf("random(")&&(o=(0,f.UI)(o)),p)p(this,t,g,o,r)&&(k=1);else if("--"===g.substr(0,2))i=(getComputedStyle(t).getPropertyValue(g)+"").trim(),o+="",f.GN.lastIndex=0,f.GN.test(i)||(d=(0,f.Wy)(i),m=(0,f.Wy)(o)),m?d!==m&&(i=J(t,g,i,m)+m):d&&(o+=d),this.add(z,"setProperty",i,o,n,s,0,0,g),X.push(g),A.push(g,0,z[g]);else if("undefined"!==u){if(L&&g in L?(i="function"==typeof L[g]?L[g].call(r,n,t,s):L[g],(0,f.r9)(i)&&~i.indexOf("random(")&&(i=(0,f.UI)(i)),(0,f.Wy)(i+"")||(i+=f.Fc.units[g]||(0,f.Wy)(Q(t,g))||""),"="===(i+"").charAt(1)&&(i=Q(t,g))):i=Q(t,g),c=parseFloat(i),(y="string"===u&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),l=parseFloat(o),g in b&&("autoAlpha"===g&&(1===c&&"hidden"===Q(t,"visibility")&&l&&(c=0),A.push("visibility",0,z.visibility),$(this,z,"visibility",c?"inherit":"hidden",l?"inherit":"hidden",!l)),"scale"!==g&&"transform"!==g&&~(g=b[g]).indexOf(",")&&(g=g.split(",")[0])),v=g in h)if(this.styles.save(g),_||((M=t._gsap).renderTransform&&!e.parseTransform||ut(t,e.parseTransform),E=!1!==e.smoothOrigin&&M.smooth,(_=this._pt=new f.Fo(this._pt,z,Y,0,1,M.renderTransform,M,0,-1)).dep=1),"scale"===g)this._pt=new f.Fo(this._pt,M,"scaleY",M.scaleY,(y?(0,f.cy)(M.scaleY,y+l):l)-M.scaleY||0,O),this._pt.u=0,X.push("scaleY",g),g+="X";else{if("transformOrigin"===g){A.push(T,0,z[T]),C=void 0,S=void 0,B=void 0,C=(F=o).split(" "),S=C[0],B=C[1]||"50%","top"!==S&&"bottom"!==S&&"left"!==B&&"right"!==B||(F=S,S=B,B=F),C[0]=et[S]||S,C[1]=et[B]||B,o=C.join(" "),M.svg?ct(t,o,0,E,0,this):((m=parseFloat(o.split(" ")[2])||0)!==M.zOrigin&&$(this,M,"zOrigin",M.zOrigin,m),$(this,z,g,pt(i),pt(o)));continue}if("svgOrigin"===g){ct(t,o,1,E,0,this);continue}if(g in it){xt(this,M,g,c,y?(0,f.cy)(c,y+o):o);continue}if("smoothOrigin"===g){$(this,M,"smooth",M.smooth,o);continue}if("force3D"===g){M[g]=o;continue}if("transform"===g){Ot(this,o,t);continue}}else g in z||(g=V(g)||g);if(v||(l||0===l)&&(c||0===c)&&!x.test(o)&&g in z)l||(l=0),(d=(i+"").substr((c+"").length))!==(m=(0,f.Wy)(o)||(g in f.Fc.units?f.Fc.units[g]:d))&&(c=J(t,g,i,m)),this._pt=new f.Fo(this._pt,v?M:z,g,c,(y?(0,f.cy)(c,y+l):l)-c,v||"px"!==m&&"zIndex"!==g||!1===e.autoRound?O:P),this._pt.u=m||0,d!==m&&"%"!==m&&(this._pt.b=i,this._pt.r=w);else if(g in z)tt.call(this,t,g,i,y?y+o:o);else if(g in t)this.add(t,g,i||t[g],y?y+o:o,n,s);else if("parseTransform"!==g){(0,f.lC)(g,o);continue}v||(g in z?A.push(g,0,z[g]):A.push(g,1,i||t[g])),X.push(g)}k&&(0,f.JV)(this)},render:function(t,e){if(e.tween._time||!c())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:Q,aliases:b,getSetter:function(t,e,r){var n=b[e];return n&&n.indexOf(",")<0&&(e=n),e in h&&e!==T&&(t._gsap.x||Q(t,"x"))?r&&l===r?"scale"===e?C:F:(l=r||{})&&("scale"===e?S:B):t.style&&!(0,f.m2)(t.style[e])?k:~e.indexOf("-")?A:(0,f.S5)(t,e)},core:{_removeProperty:Z,_getMatrix:lt}};f.p8.utils.checkPrefix=V,f.p8.core.getStyleSaver=N,_t="x,y,z,scale,scaleX,scaleY,xPercent,yPercent",wt="rotation,rotationX,rotationY,skewX,skewY",Pt=(0,f.fS)(_t+","+wt+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",(function(t){h[t]=1})),(0,f.fS)(wt,(function(t){f.Fc.units[t]="deg",it[t]=1})),b[Pt[13]]=_t+","+wt,(0,f.fS)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",(function(t){var e=t.split(":");b[e[1]]=Pt[e[0]]})),(0,f.fS)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",(function(t){f.Fc.units[t]="px"})),f.p8.registerPlugin(Mt);var Et=f.p8.registerPlugin(Mt)||f.p8,kt=(Et.core.Tween,r(1883));const At={Oferta:"/oferta","Materiały":"/materialy",Producenci:"/producenci",Partnerzy:"/partnerzy",Kontakt:"/kontakt",SKLEP:"/sklep"};var Ft=t=>{let{onMenuToggle:e}=t;const r=(0,p.useRef)(null),n=(0,p.useRef)(null),s=(0,p.useRef)([]),i=()=>{s.current.forEach((t=>{Et.set(t,{autoAlpha:0,y:30})}))};(0,p.useEffect)((()=>{const t=r.current,e=n.current;Et.set(t,{autoAlpha:0,y:50}),i(),e.addEventListener("click",(()=>{const e=1===Et.getProperty(t,"autoAlpha");i(),e?Et.to(t,{autoAlpha:0,y:50,duration:1.2}):(Et.to(t,{autoAlpha:1,y:0,duration:1.2}),s.current.forEach(((t,e)=>{Et.to(t,{autoAlpha:1,y:0,delay:.1*e,duration:2.5})})))}))}),[]);return p.createElement("div",{class:"home"},p.createElement("header",{className:"header"},p.createElement("div",{className:"header-logo"},p.createElement("img",{src:"/icons/CERAMIKAlogo.png"})),p.createElement("div",{className:"desktop-links"},p.createElement(kt.Link,{href:""},"Oferta"),p.createElement(kt.Link,{href:""},"Materiały"),p.createElement(kt.Link,{href:""},"Producenci"),p.createElement(kt.Link,{href:""},"Partnerzy"),p.createElement(kt.Link,{href:""},"Kontakt"),p.createElement(kt.Link,{href:""},"SKLEP")),p.createElement("div",{className:"header-nav"},p.createElement("div",{class:"header-nav__btns"},p.createElement("button",{className:"menu-btn",ref:n,onClick:()=>{const t=n.current.classList.contains("open");n.current.classList.toggle("open"),e(!t),i(),t?Et.to(r.current,{autoAlpha:0,y:50,duration:1.2}):(Et.to(r.current,{autoAlpha:1,y:0,duration:1.2}),s.current.forEach(((t,e)=>{Et.to(t,{autoAlpha:1,y:0,delay:.1*e,duration:2.5})})))}},p.createElement("span",{className:"menu-btn__burger"}))))),p.createElement("nav",{className:"links-mobile",ref:r},p.createElement("ul",null,Object.entries(At).map(((t,e)=>{let[r,n]=t;return p.createElement("li",{key:e},p.createElement(kt.Link,{to:n,ref:t=>s.current[e]=t},r))})))))}}}]);
//# sourceMappingURL=commons-8d70daa59bd98ba59f87.js.map