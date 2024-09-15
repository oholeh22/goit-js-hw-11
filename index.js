import{S as c,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function l(o){const n=`https://pixabay.com/api/?key=45999578-eb7202f1a65d28d69ebdccc58&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>e.hits).catch(e=>{throw console.error("Error fetching images:",e),e})}function u(o,s){if(!o||o.length===0){iziToast.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3});return}const n=o.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="gallery-item-info">
            <p class="stats">Likes: ${e.likes}</p>
            <p class="stats">Views: ${e.views}</p>
            <p class="stats">Comments: ${e.comments}</p>
            <p class="stats">Downloads: ${e.downloads}</p>
          </div>
        </li>
      `).join("");console.log("Markup:",n),s.insertAdjacentHTML("beforeend",n)}function f(o){o.innerHTML=""}let m=new c(".gallery-list a",{});document.getElementById("search-form").addEventListener("submit",function(o){o.preventDefault();const s=document.getElementById("search-input").value.trim();if(!s){a.error({message:"Please enter a search word."});return}const n=document.getElementById("gallery");f(n),l(s).then(e=>{if(e.length===0){a.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3});return}u(e,n),m.refresh()}).catch(e=>{console.error("Error fetching images:",e),a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight",timeout:5e3})})});
//# sourceMappingURL=index.js.map
