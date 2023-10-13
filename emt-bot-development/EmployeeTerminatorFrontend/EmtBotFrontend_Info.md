# Exit Flow

* Main objective of ExitFlow is to significantly improve the efficiency of the offboarding process. 
* It automates the removal or transfer of employee details.
* It reduces the time and effort required by HR agents, allowing them to focus on more strategic tasks.
* Features of Exit Flow Application with respect to HR:
    1.  HR can start the termination process by filling the termination form if the organization wants to terminate any employee.
    2.	Acknowledge the termination requests.
    3.  View the pending termination requests.
    4.	Add employee details.
    5.	View the list of terminated employees.
    6.	View all the employees.
    7.	Bot should move the terminated employee details to the History table automatically once the termination process is successful.
* Features of Exit Flow Application with respect to Employees:
    1.	Initiate Process by filling resignation form.
    2.  View the progress of termination request.
    3.  Track the status of each step of termination request.

![GitLab repo](https://gitlab.stackroute.in/employee-terminator-bot/emt-bot)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
    - [Auth](#Auth)
    - [Dashboard](#Dashboard)
    - [ChatBot](#ChatBot)

## Installation
* Clone the repo from gitlab.
* Install dependencies using `npm install`.
* Run all the microservices.(Refer EmtBotBackend_Info.md in EMT Bot repo)
* Run `npm run dev` for a dev server. Navigate to `http://localhost:5173`. The app automatically reload if you change any of the source files.

## Usage
   ## Auth 
   * If you do not have the existing account,register and wait for the registration approval from master admin.
   * Login to the application if you already have an account. You can also change password by clicking on forget password.

   ## Dashboard
   * On successful login, you will be redirected to dashboard based on user type i.e.,HR or Employee.
   * If user is an employee, they can initiate the termination process by filling the resignation form and track status of request on home page.
   * If user is HR, they can initiate termination process by filling termination form if organization wants to terminate any employee.
   * If user is HR, they can acknowledge the termination process, add employees, view employees, view list of terminated employees,view the pending requests on home page.
   
   ## ChatBot
   * If user is employee and if they have any queries related to termination process, chatbot can assist their queries.
