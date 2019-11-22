let createElement = { 

    createCard() {
        let card = `<div class="card" id="card"></div>`
        let sectionTag = document.querySelector('.card-box')
        const renderCard = new RenderHTML(sectionTag, 'afterbegin', card).renderHtml()

        let imgCard = `<img src="${this.z}" class="card-img"></img>`
        let cardTag = document.querySelector('.card')
        const renderImgCard = new RenderHTML(cardTag, 'afterbegin', imgCard).renderHtml()

        let cardText = `<p class="card-text"></p>`
        let imgTag = document.querySelector('.card-img')
        const renderCardText = new RenderHTML(imgTag, 'afterend', cardText).renderHtml()

        let btnCard = `<button class="btn-card btn-card--hover">Добавить</button>`
        let cardTextTag = document.querySelector('.card-text')
        const renderBtnCard = new RenderHTML(cardTextTag, 'afterend', btnCard).renderHtml()

      return renderCard
    },
    createCardContent() {
        let arrText = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse()
        let arrImg = ['img/651895716_w200_h200_muzhskie-tverdye-teplye.webp', 'img/images.jpg', 
            'img/images (1).jpg', 'img/muzhskaya-vyazanaya-shapka-s-ushkami-na-flise.jpg', 'img/2251-home_default.jpg', 
            'img/images (2).jpg', 'img/images (3).jpg', 'img/103078.jpg', 'img/images (4).jpg', 'img/images (5).jpg', 
            'img/AONIJIE-Chapeu-2019.jpg_q50.jpg', 'img/vyazanaya-shapka-s-kozyrkom-bordovaya-mb7530_5099ef54b8d2073_200x200.jpg'].reverse()

        for (let i = 0; i < 12; i++) {
            this.z = arrImg[i]
            createElement.createCard()
            document.querySelector('.card-text').innerHTML= arrText[i]
        }
    }
}
createElement.createCardContent()

let creteDate = {
    createId() {
        for(let l = 0; l < 12; l++) {
            let n = 'f'   
            let  z = n + `${l}`
     
            let arrL = Array.from(z)
            console.log(arrL)
         // console.log(z)
  
        }
    }
}
console.log(creteDate.createId())
// 
// let capArr = document.querySelectorAll('#card')
// let btnCard = document.querySelector('button')
// let x = Array.from(capArr)

// let newArrCard = []
// btnCard.addEventListener('click', function() {
//     x.forEach(function(item, index){
//     // var f = index
//         console.log(index)
//     // return
//      })
// // newArrCard.push(x)
// // console.log(newArrCard)
// })
