exports.validarEmail = function(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
}

exports.validarRA = function(RA) {
    if(RA.length === 8) {
        for(let i = 0; i < RA.length; i++) {
            if(/^[a-zA-Z]$/.test(RA[0])) {
                if (/^[0-9]$/.teste(parseInt([i+1]))) {
                    return true
                }
            }
                
        }
    }
}