// Creating Responsive Navbar
const mobile_nav = document.querySelector(".mobile-nav-btn")
const headerElement = document.querySelector(".header")

mobile_nav.addEventListener("click", () => {
    headerElement.classList.toggle("active")
})




const myBioData = document.querySelector(".section-pic")
const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting
            ? document.body.classList.add("sticky")
            : document.body.classList.remove("sticky")
    },
    {
        root: null,
        threshold: 0,
    }
);
observer.observe(myBioData);