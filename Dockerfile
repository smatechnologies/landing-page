FROM node:18
COPY app /app
COPY content /content
WORKDIR /app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "serve"]