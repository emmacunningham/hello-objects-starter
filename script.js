var tweet = {
  username: "emma",
  name: "Emma Cunningham",
  content: "Hello, world!",
  timestamp: "3/7/2017 3pm",
};


$(document).ready(pageReady);

function pageReady() {

  // Creates an h2 element with name as the content
  var nameElement = $("<h2>"+ tweet.name + "</h2>");

  // Creates an h3 element with username as the content
  var usernameElement = $("<h3>Username: "+ tweet.username + "</h3>");

  // Creates an h3 element with content as the content
  var contentElement = $("<h3>Content: "+ tweet.content + "</h3>");

  // Creates an h3 element with timestamp as the content
  var timestampElement = $("<h3>Time: "+ tweet.timestamp + "</h3>");


  // Append each of the elements to the #people-container element
  $("#tweet-container").append(nameElement);
  $("#tweet-container").append(usernameElement);
  $("#tweet-container").append(contentElement);
  $("#tweet-container").append(timestampElement);

}

