exports.validarUsuario = function(usuario){
    if((usuario.length >= 5) && (usuario.length <= 10)){
        return true;
    }
    return false;
}

exports.validarSenha = function(senha){
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;
    return regex.test(senha);
}