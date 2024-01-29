#FROM 663319559600.dkr.ecr.us-east-1.amazonaws.com/node14:alpine as builder
#FROM 663319559600.dkr.ecr.us-east-1.amazonaws.com/node14:node-14-alpine as builder
FROM 663319559600.dkr.ecr.us-east-1.amazonaws.com/node14:latest as builder
#FROM node:14 AS builder
WORKDIR "/tv-web-marketplace"
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM 663319559600.dkr.ecr.us-east-1.amazonaws.com/nginx:latest
#FROM nginx

EXPOSE 80
COPY --from=builder /tv-web-marketplace/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx","-g","daemon off;"]