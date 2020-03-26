# livecovind.in-api
API for the website hosted at https://livecovid.in

## Warning
I do not code like this in production, this is a side project and was hacked in less than 3-4 hours and after that I was too lazy to change it. :smile: If you want you can optimize it and I would be happy to approve the PR. 

And yes there is no database for now. We don't need it as of now, but we might need one soon, I am planning to get one this weekend. Suggestions are welcome.

## Contribute
- Clone this repo.
- Do `npm install`
- Run `node ./bin/www` in the cloned directory.
- The API will be running at http://localhost:3323
- If you want to override this port number, add a `.env` file at the root and add one line to that file
```
PORT=4444
```
- This will change the port number to 4444
- For best development experience, install nodemon
  - `npm i nodemon -g`
  - Then run, `nodemon ./bin/www`
  - This will reload the server everytime you make code changes. Sweet!

## Front-end application
The companion front-end application is in this repo, https://github.com/anamritraj/livecovid.in-webapp. Feel free to fork and contribute! 

## Disclaimer
This is not a Goverment official project. This is not associated in any way with my employer. I am not getting paid to do this. Also, I have no intentions of making money from this. This is created to keep people informed about the current state of Covid-19 in the country.

If you feel any information is missing or there is any error, please feel free to create [an issue](https://github.com/anamritraj/livecovid.in-webapp/issues/new) or reach out to me directly on [Twitter](https://twitter.com/anamritraj) and I would be happy to assist.

## Licence 
MIT

More details to be updated.
