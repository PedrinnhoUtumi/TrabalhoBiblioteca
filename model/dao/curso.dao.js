const db = require("../../config/database")
const md5 = require("md5")

exports.criarCurso = async function(novoCurso){
    const resposta = await db.query(
        'INSERT INTO curso (codigo, nomeCurso) VALUES ($1, $2)',
        [novoCurso.codigo, novoCurso.nomeCurso]
    );
    
    return "Curso cadastrado com sucesso!";
}


exports.listarCurso = async function(){
    const {rows} = await db.query("SELECT * FROM Curso");
    return rows;
};


exports.consultarCurso= async function(nomeCurso) {

    const {rows} = await db.query (
        `SELECT * FROM Curso WHERE nomeCurso = ${nomeCurso}`
    );
    return rows
    
};

exports.removerCurso = async function(codigoCurso, nomeCurso) {
    if(idCurso !== null) {
        const resposta = await db.query (
            `DELETE FROM Curso WHERE idCurso = ${codigoCurso}`
        );
        return true
    } else {
        const resposta = await db.query (
            `DELETE FROM Curso WHERE nomeCurso = ${nomeCurso}`
        );
        return true
    }
};

exports.atualizarCurso = async function(nomeCurso, codigoCurso) {
    if (nomeCurso !== null) {
        const resposta = await db.query (
            `UPDATE Curso SET nomeCurso = ${nomeCurso}`
        )
        return true
    } else {
        const resposta = await db.query (
            `UPDATE Curso SET codigoCurso = ${codigoCurso}`
        )
        return true
    }
}