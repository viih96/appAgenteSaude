export class UsersAgentesaude {
  name?: string;
  email?: string;
  password?: string;
  professional?: string; /** medico, enfermeiro, tec enfermagem, etc...  */
  id_professional?: string;
  registro?: string;
  address_state?: string = "";
  sexo?: string;
  contato?: string;
  tipousuario?: string = "agentesaude";
  admin?: boolean = false;
}
