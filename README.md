# Express and React App
Fairly simple monorepo that has both a frontend and backend.

## Running the app locally
- Ensure you have [Docker](https://www.docker.com/products/docker-desktop/) installed.
- Run `git clone https://github.com/kiddio/ExpressReactApp.git` to clone the repository and cd into the folder by running `cd ExpressReactApp`.
- Run `docker compose up` to get the both the frontend and backend up and running. 
- Visit [localhost:8080](http://localhost:8080) to view the frontend. 
- Visit either of the two endpoints [/time](http://localhost:3000/time) to get server time in epoch seconds or [/metrics](http://localhost:3000/metrics) to get the prometheus metrics of the server.

### Expected Behaviour
- Front end that refreshes every 30 seconds to show you the current server time in epoch settings alongside a timer that shows the amount of time that has elapsed since it has refreshed.
- Front end that shows you the prometheus endpoint metrics on the right side of the page that contains the raw prometheus output of the metrics endpoint.