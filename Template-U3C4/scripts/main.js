async function apiCall(url) {
try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
} catch (error) {
    console.log(error);
}
    


}


function appendArticles(articles, main) {

   articles.map((e)=>{
       let mdiv = document.getElementById('main');
       let div = document.createElement('div');
       let img = document.createElement('img');
       img.src = e.urlToImage;
       let hdline = document.createElement('h2');
       hdline.innerText = e.description;
       let content = document.createElement('p');
       content.innerText = e.content;
       div.append(img,hdline,content);
       mdiv.append(div);

       div.onclick = () =>{
          localStorage.setItem('article', JSON.stringify(e));
          window.location.href = "news.html";

       }
   })

}

export { apiCall, appendArticles }