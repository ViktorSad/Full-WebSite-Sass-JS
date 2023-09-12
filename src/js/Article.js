
export class Article {
	constructor ({id, title, urlToImage, tags, content, ...rest}){
		this.id=id
		this.title = title;
		this.urlToImage = urlToImage;
		this.tags = tags;
		this.content = content
	}
// Article generator 
generatorArticle (){
	let template ='';
	const article = document.createElement ('article')
	article.className = 'strategy block-shadowed';
	article.setAttribute('data-id', this.id);
 this.urlToImage&&(template += `<img
	class="strategy__image"
	src="${this.urlToImage}"
	alt="strategy"
  />`
);

  if ((this.title) || (this.tags)){
template += `<div class="strategy__content">`
if (this.title){
	template += `<h3 class="strategy__name">
  ${this.title}
</h3>`
}
if (this.tags){
	template+=`<div class="strategy__tags tags">`
	const tagsString = this.tags.reduce ((acc,tag)=>{ return acc+=` <span class="tag tag_colored">${tag}</span>`},'')
template +=tagsString
template += `</div>`
}
template += `</div>`
  }
   article.innerHTML = template;
   return article;
}
}