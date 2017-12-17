# Luketopia
Luketopia is a theme park attraction reservation prototype inspired by Walt Disney World's My Disney Experience app and other similar competing apps. Currently my focus is to create a single standalone backend API server app with mobile and web client apps as well. **This is NOT a fully-featured application, just a proof of concept.** My timeframe for creating this setup is only a couple weeks so I've picked a relatively small scope. My primary feature will be creating a reservation for a ride only, and may be expanded in the future.

## Structure

### Backend
I'm using a PHP/Laravel/SQL stack at the moment to serve an API and handle all actions server side, including authentication. The app's contents are located within the backend directory.

[Progress board](https://github.com/LukeBillington/Luketopia/projects/2)

### Web client
I'm using React paired with Redux and Thunk to serve my site client side as an isolated server from the backend. For my timeframe's sake, I'm only optimizing my views for a desktop version of the site. The app's contents are located within the web directory.

[Progress board](https://github.com/LukeBillington/Luketopia/projects/3)

### Mobile client
I'm using React Native, again with Redux and Thunk to handle creating a mobile application for iOS and Android. The app's contents are located within the mobile directory.

[Progress board](https://github.com/LukeBillington/Luketopia/projects/4)

## Getting started

This project has a little bit of setup involved, as you'll need PHP,
[Composer](http://getcomposer.org), and SQL handy server-side along with Node
ready for client side apps.

## Server side

+ First, clone the repo, head over to the `/backend` directory and run
`composer install`.

+ Next, you'll need to configure some environment settings. Copy the
.env.example file into .env `cp .env.example .env`, and change the database
information to match your configuration.

+ Migrate your database by running `php artisan migrate`. Then you may seed some
dummy ride info by running `php artisan db:seed`.

+ By default, your rides won't have any wait times or reservation times. Run
`php artisan ridetime:wait` as many times as you'd like to generate random wait
times, the more you run it, the more random they'll become. You'll also need
some reservation times for each ride to be able to make a reservation. I suggest
running this command only once per day between 9AM-9PM EST/EDT, as that's the
park's "hours of operation", and they're currently hard-coded. Times will expire
as they've been reached.

+ **Optional:** This app uses oAuth for API authentication with Vue.js interface
components to handle issuing tokens. Run `php artisan passport:install` to
handle everything, and run  `npm install` or `yarn install` and `npm run dev`
or `yarn run dev` to compile the web components.

+ Once this is set up how you'd like, start the server. The front end apps
currently are hardcoded to only detect `localhost:8000`, and this is setup by
default. Run `php artisan serve` to run a local dev server.

+ Currently, there's no authentication within the web/mobile apps, so it
requires a user to be created. Visit `localhost:8000` in your browser, and click
register, and create an account. A dummy photo along with 4 other dummy "people"
will be created and attached to your account for now.

+ You're all set as far as the backend goes!

## Client side

+ Make sure your backend server is running as mentioned above.

+ Hop into the `/web` or `/mobile` directories, and run `npm install` or
`yarn install` and `npm start` or `yarn start`. Enjoy!
