// a program to input forms and
// return the names of those forms which end with "cy"

const governmentForms = [{
  name: "Plutocracy",
  definition: "Rule by the wealthy"
},
{
  name: "Oligarchy",
  definition: "Rule by a small number of people"
},
{
  name: "Kleptocracy",
  definition: "Rule by the thieves"
},
{
  name: "Theocracy",
  definition: "Rule by a religious elite"
},
{
  name: "Democracy",
  definition: "Rule by the people"
},
{
  name: "Autocracy",
  definition: "Rule by a single person"
}];

// Expected output
// [Plutocracy,Kleptocracy,Theocracy,Democracy,Autocracy]

function endCy(governmentForms) {
  return governmentForms
    .map(form => form.name)
    .filter(name => name.toLowerCase().endsWith("cy"));
}

console.log(endCy(governmentForms));