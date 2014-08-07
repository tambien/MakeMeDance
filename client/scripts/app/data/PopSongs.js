define(function(){

	var PopSongs = [
		{
			artist : "Beyonce",
			track : "Drunk in Love",
			uri : "5EmCpD8tUj78VW3kgaEjME",
			bpm : 139.923
		},
		{
			artist : "Blondie",
			track : "Heart of Glass",
			uri : "0a4agFmqHXxcZl1nho1BxM",
			bpm : 114.586
		},
		{
			artist : "The Whispers",
			track : "And The Beat Goes On",
			uri : "1kN4Pp1m4aIbLafnF9uTSc",
			bpm : 122.998
		},
		{
			artist : "Cheryl Lynn",
			track : "Got To Be Real",
			uri : "6iEFcZI1KxxPaAGlnOVn3y",
			bpm : 114.758
		},
		{
			artist : "Michael Jackson",
			track : "Billie Jean",
			uri : "5ChkMS8OtdzJeqyybCc9R5",
			bpm : 117.067
		},
		{
			artist : "Marcia Griffiths",
			track : "Electric Boogie",
			uri : "1JyaAeaXVFnVv5ikwWQVQ4",
			bpm : 108.136
		},
		{
			artist : "Eddy Grant",
			track : "Electric Avenue",
			uri : "4cqUq7n3ad0DhJ2JCVw34v",
			bpm : 121.936
		},
		{
			artist : "Mariah Carey",
			track : "Fantasy",
			uri : "6xkryXuiZU360Lngd4sx13",
			bpm : 102.395
		},
		{
			artist : "MGMT",
			track : "Electric Feel",
			uri : "3FtYbEfBqAlGO46NUDQSAt",
			bpm : 103.013
		},
		{
			artist : "Katy Perry",
			track : "Roar",
			uri : "6F5c58TMEs1byxUstkzVeM",
			bpm : 90
		},
		{
			artist : "Pharell Williams",
			track : "Happy",
			uri : "6NPVjNh8Jhru9xOmyQigds",
			bpm : 94.968
		},
		{
			artist : "Calvin Harris",
			track : "Summer",
			uri : "7b71WsDLb8gG0cSyDTFAEW",
			bpm : 127.948
		},
		{
			artist : "Pitbull",
			track : "Timber",
			uri : "7b71WsDLb8gG0cSyDTFAEW",
			bpm : 129.963
		},
		{
			artist : "Tiesto",
			track : "Red Lights",
			uri : "6oP02i1hRc3Qp9bd36Ya3Z",
			bpm : 124.995
		},
		{
			artist : "Lorde",
			track : "Royals",
			uri : "2dLLR6qlu5UJ5gk0dKz0h3",
			bpm : 84.981
		},
		{
			artist : "Drake feat. Majid Jordan",
			track : "Hold On, We're Going Home",
			uri : "7nBFpFa8ZFMUqzwPmWaD6u",
			bpm : 100.006
		},
		{
			artist : "Rihanna feat Calvin Harris",
			track : "We Found Love",
			uri : "0U10zFw4GlBacOy9VDGfGL",
			bpm : 127.969
		},
		{
			artist : "Rihanna",
			track : "Diamonds",
			uri : "7Kt59L2ZZGtOnIhvMwzG6f",
			bpm : 92.879
		},
		{
			artist : "Daft Punk",
			track : "Lose Yourself to Dance",
			uri : "5CMjjywI0eZMixPeqNd75R",
			bpm : 100.164
		},
		{
			artist: "George McCrae",
			track: "I Get Lifted",
			uri : "5MEbZDarnqcQX7mbYR5rt7",
			bpm: 98.376
		},
		{
			artist: "Prince",
			track: "When U Were Mine",
			uri: "46wKrvbIRQXVbJQoGj7Aso",
			bpm: 143.098
		},
		{
			artist: "David Bowie",
			track: "Rebel Rebel",
			uri: "6LNwcU77wgVQ5PLSnrRwAN",
			bpm: 126
		},
		{
			artist: "Iggy Pop",
			track: "Lust For Life",
			uri: "7egQFB1zrDcvy3kdTaKbpc",
			bpm: 126
		},
		{
			artist: "Icona Pop",
			track: "I Love It",
			uri: "27ilMN1oiW9849fReEYgOj",
			bpm: 126
		},
		{
			artist: "Kylie Minogue",
			track: "Can't Get You Out Of My Head",
			uri: "7MoKXLQeI0Bh2QodCjDO4K",
			bpm: 126
		},
		{
			artist: "The Cardigans",
			track: "Love Fool",
			uri: "0u4htORODiTK9vHVA89MQX",
			bpm: 111.79
		},
		{
			artist: "Nicki Minaj",
			track: "Pound The Alarm",
			uri: "5kcE7pp02ezLZaUbbMv3Iq",
			bpm: 125.05
		},

		{
			artist: "Britney Spears",
			track: "Toxic",
			uri: "717TY4sfgKQm4kFbYQIzgo",
			bpm: 143.025
		},
		{
			artist: "Ke$ha",
			track: "Die Young",
			uri: "6mnjcTmK8TewHfyOp3fC9C",
			bpm: 128
		},
		{
			artist: "Foster The People",
			track: "Pumped Up Kicks",
			uri: "7w87IxuO7BDcJ3YUqCyMTT",
			bpm: 128.171
		},
		{
			artist: "Peter Bjorn & John",
			track: "Young Folks",
			uri: "6M6UoxIPn4NOWW0x7JPRfv",
			bpm: 150.624
		},
		{
			artist: "Miley Cyrus",
			track: "Wrecking Ball",
			uri: "3mRjerKQVtccyYnoCfWOS9",
			bpm: 120
		},
		{
			artist: "Corona",
			track: "Rhythm of the Night",
			uri: "5tlWNoL7eYeo9MRExryxEC",
			bpm: 127.847
		},
		{
			artist: "Katy Perry",
			track: "Last Friday Night (T.G.I.F.)",
			uri: "6zq6pLggC3qtfxUYWoZwfL",
			bpm: 126
		},
		{
			artist: "Michael Jackson",
			track: "Rock With You",
			uri: "2YLmyVJXOe4KRI3KbSXNOi",
			bpm: 114.5
		},
		{
			artist: "ESG",
			track: "Dance",
			uri: "6uE4IomedrEcbFVXNNTYOQ",
			bpm: 138.268
		},
		{
			artist: "The Clash",
			track: "The Magnificent Seven",
			uri: "1W8Jl9KaSSt23ihF1Mej17",
			bpm: 116.082
		},
		{
			artist: "Shitdisco",
			track: "Disco Blood",
			uri: "1Bm7pEL9YECCwg2YKueqAR",
			bpm: 151.58
		},
		{
			artist: "Bye Bye Bicycle",
			track: "Navigation",
			uri: "14WrYIFpHTUMIdjlJbTA6W",
			bpm: 136.085
		},
		{
			artist: "The Maccabees",
			track: "About Your Dress",
			uri: "4SeJWEQfmmsPEDB9JP7HBa",
			bpm: 173.204
		},
		{
			artist: "Liquid Liquid",
			track: "Optimo",
			uri: "5j6H5de3TPYrw4sTjGHKAY",
			bpm: 124
		},
		{
			artist: "PNAU",
			track: "Embrace",
			uri: "02v5X54nrYYGL78zQF7O7l",
			bpm: 128
		},
		{
			artist: "Martin Solvieg",
			track: "Hello (feat. Dragonette)",
			uri: "3sl4dcqSwxHVnLfqwF2jly",
			bpm: 127.988
		},
		{
			artist: "Pitbull feat. Christina Aguilera",
			track: "Feel This Moment",
			uri: "0Hf4aIJpsN4Os2f0y0VqWl",
			bpm: 135.979
		},
		{
			artist: "Lana Del Rey",
			track: "Ride",
			uri: "3l2S2RkGG4lbh7WqmCV3NB",
			bpm: 93.563
		},
		{
			artist: "Bastille",
			track: "Pompeii",
			uri: "7Fw5i56my24ZBnGS7hFX2n",
			bpm: 129.173
		}

	];



	return PopSongs;
});
