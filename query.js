var input = "https://www.myawesomething.com/index.html?full_name=Therese+Blogoyavich&age=44&location=San+Francisco"

function queryParser(inputt) {
  var data = inputt.split("?")[1].split("&");

  var fullNameData = data[0].split("=")[1].replace("+", " ")

  var cityData = data[2].split("=")[1].replace("+", " ")

  return {
    full_name: fullNameData,
    age: data[1].split("=")[1],
    location: cityData
  }
}

console.log(queryParser(input));
