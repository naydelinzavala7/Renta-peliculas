const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
const { getFirestore, collection, setDoc, getDoc, doc, deleteDoc, updateDoc} = require('firebase/firestore')
const { initializeApp } = require ('firebase/app')

// Aqui va firebase

require('dotenv/config')

// Configuracion de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAxp8fT2A1fsfJgWFAxWSCWlPubrF9E2_k",
    authDomain: "filmworld-11963.firebaseapp.com",
    projectId: "filmworld-11963",
    storageBucket: "filmworld-11963.appspot.com",
    messagingSenderId: "301438865421",
    appId: "1:301438865421:web:fbbd817d6fbe738f018544"
  };
// Inicializacion de DB en Firebase
const firebase = initializeApp(firebaseConfig)
const db = getFirestore()
// Inicializamos el servidor
const app = express()

// Opciones de CORS
const corsOptions = {
    "origin": "*",
    "optionSuccessStatus" : 200
}
//Configuracion  del Servidor
app.use(express.json())
app.use(cors(corsOptions))

//USUARIOS-----------------------------------------------------------------------------------------------------
//Ruta insertar registro de usuarios
app.post('/insertarusuarios', (req, res) => {
    const { name, lastname, email, password } = req.body
    if(!name || !lastname || !email || !password ) {
        res.json({
            'alert': 'Faltan Datos'
        })
        return
    }
    //Validaciones
    if(name.length < 3) {
        res.json({
            'alert': 'El nombre requiere minimo 3 caracteres'
        })
    } else if (lastname.length < 3 ){
        res.json({
            'alert': 'El nombre requiere minimo 3 caracteres'
        })
    } else if (!email.length) {
        res.json({
            'alert': 'Debes insertar un correo electronico'
        })
    } else if (password.length < 8){
        res.json({
            'alert': 'La contraseña debe tener como inimo 8 caracteres'
        })
    } else {
        const usuarios = collection(db, "usuarios")
        getDoc(doc(usuarios, email)).then(usuario => {
            if(usuario.exists()) {
                res.json({
                    'alert': 'El correo ya existe en la BD'
                })
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, (err, hash) => {
                        sendData = {
                            name,
                            lastname,
                            email,
                            password: hash
                        }
                        //Guardar en la base de datos
                        setDoc(doc(usuarios, email), sendData).then(() => {
                            res.json({
                                'alert': 'succes'
                            })
                        }).catch((error) => {
                            res.json({
                                'alert': error
                            })
                        })
                    })
                })
            }
        })
    }

})
//Ruta para el login usuarios
app.post('/loginusuarios', (req,res) =>{
    const{ email, password } = req.body
    
    if ( !email || !password ){
        res.json({ 'alert': 'Faltan Datos' })
    }

    const usuarios = collection(db, 'usuarios')
    getDoc(doc(usuarios, email))
    .then((usuario) => {
        if(!usuario.exists()){
            res.json({ 'alert': 'Correo no registrado'})
        } else {
            bcrypt.compare(password, usuario.data().password, (errror, result) => {
                if( result ){
                    //Paara reegresar datos
                    let data = usuario.data()    
                    res.json({
                        'alert': 'success',
                        name: data.name,
                        lastname: data.lastname
                    })
                } else {
                    res.json({ 'alert': 'Contraseña Incorrecta '})
                }
            })
        }
    })
}) 
//Ruta para eliminar un usuario
app.post('/eliminarusuario', (req,res) =>{
    const {email} = req.body
    console.log('email', email)
    let usuarioBorrado = doc(db, "usuarios", email)
    console.log('usuario', usuarioBorrado, email)
    deleteDoc(usuarioBorrado)
    res.json({
        'alert': 'succes'
    })
})
//Ruta para editar datos de un usuario
app.post('/actualizarusuario', (req,res) => {
    const { name, email, lastname, password } = req.body
    if(name.length < 3){
        res.json({
            'alert': 'El nombre requiere minimo 3 caracteres'
        })
    } else if (lastname.length < 3){
        res.json({
            'alert': 'El apellido requiere minimo 3 caracteres'
        })
    } else if (!email.length){
        res.json({
            'alert': 'Debes ingresar un correo electronico'
        })     
    } else if (password.length < 8) {
        res.json({
            'alert': 'Introduce una contraseña valida'
        })
    } else {
        //Obtener el doc del usuario 
        //db.collection('alumnos').doc(email)
        const dataUpdate = {
            name,
            lastname,
            password   
        }
        updateDoc(doc(db, "usuarios", email), dataUpdate)
        .then((response) =>{
            res.json({
                'alert': 'succes'
            })
        })
        .catch((error)=>{
            res.json({
                'alert': error
            })
        })
    }

})

//EDITAR--------------------------------------------------------------------------------------------------------
//Ruta insertar registro de peliculas
app.post('/insertarpeliculas', (req, res) => {
    const { namep, synopsis, genre, director, actors } = req.body
    if(!namep || !synopsis || !genre || !director || !actors ) {
        res.json({
            'alert': 'Faltan Datos'
        })
        return
    }
 
        const peliculas = collection(db, "peliculas")
        getDoc(doc(peliculas, namep)).then(pelicula => {
            if(pelicula.exists()) {
                res.json({
                    'alert': 'Ya existe la pelicula'
                })
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                        sendData = {
                            namep,
                            synopsis,
                            genre,
                            director,
                            actors
                        }
                        //Guardar en la base de datos
                        setDoc(doc(peliculas, namep), sendData).then(() => {
                            res.json({
                                'alert': 'succes'
                            })
                        }).catch((error) => {
                            res.json({
                                'alert': error
                            })
                        })
                })
            }
        })
    

})
//--------------------------------------------------------------------------------------------------------------

const PORT = process.env.PORT || 12000

app.listen(PORT, () => {
    console.log(`Escuchando Puerto: ${PORT}`)//poner las comillas inversas 
})
