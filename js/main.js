"use strict";
{
  const menuItems = document.querySelectorAll(".menu li a");
  const contents = document.querySelectorAll(".content");
  menuItems.forEach((clickedItem) => {
    clickedItem.addEventListener("click", e => {
      // ページを遷移させない
      e.preventDefault();
      menuItems.forEach(item=>{
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');
      // いったんすべて外す
      contents.forEach(content=>{
        content.classList.remove('active');
      });
      // data-idから取得可能
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}
