const database = 'BD3-NoSQL-AtlasMongoDB'

use(database)

db['bd3-nosql-atv2'].deleteOne({'cod_aluno':2});

db['bd3-nosql-atv2'].find()