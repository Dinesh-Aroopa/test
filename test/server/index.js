const express = require("express");
const app =express();
const cors = require('cors');
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//CREATE A TODO
app.post("/testadd", async (req, res) =>{
    try {
        //const {stage, title} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO test (stage, title) VALUES($1, $2) RETURNING *", 
            [req.query.stage,req.query.title]
        );

        console.log(req.query);
        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//GET ALL TODOS
app.get("/test", async (req, res) =>{
    try {
        const allTodo = await pool.query(
            "SELECT * FROM test"
        );

        res.json(allTodo.rows)
    } catch (err) {
        console.error(err.message)
    }
});

//GET A TODOS
app.get("/test/:id", async (req, res) =>{
    try {
        const { id } = req.params;
        const todo = await pool.query(
            "SELECT * from test where id = $1",[id]
        );

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// UPDATE A TODO
app.put("/test/:id", async (req, res) =>{
    try {
        const { id } = req.params;
        const { stage, title} = req.body;
        
        const todo = await pool.query(
            "UPDATE test SET stage = $2, title=$3 WHERE id = $1",
            [id, stage, title]
        );

        res.json("Todo was updated!!!");
    } catch (err) {
        console.error(err.message)
    }
})

//DELETE A TODO
app.delete("/test/:id", async (req, res) =>{
    try {
        const { id } = req.params;
        const todo = await pool.query(
            "DELETE FROM test where id = $1",[id]
        );

        res.json("Todo was deleted!!!");
    } catch (err) {
        console.error(err.message)
    }
});

app.listen(4001, () => {
    console.log("Server has started on port 4001");
});