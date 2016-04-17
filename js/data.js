function jCallback(result){
    var str = JSON.stringify(result);
    var type;
  //  console.log(str);
    if(str.indexOf("positive") != -1){
        type = "positive";
    }
    else {
        type = "negative";
    }

    var score = str.substring((str.indexOf("score") + 8), (str.indexOf("score") + 15));
    score*= 1.5;
    score = score.toFixed(4);
    var AmountToWorryString;
    if (score <= -.6){
      AmountToWorryString = "A sentiment analysis of the tweets posted on the twitter page supports the statement that there is a significant chance that the account holder of the twitter page may have depression and this should be looked into further by an authorized physician"
    }else if(score <= -.3){
      AmountToWorryString = "A sentiment analysis of the tweets posted on the twitter page supports the statement that there is a low to medium chance that the account holder of the twitter page may have depression and this could be looked into further by an authorized physician"
    }
    else if(score < 0){
      AmountToWorryString = "A sentiment analysis of the tweets posted on the twitter page supports the statement that there is a low chance that the account holder of the twitter page may have depression and this may be looked into further by an authorized physician but the analysis does not show negative tweets being severely favorable to positive tweets"
    }else{
      AmountToWorryString = "A sentiment analysis of the tweets posted on the twitter page supports the statement that there is close to no chance that the account holder of the twitter page may have depression."
    }

    //You can delete the next two lines once stuff starts working but imma leave them in rn just in case u wanna keep them for testing purposes
    console.log(type);
    console.log(score);
    console.log(AmountToWorryString);

    return AmountToWorryString;
}

function getJ(callback,username){

  var urlStr = "http://gateway-a.watsonplatform.net/calls/url/URLGetTextSentiment?apikey=cd8d11de0519c6403e98928b3534d7dbabca58e8&url=https://twitter.com/"+username+"&outputMode=json";

  $.ajax({
    dataType: "json",
    url: urlStr,
    data: "GET",
    success: callback
  });
}
