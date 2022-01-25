let li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", () => {
        //1.Nacin
        // if (li[i].style.textDecoration == "line-through") {
        //     li[i].style.textDecoration = "none";
        // }
        // else {
        //     li[i].style.textDecoration = "line-through";
        // }

        //2.Nacin
        li[i].classList.toggle("lineThrough");
    });
}
