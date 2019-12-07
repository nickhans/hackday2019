


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


start_date = "2019-01-01"
end_date = "2019-12-31"


// var teamID = league[key]

var client = new HttpClient();
client.get('https://NflArrest.com/api/v1/team?start_date=' + start_date + '&end_date=' + end_date, function(response) {
    // do something with response
    var dataObject = JSON.parse(response)
    console.log(dataObject)
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
// console.log('\n')




