# How to use this  Job Portal project

## All instruction
### Hiring Manager
* POST http://localhost:5000/api/manager/jobs
* GET http://localhost:5000/api/manager/jobs
* GET http://localhost:5000/api/manager/jobs:id
* PATCh http://localhost:5000/api/manager/jobs

### Candidate routes
* GET http://localhost:5000/api/v1/jobs
* GET http://localhost:5000/api/v1/jobs:id
* POST http://localhost:5000/api/v1/jobs

### Auth routes
* POST http://localhost:5000/api/v1/user/signup
* POST http://localhost:5000/api/v1/user/login




## job info for Manager

{
    "name": "It Bd",
    "description":"this is good job",
    "email":"absiddique1060@gmail.com",
    "website":"https://www.npmjs.com/package/validator",
    "location":"Dhaka",
    "salary":"100",
    "jobtime":"3",
    "status":"active"
  

}


## Apply Info for Candidate routes

{
    "name": "Abu Bakar Siddique",
    "jobname":"Web developer",
    "applydate":"10-9-2022",
    "exprince":"Mid Level",
    "cvlink":"https://drive.google.com/file/d/19eG9IjzMzHfjLgDfiDycnRi_MLHz4gcY/view?usp=sharing",
    "location":"Dhaka Bangladesh"


}

## signup

{
    "email": "admin@gmail.com",
    "password": "Admin123#",
    "confirmPassword": "Admin123#",
    "role":"admin",
    "firstName": "Abu Bakar",
    "lastName": "siddique",
    "contactNumber": "+8801789848646",
    "candidateaddress": "Mirpur dhaka bangladesh",
    "permanentAddress": "Barishal Bhola bangladesh",
    "imageURL": "https://drive.google.com/file/d/1JOCT3yWHD__zJIerdjJHIQA2x-nIhXlt/view?usp=sharing",
    "status":"active"
}

## login
{
    "email": "admin@gmail.com",
    "password": "Admin123#"
}
