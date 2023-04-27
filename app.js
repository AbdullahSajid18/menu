const buttons = document.querySelector(".buttonContainer");
// console.log(buttons)
const menuArea = document.querySelector(".menuArea");
// console.log(menuArea)

const btns = ["All", "Breakfast", "Lunch", "Shakes", "Dinner", "Icecream"];
const dataMenu = [ 
    {
        id:1,
        src: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
        title:"Buttermilk Pancakes", 
        price:15.99,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
    },
    {
        id:2,
        src:"https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
        title:"Double Dinner",
        price: 13.99,
        desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats.",
    },
    {
        id:3,
        src:"https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
        title: "Godzilla Milkshake",
        price:6.99,
        desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
        id:4,
        src:"https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        title:"Country Delight",
        price:20.99,
        desc:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
    },
    {
        id:5,
        src:"https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
        title:"Egg Attack",
        price:22.99,
        desc:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },
    {
        id:6,
        src:"https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
        title:"Oreo Dream",
        price:18.99,
        desc:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
        id:7,
        src:"https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
        title:"Bacon Overflow",
        price:8.99,
        desc:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
        id:8,
        src:"https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
        title:"American Classic",
        price:12.99,
        desc:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },
    {
        id:9,
        src:"https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
        title:"Quarantine Buddy",
        price:16.99,
        desc:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
    {
        id:10,
        src:"https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
        title:"Stek Dinner",
        price:39.99,
        desc:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    }
]

const myBtn = []
const myMenu = []

btns.forEach((item)=> {
    const string = `<button class="btns">${item}</button>`
    myBtn.push(string)
    // console.log(myBtn)
})

dataMenu.forEach((item)=> {
    let string = `<div class="menuCard">
    <img class="foodImg" src=${item.src}>
    <div class="text">
        <div class="foodHeader">
            <h2>${item.title}</h2>
            <h2 id="price">$${item.price}</h2>
        </div>
        <p id="desc">${item.desc}</p>
    </div>

</div>`
    myMenu.push(string)
    console.log(myMenu)
})


buttons.innerHTML= myBtn.join("")
menuArea.innerHTML=myMenu.join("")

