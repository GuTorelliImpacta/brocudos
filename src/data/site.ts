export const site = {
  name: 'Brocudos Barbearia',
  url: import.meta.env.SITE_URL ?? 'https://brocudosbarbearia.com.br',
  phone: '(11) 94529-6092',
  phoneTel: '+5511945296092',
  wa: '5511945296092',
  instagram: 'https://www.instagram.com/brocudosbarbearia',
  address: { street: 'Av. Cel. Sezefredo Fagundes, 2166', district: 'Tremembé', city: 'São Paulo', uf: 'SP', zip: '02306-003' },
  maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Av. Cel. Sezefredo Fagundes, 2166 - Tremembé, São Paulo - SP, 02306-003'),
  // 0 = domingo ... 6 = sábado
  hours: { 0: ['09:00', '13:00'], 1: ['09:00', '20:00'], 2: ['09:00', '20:00'], 3: ['09:00', '20:00'], 4: ['09:00', '20:00'], 5: ['09:00', '20:00'], 6: ['09:00', '20:00'] } as Record<number, [string, string]>,
};
export const waLink = (msg = 'Olá! Vim pelo site da Brocudos e quero saber sobre horários.') =>
  `https://wa.me/${site.wa}?text=${encodeURIComponent(msg)}`;
