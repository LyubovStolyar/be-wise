const database = require('./database');

module.exports = {
    getLecturers: async function (req, res, next) {
        const sql = `SELECT * FROM lecturers;` // ORDER BY name ASC;`;
        console.log(sql);
        try {
            const result = await database.query(sql);
            res.json(result[0]);
        }
        catch (err) {
            console.log(err);
            res.json(err);
        }
    }

    
}