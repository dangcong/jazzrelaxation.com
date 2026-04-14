/* ============================================================
   script.js — Jazz Relaxation
   Gộp từ: artists.js + albums.js + main.js

   ── DỮ LIỆU CẦN CHỈNH SỬA ──────────────────────────────────
   · ARTISTS        — thêm/xóa/sửa nghệ sĩ
   · ALBUMS         — thêm/xóa/sửa album
   · FEATURED_PLAYLIST_ID — đổi playlist nổi bật
   ============================================================ */


/* ==========================================================
   ALBUMS
   Mỗi album gồm:
     spotifyId   — ID album trên Spotify
                   Lấy từ link: open.spotify.com/album/[ID_Ở_ĐÂY]
     title       — Tên album
     artist      — Tên nghệ sĩ
     cover       — Đường dẫn ảnh bìa (để trong assets/images/)
                   Nếu chưa có, để "" để dùng màu placeholder
   ========================================================== */

const FEATURED_PLAYLIST_ID = "11rsP9tnYZZ9OxJxgA8dM0";

const ALBUMS = [
  { spotifyId: "6wgylJnLPtGMzUHogggtuq", title: "Coffee Time", artist: "Jazzy Coffee, Cozy Coffee Shop, Relaxing Piano Jazz", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f3635d1fee7ac820c3975439" },
  { spotifyId: "2S1jcrKOJjl4J96OoJFhwa", title: "Christmas Time", artist: "Jazzy Coffee, Cozy Coffee Shop, Relaxing Jazz Piano", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a2d94749358d61351e69a6bf" },
  { spotifyId: "1TqQoXIRnzBALpaoK3tCOb", title: "Smooth Evening", artist: "Jazzy Coffee, Cozy Coffee Shop", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c709d6e79e7e8550f71065b5" },
  { spotifyId: "6nKgTOqIjD2nCWOL63gtI7", title: "Good Night Jazz", artist: "Cozy Bedroom, Cozy Apartment, Cozy Places", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d5fee32268562081ea9a883f" },
  { spotifyId: "4AXbfzlYqXPJoslU5oj2Ks", title: "Jazz Apartment", artist: "Jazzy Coffee, Cozy Coffee Shop, Relaxing Jazz Piano", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022e362b5420cf293be22676e7" },
  { spotifyId: "4san0WnSvcyd3EUlyJBPch", title: "Soothing Jazz", artist: "Cozy Apartment, Cozy Bedroom", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cb6392c9d7162fc9896d6d7c" },
  { spotifyId: "3Cb4UQk7RIwmSzvcTBLIaw", title: "Smooth Night Jazz", artist: "Jazzy Coffee, Cozy Coffee Shop, Relaxing Jazz Piano", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c101e7fb2e138b8f0d481530" },
  { spotifyId: "14oaFlrce4wj943xPmzf3U", title: "Jazz Lounge", artist: "Jazzy Coffee, Relaxing Jazz Piano, Cozy Coffee Shop", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022efa3552d866e0d71baf99dc" },
  { spotifyId: "2qGUT78QRF948Ks8ZqKXHB", title: "Happy Morning Bossa", artist: "Jazzy Coffee, Cozy Coffee Shop, Relaxing Jazz Piano", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028b684873f6a7393a03b49902" },
  { spotifyId: "47nUQk6h6Jdt0NhOiMHoQ9", title: "Christmas Time Is Here", artist: "Relaxing Jazz Piano, Jazzy Coffee, Cozy Coffee Shop", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029db363e9950da1b5453d80aa" },
  { spotifyId: "4hrC6U2o2dX4BejYkZx3is", title: "Positive Feelings", artist: "Jazzy Coffee, Relaxing Jazz Piano, Cozy Coffee Shop", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e272e8c21c7d96b2f140a2dc" },
  { spotifyId: "72BbfgfejsV0ifBWQ8LMz8", title: "Lazy Weekend", artist: "Jazzy Coffee, Relaxing Jazz Piano, Cozy Coffee Shop", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02688123803bde1a04a76b9309" },
  { spotifyId: "3HlZOWvKk0UlpiMmLewGiL", title: "Cozy Cafe", artist: "Relaxing Jazz Piano, Jazzy Coffee, Cozy Coffee Shop", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024f0999e0d655ccee6c0837e5" },
  { spotifyId: "6Pxg49YOLftGDSGOXs87ZG", title: "Quiet Place", artist: "Cozy Coffee Shop, Jazzy Coffee, Relaxing Jazz Piano", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029afcb8d1e5c040e73713d0e5" },
  { spotifyId: "2LReZgPG2pGD6RGdaaOof9", title: "Jazzy Nights", artist: "Cozy Coffee Shop, Relax Coffee Shop, Seaside Cafe", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025015c8efed9a5c32fe0a998a" },
  { spotifyId: "3qakePwoOYldngJuVzliYD", title: "Morning Coffee", artist: "Cozy Coffee Shop, Relax Coffee Shop, Seaside Cafe", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022b2737e9669b39cb198fa3f3" },
  { spotifyId: "39yyegjaCw5poH2WNrxAiO", title: "Sweet Jazz", artist: "Cozy Coffee Shop, Jazzy Coffee, Cozy Bedroom", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020bc9e19114c7861b5e2d5fc8" },
  { spotifyId: "02FavMXlM7UxggejKUOYhT", title: "Everything I Love", artist: "Jazzy Coffee, Cozy Coffee Shop, Cozy Bedroom", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c5da9955962502918f2c0f43" },
  { spotifyId: "3rqFcNaT2Dd7G1PgrPGoxJ", title: "My Romance", artist: "Cozy Coffee Shop, Jazzy Coffee, Cozy Bedroom", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022f34eca318f17040fce12947" },
  { spotifyId: "44oX3FjWLcePVDSnW1Vx2R", title: "Jazz and Sentimental", artist: "Cozy Coffee Shop, Jazzy Coffee, Cozy Bedroom", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c24585b8ffc7d7d449500c20" },
  { spotifyId: "1dnIa7pBeqbuCMebZHS8IQ", title: "Jazz Coffee Shop", artist: "Cozy Coffee Shop, Jazzy Coffee, Cozy Bedroom", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ccefb893426871c530a2a761" },
  { spotifyId: "7Dc7OhfWPQER9dbXDFZOsT", title: "Cozy Jazz", artist: "Cozy Bedroom, Cozy Apartment, Cozy Place", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027948b0bb9a805e03876bfcc5" },
  { spotifyId: "7xp7Bo8ht0Yz4CRcGHHRyB", title: "Bedroom Jazz", artist: "Cozy Bedroom, Cozy Apartment, Cozy Place", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cc9b7edd6733140e57fb08d3" },
  { spotifyId: "6fhl2uivY5VqixwClOuWCU", title: "Happy Morning", artist: "Marco Antony", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0279d24b7f04a2c720f3147835" },
  { spotifyId: "6XqloRw5Q7Ud0FXkb3WjgM", title: "Quite Jazz", artist: "Cozy Coffee Shop, Cozy Bedroom, Jazzy Coffee", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02cafb24d73a07d65b8f99cdb8" },
  { spotifyId: "4Ze7J7uWFDFi66Zd70RGSn", title: "A Gentle Reminder", artist: "Chien Do", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024033ef435c9f2cdc5e7fbb05" },
  { spotifyId: "5O3TCih3LQakMnM6dUBwfb", title: "Autumn Coffe", artist: "Jazzy Coffee", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02cd7f3c5811ccacedc3fc89ce" },
  { spotifyId: "1kWERJVrXeixbk52uTaboa", title: "Little Italy Café", artist: "Chien.D", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0234d82dcc26de44c2e5062c3d" },
  { spotifyId: "6C9F2sPQJwpc3DkZraLzk2", title: "Summer Mornings", artist: "Chien.D", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0276654eaf46c123269da90c5b" },
  { spotifyId: "52OOWYd8cUhc0ToXHBVlo8", title: "Melodies of Summer", artist: "Chien.D", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025754a8a7134128ebfb9a96b9" },
  { spotifyId: "3lT6nAGN2NXWUxnnLjLqPw", title: "Cozy Christmas Jazz", artist: "Chien Do", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0268269876b2423e0fa87e5c54" },
  { spotifyId: "084lnd9qlBYXm04IBvl1gM", title: "Christmas Jazz", artist: "Chien Do", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ee1b608f6fdf3a01ac4c9be8" },
  { spotifyId: "00RIOTy2nu5nuaOs4dayCc", title: "Forever", artist: "Warm Blanket", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a69c66949ea743427370045f" },
  { spotifyId: "6usctSGiEobJVQCOEcEaLW", title: "Sweet Love", artist: "Cozy Room", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02813debc4a923ddfc082522f2" },
  { spotifyId: "0Twf1RaASiiurK3GfYhr2s", title: "Cool Nights", artist: "Cozy Wood", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f81410bffd0f9a03562d0c61" },
  { spotifyId: "4Jg2zNhA8oAfXh9KqDNwIz", title: "Love in Slow Time", artist: "Warm Blanket", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027c95c3842827ea002346ecef" },
  { spotifyId: "241VgTE5gdx1aPWblHYgpY", title: "Stay a Little Longer", artist: "Cozy Room", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b21595d9434984528b770465" },
  { spotifyId: "7883CLKZlh7Bmu5jZcL2mP", title: "Quiet as Love", artist: "Cozy Wood", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c4e305b0289361eaaafb0976" },
  { spotifyId: "0BHXsklhLxI4yjW1LkH0jq", title: "Coffee for Two", artist: "Warm Blanket", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020a953760cbf108a86023e593" },
  { spotifyId: "7k98INMQImsR6rfFAdjrXg", title: "Christmas by Day", artist: "Cozy Wood", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022d594098adcdae0c7ea414ec" },
  { spotifyId: "5zEGwGYCFDaN47wWZ79nQI", title: "Sunday Flow", artist: "Yves Amour", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028141aa47bbc4c10672de5e09" },
  { spotifyId: "5DemOPbLSZs46QDO7OEkuV", title: "Quiet Glamour", artist: "Oli Venn", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02214dddcadeddee9e5e041cf9" },
  { spotifyId: "51W1jfltcVhhgzI3Utj7RR", title: "Still Here at 2AM", artist: "Lumi Ael", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021badb08e8327aa9530e797f0" },
  { spotifyId: "72lkys4qiwpz8SrtdjnXAu", title: "City at Midnight", artist: "Yves Amour", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ba852eb48ef61475b0bc02d3" },
  { spotifyId: "3CsbKBf7AwSvyvdsV5CMem", title: "Sunday Without Plans", artist: "Oli Venn", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cd43895ffefb509d11c7cfe3" },
  { spotifyId: "5umkoORyGuyzggGgorIkms", title: "Evening Stays Too Long", artist: "Lumi Ael", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e26d479c3f58015e83031439" },
  { spotifyId: "142gi36FEpYAKRqRJ10wKw", title: "Snowfall by the Window", artist: "Yves Amour", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0205fac8b1ee2c1026596fe443" },
  { spotifyId: "4k5hVgSvtp9SFKvFV0gdfC", title: "Late Espresso Thoughts", artist: "Oli Venn", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022dea0ad80f928c5aa822af77" },
  { spotifyId: "2tDu1XvJ2kZ8WGiRZ2O5HV", title: "Sunset Notes on the Balcony", artist: "Lumi Ael", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025458777d1760d8414689b7b3" },
  { spotifyId: "7ppBLWQK3nyLZfqwnOgX1V", title: "Montmartre Morning", artist: "Marcel Rue", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ee8e1ce4d07f81536cf3ef9a" },
  { spotifyId: "7KUUw5ehjQvFyXr3F6TE8a", title: "Rooftops of Paris", artist: "Marcel Rue", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e366216ee3458d4f15307db9" },
  { spotifyId: "321pl1WvGyq07iKWZo7QXK", title: "Balcony Dreams", artist: "Marcel Rue", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02978ae89cdb778ec07a8711ab" },
  { spotifyId: "1Q4ojIeBsmsCKXGqp9IdK2", title: "When the Room Went Quiet", artist: "Anson Tran", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029c6c140e5505a9e1efecfeea" },
  { spotifyId: "3GB3xhDPawKaNpyZtgBXW7", title: "Late Night Coffee", artist: "Anson Tran", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02107ed1b4834e4f7015cf98f4" },
  { spotifyId: "4amNY2ozbM2gGjfMhF1KBA", title: "Where You Used to Be", artist: "Anson Tran", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0225f3acff4273402be36b020b" },
  { spotifyId: "3RLyFtu0uYHehrsNTxTHcd", title: "I Thought of You Again", artist: "Elaris", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0200fcd090c5f80a7c1f6bf317" },
  { spotifyId: "2CWTTg9wyHL4lj6FesT5IK", title: "Letters Never Sent", artist: "Moonlita", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02de6f60770edd6bc6cc717ada" },
  { spotifyId: "2T1oGLzTzdFlqKPbiaVObw", title: "After Love Is Gone", artist: "Satini", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02375ec58f95369cae60505239" },
  { spotifyId: "2Nhijccudp8FSdz88pmF6h", title: "The Page I Never Turned", artist: "Elaris", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02baf4a59087360e73a04f6a91" },
  { spotifyId: "6eq54dsHgLVuWfRqoVa5GG", title: "Leftover Flowers", artist: "Moonlita", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02073a1bd729b4200c9ba5f82f" }
];

/* ==========================================================
   ARTISTS
   Mỗi nghệ sĩ gồm:
     name        — Tên hiển thị
     photo       — Đường dẫn ảnh (để trong assets/images/)
                   Nếu chưa có ảnh, để "" để dùng màu placeholder
     spotifyUrl  — Link Spotify của nghệ sĩ
   ========================================================== */

const ARTISTS = [
  { name: "Jazzy Coffee", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616100005174e2850af480173596cefd48c1", spotifyUrl: "https://open.spotify.com/artist/2b9qemp1Y8NuEbY4RMYHY1" },
  { name: "Cozy Coffee Shop", photo: "https://image-cdn-ak.spotifycdn.com/image/ab676161000051747be2b0db4df55c1463e41f39", spotifyUrl: "https://open.spotify.com/artist/0qjWYusrckF9BpkvWaoKRO" },
  { name: "Relaxing Piano Jazz", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616100005174df0d3155262e329d674f1dc3", spotifyUrl: "https://open.spotify.com/artist/08kGue8QbmbM4IiRpFson7" },
  { name: "Relaxing Jazz Piano", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616100005174a912bb6beb5c83a48e60ca8f", spotifyUrl: "https://open.spotify.com/artist/5dRcqsDTrQnY46ACTrtJm0" },
  { name: "Cozy Bedroom", photo: "https://image-cdn-ak.spotifycdn.com/image/ab6761610000517482fe71c7db7bc7461de4178a", spotifyUrl: "https://open.spotify.com/artist/462hgoSSVau039BHOvX1sk" },
  { name: "Cozy Apartment", photo: "https://image-cdn-fa.spotifycdn.com/image/ab67616100005174799da775ef7db3c0290ab4b0", spotifyUrl: "https://open.spotify.com/artist/1A8jr7vbiIFwtWp3Zbg7dU" },
  { name: "Cozy Places", photo: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027948b0bb9a805e03876bfcc5", spotifyUrl: "https://open.spotify.com/artist/6okQnF560zJ3WnxbOlALTY" },
  { name: "Seaside Cafe", photo: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0286c33e61e738b79c2ea0e288", spotifyUrl: "https://open.spotify.com/artist/6xiYlpSu9fojN03rZ5paQg" },
  { name: "Relax Coffee Shop", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0286c33e61e738b79c2ea0e288", spotifyUrl: "https://open.spotify.com/artist/3WkUj4wBEwRbqVzakDI9vR" },
  { name: "Marco Antony", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0279d24b7f04a2c720f3147835", spotifyUrl: "https://open.spotify.com/artist/1jPXlpJd8MI2Wb1qz1H7rs" },
  { name: "Chien Do", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02089f30e03204fac54016a9f8", spotifyUrl: "https://open.spotify.com/artist/703kRYCTy8bqt8iWhJrBX8" },
  { name: "Chien.D", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fafc02718e87d97f99622e3d", spotifyUrl: "https://open.spotify.com/artist/6pBv7PcmXiLoxSJdfnhYwo" },
  { name: "Warm Blanket", photo: "https://image-cdn-ak.spotifycdn.com/image/ab6761610000517491ac346f97c8c26282f8038d", spotifyUrl: "https://open.spotify.com/artist/0SPHOEwCSzS2yrC6S24usM" },
  { name: "Cozy Room", photo: "https://image-cdn-ak.spotifycdn.com/image/ab676161000051742bf1425a16b3448474b5d6e2", spotifyUrl: "https://open.spotify.com/artist/0eJZnvOfks7OleQxORVuF7" },
  { name: "Cozy Wood", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616100005174e5f6670338c07716b7a13d53", spotifyUrl: "https://open.spotify.com/artist/3hWCBAZoHjCoAXPjejhCwr" },
  { name: "Yves Amour", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ba852eb48ef61475b0bc02d3", spotifyUrl: "https://open.spotify.com/artist/7HUhZqhbdP5bzk36kK1QIT" },
  { name: "Oli Venn", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020b0921da2cae8d8799fbb21e", spotifyUrl: "https://open.spotify.com/artist/0oHvQT2ABGj8OzTSfHlVY4" },
  { name: "Lumi Ael", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021badb08e8327aa9530e797f0", spotifyUrl: "https://open.spotify.com/artist/5XTyaLRpOnQLq5NIitmQJo" },
  { name: "Anson Tran", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029c6c140e5505a9e1efecfeea", spotifyUrl: "https://open.spotify.com/artist/1fn6FXR6yXLb4tGu9bBn4G" },
  { name: "Elaris", photo: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02baf4a59087360e73a04f6a91", spotifyUrl: "https://open.spotify.com/artist/7InbY5Y4vKUVzrnX4XOOVY" },
  { name: "Moonlita", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02de6f60770edd6bc6cc717ada", spotifyUrl: "https://open.spotify.com/artist/4ZOqp89ZeQZNTv8987lvhq" },
  { name: "Satini", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02375ec58f95369cae60505239", spotifyUrl: "https://open.spotify.com/artist/5VDzuNy5LA8ERQgzOl0ohW" },
  { name: "Marcel Rue", photo: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e366216ee3458d4f15307db9", spotifyUrl: "https://open.spotify.com/artist/0P2CyyfAd8uT2k2x5krich" }
];

/* ----------------------------------------------------------
   Render — không cần chỉnh sửa phần bên dưới
   ---------------------------------------------------------- */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

(function renderArtists() {
  const STEP = 4;
  const grid = document.getElementById("artists-grid");
  if (!grid) return;

  const placeholderColors = [
    "radial-gradient(ellipse at 40% 30%, #5a2e10 0%, #1a0c04 100%)",
    "radial-gradient(ellipse at 60% 70%, #1a3a5a 0%, #070e18 100%)",
    "radial-gradient(ellipse at 50% 40%, #2e4020 0%, #0c1208 100%)",
    "radial-gradient(ellipse at 30% 60%, #4a2a5e 0%, #100810 100%)",
    "radial-gradient(ellipse at 60% 30%, #6a3a18 0%, #180c04 100%)",
    "radial-gradient(ellipse at 40% 50%, #38363a 0%, #0a0a0c 100%)",
  ];

  function buildArtistCard(artist, i) {
    const photoStyle = artist.photo
      ? `background-image: url('${artist.photo}'); background-size: cover; background-position: center;`
      : `background-image: ${placeholderColors[i % placeholderColors.length]};`;

    return `
      <a class="artist-card"
         href="${artist.spotifyUrl}"
         target="_blank"
         rel="noopener"
         aria-label="Open ${artist.name} on Spotify">
        <div class="artist-card__photo" style="${photoStyle}"></div>
        <div class="artist-card__name">${artist.name}</div>
      </a>
    `;
  }

  const shuffled = shuffle(ARTISTS);
  let shown = 0;

  function showNext() {
    const batch = shuffled.slice(shown, shown + STEP);
    batch.forEach((artist, i) => {
      grid.insertAdjacentHTML("beforeend", buildArtistCard(artist, shown + i));
    });
    shown += batch.length;

    const old = grid.closest("section").querySelector(".view-more");
    if (old) old.remove();

    if (shown < shuffled.length) {
      const btn = document.createElement("div");
      btn.className = "view-more";
      btn.innerHTML = `<button class="btn btn--outline view-more__btn">View More Artists</button>`;
      grid.closest("section").querySelector(".container").appendChild(btn);
      btn.querySelector("button").addEventListener("click", showNext);
    }
  }

  showNext();
})();

const albumPlaceholders = [
  `radial-gradient(ellipse at 20% 50%, rgba(200,131,42,0.5) 0%, transparent 50%),
   linear-gradient(135deg, #2c1208 0%, #1a0c04 100%)`,
  `radial-gradient(ellipse at 80% 30%, rgba(30,80,140,0.5) 0%, transparent 50%),
   linear-gradient(135deg, #080e1a 0%, #04080e 100%)`,
  `radial-gradient(ellipse at 50% 80%, rgba(40,100,60,0.4) 0%, transparent 55%),
   linear-gradient(135deg, #0c160e 0%, #060c08 100%)`,
  `radial-gradient(ellipse at 60% 20%, rgba(200,131,42,0.4) 0%, transparent 50%),
   radial-gradient(ellipse at 20% 80%, rgba(122,59,30,0.4) 0%, transparent 50%),
   linear-gradient(135deg, #200c04 0%, #100602 100%)`,
];

function buildAlbumCard(album, i) {
  const coverStyle = album.cover
    ? `background-image: url('${album.cover}'); background-size: cover; background-position: center;`
    : `background-image: ${albumPlaceholders[i % albumPlaceholders.length]};`;

  return `
    <div class="album-card" data-spotify-id="${album.spotifyId}">
      <div class="album-card__cover" style="${coverStyle}"></div>
      <div class="album-card__info">
        <h3 class="album-card__title">${album.title}</h3>
        <p class="album-card__artist">${album.artist}</p>
        <a href="https://open.spotify.com/album/${album.spotifyId}"
           target="_blank" rel="noopener" class="album-card__btn">
          Open in Spotify
        </a>
      </div>
    </div>
  `;
}

(function renderAlbums() {
  const INITIAL = 8;
  const STEP = 16;
  const grid = document.getElementById("albums-grid");

  if (grid) {
    const shuffled = shuffle(ALBUMS);
    let shown = 0;

    function showNext() {
      const count = shown === 0 ? INITIAL : STEP;
      const batch = shuffled.slice(shown, shown + count);
      batch.forEach((album, i) => {
        grid.insertAdjacentHTML("beforeend", buildAlbumCard(album, shown + i));
      });
      shown += batch.length;

      const old = grid.closest("section").querySelector(".view-more");
      if (old) old.remove();

      if (shown < shuffled.length) {
        const btn = document.createElement("div");
        btn.className = "view-more";
        btn.innerHTML = `<button class="btn btn--outline view-more__btn">View More Albums</button>`;
        grid.closest("section").querySelector(".container").appendChild(btn);
        btn.querySelector("button").addEventListener("click", showNext);
      }
    }

    showNext();
  }

  const playlistEl = document.getElementById("featured-playlist");
  if (playlistEl) {
    playlistEl.innerHTML = `
      <iframe
        title="Jazz Relaxation — Featured Playlist on Spotify"
        src="https://open.spotify.com/embed/playlist/${FEATURED_PLAYLIST_ID}"
        width="100%"
        height="352"
        frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    `;
  }
})();

/* ==========================================================
   UI — Nav, mobile menu, scroll reveal, smooth scroll
   ========================================================== */

(function () {
  'use strict';

  /* ---------- Nav: scroll class ---------- */
  const nav = document.getElementById('nav');

  function onScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = navLinks ? navLinks.querySelectorAll('.nav__link') : [];

  function openNav() {
    navLinks.classList.add('nav__links--open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    navLinks.classList.remove('nav__links--open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeNav() : openNav();
    });

    navItems.forEach(link => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(
    '.artist-card, .album-card, .about__stats, .section__header, .listen__embed, .footer__inner'
  );

  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    const delay = i % 6;
    if (delay > 0) el.classList.add(`reveal-delay-${delay}`);
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---------- Smooth anchor scroll offset (for fixed nav) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
