// const express = require("express");
// const sql = require('mssql');
// const config = require('./config');
// const app = express();

// const PORT = process.env.PORT || 3000;

// const db = new sql.ConnectionPool(config);
// db.connect().then(() => {
//     console.log("Database Connected");
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
// }).catch(err => {
//     console.error('Error connecting to database:', err);
// });

// app.get("/", async (req, res) => {
//     try {
//         const request = new sql.Request(db);
//         const result = await request.query("select * from tbl_users");
//         res.json({ msg: "hfhh", data: result.recordset });
//     } catch (err) {
//         console.error('Error querying database:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
//     //   res.send('hello world');


// });




const express = require('express');
const getUserRoutes = require('./route/getuser'); // Change the path here to point to the correct location

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the getUserRoutes for '/get' endpoint
app.use('/get', getUserRoutes);

// Define the port for the server to listen on
const PORT = process.env.PORT || 7000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Export the app for potential testing purposes
module.exports = app;

