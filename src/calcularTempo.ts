/* calcular tempo de avaliação */
export default function calcularTempo(data: string) {
  const agora = new Date();
  const dataPost = new Date(data);

  const diferenca = agora.getTime() - dataPost.getTime();

  const minutos = Math.floor(diferenca / 60000);

  if (minutos < 1) {
    return "agora";
  }

  if (minutos < 60) {
    return `${minutos} minutos`;
  }

  const horas = Math.floor(minutos / 60);

  if (horas < 24) {
    return `${horas} horas`;
  }

  const dias = Math.floor(horas / 24);

  return `${dias} dias`;
}
