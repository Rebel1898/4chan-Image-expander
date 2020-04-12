javascript:(
    function(){
       
        
var url = window.location.href;
if (url.indexOf("boards.4chan.org") < 0 && url.indexOf("/thread/") < 0) {
    //wildcards
    alert("You are not in a 4chan thread");
}
else {


    prueba = document.getElementsByClassName("fileThumb");
    var r = confirm("Are you going to download images in this session?\n OK will remove unnecesary images to improve bulk download");
    if (r == true) {
        for (let index = 0; index < prueba.length; index++) {
        
            var x=true;
            for (let vuelta = 0; vuelta<prueba[index].children.length; vuelta++){
            if(prueba[index].children[vuelta].className=="expanded-thumb"){ x = false}
            else{}
            }
            if(x == true){  
            prueba[index].children[0].href = "javascript:void(0);";
            prueba[index].children[0].src = "javascript:void(0);";
            prueba[index].children[0].click();
            var elem = prueba[index].children[0];
            prueba[index].removeChild(elem);
        }
          
         
        }

        for (let vuelta = 0; vuelta < 2; vuelta++) {
            var imagenes = document.getElementsByTagName("img");
            for (let index = 0; index < imagenes.length; index++) {
                console.log(imagenes[index].src)
                if (imagenes[index].src.indexOf("favicon") > -1 || imagenes[index].src.indexOf("fade.png") > -1 || imagenes[index].src.indexOf("/title/") > -1 || imagenes[index].src.indexOf("/contest_banners/") > -1 || imagenes[index].src.indexOf("/buttons/") > -1) {

                    imagenes[index].remove();



                }


                if (imagenes[index].parentNode.title != "") {
                    imagenes[index].remove();
                }


                else { }
            }
        }
        var links = document.getElementsByTagName("link");
        for (let index = 0; index < imagenes.length; index++) {
            if (links[index].src.indexOf("favicon") > -1 || links[index].src.indexOf("fade.png") > -1 || links[index].src.indexOf("/title/") > -1 || links[index].src.indexOf("/contest_banners/") > -1 || links[index].src.indexOf("/buttons/") > -1) {

                links[index].remove();



            }




        }


    } else {

        for (let index = 0; index < prueba.length; index++) {

            var ref = prueba[index].children[0].href;
            var src = prueba[index].children[0].src
            prueba[index].children[0].href = "javascript:void(0);";
            prueba[index].children[0].src = "javascript:void(0);";
            var x=true;
            for (let vuelta = 0; vuelta<prueba[index].children.length; vuelta++){
            if(prueba[index].children[vuelta].className=="expanded-thumb"){ x = false}
            else{}
            }
            if(x == true){  
            prueba[index].children[0].click();
             }
            prueba[index].children[0].href = ref;
            prueba[index].children[0].src = src;
        }
    }

}

            
            })();
