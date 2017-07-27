var serviceURL = "https://swapi.co/api/people/";

var people;

$('#peopleListPage').bind('pageinit', function(event) {
	getStarWarsPeopleList();
});

function getStarWarsPeopleList() {
	$.getJSON(serviceURL, function(data) {
		$('#peopleList li').remove();
		people = data.items;
		$.each(people, function(index, person) {
			$('#peopleList').append('<li><a href="persondetails.html?id=' + person.id + '">' +
					'<img src="pics/' + person.picture + '"/>' +
					'<h4>' + person.firstName + ' ' + person.lastName + '</h4>' +
					'<p>' + person.title + '</p>' +
					'<span class="ui-li-count">' + person.reportCount + '</span></a></li>');
		});
		$('#peopleList').listview('refresh');
	});
}