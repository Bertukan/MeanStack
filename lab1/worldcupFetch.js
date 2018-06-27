  window.onload = function(){
  fetch('https://worldcup.sfg.io/matches/').then(response => {
    return response.json();
  }).then(data => {
 
for(index in data){
    $("#myTable").append("<tr><td>"+data[index].location+"<td>"+data[index].home_team_country+"</td><td>"+data[index].away_team_country+"</td><td>"+data[index].home_team.goals+"  -  "+data[index].away_team.goals +"</td</tr>")

  } 
  }).catch(err => {
    // Do something for an error here
  });
 
const inputSource = Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
.map(e=>e.target.value)
.switchMap(v=> {
    return Rx.Observable.from(getTeam(v))
})
  //   inputSource.subscribe(e => {
//   Rx.Observable.from(getTeam(e.target.value))
//   .subscribe(x=> {
//     $("#myTable").append("<tr><td>"+x.data.country+"</td></tr>");
//   })
 


 inputSource.subscribe(x=>{
    
      fetch(x.url).then(response => {
        return response.json();
      }).then(data => {
        console.log(data)
       for(index in data){
         $("#myTable").append("<tr><td>"+data[index].location+"<td>"+data[index].home_team_country+"</td><td>"+data[index].away_team_country+"</td><td>"+data[index].home_team.goals+"  -  "+data[index].away_team.goals +"</td</tr>")
       }
    }).catch()})


  // $("#myTable").append("<tr><td>"+x.data.country+"</td></tr>");
 
 // $("#myTable").append("<tr><td>"+data[key].home_team_country+"</td><td>"+data[key].country+"</td><td>"+data[key].fifa_code+"</td><td>"+data[key].group_id+"</td></tr>");

 
function getTeam(name){
     return fetch("https://worldcup.sfg.io/matches/country?fifa_code="+name)
}
  }