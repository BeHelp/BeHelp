<template>
  <div>
    <h1>Contact</h1>
    <p>Contacts part of the application</p>
  
      <router-link to="/thankyou" > <button class="tempobtn">Click me </button>  </router-link>
   
  </div>
</template>
//!This button is just a place holder
<style>

.tempobtn {
      text-align: center;
      cursor: pointer;
      white-space: nowrap;
      font-family: Montserrat;
      font-size: 1rem;
      text-transform: uppercase;
      padding: 2% 5% 2% 5%;
      margin-bottom: 8%;
      border: none;
      border-radius: 25px;
      text-decoration: none;
      overflow: hidden;
     color: black;
     background-color: rgb(245, 176, 49);

      
    }

    .tempobtn:hover {
        text-transform: uppercase;
        font-weight: bolder;
        color: black;
        background-color: orange;
        padding: 2% 5%;
      }
</style>
