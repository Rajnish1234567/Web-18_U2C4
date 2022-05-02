// write js code he corresponding to favourites.html
var favArr=JSON.parse(localStorage.getItem("favourites"))
displayFav(favArr)
function displayFav(favArr)
{
    favArr.forEach(function(elem){
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
        fav.innerText="Delete";
        fav.style.backgroundColor="Red";
        fav.style.color="white";
        fav.style.cursor="pointer"
        fav.addEventListener("click",function(elem,index){
        favArr.splice(index,1);
        localStorage.setItem("favourites", JSON.stringify(favArr))
        window.location.reload();
        })
        tr.append(matchNumber, teamA,teamB,date,venue,fav)
        document.querySelector("tbody").append(tr)
    })

}
