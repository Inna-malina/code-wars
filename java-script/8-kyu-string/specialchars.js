// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;

function htmlspecialchars(formData) {
  let arr = formData.split('');
  let res = arr.map(function (elem) {
    if (elem == '<') {
      elem = "&lt;";
    }
    else if (elem == '>') {
      elem = "&gt;";
    }
    else if (elem == '"') {
      elem = "&quot;";
    }
    else if (elem == '&') {
      elem = "&amp;";
    }
    return elem;
  }).join('');
  console.log(res);
}

htmlspecialchars("<h2>Hello World</h2>");