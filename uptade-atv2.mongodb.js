const database = 'BD3-NoSQL-AtlasMongoDB'

use(database)

db['bd3-nosql-atv2'].updateOne(
    {'cod_aluno':1},
    {$set:{
        'nome':"capivaro da silva",
        'cpf':"45955797807",
        'rg':"626237841",
        'tel_aluno':"11977896929",
        'tel_responsavel':"11916776553",
        'email':"eduardo@gmail.com",
        'data':"2005-03-25"}}
);

db['bd3-nosql-atv2'].find()