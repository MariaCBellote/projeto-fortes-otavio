function cor() {
    const statuss = document.querySelectorAll('td.status');
    statuss.forEach(statu => {
        if (statu.textContent === 'Pendente') {
            statu.style.color = "blue";
        } else if (statu.textContent === 'Aprovado') {
            statu.style.color = "green";
        } else if (statu.textContent === 'Desaprovado') {
            statu.style.color = "red";
        }
    });
}

document.addEventListener('DOMContentLoaded', cor);