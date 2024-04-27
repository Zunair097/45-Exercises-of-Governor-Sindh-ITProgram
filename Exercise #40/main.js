// Defining The Make_Album Function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling Three Functions And Creating 3 Variables With Different Values
var album1 = make_album("Zunair", "Album title 1");
var album2 = make_album("Zunair2", "Album title 2");
// Calling A Make_Album Function With Third Parameter
var album3 = make_album("Zunair3", "Album title", 10);
// Printing The Variables
console.log(album1);
console.log(album2);
console.log(album3);
