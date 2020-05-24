const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.documento = !isEmpty(data.documento) ? data.documento : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.role= !isEmpty(data.role) ? data.role : "";
// Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Campo nombre es necesario";
  }
// Document checks
  if (Validator.isEmpty(data.documento)) {
    errors.documento = "Campo documento de identidad es necesario";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Campo email es necesario";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Este email no es válido";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Campo contraseña es necesario";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Campo confirmar contraseña es necesario";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Las contraseñas deben ser iguales";
  }
// Role checks
if (Validator.isEmpty(data.role)) {
    errors.role = "Campo de rol es necesario";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};