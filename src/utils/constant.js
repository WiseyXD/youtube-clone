const API_KEY = "AIzaSyDMuTzPTl6eoOGjuccDR8zKx3GUB_ukJyE";

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_SHORT_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=6&regionCode=IN&key=${API_KEY}`;

export const SUGGESTION_API =
	"https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";

export const API_KEY_SUGGESTION =
	"8a8b771be7743b1d12f490845dfcaa2cc0b544648e5d39f134f31420af4462c1";

export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=50&q=`;

export const AUTOCOMPLETE_API = "https://api.datamuse.com/words?max=20&ml=";
