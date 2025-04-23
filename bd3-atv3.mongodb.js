// Seleciona e cria o banco de dados
use('bd3_atv3');

// Cria a coleção
db.createCollection('bd3_atv3_produtos');

// Insere os produtos
db['bd3_atv3_produtos'].insertMany(
    [
        {
            "nome": "Memória RAM Modelo 190",
            "valor": 1243.19,
            "quantidade_estoque": 61,
            "fabricante": "Logitech",
            "categoria": "Celulares",
            "descricao": "Perfeito para quem busca desempenho com economia."
        },
        {
            "nome": "Placa-mãe Modelo 372",
            "valor": 621.3,
            "quantidade_estoque": 47,
            "fabricante": "TP-Link",
            "categoria": "Redes",
            "descricao": "Excelente custo-benefício."
        },
        {
            "nome": "Placa-mãe Modelo 927",
            "valor": 3950.61,
            "quantidade_estoque": 45,
            "fabricante": "HP",
            "categoria": "Áudio",
            "descricao": "Produto líder de mercado na categoria."
        },
        {
            "nome": "Processador Modelo 347",
            "valor": 447.28,
            "quantidade_estoque": 129,
            "fabricante": "Kingston",
            "categoria": "Áudio",
            "descricao": "Leve, potente e fácil de usar."
        },
        {
            "nome": "SSD Modelo 219",
            "valor": 590.27,
            "quantidade_estoque": 73,
            "fabricante": "TP-Link",
            "categoria": "Móveis",
            "descricao": "Produto de alta qualidade com excelente desempenho."
        },
        {
            "nome": "Smartwatch Modelo 364",
            "valor": 4872.5,
            "quantidade_estoque": 10,
            "fabricante": "Asus",
            "categoria": "Periféricos",
            "descricao": "Produto de alta qualidade com excelente desempenho."
        },
        {
            "nome": "Repetidor Modelo 887",
            "valor": 4761.34,
            "quantidade_estoque": 112,
            "fabricante": "LG",
            "categoria": "Gabinetes",
            "descricao": "Produto de alta qualidade com excelente desempenho."
        },
        {
            "nome": "Memória RAM Modelo 607",
            "valor": 3826.39,
            "quantidade_estoque": 144,
            "fabricante": "Acer",
            "categoria": "Games",
            "descricao": "Leve, potente e fácil de usar."
        },
        {
            "nome": "Notebook Modelo 411",
            "valor": 1123.44,
            "quantidade_estoque": 63,
            "fabricante": "Kingston",
            "categoria": "Periféricos",
            "descricao": "Alta durabilidade e compatibilidade."
        },
        {
            "nome": "Monitor Modelo 333",
            "valor": 2600.51,
            "quantidade_estoque": 13,
            "fabricante": "Kingston",
            "categoria": "Games",
            "descricao": "Design moderno e eficiente."
        },
        {
            "nome": "Impressora Modelo 868",
            "valor": 3381.68,
            "quantidade_estoque": 14,
            "fabricante": "HP",
            "categoria": "Celulares",
            "descricao": "Perfeito para quem busca desempenho com economia."
        },
        {
            "nome": "HD Modelo 127",
            "valor": 2734.32,
            "quantidade_estoque": 21,
            "fabricante": "Corsair",
            "categoria": "Hardware",
            "descricao": "Design moderno e eficiente."
        },
        {
            "nome": "Teclado Modelo 557",
            "valor": 2855.53,
            "quantidade_estoque": 149,
            "fabricante": "LG",
            "categoria": "Hardware",
            "descricao": "Produto de alta qualidade com excelente desempenho."
        },
        {
            "nome": "Fonte Modelo 996",
            "valor": 4030.49,
            "quantidade_estoque": 144,
            "fabricante": "TP-Link",
            "categoria": "Gabinetes",
            "descricao": "Produto líder de mercado na categoria."
        },
        {
            "nome": "Teclado Modelo 257",
            "valor": 1235.3,
            "quantidade_estoque": 100,
            "fabricante": "Samsung",
            "categoria": "Redes",
            "descricao": "Ideal para uso diário e tarefas pesadas."
        },
        {
            "nome": "Webcam Modelo 248",
            "valor": 3509.08,
            "quantidade_estoque": 130,
            "fabricante": "Sony",
            "categoria": "Móveis",
            "descricao": "Com garantia estendida do fabricante."
        },
        {
            "nome": "Processador Modelo 677",
            "valor": 3202.22,
            "quantidade_estoque": 83,
            "fabricante": "Lenovo",
            "categoria": "Informática",
            "descricao": "Produto líder de mercado na categoria."
        },
        {
            "nome": "Repetidor Modelo 938",
            "valor": 3770.1,
            "quantidade_estoque": 27,
            "fabricante": "Corsair",
            "categoria": "Games",
            "descricao": "Perfeito para quem busca desempenho com economia."
        },
        {
            "nome": "Gabinete Modelo 509",
            "valor": 1982.29,
            "quantidade_estoque": 92,
            "fabricante": "LG",
            "categoria": "Informática",
            "descricao": "Compacto, elegante e funcional."
        },
        {
            "nome": "Monitor Modelo 101",
            "valor": 311.15,
            "quantidade_estoque": 26,
            "fabricante": "Lenovo",
            "categoria": "Áudio",
            "descricao": "Excelente custo-benefício."
        },
        {
            "nome": "Monitor Modelo 196",
            "valor": 2098.21,
            "quantidade_estoque": 52,
            "fabricante": "Samsung",
            "categoria": "Games",
            "descricao": "Perfeito para quem busca desempenho com economia."
        },
        {
            "nome": "Smartwatch Modelo 264",
            "valor": 3856.72,
            "quantidade_estoque": 54,
            "fabricante": "Razer",
            "categoria": "Armazenamento",
            "descricao": "Alta durabilidade e compatibilidade."
        },
        {
            "nome": "Placa de Vídeo Modelo 490",
            "valor": 1731.52,
            "quantidade_estoque": 19,
            "fabricante": "Xiaomi",
            "categoria": "Impressoras",
            "descricao": "Produto de alta qualidade com excelente desempenho."
        },
        {
            "nome": "Processador Modelo 577",
            "valor": 2565.32,
            "quantidade_estoque": 68,
            "fabricante": "Razer",
            "categoria": "Wearables",
            "descricao": "Excelente custo-benefício."
        },
        {
            "nome": "Placa de Vídeo Modelo 612",
            "valor": 3561.89,
            "quantidade_estoque": 52,
            "fabricante": "Kingston",
            "categoria": "Redes",
            "descricao": "Leve, potente e fácil de usar."
        },
        {
            "nome": "Processador Modelo 285",
            "valor": 285.84,
            "quantidade_estoque": 120,
            "fabricante": "Microsoft",
            "categoria": "Games",
            "descricao": "Produto líder de mercado na categoria."
        },
        {
            "nome": "Impressora Modelo 300",
            "valor": 3752.66,
            "quantidade_estoque": 91,
            "fabricante": "Kingston",
            "categoria": "Móveis",
            "descricao": "Com garantia estendida do fabricante."
        },
        {
            "nome": "SSD Modelo 218",
            "valor": 4640.69,
            "quantidade_estoque": 121,
            "fabricante": "Asus",
            "categoria": "Armazenamento",
            "descricao": "Compacto, elegante e funcional."
        },
        {
            "nome": "Mouse Modelo 230",
            "valor": 2904.23,
            "quantidade_estoque": 104,
            "fabricante": "TP-Link",
            "categoria": "Armazenamento",
            "descricao": "Excelente custo-benefício."
        },
        {
            "nome": "Smartwatch Modelo 749",
            "valor": 3608.37,
            "quantidade_estoque": 80,
            "fabricante": "Xiaomi",
            "categoria": "Móveis",
            "descricao": "Produto líder de mercado na categoria."
        },
        {
            "nome": "Processador Modelo 280",
            "valor": 621.57,
            "quantidade_estoque": 48,
            "fabricante": "LG",
            "categoria": "Armazenamento",
            "descricao": "Alta durabilidade e compatibilidade."
        },
        {
            "nome": "Placa-mãe Modelo 669",
            "valor": 2336.77,
            "quantidade_estoque": 22,
            "fabricante": "Xiaomi",
            "categoria": "Wearables",
            "descricao": "Leve, potente e fácil de usar."
        },
        {
            "nome": "HD Modelo 345",
            "valor": 4575.1,
            "quantidade_estoque": 105,
            "fabricante": "Logitech",
            "categoria": "Periféricos",
            "descricao": "Design moderno e eficiente."
        },
        {
            "nome": "Fonte Modelo 696",
            "valor": 1218.17,
            "quantidade_estoque": 92,
            "fabricante": "Acer",
            "categoria": "Áudio",
            "descricao": "Alta durabilidade e compatibilidade."
        },
        {
            "nome": "Memória RAM Modelo 278",
            "valor": 2595.49,
            "quantidade_estoque": 124,
            "fabricante": "Microsoft",
            "categoria": "Impressoras",
            "descricao": "Com garantia estendida do fabricante."
        },
        {
            "nome": "Fonte Modelo 210",
            "valor": 3324.36,
            "quantidade_estoque": 23,
            "fabricante": "Dell",
            "categoria": "Gabinetes",
            "descricao": "Ideal para uso diário e tarefas pesadas."
        },
        {
            "nome": "Notebook Modelo 234",
            "valor": 4823.65,
            "quantidade_estoque": 50,
            "fabricante": "Sony",
            "categoria": "Móveis",
            "descricao": "Alta durabilidade e compatibilidade."
        },
        {
            "nome": "HD Modelo 283",
            "valor": 3469.36,
            "quantidade_estoque": 85,
            "fabricante": "Sony",
            "categoria": "Games",
            "descricao": "Excelente custo-benefício."
        },
        {
            "nome": "Smartphone Modelo 844",
            "valor": 608.91,
            "quantidade_estoque": 78,
            "fabricante": "Acer",
            "categoria": "Móveis",
            "descricao": "Produto líder de mercado na categoria."
        },
        {
            "nome": "HD Modelo 129",
            "valor": 350.96,
            "quantidade_estoque": 133,
            "fabricante": "Sony",
            "categoria": "Hardware",
            "descricao": "Leve, potente e fácil de usar."
        },
        {
            "nome": "Fonte Modelo 135",
            "valor": 4331.9,
            "quantidade_estoque": 40,
            "fabricante": "TP-Link",
            "categoria": "Móveis",
            "descricao": "Ideal para uso diário e tarefas pesadas."
        },
        {
            "nome": "Gabinete Modelo 592",
            "valor": 2133.23,
            "quantidade_estoque": 64,
            "fabricante": "TP-Link",
            "categoria": "Wearables",
            "descricao": "Leve, potente e fácil de usar."
        },
        {
            "nome": "Gabinete Modelo 625",
            "valor": 898.47,
            "quantidade_estoque": 119,
            "fabricante": "Corsair",
            "categoria": "Informática",
            "descricao": "Compacto, elegante e funcional."
        },
        {
            "nome": "Controle Modelo 666",
            "valor": 183.18,
            "quantidade_estoque": 137,
            "fabricante": "HP",
            "categoria": "Monitores",
            "descricao": "Produto líder de mercado na categoria."
        },
        {
            "nome": "Processador Modelo 425",
            "valor": 4270.37,
            "quantidade_estoque": 130,
            "fabricante": "Asus",
            "categoria": "Móveis",
            "descricao": "Compacto, elegante e funcional."
        },
        {
            "nome": "Notebook Modelo 695",
            "valor": 2773.26,
            "quantidade_estoque": 66,
            "fabricante": "Razer",
            "categoria": "Games",
            "descricao": "Excelente custo-benefício."
        },
        {
            "nome": "SSD Modelo 952",
            "valor": 686.37,
            "quantidade_estoque": 75,
            "fabricante": "LG",
            "categoria": "Informática",
            "descricao": "Compacto, elegante e funcional."
        },
        {
            "nome": "Notebook Modelo 654",
            "valor": 214.19,
            "quantidade_estoque": 41,
            "fabricante": "LG",
            "categoria": "Monitores",
            "descricao": "Com garantia estendida do fabricante."
        },
        {
            "nome": "Processador Modelo 517",
            "valor": 1169.25,
            "quantidade_estoque": 24,
            "fabricante": "Sony",
            "categoria": "Áudio",
            "descricao": "Alta durabilidade e compatibilidade."
        },
        {
            "nome": "Headset Modelo 329",
            "valor": 3401.69,
            "quantidade_estoque": 70,
            "fabricante": "Logitech",
            "categoria": "Games",
            "descricao": "Perfeito para quem busca desempenho com economia."
        }
    ]
)

// Busca o produto mais caro
db['bd3_atv3_produtos'].find().sort({ valor: -1 }).limit(1)

// Seleciona o produto mais barato
db['bd3_atv3_produtos'].find().sort({ valor: 1 }).limit(1)

// Seleciona os produtos num intervalo de valores
db['bd3_atv3_produtos'].find({
    $and : 
    [
        {valor: {$lte: 1632}},
        {valor: {$gte: 200}}
    ]
});


// Seleciona os produtos de uma categoria especifica
db['bd3_atv3_produtos'].find({
    categoria: 'Games'
});

// Seleciona os produtos de duas categorias
db['bd3_atv3_produtos'].find({
    $or : 
    [
        {categoria:  'Áudio'},
        {categoria: 'Games'}
    ]
});

// Ordena os produtos do mais barato ao mais caro
db['bd3_atv3_produtos'].find().sort({ valor: 1})

// Ordena os produtos do mais caro ao mais barato
db['bd3_atv3_produtos'].find().sort({ valor: -1})

// Seleciona os produtos de uma categoria especifica e ordena os valores
db['bd3_atv3_produtos'].find({categoria: 'Monitores'}).sort({ valor: 1 })

// Seleciona todos os produtos, excluindo uma categoria especifica e ordena do mais barato ao mais caro
db['bd3_atv3_produtos'].find({
    $nor: 
    [
        {categoria:  'Áudio'},
    ]
}).sort({valor: 1});
