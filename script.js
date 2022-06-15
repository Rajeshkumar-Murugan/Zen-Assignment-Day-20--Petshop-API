var dogurl = "https://api.thedogapi.com/v1/breeds/";
var caturl = "https://api.thecatapi.com/v1/breeds";
var dogfacts = "https://catfact.ninja/fact";

//fetching all the url using promise all
var getdetails =  Promise.all([
  fetch(dogurl)
  .then(()=>{
  let display = document.querySelector(".row") 
    display.innerHTML=`<div >
    <center>
    <img  src="https://marsleevamedicity.com/wp-content/uploads/2021/01/loading-please-wait-icon-22.gif" 
     alt="..."/>
     <center/>
    </div>`
  }).then(value => value.json()),
  fetch(caturl)
  .then(()=>{
  let display = document.querySelector(".row") 
    display.innerHTML=`<div >
    <center>
    <img  src="https://marsleevamedicity.com/wp-content/uploads/2021/01/loading-please-wait-icon-22.gif" 
     alt="..."/>
     <center/>
    </div>`
  })
  .then(value => value.json()),
  fetch(dogfacts)
  .then(()=>{
  let display = document.querySelector(".row") 
    display.innerHTML=`<div >
    <center>
    <img  src="https://marsleevamedicity.com/wp-content/uploads/2021/01/loading-please-wait-icon-22.gif" 
     alt="..."/>
     <center/>
    </div>`
  })
  .then(value => value.json())
  ])
  .then((value) => {
    console.log(value)
    return value  
    //json response
  })
  .catch((err) => {
      console.log(err);
  });
  


 //-------Display dog function starts -----------
  async function displaydog(){
    const data = await getdetails;
    const dogdata = data[0] // fetching dogs details

    const doglist = document.querySelector('.row');
    doglist.innerHTML = ''; //wipping the old data  
    
    // loading new data
    dogdata.forEach((arr) => {
      
      doglist.innerHTML  += `
        <div class="col-sm-12 col-md-6 offset-md-2 col-lg-4 offset-lg-0 col-xl-3 col-xxl-3" id="content">
              <div class="container"> 
                  <div class="image-layout">
                      <img src=${arr.image.url} class="image">   
                  </div>
                  <div class="overlay">
                  <div class="text">                       
                          <p>Name: ${arr.name}  </p>
                          <p>Bread for: ${arr.bred_for}</p>
                          <p>Origin: ${arr.origin}</p>
                          <p>Life Span: ${arr.life_span}</p>
                                                
                   </div>       
                  </div>
              </div>
        </div>
          ` 
    })  
  }
   
//-------Display dog function ends -----------

  //-------Display Cat function starts -----------
  async function displaycat(){
    const data = await getdetails;
    const catdata = data[1]
    //console.log(users)
    const catlist = document.querySelector('.row');
    catlist.innerHTML = ''; //wipping the old data  
    // loading new data
    catdata.forEach((arr) => {
      console.log(arr.name)
      catlist.innerHTML  += `
        <div class="col-sm-12 col-md-6 offset-md-2 col-lg-4 offset-lg-0 col-xl-3 col-xxl-3" id="content">
              <div class="container"> 
                  <div class="image-layout">
                      <img src=${arr.image.url} class="image">   
                  </div>
                  <div class="overlay">
                  <div class="text">                       
                          <p>Name: ${arr.name}  </p>
                          <p>Temperament: ${arr.temperament}</p>
                          <p>Origin: ${arr.origin}</p>
                          <p>Life Span: ${arr.life_span}</p>
                                               
                   </div>       
                  </div>
              </div>
        </div>
          ` 
    })  
  }
  
  //-------Display cats function Ends -----------

  //-------Display random fact function starts -----------

  async function randomfact(){
    const data = await getdetails;
    const dogfact = data[2]
  
    const factdata = document.querySelector('.row');
    factdata.innerHTML = '';
    factdata.innerHTML = `
    <div class="facts">
    <h3>${dogfact.fact}</h3> 
    </div>
    `
   }
   randomfact()
  
  //-------Display random fact function ends -----------
