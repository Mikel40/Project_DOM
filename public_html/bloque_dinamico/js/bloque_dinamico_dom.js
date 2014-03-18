function BloqueDinamico(){

    var idContenedor;
    var claseCSS;
    var elementos;

    this.setIdContenedor = function(idContenedor) {
        this.idContenedor = idContenedor;
    }

    this.setClaseCSS = function(claseCSS) {
        this.claseCSS = claseCSS;
    }

    this.setElementos = function(elementos) {
        // Aqui se podria comprobar que la coleccion es de bloques...
        // si no hay bloques appendBloqueDinamico fallara..
        this.elementos = elementos;
    }

    this.createBloqueDinamico = function( element ){
        var oBloqueDiv = document.createElement("div");
        oBloqueDiv.className= this.claseCSS;
        var oTituloBloqueDiv = document.createElement("div");
        oTituloBloqueDiv.className="tituloBloque";
        if (element.url!="" || typeof (element.url) != "undefined" ){
            var oTituloLink = document.createElement("a");
            oTituloLink.href = element.url;
            oTituloLink.innerHTML=element.tituloBloque;
            oTituloBloqueDiv.appendChild(oTituloLink);
        } else {
            oTituloBloqueDiv.innerHTML=element.tituloBloque;
        }
        oBloqueDiv.appendChild(oTituloBloqueDiv);

        var oDescBloqueP = document.createElement("p");
        oDescBloqueP.innerHTML=element.descripcion;
        oBloqueDiv.appendChild(oDescBloqueP);

        var oContentBloqueDiv = document.createElement("div");
        oContentBloqueDiv.className="contenidoBloque";
        oContentBloqueDiv.innerHTML=element.contenido;
        oBloqueDiv.appendChild(oContentBloqueDiv);

        if (element.images.length>0){
            var oListaImages = document.createElement("ul");
            for(var i=0;i<element.images.length;i++){
                var oListaImage = document.createElement("li");
                var oImg = document.createElement("img");
                oImg.src = element.images[i];
                oListaImage.appendChild(oImg);
                oListaImages.appendChild(oListaImage);
            }
            oBloqueDiv.appendChild(oListaImages);
        }

        return oBloqueDiv;
    }

    this.appendBloqueDinamico = function(){
        var contenedor = document.getElementById(this.idContenedor);
        if (contenedor != null){
            for(var i=0;i<this.elementos.length;i++){
                contenedor.appendChild( this.createBloqueDinamico(this.elementos[i]) );
            }

        }

    }
}