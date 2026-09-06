import{a as c,S as u,i as s}from"./assets/vendor-sgVy0kkG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="https://pixabay.com/api/",f="57464539-19ea2289c3195b6eb6e9382b1";function m(n){return c.get(d,{params:{key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>{throw console.error("Pixabay API error:",r),r}).finally(()=>{console.log("Request completed")})}const l=document.querySelector(".gallery");let p=new u(".gallery a");function y(){l.innerHTML=""}function h(n){const r=n.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${t.likes}</p>
          <p>Views: ${t.views}</p>
          <p>Comments: ${t.comments}</p>
          <p>Downloads: ${t.downloads}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),p.refresh()}function g(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",n=>{n.preventDefault();const r=n.target.elements["search-text"].value.trim();if(!r){s.warning({title:"Warning",message:"Please enter a search term!"});return}y(),g(),m(r).then(t=>{t.length===0?s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):h(t)}).catch(()=>{s.error({title:"Error",message:"Something went wrong. Try again later."})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
