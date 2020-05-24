const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Crear esquema y modelo usuario
const RoutineSchema = new Schema({
    /*
    activo: {
        type: String,
        required: [true, 'Campo activo es requerido']
    },
    frecuencia: {
        type: String,
        required: [true, 'Campo frecuencia de rutina es requerido']
    },
    responsable: {
        type: String,
        required: [true, 'Campo responsable de rutina es requerido']
    },
    estado: {
        type: String, 
        default: "Creada"
    },
    email_reporte: {
        type: String,
        required: [true, 'Campo cuenta email de supervisor es requerido']
    }
    */
    fecha: {
        type: Date,
        required: true
    },
    ejecutor: {
        type: String,
        required: false
    },
    supervisor: {
        type: String,
        required: false
    },
    espacio_vip: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true,
        default: "Creada"
    },
    espacio_local: {
        type: String,
        required: true
    },
    espacio_banio: {
        type: String,
        required: true
    },
    espacio_parq: {
        type: String,
        required: true
    },
    espacio_fach: {
        type: String,
        required: true
    },
    espacio_pant: {
        type: String,
        required: true
    },
    espacio_rci: {
        type: String,
        required: true
    },
    observaciones: {
        type: String,
        required: false
    },
    recinto: {
        type: String,
        required: true
    }
});

const Routine = mongoose.model('routine', RoutineSchema);

module.exports = Routine;