"use strict"


//*************************Propiedades*************************
console.log("AppCodeName: ",navigator.appCodeName);                      console.log("")
//En teoria devuelve el nombre del navegador
console.log("AppName: ",navigator.appName);                      console.log("")
//En teoria nos devuelve el nombre OFICIAL del navegador
console.log("AppVersion: ",navigator.appVersion);                      console.log("")
//en teoria nos devuelve la version del navegador
console.log("Connection: ",navigator.connection);                      console.log("")
//nos devuelve si el navegador esta conectado o no. 
//el NetworkInformation, nos devuelve toda la informacion de la coneccion
console.log("Geolocation: ",navigator.geolocation);                      console.log("")
//nos devuelve el objeto geolocation, que nos devuelve la posicion en que nos encontramos
console.log("HardwareConcurrency: ",navigator.hardwareConcurrency);                      console.log("")
//nos devuelve la cantidad de nucleos del procesador logico que hay disponible
console.log("Language: ",navigator.language);                      console.log("")
//nos devuelve el idioma que eligio el usuario
console.log("Languages: ",navigator.languages);                      console.log("")
//nos devuelve un arreglo con la cantidad de idiomas que comprende.
console.log("MimeTypes: ",navigator.mimeTypes);                      console.log("")
//nos devulve los mimetypes que son aceptados en el navegador
console.log("Online: ",navigator.onLine);                      console.log("")
//es una propiedad que nos devuelve si estamos online o no
console.log("UserAgent: ",navigator.userAgent);                      console.log("")
//en teoria, nos devuelve la informacion acerca del navegador,
console.log("CookiesEnabled: ",navigator.cookieEnabled);                      console.log("")
//significa que tenemos las cookies actividadas
console.log("Permissions: ",navigator.permissions);                      console.log("")
//es un objeto que nos permite acceder a cada uno de los permisos del navegador
console.log("Plataform: ",navigator.platform);                      console.log("")
//nos señala el tipo de plataforma en la que estamos
console.log("Plugins: ",navigator.plugins);                      console.log("")
//es un array que nos devuelve todos los plugins que tenemos instalados en el navegador 
console.log("Product: ",navigator.product);                      console.log("")
//nos muestra, gecko que se usa por problema de compatibilidad.
console.log("ServiceWorkers: ",navigator.serviceWorker);                      console.log("")
//el serviceWorker, es un worker que trabaja en paralelo pero distinta de los webWorkers. Tiene varias caracteristicas

//*************************metodos*************************

navigator.registerContentHandler()
//Este metodo lo que hace es que permite a los webSite registrarse como posibles controlados de un type MIME determinado
navigator.registerProtocolHandler()
//Este metodo lo que hace es que permite a los webSite registrarse como posibles controlados de un protocolo determinado
navigator.requestMediaKeySystemAccess()
//Este metodo lo que hace es que devuelve una promesa para un objeto que es mediaKeySystemAcces
navigator.sendBeacon()
//Este metodo lo que hace es que se para transferir de forma asincrona conjunto pequeño de datos HTTP del agente usuario al servidor
navigator.javaEnabled()
//Este metodo lo que hace es que nos devuelve si el navegador tiene java habilitado o no
navigator.vibrate()
//Este metodo lo que hace es que causa una vibracion en el sistema. No hace nada si el soporte para vibracion no esta disponible
