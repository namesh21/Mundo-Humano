import { SITE } from './config';

export const faqSchema = (itens: { p: string; r: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: itens.map((f) => ({
    '@type': 'Question',
    name: f.p,
    acceptedAnswer: { '@type': 'Answer', text: f.r },
  })),
});

export const breadcrumbSchema = (site: URL, itens: { nome: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ nome: 'Início', path: '/' }, ...itens].map((i, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: i.nome,
    item: new URL(i.path, site).href,
  })),
});

export const serviceSchema = (site: URL, nome: string, descricao: string, path: string) => ({
  '@type': 'Service',
  name: nome,
  serviceType: nome,
  description: descricao,
  url: new URL(path, site).href,
  provider: { '@id': new URL('/#consultorio', site).href },
  areaServed: { '@type': 'City', name: `${SITE.cidade}, ${SITE.uf}` },
  availableChannel: [
    {
      '@type': 'ServiceChannel',
      name: 'Presencial',
      serviceLocation: {
        '@type': 'Place',
        address: `${SITE.endereco}, ${SITE.cidade}/${SITE.uf}`,
      },
    },
    { '@type': 'ServiceChannel', name: 'Online (vídeo)', serviceUrl: SITE.agenda },
  ],
});
