User Account Plans, guide, and requirements.
/Account route and child components.

<!-- Create a new account -->

The user should be able to create a single account, the user shouldn't be able to create a account if a account with the same username, email, or phone number already exists. Username,email,or phone should be autodetected. If the username already exists, the user should be suggested to try another. If the email already exists, the user should be suggested to login. If the phone number is already in use, the user should be asked to login.

<!-- Login to a users account -->

The user should be able to login using either their username, email, or phone + password. Username, email or phone should be autodetected. If username, email, or phone number is not found, the user should be suggested to try another. If the username,email, or phone is detected, and the password is incorrect, the user should be notified and offered passsword retrieval through email.

<!-- Update a current account -->

When the user is viewing their own account, they should have the ability to update their account information, By clicking a single button and then having the ability to change all of the information. Once the user updates a certain field and saves their changes, they should be asked to confirm. Then the user should be redirected to view their own account again with the new values they have saved(if any).

<!-- Account View (viewing users own account) -->

When the user is viewing their own account, They should be able to see all of their personal information(except password). They should Be able to see a list of any items they have for sale(which are also links to edit or view their listings). The user should have a button to click to update their account information. The user should have the ability to delete their account, with a extra username/email/phone + password confirmation. The user should be able to recieve messages associated with items they have listed for sale and a user who is sending them(with or without the user having a account.)

<!-- Account View (Public Profile) -->

When the public profile of a user is being viewed, only the username, city,state,country should be accessable from the api. The option to send the user a message should also be possible.

<!-- Account View (In a listing) -->

When a item is listed, the seller should specify what contact info to share. But the sellers username, Profile picture, the ability to send the seller a message, and a link to the sellers public profile should always be present.

Updated Oct 17, 2020.
Traceton Timmerman
