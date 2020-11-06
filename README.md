# Savannah Jewels Beauty

## Getting Started

#### Requirements
* npm 
* ruby
* sass 
once ruby is installed you can install sass with this command: `gem install sass`

### Build the css

All you need is to build the css, since everything else at the moment uses static html files

```node
npm run build-css
```

under the hood this command just takes the scss/custom.scss file and compiles it to the css/bootstrap.css file `sass scss/custom.scss css/bootstrap.css`

Here's a good video on how to customize the theme and imports from Bootstrap https://www.youtube.com/watch?v=6Ovw43Dkp44


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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
