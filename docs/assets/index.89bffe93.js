import{b as l,al as i,j as e,am as t,L as n}from"./index.870bcc44.js";import{S as s,U as o,a as c,b as d,c as m,D as u,E as h}from"./react-dataTable-component.f05f9214.js";const r=[{id:1,full_name:"Korrie O'Crevy",post:"Nuclear Power Engineer",email:"kocrevy0@thetimes.co.uk",city:"Krasnosilka",start_date:"09/23/2016",salary:"$23896.35",age:"61",experience:"1 Year"},{id:2,full_name:"Bailie Coulman",post:"VP Quality Control",email:"bcoulman1@yolasite.com",city:"Hinigaran",start_date:"05/20/2018",salary:"$13633.69",age:"63",experience:"3 Years",status:2},{id:3,full_name:"Stella Ganderton",post:"Operator",email:"sganderton2@tuttocitta.it",city:"Golcowa",start_date:"03/24/2018",salary:"$13076.28",age:"66",experience:"6 Years",status:5},{id:4,full_name:"Dorolice Crossman",post:"Cost Accountant",email:"dcrossman3@google.co.jp",city:"Paquera",start_date:"12/03/2017",salary:"$12336.17",age:"22",experience:"2 Years",status:2},{id:5,full_name:"Harmonia Nisius",post:"Senior Cost Accountant",email:"hnisius4@gnu.org",city:"Lucan",start_date:"08/25/2017",salary:"$10909.52",age:"33",experience:"3 Years",status:2},{id:6,full_name:"Genevra Honeywood",post:"Geologist",email:"ghoneywood5@narod.ru",city:"Maofan",start_date:"06/01/2017",salary:"$17803.80",age:"61",experience:"1 Year",status:1},{id:7,full_name:"Eileen Diehn",post:"Environmental Specialist",email:"ediehn6@163.com",city:"Lampuyang",start_date:"10/15/2017",salary:"$18991.67",age:"59",experience:"9 Years",status:3},{id:8,full_name:"Richardo Aldren",post:"Senior Sales Associate",email:"raldren7@mtv.com",city:"Skoghall",start_date:"11/05/2016",salary:"$19230.13",age:"55",experience:"5 Years",status:3},{id:9,full_name:"Allyson Moakler",post:"Safety Technician",email:"amoakler8@shareasale.com",city:"Mogilany",start_date:"12/29/2018",salary:"$11677.32",age:"39",experience:"9 Years",status:5}],p=[{name:"Name",minWidth:"250px",sortable:a=>a.full_name,cell:a=>e("div",{className:"d-flex align-items-center",children:l("div",{className:"user-info text-truncate ms-1",children:[e("span",{className:"d-block fw-bold text-truncate",children:a.full_name}),e("small",{children:a.post})]})})},{name:"Email",sortable:!0,minWidth:"250px",selector:a=>a.email},{name:"Date",sortable:!0,minWidth:"150px",selector:a=>a.start_date},{name:"Salary",sortable:!0,minWidth:"150px",selector:a=>a.salary},{name:"Age",sortable:!0,minWidth:"100px",selector:a=>a.age},{name:"Actions",allowOverflow:!0,cell:a=>e("div",{className:"d-flex",children:e(n,{to:`${a.id}`,children:e(h,{size:15})})})}],f=()=>l("div",{className:"applications-list",children:[l(i,{children:[e(t,{lg:"3",sm:"6",children:e(s,{color:"primary",statTitle:"Total Solicitudes",icon:e(o,{size:20}),renderStats:e("h3",{className:"fw-bolder mb-75",children:r.length})})}),e(t,{lg:"3",sm:"6",children:e(s,{color:"danger",statTitle:"Solicitudes Denegadas",icon:e(c,{size:20}),renderStats:e("h3",{className:"fw-bolder mb-75",children:"2"})})}),e(t,{lg:"3",sm:"6",children:e(s,{color:"success",statTitle:"Solicitudes Aprobadas",icon:e(d,{size:20}),renderStats:e("h3",{className:"fw-bolder mb-75",children:"3"})})}),e(t,{lg:"3",sm:"6",children:e(s,{color:"warning",statTitle:"Solicitudes Pendientes",icon:e(m,{size:20}),renderStats:e("h3",{className:"fw-bolder mb-75",children:"4"})})})]}),e(i,{children:e(t,{sm:12,children:e(u,{data:r,columns:p,title:"Listado de solicitudes de Prestamos Pendientes"})})})]});export{r as data,f as default};
