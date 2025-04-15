import capturarLink from './function.js';

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btn");

    btn.addEventListener("click", function() {
        capturarLink();
    });
})