ARG NODE_VERSION=lts-alpine3.12
ARG VERSION=1.1.0
FROM node:${NODE_VERSION}

RUN apk add --no-cache --virtual --update build-base make gcc g++ python3-dev python3 curl
RUN apk add tini bash
# Create app directory, this is in our container/in our image
WORKDIR /lpgmanager/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build

EXPOSE $PORT

# Exec app
#ENTRYPOINT ["tini", "--"]
ENTRYPOINT [ "/sbin/tini", "--" ]
CMD [ "node", "dist/main.js" ]

#ENTRYPOINT [ "tini", "--" ]
#CMD [ "node", "dist/main" ]
