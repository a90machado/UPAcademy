/** 
 * @param {text} id
 * @param {text} title
 * @param {text} description
 * @param {text} urlImage
 * @param {link} infoURL
 * @param {link} sampleURL
 * @param {link} buyURL
 */

class Book {

    constructor(id, title,description, imageURL, infoURL, sampleURL,buyURL) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageURL = imageURL;
        this.infoURL = infoURL;
        this.sampleURL = sampleURL;
        this.buyURL = buyURL;
        this.likes = 0;
    }

    addLikes(){
        this.likes++;
    }

}