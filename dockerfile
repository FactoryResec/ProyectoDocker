# Utilizar una imagen base oficial de Node.js
FROM node:16

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código de la aplicación al directorio de trabajo
COPY . .

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
