# Use the official Node.js 16 image as a parent image
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./
# If using yarn, copy yarn.lock as well
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# For yarn, use:
# RUN yarn install

# Copy the rest of your application's code
COPY . .

# Build the application for production
RUN npm run build
# For yarn, use:
# RUN yarn build

# Use nginx to serve the static files
FROM nginx:stable-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 5001 to the outside once the container has launched
EXPOSE 5001

# Define the command to run your app using CMD which defines your runtime
CMD ["nginx", "-g", "daemon off;"]