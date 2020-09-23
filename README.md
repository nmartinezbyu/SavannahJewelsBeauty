# Savannah Jewels Beauty

## Getting Started

#### Requirements
* npm 
* ruby
* sass 
once ruby is installed you can install sass with this command: `gem install sass`

### Build the app

All you need is to build the css, since everything else at the moment uses static html files

```node
npm run build-css
```

under the hood this command just takes the scss/custom.scss file and compiles it to the css/bootstrap.css file `sass scss/custom.scss css/bootstrap.css`

### Run it

```python
python -m http.server
```
or
use some other service of vs code extension (like Live Server) to server you index.html page
