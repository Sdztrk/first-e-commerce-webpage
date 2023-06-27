//first importing products from './products.js'
import {products} from './products.js'

//selecting the elements

const sectionCenter = document.querySelector('.section-center');
// sectionCenter.style.color = 'red'
const btnContainer = document.querySelector('.btn-container');
// btnContainer.style.backgroundColor = 'red'

// the function for rendering each product
const renderProduct = (products)=>{
    
    let display = products.map((product)=>{
        return(
        `
        <article class="product-item">
          <img
            src=${product.thumbnail}
            alt="iPhone"
            9=""
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>${product.title}</h4>
            </header>
            <p class="item-text">${product.description}</p>
            <h4 class="price">${product.price}</h4>
          </div>
        </article>
        `
        )
    })
    //as long as I join the array, the commas will be removed
    display = display.join('')
    sectionCenter.innerHTML = display
    // console.log(display)
}


const displayButtons = ()=>{
    let categories = ['all']
   
    products.forEach((product)=>{
        if(!categories.includes(product.category)){
            categories.push(product.category)
        }
    })
    // console.log(categories)

    let categoryBtns = categories.map((category)=>{
        return(
            `
            <button type="button" class="filter-btn" data-id=${category}>
                ${category}
            </button>
            `
        )
    })

    categoryBtns = categoryBtns.join('')
    btnContainer.innerHTML = categoryBtns

    let filterBtns = document.querySelectorAll(".filter-btn")
    
    filterBtns.forEach((item ) => {
        item.addEventListener("click", (e) =>{
            const category = e.target.dataset.id
            // console.log(e.target.dataset.id)
            
            let productsOfCategory = products.filter((product)=> product.category === category )

            // console.log(productsOfCategory)
            if (category === "all") {
                renderProduct(products)
            }
            else {
                renderProduct(productsOfCategory)
            } 
        })
    })
}

//add event listener to the window object
window.addEventListener('DOMContentLoaded', ()=>{
    renderProduct(products)
    displayButtons()
})