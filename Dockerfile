FROM node:8.11.4
WORKDIR /react-redux-docker
COPY package.json /react-redux-docker
RUN npm install
COPY . /react-redux-docker
RUN npm run build
CMD npm run server
EXPOSE 3000