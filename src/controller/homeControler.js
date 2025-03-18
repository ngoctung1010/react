import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

const saltRounds = 10;

let connection;

const initializeDatabaseConnection = async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'node-test',
    });
};

initializeDatabaseConnection();

const home1 = (req, res) => {
    return res.render("home.ejs");
}

const home2 = (req, res) => {
    return res.render("user.ejs");
}

const home3 = async (req, res) => {
    let email = req.body['email-name'];
    let pass = req.body.pass;
    let userName = req.body.username;

    const hashedPassword = await bcrypt.hash(pass, saltRounds);
    console.log(hashedPassword);

    try {
        const [results, fields] = await connection.query(
            'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
            [email, hashedPassword, userName]
        );
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
        console.log(err);
    }

    console.log(req.body);
    res.send(JSON.stringify(req.body));
}

module.exports = {
    home1, home2, home3
}