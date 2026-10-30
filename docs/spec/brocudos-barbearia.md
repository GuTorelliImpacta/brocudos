# Spec: Site institucional — Brocudos Barbearia (Tremembé, São Paulo/SP)

> Fonte da verdade para a implementação. Skills executam dentro deste documento. Decisões tomadas pela pensadora sem consulta (usuário pediu execução completa); suposições declaradas abaixo.

## 1. Missão e resultado
Site institucional estático, mobile-first, em pt-BR, para a Brocudos Barbearia. Conversão principal: **WhatsApp (11) 94529-6092** com mensagem pré-preenchida. Secundárias: ligar, rota no Google Maps, Instagram. Quem chega pelo Google no celular precisa, em até 2 toques, agendar ou ver como chegar.

## 2. Fatos confirmados (origem)
- Nome: Brocudos Barbearia (logo, fachada).
- Endereço: Av. Cel. Sezefredo Fagundes, 2166 — Tremembé, São Paulo - SP, 02306-003 (print Google Maps).
- Telefone/WhatsApp: (11) 94529-6092 (Maps e fachada).
- Instagram: @brocudosbarbearia (fachada, link do usuário).
- Horário (Maps): seg–sex 09:00–20:00; sáb 09:00–20:00; dom 09:00–13:00. Maps avisa "o horário pode mudar" (feriados).
- Serviços comprovados por fotos do cliente: degradê/fade com corte em textura; barba grisalha aparada; ambiente com espelhos, geladeira de bebidas, fliperama.
- Fachada: letreiro Brocudos + hop (lúpulo) + "Barbearia"; compartilha a frente com o Studio Agrelli (negócio distinto, WhatsApp 11 96676-2000).

## 3. Não sabemos — `[CONFIRMAR]`
- Lista completa de serviços e preços; formas de pagamento; se há agendamento online; se a bebida é cortesia ou vendida; nomes e fotos dos barbeiros; ano de fundação; autorização de imagem das pessoas na foto da fachada; vínculo com o Studio Agrelli; avaliação do Google; CNPJ/razão social.
- Instagram bloqueou leitura automática (HTTP 429): não contornado. Bio e destaques não lidos.
- Pesquisa pública não achou ficha em diretórios: nenhum dado de terceiros usado.
**Integridade:** nada de depoimento, nota, número, prêmio, preço, "desde ano" ou parceria inventados. Sem logos de terceiros (a marca na geladeira não aparece em nenhuma imagem do site; recortar). Sem hotlink de rede social. Seção dependente de dado vazio fica oculta.

## 4. Marca
- Nome "Brocudos" = barbudos, tom brincalhão, masculino, de amigos. Logo: tipografia woodtype/tuscan com sombreado e hop de cerveja; sugere barbearia + cultura de boteco/cerveja artesanal.
- Paleta (amostrada do logo: preto ~#101010 sobre branco #FFFFFF; foto: parede cinza-concreto, luz âmbar): `--ink #121212`, `--paper #F5F1E8`, `--brass #C8923A` (luz âmbar do ambiente, destaque 1), `--hop #7A8F3E` (hop do logo, destaque 2, só detalhes).
- Personalidade: parceira, direta, sem pose. Narrativa: "Corte bem feito, papo bom, cerveja gelada na espera" (só se bebida confirmada; senão "ambiente descontraído").
- Fraqueza atual: sem site; identidade só em letreiro e Instagram.

## 5. Nicho
- Beleza masculina cresce ~7,8% ao ano no Brasil (Sebrae/PR, infográfico — ver fontes; data da publicação a confirmar). Barbearia é busca local: "barbearia perto de mim", "barbearia Tremembé", "corte degradê zona norte".
- Concorrência local da Zona Norte: não levantada [CONFIRMAR]; resultados achados eram de outra cidade (Tremembé-SP/Taubaté). Diferencial provável e provável de provar: horário amplo (09–20h todos os dias + domingo manhã), ambiente com fliperama e bebidas.

## 6. Público e metas
Homens 16–50 da Zona Norte (Tremembé, Jaçanã, Tucuruvi), celular. Dores: horário, preço, localização, "vão me atender sem marcar?". KPIs: cliques em WhatsApp, em Rota, ligações. Metas: LCP < 2,5 s, CLS < 0,1, Lighthouse ≥ 95 em todas as categorias.

## 7. Direção de design
- Conceito: **"letreiro de boteco"** — fundo grafite, papel creme, filetes finos em latão, tipografia de madeira/slab ecoando o logo. Pouca decoração, muito contraste.
- Tokens obrigatórios: cores da seção 4. Destaque máx. 2 (brass, hop).
- Tipografia: display slab pesada (Alfa Slab One; alternativas Rye, Abril Fatface) + corpo Barlow. Self-host (@fontsource), sem CDN.
- Hero: H1 em um bloco legível ("Corte, barba e papo reto no Tremembé."), subtítulo com horário de hoje, CTA WhatsApp + Como chegar acima da dobra em 390 px.
- Contraste mínimo 4.5:1 (brass só em fundo escuro; texto longo em creme).
- Não fazer: tesoura/navalha clipart, fumaça, gradiente roxo, cards idênticos em grade, emojis, carrossel automático, parallax, logos de cerveja, "premium/luxo" (a marca é descontraída).

## 8. Páginas e fluxo
- `/` Home: hero, faixa "aberto agora/hoje" (JS, fallback estático), serviços em destaque, galeria 3–4 fotos, ambiente, localização/horários, CTA final.
- `/servicos`: corte (degradê), barba, corte+barba [lista a confirmar], sem preços ("valores pelo WhatsApp").
- `/sobre`: história sem datas inventadas, ambiente, equipe oculta até haver dados.
- `/contato`: endereço, mapa (link, sem iframe pesado), horários, WhatsApp, telefone, Instagram.
- `404`. Nav fixa com WhatsApp sempre visível; botão flutuante mobile.
- Sem formulário: contato via link `wa.me/5511945296092?text=…`.

## 9. Conteúdo
Tom: direto, bem-humorado, curto. Copy final no código, FAQ (atende sem hora marcada? [CONFIRMAR] → redigir como "chame no WhatsApp para confirmar horários livres"; formas de pagamento → "confirme no WhatsApp"). Aviso legal: "Beba com moderação. Venda proibida para menores de 18 anos." só se bebida for citada.

## 10. SEO
- Termos: barbearia Tremembé, barbearia zona norte SP, corte degradê, barba, barbearia perto de mim.
- Title/description únicos por página. JSON-LD `HairSalon`/`BarberShop` (schema `BarberShop` ⊂ LocalBusiness) com NAP idêntico à seção 2, `openingHoursSpecification`, `sameAs` Instagram. Sem `aggregateRating`.
- sitemap.xml, robots.txt, canonical (domínio via env `SITE_URL`), OG image própria (sem foto de terceiros).
- Dono: completar Google Meu Negócio (serviços, fotos, link do site, WhatsApp, horários de feriado).

## 11. Performance e acessibilidade
Imagens AVIF/WebP responsivas, `width/height`, lazy abaixo da dobra; fontes subset woff2 `font-display: swap`; JS < 5 KB. WCAG 2.1 AA, alvos ≥ 44 px, foco visível, `prefers-reduced-motion`, teste em 360 px.

## 12. Segurança e privacidade
Sem formulário, sem cookies, sem analytics → sem consentimento necessário. Headers (CSP restritiva, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS) via `_headers`/config de host. Sem segredos. Links externos `rel="noopener noreferrer"`. Dependências mínimas, lockfile commitado.

## 13. Stack
Astro estático (SEO e performance sem runtime) + CSS próprio (sem framework; site pequeno). Dados editáveis em `src/data/site.ts` (NAP, horários, serviços, links). Env: `SITE_URL`.

## 14. Assets (fotos do cliente, origem: prints/posts enviados)
| arquivo | mostra | resolução | uso |
|---|---|---|---|
| logo.jpg | logo preto/branco | 893×833 | referência; recriar como SVG texto não é permitido → usar crop como imagem no header/footer e OG |
| corte.jpg | degradê visto de costas (sem rosto) | 1206×1031 | serviços/galeria |
| barba.jpg | barba grisalha, cliente adulto | 1206×1446 | serviços/galeria |
| fachada.jpg | fachada com equipe/clientes | 1206×1446 | sobre (autorização [CONFIRMAR]); sem recorte de pessoas não necessário |
| bebidas.jpg | geladeira + fliperama | 1206×1559 | ambiente (cortar marca de terceiro) |
Nenhuma tem 1600 px de largura: **hero sem foto** (tipográfico). Fotos necessárias: hero horizontal ≥1600 px, equipe, interior amplo, antes/depois, vídeo curto.

## 15. Processo e QA
Gate visual: screenshot da Home → corrigir → demais páginas → revisão 390/768/1440 px, ao menos um ciclo de correção. Relatório final com pendências.

## 16. Critérios de aceite
- [ ] 4 páginas + 404, sitemap, robots · [ ] NAP/horários idênticos à seção 2 e ao JSON-LD · [ ] nenhum dado inventado · [ ] CTA WhatsApp acima da dobra em 390 px · [ ] sem scroll horizontal · [ ] contraste/teclado ok · [ ] Lighthouse ≥ 95 · [ ] JSON-LD válido · [ ] build limpo · [ ] imagens conforme inventário.

## 17. Fontes
- Sebrae/PR, "Infográfico Avaliação do Mercado de Beleza no Paraná" (beleza masculina ~7,8% a.a.): https://api.pr.sebrae.com.br/storage/comunidade/anexos/28000/PUB_Infográfico_Avaliação do Mercado de Beleza no Paraná.pdf — data a confirmar.
- Prints enviados pelo dono (Maps, fachada, logo, fotos). Instagram: não acessível (429).
