# Usar una imagen oficial de Node.js como base
FROM node:16

# Definir el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias del proyecto (incluyendo dependencias de desarrollo)
RUN npm install --legacy-peer-deps

# Copiar el código de la aplicación dentro del contenedor
COPY src/ /app/src/

# Exponer el puerto en el que la aplicación escuchará (puerto HTTP)
EXPOSE 3000

# Definir el comando para iniciar la aplicación
CMD ["npx", "nodemon", "src/index.js"]
