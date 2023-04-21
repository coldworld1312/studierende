
//Express initialisierung
const express = require("express");
const app= express();
app.use(express.urlencoded({extended:true}));

//initialisierung ejs
app.engine("ejs",require("ejs").__express);
app.set("view engine","ejs");

//Initialisierung datenbank
const DATABASE="studierende.db";
const db= require("better-sqlite3")(DATABASE);

//server starten
app.listen(666,function(){
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