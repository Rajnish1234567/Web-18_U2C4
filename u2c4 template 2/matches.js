// write js code here corresponding to matches.html
var dataArr=JSON.parse(localStorage.getItem("schedule"));
// displayData(dataArr);
var filter=document.querySelector("#filterVenue");
filter.addEventListener("change",function(){
    var selected=document.querySelector("#filterVenue").value
    if(selected=="Mumbai" || selected=="Banglore" || selected=="Hyderabad" || selected=="Delhi" || selected=="Pune")
    {
        var filterList=dataArr.filter(function(elem){
            return elem.venue===selected;
        })
        displayData(filterList)
    }
    else{
        // var filterList=dataArr.filter(function(elem){
        //     return elem.venue
        // })
        displayData(dataArr)
    }
    
});

displayData(dataArr)
function displayData(dataArr){
    dataArr.forEach(function(elem){
        var tr=document.createElement("tr")
        var matchNumber=document.createElement("td")
        matchNumber.innerText=elem.matchNumber;
        var teamA=document.createElement("td");
        teamA.innerText=elem.teamA;
        var teamB=document.createElement("td");
        teamB.innerText=elem.teamB;
        var date=document.createElement("td");
        date.innerText=elem.date;
        var venue=document.createElement("td");
        venue.innerText=elem.venue;
        var fav=document.createElement("td")
        fav.innerText="Favourite";
        fav.style.backgroundColor="blue";
        fav.style.color="white";
        fav.style.cursor="pointer"
        fav.addEventListener("click",function(){
            addFavourite(elem);
        })
        tr.append(matchNumber, teamA,teamB,date,venue,fav)
        document.querySelector("tbody").append(tr)
    })
}
var favArr=JSON.parse(localStorage.getItem("favourites") )|| [];
function addFavourite(elem){
var favObj={
    matchNumber:elem.matchNumber,
    teamA:elem.teamA,
    teamB:elem.teamB,
    date:elem.date,
    venue:elem.venue
}
favArr.push(favObj)
localStorage.setItem("favourites",JSON.stringify(favArr))
}





