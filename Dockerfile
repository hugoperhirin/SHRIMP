# Use the official Nginx image
FROM nginx:latest

# Copy the files into the Nginx web server directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
