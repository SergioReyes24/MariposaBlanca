//  Declaración de variables
let BtnIzq = document.getElementById('BtnIzq');
let BtnDer = document.getElementById('BtnDer');
let Pagina = document.getElementById('Pagina');
let Paginas = ["./IMG/Portada.jpg","./IMG/Pagina1.jpg", "./IMG/Pagina2.jpg", "./IMG/Pagina3.jpg", "./IMG/Pagina4.jpg", "./IMG/Pagina5.jpg", "./IMG/Pagina6.jpg", "./IMG/ContraPortada.jpg"]
let ContadorPaginas = 0;

//  Declaración que se activa cuando se pulsa el botón izquierdo y aumenta el contador en 1
BtnIzq.onclick = function(){
//  Cuando el contador tiene un número definido, se cambia el source del atributo "Pagina" que es el elemento <img> en html mediante un arreglo y condicionales 
    ContadorPaginas++;
    ContadorPaginas == 0 ? Pagina.src = Paginas[0] : null;
    ContadorPaginas == 1 ? Pagina.src = Paginas[1] : null;
    ContadorPaginas == 2 ? Pagina.src = Paginas[2] : null;
    ContadorPaginas == 3 ? Pagina.src = Paginas[3] : null;
    ContadorPaginas == 4 ? Pagina.src = Paginas[4] : null;
    ContadorPaginas == 5 ? Pagina.src = Paginas[5] : null;
    ContadorPaginas == 6 ? Pagina.src = Paginas[6] : null;
    ContadorPaginas == 7 ? Pagina.src = Paginas[7] : null;
    if(ContadorPaginas == 8){
        Pagina.src = Paginas[0];
        ContadorPaginas = 0;
    };
};

BtnDer.onclick = function(){
    ContadorPaginas--;
    
    ContadorPaginas == 0 ? Pagina.src = Paginas[0] : null;
    ContadorPaginas == 1 ? Pagina.src = Paginas[1] : null;
    ContadorPaginas == 2 ? Pagina.src = Paginas[2] : null;
    ContadorPaginas == 3 ? Pagina.src = Paginas[3] : null;
    ContadorPaginas == 4 ? Pagina.src = Paginas[4] : null;
    ContadorPaginas == 5 ? Pagina.src = Paginas[5] : null;
    ContadorPaginas == 6 ? Pagina.src = Paginas[6] : null;
    ContadorPaginas == 7 ? Pagina.src = Paginas[7] : null;
    if(ContadorPaginas == 8){
        Pagina.src = Paginas[0];
        ContadorPaginas = 0;
    }

    ContadorPaginas == -1 ? Pagina.src = Paginas[7] : null;
    ContadorPaginas == -2 ? Pagina.src = Paginas[6] : null;
    ContadorPaginas == -3 ? Pagina.src = Paginas[5] : null;
    ContadorPaginas == -4 ? Pagina.src = Paginas[4] : null;
    ContadorPaginas == -5 ? Pagina.src = Paginas[3] : null;
    ContadorPaginas == -6 ? Pagina.src = Paginas[2] : null;
    ContadorPaginas == -7 ? Pagina.src = Paginas[1] : null;
    if(ContadorPaginas == -8){
        Pagina.src = Paginas[0];
        ContadorPaginas = 0;
    };
};