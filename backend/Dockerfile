#get the base image
FROM node:20-alpine 
#create the directory inside the container and go to that directory 
WORKDIR /app 
#copy the package json file from current directory to the container directory(remember we are in /app directory)
COPY package*.json ./     
#run the command inside the container during build time
RUN npm install 
#copy code from current directory(local) to directory inside container(/app)
COPY . .
#have the output port of the container at 5050
EXPOSE 5050
#run the command to start application(runtime)
CMD [ "npm" ,"start"]

