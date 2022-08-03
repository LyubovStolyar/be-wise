const path = require('path');
const fs = require('fs');
const database = require('../controllers/database');

module.exports = {
    getHtmlFilePath: function (htmlFileName) {
        return path.join(__dirname, '../client', htmlFileName);
    },

    exportToFile: async function (res, sql, filePrefix) {
        try {
            const result = await database.query(sql);

            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Content-disposition', 'attachment; filename=courses.txt');
            res.send(result[0]);

        }
        catch (err) {
            res.status(400).send('Error');
            // throw err;
        }
    },
}