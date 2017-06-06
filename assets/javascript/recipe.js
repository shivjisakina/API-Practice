// PSEUDO CODE
// Have top/random recipes (depending on API defaults)
// Have a search bar that uses user input and turns it into a query
// Run search
// Show results on right side (col-lg-8)
// Enable user to click on the recipe header and find full recipe
// Add a bunch of css because why not?

// API Documentation (for easy reference)

/* Submitting a Query

 All search requests should be made to the base search API URL. http://food2fork.com/api/search
 All recipe requests should be made to this URL: http://food2fork.com/api/get
 Parameters

 All parameters can be encoded as either HTTP GET or POST parameters.
 Search
 key: API Key
 q: (optional) Search Query (Ingredients should be separated by commas). If this is omitted top rated recipes will be returned.
 sort: (optional) How the results should be sorted. See Below for details.
 page: (optional) Used to get additional results
 Get Recipe
 key: API Key
 rId: Id of desired recipe as returned by Search Query */



var recipe = $(this).attr("data-recipe");
var queryURL = "https://food2fork.com/api/search?q=" + recipe + "&api_key=404bedc61bdcf36a33ddcac7ad6058ae";

