// Dados centrais do site. Edite aqui e tudo se atualiza (cabeçalho, rodapé, contato, SEO).
export const SITE = {
  marca: 'Mundo Humano',
  slogan: 'Psicólogo em Campo Grande',
  descricao:
    'Marcel Paulino, psicólogo em Campo Grande/MS. Terapia cognitivo-comportamental para adultos, adolescentes e casais, presencial no Jardim Bela Vista e online.',
  profissional: 'Marcel Paulino',
  crp: 'CRP 14/05302-8',
  cidade: 'Campo Grande',
  uf: 'MS',
  endereco: 'Rua Patagônia, 443B – Sala 3',
  bairro: 'Jardim Bela Vista',
  mapa: 'https://maps.app.goo.gl/ABQ4mcwYxtmeH3Lw6',
  // Somente números, com DDI e DDD
  whatsapp: '5567981671304',
  agenda: 'https://client.tuaagenda.com/c/MarcelPsicologo',
  horarios: {
    presencial: 'Terça, quinta, sexta e sábado',
    online: 'Segunda a sábado',
    domingo: 'Domingo: consultar disponibilidade',
  },
};

export const whatsappLink = (msg = 'Olá, Marcel! Gostaria de saber mais sobre o atendimento.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telefoneFormatado = () => {
  const n = SITE.whatsapp.replace(/^55/, '');
  return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`;
};
