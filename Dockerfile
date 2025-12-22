# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

# Stage 2: Serve the application from a lightweight server
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/build ./build
COPY package.json ./
COPY package-lock.json ./

RUN npm install --omit=dev serve

EXPOSE 3000

CMD ["npx", "serve", "-s", "build"]
