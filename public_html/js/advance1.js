var oBlocks = [
    {
        idBlock: 1
        ,titulo: "El libro gordo de petete vuelve al Teatro"
        ,contenido: "Que gran libro para toda la familia... llevado a un escenario" +
                    " <p>Petete y sus amigos.. bla lbabl a<br />bla kbwka bkaw</p>"
    }
    , {
        idBlock: 2
        ,titulo: "El desarrollo Web mola mogollón"
        ,contenido: "Aunque en sus inicios es completamente destructivo para la cabeza...<br /> " +
            " llega un momento en el que las cosas toman forma... "
    }
    , {
        idBlock: 3
        ,titulo: "Ultimo bloque que se pintara"
        ,contenido: ""
    }
];



function printBlock( data, divContainer ) {
    if ( divContainer != null ) {
        for( var i = 0 ; i < data.length ; i ++ ){

            var oDiv = document.createElement( "div" );
            oDiv.title = data[ i ].titulo;
            oDiv.innerHTML += data[ i ].contenido;

            var oTitleDiv = document.createElement( "div" );
            oTitleDiv.className = "blockTitle";
            oTitleDiv.innerHTML = data[ i ].titulo;

            divContainer.appendChild( oTitleDiv );
            divContainer.appendChild( oDiv );
        }
    }
}
