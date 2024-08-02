// Mail Schedulling

To run this project first you need to do git clone 'url'  after that you have to do npm run build , this command will install all the dependencies for you , 
first you have to go https://ethereal.email/ node mail website create user , then pass user and pass in emailService.js file and then you can hit api end points to 
check this project 


api end points:
for user register:
localhost:5000/api/User/registerUser

for user login:
localhost:5000/api/User/loginUser

for schedulemail:
localhost:5000/api/Schedule/scheduleMail

for get mail details by id:
localhost:5000/api/Schedule/mailDetail/:id

for get all mail by user:
localhost:5000/api/Schedule/AllMail

for delete mail :
localhost:5000/api/Schedule/deleteMail/:id
