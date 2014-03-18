    // Creacion de Bloques

var setBlocks = new Array();

var block1 = new Bloque(
    "El 95,5% dels habitants de Crimea vota a favor de l'annexió a Rússia"
    ,"El govern de la península demanarà aquest dilluns a Moscou que l'accepti com un territori més de la federació russa, malgrat que els resultats definitius tardaran encara uns 10 dies a saber-se."
    ,"Després de tancar-se els col·legis electorals i segons les primeres dades recollides per la Comissió Electoral, el resultat del referèndum ha estat favorable a l'annexió de la península de Crimea a Rússia per un 95,5%. En total ha participat a la consulta el 80% del cens electoral, segons dades oficials. La xifra ha estat molt similar al que pronosticaven els sondejos, un 93%.<br />" +
     "Les autoritats locals ja celebren la victòria i anuncien la seva intenció de demanar al president rus, Vladímir Putin, la incorporació a la Federació Russa.<br />Els sondejos, difosos per mitjans russos i institucions pròximes al govern de Crimea, havien sortit, com sol ser habitual, tan bon punt han tancat els col·legis. Segons la Comissió Electoral de la república, un milió i mig de ciutadans tenien dret a vot.<br />" +
        "Les autoritats locals comptaven amb una participació del 70%. La majoria de russòfons, el 60% de la població, han anat a votar. La minoria tàrtara, un 12% de la població, en canvi, ha optat per l'abstenció com a mesura de boicot a la consulta."
    ,[ "http://www.324.cat/multimedia/jpg/3/2/1394950670823.jpg",
    "http://www.324.cat/multimedia/jpg/4/9/1395007638694.jpg"]
    ,"http://www.324.cat/noticia/2338673/mon/Victoria-contundent-del-s-a-lannexio-de-Crimea-a-Russia-amb-un-955-dels-vots"
);

var block2 = new Bloque(
    "PIXIES WILL PLAY AT PRIMAVERA SOUND 2014"
    ,"The seminal Boston band Pixies, stars of American indie rock, will perform both at Primavera Sound in Barcelona and at Optimus Primavera Sound in Porto."
    ,"Fronted by Black Francis, the Pixies are the authors of key records such as \"Surfer Rosa\" and  \"Doolittle\", which are essential to understand rock music of the 90s. Their stage comeback in the early 2000s meant that a couple of generations that had grown up with their records were able to see them live for the first time. These will be the first shows of their 2014 tour which will include songs from their new album, their first since they released \"Trompe Le Monde\" in 1991."
    ,[ "http://blogs.dallasobserver.com/dc9/pixies2.jpg",
        "http://johannasvisions.com/wp-content/uploads/2013/04/the-pixies.jpg",
        "http://blogs.dallasobserver.com/dc9/pixies2.jpg",
        "http://johannasvisions.com/wp-content/uploads/2013/04/the-pixies.jpg",
        "http://blogs.dallasobserver.com/dc9/pixies2.jpg",
        "http://readingeagle.com/storyimage/RE/20131110/LIFE/311109994/AR/0/AR-311109994.jpg?q=100"
    ]
    ,"http://www.primaverasound.com/noticiaSingle?origen=ps&id=1225"
);

var block3 = new Bloque(
    "Rajoi pide el rescate a los extraterrestres"
    ,"Pues que se podia esperar de un presidente asi... "
    ,"Rajoi ha bajado de la luna para darnos una gran noticia y es que solo vino a recaudar y luego pondria rumbo a marte donde estaria muy bien sin casco ni traje... ni naaa... "
    ,[ "http://www.vertele.com/elrevistero/files/2013/07/noticias-del-mundo-portada.jpg"]
    ,"http://www.324.cat/noticia/2338673/mon/Victoria-contundent-del-s-a-lannexio-de-Crimea-a-Russia-amb-un-955-dels-vots"
);

setBlocks.push(block1);
setBlocks.push(block2);
setBlocks.push(block3);

var dinamicBlock = new BloqueDinamico();
dinamicBlock.setElementos(setBlocks);
dinamicBlock.setClaseCSS("bloque1");
dinamicBlock.setIdContenedor("left");
dinamicBlock.appendBloqueDinamico();

dinamicBlock.setClaseCSS("bloque2");
dinamicBlock.setIdContenedor("right");
dinamicBlock.appendBloqueDinamico();

