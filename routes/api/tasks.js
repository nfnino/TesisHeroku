const express = require("express");
const router = express.Router();

const Task = require("../../models/Task");

router.get("/tasks", async (req,res) => {
    const tasks = await Task.find({});
    res.status(200).json({
     data: tasks
    });
})

router.get("/tasks/:id", async (req, res, next) => {
    try{
      const id = req.params.id
      const task = await Task.findById(id)
      console.log(asset)
      if(!task) return next(new Error("No existe la tarea"));
      res.status(200).json({
        data: task
      })
    } catch (error){
      next(error)
    }
  })

router.post("/newTask", async (req, res) => {
    Task.findOne({desc_falla: req.body.desc_falla}).then(task => {
        console.log(task)
        if(task) {
            return res.status(400).json({ desc: "Esta tarea ya existe" });
        } else {
            const newTask = new Task({
                activo: req.body.activo,
                tipo_mant: req.body.tipo_mant,
                fecha_inicial_tent: req.body.fecha_inicial_tent,
                fecha_final_tent: req.body.fecha_final_tent,
                imagen1_antes_mant: req.body.imagen1_antes_mant,
                imagen2_antes_mant: req.body.imagen2_antes_mant,
                imagen3_antes_mant: req.body.imagen3_antes_mant,
                imagen4_antes_mant: req.body.imagen4_antes_mant,
                imagen5_antes_mant: req.body.imagen5_antes_mant,
                desc_falla: req.body.desc_falla,
                email_compras: req.body.email_compras,
                desc_materiales_compras: req.body.desc_materiales_compras,
                ejecutor_interno: req.body.ejecutor_interno,
                supervisor: req.body.supervisor,
                nit_empresa_externa: req.body.nit_empresa_externa,
                doc_orden_compra: req.body.doc_orden_compra,
                valor_externo: req.body.valor_externo,
                fecha_inicial_real: req.body.fecha_inicial_real,
                fecha_final_real: req.body.fecha_final_real,
                estado: req.body.estado,
              });
              console.log(newTask)
        newTask
        .save()
        .then(task => res.json(task))
        }
    })
})

router.put("/tasks/:id", (req, res) => {

})

module.exports = router;