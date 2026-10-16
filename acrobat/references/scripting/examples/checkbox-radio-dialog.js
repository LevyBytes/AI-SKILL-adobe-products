var dialog2 =
{
initialize: function(dialog) {
// Set a default value for radio button field
dialog.load({"rd01": true });
this.hasPet = false;
// Disable radio button field
dialog.enable({
"rd01" : this.hasPet,
"rd02" : this.hasPet,
"rd03" : this.hasPet
});
},
commit: function(dialog) {
// When the user presses "Ok", this handler will execute first
console.println("commit");
var results = dialog.store();
// Do something with the data, for example,
var hasPet = (this.hasPet) ? "have" : "don't have";
console.println("You " + hasPet + " a pet.");
if (this.hasPet)
console.println("You have " + this.getNumPets(results) + " pet(s).");
},
getNumPets: function (results) {
for ( var i=1; i<=3; i++) {
if ( results["rd0"+i] ) {
switch (i) {
case 1:
var nPets = "one";
break;
case 2:
var nPets = "two";
break;
case 3:
var nPets = "three or more";
}
}
};
return nPets;
},
ok: function(dialog) {
// The handler for the Ok button will be handed after commit
console.println("Ok!");
},
ckbx: function (dialog) {
// Process the checkbox, if the user has a pet, turn on radios
this.hasPet = !this.hasPet;
dialog.enable({
"rd01" : this.hasPet,
"rd02" : this.hasPet,
"rd03" : this.hasPet
});
},
cancel: function(dialog) { // Handle the cancel button
console.println("Cancel!");
},
other: function(dialog){ // Handle the other button
app.alert("Thanks for pressing me!");
dialog.end("other"); // End the dialog box, return "other"!
},
// The dialog box description
description:
createCheckboxRadioLayout()

};
