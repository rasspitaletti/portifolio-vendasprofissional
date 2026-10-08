/* Dados do portfólio — edite aqui seus projetos, contatos e textos.
   (Carregado antes do main.js) */
/* =========================================================
   1) CONFIGURAÇÃO GERAL — edite aqui
   ========================================================= */
const CONFIG = {
  brand: 'Raul Spitaletti',
  role: 'Desenvolvedor Web',
  location: 'São Paulo · Brasil',
  // Número no formato internacional, só dígitos. Ex.: "5511999998888".
  // Vazio = o WhatsApp abre para a pessoa escolher o contato (a mensagem vai pré-preenchida).
  whatsappNumber: '5511947710444',
  whatsappMessage: 'Olá! Vi seu portfólio e gostaria de saber mais sobre a criação de um site para minha empresa.',
  instagram: 'https://www.instagram.com/spitaletti.dev/', // ex.: "https://instagram.com/seuusuario" (vazio = não aparece)
  email: '',     // ex.: "contato@seudominio.com.br" (vazio = não aparece)
  year: 2026
};

/* =========================================================
   2) PROJETOS — adicione, remova ou edite à vontade
   ---------------------------------------------------------
   status:     "real" = cliente real | "conceito" = projeto demonstrativo (NÃO é cliente real)
   url:        link do site publicado ("" = botão desativado, sem link quebrado)
   screenshot: print real do site. Se preenchido, substitui a prévia gerada.
   autoScreenshot: true = gera o print do site automaticamente a partir da url.
   embed:      true = mostra o site ao vivo em iframe (só se o site permitir iframe).
   image:      foto usada na prévia gerada quando não há screenshot.
   theme/mock: cores e textos da prévia gerada.
   ========================================================= */
const projects = [
  {
    id: 102, status: 'real',
    name: 'Prime Imóveis',
    category: 'Imobiliário', type: 'Site de imobiliária', location: 'São Paulo — SP',
    description: 'Site para imobiliária boutique em São Paulo: busca com filtros por tipo, região, preço e quartos, imóveis em destaque e contato com um corretor pelo WhatsApp.',
    url: 'https://prime-imoveis-bice.vercel.app', screenshot: '', embed: false, autoScreenshot: false,
    image: 'https://images.unsplash.com/photo-1748063578185-3d68121b11ff?auto=format&fit=crop&w=2000&q=80',
    tags: ['Busca com filtros', 'Imóveis em destaque', 'Página por imóvel', 'WhatsApp'],
    theme: { bg: '#080807', fg: '#f4f1ec', accent: '#c9a46c', button: '#c9a46c', buttonText: '#080807', display: 'sans' },
    mock: {
      layout: 'hero', logoTop: 'PRIME', logoSub: 'IMÓVEIS',
      nav: ['Comprar', 'Alugar', 'Imóveis', 'Lançamentos', 'Sobre nós', 'Contato'], pill: 'Fale com um corretor',
      kicker: 'Imobiliária boutique · São Paulo',
      headline: 'Encontre o imóvel ideal para você', headlineEm: '',
      text: 'Imóveis selecionados para quem busca qualidade, localização e segurança.',
      cta: 'Fale com um corretor', cta2: 'Ver todos os imóveis',
      aside: ['Busca', 'Tipo · Região · Preço · Quartos'],
      sectionTitle: 'Encontre o imóvel que procura',
      photos: [
        ['Apartamentos', 'https://images.unsplash.com/photo-1624204386084-dd8c05e32226?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Casas', 'https://images.unsplash.com/photo-1706164971302-e30c0640cc3b?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Coberturas', 'https://images.unsplash.com/photo-1757924330358-a48d65664dac?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Condomínios', 'https://images.unsplash.com/photo-1775112077888-8fa36e9bbc51?auto=format&fit=crop&w=760&h=520&q=72']
      ]
    }
  },
  {
    id: 101, status: 'real',
    name: 'Arpoador Imóveis',
    category: 'Imobiliário', type: 'Site de imobiliária', location: 'Zona Oeste — São Paulo',
    description: 'Site de imobiliária na Zona Oeste de São Paulo: busca de imóveis por tipo, vitrine de destaques com fotos grandes e contato direto com um consultor pelo WhatsApp.',
    url: 'https://arpoador-imoveis.vercel.app', screenshot: '', embed: false, autoScreenshot: false,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    tags: ['Busca de imóveis', 'Vitrine de destaques', 'WhatsApp', 'SEO local'],
    theme: { bg: '#f4f2ec', fg: '#1e211d', accent: '#d9c8a4', button: '#d9c8a4', buttonText: '#1e211d', display: 'serif', heroDark: true, heroTint: '#283027' },
    mock: {
      layout: 'hero', logoTop: 'Arpoador', logoSub: 'IMÓVEIS',
      nav: ['Imóveis', 'Comprar', 'Alugar', 'Anuncie', 'Sobre', 'Contato'], pill: 'Falar no WhatsApp',
      kicker: 'Imobiliária · Zona Oeste de São Paulo',
      headline: 'Encontre o imóvel que combina com o seu', headlineEm: 'momento.',
      text: 'Atendimento personalizado para você comprar, vender ou alugar em São Paulo com segurança, transparência e tranquilidade.',
      cta: 'Ver imóveis', cta2: 'Falar com um consultor',
      aside: ['Atendimento', 'Comprar · Vender · Alugar'],
      sectionTitle: 'O imóvel certo para cada fase',
      photos: [
        ['Casas e sobrados', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Apartamentos', 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Terrenos', 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Comerciais', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=760&h=520&q=72']
      ]
    }
  },
  {
    id: 103, status: 'real',
    name: 'Vinicius Ribeiro',
    category: 'Imobiliário', type: 'Site de corretor', location: 'Araçatuba — SP',
    description: 'Site para corretor de imóveis em Araçatuba: curadoria de imóveis em destaque, serviços de compra, venda, locação e consultoria, e agendamento de visitas direto com o corretor.',
    url: 'https://vinicius-imoveis.vercel.app', screenshot: '', embed: false, autoScreenshot: false,
    image: 'https://vinicius-imoveis.vercel.app/hero-vinicius.jpg',
    tags: ['Imóveis em destaque', 'Agendamento de visitas', 'WhatsApp', 'Marca pessoal'],
    theme: { bg: '#0d0d0c', fg: '#efede6', accent: '#c8b48c', button: '#efede6', buttonText: '#0d0d0c', display: 'serif' },
    mock: {
      layout: 'hero', logoTop: 'VINICIUS RIBEIRO', logoSub: 'CORRETOR DE IMÓVEIS',
      nav: ['Imóveis', 'Sobre', 'Serviços', 'Contato'], pill: 'Agendar visita',
      kicker: 'Araçatuba e região',
      headline: 'O imóvel certo', headlineEm: 'para o seu próximo capítulo.',
      text: 'Uma curadoria de espaços para viver bem, investir com segurança e construir novas histórias.',
      cta: 'Falar com o corretor', cta2: 'Explorar imóveis',
      aside: ['Corretor', 'CRECI/SP 307447-F'],
      sectionTitle: 'Imóveis em destaque.',
      photos: [
        ['Casa Ipê', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Residência Araucária', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Solar das Palmeiras', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Casa Jardim', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=760&h=520&q=72']
      ]
    }
  },
  {
    id: 0, status: 'breve',
    name: 'Nox Bijoux',
    category: 'E-commerce', type: 'Loja virtual', location: 'Em breve no ar',
    description: 'Loja virtual de semijoias com catálogo por categoria, escolha de banho (dourado, prateado e rosé) e do tamanho do aro, busca com filtros, carrinho com progresso para frete grátis e checkout.',
    url: '', // site ainda sem domínio — o botão fica como "Em breve"
    screenshot: '', embed: false, autoScreenshot: false,
    // Imagens embutidas no próprio arquivo (o site ainda não tem endereço público)
    image: 'assets/img/projetos/nox-bijoux/hero.webp',
    tags: ['Carrinho e checkout', 'Busca e filtros', 'Variações de banho', 'Frete grátis progressivo'],
    theme: { bg: '#050505', fg: '#f4f1ec', accent: '#b89be0', button: '#f4f1ec', buttonText: '#050505', display: 'sans' },
    mock: {
      layout: 'hero', logoTop: 'NOX', logoSub: 'BIJOUX',
      nav: ['Anéis', 'Brincos', 'Colares', 'Pulseiras', 'Novidades'], pill: 'Carrinho',
      kicker: 'Nova coleção · Ametista',
      headline: 'Brilho que combina com o seu estilo.', headlineEm: '',
      text: 'Anéis, brincos, colares e pulseiras com banho dourado, prateado e rosé — para usar todo dia.',
      cta: 'Comprar agora', cta2: 'Explorar produtos',
      aside: ['Banhos', 'Dourado · Prateado · Rosé'],
      sectionTitle: 'Compre por categoria',
      photos: [
        ['Anéis', 'assets/img/projetos/nox-bijoux/aneis.webp'],
        ['Brincos', 'assets/img/projetos/nox-bijoux/brincos.webp'],
        ['Colares', 'assets/img/projetos/nox-bijoux/colares.webp'],
        ['Pulseiras', 'assets/img/projetos/nox-bijoux/pulseiras.webp']
      ]
    }
  },
  {
    id: 1, status: 'real',
    name: 'Aurora Prime Integrativa',
    category: 'Estética', type: 'Site institucional', location: 'Itapevi — SP',
    description: 'Site da clínica de estética integrativa: apresenta tratamentos de laser, bronzeamento e harmonização com fotos e linguagem acolhedora, reforça a confiança com depoimentos e leva o visitante ao agendamento online ou pelo WhatsApp.',
    url: 'https://primeaurora.com.br', screenshot: '', embed: false, autoScreenshot: false,
    image: 'https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?auto=format&fit=crop&w=2000&q=72',
    tags: ['Agendamento online', 'WhatsApp', 'Depoimentos', 'SEO local'],
    theme: { bg: '#f7f3ea', fg: '#3f4630', accent: '#596044', display: 'serif' },
    mock: {
      layout: 'hero', logoTop: 'AURORA PRIME', logoSub: 'INTEGRATIVA',
      nav: ['Início', 'A Clínica', 'Novidades', 'Tratamentos', 'Depoimentos', 'Contato'], pill: 'Agendar',
      kicker: 'Estética • Harmonização • Bem-estar',
      headline: 'Sua melhor versão começa com', headlineEm: 'uma escolha.',
      text: 'A Aurora Prime Integrativa une estética avançada, harmonização e terapias integrativas em um cuidado desenhado para cada pessoa — com tecnologia, técnica e acolhimento.',
      cta: 'Agendar horário online', cta2: 'Conhecer tratamentos',
      aside: ['Onde estamos', 'Centro • Itapevi — SP'],
      sectionTitle: 'Laser, bronze e luz para a sua pele.',
      photos: [
        ['Remoção de tatuagem a laser', 'https://images.unsplash.com/photo-1700760934166-4c766d708139?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Remoção de vasinhos a laser', 'https://images.unsplash.com/photo-1700760933941-3a06a28fbf47?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Bronzeamento artificial', 'https://images.unsplash.com/photo-1654864471383-50ac3ed9b4f6?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Banho de lua', 'https://images.unsplash.com/photo-1771510581541-58a40280d8c7?auto=format&fit=crop&w=760&h=520&q=72']
      ]
    }
  },
  {
    id: 2, status: 'real',
    name: 'Harmonic Head Spa',
    category: 'Spa & Bem-estar', type: 'Site institucional', location: 'Cajamar — SP',
    description: 'Site do primeiro head spa de Cajamar: apresenta os rituais com fotos do próprio espaço, explica cada experiência e leva direto ao agendamento pelo WhatsApp.',
    url: 'https://harmonicheadspa.vercel.app', screenshot: '', embed: false, autoScreenshot: false,
    image: 'https://harmonicheadspa.vercel.app/assets/img/fotos/hero-sala-1536.webp',
    tags: ['Fotos do espaço', 'Agendamento via WhatsApp', 'Perguntas frequentes', 'Depoimentos'],
    theme: { bg: '#f8f4ef', fg: '#2a221d', accent: '#9c6746', button: '#2a221d', buttonText: '#f8f4ef', display: 'serif' },
    mock: {
      layout: 'hero', logoTop: 'HARMONIC HEAD SPA', logoSub: 'MONIQUE ASSIS ESTÉTICA & CO.',
      nav: ['Experiência', 'Tratamentos', 'Sobre', 'FAQ', 'Instagram'], pill: 'Agendar',
      kicker: 'Head Spa Sensorial · Cajamar',
      headline: 'Uma pausa para a mente.', headlineEm: 'Um ritual para os sentidos.',
      text: 'O primeiro e único Head Spa de Cajamar. Um cuidado dedicado ao couro cabeludo, ao relaxamento profundo — e a você.',
      cta: 'Agende sua experiência', cta2: 'Conheça os tratamentos',
      aside: ['Onde estamos', 'Portal dos Ipês · Cajamar — SP'],
      sectionTitle: 'Rituais para cada momento',
      photos: [
        ['Head Spa Sensorial', 'https://harmonicheadspa.vercel.app/assets/img/fotos/hero-head-spa-1600.webp'],
        ['Spa dos Pés Oriental', 'https://harmonicheadspa.vercel.app/assets/img/fotos/real-spa-pes-800.webp'],
        ['Experiência a dois', 'https://harmonicheadspa.vercel.app/assets/img/fotos/ritual-luz-800.webp'],
        ['Vale-presente', 'https://harmonicheadspa.vercel.app/assets/img/fotos/tratamento-vale-presente-800.webp']
      ]
    }
  },
  {
    id: 3, status: 'real',
    name: 'Neide Estética',
    category: 'Estética', type: 'Site institucional', location: 'Osasco — SP',
    description: 'Site para clínica de estética facial e corporal com duas unidades em Osasco: tratamentos explicados com clareza, depoimentos de clientes e agendamento da avaliação pelo WhatsApp.',
    url: 'https://neide-estetica.vercel.app', screenshot: '', embed: false, autoScreenshot: false,
    image: 'https://images.unsplash.com/photo-1695048994291-2e96839a0a3a?auto=format&fit=crop&w=2000&q=80',
    tags: ['Duas unidades', 'Agendamento via WhatsApp', 'Depoimentos', 'SEO local'],
    theme: { bg: '#050505', fg: '#f2ede5', accent: '#d9c3a5', display: 'serif' },
    mock: {
      layout: 'hero', logoTop: 'Neide Estética', logoSub: 'FACIAL & CORPORAL',
      nav: ['Diferenciais', 'Sobre', 'Tratamentos', 'Depoimentos', 'Unidades'], pill: 'Agendar avaliação',
      kicker: 'Duas unidades em Osasco — SP',
      headline: 'Realce o que', headlineEm: 'já é seu.',
      text: 'Harmonização facial e corporal com planejamento individualizado. Sem exageros — apenas equilíbrio, contorno e naturalidade.',
      cta: 'Agendar avaliação', cta2: 'Conhecer tratamentos',
      aside: ['Atendimento com Neide', '@neideestetica'],
      sectionTitle: 'O que podemos avaliar juntas.',
      photos: [
        ['Atendimento com Neide', 'https://neide-estetica.vercel.app/img/neide.jpg'],
        ['Harmonização de glúteo', ''],
        ['Panturrilhas e pernas', ''],
        ['Harmonização corporal', '']
      ]
    }
  },
  {
    id: 4, status: 'real',
    name: 'Dra. Mariana Garrido',
    category: 'Estética', type: 'Site institucional', location: 'Alphaville · Cajamar — SP',
    description: 'Site para clínica de harmonização facial: apresenta tratamentos como full face, botox e bioestimuladores com um visual sofisticado e conduz a paciente ao agendamento da avaliação.',
    url: 'https://marina-garrido.vercel.app', screenshot: '', embed: false, autoScreenshot: false,
    image: 'https://images.unsplash.com/photo-1555820585-c5ae44394b79?auto=format&fit=crop&w=1900&q=76',
    tags: ['Catálogo de tratamentos', 'Agendamento via WhatsApp', 'Depoimentos', 'Três unidades'],
    theme: { bg: '#131210', fg: '#f7f5f2', accent: '#ead8c2', button: '#f7f5f2', buttonText: '#131210', display: 'serif' },
    mock: {
      layout: 'hero', logoTop: 'Dra. Mariana Garrido', logoSub: 'ESTÉTICA AVANÇADA',
      nav: ['Início', 'Clínica', 'Tratamentos', 'Diferenciais', 'Depoimentos', 'Unidades'], pill: 'Agendar avaliação',
      kicker: 'Cajamar · São Paulo',
      headline: 'Sua melhor versão,', headlineEm: 'com naturalidade.',
      text: 'Harmonização facial full face, botox e bioestimuladores conduzidos com avaliação criteriosa e planejamento individual. O desenho parte do seu rosto — não de um padrão.',
      cta: 'Agendar avaliação', cta2: 'Conhecer tratamentos',
      aside: ['Unidades', 'Alphaville · Cajamar · São Paulo'],
      sectionTitle: 'Tratamentos pensados para você.',
      photos: [
        ['Harmonização Facial Full Face', 'https://images.unsplash.com/photo-1713085085470-fba013d67e65?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Botox', 'https://images.unsplash.com/photo-1731514771613-991a02407132?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Preenchimento Labial', 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Bioestimuladores de Colágeno', 'https://images.unsplash.com/photo-1719515461643-5ff345c1c143?auto=format&fit=crop&w=760&h=520&q=72']
      ]
    }
  },
  {
    id: 5, status: 'real',
    name: "Joana D'arc Massoterapia",
    category: 'Spa & Bem-estar', type: 'Site institucional', location: 'Itapevi — SP',
    description: 'Site para massoterapeuta com espaço em Itapevi e atendimento em domicílio: apresenta as massagens, as duas formas de atendimento e facilita o agendamento pelo WhatsApp.',
    url: 'https://joana-darc-massoterapia.vercel.app', screenshot: '', embed: false, autoScreenshot: false,
    image: 'https://i.pinimg.com/1200x/01/a7/4c/01a74cbd2c55195b0e7ea4a9f033bf02.jpg',
    tags: ['Atendimento em domicílio', 'Agendamento via WhatsApp', 'Depoimentos', 'SEO local'],
    theme: { bg: '#171411', fg: '#f2e8d8', accent: '#b7956a', button: '#f2e8d8', buttonText: '#171411', display: 'serif' },
    mock: {
      layout: 'hero', logoTop: "JOANA D'ARC", logoSub: 'MASSOTERAPIA',
      nav: ['Início', 'Massagens', 'Onde atendemos', 'Sobre', 'Experiência', 'Contato'], pill: 'Agendar atendimento',
      kicker: 'Espaço de atendimento em Itapevi – SP',
      headline: 'Seu corpo também precisa de uma', headlineEm: 'pausa.',
      text: 'Massoterapia profissional em Itapevi e atendimento em domicílio em até 35 km. Alguns momentos do seu dia em cuidado, presença e bem-estar.',
      cta: 'Agendar atendimento', cta2: 'Conhecer massagens',
      aside: ['Atendimento', 'Espaço em Itapevi • Domicílio até 35 km'],
      sectionTitle: 'Massagens em Itapevi',
      photos: [
        ['Relaxamento', 'https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Terapias corporais', 'https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Técnicas especiais', 'https://images.unsplash.com/photo-1696841212541-449ca29397cc?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Todas as modalidades', 'https://images.unsplash.com/photo-1728497872660-cc6b16238c3a?auto=format&fit=crop&w=760&h=520&q=72']
      ]
    }
  },
  {
    id: 6, status: 'real',
    name: 'Loja da Mary',
    category: 'Moda & Varejo', type: 'Catálogo online', location: 'Barueri — SP',
    description: 'Site para brechó em Barueri: vitrine com os achados da semana, categorias para navegar pelas peças e contato direto com a dona pelo WhatsApp para pedir mais fotos.',
    url: 'https://lojadamary.com.br', screenshot: '', embed: false, autoScreenshot: false,
    image: 'https://images.unsplash.com/photo-1637228393246-c38a4b3d2011?auto=format&fit=crop&q=80&w=2000',
    tags: ['Vitrine de peças', 'Categorias', 'WhatsApp', 'Localização'],
    theme: { bg: '#fdfaf6', fg: '#2e211a', accent: '#6d3f27', button: '#25d366', buttonText: '#ffffff', display: 'serif', heroDark: true },
    mock: {
      layout: 'hero', logoTop: 'Loja da Mary', logoSub: '',
      nav: ['Peças', 'Sobre o brechó', 'Dentro da loja', 'Localização', 'Contato'], pill: 'Chamar a Marlene',
      kicker: 'Brechó com amor',
      headline: 'Encontre a peça que combina com você', headlineEm: '',
      text: 'Brechó com peças selecionadas, estilo e preços especiais. Encontre aquela peça que combina com você e fale diretamente com a Marlene pelo WhatsApp.',
      cta: 'Chamar a Marlene', cta2: 'Ver as peças',
      aside: ['Loja física', 'Barueri — SP'],
      sectionTitle: 'Por onde você quer começar?',
      photos: [
        ['Vestidos', 'https://images.unsplash.com/photo-1596420230907-44972814e394?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Jaquetas e casacos', 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Camisetas e tricôs', 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?auto=format&fit=crop&w=760&h=520&q=72'],
        ['Calçados', 'https://images.unsplash.com/photo-1622760806364-5ccac8096b59?auto=format&fit=crop&w=760&h=520&q=72']
      ]
    }
  },
  {
    id: 7, status: 'real',
    name: 'Podologia Roseli Rosendo',
    category: 'Saúde', type: 'Site institucional', location: 'Franca — SP',
    description: 'Site da clínica de podologia em Franca: organiza os tratamentos — de unha encravada a pé diabético — em páginas próprias para aparecer no Google, com contato direto pelo WhatsApp.',
    url: 'https://podologiaroselirosendo.com.br', screenshot: '', embed: false, autoScreenshot: false,
    image: 'https://solutudo-cdn-proxy.soluall.net/prod/adv_ads/65560a94-27e8-4308-9795-6683ac1e0fec/696f9801-0660-4db6-aa94-1bd3ac1e09ff.png',
    tags: ['Páginas por tratamento', 'SEO local', 'WhatsApp', 'Publicações'],
    theme: { bg: '#ffffff', fg: '#151515', accent: '#0e7a43', button: '#0e7a43', buttonText: '#ffffff', display: 'sans' },
    mock: {
      layout: 'hero', logoTop: 'Clínica Podológica', logoSub: 'ROSELI ROSENDO',
      nav: ['Início', 'Sobre nós', 'Serviços', 'Publicações', 'Contato'], pill: 'Atendimento',
      kicker: 'Podologia · Franca — SP',
      headline: 'Clínica de Podologia Roseli Rosendo', headlineEm: '',
      text: 'Excelência em podologia, terapias integrativas e atenção humanizada. Especialização em Pés Diabéticos.',
      cta: 'Entre em contato', cta2: 'Saiba mais',
      aside: ['Onde estamos', 'Vila N. S. de Fátima · Franca — SP'],
      sectionTitle: 'Tratamentos',
      photos: [
        ['Unhas encravadas', 'https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/69789f2f-8a70-4864-ac9a-6e4eac1e09ff/69789f2f-8aa8-469e-bf66-6e4eac1e09ff.png'],
        ['Feridas diabéticas', 'https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/655cf80c-c760-4b24-94b5-3275ac1e09ff/655cf80c-2950-4c86-8891-3275ac1e09ff.png'],
        ['Onicomicose', 'https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/655cfa0f-94a0-45fc-9ac6-0bb1ac1e0fec/655cfa0f-9f24-468a-9417-0bb1ac1e0fec.jpg'],
        ['Pé diabético', 'https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/69808eff-8b2c-4ef3-be9d-6801ac1e09ff/69808eff-30cc-433d-a08c-6801ac1e09ff.png']
      ]
    }
  }
];

const services = [
  ['Sites institucionais', 'A presença completa da sua empresa: quem vocês são, o que fazem e como entrar em contato.'],
  ['Landing Pages', 'Uma página focada em um serviço ou campanha, feita para levar o visitante a uma única ação.'],
  ['E-commerce', 'Lojas virtuais com vitrine organizada, páginas de produto claras e compra descomplicada.'],
  ['Sites para negócios locais', 'Clínicas, restaurantes, salões e escritórios encontrados por quem está perto.'],
  ['Páginas de vendas', 'Estrutura e texto pensados para apresentar uma oferta com clareza e convencer sem exageros.'],
  ['Projetos personalizados', 'Precisa de algo diferente? Conversamos e desenhamos uma solução para o seu caso.']
];
const reasons = [
  ['Ser encontrado no Google', 'Quem procura pelo seu serviço na sua região tem mais chance de chegar até você.'],
  ['Fácil de compartilhar', 'Um único link para enviar a clientes, colocar na bio e no cartão de visita.'],
  ['Informações em um só lugar', 'Serviços, horários, endereço e contato organizados e sempre à mão.'],
  ['Apresentação profissional', 'Seus serviços explicados do jeito certo, com o visual que o seu negócio merece.'],
  ['Contato direto pelo WhatsApp', 'Do interesse à conversa em um toque, sem etapas desnecessárias.'],
  ['Mais credibilidade', 'Um site bem feito ajuda a transmitir seriedade antes mesmo do primeiro contato.'],
  ['Disponível 24 horas', 'Seu negócio continua se apresentando mesmo quando você não está atendendo.']
];
