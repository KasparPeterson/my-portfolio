function chat_with_trump() {
    question = document.getElementById("question").value
    console.log("Chat with trump, question: " + question);
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://35.190.40.9:8080/chat",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
      },
      "processData": false,
      "data": "{\"message\": \"" + question + "\"}"
    }

    $.ajax(settings).done(function (response) {
      console.log(response);

      answer = response.responses[0];
      console.log("Answer: " + answer);
      document.getElementById("answer").innerHTML = answer
    });
}


