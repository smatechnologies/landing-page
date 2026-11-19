FROM node:24
ENV NODE_OPTIONS="--max-old-space-size=7168"
COPY app /app
COPY content /content
WORKDIR /app
RUN npm ci
RUN npm run build
COPY api /app/build/opcon/core/api
EXPOSE 3000
CMD ["npm", "run", "serve"]
