
/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'bd3_atv3';

// The current database to use.
use(database);

db["bd3_atv3_produtos"].insertMany(

        [
            {
              "nome": "Shampoo Reconstrutor Elseve Reparação Total 5",
              "valor": 18.99,
              "quantidade_estoque": 50,
              "fabricante": "L'Oréal Paris",
              "categoria": "Cabelos",
              "descricao": "Shampoo nutritivo para cabelos danificados que repara desde o primeiro uso."
            },
            {
              "nome": "Condicionador Pantene Hidro-Cauterização",
              "valor": 21.90,
              "quantidade_estoque": 45,
              "fabricante": "Pantene",
              "categoria": "Cabelos",
              "descricao": "Condicionador com Pro-Vitaminas que fortalece e sela as cutículas dos fios."
            },
            {
              "nome": "Máscara Capilar Novex Óleo de Coco",
              "valor": 29.99,
              "quantidade_estoque": 38,
              "fabricante": "Embelleze",
              "categoria": "Cabelos",
              "descricao": "Tratamento intensivo para hidratação profunda com óleo de coco 100% vegetal."
            },
            {
              "nome": "Creme de Pentear Seda Boom Definição",
              "valor": 14.50,
              "quantidade_estoque": 60,
              "fabricante": "Seda",
              "categoria": "Cabelos",
              "descricao": "Finalizador para cabelos cacheados, que proporciona definição e controle do frizz."
            },
            {
              "nome": "Spray Térmico CHI 44 Iron Guard",
              "valor": 89.00,
              "quantidade_estoque": 20,
              "fabricante": "CHI",
              "categoria": "Cabelos",
              "descricao": "Protetor térmico profissional que protege os fios contra danos do calor."
            },
            {
              "nome": "Óleo Capilar Moroccanoil Treatment",
              "valor": 189.90,
              "quantidade_estoque": 15,
              "fabricante": "Moroccanoil",
              "categoria": "Cabelos",
              "descricao": "Óleo nutritivo com óleo de argan que melhora a elasticidade e o brilho do cabelo."
            },
            {
              "nome": "Leave-In Truss Miracle",
              "valor": 115.00,
              "quantidade_estoque": 22,
              "fabricante": "Truss",
              "categoria": "Cabelos",
              "descricao": "Leave-in multifuncional com ação antifrizz, proteção térmica e reconstrução imediata."
            },
            {
              "nome": "Shampoo Antiqueda Vichy Dercos Energizante",
              "valor": 89.90,
              "quantidade_estoque": 18,
              "fabricante": "Vichy",
              "categoria": "Cabelos",
              "descricao": "Shampoo dermatológico com Aminexil que combate a queda e fortalece os fios."
            },
            {
              "nome": "Gel Fixador Capicilin Controle Extremo",
              "valor": 12.90,
              "quantidade_estoque": 35,
              "fabricante": "Capicilin",
              "categoria": "Cabelos",
              "descricao": "Gel fixador com efeito duradouro e fórmula sem álcool que não resseca os fios."
            },
            {
              "nome": "Tônico Capilar Bio Extratus Antiqueda Jaborandi",
              "valor": 32.00,
              "quantidade_estoque": 28,
              "fabricante": "Bio Extratus",
              "categoria": "Cabelos",
              "descricao": "Tônico natural com extrato de jaborandi que ativa a circulação e fortalece a raiz."
            },
            {
              "nome": "Máscara Lola Cosmetics Morte Súbita",
              "valor": 39.90,
              "quantidade_estoque": 27,
              "fabricante": "Lola Cosmetics",
              "categoria": "Cabelos",
              "descricao": "Máscara hidratante de ação imediata para cabelos secos e danificados."
            },
            {
              "nome": "Shampoo Head & Shoulders Anticaspa Menthol",
              "valor": 17.90,
              "quantidade_estoque": 50,
              "fabricante": "P&G",
              "categoria": "Cabelos",
              "descricao": "Shampoo refrescante com menthol e ação contra a caspa desde o primeiro uso."
            },
            {
              "nome": "Ampola Pantene Bambu Nutre & Cresce",
              "valor": 10.99,
              "quantidade_estoque": 80,
              "fabricante": "Pantene",
              "categoria": "Cabelos",
              "descricao": "Ampola capilar de tratamento intensivo que fortalece os fios da raiz às pontas."
            },
            {
              "nome": "Creme Térmico Eico Liso Mágico",
              "valor": 25.00,
              "quantidade_estoque": 36,
              "fabricante": "Eico",
              "categoria": "Cabelos",
              "descricao": "Leave-in com proteção térmica e efeito liso instantâneo sem química."
            },
            {
              "nome": "Shampoo Vegano Inoar Argan Oil",
              "valor": 39.90,
              "quantidade_estoque": 30,
              "fabricante": "Inoar",
              "categoria": "Cabelos",
              "descricao": "Shampoo nutritivo vegano com óleo de argan, sem sulfatos ou parabenos."
            },
            {
              "nome": "Condicionador Aussie Moist",
              "valor": 27.90,
              "quantidade_estoque": 42,
              "fabricante": "Aussie",
              "categoria": "Cabelos",
              "descricao": "Condicionador com fórmula hidratante intensa para cabelos secos e sem vida."
            },
            {
              "nome": "Kit Cresce Pelo Boé Shampoo + Condicionador",
              "valor": 65.00,
              "quantidade_estoque": 25,
              "fabricante": "Boé",
              "categoria": "Cabelos",
              "descricao": "Tratamento fitoterápico que auxilia no crescimento saudável dos fios."
            },
            {
              "nome": "Spray Texturizador Surf Hair",
              "valor": 22.90,
              "quantidade_estoque": 29,
              "fabricante": "Aspa",
              "categoria": "Cabelos",
              "descricao": "Spray que proporciona textura e efeito praiano aos cabelos, com fixação leve."
            },
            {
              "nome": "Máscara Skala Divino Potão",
              "valor": 10.50,
              "quantidade_estoque": 55,
              "fabricante": "Skala",
              "categoria": "Cabelos",
              "descricao": "Creme 2 em 1 que pode ser usado como máscara ou creme de pentear, ideal para cabelos cacheados."
            },
            {
              "nome": "Óleo de Rícino Salon Line #TodeCacho",
              "valor": 14.99,
              "quantidade_estoque": 40,
              "fabricante": "Salon Line",
              "categoria": "Cabelos",
              "descricao": "Óleo 100% vegetal para nutrição e fortalecimento dos fios crespos e cacheados."
            },
            {
              "nome": "Shampoo Matizador Blond Me Schwarzkopf",
              "valor": 89.90,
              "quantidade_estoque": 12,
              "fabricante": "Schwarzkopf",
              "categoria": "Cabelos",
              "descricao": "Shampoo roxo profissional para neutralizar tons amarelados em cabelos loiros."
            },
            {
              "nome": "Tônico de Alho Gota Dourada",
              "valor": 9.90,
              "quantidade_estoque": 60,
              "fabricante": "Gota Dourada",
              "categoria": "Cabelos",
              "descricao": "Tônico fortalecedor com extrato de alho para auxiliar no crescimento capilar."
            },
            {
              "nome": "Spray Fixador Karina Forte",
              "valor": 19.90,
              "quantidade_estoque": 35,
              "fabricante": "Karina",
              "categoria": "Cabelos",
              "descricao": "Spray fixador com jato seco e fixação de longa duração, sem deixar resíduos."
            },
            {
              "nome": "Shampoo Johnson's Baby",
              "valor": 13.90,
              "quantidade_estoque": 40,
              "fabricante": "Johnson & Johnson",
              "categoria": "Cabelos",
              "descricao": "Shampoo suave para uso diário, testado por dermatologistas e oftalmologistas."
            },
            {
              "nome": "Condicionador Dove Ritual de Crescimento",
              "valor": 18.90,
              "quantidade_estoque": 34,
              "fabricante": "Dove",
              "categoria": "Cabelos",
              "descricao": "Condicionador enriquecido com cafeína e óleo de rícino que fortalece os fios."
            },
            {
              "nome": "Máscara Capilar Haskell Cavalo Forte",
              "valor": 49.90,
              "quantidade_estoque": 18,
              "fabricante": "Haskell",
              "categoria": "Cabelos",
              "descricao": "Máscara fortalecedora que auxilia no crescimento, força e brilho dos cabelos."
            }
            [
                {
                  "nome": "Creme para Pentear Elseve Longo dos Sonhos",
                  "valor": 19.90,
                  "quantidade_estoque": 40,
                  "fabricante": "L'Oréal Paris",
                  "categoria": "Cabelos",
                  "descricao": "Creme com queratina vegetal para reparar danos e evitar cortes frequentes."
                },
                {
                  "nome": "Óleo de Coco Copra Extra Virgem",
                  "valor": 24.90,
                  "quantidade_estoque": 33,
                  "fabricante": "Copra",
                  "categoria": "Cabelos",
                  "descricao": "Óleo 100% natural ideal para umectação e nutrição profunda dos cabelos."
                },
                {
                  "nome": "Kit Lola Curly Wurly Shampoo + Condicionador",
                  "valor": 79.90,
                  "quantidade_estoque": 16,
                  "fabricante": "Lola Cosmetics",
                  "categoria": "Cabelos",
                  "descricao": "Kit hidratante especialmente formulado para cabelos cacheados e crespos."
                },
                {
                  "nome": "Shampoo Seco Batiste Fresh",
                  "valor": 29.90,
                  "quantidade_estoque": 24,
                  "fabricante": "Batiste",
                  "categoria": "Cabelos",
                  "descricao": "Shampoo seco com fragrância refrescante para revitalizar os fios instantaneamente."
                },
                {
                  "nome": "Máscara de Hidratação Tresemmé Hidrata",
                  "valor": 22.90,
                  "quantidade_estoque": 37,
                  "fabricante": "Unilever",
                  "categoria": "Cabelos",
                  "descricao": "Máscara para hidratação diária com aloe vera e pantenol."
                },
                {
                  "nome": "Pomada Modeladora Go. Hair Black Fix",
                  "valor": 17.99,
                  "quantidade_estoque": 21,
                  "fabricante": "Go. Hair",
                  "categoria": "Cabelos",
                  "descricao": "Pomada capilar preta que ajuda a disfarçar os fios brancos e modelar o penteado."
                },
                {
                  "nome": "Shampoo Bio Extratus Pós-Coloração",
                  "valor": 31.90,
                  "quantidade_estoque": 26,
                  "fabricante": "Bio Extratus",
                  "categoria": "Cabelos",
                  "descricao": "Shampoo suave que prolonga a cor e trata os fios quimicamente coloridos."
                },
                {
                  "nome": "Finalizador Kérastase Elixir Ultime",
                  "valor": 229.90,
                  "quantidade_estoque": 10,
                  "fabricante": "Kérastase",
                  "categoria": "Cabelos",
                  "descricao": "Óleo luxuoso com múltiplos benefícios para brilho, maciez e proteção térmica."
                },
                {
                  "nome": "Shampoo Infantil Granado Tradicional",
                  "valor": 14.90,
                  "quantidade_estoque": 50,
                  "fabricante": "Granado",
                  "categoria": "Cabelos",
                  "descricao": "Shampoo dermatologicamente testado, ideal para uso diário em crianças."
                },
                {
                  "nome": "Máscara Forever Liss Banho de Verniz",
                  "valor": 42.90,
                  "quantidade_estoque": 19,
                  "fabricante": "Forever Liss",
                  "categoria": "Cabelos",
                  "descricao": "Máscara que promove brilho intenso e hidratação profunda nos cabelos opacos."
                },
                {
                  "nome": "Spray Umidificador Salon Line #TodeCacho Day After",
                  "valor": 18.90,
                  "quantidade_estoque": 32,
                  "fabricante": "Salon Line",
                  "categoria": "Cabelos",
                  "descricao": "Spray revitalizante para o day after dos cachos, com óleo de abacate e D-Pantenol."
                },
                {
                  "nome": "Máscara Matizadora Bio Extratus Blond",
                  "valor": 49.00,
                  "quantidade_estoque": 14,
                  "fabricante": "Bio Extratus",
                  "categoria": "Cabelos",
                  "descricao": "Máscara com pigmento violeta que neutraliza os tons amarelados em cabelos loiros."
                },
                {
                  "nome": "Tônico Capilar Tricofort Antiqueda",
                  "valor": 13.99,
                  "quantidade_estoque": 38,
                  "fabricante": "Tricofort",
                  "categoria": "Cabelos",
                  "descricao": "Loção tônica que auxilia no combate à queda de cabelo e estimula o crescimento."
                },
                {
                  "nome": "Ampola Reparadora Elseve Nutrição",
                  "valor": 9.99,
                  "quantidade_estoque": 60,
                  "fabricante": "L'Oréal Paris",
                  "categoria": "Cabelos",
                  "descricao": "Tratamento concentrado para nutrição profunda dos fios em 1 minuto."
                },
                {
                  "nome": "Shampoo Silver Joico Color Endure",
                  "valor": 120.00,
                  "quantidade_estoque": 11,
                  "fabricante": "Joico",
                  "categoria": "Cabelos",
                  "descricao": "Shampoo profissional para cabelos loiros, grisalhos ou descoloridos."
                },
                {
                  "nome": "Kit Wella Invigo Nutri-Enrich",
                  "valor": 179.90,
                  "quantidade_estoque": 17,
                  "fabricante": "Wella",
                  "categoria": "Cabelos",
                  "descricao": "Kit de shampoo e máscara para nutrição intensa com goji berry e vitamina E."
                },
                {
                  "nome": "Óleo Finalizador Liso com Força Skala",
                  "valor": 11.90,
                  "quantidade_estoque": 40,
                  "fabricante": "Skala",
                  "categoria": "Cabelos",
                  "descricao": "Óleo finalizador com vitamina E e óleo de rícino que fortalece os fios alisados."
                },
                {
                  "nome": "Máscara Capilar MeAliza Power",
                  "valor": 29.90,
                  "quantidade_estoque": 30,
                  "fabricante": "MeAliza",
                  "categoria": "Cabelos",
                  "descricao": "Tratamento intensivo que proporciona efeito liso progressivo sem química."
                },
                {
                  "nome": "Protetor Térmico Niely Gold Queratina",
                  "valor": 16.90,
                  "quantidade_estoque": 37,
                  "fabricante": "Niely",
                  "categoria": "Capilar",
                  "descricao": "Protetor térmico com queratina para uso com secador e prancha, sem enxágue."
                },
                {
                  "nome": "Condicionador Botica Camomila Bio Extratus",
                  "valor": 28.00,
                  "quantidade_estoque": 26,
                  "fabricante": "Bio Extratus",
                  "categoria": "Lavagem",
                  "descricao": "Condicionador iluminador para cabelos claros, com extrato de camomila."
                },
                {
                  "nome": "Máscara Hidratação Intensa L'Oréal Absolut Repair",
                  "valor": 149.90,
                  "quantidade_estoque": 13,
                  "fabricante": "L'Oréal Professionnel",
                  "categoria": "Máscara",
                  "descricao": "Máscara profissional que repara profundamente cabelos muito danificados."
                },
                {
                  "nome": "Ativador de Cachos Griffus Amo Cachos",
                  "valor": 19.50,
                  "quantidade_estoque": 48,
                  "fabricante": "Griffus",
                  "categoria": "Cabelos",
                  "descricao": "Ativador leve com óleo de abacate e colágeno vegetal para definir os cachos."
                },
                {
                  "nome": "Shampoo Detox Tresemmé",
                  "valor": 22.00,
                  "quantidade_estoque": 43,
                  "fabricante": "Unilever",
                  "categoria": "Cabelos",
                  "descricao": "Shampoo com chá verde, gengibre e proteína do trigo para limpeza profunda dos fios."
                },
                {
                  "nome": "Gelatina Salon Line Vai Ter Volume Sim!",
                  "valor": 17.50,
                  "quantidade_estoque": 36,
                  "fabricante": "Salon Line",
                  "categoria": "Cabelos",
                  "descricao": "Gelatina capilar que ativa e fixa os cachos com muito volume e sem ressecar."
                },
                {
                  "nome": "Leave-in L'Oréal Cicatri Renov",
                  "valor": 27.90,
                  "quantidade_estoque": 31,
                  "fabricante": "L'Oréal Paris",
                  "categoria": "Cabelos",
                  "descricao": "Tratamento leave-in que oferece 10 benefícios instantâneos aos fios."
                }
              ]
              
          ]
           
    
)
