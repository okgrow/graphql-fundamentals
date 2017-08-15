# OK GROW! Training - API Server

```sh
# make a .env file from the example 
cp .env.example .env
```

Update the .env file with your api keys:

* GOOGLE_API_KEY - use the same value as REACT_APP_GOOGLE_API_KEY in the ui folder: [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key)
* [DARKSKY_API_KEY](https://darksky.net/dev)

```sh 
# install the dependencies
yarn

# run the API server
yarn start
```

If the API server doesn't start, you may need to start MongoDB in a separate terminal window (you will have to make sure [mongo is installed](https://docs.mongodb.com/manual/installation/)):

```sh
# Usually not necessary
mongod
```
