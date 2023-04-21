/*tabelle erzeugen*/
CREATE TABLE students(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    semester INT
);

/*datensätze hinzufügen*/
INSERT INTO students(name,email,semester)VALUES("Lion","lion@lion.de",1);



