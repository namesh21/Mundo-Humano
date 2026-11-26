// Dados centrais do site. Edite aqui e tudo se atualiza (cabeçalho, rodapé, contato, SEO).
export const SITE = {
  marca: 'Mundo Humano',
  slogan: 'Psicólogo em Campo Grande',
  descricao:
    'Psicólogo em Campo Grande/MS, Marcel Paulino (CRP 14/05302-8): terapia individual, de casal e familiar e atendimento inclusivo LGBTQIA+. Presencial e online.',
  profissional: 'Marcel Paulino',
  crp: 'CRP 14/05302-8',
  cidade: 'Campo Grande',
  uf: 'MS',
  endereco: 'Rua Patagônia, 443B – Sala 3',
  bairro: 'Jardim Bela Vista',
  mapa: 'https://maps.app.goo.gl/ABQ4mcwYxtmeH3Lw6',
  email: 'mlpaulino@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marcel-paulino-033b62b4',
  // Somente números, com DDI e DDD
  whatsapp: '5567981671304',
  agenda: 'https://client.tuaagenda.com/c/MarcelPsicologo',
  pagamento: 'Dinheiro, Pix, cartão de crédito e débito',
  // Confirmar com o Marcel se as parcerias continuam ativas
  parceiros: ['UFMS', 'Revitalize'],
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
