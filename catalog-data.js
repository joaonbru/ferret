// Dados do catálogo Ferret Cutelaria 2026 — extraídos do catálogo oficial em PDF.
const CATALOG = [
  {
    id: "florao10",
    sub: "Linha Clássica · 10 polegadas",
    title: "Florão 10\"",
    intro: "Inspirada nas facas gaúchas de sangria, a Florão 10\" possui lâmina de 10 polegadas (25 cm) em aço carbono 1070, com 3 mm de espessura, dorso mosqueado, cabo oitavado em madeira nobre e a icônica Flor de Lis trabalhada no ricasso.",
    images: ["page-02.jpg", "page-04.jpg", "page-06.jpg", "page-07.jpg"],
    products: [
      { name: "Florão 10\"", variant: "Madeira", price: "R$ 239,90", ref: "Ref. 110" },
      { name: "Florão 10\"", variant: "Híbrido", price: "R$ 264,90", ref: "Ref. 112 a 115" },
      { name: "Florão 10\" com Estojo", variant: "Estojo em madeira + certificado", price: "R$ 299,90", ref: "Ref. 114 + 9999" },
      { name: "Estojo avulso", variant: "Para facas de 7\" a 10\"", price: "R$ 60,00", ref: "Ref. 9999 / 9997" },
      { name: "Florão 10\" Híbrida Dourada", variant: "Acabamento fosfatizado — sob consulta", price: "R$ 314,90", ref: "Ref. 905" },
      { name: "Florão 10\" Farroupilha", variant: "Linha fosfatizada", price: "R$ 389,90", ref: "Ref. 909" },
      { name: "Florão 10\" Osso", variant: "Linha fosfatizada", price: "R$ 314,90", ref: "Ref. 901" },
      { name: "Florão 10\" Híbrido", variant: "Linha fosfatizada", price: "R$ 314,90", ref: "Ref. 902 a 905" },
      { name: "Florão 10\" Madeira", variant: "Linha fosfatizada", price: "R$ 289,90", ref: "Ref. 900" }
    ]
  },
  {
    id: "tropeiro",
    sub: "Faca + chaira em conjunto",
    title: "Kit Tropeiro 10\"",
    intro: "Conjunto da faca Florão 10\" com chaira profissional 10\", bainha especial para as duas peças e empunhadura em madeira nobre ou híbrida.",
    images: ["page-03.jpg"],
    products: [
      { name: "Kit Tropeiro 10\"", variant: "Madeira", price: "R$ 369,90", ref: "Ref. 310" },
      { name: "Kit Tropeiro 10\"", variant: "Híbrido", price: "R$ 419,90", ref: "Ref. 312 a 315" }
    ]
  },
  {
    id: "assador",
    sub: "Faca + chaira + garfo, com caixa expositora",
    title: "Kit Assador",
    intro: "O conjunto completo para churrasqueiros: faca Florão de 10 polegadas, chaira, garfo do churrasqueiro, bainha de couro de búfalo costurada à mão, caixa expositora para as três peças e certificado de autenticidade.",
    images: ["page-05.jpg"],
    products: [
      { name: "Kit Assador", variant: "Híbrido", price: "R$ 624,90", ref: "Ref. 302 a 305" },
      { name: "Kit Assador", variant: "Madeira", price: "R$ 549,90", ref: "Ref. 300" }
    ]
  },
  {
    id: "churrasco",
    sub: "Simplicidade e funcionalidade",
    title: "Churrasco",
    intro: "Confeccionada em aço carbono 1070, a linha Churrasco oferece lâminas de 9 ou 8 polegadas com 3 mm de espessura, construção full tang com pinos de latão e cabo em osso ou madeira nobre. Acompanha bainha de couro legítimo.",
    images: ["page-08.jpg"],
    products: [
      { name: "Churrasco 9\"", variant: "Madeira", price: "R$ 214,90", ref: "Ref. 150" },
      { name: "Churrasco 9\"", variant: "Osso", price: "R$ 224,90", ref: "Ref. 151" },
      { name: "Churrasco 8\"", variant: "Madeira", price: "R$ 179,90", ref: "Ref. 160" },
      { name: "Churrasco 8\"", variant: "Chifre", price: "R$ 189,90", ref: "Ref. 161" }
    ]
  },
  {
    id: "florao8",
    sub: "Versão compacta da Florão",
    title: "Florão 8\"",
    intro: "Versão de 8\" da faca Florão, com ponta menos agressiva e desenho ideal para o churrasco. Lâmina em aço carbono 1070 com 3 mm de espessura e dorso mosqueado à mão, cabo oitavado com a Flor de Lis no ricasso.",
    images: ["page-09.jpg", "page-10.jpg", "page-13.jpg"],
    products: [
      { name: "Florão 8\"", variant: "Madeira", price: "R$ 199,90", ref: "Ref. 230" },
      { name: "Florão 8\"", variant: "Híbrida", price: "R$ 224,90", ref: "Ref. 232 a 235" },
      { name: "Florão 8\"", variant: "Linha fosfatizada", price: "R$ 269,90", ref: "Ref. 920" }
    ]
  },
  {
    id: "rabodegalo",
    sub: "Detalhe em pena de cauda de galo",
    title: "Rabo de Galo",
    intro: "Lâmina de 8 polegadas e 3 mm de espessura em aço carbono 1070, construção full tang com 3 pinos ornamentados. Cabo híbrido ou em madeira nobre, com o distintivo detalhe em forma de penas e a Flor de Lis no ricasso.",
    images: ["page-11.jpg", "page-12.jpg", "page-13.jpg"],
    products: [
      { name: "Rabo de Galo", variant: "Madeira", price: "R$ 219,90", ref: "Ref. 240" },
      { name: "Rabo de Galo", variant: "Osso", price: "R$ 229,90", ref: "Ref. 241" },
      { name: "Rabo de Galo", variant: "Híbrida", price: "R$ 244,90", ref: "Ref. 242 a 245" },
      { name: "Rabo de Galo", variant: "Linha fosfatizada", price: "R$ 294,90", ref: "Ref. 921" }
    ]
  },
  {
    id: "tesoura",
    sub: "Tradição da tosquia gaúcha",
    title: "Tesoura de Tosquia & Rio Grande",
    intro: "Inspiradas no design das tesouras de tosquia, com 7 ½ polegadas e 2 mm de espessura e construção de espiga interna. A Rio Grande é uma picanheira com 10\" e 3 mm, dorso mosqueado à mão e nó espanhol no ricasso.",
    images: ["page-14.jpg"],
    products: [
      { name: "Tesoura", variant: "Madeira", price: "R$ 179,90", ref: "Ref. 170" },
      { name: "Tesoura", variant: "Mesclado (osso, madeira e bronze)", price: "R$ 189,90", ref: "Ref. 171" },
      { name: "Rio Grande", variant: "Faca picanheira 10\"", price: "R$ 239,90", ref: "Ref. 280" }
    ]
  },
  {
    id: "campeira",
    sub: "Robustez para o trabalho de campo",
    title: "Campeira",
    intro: "Facas robustas e pesadas para o trabalho de campo — e também para o churrasco. Aço carbono 1070 com 4,5 mm de espessura, nas variações 9\" e 11\", dorso mosqueado à mão e 6 pinos de latão na empunhadura.",
    images: ["page-15.jpg"],
    products: [
      { name: "Campeira 11\"", variant: "Madeira", price: "R$ 269,90", ref: "Ref. 210" },
      { name: "Campeira 11\"", variant: "Osso", price: "R$ 279,90", ref: "Ref. 211" },
      { name: "Campeira 9\"", variant: "Madeira", price: "R$ 239,90", ref: "Ref. 270" },
      { name: "Campeira 9\"", variant: "Osso", price: "R$ 249,90", ref: "Ref. 271" }
    ]
  },
  {
    id: "campeiralarga",
    sub: "Folha larga e faca de esfola",
    title: "Campeira Folha Larga & Coureadeira",
    intro: "A Folha Larga tem mais peso e robustez, ideal como facão em tamanho compacto (9\", 4,5 mm). Já a Coureadeira foi desenhada para a remoção de couro, com 5\" de lâmina, 4,5 mm de espessura e gancho de esfolar. Ambas em aço carbono 1070, cabo full tang em osso ou madeira nobre.",
    images: ["page-16.jpg"],
    products: [
      { name: "Campeira Folha Larga 9\"", variant: "Madeira", price: "R$ 269,90", ref: "Ref. 220" },
      { name: "Campeira Folha Larga 9\"", variant: "Osso", price: "R$ 274,90", ref: "Ref. 221" },
      { name: "Coureadeira", variant: "Madeira", price: "R$ 199,90", ref: "Ref. 200" },
      { name: "Coureadeira", variant: "Osso", price: "R$ 209,90", ref: "Ref. 201" }
    ]
  },
  {
    id: "chimango",
    sub: "Sangradeira para caça e campo",
    title: "Língua de Chimango",
    intro: "Facas sangradeiras robustas, com fio reforçado e ponta muito aguda, ideais para a caça e o trabalho de campo. Dorso mosqueado e guarda para proteção da mão, em aço carbono 1070 com 4,5 mm de espessura.",
    images: ["page-17.jpg"],
    products: [
      { name: "Língua de Chimango 10\"", variant: "Madeira", price: "R$ 259,90", ref: "Ref. 250" },
      { name: "Língua de Chimango 10\"", variant: "Osso", price: "R$ 269,90", ref: "Ref. 251" },
      { name: "Língua de Chimango 12\"", variant: "Madeira", price: "R$ 289,90", ref: "Ref. 260" },
      { name: "Língua de Chimango 12\"", variant: "Osso", price: "R$ 299,90", ref: "Ref. 261" }
    ]
  },
  {
    id: "inox",
    sub: "Punhal e faca de churrasco em inox",
    title: "Linha Inoxidável",
    intro: "O Punhal foi inspirado nos antigos punhais de cabo torneado: lâmina de aço inoxidável 420 com 8\" e 2 mm de espessura, acabamento dourado envelhecido. A Churrasco Inox tem 8,5\" e cabo anatômico artesanal em madeira nobre. Ambas com bainha de couro legítimo.",
    images: ["page-18.jpg"],
    products: [
      { name: "Punhal", variant: "Roxinho", price: "R$ 189,90", ref: "Ref. 180" },
      { name: "Punhal", variant: "Cumaru", price: "R$ 189,90", ref: "Ref. 181" },
      { name: "Punhal", variant: "Louro", price: "R$ 189,90", ref: "Ref. 182" },
      { name: "Churrasco Inox", variant: "Madeira nobre", price: "R$ 189,90", ref: "Ref. 190" }
    ]
  },
  {
    id: "sobrevivencia",
    sub: "Camping, trekking e sobrevivência",
    title: "Sobrevivência",
    intro: "Confeccionada em aço carbono 6160, com lâmina de 5,5 polegadas e 3,8 mm de espessura. Cabo revestido com 3 metros de Paracord 550, quebra-crânio, acabamento stonewash e bainha de couro legítimo.",
    images: ["page-19.jpg", "page-20.jpg"],
    products: [
      { name: "Sobrevivência", variant: "Paracord preto", price: "R$ 199,90", ref: "Ref. 140" },
      { name: "Sobrevivência", variant: "Paracord verde", price: "R$ 199,90", ref: "Ref. 141" },
      { name: "Sobrevivência", variant: "Paracord camuflado", price: "R$ 199,90", ref: "Ref. 142" }
    ]
  },
  {
    id: "chaira",
    sub: "Afiação profissional",
    title: "Chaira",
    intro: "Chaira estriada profissional, com haste de 10 polegadas e 10 mm de diâmetro. Versões com cabo em madeira nobre ou híbrido de madeira e resina epóxi perolizada, com guarda de aço inox para proteção da mão.",
    images: ["page-21.jpg"],
    products: [
      { name: "Chaira", variant: "Madeira", price: "R$ 129,90", ref: "Ref. 120 / 121" },
      { name: "Chaira", variant: "Híbrida", price: "R$ 154,90", ref: "Ref. 122 a 125" }
    ]
  },
  {
    id: "garfo",
    sub: "Acessório indispensável do churrasco",
    title: "Garfo do Churrasqueiro",
    intro: "Feito em aço carbono 1070, com haste de 8 polegadas, 3 mm de espessura e cabo híbrido de madeira nobre e resina epóxi perolizada — resistência e precisão para manusear a carne no fogo.",
    images: ["page-22.jpg"],
    products: [
      { name: "Garfo", variant: "Madeira", price: "R$ 104,90", ref: "Ref. 130" },
      { name: "Garfo", variant: "Híbrido", price: "R$ 134,90", ref: "Ref. 132 a 135" }
    ]
  }
];
