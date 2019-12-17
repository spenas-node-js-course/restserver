//======================000
//puert
//
process.env.PORT = process.env.PORT || 3000;


//Enytorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//vencimiento del token
//60 seg
//60 min
//24h
//30 d

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//seed de autenticacion

process.env.SEED = process.env.SEED || 'secreto'

//base de datos

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'

} else {
    urlDB = process.env.MONGO_URI

}

process.env.URLBD = urlDB;

//google client id

process.env.CLIENT_ID = process.env.CLIENT_ID || '552918037000-i6th3kpgars6dhlejimbi8fg36c3bccn.apps.googleusercontent.com'