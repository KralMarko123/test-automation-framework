# VerifyUserActionsAuthorization

## Preconditions:

- User is not logged in.

## Test steps:

1. Visit https://itera-qa.azurewebsites.net/Customer/Create
2. Fill in the inputs with random text & click on the Create button
3. Go back to the previous page
4. Click on the Back To List button
5. Visit https://itera-qa.azurewebsites.net/Dashboard

## Test results:

1. Create customer page is displayed.
2. User is redirected to the Login page.
3. Create customer page is displayed.
4. User is redirected to the Login page.
5. User is redirected to the Login page.
