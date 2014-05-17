define(function(){

	var EDMSongs = [
		{
			artist : "Daft Punk",
			track : "One More Time",
			uri : "0DiWol3AO6WpXZgp0goxAV",
			bpm : 122.79
		},
		{
			artist : "Ellie Goulding",
			track : "Goodness Gracious (Chainsmokers Extended Remix)",
			uri : "4gjrsP1Tmrqh1IiHhMXQm5",
			bpm : 128.014
		},
		{
			artist : "Buraka Som Sistema",
			track : "Aqui Para Voces",
			uri : "4t3mArDLqiOnrHLNhDiNS8",
			bpm : 135.156
		},
		{
			artist : "Traxman",
			track : "Lady Dro",
			uri : "1Ep3EKsBha8yGkKeP78Sqk",
			bpm : 160.139
		},
		{
			artist: "Tshetsha Boys",
			track: "Nwampfundla",
			uri: "4fOSxhBn0amLyospbb5W7c",
			bpm: 174
		},
		{
			artist: "Matias Aguayo",
			track: "Rollerskate",
			uri: "7yIsRdoQuMUZVS0KNkSVlZ",
			bpm: 121
		},
		{
			artist: "Major Lazer",
			track: "Pon De Floor",
			uri: "2zCZBKZBApHHeWpbLCsadU",
			bpm: 126
		},
			{
			artist: "The Crystal Method",
			track: "Busy Child",
			uri: "4yEpQxfjAbBnXnAAnzFTuT",
			bpm: 125.025
		},
		{
			artist: "The Prodigy",
			track: "Breathe",
			uri: "5oPUBUzrAnwvlmMzl1VW7Y",
			bpm: 130.047
		},
		{
			artist: "Bassnectar",
			track: "Bass Head",
			uri: "2EQhNdnP2LT96NnkkKkm0N",
			bpm: 85
		},
		{
			artist: "Skream",
			track: "Rutten",
			uri: "058BZHYf0FRbYsebbWknWz",
			bpm: 140.019
		},
		{
			artist: "Baauer",
			track: "Harlem Shake",
			uri: "2eP6GhdRE1Ydnw2uXzo7q8",
			bpm: 139.812
		},
		{
			artist: "PSY",
			track: "Gangnam Style (강남스타일)",
			uri: "7FLpSHKendd1g5AqwAVcmU",
			bpm: 132
		},
		{
			artist: "Skrillex",
			track: "Bangarang",
			uri: "6VRhkROS2SZHGlp0pxndbJ",
			bpm: 110.025
		},
		{
			artist: "deadmau5",
			track: "Strobe",
			uri: "46v4pMAhjcUhud94jiCtqr",
			bpm: 128
		},
		{
			artist: "Gorillaz",
			track: "Dare",
			uri: "4yeXO4Iqba33ltD7q8uDbM",
			bpm: 120.269
		},
		{
			artist: "Basement Jaxx",
			track: "Red Alert",
			uri: "1yJve58KxoAY8OKLkyrViS",
			bpm: 126.854
		},
		{
			artist: "LCD Soundsystem",
			track: "I Can Change",
			uri: "2073QOEC8rBtSyTsRyaWiP",
			bpm: 117
		},
		{
			artist: "Icona Pop",
			track: "All Night",
			uri: "1a3iWvMF1FJJZ9GvhtQNTc",
			bpm: 124
		},
		{
			artist: "Justice",
			track: "D.A.N.C.E.",
			uri: "2hQCzcb3qyZirWzOD5Yzoj",
			bpm: 110.181
		},
		{
			artist: "Frankie Knuckles",
			track: "Your Love",
			uri: "1YDOQZw36sklFHS0ZdK8c3",
			bpm: 118.732
		},
		{
			artist: "Disclosure",
			track: "When A Fire Starts To Burn",
			uri: "7cyUppcNj7ojpzPlB0CPW9",
			bpm: 124
		},
		{
			artist: "Krafterk",
			track: "Tour De France",
			uri: "5uNlgK7FEg6r9BGy12P9Sx",
			bpm: 134
		},
		{
			artist: "Mount Kimbie",
			track: "Carbonated",
			uri: "5d3qZ4xZv0inQK292Mmnhh",
			bpm: 134.825
		},
		{
			artist: "Gold Panda",
			track: "You",
			uri: "0tVZk9Cg8jjMHWbAyoJ7JB",
			bpm: 179.972
		},
		{
			artist: "Grimes",
			track: "Oblivion",
			uri: "4P6n0udLAnmCNXVcobYbsK",
			bpm: 155.959
		},
		{
			artist: "Simian vs Justice",
			track: "We Are Your Friends",
			uri: "49ErwcBYfYRPNBdRuPvpYA",
			bpm: 123
		},
		{
			artist: "Ghostland Observatory",
			track: "Sad Sad City",
			uri: "2U8g0EtHlVT9BiftWILIu5",
			bpm: 115
		},
		{
			artist: "Passion Pit",
			track: "Little Secrets",
			uri: "3kb38wezoUA8ki5jPYy3t5",
			bpm: 99.882
		},
		{
			artist: "Black Moth Super Rainbow",
			track: "Gangs in the Garden",
			uri: "3uLZV3Wz4B64VVvddUplFp",
			bpm: 119.939
		},
		{
			artist: "The Knife",
			track: "Heartbeats",
			uri: "2l9nSco55fHVVNGIioxKZT",
			bpm: 88
		},
		{
			artist: "Junior Boys",
			track: "In The Morning",
			uri: "0ULnyU2xKesow2CotKY1O9",
			bpm: 120
		},
		{
			artist: "Lykke Li",
			track: "I Follow Rivers (Magician Remix)",
			uri: "4Jv7lweGIUOFQ7Oq2AtAh9",
			bpm: 121.983
		},
		{
			artist: "Soulwax",
			track: "NY Excuse",
			uri: "7rnAXmOwAQkn2nZaae1Xfs",
			bpm: 133.901
		},
		{
			artist: "Soulwax",
			track: "NY Excuse",
			uri: "7rnAXmOwAQkn2nZaae1Xfs",
			bpm: 133.901
		},
		{
			artist: "Shout Out Louds",
			track: "Tonight I Have to Leave It (Kleerup Remix)",
			uri: "1XbNKrlzXgZZIykfACTAoR",
			bpm: 130
		},
		{
			artist: "CEO",
			track: "Come With Me",
			uri: "3xSmR5MwBuySVBoKA9ZOLg",
			bpm: 127
		},
		{
			artist: "CEO",
			track: "Come With Me",
			uri: "3xSmR5MwBuySVBoKA9ZOLg",
			bpm: 127
		},
		{
			artist: "Bonde Do Role",
			track: "Office Boy (CSS Remix)",
			uri: "6YQCMUdW7FxMthpE5Iz5Z7",
			bpm: 130
		},
		{
			artist: "Daft Punk",
			track: "Instant Crush",
			uri: "2cGxRwrMyEAp8dEbuZaVv6",
			bpm: 109.98
		},
		{
			artist: "Rokysopp & Robyn",
			track: "Do it Again",
			uri: "4y8XhpQ7YqFLyz2o7c7r7X",
			bpm: 123.918
		}
	];

	return EDMSongs;
});
