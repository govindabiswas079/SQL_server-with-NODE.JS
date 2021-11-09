'use strict';

const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const employeRoutes = require('./routes/employeRoutes');
const jobsRoutes = require('./routes/jobsRoutes');
const userInfoRoutes = require('./routes/userInfoRoutes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`
  <h4>Event MSSQL SERVER IS RUNNING ON PORT http://localhost:${config.port}/</h4>
   http://localhost:${config.port}/event/getpost/   -   FOR GET ALL DATA FROM DATABASE <br/>
   http://localhost:${config.port}/event/get/:id/   -   FOR GET AN DATA FROM DATABASE <br/> 
   http://localhost:${config.port}/event/add/   -  FOR ADD DATA INTO DATABASE <br/>
   http://localhost:${config.port}/event/update/:id/   -   FOR UPDATE DATA FROM DATABASE <br/> 
   http://localhost:${config.port}/event/delete/:id/   -   FOR DELETE DATA FROM DATABASE <br/><br/>
   
  <h4>Contact MSSQL SERVER IS RUNNING ON PORT http://localhost:${config.port}/</h4>
    http://localhost:${config.port}/contact/getall/   -   FOR GET ALL DATA FROM DATABASE <br/>
    http://localhost:${config.port}/contact/get/:id/   -   FOR GET AN DATA FROM DATABASE <br/>
    http://localhost:${config.port}/contact/add/   -   FOR GET ALL DATA FROM DATABASE <br/>
    http://localhost:${config.port}/contact/update/:id/   -   FOR UPDATE DATA FROM DATABASE <br/>
    http://localhost:${config.port}/contact/delete/:id/   -   FOR GET ALL DATA FROM DATABASE <br/><br/>

  <h4>Users MSSQL SERVER IS RUNNING ON PORT http://localhost:${config.port}/</h4>
    http://localhost:${config.port}/user/getall/   -   FOR GET ALL DATA FROM DATABASE <br/>
    http://localhost:${config.port}/user/get/:id/   -   FOR GET AN DATA FROM DATABASE <br/>
    http://localhost:${config.port}/user/add/   -  FOR ADD DATA INTO DATABASE <br/> 
    http://localhost:${config.port}/user/update/:id/   -   FOR UPDATE DATA FROM DATABASE <br/>
    http://localhost:${config.port}/user/delete/:id/   -   FOR DELETE DATA FROM DATABASE <br/><br/>

  <h4>Users MSSQL SERVER IS RUNNING ON PORT http://localhost:${config.port}/</h4>
    http://localhost:${config.port}/employe/getemploye/   -   FOR GET ALL DATA FROM DATABASE <br/> 
    http://localhost:${config.port}/employe/get/:id/   -   FOR GET AN DATA FROM DATABASE <br/>
    http://localhost:${config.port}/employe/add/   -  FOR ADD DATA INTO DATABASE <br/>
    http://localhost:${config.port}/employe/update/:id/   -   FOR UPDATE DATA FROM DATABASE <br/> 
    http://localhost:${config.port}/employe/delete/:id/   -   FOR DELETE DATA FROM DATABASE <br/><br/><br/><br/>

  <h4>Jobs MSSQL SERVER IS RUNNING ON PORT http://localhost:${config.port}/</h4>
    http://localhost:${config.port}/jobs/getjob/   -   FOR GET ALL DATA FROM DATABASE <br/> 
    http://localhost:${config.port}/jobs/getbyid/:id/   -   FOR GET AN DATA FROM DATABASE <br/>
    http://localhost:${config.port}/jobs/post/   -  FOR ADD DATA INTO DATABASE <br/>
    http://localhost:${config.port}/jobs/update/:id/   -   FOR UPDATE DATA FROM DATABASE <br/> 
    http://localhost:${config.port}/jobs/delete/:id/   -   FOR DELETE DATA FROM DATABASE <br/><br/><br/><br/>

    <h4>User Info MSSQL SERVER IS RUNNING ON PORT http://localhost:${config.port}/</h4>
    http://localhost:${config.port}/infouser/getuser/   -   FOR GET ALL DATA FROM DATABASE <br/> 
    http://localhost:${config.port}/infouser/get/:id/   -   FOR GET AN DATA FROM DATABASE <br/>
    http://localhost:${config.port}/infouser/add/   -  FOR ADD DATA INTO DATABASE <br/>
    http://localhost:${config.port}/infouser/update/:id/   -   FOR UPDATE DATA FROM DATABASE <br/> 
    http://localhost:${config.port}/infouser/delete/:id/   -   FOR DELETE DATA FROM DATABASE <br/><br/><br/><br/>
   `);
})

app.use('/event', eventRoutes.routes);
app.use('/contact', contactRoutes.routes);
app.use('/user', userRoutes.routes);
app.use('/employe', employeRoutes.routes);
app.use('/jobs', jobsRoutes.routes);
app.use('/infouser', userInfoRoutes.routes);



app.listen(config.port, () => {
  console.log(`app listening on url http://localhost:${config.port}`)
});