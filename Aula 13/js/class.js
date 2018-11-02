/** 
 * @param {text} id
 * @param {text} title
 * @param {text} description
 * @param {text} urlImage
 * @param {link} link
 */

class Book {

    constructor(id, title,description, urlImage, link) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
        this.link = link;
        this.likes = 0;
    }

    addLikes(){
        this.likes++;
    }
}


