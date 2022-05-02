// write js code here corresponding to index.html
// You should add submit event on the form
var form=document.querySelector("#masaiForm");
form.addEventListener("submit",submitData)
var dataArr=[];
function submitData(){
    event.preventDefault();
    if(form.matchNum.value=="" || form.teamA.value=="" || form.teamB.value=="" || form.date.value=="" || form.venue.value=="")
    {
        alert("Fill all value")
    }
    else{
        var dataObj={
            matchNumber:form.matchNum.value,
            teamA:form.teamA.value,
            teamB:form.teamB.value,
            date:form.date.value,
            venue:form.venue.value
        }
        dataArr.push(dataObj);
        localStorage.setItem("schedule",JSON.stringify(dataArr));
    }
    
}