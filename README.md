# linkr-front

Front-end for linker, a social network of link sharing.

## About

Linkr is a web browser application for a social network of link sharing.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Populate `.env` file based on `.env.example`. `REACT_APP_BACKEND_URL` should point to your API server [(linkr-back)](https://github.com/gabrielportelagomes/projeto18-linkr-back)

4. Run the back-end in a development environment

5. Run the front-end:

```bash
npm run start
```

## Building and starting for production

```bash
npm run build
npm start
```

## What to do when add new ENV VARIABLES

Please notice that every ENV that should be available on browser should start with `REACT_APP_` prefix. There are several things you need to do when you add new ENV VARIABLES:

- Add them to `.env.example` file
- Add them to your local `.env` file
