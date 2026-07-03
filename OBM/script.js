// 1. Product data
const products = [
  {
    name: "",
    desc: "Monitors",
    img: "https://i.ibb.co/hFRs6GC1/0001.jpg" 
  },
  {
    name: "",
    desc: "Computers",
    img: "https://i.ibb.co/5hLJSbmP/0002.jpg" 
  },
 {
    name: "",
    desc: "Mouse",
    img: "https://i.ibb.co/0RWcbjqs/0003.jpg"  
  },

 {
    name: "",
    desc: "Keyboards",
    img: "https://i.ibb.co/8n9SwpNx/0004.jpg" 
  },

 {
    name: "",
    desc: "Tablets",
    img: "https://i.ibb.co/JFgtMLf4/0005.jpg" 
  },

 {
    name: "",
    desc: "Flashdrives",
    img: "https://i.ibb.co/G3MW7PTr/0006.jpg" 
  },


 {
    name: "",
    desc: "Adapters",
    img: "https://i.ibb.co/pjC2SLYz/0007.jpg" 
  },

{
    name: "",
    desc: "Cables",
    img: "https://i.ibb.co/wZffsRLK/0008.jpg" 
  },
{
    name: "",
    desc: "Toners",
    img: "https://i.ibb.co/cc2HZykC/0009.jpg" 
  },
{
    name: "",
    desc: "Inks",
    img: "https://i.ibb.co/xtyRCPN7/0010.jpg" 
  },

{
    name: "",
    desc: "Bluethooth Headphones",
    img: "https://i.ibb.co/cKfWtSWb/0014.jpg" 
  },


{
    name: "",
    desc: "Printers",
    img: "https://i.ibb.co/zVn6bj1v/0011.jpg" 
  },
{
    name: "",
    desc: "Bluethooth Speakers",
    img: "https://i.ibb.co/nNy0rGTB/0012.jpg" 
  },
{
    name: "",
    desc: "Routers",
    img: "https://i.ibb.co/yc8hMNKV/0013.jpg" 
  },


{
    name: "",
    desc: "Ribbons",
    img: "https://i.ibb.co/fYShxRdj/0015.jpg" 
  },


{
    name: "",
    desc: "LTO Tapes",
    img: "https://i.ibb.co/9kGXrhR7/0016.jpg" 
  },



{
    name: "",
    desc: "Label Printers",
    img: "https://i.ibb.co/Y4yGX12r/0017.jpg" 
  },


{
    name: "",
    desc: "Binder Machines",
    img: "https://i.ibb.co/ZRct67bQ/0018.jpg" 
  },



{
    name: "",
    desc: "Laminating Machines",
    img: "https://i.ibb.co/S4S0hx4b/0019.jpg" 
  },


{
    name: "",
    desc: "Laptops",
    img: "https://i.ibb.co/8S9YQZW/0000.jpg" 
  },






  ];

const visibleProducts = products.filter(product => {
  return typeof product.img === 'string' && /\.(jpe?g)$/i.test(product.img.trim());
});

// 2. Pagination setup
let currentPage = 1;
const itemsPerPage = 10;
const totalPages = Math.ceil(visibleProducts.length / itemsPerPage);

// 3. Render function
function renderProducts(page) {
  const slider = document.getElementById("productSlider");
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = visibleProducts.slice(start, end);

  slider.style.opacity = 0;
  setTimeout(() => {
    slider.innerHTML = pageItems.map(p => `
      <div class="product-card">
        ${p.img ? `<img src="${p.img}" alt="${p.name}">` : ''}
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      </div>
    `).join("");
    slider.style.opacity = 1;
  }, 100);

  document.getElementById("pageIndicator").textContent = `${page} / ${totalPages}`;
}

// 4. Event listeners
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(currentPage);

  const slider = document.getElementById("productSlider");
  if (slider) {
    slider.addEventListener("mouseover", event => {
      const card = event.target.closest('.product-card');
      if (!card) return;
      if (!card.querySelector('.coming-soon-overlay')) {
        setTimeout(() => {
          if (!card.querySelector('.coming-soon-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'coming-soon-overlay';
            overlay.textContent = 'ecommerce coming soon';
            card.appendChild(overlay);
          }
        }, 1500);
      }
    });
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentPage = currentPage > 1 ? currentPage - 1 : totalPages;
    renderProducts(currentPage);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentPage = currentPage < totalPages ? currentPage + 1 : 1;
    renderProducts(currentPage);
  });
});

