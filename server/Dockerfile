# Use an official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Ensure `json-server` is globally installed and executable
RUN npm install -g json-server && chmod +x /usr/local/bin/json-server

# Expose port 9000
EXPOSE 9000

# Start the JSON server
CMD ["json-server", "--watch", "db.json", "-p", "9000"]
# how to create image:
    # cd server 
    # docker build -t json-server .
    # docker run -p 9000:9000 json-server
