# Use the official Node.js 16 image as a parent image
FROM node:16 AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Build the TypeScript application
RUN npm run build

# Use the official Node.js 16 image for the runtime environment
FROM node:16

# Set the working directory in the runtime environment container
WORKDIR /app

# Copy package.json and other necessary files for production
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "dist/index.js"]