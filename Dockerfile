FROM node:argon

# Create app directory
ADD . /code
WORKDIR /code

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

EXPOSE 8080
CMD [ "node", "main.js", "1000" ]