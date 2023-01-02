From node:12
Workdir /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
Expose 8081