function recibirdato(){
    var usuario = document.getElementById("nombre").value;
    document.getElementById("nombreusuario").value="Bienvenid@: "+usuario;
    $("#nombreusuario").val(usuario);
}
function conversor(){
    var boliviano = document.getElementById("boliviano").value;
    var total = boliviano/6.96;
    document.getElementById("dolar").value=total;
}