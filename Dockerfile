# Build the Vite React App
FROM node:20-alpine AS builder
WORKDIR /weather-app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything else and build the production static files
COPY . .
RUN npm run build

# Serve the App with Nginx
FROM nginx:alpine

# Copy the compiled Vite files from Stage 1 to Nginx's public folder
COPY --from=builder /weather-app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]