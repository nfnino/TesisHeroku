const express = require("express");
const router = express.Router();

const Routine = require("../../models/Routine");

router.get("/routines", async (req,res) => {
    const routines = await Routine.find({});
    res.status(200).json({
     data: routines
    });
})

router.post("/newRoutine", async (req, res) => {
    Routine.findOne({ejecutor: req.body.ejecutor}).then(routine => {
        console.log(routine)
        if(routine) {
            return res.status(400).json({ desc: "Ejecutor ya tiene una rutina asignada" });
        } else {
            const newRoutine = new Routine({
                fecha: req.body.fecha,
                ejecutor: req.body.ejecutor,
                supervisor: req.body.supervisor,
                espacio_vip: req.body.espacio_vip,
                espacio_local: req.body.espacio_local,
                espacio_banio: req.body.espacio_banio,
                espacio_parq: req.body.espacio_parq,
                espacio_fach: req.body.espacio_fach,
                espacio_pant: req.body.espacio_pant,
                espacio_rci: req.body.espacio_rci,
                estado: req.body.estado,
                observaciones: req.body.email_reporte,
                recinto: req.body.recinto
              });
              console.log(newRoutine)
        newRoutine
        .save()
        .then(routine => res.json(routine))
        }
    })
})

router.put("/routines/:id", (req, res) => {

})

module.exports = router;