// Dados centrais do site. Edite aqui e tudo se atualiza (cabeçalho, rodapé, contato, SEO).
export const SITE = {
  marca: 'Mundo Humano',
  slogan: 'Psicologia e psicoterapia',
  descricao:
    'Psicoterapia para adultos, adolescentes e casais, presencial e online. Um espaço de escuta cuidadosa para falar do que pesa e entender o que se repete.',
  profissional: 'Nome da Psicóloga',
  crp: 'CRP 00/00000',
  cidade: 'João Pessoa',
  uf: 'PB',
  endereco: 'Rua Exemplo, 123 – Sala 45, Bairro',
  email: 'contato@mundohumano.com.br',
  // Somente números, com DDI e DDD
  whatsapp: '5583900000000',
  instagram: 'https://instagram.com/mundohumano',
  horario: 'Segunda a sexta, das 8h às 20h',
};

export const whatsappLink = (msg = 'Olá! Gostaria de saber mais sobre o atendimento.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telefoneFormatado = () => {
  const n = SITE.whatsapp.replace(/^55/, '');
  return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`;
};
