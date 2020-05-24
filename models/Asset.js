const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssetSchema = new Schema ({

    recinto: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    fecha_compra: {
        type: Date,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    dias_garantia: {
        type: Number,
        required: true
    },
    fecha_fin_garantia: {
        type: Date,
        required: true
    },
    imagen1: {
        type: String,
        required: true
    },
    imagen2: {
        type: String,
        required: false
    },
    imagen3: {
        type: String,
        required: false
    },
    imagen4: {
        type: String,
        required: false
    },
    imagen5: {
        type: String,
        required: false
    },
    manual: {
        type: String,
        required: false
    },
    cod_qr: {
        type: String,
        required: true
    },
    dias_frec_mant_preventivo: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true,
        default: "Creado"
    },
    observacion: {
        type: String,
        required: true
    }
});

module.exports = Asset = mongoose.model("asset", AssetSchema);