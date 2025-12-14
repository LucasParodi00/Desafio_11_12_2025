// Formateador de moneda
export const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("es-AR", {
    // Cambia 'es-AR' por tu locale
    style: "currency",
    currency: "USD",
  }).format(amount);
};
