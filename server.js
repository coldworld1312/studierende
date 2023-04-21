
//Express initialisierung
const express = require("express");
const app= express();
app.use(express.urlencoded({extended:true}));

//initialisierung body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))

//initialisierung ejs
app.engine("ejs",require("ejs").__express);
app.set("view engine","ejs");

//Initialisierung datenbank
const DATABASE="studierende.db";
const db= require("better-sqlite3")(DATABASE);

//server starten
app.listen(6664,function(){
    console.log("listenin on 666");
});


//home
app.get("/home",function(req,res){
    res.render("home")
})

//Studenten anzeigen
app.post("/showstudents",function(req,res){
    const rows=db.prepare("SELECT * FROM students").all();
    console.log(rows);
    res.render("studierende", { studis: rows });
    //res.render("students",{studierende: rows});

});

//Studis hinzufügen
app.post("/addstudent",function(req,res){
 
    res.render("addstudi");
   

});

//studen hinzugefügt
app.post('/studentadded', function(req, res) {
    // Extrahiere Daten aus dem POST Request Body
    const vorname = req.body.vorname;
    const nachname = req.body.Nachname;
    const name = `${vorname} ${nachname}`
    const email = req.body.mail;
    const semester = req.body.semester;

    //const sql = `INSERT INTO students(name, email,semester) VALUES ('${vorname} ${nachname}', '${email}',${semester})`;
    //db.prepare(sql) 
    /*
    const sql = `INSERT INTO students (name, email,semester) VALUES ('${vorname} ${nachname}', '${email}',${semester})`;
    db.run(sql, [vorname, nachname, email]);
    */

    const info = db.prepare(`INSERT INTO students(name,email,semester)
    VALUES (?,?,?)`).run(name,email,parseInt(semester));


    const rows=db.prepare("SELECT * FROM students").all();
    console.log(rows);
    res.render("list", { studis: rows });   
        
   
});