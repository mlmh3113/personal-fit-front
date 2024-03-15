
export const formatDate = (date) => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString()
}


export const IMC = (weight, height) => {
      const imc = weight / Math.pow(height, 2);
    const imcFixed = parseFloat(imc.toFixed(2));
    return imcFixed;
}


