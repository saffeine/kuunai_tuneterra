tuneterra = {
	
	info: {
		artist: "Akalı",
		location: "Seoul, Korea",
		biography: "From her bedroom to the big stage, right back to her bedroom again. K-Pop sensation Akali Jhomen Tethi secured her status as a SoundCloud rapper, turned global K-Pop sensation, turned SoundCloud rapper again, turned - forget it, we'll let her music speak for itself.",
		artistavatar: "./img/akali_test.png",
		
		albums: [],
	},
	
	update: function(){
		document.title = this.info.artist + " - TuneTerra";
		
		$( "body #header .avatar img" ).attr( "src", this.info.artistavatar );
		
		$( "body #header .artistinfo .name" ).html( this.info.artist );
		$( "body #header .artistinfo .location" ).html( "🌎 " + this.info.location );
		$( "body #header .artistinfo .bio" ).html( this.info.biography );
		
		for( var i=this.info.albums.length-1; i>=0; i-- ){
			var _album = this.info.albums[i];
			
			var _image = $( "<img></img>" ).attr( "src", _album.image );
			var _title = $( "<p></p>" ).attr( "class" , "title" ).text( _album.title );
			var _info = $( "<p></p>" ).attr( "class", "info" ).text( _album.type + " • " + _album.year + " • " + String( _album.songs.length ) + ( _album.songs.length > 1 ? " songs" : " song" ) );
			var _header = $( "<div></div>" ).attr( "class", "header" );
			_header.append( _image ).append( _title ).append( _info );
			
			var _tracklist = $( "<div></div>" ).attr( "class", "tracklist" );
			for( var j=0; j<_album.songs.length; j++ ){
				var _snum = $( "<span></span>" ).attr( "class", "number" ).text( String( j + 1 ) );
				var _stitle = $( "<a></a>" ).attr( "href", _album.songs[j].url ).attr( "target", "_blank" ).append( $( "<span></span>" ).attr( "class", "title" ).text( _album.songs[j].title ) );
				var _scontr = $( "<span></span>" ).attr( "class", "artists" ).text( "• " + _album.songs[j].artists );
				var _song = $( "<div></div>" ).attr( "class", "song" ).append( _snum ).append( _stitle ).append( _scontr );
				
				_tracklist.append( _song );
			}
			
			var _newalbum = $( "<div></div>" ).attr( "class", "album" ).append( _header ).append( _tracklist );
			
			$( "body #discography" ).append( _newalbum );
		}
	},
	
	addAlbum: function( albumname, albumimage, year, songs ){
		var _type, _index, _album;
		_index = this.info.albums.length;
		
		_type = "";
		if( songs.length > 0 ){ _type = "Single"; }
		if( songs.length > 1 ){ _type = "EP"; }
		if( songs.length > 5 ){ _type = "Album"; }
		
		_album = {
			title: albumname,
			image: albumimage,
			year: String( year ),
			type: _type,
			songs: songs
		};
		
		this.info.albums[_index] = _album;
		return _index;
	}
};

tuneterra.addAlbum( "Neon Ninja ( Covers )", "./img/alb_neonninja.png", 2014, [
	{ title: "Without Me", artists: "Akali", url: "https://www.youtube.com/watch?v=5Jxv1W_rNbQ" },
	{ title: "Heartbeat", artists: "Akali", url: "https://www.youtube.com/watch?v=B9Hg2-zbywg" },
	{ title: "Homicide", artists: "Akali", url: "https://www.youtube.com/watch?v=DyPOa2jEl_Q" },
	{ title: "Godzilla", artists: "Akali", url: "https://www.youtube.com/watch?v=kGT1Pkts-UY" }
] );

tuneterra.addAlbum( "POP/STARS", "./img/alb_popstars.jpg", 2018, [
	{ title: "POP/STARS", artists: "Ahri, Akali, Evelynn, Kai'Sa", url: "https://www.youtube.com/watch?v=UQBwlhAm6Yk" }
] );

tuneterra.addAlbum( "GIANTS", "./img/alb_giants.jpg", 2019, [
	{ title: "GIANTS", artists: "Akali, Ekko, Qiyana, Senna, Yasuo", url: "https://www.youtube.com/watch?v=jVdVp7fs21U" }
] );

tuneterra.addAlbum( "ALL OUT", "./img/alb_allout.jpg", 2020, [
	{ title: "THE BADDEST", artists: "Ahri, Akali, Evelynn, Kai'Sa", url: "https://www.youtube.com/watch?v=Y8kMcf4kyIk" },
	{ title: "MORE", artists: "Ahri, Akali, Evelynn, Kai'Sa, Seraphine", url: "https://www.youtube.com/watch?v=QTfK8bCHuvs" },
	{ title: "VILLAIN", artists: "Evelynn", url: "https://www.youtube.com/watch?v=T4fPoRTFWsA" },
	{ title: "DRUM GO DUM", artists: "Kai'Sa", url: "https://www.youtube.com/watch?v=E2ogu8Vi098" },
	{ title: "I'LL SHOW YOU", artists: "Ahri", url: "https://www.youtube.com/watch?v=2KlHN15BCNg" }
] );

tuneterra.addAlbum( "Going Rogue // F**K", "./img/alb_goingrogue.png", 2021, [
	{ title: "problem.", artists: "Akali", url: "https://www.youtube.com/watch?v=r2_zpgckj84" },
	{ title: "jesus on my neck.", artists: "Jinx", url: "https://www.youtube.com/watch?v=_PPs06cBMtI" },
	{ title: "wishing well ( interlude ).", artists: "Akali, Jinx", url: "https://www.youtube.com/watch?v=hDg36Dga1F8" },
	{ title: "genghis khan.", artists: "Jinx", url: "" },
	{ title: "made in gold.", artists: "Akali", url: "https://www.youtube.com/watch?v=_AQxq3iCpAI" }
] );

tuneterra.addAlbum( "Kinkou", "./img/alb_kinkou.png", 2022, [
	{ title: "stfd.", artists: "Akali", url: "https://www.youtube.com/watch?v=XyNHIsp_3k0" },
	{ title: "kinko.", artists: "Akali", url: "https://www.youtube.com/watch?v=SNMry0BKaCI" },
	{ title: "villain.", artists: "Akali", url: "https://www.youtube.com/watch?v=OHGcLL10cDc" },
	{ title: "not the same.", artists: "Akali", url: "https://www.youtube.com/watch?v=-6Ufsn3JZ30" },
	{ title: "you made me.", artists: "Akali", url: "https://www.youtube.com/watch?v=fjCPAbxRxLs" },
	{ title: "hi, it's me.", artists: "Akali", url: "https://www.youtube.com/watch?v=tvJ_aQbVP8o" },
	{ title: "maggots.", artists: "Akali", url: "https://www.youtube.com/watch?v=M3kBRMBHLI4" },
	{ title: "manners.", artists: "Akali", url: "https://www.youtube.com/watch?v=KgDC-nCH0uk" }
] );

tuneterra.addAlbum( "Alignment", "./img/alb_alignment.png", 2022, [
	{ title: "art gang money.", artists: "Akali, Kayn", url: "https://www.youtube.com/watch?v=xYk5tXaTJjM" },
	{ title: "사이다", artists: "Akali", url: "https://www.youtube.com/watch?v=SiDfNppeZ-g" },
	{ title: "crazy dog.", artists: "Akali, Kayn", url: "https://www.youtube.com/watch?v=gVx3kKbRkqc" }
] );

tuneterra.addAlbum( "Death Mark", "./img/alb_deathmark.png", 2022, [
	{ title: "riot.", artists: "Akali, the shadøw ørder", url: "https://www.youtube.com/watch?v=H3vZmkV-m-U" },
	{ title: "crazy.", artists: "Akali, the shadøw ørder", url: "https://www.youtube.com/watch?v=wMb_nskK1RY" },
	{ title: "woopty woo woo.", artists: "Akali, the shadøw ørder", url: "https://www.youtube.com/watch?v=S6jPnmp1ygI&t=26s" },
	{ title: "sorry that i'm not sorry.", artists: "Akali, the shadøw ørder", url: "https://www.youtube.com/watch?v=aUl3GkqxFls" }
] );

tuneterra.addAlbum( "V", "./img/alb_v.png", 2023, [
	{ title: "killin' it.", artists: "Runic", url: "https://www.youtube.com/watch?v=xS-jtET_wxs" },
	{ title: "live for the night.", artists: "Runic", url: "https://www.youtube.com/watch?v=BZpZzJnZ5to" },
	{ title: "somewhere to run.", artists: "Runic", url: "https://www.youtube.com/watch?v=eZVoq2SZfu0" },
	{ title: "fire hive ( fuck on me ).", artists: "Runic", url: "https://www.youtube.com/watch?v=kXRcvkkXj3s" },
	{ title: "bitch of the year.", artists: "Runic", url: "https://www.youtube.com/watch?v=U6eeOAY_b_I" },
	{ title: "beggars.", artists: "Runic", url: "https://www.youtube.com/watch?v=8Ww-SJv-c0I" },
	{ title: "surrender the throne.", artists: "Runic", url: "https://www.youtube.com/watch?v=ElNP2wn0e6Y" },
	{ title: "new world ( live at pentakill ).", artists: "Runic", url: "https://www.youtube.com/watch?v=wuhP6uRY7u0&t=2s" },
] );












