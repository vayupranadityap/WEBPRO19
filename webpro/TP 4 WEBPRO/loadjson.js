// Insert your ajax code here
console.log('done2')
let tweetData;
$.ajax({
  dataType: "json",
  url: "http://localhost/datatweet.json",
})
	.done((data) => {
		console.log(data);
		console.log('done')
	});
// console.log(tweetData);
// End of your ajax code
// Insert your getJSON code here

// End of your code