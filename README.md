# Movie database

Mini project for job interview at Axis Communications. New Your Times open API is used to fetch review data for movies.

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

## Run with Docker

```
docker build -t henriknh/movie-db .
docker run -it -p 8080:8080 --rm --name henriknh-movie-db-1 henriknh/movie-db
```

App should now we accessable at `localhost:8080`
