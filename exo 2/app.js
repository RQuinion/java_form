const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit',(event) => {

    event.preventDefault();

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const pizzaInput = document.getElementById('pizza')
    const ingredientInput = document.getElementById('ingredient')

    const formData = {
        name: nameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        pizza: pizzaInput.value,
        ingredient: ingredientInput.value,
    }

    const errors = {
        name: false,
        phone: false,
        email: false,
        password: false,
        pizza: false,
        ingredient: false,
    }

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const pizzaError = document.getElementById('pizzaError');
    const ingredientError = document.getElementById('ingredientError');

    nameError.style.display = 'none';
    phoneError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    pizzaError.style.display = 'none';
    ingredientError.style.display = 'none';

    if (!formData.name || !formData.phone || !formData.email || !formData.password || !formData.pizza || formData.ingredient) {
        const nameRegex = /^[a-zA-Z ]+$/;
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

        if (!formData.name || !nameRegex.test(formData.name)) {
            errors.name = true;
            nameError.style.display = 'block';
        }
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            errors.phone = true;
            phoneError.style.display = 'block';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = true;
            emailError.style.display = 'block';
        }
        if (!formData.password || !nameRegex.test(formData.password)) {
            errors.password = true;
            passwordError.style.display = 'block';
        }
/*         if (!formData.pizza || !valueRegex.test(formData.pizza)) {
            errors.pizza = true;
            pizzaError.style.display = 'block';
        }
        if (!formData.ingredient || valueRegex.test(formData.ingredient)) {
            errors.ingredient = true;
            ingredientError.style.display = 'block';
        } */
    }
    if (!Object.values(errors).includes(true)) {
        console.log(formData)
    }
    
document.getElementById('m').value = 10;
document.getElementById('l').value = 15;
document.getElementById('xl').value = 20;
document.getElementById('viande').value = 7;
document.getElementById('legume').value = 5;
document.getElementById('fromage').value = 3;
    
/* let prixM = document.getElementById('m');
let prixL = document.getElementById('l');
let prixXl = document.getElementById('xl');
let prixViande = document.getElementById('viande');
let prixLegume = document.getElementById('legume');
let prixFromage = document.getElementById('fromage');
     */
/* let taillePizza = {
        prixM,
        prixL,
        prixXl,
    }
let choixIngredient = {
        prixViande,
        prixLegume,
        prixFromage,
    }
     */
let choixPizza = document.getElementById("pizza");
let choixIngredient = document.getElementById("ingredient");

let prixPizza = choixPizza.value;
let prixIngredient = choixIngredient.value;

var total = +prixPizza + +prixIngredient;

document.getElementById("total").value = "Total: " + total +"e";

alert("commande prise en compte");
})
