const db = require("../../config/database")
const md5 = require("md5")

exports.criarCurso = async function(novoCurso){
    const resposta = await db.query(
        'INSERT INTO Usuario (codigo, nomeCurso) VALUES ($1, $2)',
        [novoCurso.codigo, novoCurso.nomeCurso]
    );
    
    return "Curso cadastrado com sucesso!";
}

exports.procurarCurso = async function(codigo){
    const {rows} = await db.query(
        `SELECT * FROM Curso WHERE codigo = '${codigo}'`
    );
    
    return rows;
}