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

    var myDiv = document.getElementById("inertext");
    myDiv.innerHTML = data12;
    
    }).catch((err)=>{
        console.log(err);
    });
    
    
}
window.onload = function () {
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        fetch('https://billing.ipgeolocation.io/plan').then((data)=>{
            return data.json();

        }).then((dataobj)=>{
        
            let data1="";
            let data0="";
            let data2="";
            let data3="";    
            dataobj.map((values) =>{
                saveData();
            
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
                    if(values.interval=='month'){
                        console.log('monthly is running');
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
            }

            //dataobj.slice(9, 17).map((values) =>{
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
            if(values.interval=='year'){
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
            }})
            
        
        //document.getElementById("card").innerHTML=data0+data1;

        function saveData(){
            console.log('saveData running');
            sessionStorage.setItem('data0',data0);
            sessionStorage.setItem('data1',data1);
            sessionStorage.setItem('data2',data2);
            sessionStorage.setItem('data3',data3);
        };
        
        }).catch((error)=>{
            console.log(error);
        });
        sessionStorage.setItem("hasCodeRunBefore", true);
        
    }};

fetch("https://billing.whoisfreaks.com/db_type/getdomain-whois-table-stat").then((pricingdata)=>{
    return pricingdata.json();

    }).then((billings)=>{

        let countData="";
    
        countData = `<div class="counts">
    <div class="millionsss">
        <span class="nums" data-val="1986">0</span>
        <span></span>
        </div>Historical Data Since</div>


    <div class="counts">
    <div class="millionsss">
        <span class="nums" data-val="${billings[0].domainWhoisTableStatId}">0</span>
        <span class="num">+</span>
        </div>TLDs</div>

            <div class="counts">
                <div class="millionsss">
                    <span class="nums" data-val="${billings[0].totalDomains_no}">0</span>
                    <span class="num">M+</span>
                    </div>Domains Tracked</div>

            <div class="counts">
            <div class="millionsss">
            <span class="nums" data-val=${billings[0].totalWhoisNo}>0</span>
            <span class="num">M+</span>
                </div>WHOIS Records</div>`

            
            document.getElementById('counter').innerHTML=countData;
        
       

        let valueDisplays =document.querySelectorAll('.nums');
        let interval = 10000;
        valueDisplays.forEach((valueDisplays) =>{
            let startValue=0;
            let endValue = parseInt(valueDisplays.getAttribute("data-val"));
            console.log('endValue',endValue)
           
            let duration = Math.floor(interval/endValue);
            let counter = setInterval(function(){
                startValue +=1;
                valueDisplays.textContent=startValue;
                if(startValue== parseInt(endValue)){
                    clearInterval(counter);
                }
            },duration,);
        })

    }).catch((err)=>{
        console.log(err);
    });

    
    
    function onloadis(){
        const togler=document.getElementById("ym");
        const status1=sessionStorage.getItem("status");
        if(status1=="true"){
            console.log("true");
            togler.setAttribute("checked","checked");
            document.getElementById("card").innerHTML=sessionStorage.getItem("data2")+sessionStorage.getItem("data3");
            
        }else{
            console.log("false");
            document.getElementById("card").innerHTML=sessionStorage.getItem("data0")+sessionStorage.getItem("data1");
            
        
        }
     }
    


