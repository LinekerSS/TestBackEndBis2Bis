
# rota Post
/api/universities/

## No body
{
alpha_two_code:"BR"

web_pages:[array de strings]

name: Universidade blablabla ,

country: brasil,

domains: [array de strings],

stateProvince(opcional):RS }

### deve retornar

{
id: id da faculdade
alpha_two_code:"BR"

web_pages:[array de strings]

name: Universidade blablabla ,

country: brasil,

domains:[array de strings],

stateProvince(opcional):RS }

# rota Get

/api/universities/id/:id

### deve retornar :

{
id: id da faculdade
alpha_two_code:"BR"

web_pages:[array de strings]

name: Universidade blablabla ,

country: brasil,

domains:[array de strings],

stateProvince(opcional):RS
}

### Retornar um array com ate  vinte universidades

/api/universities/:pagination/?country

[{
id: id da faculdade
alpha_two_code:"BR"

web_pages:[array de strings]

name: Universidade blablabla ,

country: brasil,

domains:[array de strings],

stateProvince(opcional):RS
},{
id: id da faculdade
alpha_two_code:"BR"

web_pages:[array de strings],

name: Universidade blablabla ,

country: brasil,

domains: [array de strings],

stateProvince(opcional):RS
},{
id: id da faculdade
alpha_two_code:"BR"

web_pages:[array de strings]

name: Universidade blablabla ,

country: brasil,

domains: [array cm elementos],

stateProvince(opcional):RS
}]

# rota Put 
/api/universities/:id

no corpo da requisição todas as atualizações são opcionais
{
name:blablabla ,
web_pages:[],
domains:[],
}
retorna a universidade atualizado

# rota DELET 
/api/universities/:id

universidade retorna "University is deleted from database"
