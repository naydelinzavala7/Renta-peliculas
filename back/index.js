const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
const { getFirestore, collection, setDoc, getDoc, doc, deleteDoc, updateDoc, getDocs, } = require('firebase/firestore')
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
app.post('/insertar', (req, res) => {
    const { name, lastname, email, password, numtarjeta, fechavenc, codigoseg } = req.body
    if(!name || !lastname || !email || !password || !numtarjeta || !fechavenc || !codigoseg ) {
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
            'alert': 'La contraseña debe tener como minimo 8 caracteres'
        })
    } else if (numtarjeta.length < 16 || numtarjeta.length > 16 ){
        res.json({
            'alert': 'La tarjeta debe tener 16 caracteres'
        })
    } else if (fechavenc.length < 5 || fechavenc.length > 5){
        res.json({
            'alert': 'La fecha debe tener 5 caracteres'
        })
    } else if (codigoseg.length < 4 || codigoseg.length > 4 ){
        res.json({
            'alert': 'el codigo debe tener 4 caracteres'
        })
    }
    else {
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
                            password: hash,
                            numtarjeta,
                            fechavenc,
                            codigoseg
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
app.post('/login', (req,res) =>{
    const{ email, password } = req.body
    
    if ( !email || !password ){
        res.json({ 'alert': 'Faltan Datos' })
    }

    const usuarios = collection(db, 'usuarios')
    getDoc(doc(usuarios, email))
    .then((usuario) => {
        if(!usuario.exists()){
            return res.status(400).json({ 
                'alert': 'Correo no registrado'
            })
        } else {
            bcrypt.compare(password, usuario.data().password, (error, result) => {
                if( result ){
                    //Paara reegresar datos
                    let data = usuario.data()    
                    res.json({
                        'alert': 'success',
                        name: data.name,
                        lastname: data.lastname,
                        numtarjeta: data.numtarjeta,
                        fechavenc:  data.fechavenc,
                        codigoseg: data.codigoseg

                    })
                } else {
                    res.json({ 'alert': 'Contraseña Incorrecta '})
                }
            })
        }
    })
}) 
//Ruta para el logout usuarios
function logout(){
  firebase.auth().signOut();
}
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
    const { name, lastname, email } = req.body
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
    } else {
        //Obtener el doc del usuario 
        //db.collection('alumnos').doc(email)
        const dataUpdate = {
            name,
            lastname 
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


//Ruta insertar registro de peliculas
app.post('/insertarpeliculas', (req, res) => {
    const { namepel, idioma, director, duracion, sinopsis } = req.body
    
    if(!namepel || !idioma || !director || !duracion || !sinopsis ) {
        res.json({
            'alert': 'Faltan Datos Para Insertar una pelicula'
        })
        return
    }
    //Validaciones
    if(namepel.length < 2) {
        res.json({
            'alert': 'El nombre requiere minimo 2 caracteres'
        })
    } else if (idioma.length < 3 ){
        res.json({
            'alert': 'El idioma requiere minimo 3 caracteres'
        })
    } else if (director.length < 2) {
        res.json({
            'alert': 'Debes insertar si la pelicula tiene subtitulos'
        })
    } else if (duracion.length < 5){
        res.json({
            'alert': 'Indica una duracion valida'
        })
    } else if (sinopsis.length < 20){
        res.json({
            'alert': 'La sinopsis es muy corta'
        })
    } else {
        const peliculas = collection(db, "peliculas")

        getDoc(doc(peliculas, namepel)).then(pelicula => {
            if(pelicula.exists()) {
                res.json({
                    'alert': 'La pelicula ya existe en la BD'
                })
            } else {
                sendData = {
                    namepel,
                    idioma,
                    director, 
                    duracion,
                    sinopsis
                }
                setDoc(doc(peliculas, namepel), sendData).then(() =>{
                    res.json({
                        'alert': 'succes'
                    })
                }).catch((error) =>{
                    res.json({
                        'alert': 'error'
                    })
                })
            }
        })
    }
})
//Ruta para mostrar todas las peliculas
app.get('/todaslaspeliculas', async(req, res) => {
    const peliculas = collection(db, "peliculas")
    const arreglo = await getDocs(peliculas)
    let returnData = []
    arreglo.forEach(pelicula => {
        returnData.push(pelicula.data())
    })
    res.json({
        'alert': 'succes',
        'data': returnData
    })
})
//Ruta para eliminar alguna pelicula
app.post('/eliminarpelicula', (req,res) =>{
    const {namepel} = req.body
    console.log('namepel', namepel)
    let peliculaBorrado = doc(db, "peliculas", namepel)
    console.log('alumno', peliculaBorrado, namepel)
    deleteDoc(peliculaBorrado)
    res.json({ 
        'alert': 'succes'
    })
})
//Ruta para actualizar una pelicula
app.post('/actualizarpelicula', (req,res) => {
    const { namepel, idioma, subtitulos, duracion, sinopsis } = req.body
    if(namepel.length < 2){
        res.json({
            'alert': 'El nombre requiere minimo 2 caracteres'
        })
    } else if (idioma.length < 3){
        res.json({
            'alert': 'El idioma requiere minimo 3 caracteres'
        })
    } else if (director.length < 2){
        res.json({
            'alert': 'Debes insertar si la pelicula tiene subtitulos'
        })     
    } else if (duracion.length < 5) {
        res.json({
            'alert': 'Debes insertar una duracion valida'
        })
    }else if (sinopsis.length < 20) {
        res.json({
            'alert': 'La sinopsis es muy corta'
        })
    }
    else {
        const dataUpdate = {
            idioma,
            director,
            duracion,
            sinopsis 
        }
        updateDoc(doc(db, "peliculas", namepel), dataUpdate)
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

const PORT = process.env.PORT || 12000

app.listen(PORT, () => {
    console.log(`Escuchando Puerto: ${PORT}`)//poner las comillas inversas 
})
