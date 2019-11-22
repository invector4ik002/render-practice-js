'use strict';
class RenderHTML {
    constructor(location, parameter, element){
        this.parameter = parameter
        this.element = element
        this.location = location
    }
    renderHtml() {
      this.location.insertAdjacentHTML(`${this.parameter}`,`${this.element}`)
    }
}

let container = `<div class="container"></div>`
const renderContainer = new RenderHTML(document.body,'afterbegin', container).renderHtml()

let header = `<header class="menu"></header>`
let containerTag = document.querySelector('.container')
const renderHeader = new RenderHTML(containerTag, 'beforeend', header).renderHtml()

let linkBasket = `<a type="button" href="${resultLink}" class="link-basket btn-card--hover">${result}</a>`
let headerTag = document.querySelector('.menu')
const renderLink = new RenderHTML(headerTag ,'afterbegin', linkBasket).renderHtml()

let section = `<section class="card-box"></section>`
const renderSection = new RenderHTML(headerTag, 'afterend', section).renderHtml()


// let linkBasketTag = document.querySelector('.link-basket').innerHTML= "fffff"

// let t = {
//     aaa() {
//         let result = nameFileBasket.textName
//         return result
         
//     }
// }

// let createElement = { 

//     createCard() {
//         let card = `<div class="card" id="card"></div>`
//         let sectionTag = document.querySelector('.card-box')
//         const renderCard = new RenderHTML(sectionTag, 'afterbegin', card).renderHtml()

//         let imgCard = `<img src="${this.z}" class="card-img"></img>`
//         let cardTag = document.querySelector('.card')
//         const renderImgCard = new RenderHTML(cardTag, 'afterbegin', imgCard).renderHtml()

//         let cardText = `<p class="card-text"></p>`
//         let imgTag = document.querySelector('.card-img')
//         const renderCardText = new RenderHTML(imgTag, 'afterend', cardText).renderHtml()

//         let btnCard = `<button clacc="btn-card btn-card--hover">Добавить</button>`
//         let cardTextTag = document.querySelector('.card-text')
//         const renderBtnCard = new RenderHTML(cardTextTag, 'afterend', btnCard).renderHtml()

        

//       return renderCard
//     },
//     createCardContent() {
//         let arrText = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse()
//         let arrImg = ['img/651895716_w200_h200_muzhskie-tverdye-teplye.webp', 'img/images.jpg', 
//             'img/images (1).jpg', 'img/muzhskaya-vyazanaya-shapka-s-ushkami-na-flise.jpg', 'img/2251-home_default.jpg', 
//             'img/images (2).jpg', 'img/images (3).jpg', 'img/103078.jpg', 'img/images (4).jpg', 'img/images (5).jpg', 
//             'img/AONIJIE-Chapeu-2019.jpg_q50.jpg', 'img/vyazanaya-shapka-s-kozyrkom-bordovaya-mb7530_5099ef54b8d2073_200x200.jpg'].reverse()

//         for (let i = 0; i < 12; i++) {
//             this.z = arrImg[i]
//             this.cont += createElement.createCard()
//             let cardTextTag = document.querySelector('.card-text').innerHTML= arrText[i]
//         }
//     }
// }

// createElement.createCardContent()

    
    
// let linkBasketTag = document.querySelector('.link-basket').innerHTML= "fffff"

// let t = {
//     aaa() {
//         let result = nameFileBasket.textName
//         return result
         
//     }
// }
    //  console.log(t.aaa())

//     for (let x = 0; x < text.length; x++) {
//         let text = [1, 2, 3, 4, 5, 6]
//     //         console.log(capArr[f] + text[x]);
//     //     } 

    

// for (let x in createElement) {
//     console.log(x)
// }
// createElement.createCard()




// let capArr = document.querySelectorAll('#card')
// for (let f = 0; f < capArr.length ; f++) {
//     // let text = [1, 2, 3, 4, 5, 6]
//     // for (let x = 0; x < text.length; x++) {
//         //     console.log(text[x]);
//         // }
//     }
//     console.log(capArr.length);
    // console.log(createElement)

// createCard()

// class createCard extends RenderHTML {
// //    constructor(params) {
// //    }
//     super(location, parameter, element)

//     creat() {
//         let card = `<div class="card" id="card"></div>`
//         let sectionTag = document.querySelector('.card-box')
//         const renderCard = new RenderHTML(sectionTag, 'afterbegin', card)
//         this.renderCard.renderHtml()
//     }

// }

// creat(renderCard.renderHtml())
// renderCard.renderHtml()
// class RenderHeader {
//     constructor(parameter, element){
//         this.parameter = parameter
//         this.element = element
//     }
//     renderHeader(){
//          let a = document.querySelector('.container').insertAdjacentHTML(`${this.parameter}`,`${this.element}`)
         
//     }
// }
// // let header = '<header class="menu"><button class="menu-btn-basket btn-card--hover">Корзина</button></header>'
// const rendrHeaderButton = new RenderHeader('beforeend', header)
// rendrHeaderButton.renderHeader()

// const renderCard = new Render()
