import {Article} from "./js/Article"
import Modal from "./js/Modal"
import ModalArticle from "./js/ModalArticle"
const data = [
  {
      id: 1,
      title: 'Increasing Prosperity With Positive Thinking',
      urlToImage: 'src/img/strategies/1.jpg',
      tags: ['Art', 'Design'],
      content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
      date: '01.01.2020'
  },
  {
      id: 2,
      title: 'Motivation Is The First Step To Success',
      urlToImage: './src/img/strategies/motivation.jpg',
      tags: ['Culture'],
      content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
      date: '01.01.2020'
  },
  {
      id: 3,
      title: 'Success Steps For Your Personal Or Business Life',
      urlToImage: 'src/img/strategies/success.jpg',
      tags: ['Culture', 'Design', 'Art'],
      content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
      date: '01.01.2020'
  }
];
window.onload = function () {
  if (data){
    renderArticlesToDom(data)
  }
  // Tags
  addTagsClickHandler();
  //  Generate base modal from Modal class
 
};
const addTagsClickHandler = () => {
  document.querySelector(".strategies__tags").addEventListener("click", (e) => {
    const tag = e.target.closest(".tag");
  
    if (!tag) return;
    removeSelectedTags();
    selectClickedTag(tag);
    if (tag.innerText === "All") {
      showAllStrategies();
    } else {
      filterStrategyBySelectedTag(tag.innerText);
    }
  });
};
const removeSelectedTags = () => {
  const tags = document.querySelectorAll(".strategies__tags .tag");
  tags.forEach((tag) => {
    tag.classList.replace("tag_selected", "tag_bordered");
  });
};
const selectClickedTag = (tag) => {
  tag.classList.replace("tag_bordered", "tag_selected");
};

const filterStrategyBySelectedTag = (tagContent) => {
  const strategies = document.querySelectorAll(".strategy-wrapper .strategy");

  strategies.forEach((strategy) => {
    strategy.classList.add("strategy_hidden");
    const tags = strategy.querySelectorAll(".tag");
    const result = Array.from(tags)
      .map((tag) => tag.innerText)
      .includes(tagContent);
    if (result) {
      strategy.classList.remove("strategy_hidden");
    }
  });
};
const showAllStrategies =()=>{
	const strategies = document.querySelectorAll(".strategy-wrapper .strategy");
	strategies.forEach (strategy=>strategy.classList.remove("strategy_hidden"))
}
const  renderArticlesToDom=(data)=>{
  const wrapper = document.querySelector(".strategy-wrapper");
  wrapper.innerHTML = '';
   const arrayOfNodes =  data.map(element => { return new Article(element).generatorArticle()})
   wrapper.append(...arrayOfNodes)
wrapper.addEventListener('click', addStrategyClickHandler )
}
const  addStrategyClickHandler=(e)=>{
  const strategy  = e.target.closest('.strategy')
  if (strategy){
 const selectedId =strategy.dataset.id;
 const content = data.find(article =>article.id ==selectedId);
 console.log(content)
 renderModalWindow (content)
  }
  }

const renderModalWindow =(content)=>{
  const modal = new ModalArticle('strategy-modal', content);
  modal.renderModal()
  modal.openModal()

}
