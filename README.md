# Description
A Url shortner, see full excercise specs:
```
A user needs to be able to enter a URL and they will get an 8 character (lowercase-alphanumeric) shortened version of the URL.
URLs are shortened and persisted into MongoDB via a REST or GraphQL API.
The frontend app will display a list of previously shortened URLs.
New URLs will be generated and added to the frontend list.
The same 8-characters cannot be used twice i.e. each shortened URL needs to be unique.
The URLs need to be shortened with the following domain 'pbid.io' e.g. https://pbid.io/f3x2ab1c
The shortened URL do not need to actually redirect/work as the domain doesn’t exist.
The entire system needs to be runnable using Docker, a simple compose file will do.
Appropriate tests should be added to the code, using the jest framework.
The app layout should be responsive.
```

# Run
Tested on docker-compose version 1.29.2
```
docker-compose up
```

# Development
## Database

Start a mongo instance for local development and integration tests:
```
docker-compose start mongo
```

## Server

```
/server
npm install
npm start (npm run dev to watch for changes)
npm test
```

## Frontend

```
/frontend
npm install
npm start
```

# Comments

While not part of the specs a redirection endpoint could be easily implemented in the server by retriving the Url record mathcing the pathname and performing the response redirect.

Frontend could also use subscriptions instead of refetchQuery, would be more efficient and multi user friendly.

Server static tests could be implemented using in memory mongo, the ones provided integrate the mongo instance (only exemplary tests are provided for the purpose of the excercise).
