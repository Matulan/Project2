# Project Name
Dubai Adventures
<br>



## Description

Platform for adventures in Dubai.



<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **Homepage** - As a user I want to be able to access the homepage and filter by type of adventures, cars and boats. 
- **Sign up** - As a user I want to sign up on the web page so that I can make a request for my adventure.
- **Login** - As a user I want to be able to log in on the web page so that I can get back to my account and see the updates for my request.
- **Logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account.
- **Edit user** - As a user I want to be able to edit my profile.
- **Result** - As a user I want to see the list of adevntures filter by my preferences.
- **Adventures listing** - As a user I want to see more details of the adventures, be able to make a request.
- **Cars listing** - As a user i want to view all the cars avaliable
- **Boats listing** - As a user i want to view all the boats avaliable



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                                                                                                       
| `GET`      | `/car`                             | Cars page route. Renders car `car` view.
| `POST`     | `/car/create`                      | Creats cars form data to the server.                          | { type,information} 
| `GET`      | `/car-list`                        | Sends cars form data to the server. Renders carlist `car-list`| { type,view} 
| `GET`      | `/car/:carId`                      | Find cars by Id. Renders car details `car-details`            | { type,view} 
| `GET`      | `/boat-list`                       | Boats page route. Renders boatlist `boat-list` view.
| `GET`      | `/boat/:boatId`                    | Find boats by Id. Renders boat details `boat-details`         | { type,view} 
| `POST`     | `/search`                          | Make you search for the car in chosen date. Renders cardetails and summary`car-details` and `summary`       | { type,information}
| `POST`     | `/search-boats`                    | Make you search for the car in chosen date. Renders car details and summary`boat-details` and `summary-boat` | { type,information}
| `GET`      | `/adventures`                      | Adventure page route. Renders adventures `adventures` view.
| `GET`      | `/request`                         | Request page route. Renders request `request` view.
| `POST`     | `/request`                         | Sends request form data to the server.                         | { type,information} 
| `GET`      | `/signup`                          | Renders `signup` form view.                                                                                            |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {Username, email, password} Renders signup `signup`  |     
 `GET`       | `/login`                           | Renders `/auth/login` form view.                                                                                            |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                        | Renders `/auth/login`
| `GET`      | `/logout`                          | Renders `logout` view.             |                                                          |
| `GET`      | `/profile`                         | Profile page route. Renders home `profile` view.
| `POST`     | `/profile`                         | Make you edit {firstName, lastName, adress, postBox, favoritecar}  information.   
| `GET`      | `/delete-profile`                  | Make you delete the profile view.






## Models

User model

```javascript
{
email: String,
firstName: String,
lastName: String,
adress: String,
favoritecar: String,
postBox: String,
password: String,
picture: {
type: String,
},
  }

```
Car model

```javascript
{
  vehiclename: String,
  vehicletype: String,
  price: Number,
  size: String,
  passengers: Number,
  picture: {
  type: String,
   },
  description: String,
  engine: String,
  bhp: String,
  zerotohundred: String,
  topspeed: String,

}

```
Request model

```javascript
{
vehiclename: String,
startDate: String,
endDate: String,
contactinformation: String,
totalPrice: Number
}

```


<br>


## Packages
 ### Nodemailer

<br>



## Links



### Git

The url to your repository and to your deployed project

[[Repository Link](https://github.com/Matulan/Project2)]

[[Deploy Link](https://dubai-adventures.herokuapp.com/)]



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)

### Contributors
Matulan Mahenthra - [`<github-Matulan>`](https://github.com/Matulan) - [`<linkedin-profile-link>`](www.linkedin.com/in/matulan-mahenthra)

Majid Boukachni - [`<github-username>`](https://github.com/magicmajid2511) - [`<linkedin-profile-link>`](www.linkedin.com/in/majid-boukachni)