


var league = {
    "Adam": "DEN",
    "Jacob": "LAC",
    "Jake": "NYJ",
    "Nick": "ARI",

}



var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

startYear = "2000"
endYear = "2019"

start_date = startYear + "-01-01"
end_date = endYear + "-12-31"


var client = new HttpClient();

//Get league teams ranked by number of arrests for league screen
client.get('https://NflArrest.com/api/v1/team?start_date=' + start_date + '&end_date=' + end_date, function(response) {
    // do something with response
    var dataObject = JSON.parse(response)
    // console.log(dataObject)
    for(i = 0; i < dataObject.length; i++){
        for(var user in league){
            // console.log(league[user])
            if(dataObject[i]["Team"] == league[user]){
                returnString = "Team: " + dataObject[i]["Team"] + ", No. of Arrests: " + dataObject[i]["arrest_count"]
                console.log(returnString)
            }
        }
    }
});


teamID = "DEN"
limit = "5"

//return top 5 players from Broncos (teamID) for individual user team screen
client.get('https://NflArrest.com/api/v1/team/topPlayers/' + teamID + '?start_date=' + start_date + '&end_date=' + end_date + '&limit=' + limit, function(response) {
    // do something with response
    var dataObject = JSON.parse(response)
    // console.log(dataObject)
    for(i = 0; i < dataObject.length; i++){
        returnString = "Player Name:  " + dataObject[i]["Name"] + ", No. of Arrests: " + dataObject[i]["arrest_count"]
        console.log(returnString)
    }

});

//return top 5 crimes from Broncos (teamID) for individual user team screen
client.get('https://NflArrest.com/api/v1/team/topCrimes/' + teamID + '?start_date=' + start_date + '&end_date=' + end_date + '&limit=' + limit, function(response) {
    // do something with response
    var dataObject = JSON.parse(response)
    // console.log(dataObject)
    for(i = 0; i < dataObject.length; i++){
        returnString = "Crime:  " + dataObject[i]["Category"] + ", No. of Arrests: " + dataObject[i]["arrest_count"]
        console.log(returnString)
    }
});




