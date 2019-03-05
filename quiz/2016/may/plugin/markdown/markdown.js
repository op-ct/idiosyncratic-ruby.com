!function(t,e){"object"==typeof exports?module.exports=e(require("./marked")):(t.RevealMarkdown=e(t.marked),t.RevealMarkdown.initialize())}(this,function(t){function e(t){var e=t.querySelector("script"),a=(e||t).textContent,r=a.match(/^\n?(\s*)/)[1].length,n=a.match(/^\n?(\t*)/)[1].length;return n>0?a=a.replace(new RegExp("\\n?\\t{"+n+"}","g"),"\n"):r>1&&(a=a.replace(new RegExp("\\n? {"+r+"}","g"),"\n")),a}function a(t){for(var e=t.attributes,a=[],r=0,n=e.length;n>r;r++){var o=e[r].name,s=e[r].value;/data\-(markdown|separator|vertical|notes)/gi.test(o)||a.push(s?o+"="+s:o)}return a.join(" ")}function r(t){return t=t||{},t.separator=t.separator||u,t.notesSeparator=t.notesSeparator||d,t.attributes=t.attributes||"",t}function n(t,e){e=r(e);var a=t.split(new RegExp(e.notesSeparator,"mgi"));return 2===a.length&&(t=a[0]+'<aside class="notes" data-markdown>'+a[1].trim()+"</aside>"),'<script type="text/template">'+t+"</script>"}function o(t,e){e=r(e);for(var a,o,s,i=new RegExp(e.separator+(e.verticalSeparator?"|"+e.verticalSeparator:""),"mg"),u=new RegExp(e.separator),d=0,l=!0,c=[];a=i.exec(t);)notes=null,o=u.test(a[0]),!o&&l&&c.push([]),s=t.substring(d,a.index),o&&l?c.push(s):c[c.length-1].push(s),d=i.lastIndex,l=o;(l?c:c[c.length-1]).push(t.substring(d));for(var p="",h=0,g=c.length;g>h;h++)c[h].propertyIsEnumerable(length)&&"function"==typeof c[h].splice?(p+="<section "+e.attributes+">",c[h].forEach(function(t){p+="<section data-markdown>"+n(t,e)+"</section>"}),p+="</section>"):p+="<section "+e.attributes+" data-markdown>"+n(c[h],e)+"</section>";return p}function s(){for(var t,r=document.querySelectorAll("[data-markdown]"),s=0,i=r.length;i>s;s++)if(t=r[s],t.getAttribute("data-markdown").length){var u=new XMLHttpRequest,d=t.getAttribute("data-markdown");datacharset=t.getAttribute("data-charset"),null!=datacharset&&""!=datacharset&&u.overrideMimeType("text/html; charset="+datacharset),u.onreadystatechange=function(){4===u.readyState&&(t.outerHTML=u.status>=200&&u.status<300?o(u.responseText,{separator:t.getAttribute("data-separator"),verticalSeparator:t.getAttribute("data-vertical"),notesSeparator:t.getAttribute("data-notes"),attributes:a(t)}):'<section data-state="alert">ERROR: The attempt to fetch '+d+" failed with HTTP status "+u.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>")},u.open("GET",d,!1);try{u.send()}catch(l){alert("Failed to get the Markdown file "+d+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+l)}}else t.getAttribute("data-separator")||t.getAttribute("data-vertical")||t.getAttribute("data-notes")?t.outerHTML=o(e(t),{separator:t.getAttribute("data-separator"),verticalSeparator:t.getAttribute("data-vertical"),notesSeparator:t.getAttribute("data-notes"),attributes:a(t)}):t.innerHTML=n(e(t))}function i(){for(var a=document.querySelectorAll("[data-markdown]"),r=0,n=a.length;n>r;r++){var o=a[r];if(!o.getAttribute("data-markdown-parsed")){o.setAttribute("data-markdown-parsed",!0);var s=o.querySelector("aside.notes"),i=e(o);o.innerHTML=t(i),s&&o.appendChild(s)}}}if("undefined"==typeof t)throw"The reveal.js Markdown plugin requires marked to be loaded";"undefined"!=typeof hljs&&t.setOptions({highlight:function(t,e){return hljs.highlightAuto(t,e).value}});var u="^\n---\n$",d="note:";return{initialize:function(){s(),i()},processSlides:s,convertSlides:i,slidify:o}});