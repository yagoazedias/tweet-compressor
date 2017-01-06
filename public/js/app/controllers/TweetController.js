class TweetController {

  constructor() {
    let $ = document.querySelector.bind(document);

    this._original = $('#tweet-original')
    this._compressed = $('#tweet-compressed')

    this._num_original = $('#original-tweet-number')
    this._num_compressed = $('#compressed-tweet-number')
  }

  updateTweetSizeNumber() {
    this._num_original.innerHTML = this._original.value.length;
    this._num_compressed.innerHTML = this._compressed.value.length;
  }

  addTweetCompressed(){

    let tweet = new Tweet(this._original.value)
    
    this._compressed.value = tweet.compressTweet();
  }


}