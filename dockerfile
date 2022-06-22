FROM node:14-alpine AS build-deps
WORKDIR /app
COPY package*.json ./
RUN npm install --only=prod
COPY  . ./
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-deps /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]