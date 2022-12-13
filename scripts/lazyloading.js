// reference all images
let imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionObserver
const imgOptions = {
    threshold: 0,
    rooMargin: "0px 0px 50px 0px"
};

// Move the path from src(placeholder) to data-src(actual image)
const loadImages = (image) => {

    image.setAttribute("src", image.getAttribute("data-src"));

    image.onload = () => {

        image.removeAttribute("data-src");

    };

};

// Loop through each image and load them only on demand.
if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((items, observer) => {

        items.forEach((item) => {

            if (item.isIntersecting) {

                loadImages(item.target);
                observer.unobserve(item.target)
            }

        })

    }, imgOptions);

    imagesToLoad.forEach((img) => {

        observer.observe(img);

    })

} else {

    imagesToLoad.forEach((img) => {

        loadImages(img);
    
    });

}



