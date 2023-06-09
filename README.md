# Lendsqr UI Build

## Demo Endpoints:
Login: matthew-arofin0lendsqr-fe-test.heroku.com/
UserList w/ filters: matthew-arofin0lendsqr-fe-test.heroku.com/userlist
UserInfo: matthew-arofin0lendsqr-fe-test.heroku.com/users/:id


## Planning
### Components/Views:
- Login Page
- Dashboard/Landing
- Users List w/ Filters
- User Details

### API Endpoints:
- GET all users:
Returns a list of all users
- GET user by ID:
Returns a specific user's details

### Objectives:
1. Recreate the UI mockup that lives here - https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend
2. Implement a mobile responsive layout using Typescript and SCSS for styling
3. Implement functional API calls to get all users and get a specific user's details
4. Implement wide positive and negative test coverage
5. Host completed build publicly at https://<candidate-name>-lendsqr-fe-test.<cloud-platform-domain>

### Constraints/Considerations:
- Be mindful of code architecture, function/variable naming and semantic use of pathing and resource naming
- Ensure Github repo is publicly accessible and appropriately named
- Ensure commit messages are clear and concise

## Live Demo Notes
- User authentication/authorisation NOT implemented in demo, submit button console logs username and password.
- Public routing implemented for the following features:
1. LOGIN ('/')
2. DASHBOARD/USER LIST ('/userlist')
3. USER ('/user/:id')