class Library {
	constructor (name , creator){
		this.name = name; 
		this.creator = creator;
		this.playlist = [];
	}
}

class playlist {
	constructor(name){
		this.name = name;
		this.tracks = [];
	}

 addTrack (track) {
 	if (track instanceof Track){
 		this.tracks.push(track);
 	}
 }

 overallRating (){
 	let sum =0;
 	this.tracks.forEach((e)=>{
 		sum +=e.rating;
 	})
return sum/this.tracks.length;
}

 totalDuration (){
 	let sum =0;
 	this.tracks.forEach((e)=>{
 		sum +=e.length;
 	})
 	return sum;
}
	
}

class Track {
	constructor(title, rating, length){
		this.title = title;
		this.rating = rating;
		this.length = length;
	}
}

const library1 = new Library("techno/house library", "Luke");
const playlist1 = new Playlist("house");
const track1 = new Track("Omen", 5, 300);
const track2 = new Track("January", 4, 400);
const track3 = new Track("Will & Able", 5, 300);
const track4 = new Track("Latch",5, 400);



playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
library1.addPlayLists(playlist1);