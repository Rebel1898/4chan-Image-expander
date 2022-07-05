javascript: (
    function () {
        function ClicarImg(prueba) {
            for (let i = 0; i < prueba.length; i++) {
                var ref = prueba[i].children[0].href;
                var src = prueba[i].children[0].src
                var x = true;
                prueba[i].children[0].href = "javascript:void(0);";
                prueba[i].children[0].src = "javascript:void(0);";

                for (let j = 0; j < prueba[i].children.length; j++) {
                    if (prueba[i].children[j].className == "expanded-thumb") { x = false }
                    else { }
                }
                if (x == true) {
                    prueba[i].children[0].click();
                }
                prueba[i].children[0].href = ref;
                prueba[i].children[0].src = src;
            }
        }
        var url = window.location.href;
        if (url.indexOf("boards.4chan.org") < 0 && url.indexOf("/thread/") < 0) {
            alert("You are not in a 4chan thread");
        }
        else {
            prueba = document.getElementsByClassName("fileThumb");
            var imagenes = document.getElementsByTagName("img");
            for (let p = imagenes.length - 1; p >= 0; p--) {
                if (imagenes[p].src.indexOf("favicon") > -1 || imagenes[p].src.indexOf("fade.png") > -1 || imagenes[p].src.indexOf("/title/") > -1 || imagenes[p].src.indexOf("/contest_banners/") > -1 || imagenes[p].src.indexOf("/buttons/") > -1) {
                    imagenes[p].remove();
                }
                if (imagenes[p].parentNode.title != "") {
                    imagenes[p].remove();
                }
            }
            var links = document.getElementsByTagName("link");
            for (let q = links.length - 1; q >= 0; q--) {
                if (links[q].rel != "stylesheet")
                    links[q].remove();
            }
            ClicarImg(prueba);
        }
    })();
