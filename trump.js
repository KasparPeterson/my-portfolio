function chat_with_trump() {
    document.getElementById("answer").innerHTML = ""
    context = document.getElementById("context").value
    question = document.getElementById("question").value
    payload = question + " " + context
    data = {"message": payload}
    console.log("Chat with trump, payload: " + payload);
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://kasparpeterson.com:8080/chat",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
      },
      "processData": false,
      "data": JSON.stringify(data)
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
      answer = response.reply;
      console.log("Answer: " + answer);
      document.getElementById("answer").innerHTML = answer
    });
}


