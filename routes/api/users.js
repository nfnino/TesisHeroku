const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validatePassChange = require("../../validation/password");
// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          documento: req.body.documento,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name,
            documento: user.documento,
            email: user.email,
            role: user.role,
            password: user.password
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  router.get("/users", async (req,res) => {
    const users = await User.find({});
    res.status(200).json({
     data: users
    });
  })

  router.get("/users/:id", async (req,res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) return next(new Error('No existe el usuario'));
      res.status(200).json({
          data: user
      });
    } catch (error) {
        next(error)
    }
  })

  router.put("/profile", (req, res) => {
    const { errors, isValid } = validatePassChange(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const oldPass = req.body.oldPass;
    const id = req.body.id;
    // Find user by email
    console.log("----------------------- route/users/profile/update ---------------------")
    console.log(req.body)
    User.findById(id).then(user => {
    // Check if user exists
      console.log(user)
      if (!user) {
        return res.status(404).json({ emailnotfound: "Usuario no valido [code err]" });
      }
      // Check password
      console.log("va a entrar a bycrypt")
      bcrypt.compare(oldPass, user.password).then(isMatch => {
        if (isMatch) {
          console.log("entra a ismatch")
          // User matched
          // Create JWT Payload
          const update = req.body
          console.log(update)
          // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(update.newPass, salt, async (err, hash) => {
              if (err) throw err;
              update.newPass = hash;
              try {
                const u = {password: update.newPass}
                console.log(u)
                let user = await User.findByIdAndUpdate(id, u)
                res.status(200).json({
                  data: user,
                  message: "Ha actualizado su contraseña"
                })
              } catch (error) {
                  next(error)
              }
            });
          });
        } else {
          return res
            .status(400).json({ passwordIncorrect: "Contraseña incorrecta" });
        }
      })
    })
  })

  router.delete("/users/:id", async (req, res, next) => {
    try {
      const id = req.params.id
      await User.findByIdAndDelete(id);
      const user = await User.findById(userId)
      if (user===null){
        res.status(200).json({
          message: 'Se ha eliminado el usuario'
        });
      } 
    } catch (error) {
      next(error)
    }
  })

  module.exports = router;