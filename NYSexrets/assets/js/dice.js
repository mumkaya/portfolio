var Game = {
    locations: 10,
    roll: 0
};

var locations = ['c54', 'brooklyn', 'opaque', 'bath', 'paddle', 'pdt', 'tbb', 'rlr', 'beps', 'city_hall','paley_park'];

roll_dice();

function roll_dice() {
    Game.roll = Math.ceil(Math.random() * Game.locations);
    select_next_location();
    console.log(Game.roll);
}

function select_next_location() {
    $('.door').addClass(locations[Game.roll]);
    $('.door').html('<img src="assets/images/door-' + locations[Game.roll] + '.gif" />');
    $('.door-link').attr('href', locations[Game.roll] + '.html');
}


$(".door").click(function(e) {
	e.preventDefault();
	$("body").css("background-color","black");
	setTimeout(function(){
		$("body").css("background-color","white");
	},200);
	// 	setTimeout(function(){
	// 	$("body").css("background-color","black");
	// },800);
	setTimeout(function(){
					window.location.assign(locations[Game.roll] + ".html");

	},200);


})