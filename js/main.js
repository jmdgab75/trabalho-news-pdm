if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        let reg;
        reg = await navigator.serviceWorker.register('/sw.js', { type: "module" });
  
        console.log('Service worker registrada! 😎', reg);
      } catch (err) {
        console.log('😥 Service worker registro falhou: ', err);
      }
    });
  }

const apiKey = 'b874774e2b07418fb671b7e8e97e0e76';
let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
const main = document.querySelector('main');

async function postNews(){
const res = await fetch(url);
const data = await res.json();
main.innerHTML = data.articles.map(createArticle).join( '\n' ) ;
}

function createArticle(article) {
 console.log( article);
   return `
            <div class="article">
                 <a href="${article.url}" target="_blank">
                     <img src="${article.urlToImage}"
                        class="image" alt="${article.content}"/>
                       <h2>${article.title}</h2>
                       <p>${article.description}</p>
                     </a>
                   </div>
          `
}