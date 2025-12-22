# Stage 1: Build the React application
FROM node:20.13.1-alpine AS build

WORKDIR /app

RUN apk update && apk upgrade

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

# Stage 2: Serve the application from a lightweight server
FROM node:20.13.1-alpine

WORKDIR /app

RUN apk update && apk upgrade

COPY --from=build /app/build ./build
COPY package.json ./
COPY package-lock.json ./

RUN npm install --omit=dev serve

EXPOSE 3000

CMD ["npx", "serve", "-s", "build"]
