#get base image
FROM node:20-alpine
#create container directory
WORKDIR /app
#copy the package.json file over to the container
COPY package*.json ./
#run the command to install dependencies(buildtime)
RUN npm install
#copy the code over to the container
COPY . .
#have the output port of the container as 3000
EXPOSE 3000
#run the command to start application(runtime)
CMD [ "npm", "run","dev" ]
