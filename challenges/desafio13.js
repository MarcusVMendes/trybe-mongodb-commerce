db.produtos.updateMany(
  { "valoresNutricionais.2.tipo": "sódio", "valoresNutricionais.2.percentual": { $gte: 40 } },
  { $push: { tags: "muito sódio" } },
);

db.produtos.find(
  {},
  { nome: true, tags: true, _id: false },
);