const database = require('./database');

module.exports = {
    getCourses: async function (req, res, next) {
        const sql = `SELECT * FROM courses;` // ORDER BY name ASC;`;
        console.log(sql)
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