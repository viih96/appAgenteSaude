export class User {
  name?: string;
  sexo?: string;
  datanascimento?: string;
  professional?: string; /** medico, enfermeiro, tec enfermagem, etc...  */
  cartaosus?: string;
  registro?: string;
  tiposanguineo?: string;
  contato?: string;
  email?: string;
  comorbidades?: string;
  address?: string = "";
  address_number?: string = "";
  address_district?: string = "";
  address_city?: string = "";
  address_state?: string = "";
  imgUrl?: string = ""; // a url da imagem
  filePath?: string = ""; // caminho da imagem no Storage
}
