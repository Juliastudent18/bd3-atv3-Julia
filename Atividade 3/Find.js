/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'bd3_atv3';

// The current database to use.
use(database);

//Find 
// db["bd3_atv3_produtos"].find()

//Find o mais caro
//db["bd3_atv3_produtos"].find().sort({ valor: -1 }).limit(1)

//Find o mais barato
//db["bd3_atv3_produtos"].find().sort({ valor: 1 }).limit(1)

//Faça uma pesquisa por produtos que estejam entre uma faixa de valor de forma que nem todo os produtos sejam exibidos
//db["bd3_atv3_produtos"].find({ valor: { $gte: 100, $lte: 500 } })

//Faça uma pesquisa por produtos de uma determinada categoria de forma que nem todo os produtos sejam exibidos
// db["bd3_atv3_produtos"].find({ categoria: "Cabelos" })

//Faça uma pesquisa por produtos de duas categorias (a pesquisa deve ser feita em uma única "query") de forma que nem todo os produtos sejam exibidos
//db["bd3_atv3_produtos"].find({ categoria: { $in: ["Cabelos", "Capilar"] } })

//Faça uma pesquisa que exclua produtos de duas categorias e mostre os produtos das outras categorias(a pesquisa deve ser feita em uma única "query") de forma que nem todo os produtos sejam exibidos
//db["bd3_atv3_produtos"].find({ categoria: { $nin: ["Cabelo", "Capilar"] } }, { _id: 0, nome: 1, preco: 1, categoria: 1 })
   
  
//Faça uma pesquisa de todos os produtos ordenados dos produtos mais baratos para os mais caros
//db["bd3_atv3_produtos"].find().sort({ valor: 1 })

//Faça uma pesquisa de todos os produtos ordenados dos produtos mais caros para os mais baratos
//db["bd3_atv3_produtos"].find().sort({ valor: -1 })


//Faça uma pesquisa de todos os produtos ordenados dos produtos mais baratos para os mais caros de uma categoria especifica
//db["bd3_atv3_produtos"].find({ categoria: "Cabelos" })

//Faça uma pesquisa de todos os produtos ordenados dos produtos mais caros para os mais baratos, excluindo uma categoria
//db["bd3_atv3_produtos"].find({ categoria: { $ne: "Capilar" } }).sort({ valor: -1 })
