FROM node:12-alpine AS builder
ENV NPM_CONFIG_LOGLEVEL info
RUN mkdir -p /build
COPY ./tsconfig.json ./package.json ./yarn.lock /build/
WORKDIR /build
# Don't generate yarn.lock file
RUN yarn install --pure-lockfile
COPY . /build
# Build Typescript code
RUN yarn build && rm -rf node_modules && yarn install --pure-lockfile --prod && yarn cache clean

FROM node:12-alpine
# user with username node is provided from the official node image
ENV NPM_CONFIG_LOGLEVEL info
ENV user node
# Run the image as a non-root user
USER $user

# Create app directory
RUN mkdir -p /home/$user/src
WORKDIR /home/$user/src

COPY --from=builder /build ./

EXPOSE 3000
ENV NODE_ENV development

CMD  ["sh", "-c", "yarn start"]
