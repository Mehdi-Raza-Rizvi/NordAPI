const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
try{
    res.json('Welcome to HRAPI');
 }catch(err){
    res.status(500).json({Error:err.message});
    

    }

});
app.get('/country',async(req,res)=>{
    try{
        const result = await pool.query('select * from countries');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }

});
app.get('/emp',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name, e.last_name, e.employee_id, jd.* from employees e join job_history jd on jd.employee_id=e.employee_id limit 4');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/employeeno42',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name, e.last_name, e.employee_id, jd.* from employees e left join job_history jd on jd.employee_id=e.employee_id limit 4');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/employeeno43',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name, e.last_name, e.employee_id, jd.*,d.department_name from employees e left join job_history jd on jd.employee_id=e.employee_id left join departments d on e.department_id=d.department_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/employeeno44',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, jd.start_date,jd.end_date,jd.job_id,d.department_name,l.street_address,l.city from employees e left join job_history jd on e.employee_id = jd.employee_id inner join departments d on e.department_id = d.department_id inner join locations l on d.location_id = l.location_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/employeeno45',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, jd.start_date,jd.end_date,jd.job_id,c.country_name,l.city from employees e left join job_history jd on jd.employee_id = e.employee_id inner join departments d on e.department_id = d.department_id inner join locations l on d.location_id = l.location_id inner join countries c on l.country_id = c.country_id limit 4');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});


app.get('/jobhistoryno46',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, jd.start_date,jd.end_date,jd.job_id,d.department_name from job_history jd inner join employees e on e.employee_id = jd.employee_id inner join departments d on d.department_id = jd.department_id limit 7');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/jobhistoryno47',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, jd.start_date,jd.end_date,jd.job_id,j.job_title from job_history jd  inner join employees e on e.employee_id = jd.employee_id inner join jobs j on j.job_id = jd.job_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/jobhistoryno48',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, j.job_title,d.department_id, d.department_name from job_history jd inner join employees e on jd.employee_id = e.employee_id inner join departments d on d.department_id = jd.department_id inner join jobs j  on j.job_id = jd.job_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});


app.get('/jobhistoryno49',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, j.job_title,l.street_address from job_history jd inner join employees e on jd.employee_id= e.employee_id inner join departments d on d.department_id = jd.department_id inner join jobs j on j.job_id =jd.job_id inner join locations l on l.location_id = d.location_id limit 4');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});


app.get('/jobhistoryno50',async(req,res)=>{
    try{
        const result= await pool.query('select e.first_name,e.employee_id, j.job_title,c.country_name from job_history jd  join employees e on jd.employee_id = e.employee_id join departments d on d.department_id = jd.department_id  join jobs j on j.job_id = jd.job_id join locations l on l.location_id = d.location_id join countries c on c.country_id = l.country_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});
app.get('/regionno51',async(req,res)=>{
    try{
        const result= await pool.query('select c.*, l.*, r.region_name from regions r join countries c on r.region_id= c.region_id join locations l on c.country_id = l.country_id limit 6');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

app.get('/',async(req,res)=>{
    try{
        const result = await pool.query('');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }

});
app.get('/',async(req,res)=>{
    try{
        const result = await pool.query('');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }

});


app.get('/employee-qq',async(req,res)=>{
    try{
        const result = await pool.query('select jh.*, e.first_name, e.last_name from job_history as jh inner join employees as e on jh.employee_id = e.employee_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }

});

app.get('/employee-',async(req,res)=>{
    try{
        const result = await pool.query('select jh.*, e.first_name, e.last_name from job_history as jh inner join employees as e on jh.employee_id = e.employee_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }

});

app.get('/region',async(req,res)=>{
    try{
        const result = await pool.query('select * from regions');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }

});

app.get('/employee-q',async(req,res)=>{
    try{
        const result = await pool.query('SELECT e.*, l.city, c.country_name FROM employees as e INNER JOIN departments as d ON e.department_id = d.department_id INNER JOIN locations as l ON d.location_id = l.location_id  INNER JOIN countries as c ON l.country_id = c.country_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }

});
app.get('/employee',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }

});



const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected successful........ on PORT ${PORT}`);
});
