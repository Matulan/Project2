# Project Name

<br>



## Description

Search platform for adventures in Dubai.



<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and filter by type of adventures. 
- **sign up** - As a user I want to sign up on the web page so that I can make a request for my adventure.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account and see the updates for my request.
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account.
- **edit user** - As a user I want to be able to edit my profile.
- **result** - As a user I want to see the list of adevntures filter by my preferences.
- **adventures listing** - As a user I want to see more details of the adventures, be able to call them and visit their website.



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` 
view.                 |                                                          |
| `GET`      | `/cars`                            | cars page route. Renders home `index` 
view.
| `POST`     | `/cars`                            | Sends cars form data to the server.                         | { type,
information} 
| `GET`      | `/boats`                           | boats page route. Renders home `index` 
view.
| `POST`     | `/boats`                           | Sends boats form data to the server.                         | { type,
information} 
| `GET`      | `/adventures`                      | Adventure page route. Renders home `index` 
view.
| `GET`      | `/adventures/desert`               | Desert page route. Renders home `index` 
view.
| `POST`     | `/adventures/desert`               | Sends desert form data to the server.                         | { type,
information} 
| `GET`      | `/adventures/skydiving`            | Skydiving page route. Renders home `index` 
view.
| `POST`     | `/adventures/skydiving`            | Sends skydiving form data to the server.                         | { type,
information} 

| `GET`      | `/login`                           | Renders `cars/login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |                                                       |







## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  userType: {
  type: string,
  default: regular}
  favoriteCar: String,
  pastAdventures: objectID,
  required: unique,



}

```
Vehicle model

```javascript
{
  vehicleType{
      type: string,
      enum: ['car', 'boat'],
  }
  price: number,
  size: number,
  passengers: number,
  picture: url,
  description: string
}

```
Request model

```javascript
{
  userName: string,
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  accepted: Boolean,
  type: objectID,
  totalPrice: number,
}

```

<br>

## API's


<br>


## Packages



<br>



## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)



<br>



## Links



### Git

The url to your repository and to your deployed project

[[Repository Link](https://github.com/Matulan/Project2)]()

[[Deploy Link](https://dubai-adventures.herokuapp.com/)]()



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)

### Contributors
Matulan Mahenthra - [`<github-Matulan>`](https://github.com/Matulan) - [`<linkedin-profile-link>`](www.linkedin.com/in/matulan-mahenthra)

Majid Boukachni - [`<github-username>`](https://github.com/magicmajid2511) - [`<linkedin-profile-link>`](www.linkedin.com/in/majid-boukachni)