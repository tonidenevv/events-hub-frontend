Front-end of The Events Hub
Back-end: https://github.com/tonidenevv/events-hub-backend

Deployed version of the full-stack application: https://events-hub-frontend.vercel.app/

# Information
* Application's main idea is for users to find and host interesting events.
* Application is fully responsive.
* Users can view existing events, they can register or login into their accounts if they already have one.
* Guests have limited functionality, they are mostly able to view events and user profiles but are not able to comment, attend, like comments, create events, etc.
* Logged in users can create events as well as comment under them, like other comments or attend the events. They are also able to delete and edit the events in case they are the owner of the event.
* Each logged in user has a personalized profile that showcases the created events by the particular user and the events he will be attending.
* Users can access user's profiles by using the search field or by clicking on a profile picture of a user in the event details tab.
* Logged in users can access a settings page where they can change their profile picture, change their username, password or email, as well as delete their account.
* Users can search events based on a keyword and filter them based on several criteria.
* Users are able to directly upload an image using a file when they create or edit an event, or when they register an account or decide to change/add a profile picture in the settings tab. All images are sent to the back-end and then they are handled and stored in a Google Cloud Storage.

# Home Page
![homepage](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/48aea380-f24f-46bd-b4ab-0392fa337051)
![homepage1](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/fdef5b93-e866-43d6-b62a-ec1547545138)
![homepage2](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/423d9a3c-cd5a-45d0-9585-88323582a39c)
![homepage3](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/07618ab3-74a9-4f52-a7fa-e66c4c1dcaf7)
![homepage4](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/0f66fdbb-be3a-45a3-b15e-b23e4c39bd92)
![homepage5](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/fe8ca522-a39f-433d-ae8b-8d24defc5875)

# Events Page
![filter](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/d9663292-6dc4-4374-a201-cf7a13c2c255)
![eventspage](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/8346afb6-8b5e-4954-8180-574250df2e2f)
![eventhover](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/da28ff28-a329-4332-b1b1-1534b9f81166)

# Event Details
![profilemodal](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/2af726df-c6d2-4b90-bf5a-b56a62ce4291)
![eventdetailscomments](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/87110bbf-c163-4cf5-906e-a6fb3fb4bfa2)
![eventdetails](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/b0ca1a75-dc7e-4544-8239-3394234c48f3)
![deleteevent](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/a3b357b0-e91d-46b0-89a5-34be10e7b606)

# User Search & Profile Page
![usersearch](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/58b99cd5-2d25-454e-997b-4146c1fa8640)
![profilepage](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/12692418-eba3-4689-b957-990b5126c430)

# Create Event, Register & Settings
![register](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/975cd1cc-21ce-450e-a012-2cc1ecc9d346)
![create](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/b25b8c62-0b79-46b9-a69b-887517f1d392)
![settings](https://github.com/tonidenevv/events-hub-frontend/assets/148529259/f2e349e5-0e19-4902-9596-8ff2f8b366dd)

# Technologies
* React
* Tailwind CSS
* React-Router-DOM
* React-Toastify
* React-Typed
* Swiper
* React-Calendar
* Rc-Slider
* Date-fns

# Setup
To run the application, you should:
```
* Clone the repository
* Run npm install to install the dependencies
* Run 'npm start' to start the application
* The application won't work until the server isn't started. Follow the instructions in the back-end repository linked above.
```
