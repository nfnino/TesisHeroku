const express = require("express");
const router = express.Router();

const Asset = require("../../models/Asset");

router.get("/assets", async (req,res) => {
    const assets = await Asset.find({});
    res.status(200).json({
     data: assets
    });
})

router.get("/assets/:id", async (req, res, next) => {
  try{
    const id = req.params.id
    const asset = await Asset.findById(id)
    console.log(asset)
    if(!asset) return next(new Error("No existe el activo"));
    res.status(200).json({
      data: asset
    })
  } catch (error){
    next(error)
  }
})

router.post("/newAsset", async (req, res) => {
    Asset.findOne({desc: req.body.nombre}).then(asset => {
        console.log(asset)
        if(asset) {
            return res.status(400).json({ nombre: "Nombre ya existe" });
        } else {
            const newAsset = new Asset({
                recinto: req.body.recinto,
                ubicacion: req.body.ubicacion,
                categoria: req.body.categoria,
                nombre: req.body.nombre,
                fecha_compra: req.body.fecha_compra,
                valor: req.body.valor,
                dias_garantia: req.body.dias_garantia,
                fecha_fin_garantia: req.body.fecha_fin_garantia,
                imagen1: req.body.imagen1,
                imagen2: req.body.imagen2,
                imagen3: req.body.imagen3,
                imagen4: req.body.imagen4,
                imagen5: req.body.imagen5,
                manual: req.body.manual,
                cod_qr: req.body.cod_qr,
                dias_frec_mant_preventivo: req.body.dias_frec_mant_preventivo,
                estado: req.body.estado,
                observacion: req.body.observacion
              });
              console.log(newAsset)
        newAsset
        .save()
        .then(asset => res.json(asset))
        }
    })
})

router.put("/assets/:id/:estado", async (req, res, next) => {
  const id = req.params.id
  const update = req.params.estado
  const u = update+""
  Asset.findById(id).then(asset => {
    if(!asset) {
      return res.status(404).json({assetnotfound: "Activo no existe"})
    }
  })
  try {
    let asset = await Asset.findByIdAndUpdate(id, {estado: u})
    console.log("asset en router: ", asset)
    res.status(200).json({
      data: asset,
      message: "Ha actualizado el activo"
    })
  } catch (error) {
    next(error)
  }
})

router.delete("/assets/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        await Asset.findByIdAndDelete(id);
        const asset = await Asset.findById(assetId)
        if (asset===null){
          res.status(200).json({
            message: 'Se ha eliminado el usuario'
          });
        } 
      } catch (error) {
        next(error)
      }
})

module.exports = router;