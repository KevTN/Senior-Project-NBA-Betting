const descriptions = [
    {
        title: "Baking With Tea",
        paragraphOne: "Matcha: Matcha is a fine powder made from green tea leaves, and it has a unique flavor that is both grassy and slightly sweet. Matcha is a popular ingredient in Japanese tea ceremonies, but it has also found its way into the world of baking. When used in baking, matcha can add a vibrant green color and a delicate, earthy flavor to your recipes. Here are some of our favorite Matcha recipes:",
        paragraphTwo: "Matcha Cupcakes: These cupcakes are made with a fluffy and tender cake that is infused with matcha powder. Top them with a fluffy matcha frosting for a perfectly sweet and refreshing treat.",
        paragraphThree: "Matcha Donuts: These donuts are made with a soft and tender dough that is infused with matcha powder. They're perfect for a special breakfast treat or for a sweet and indulgent dessert."
    },

    {
        title: "Make English Tea",
        paragraphOne: "The first step in making a proper cup of tea is to choose your tea. English tea typically refers to black tea, and the most popular blends include Earl Grey, English Breakfast, and Darjeeling. Once you have selected your tea, measure out one teaspoon of loose tea leaves per cup of water, or one tea bag per cup.",
        paragraphTwo: "Next, boil the water. It is important to use freshly drawn water, as the quality of the water can greatly impact the taste of the tea. Once the water has reached a rolling boil, remove it from heat.",
        paragraphThree: "To keep your tea hot for as long as possible, it is a good idea to warm the teapot first. Simply pour a little of the hot water into the teapot, swirl it around, and then pour it out."
    },

    {
        title: "Tea Cosies",
        paragraphOne: "When it comes to the materials used to make tea cosies, the options are diverse. Some of the most common materials include wool, cotton, silk, and even crochet. Each material offers its own unique benefits: wool is warm and cozy, cotton is durable and easy to care for, silk adds a touch of luxury, and crochet can be customized to match any décor.",
        paragraphTwo: "Aside from their functional benefits, tea cosies also play a role in creating a pleasing aesthetic for your tea table. Whether you are hosting a tea party or simply enjoying a quiet cup at home, a beautifully designed tea cosy can add an extra touch of elegance to your tea service. With so many designs and styles to choose from, you are sure to find one that fits your personal style and enhances the ambiance of your tea-drinking experience.",
        paragraphThree: "In conclusion, a tea cosy is a practical and stylish accessory that every tea lover should have. Not only does it help keep your tea warm, but it also adds to the overall aesthetic of your tea table, making it a must-have item for anyone who appreciates the finer things in life"
    },

    {
        title: "Hosting a Tea Party",
        paragraphOne: "Finger Sandwiches: Finger sandwiches are a classic choice for tea parties. Fill your sandwiches with a variety of ingredients, such as cucumber, egg salad, smoked salmon, or ham and cheese. Cut the sandwiches into small, bite-sized portions for easy snacking",
        paragraphTwo: "Scones: Scones are a staple of English tea parties, and they are perfect for spreading with butter, jam, or clotted cream. Serve a variety of flavors, such as plain, fruit-filled, or savory scones for a diverse selection.",
        paragraphThree: "In conclusion, hosting a tea party is a wonderful way to bring people together and enjoy each others company. To complete the experience, choose a selection of delicious and sophisticated snacks that are sure to impress your guests. From finger sandwiches to tea cakes, the possibilities are endless."
    },
    {
        title: "Tea as Routine",
        paragraphOne: "Aesthetic Appeal: Teapots come in a variety of shapes, sizes, and designs, making them the perfect addition to any kitchen. From traditional ceramic teapots to modern glass and stainless-steel designs, there is a teapot to fit every taste. Not only do they add to the décor of your kitchen, but they also make a statement when serving tea to guests.",
        paragraphTwo: "Improved Tea Taste: Teapots allow for the proper steeping of tea leaves, which is crucial in ensuring the best possible taste. The temperature of the water, the size of the pot, and the length of steeping time all play a role in the final flavor of the tea. Using a teapot ensures that all of these factors are taken into account for a perfectly brewed cup of tea every time.",
        paragraphThree: "A Timeless Tradition: Using a teapot is a timeless tradition that has been passed down through generations. Drinking tea from a teapot is a comforting and nostalgic experience that brings people together. Whether you are sipping tea alone or sharing a pot with "
    },
    {
        title: "HTTP",
        paragraphOne: "The HTTP 418 error was first introduced as an April Fool's joke in 1998 by the Hyper Text Coffee Pot Control Protocol (HTCPCP) working group. The error message is meant to represent a teapot that is trying to serve coffee, but can only serve tea. This lighthearted joke was created to bring a touch of humor to the otherwise serious world of web development.",
        paragraphTwo: "The connection between tea and teapots goes back centuries. Drinking tea has been a cherished tradition in many cultures, and teapots have been a staple of tea-drinking for just as long. Teapots are used to steep tea leaves and produce a flavorful and aromatic cup of tea. They come in a variety of shapes, sizes, and designs, and they can be made from materials such as ceramic, glass, or stainless steel.",
        paragraphThree: "So, what does the HTTP 418 error have to do with tea and teapots? In essence, the error message is a nod to the tradition of drinking tea and using teapots. By using a teapot to serve tea, we are acknowledging the timeless tradition of tea-drinking and bringing a touch of elegance and sophistication to our tea-drinking experience"
    },
]

const cardTag = document.querySelectorAll('article.item');
const cardsTag = document.querySelectorAll('article.item');

const modalTag = document.querySelector('section.modal');
const modalImgTag = document.querySelectorAll('img.m-img');
const modalBlogTitle = document.querySelector('h1.m-blog-title');
const modalParargraphOne = document.querySelector('p.mp-1')
const modalParargraphTwo = document.querySelector('p.mp-2')
const modalParargraphThree = document.querySelector('p.mp-3')

const modalExitBtn = document.querySelector('a.exit-modal');
const prevBtn = document.querySelector('button.prev');
const nextBtn = document.querySelector('button.next');

let imageIndex = 0;


function clickCards() {
    cardTag.forEach((card, cardIndex) => {
        card.addEventListener("click", () => {
            modalTag.classList.add('active');
            updateBlog(cardIndex);
        })
    })
}

modalExitBtn.addEventListener("click", () => {
    modalTag.classList.remove('active');
})

function previousBlog(cardIndex) {
    imageIndex -= 1;
    cardIndex -= 1;
    if (imageIndex < 0 || cardIndex < 0) {
        imageIndex = modalImgTag.length - 1;
        cardIndex = modalImgTag.length - 1;
    }
    updateBlog(cardIndex);
}

function nextBlog(cardIndex) {
    imageIndex += 1;
    cardIndex += 1;
    if (imageIndex > modalImgTag.length - 1 || cardIndex > modalImgTag.length - 1) {
        imageIndex = 0;
        cardIndex = 0;
    }
    updateBlog(cardIndex);
}

function updateBlog() {
    modalImgTag.forEach(img => {
        img.style.opacity = 0;
    })
    modalImgTag[imageIndex].style.opacity = 1;
    modalImgTag[imageIndex].style.zIndex = 1;
    modalBlogTitle.textContent = descriptions[imageIndex].title;
    modalParargraphOne.textContent = descriptions[imageIndex].paragraphOne;
    modalParargraphTwo.textContent = descriptions[imageIndex].paragraphTwo;
    modalParargraphThree.textContent = descriptions[imageIndex].paragraphThree;
}

prevBtn.addEventListener('click', () => {
    previousBlog();
})

nextBtn.addEventListener('click', () => {
    nextBlog();
})

document.addEventListener("keyup", (event) => {
    if (event.key === 'ArrowLeft') {
        previousBlog();
    } else if (event.key === 'ArrowRight') {
        nextBlog();
    }
})

clickCards();