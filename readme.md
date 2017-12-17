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
