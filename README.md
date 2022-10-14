# Express and React App
Fairly simple monorepo that has both a frontend and backend with authentication via a header.

## Running the app locally (Docker)
- Ensure you have [Docker](https://www.docker.com/products/docker-desktop/) installed.
- Run `git clone https://github.com/kiddio/ExpressReactApp.git` to clone the repository and cd into the folder by running `cd ExpressReactApp`.
- Run `docker build -t expressreactapp:latest .` to build the image.
- Run `docker run -d -p 8080:8080 -p 3000:3000 ExpressReactApp` to run the container.
- Visit [localhost:8080](http://localhost:8080) to view the frontend, you will need the `Authorization: mysecrettoken` header in order to view the data.
- Visit either of the two endpoints [/time](http://localhost:3000/time) to get server time in epoch seconds or [/metrics](http://localhost:3000/metrics) to get the prometheus metrics of the server.

## Running the app locally (Without Docker)
- Run `git clone https://github.com/kiddio/ExpressReactApp.git` to clone the repository and cd into the folder by running `cd ExpressReactApp`.
- Run `yarn` to install the dependencies
- Run `yarn start` to run both the frontend and backend.
- Visit [localhost:8080](http://localhost:8080) to view the frontend, you will need the `Authorization: mysecrettoken` header in order to view the data.
- Visit either of the two endpoints [/time](http://localhost:3000/time) to get server time in epoch seconds or [/metrics](http://localhost:3000/metrics) to get the prometheus metrics of the server.

### Expected Behaviour
- Front end that refreshes every 30 seconds to show you the current server time in epoch settings alongside a timer that shows the amount of time that has elapsed since it has refreshed.
- Front end that shows you the prometheus endpoint metrics on the right side of the page that contains the raw prometheus output of the metrics endpoint.