/*
* Declaracion del tipo Bloque
*
* tituloBloque string max 120
* descripcion string max 255
* contenido string
* images array max 5
* url string
*/
function Bloque (tituloBloque, descripcion, contenido, images, url){

    var mensajesError = [];

    this.getMensajesError=function(){
        return this.mensajesError;
    }

    this.chequeaStringSize = function( cadena, limit, mensajeError  ){
        if (cadena.length>limit) {
            cadena = substr(cadena,0, limit);
            this.getMensajesError()[this.mensajesError.length]=mensajeError;
        }
        return cadena;
    }

    this.tituloBloque = this.chequeaStringSize( tituloBloque, 120, "El Titulo del Bloque excede los 120 caracteres...\n");

    this.descripcion = this.chequeaStringSize( descripcion, 255, "La descripción del Bloque excede los 255 caracteres...\n");

    this.contenido = contenido;

    this.images = new Array();
    if (typeof images == "array" || (typeof images == "object" && images.length>0) ){
        this.images = this.images.concat( images );
    } else {
        mensajesError[mensajesError.length]="Warning. images no es un array o una coleccion de objetos como pediamos en la definicion de bloque.";
    }

    if (this.images.length>5){
        this.images = this.images.slice(0+this.images.length-5,6);
        mensajesError[mensajesError.length]="images contenía más de 5 imágenes. \n Guardamos las 5 ultimas en pasarle al bloque";
    }

    this.url = url;

    if (mensajesError.length>0) {
        var sErrores = "";
        for(var i=0;i<mensajesError.length;i++) {
            sErrores += mensajesError[i];
        }
        alert(sErrores);
    }
}