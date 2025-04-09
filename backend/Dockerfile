# Usa una imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente de tu aplicación al contenedor
COPY . .

# Expone el puerto que tu aplicación usará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
