define(function(){

	var videos = [
		{
			"url" : "HIPHOP_01.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "like",
			"bpm" : 116
		}, 
		{
			"url" : "HIPHOP_02.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "like",
			"bpm" : 116
		}, 
		{
			"url" : "HIPHOP_03.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "love",
			"bpm" : 116
		}, 
		{
			"url" : "HIPHOP_04.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "hate",
			"bpm" : 126
		}, 
		{
			"url" : "HIPHOP_05.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Manolo", "Paulie"],
			"mood" : "like",
			"bpm" : 126
		}, 
		{
			"url" : "HIPHOP_06.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Manolo", "Paulie"],
			"mood" : "love",
			"bpm" : 126
		}, 
		{
			"url" : "HIPHOP_07.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Paulie", "Manolo"],
			"mood" : "love",
			"bpm" : 111.577
		}, 
		{
			"url" : "HIPHOP_08.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Manolo", "Paulie"],
			"mood" : "dislike",
			"bpm" : 111.577
		}, 
		{
			"url" : "HIPHOP_09.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "hate",
			"bpm" : 112
		}, 
		{
			"url" : "HIPHOP_10.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "love",
			"bpm" : 117
		}, 
		{
			"url" : "HIPHOP_11.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Elijah", "Paulie"],
			"mood" : "dislike",
			"bpm" : 117
		}, 
		{
			"url" : "HIPHOP_12.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Elijah", "Paulie"],
			"mood" : "like",
			"bpm" : 102
		}, 
		{
			"url" : "HIPHOP_13.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Elijah", "Paulie"],
			"mood" : "love",
			"bpm" : 102
		}, 
		{
			"url" : "HIPHOP_14.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "like",
			"bpm" : 109
		}, 
		{
			"url" : "HIPHOP_15.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "love",
			"bpm" : 109
		}, 
		{
			"url" : "HIPHOP_16.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "dislike",
			"bpm" : 109
		}, 
		{
			"url" : "HIPHOP_17.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "dislike",
			"bpm" : 109
		}, 
		{
			"url" : "HIPHOP_18.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "dislike",
			"bpm" : 109
		}, 
		{
			"url" : "HIPHOP_19.mp4", 
			"genre" : "HipHop", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "hate",
			"bpm" : 109
		}, 
		{
			"url" : "POP_01.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "like",
			"bpm" : 114.495
		}, 
		{
			"url" : "POP_02.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "love",
			"bpm" : 114.495
		}, 
		{
			"url" : "POP_03.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "dislike",
			"bpm" : 121
		}, 
		{
			"url" : "POP_04.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Elijah", "Paulie"],
			"mood" : "love",
			"bpm" : 95
		}, 
		{
			"url" : "POP_05.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Elijah", "Paulie"],
			"mood" : "like",
			"bpm" : 116.74
		}, 
		{
			"url" : "POP_06.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Elijah", "Paulie"],
			"mood" : "hate",
			"bpm" : 130
		}, 
		{
			"url" : "POP_07.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Paulie", "Manolo"],
			"mood" : "like",
			"bpm" : 126
		}, 
		{
			"url" : "POP_08.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Paulie", "Manolo"],
			"mood" : "dislike",
			"bpm" : 120
		}, 
		{
			"url" : "POP_09.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Paulie", "Manolo"],
			"mood" : "love",
			"bpm" : 130
		}, 
		{
			"url" : "POP_10.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Manolo", "Paulie"],
			"mood" : "dislike",
			"bpm" : 127
		},
		{
			"url" : "POP_11.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "love",
			"bpm" : 125
		}, 
		{
			"url" : "POP_12.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "hate",
			"bpm" : 117
		}, 
		{
			"url" : "POP_13.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "hate",
			"bpm" : 115
		}, 
		{
			"url" : "POP_14.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Manolo", "Paulie"],
			"mood" : "like",
			"bpm" : 120
		}, 
		{
			"url" : "POP_15.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "love",
			"bpm" : 125
		}, 
		{
			"url" : "POP_16.mp4", 
			"genre" : "Pop", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "like",
			"bpm" : 125
		}, 
		{
			"url" : "EDM_01.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "love",
			"bpm" : 115.337
		}, 
		{
			"url" : "EDM_02.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "like",
			"bpm" : 116.337
		}, 
		{
			"url" : "EDM_03.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "love",
			"bpm" : 117.556
		}, 
		{
			"url" : "EDM_04.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Paulie", "Manolo"],
			"mood" : "dislike",
			"bpm" : 127.132
		}, 
		{
			"url" : "EDM_05.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Paulie", "Manolo"],
			"mood" : "dislike",
			"bpm" : 119.972
		}, 
		{
			"url" : "EDM_06.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Manolo", "Paulie"],
			"mood" : "dislike",
			"bpm" : 123
		}, 
		{
			"url" : "EDM_07.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Manolo", "Paulie"],
			"mood" : "hate",
			"bpm" : 124
		}, 


		{
			"url" : "EDM_08.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "dislike",
			"bpm" : 116.981
		}, 
		{
			"url" : "EDM_09.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "like",
			"bpm" : 128.062
		}, 
		{
			"url" : "EDM_10.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Elijah", "Paulie"],
			"mood" : "dislike",
			"bpm" : 115.337
		}, 
		{
			"url" : "EDM_11.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Elijah", "Paulie"],
			"mood" : "like",
			"bpm" : 117.556
		}, 
		{
			"url" : "EDM_12.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "like",
			"bpm" : 117.556
		}, 


		{
			"url" : "EDM_08.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "hate",
			"bpm" : 116.981
		}, 
		{
			"url" : "EDM_09.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "love",
			"bpm" : 128.062
		}, 
		{
			"url" : "EDM_10.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Elijah", "Paulie"],
			"mood" : "hate",
			"bpm" : 115.337
		}, 
		{
			"url" : "EDM_11.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Elijah", "Paulie"],
			"mood" : "love",
			"bpm" : 117.556
		}, 
		{
			"url" : "EDM_12.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "love",
			"bpm" : 117.556
		}, 


		{
			"url" : "EDM_13.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "dislike",
			"bpm" : 117.556
		}, 
		{
			"url" : "EDM_14.mp4", 
			"genre" : "EDM", 
			"avatars" : ["Elijah", "Manolo"],
			"mood" : "hate",
			"bpm" : 117.556
		}, 
		{
			"url" : "HIPHOP_EDM_1.mp4", 
			"genre" : "HipHop_EDM", 
			"avatars" : [],
			"mood" : "Transition",
			"bpm" : null
		}, 
		{
			"url" : "HIPHOP_POP_1.mp4", 
			"genre" : "HipHop_Pop", 
			"avatars" : [],
			"mood" : "Transition",
			"bpm" : null
		}, 
		{
			"url" : "EDM_HIPHOP_1.mp4", 
			"genre" : "EDM_HipHop", 
			"avatars" : [],
			"mood" : "Transition",
			"bpm" : null
		}, 
		{
			"url" : "EDM_POP_1.mp4", 
			"genre" : "EDM_Pop", 
			"avatars" : [],
			"mood" : "Transition",
			"bpm" : null
		}, 
		{
			"url" : "POP_EDM_1.mp4", 
			"genre" : "Pop_EDM", 
			"avatars" : [],
			"mood" : "Transition",
			"bpm" : null
		}, 
		{
			"url" : "POP_HIPHOP_1.mp4", 
			"genre" : "Pop_HipHop", 
			"avatars" : [],
			"mood" : "Transition",
			"bpm" : null
		}, 
		{
			"url" : "INTRO_EDM_1.mp4", 
			"genre" : "Intro_EDM", 
			"avatars" : [],
			"mood" : "Transition",
			"bpm" : null
		}, 
		{
			"url" : "INTRO_HIPHOP_1.mp4", 
			"genre" : "Intro_HipHop", 
			"avatars" : [],
			"mood" : "Transition",
			"bpm" : null
		}, 
		{
			"url" : "INTRO_POP_1.mp4", 
			"genre" : "Intro_Pop", 
			"avatars" : [],
			"mood" : "Transition",
			"bpm" : null
		}, 
		{
			"url" : "IN02_EP.mp4", 
			"genre" : "", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "Intro",
			"bpm" : null
		}, 
		{
			"url" : "IN03_EM.mp4", 
			"genre" : "", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "Intro",
			"bpm" : null
		}, 
		{
			"url" : "IN04_ME.mp4", 
			"genre" : "", 
			"avatars" : ["Eljah", "Manolo"],
			"mood" : "Intro",
			"bpm" : null
		}, 
		{
			"url" : "IN05_MP.mp4", 
			"genre" : "", 
			"avatars" : ["Paulie", "Manolo"],
			"mood" : "Intro",
			"bpm" : null
		}, 
		{
			"url" : "IN07_PM.mp4", 
			"genre" : "", 
			"avatars" : ["Manolo", "Paulie"],
			"mood" : "Intro",
			"bpm" : null
		}, 
		{
			"url" : "IN08_EP.mp4", 
			"genre" : "", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "Intro",
			"bpm" : null
		}, 
		{
			"url" : "INOUT_09.mp4", 
			"genre" : "", 
			"avatars" : [],
			"mood" : "Intro",
			"bpm" : null
		}, 
		{
			"url" : "OUT_01PE_Up.mp4", 
			"genre" : "", 
			"avatars" : ["Paulie", "Elijah"],
			"mood" : "Out_Up",
			"bpm" : null
		}, 
		{
			"url" : "OUT_02ME_Up.mp4", 
			"genre" : "", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "Out_Up",
			"bpm" : null
		}, 
		{
			"url" : "OUT_03MP_Up.mp4", 
			"genre" : "", 
			"avatars" : ["Manolo", "Paulie"],
			"mood" : "Out_Up",
			"bpm" : null
		}, 
		{
			"url" : "Out_04MP_Down.mp4", 
			"genre" : "", 
			"avatars" : ["Manolo", "Paulie"],
			"mood" : "Out_Down",
			"bpm" : null
		},
		{
			"url" : "Out_05ME_Down.mp4", 
			"genre" : "", 
			"avatars" : ["Manolo", "Elijah"],
			"mood" : "Out_Down",
			"bpm" : null
		},
		{
			"url" : "Out_06EP_Up.mp4", 
			"genre" : "", 
			"avatars" : ["Elijah", "Paulie"],
			"mood" : "Out_Up",
			"bpm" : null
		}

			];



	return videos;
});
