function showInput() {
    const text = document.getElementById("popup");
    const butn = document.getElementById("showAPII");
    const getstarted = document.getElementById("getStarted");
    text.classList.toggle("hide");
    text.classList.toggle("show");
    butn.classList.toggle("show");
    getstarted.classList.toggle("hide");
}

function nFormatter(num) {
     if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
     }
     if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
     }
     if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
     }
     return num;
}

function showAPI(){

    let result=[];
    

    let baseLink ='https://api.whoisfreaks.com/v1.0/whois?apiKey=6a1ce88d99304a8a9cc2c89ff0283643&whois=live&domainName=';
    let postLink ='&format=JSON';
    let userinput=document.getElementById('popup').value;
    let completeLink = baseLink + userinput ;

    console.log(completeLink)
    

fetch(completeLink).then((data)=>{
    return data.json();
    console.log('data');
    console.log(data);
}).then((textdata)=>{
    console.log('data after json');
    console.log(textdata);
    let data12=JSON.stringify(textdata,null,4)
    
    //    for(var i in textdata){
    //        result.push([i , textdata[i]]);
    //    }
    
        
   

    var myDiv = document.getElementById("inertext");
    myDiv.innerHTML = data12;
    
    }).catch((err)=>{
        console.log(err);
    });
    
    
}

fetch('https://billing.ipgeolocation.io/plan').then((data)=>{
    return data.json();

}).then((dataobj)=>{
    console.log(dataobj);
    let data1="";
    let data0="";
    let data2="";
    let data3="";
    

   
    
    dataobj.slice(1, 9).map((values) =>{
       
    
        data0=`<div class="priceBox">
        <div class="head">
        <div>
                <h1 class="boxheading">developer</h1>
                <h3 class="price">free</h3>
                <p class="usage">For Non-ommercial Usage</p>
                <div class="innerbox"></div>
            </div> 
        </div>
        <div class="requests">
            <h3 class="dark">30K requests per month</h3>
        </div>
        <div class="limit">
            <p id="limit">1K Daily Limit</p>
        </div>
        <div class="button1">
            <button id="signUp">sign Up For Free!</button>
        </div>
    </div>`

        data1+=`
        <div class="priceBox">
        <div class="head">
           <div>
                <h1 class="boxheading">${values.name}</h1>
                <h3 class="price">$${values.rate} </h3>
                <p class="usage">Per ${values.interval}*</p>
                <div class="innerbox"></div>
            </div> 
        </div>
        <div class="requests">
            <h3 class="dark">${nFormatter(values.planApiUsageLimit.requests)} requests per ${values.interval}</h3>
        </div>
        <div class="limit">
            <p id="limit">$${values.planApiUsageLimit.surchargeRate} per extra ${nFormatter(values.planApiUsageLimit.surchargeRequests)} requests </p>
        </div>
        <div class="button1">
            <button id="signUp">sign Up For Free!</button>
        </div>
    </div>`
    })

    dataobj.slice(9, 17).map((values) =>{
    discount=(Math.round(values.rate*(120/100)))  
    
        data2=`<div class="priceBox">
        <div class="head">
        <div>
                <h1 class="boxheading">developer</h1>
                <h3 class="price">free</h3>
                <p class="usage">For Non-ommercial Usage</p>
                <div class="innerbox"></div>
            </div> 
        </div>
        <div class="requests">
            <h3 class="dark">30K requests per month</h3>
        </div>
        <div class="limit">
            <p id="limit">1K Daily Limit</p>
        </div>
        <div class="button1">
            <button id="signUp">sign Up For Free!</button>
        </div>
    </div>`

        data3+=`
        <div class="priceBox">
        <div class="head">
           <div>
                <h1 class="boxheading">${values.name}</h1>
                <h3 class="price">$${values.rate} <span class="discount"><del>$${discount}</del></span></h3>
                <p class="usage">Per ${values.interval}*</p>
                <div class="innerbox"></div>
            </div> 
        </div>
        <div class="requests">
            <h3 class="dark">${nFormatter(values.planApiUsageLimit.requests)} requests per ${values.interval}</h3>
        </div>
        <div class="limit">
            <p id="limit">$${values.planApiUsageLimit.surchargeRate} per extra ${nFormatter(values.planApiUsageLimit.surchargeRequests)} requests </p>
        </div>
        <div class="button1">
            <button id="signUp">sign Up For Free!</button>
        </div>
    </div>`
    })

 
document.getElementById("card").innerHTML=data0+data1;
const yearly=document.getElementById("switch");
yearly.addEventListener('click', function showYearly(){
    return document.getElementById("card").innerHTML=data2+data3;
});

document.getElementById("card").innerHTML=data0+data1;

const togler=document.getElementById("ym");

togler.addEventListener('change', ()=> {
    if(togler.checked){
    return document.getElementById("card").innerHTML=data2+data3;
    }
    else{
        return document.getElementById("card").innerHTML=data0+data1;
    }
    
 });


}).catch((error)=>{
    console.log(error);
});


    drp=document.getElementsByClassName("drp-dwn");
    drp.forEach(function(a) {
        a.onclick = function() {
            var b = a.querySelector(".drp-dwn");
            b.classList.contains("visible") ? b.classList.remove("visible") : (document.querySelectorAll(".drp-dwn").forEach(function(c) {
                c.classList.remove("visible")
            }),
            b.classList.toggle("visible"))
        }
    });