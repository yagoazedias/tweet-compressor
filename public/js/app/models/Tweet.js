class Tweet {

  // Class  constructor
  // The tweet must to has just the content propriete.
  constructor(content) {
    this._content = content;
  }  

  get value() {
    return this._content;
  }

  // Method to compress the tweet.
  compressTweet() {

    // Turn the fist letter from string to lowerCase.
    let str = (this._content.substr(0, 1).toLowerCase() + this._content.substr(1));

    str = str.replace(', ', '，');
    str = str.replace(/\. /g, '．');

    // Words that can be abbreviated.
    let abbreviations = {
      a: ["você", "vc"],
      b: ["voce", "vc"],
      c: ["gente", "gnt"],
      d: ["cadê", "kd"],
      e: ["abraços", "abs"],
      f: ["amigo", "amg"],
      g: ["muito", "mt"],
      h: ["muitos", "mts"],
      i: ["tudo", "td"],
      j: ["utilizando", "usando"]
    }

    for(let j in abbreviations) {
      let re1 = new RegExp(abbreviations[j][0], 'g')

      str = str.replace(re1, abbreviations[j][1]);
    }

    str = str.substr(0, 1).toUpperCase() + str.substr(1);
    
    return str;
  }

}