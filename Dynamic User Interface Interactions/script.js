const Container1 = document.getElementById('dropDownItem1');
const item1Container = document.getElementById('item1_container');
const Container2 = document.getElementById('dropDownItem2');
const item2Container = document.getElementById('item2_container');
const Container3 = document.getElementById('dropDownItem3');
const item3Container = document.getElementById('item3_container');

Container1.addEventListener('click', ()=>{
  item2Container.classList.remove('active');
  item3Container.classList.remove('active');
  if (!item1Container.classList.contains('active')) {
    item1Container.classList.add('active');
  } else item1Container.classList.remove('active');
});
Container2.addEventListener('click', ()=>{
  item1Container.classList.remove('active');
  item3Container.classList.remove('active');
  if (!item2Container.classList.contains('active')) {
    item2Container.classList.add('active');
  } else item2Container.classList.remove('active');
});

Container3.addEventListener('click', ()=>{
  item1Container.classList.remove('active');
  item2Container.classList.remove('active');
  if (!item3Container.classList.contains('active')) {
    item3Container.classList.add('active');
  } else item3Container.classList.remove('active');
});


/* eslint linebreak-style: ["error", "windows"] */


