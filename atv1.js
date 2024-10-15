let idade = parseInt(prompt(`Digite sua Idade:`));

if (idade >= 18 && idade <= 59) {
    alert(`Adulto`);
}

else if (idade >= 60) {
    alert(`Idoso`);
}

else {
    alert(`Menor de Idade`);
}