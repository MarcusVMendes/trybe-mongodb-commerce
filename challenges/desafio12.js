db.produtos.updateMany(
  {},
  { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } },
);

db.produtos.find(
  {},
  { nome: true, valoresNutricionais: true, _id: false },
);

// https://docs.mongodb.com/manual/reference/operator/update/sort/