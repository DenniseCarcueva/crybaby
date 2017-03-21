$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:melanie%20martinez&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[1].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `	<section id="main" class="wrapper">
				<div class="inner">
					<header class="align-center">
						<h1>DOLLHOUSE EP</h1>
					</header>.
					<p>The EP is about a love story (with the exception of Dollhouse) that doesn't turn out quite right. It is disguised in different themes.</p> <br></br>
					<p>1.Dollhouse <br>
                       2.Carousel<br>
					   3.Dead To Me<br>
					   4.Bittersweet Tragedy</p>
				
			
						<img src="${res.albums.items[1].images[1].url}" alt="viray fccboi" />
						<h2 align="left" class="major">${res.albums.items[1].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="justify">${album.tracks.items[i].name}</p>
			<p align="justify"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></section>`;
		document.querySelector('.dh').innerHTML = html;
	});
});

	$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:melanie%20martinez&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[3].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `	<section id="main" class="wrapper">
				<div class="inner">
					<header class="align-center">
						<h1>PITY PARTY EP</h1>
					</header>.
					<p>The EP was announced on April 27th, 2016 by PopBuzz, but the date was never confirmed by Melanie herself. The EP serves as an international version of the previous Dollhouse EP, as only the US got the Dollhouse EP, therefore Dead to Me and Bittersweet Tragedy were previously only available in the United States.</p> <br></br>
					<p>
						1.	Pity Party (Madison Mars Remix)	<br>
						2.	Pity Party (Kayliox Remix)<br>
						3.	Pity Party (XVII Remix)	<br>
						4.	Pity Party (K Theory Remix)	<br>
						5.	Pity Party (The Feels Remix)<br>
						6.	Pity Party (Myles Travitz Remix)<br>
						7.	Pity Party (Kassiano Remix)</p>

				
			
						<img src="${res.albums.items[3].images[1].url}" alt="viray fccboi" />
						<h2 align="left" class="major">${res.albums.items[3].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="justify">${album.tracks.items[i].name}</p>
			<p align="justify"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></section>`;
		document.querySelector('.pp').innerHTML = html;
	});
});
	$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:melanie%20martinez&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[3].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `	<section id="main" class="wrapper">
				<div class="inner">
					<header class="align-center">
						<h1>PITY PARTY EP</h1>
					</header>.
					<p>The EP was announced on April 27th, 2016 by PopBuzz, but the date was never confirmed by Melanie herself. The EP serves as an international version of the previous Dollhouse EP, as only the US got the Dollhouse EP, therefore Dead to Me and Bittersweet Tragedy were previously only available in the United States.</p> <br></br>
					<p>
						1.	Pity Party (Madison Mars Remix)	<br>
						2.	Pity Party (Kayliox Remix)<br>
						3.	Pity Party (XVII Remix)	<br>
						4.	Pity Party (K Theory Remix)	<br>
						5.	Pity Party (The Feels Remix)<br>
						6.	Pity Party (Myles Travitz Remix)<br>
						7.	Pity Party (Kassiano Remix)</p>

				
			
						<img src="${res.albums.items[3].images[1].url}" alt="viray fccboi" />
						<h2 align="left" class="major">${res.albums.items[3].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="justify">${album.tracks.items[i].name}</p>
			<p align="justify"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></section>`;
		document.querySelector('.pp').innerHTML = html;
	});
});

	$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:melanie%20martinez&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[0].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `	<section id="main" class="wrapper">
				<div class="inner">
					<header class="align-center">
						<h1>Crybaby EP</h1>
					</header>.
					<p>The EP is about a love story (with the exception of Dollhouse) that doesn't turn out quite right. It is disguised in different themes.</p> <br></br>
					<p>
					1. Cry Baby <br>
					2. Dollhouse <br>
					3. Sippy Cup <br>
					4. Carousel <br>
					5. Alphabet Boy <br>
					6. Soap <br>
					7. Training Wheels <br>
					8. Pity Party <br>
					9. Tag, You're It <br>
					10. Milk and Cookies<br>
					11. Pacify Her <br> 
					12. Mrs. Potato Head <br>
					13. Mad Hatter <br>
					14. Play Date <br>
					15. Teddy Bear <br>
					16. Cake</p>
			
						<img src="${res.albums.items[0].images[1].url}" alt="viray fccboi" />
						<h2 align="left" class="major">${res.albums.items[0].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="justify">${album.tracks.items[i].name}</p>
			<p align="justify"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += `</div></section>`;
		document.querySelector('.cb').innerHTML = html;
	});
});
