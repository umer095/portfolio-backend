# Use official Node.js 24 slim image as base
FROM node:24-slim

# Set working directory inside container
WORKDIR /home/node/app

# Use non-root user 'node'
USER node

# Copy package.json and package-lock.json with ownership to 'node'
COPY --chown=node:node package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app source code with ownership to 'node'
COPY --chown=node:node . .

# Build the project
RUN npm run build

# Expose port from environment variable or default 3000
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE ${PORT}

# Start the application
CMD ["node", "."]
