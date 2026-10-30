# Chat con Node.js

Es un chat pequeño para mandar mensajes entre varias pestañas o computadoras. Usa Node.js, Express y Socket.IO.

## Correrlo

Necesitas Node.js y npm.

```sh
npm install
npm start
```

Abre <http://localhost:3000> en dos pestañas y manda un mensaje desde una. Debe aparecer en las dos.

## Cómo funciona

- `server.js` inicia el servidor y recibe los mensajes con Socket.IO.
- `public/index.html` muestra el chat y envía mensajes al servidor.
- El servidor reenvía cada mensaje a todos los clientes conectados.

Los mensajes no se guardan: al cerrar el servidor, se borran.

## Subirlo a Heroku

El servidor usa el puerto que Heroku asigna en `PORT`.

1. Sube esta carpeta a un repositorio de GitHub.
2. Instala Heroku CLI e inicia sesión con `heroku login`.
3. Desde esta carpeta, crea la app con `heroku create nombre-unico`.
4. Sube el proyecto con `git push heroku main`.
5. Ábrelo con `heroku open`.

## Videos de apoyo

- [WebSockets: qué son](https://www.youtube.com/watch?v=vQjiN8Qgs3c)
- [WebSockets con Socket.IO](https://www.youtube.com/watch?v=UwS3wJoi7fY)

## Enlaces de entrega

- Código en GitHub: pendiente.
- Aplicación en Heroku: pendiente.
