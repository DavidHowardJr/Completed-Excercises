import WishList from "./Components/WishList";
import Car from "./Components/Car";
import { displayCarInfo } from "./utils/DOMMethods";


window.onload = function () {
    const form = document.getElementById("submitForm");
    const makeInput = document.getElementById("makeInput");
    const modelInput = document.getElementById("modelInput");
    const yearInput = document.getElementById("yearInput");

    const wishList = new WishList();

    const [removeBtn] = document.getElementsByClassName("removeBtn");
    removeBtn.addEventListener("click", function () {
        displayCarInfo({ make: "", model: "", year: "" });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let newCar = new Car(makeInput.value, modelInput.value, yearInput.value);
        wishList.add(newCar);
    });
};
