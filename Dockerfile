# Use a Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for all services
COPY package*.json ./

# Install dependencies

RUN npm install

# Copy the application code from the respective directories
COPY ./orders ./orders
COPY ./products ./products
COPY ./user ./user

# Build the applications (if applicable)
RUN npm install rimraf --prefix ./orders
RUN npm install rimraf --prefix ./products
RUN npm install rimraf --prefix ./user
RUN npm run build --prefix ./orders
RUN npm run build --prefix ./products
RUN npm run build --prefix ./user

# Expose the ports for each application
EXPOSE 3000 3100 3200
