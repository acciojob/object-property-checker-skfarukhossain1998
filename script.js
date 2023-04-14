const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  return key in sampleObject // Check the property by key , 'in' used to search property in sample object 
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
