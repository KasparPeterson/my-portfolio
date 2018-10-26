function chat_with_trump() {
    question = document.getElementById("question").value
    console.log("Chat with trump, question: " + question);
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://kasparpeterson.com:8080/chat",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
      },
      "processData": false,
      "data": "{\"message\": \"" + question + "\"}"
    }

    $.ajax(settings).done(function (response) {
      console.log(response);

      answer = response.reply;
      console.log("Answer: " + answer);
      document.getElementById("answer").innerHTML = answer
    });
}


