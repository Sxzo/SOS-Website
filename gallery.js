images = document.querySelectorAll('.fullscreen-image');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const closeBtn = document.querySelector('.close');
const dropDown = document.querySelector(".dropdown")

let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    showModal(image.src);
  });
});

prevBtn.addEventListener('click', () => {
  navigate(-1);
});

nextBtn.addEventListener('click', () => {
  navigate(1);
});

closeBtn.addEventListener('click', () => {
  closeModal();
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

function showModal(imageUrl) {
  modalContent.src = imageUrl;
  modal.style.display = 'flex';
  updateArrows();
}

function closeModal() {
  modal.style.display = 'none';
}

function navigate(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showModal(images[currentIndex].src);
}

function updateArrows() {
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
}

const imageMap = new Map();

imageMap.set("Kitchens", 
  [
    '<li><img src = "Gallery Images/istockphoto-611895696-612x612.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pexels-mark-mccammon-1080721.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pexels-mark-mccammon-2724748.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/kitchen4.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/kitchen5.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/kitchen6.jpg" class = "image fullscreen-image present"></li>'
  ]
)

imageMap.set("Bathrooms",
  [
    '<li><img src = "Gallery Images/3257-Wood-Duck-Dr-NW-Prior-Lake-MN-55372-4-scaled.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/modern-bathroom-design-ideas-4129371-hero-723611e159bb4a518fc4253b9175eba8.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/small-bathroom-ideas.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bathroom4.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bathroom5.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bathroom6.jpg" class = "image fullscreen-image present"></li>'
  ]
)

imageMap.set("Bedrooms",
  [
    '<li><img src = "Gallery Images/bedroom-416062_1280.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bedroom2.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bedroom3.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bedroom4.jpg" class = "image fullscreen-image present"></li>'
  ]
)

imageMap.set("Houses",
  [
    '<li><img src = "Gallery Images/exterior_house-56a193115f9b58b7d0c0c3e4.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/istockphoto-515009797-612x612.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/istockphoto-1334926091-170667a.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pexels-curtis-adams-3935333.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/house6.jpg" class = "image fullscreen-image present"></li>'
  ]
)

imageMap.set("Garages",
  [
    '<li><img src = "Gallery Images/detached-3-car-garage.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/hdxt_coin_8.jpg" class = "image fullscreen-image"></li>',
    '<li><img src = "Gallery Images/istockphoto-178594527-612x612.jpg" class = "image fullscreen-image present"></li>',
    
  ]
)

imageMap.set("Pools",
  [
    '<li><img src = "Gallery Images/istockphoto-1364656744-170667a.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pool2.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pool3.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pool4.jpg" class = "image fullscreen-image present"></li>'
  ]
)

imageMap.set("All",
  [
    '<li><img src = "Gallery Images/istockphoto-611895696-612x612.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pexels-mark-mccammon-1080721.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pexels-mark-mccammon-2724748.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/kitchen4.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/kitchen5.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/kitchen6.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/3257-Wood-Duck-Dr-NW-Prior-Lake-MN-55372-4-scaled.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/modern-bathroom-design-ideas-4129371-hero-723611e159bb4a518fc4253b9175eba8.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/small-bathroom-ideas.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bathroom4.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bathroom5.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bathroom6.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bedroom-416062_1280.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bedroom2.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bedroom3.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/bedroom4.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/exterior_house-56a193115f9b58b7d0c0c3e4.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/istockphoto-515009797-612x612.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/istockphoto-1334926091-170667a.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pexels-curtis-adams-3935333.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/house6.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/detached-3-car-garage.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/hdxt_coin_8.jpg" class = "image fullscreen-image"></li>',
    '<li><img src = "Gallery Images/istockphoto-178594527-612x612.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/istockphoto-1364656744-170667a.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pool2.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pool3.jpg" class = "image fullscreen-image present"></li>',
    '<li><img src = "Gallery Images/pool4.jpg" class = "image fullscreen-image present"></li>'
  ]
)

var gallery = document.querySelector(".images");
    selected = dropDown.value
    gallery.innerHTML = ""
    console.log("Selected:", selected)
    imageMap.get(selected).forEach((entry) => {
      gallery.innerHTML += entry
    });
    images = document.querySelectorAll('.fullscreen-image');

    images.forEach((image, index) => {
      image.addEventListener('click', () => {
        currentIndex = index;
        showModal(image.src);
      });
    });

dropDown.addEventListener("change", function() {
    var gallery = document.querySelector(".images");
    selected = dropDown.value
    gallery.innerHTML = ""
    console.log("Selected:", selected)
    imageMap.get(selected).forEach((entry) => {
      gallery.innerHTML += entry
    });
    images = document.querySelectorAll('.fullscreen-image');

    let currentIndex = 0;

    images.forEach((image, index) => {
      image.addEventListener('click', () => {
        currentIndex = index;
        showModal(image.src);
      });
    });
    
    prevBtn.addEventListener('click', () => {
      navigate(-1);
    });
    
    nextBtn.addEventListener('click', () => {
      navigate(1);
    });
    
    closeBtn.addEventListener('click', () => {
      closeModal();
    });
    
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
    
    function showModal(imageUrl) {
      modalContent.src = imageUrl;
      modal.style.display = 'flex';
      updateArrows();
    }
    
    function closeModal() {
      modal.style.display = 'none';
    }
    
    function navigate(direction) {
      currentIndex += direction;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      } else if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      showModal(images[currentIndex].src);
    }
    
    function updateArrows() {
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
    }
    // gallery.innerHTML += '<li><img src="Gallery Images/3257-Wood-Duck-Dr-NW-Prior-Lake-MN-55372-4-scaled.jpg" class="image fullscreen-image present"></li>';
})



        // BATHROOM <li><img src = "Gallery Images\3257-Wood-Duck-Dr-NW-Prior-Lake-MN-55372-4-scaled.jpg" class = "image fullscreen-image present"></li>
        // BEDROOM <li><img src = "Gallery Images\bedroom-416062_1280.jpg" class = "image fullscreen-image present"></li>
        // HOUSE <li><img src = "Gallery Images\canadian-home-construction.jpg" class = "image fullscreen-image present"></li>
        // GARAGE <li><img src = "Gallery Images\detached-3-car-garage.jpg" class = "image fullscreen-image present"></li>
        // HOUSE <li><img src = "Gallery Images\exterior_house-56a193115f9b58b7d0c0c3e4.jpg" class = "image fullscreen-image present"></li>
        // GARAGE <li><img src = "Gallery Images\hdxt_coin_8.jpg" class = "image fullscreen-image"></li>
        // GARAGE <li><img src = "Gallery Images\istockphoto-178594527-612x612.jpg" class = "image fullscreen-image present"></li>
        // HOUSE <li><img src = "Gallery Images\istockphoto-515009797-612x612.jpg" class = "image fullscreen-image present"></li>
        // KITCHEN <li><img src = "Gallery Images\istockphoto-611895696-612x612.jpg" class = "image fullscreen-image present"></li>
        // HOUSE <li><img src = "Gallery Images\istockphoto-1334926091-170667a.jpg" class = "image fullscreen-image present"></li>
        // POOL <li><img src = "Gallery Images\istockphoto-1364656744-170667a.jpg" class = "image fullscreen-image present"></li>
        // BASEMENT <li><img src = "Gallery Images\istockphoto-1371803868-170667a.jpg" class = "image fullscreen-image present"></li>
        // BATHROOM <li><img src = "Gallery Images\modern-bathroom-design-ideas-4129371-hero-723611e159bb4a518fc4253b9175eba8.jpg" class = "image fullscreen-image present"></li>
        // HOUSE <li><img src = "Gallery Images\pexels-curtis-adams-3935333.jpg" class = "image fullscreen-image present"></li>
        // KITCHEN <li><img src = "Gallery Images\pexels-mark-mccammon-1080721.jpg" class = "image fullscreen-image present"></li>
        // KITCHEN <li><img src = "Gallery Images\pexels-mark-mccammon-2724748.jpg" class = "image fullscreen-image present"></li>
        // BATHROOM <li><img src = "Gallery Images\small-bathroom-ideas.jpg" class = "image fullscreen-image present"></li>
        // BASEMENT <li><img src = "Gallery Images\istockphoto-483546981-612x612.jpg" class = "image fullscreen-image present"></li>