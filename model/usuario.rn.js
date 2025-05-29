exports.validarUsuario = function(email){
    const regex = /^(?=.*\d)(?:([@])(?!\1)){8,}$/;
    return regex.test(email);
    if((email)){
        return true;
    }
    return false;
}
