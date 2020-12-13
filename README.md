# sigma

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker

Build sigma docker image:
```
docker build -t primevue/sigma . 
```

Run sigma docker image (navigate to http://localhost:8080/):
```
docker run -it -p 8080:8080 --rm --name sigma primevue/sigma
```

Run sigma docker image in dev mode:
```
docker run -it -p 8080:8080 -v $PWD:/app --rm --entrypoint="/dev.sh" --name sigma primevue/sigma
```
