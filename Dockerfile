# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# For frontend builds
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine AS production

WORKDIR /app

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy built assets from builder stage
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/src /app/src
COPY --from=builder /app/public /app/public

# Copy other necessary files
COPY .env.production .env

# Expose the port the app runs on
EXPOSE 8080

# Use a non-root user for better security
USER node

# Command to run the application
CMD ["node", "src/server.js"] 