FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm run build-prod

FROM nginx:alpine
COPY --from=builder /app/dist/portal-educacional-angular /usr/share/nginx/html

# docker build -t portal-educacional-angular .
# docker run -p 8081:80 portal-educacional-angular