$('document').ready(() => {
	$('#addDataBtn').click(() => {
		$('#dataTable').append('<tr><td>' + $('#nim').val() + '</td><td>' + $('#name').val() + '</td><td>' + $('#origin').val() + '</td></tr>');
	});
});