# 4chan-Image-expander
This bookmarklet will expand all images on a 4chan thread. No more tedious, one by one clicking. Basically, when the bookmarklet is clicked; all board images are clicked as well. As bookmarklet is expected to work on most browsers.  

To use it, just drag the script below to the bookmark toolbar.

```javascript
javascript:(function(){function ClicarImg(e){for(var n=0;n<e.length;n++){var r=e[n].children[0].href,a=e[n].children[0].src,i=!0;e[n].children[0].href="javascript:void(0);",e[n].children[0].src="javascript:void(0);";for(var t=0;t<e[n].children.length;t++)"expanded-thumb"==e[n].children[t].className&&(i=!1);1==i&&e[n].children[0].click(),e[n].children[0].href=r,e[n].children[0].src=a}}var url=window.location.href;if(url.indexOf("boards.4chan.org")<0&&url.indexOf("/thread/")<0)alert("You are not in a 4chan thread");else{prueba=document.getElementsByClassName("fileThumb");for(var imagenes=document.getElementsByTagName("img"),p=imagenes.length-1;p>=0;p--)(imagenes[p].src.indexOf("favicon")>-1||imagenes[p].src.indexOf("fade.png")>-1||imagenes[p].src.indexOf("/title/")>-1||imagenes[p].src.indexOf("/contest_banners/")>-1||imagenes[p].src.indexOf("/buttons/")>-1)&&imagenes[p].remove(),""!=imagenes[p].parentNode.title&&imagenes[p].remove();for(var links=document.getElementsByTagName("link"),q=links.length-1;q>=0;q--)"stylesheet"!=links[q].rel&&links[q].remove();ClicarImg(prueba)}})();
```


