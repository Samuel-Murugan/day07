var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload =function(){
    var res =JSON.parse(request.response);
    console.log(res);
    //  a.Get all the countries from Asia continent /region using Filter function.
    // Ans:
    var result_asia = res.filter((ele => ele.region == "Asia"));
    console.log(result_asia);
    var country_name =result_asia.map((ele => ele.name));
    console.log(country_name);
    //   b.Get all the countries with a population of less than 2 lakhs using Filter function.
    // Ans:
    var popu = res.filter((ele)=>ele.population<200000);
    console.log(popu);
    var popu_res = popu.map((ele)=>ele.capital)
    console.log(popu_res);
    // c.Print the following details name, capital, flag, using forEach function.
    // Ans:
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{console.log(element.name,element.capital,element.flag)});
    
    
    // d.Print the total population of countries using reduce function.
     // Ans: 
     var total_popu = res.reduce((acc,cv)=>acc+cv.population,0)
     console.log(total_popu);
     // e.Print the country that uses US dollars as currency.
     //Ans:
     var data = JSON.parse(this.response);
     for(i=0;i<data.length;i++){
          if(data[i].currencies[0].code==="USD")
         {
             console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
         }
       }
  









}
