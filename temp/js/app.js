"use strict";
const btnTag = Array.from(document.querySelectorAll("button.btn"));
const itemTag = Array.from(document.querySelectorAll("article.item"));
const sectionGrid = document.querySelector('section.blog-grid');
const sortBtn = document.querySelector("button.sort");
const spanTag = document.querySelector("span");
const hamburgerMenu = document.querySelector('.hamburger');
const asideMenu = document.querySelector("main aside");
const asideCloseBtn = document.querySelector("article.a-close");

// toggle asidemenu on hamburger menu click
hamburgerMenu.addEventListener('click', () => {
    asideMenu.classList.toggle('active');
})

// toggle asidemenu on aside hamburger menu click
asideCloseBtn.addEventListener("click", () => {
    asideMenu.classList.toggle('active');
})

/* 
    Sorts the order of blog posts according
    to flexbox properties
*/
function sortOrder() {
    sortBtn.addEventListener("click", () => {
        sectionGrid.classList.toggle('sort');
        spanTag.classList.toggle('change');
    })
}
/*  
    Applies filter setting according to the 
    button index. 
*/
function applyFilter() {
    btnTag.forEach((btn, btnIndex) => {
        btn.addEventListener("click", () => {
            if (btnIndex === 0) {
                resetFilter(itemTag)
            } else if (btnIndex > btnTag.length) {
                return;
            } else {
                itemTag.forEach(item => {
                    setDisplayBlock(item);
                })
                filterValues(itemTag, btn)
            }
        })
    })
}

/*
    Takes an item array as a parameter, and
    set's the div item's display to block
*/
function resetFilter(itemArr) {
    itemArr.forEach(item => {
        setDisplayBlock(item);
    })
}

/*
    Takes an item array and button data as parameters
    Builds a new array of the items attributes and filters
    according to button clicked attribute. Next,
    A new filtered array is made and if the filtered array
    matches the button clicked then display those items.
*/
function filterValues(itemArr, btnData) {
    let attributeArray = [];
    let btnAttribute = btnData.getAttribute('data-filter');

    // creates an array of attributes
    for (let index = 0; index <= itemArr.length - 1; index++) {
        attributeArray.push(itemArr[index].getAttribute('data-filter'));
    }

    // creates new result filtered array according to pushed button
    const result = attributeArray.filter((value => {
        return value.trim().includes(btnAttribute);
    }))

    itemTag.forEach(item => {
        let itemAttribute = item.getAttribute('data-filter');
        if (result.includes(itemAttribute) && result.length >= 1) {
            setDisplayBlock(item);
        } else {
            setDisplayNone(item);
        }
    })
}

// Set's an item's display as block
function setDisplayBlock(item) {
    item.style.display = 'block';
}

// Sets an item's display as none
function setDisplayNone(item) {
    item.style.display = 'none';
}

// run on load
applyFilter();
sortOrder();