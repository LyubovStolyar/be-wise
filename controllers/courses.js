const database = require('./database');
const fileMgmt = require('../shared/fileMgmt');

module.exports = {
    getCourses: async function (req, res, next) {
        let sql = `SELECT * FROM courses`;
        
        
       
if (req.query.filter && req.query.filter != 'All') {
    sql += ` WHERE category='${req.query.filter}'`
}

if (req.query.column && req.query.sort){
    sql += " ORDER BY " + req.query.column + " " + req.query.sort ;
    }
        sql += ";";
        
        console.log(sql)
        try {
            const result = await database.query(sql);
            res.json(result[0]);
        }
        catch (err) {
            console.log(err);
            res.json(err);
        }

       
    },

    getFile: async function (req, res, next) {
        const sql = "SELECT * FROM courses";
        fileMgmt.exportToFile(res, sql, 'courses');
    }

    
}