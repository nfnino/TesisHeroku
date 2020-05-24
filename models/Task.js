const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Crear esquema y modelo de la tarea
const TaskSchema = new Schema({
    /*
    activo: {
        type: String,
        required: [true, 'El campo activo es requerido']
    },
    start_date: {
        type: String,
        required: [true, 'El campo fecha de inicio es requerido']
    },
    end_date: {
        type: String,
        required: [true, 'El campo fecha final es requerido']
    },
    tipo_mant: {
        type: String, 
        required: [true, 'El campo tipo de mantenimiento es requerido']
    },
    desc: {
        type: String, 
        required: [true, 'El campo descripción tareas es requerido']
    },
    ruta_imag: {
        type: String, 
        required: [false]
    },
    tipo_responsable: {
        type: String, 
        required: [true, 'El campo tipo de responsable es requerido']
    },
    responsable: {
        type: String, 
        required: [false, 'El campo responsable es requerido']
    },
    estado: {
        type: String,
        default: "Creada"
    }
    */
    activo: {
        type: String,
        required: [true, 'El campo activo es requerido']
    },
    tipo_mant: {
        type: String, 
        required: [true, 'El campo tipo de mantenimiento es requerido']
    },
    fecha_inicial_tent: {
        type: String,
        required: [true, 'El campo fecha de inicio es requerido']
    },
    fecha_final_tent: {
        type: String,
        required: [true, 'El campo fecha final es requerido']
    },
    imagen1_antes_mant: {
        type: String,
        required: false
    },
    imagen2_antes_mant: {
        type: String,
        required: false,
        default: ""
    },
    imagen3_antes_mant: {
        type: String,
        required: false,
        default: ""
    },
    imagen4_antes_mant: {
        type: String,
        required: false,
        default: ""
    },
    imagen5_antes_mant: {
        type: String,
        required: false,
        default: ""
    },
    desc_falla: {
        type: String,
        required: true
    },
    email_compras: {
        type: String,
        required: false,
        default: ""
    },
    desc_materiales_compras: {
        type: String,
        required: false,
        default: ""
    },
    ejecutor_interno: {
        type: String,
        required: false
    },
    supervisor: {
        type: String,
        required: false
    },
    nit_empresa_externa: {
        type: String,
        required: false
    },
    nombre_empresa_externa: {
        type: String,
        required: false
    },
    doc_orden_compra: {
        type: String,
        required: false
    },
    valor_externo: {
        type: Number,
        required: false
    },
    fecha_inicial_real: {
        type: String,
        required: false,
        default: ""
    },
    fecha_final_real: {
        type: String,
        required: false,
        default: ""
    },
    estado: {
        type: String,
        required: true,
        default: "Creada"
    }

});
const Task = mongoose.model('task', TaskSchema);

module.exports = Task;