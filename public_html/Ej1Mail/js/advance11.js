
var oBlocks = [
    {
        idBlock: 1
        ,titulo: "Titulo - 12345678910"
        ,descripcion: "Descrip - Rompiendome la cabeza con el MD"
        ,contenido: "Cont - Aka ponemos fotos y una url" +
                    " <p>Nuevo parrafo ainomaaaaa<br />ainomaakkkakkk</p>"
        ,urlasociada: SRC="http://www.google.es"
        
    }
];

function printBlock( data, divContainer ) {
    if ( divContainer != null ) {
        for( var i = 0 ; i < data.length ; i ++ ){
        
            var oUrlDiv = document.createElement( "div" );
            oUrlDiv.urlasociada = data[ i ].urlasociada;
            oUrlDiv.innerHTML += data[ i ].urlasociada;
            
            var oConDiv = document.createElement( "div" );
            oConDiv.contenido = data[ i ].contenido;
            oConDiv.innerHTML += data[ i ].contenido;
            
            var oDesDiv = document.createElement( "div" );
            oDesDiv.descripcion = data[ i ].descripcion;
            oDesDiv.innerHTML += data[ i ].descripcion;
            
            var oTitleDiv = document.createElement( "div" );
            oTitleDiv.className = "blockTitle";
            oTitleDiv.innerHTML = data[ i ].titulo;

            divContainer.appendChild( oTitleDiv );
            divContainer.appendChild( oDesDiv );
            divContainer.appendChild( oConDiv );
            divContainer.appendChild( oUrlDiv );

        }
    }
}