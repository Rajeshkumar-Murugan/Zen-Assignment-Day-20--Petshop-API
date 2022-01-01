var dogurl = "https://api.thedogapi.com/v1/breeds/";
var caturl = "https://api.thecatapi.com/v1/breeds";
var dogfacts = "https://catfact.ninja/fact";

var getdetails = Promise.all([
  
  fetch(dogurl).then(value => value.json()),
  fetch(caturl).then(value => value.json()),
  fetch(dogfacts).then(value => value.json())
  ])
  .then((value) => {
    console.log(value)
    return value  
    //json response
  })
  .catch((err) => {
      console.log(err);
  });



  async function displaydog(){
    const data = await getdetails;
    const dogdata = data[0]
    //console.log(users)
    const userslist = document.querySelector('.row');
    userslist.innerHTML = ''; //wipping the old data  
    // loading new data
    dogdata.forEach((user) => {
      console.log(user.name)
      userslist.innerHTML  += `
        <div class="col-sm-12 col-md-6 offset-md-2 col-lg-4 offset-lg-0 col-xl-3 col-xxl-3" id="content">
              <div class="container"> 
                  <div class="image-layout">
                      <img src=${user.image.url} class="image">   
                  </div>
                  <div class="overlay">
                  <div class="text">                       
                          <p>Name: ${user.name}  </p>
                          <p>Bread for: ${user.bred_for}</p>
                          <p>Origin: ${user.origin}</p>
                          <p>Life Span: ${user.life_span}</p>
                                                
                   </div>       
                  </div>
              </div>
        </div>
          ` 
    })  
  }
   
  
  async function displaycat(){
    const data = await getdetails;
    const catdata = data[1]
    //console.log(users)
    const userslist = document.querySelector('.row');
    userslist.innerHTML = ''; //wipping the old data  
    // loading new data
    catdata.forEach((user) => {
      console.log(user.name)
      userslist.innerHTML  += `
        <div class="col-sm-12 col-md-6 offset-md-2 col-lg-4 offset-lg-0 col-xl-3 col-xxl-3" id="content">
              <div class="container"> 
                  <div class="image-layout">
                      <img src=${user.image.url} class="image">   
                  </div>
                  <div class="overlay">
                  <div class="text">                       
                          <p>Name: ${user.name}  </p>
                          <p>Temperament: ${user.temperament}</p>
                          <p>Origin: ${user.origin}</p>
                          <p>Life Span: ${user.life_span}</p>
                                               
                   </div>       
                  </div>
              </div>
        </div>
          ` 
    })  
  }
  
  async function randomfact(){

    const data = await getdetails;
    const dogfact = data[2]
    //console.log(users)
    const userslist = document.querySelector('.row');
    userslist.innerHTML = '';
    userslist.innerHTML = `
    <div class="facts">
    <h3>${dogfact.fact}</h3> 
    </div>
    `
   }
   randomfact()
  
  