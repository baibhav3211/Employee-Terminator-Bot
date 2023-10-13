## Set Up 

1. Clone the repo from GITLAB

 ![GitLab repo] https://gitlab.stackroute.in/employee-terminator-bot/emt-bot
2. mvn install

3. Install mysql db

4. run the all services as java application


## The following apis would be available for your use -
Auth Service:
-------------
* To Register user - POST - http://localhost:9000/api/v1/auth/register - 
	Input data - 
	{
    "email": "string",
	"password": "string",
    "userType":"string",
    "isActive":boolean
	}
* To Login user - POST - http://localhost:9000/api/v1/auth/login -
	Input data - 
	{
	"email": "string",
	"password": "string"
	}

* To Resetpassword - POST - http://localhost:9000/api/v1/auth/verify-otp -
	Input data - 
	{
	"email": "string",
	"otp": "string",
    "newPassword": "string"
	}

Termination Service:
-------------
* To add Request - POST - http://localhost:9002/api/v1/termination/request
    Input data - 
	{
	"firstname": "string",
	"lastName": "string",
    "department": "string",
    "lastWorkingDay": "date",
    "resignationDate": "date",
    "status": int
	}
* To add asset - POST - http://localhost:9002/api/v1/termination/asset
    Input data - 
	{
	"assetId": int,
	"present": "string"
	}
* To get all requests - GET - http://localhost:9002/api/v1/termination
* To get request by E_ID - GET - http://localhost:9002/api/v1/termination/request/id/{e_id}
* To delete request by E_ID - DELETE - http://localhost:9002/api/v1/termination/request/{e_id}
* To update status by E_ID - PUT - http://localhost:9002/api/v1/termination/status/{e_id}

User Service:
--------------
* To get all the employees - GET -  http://localhost:9001/api/v1/employees
* To get employee by E_ID - GET -  http://localhost:9002/api/v1/employee/id/{e_id}
* To get employee by email - GET -  http://localhost:9002/api/v1/employee/email/{email}
* To get history by E_ID - GET - http://localhost:9002/api/v1/employee/history/{e_id}
* To get all the history - GET - http://localhost:9002/api/v1/employee/history
* To delete terminated employee - DELETE - http://localhost:9002/api/v1/employee/employee/{e_id}
* To add employee - POST - http://localhost:9002/api/v1/employee
    Input data - 
	{
	"e_id": int,
	"firstname": "string",
	"lastName": "string",
    "email": "string",
    "city": "string",
    "phone": "string",
    "address": "string",
	"dob": "date",
	"doj": "date",
	"account": string",
	"ifsc": "string",
    "bankName": "string",
	"compensation": "string",
	"position": "string",
	"department": "string",
	"country": "string",
	"state": "string",
	"gender": "string",
	"status": "string",
	"teamId": int
	}