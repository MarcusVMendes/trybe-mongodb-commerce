db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });

db.produtos.count(
  { $text: { $search: "frango hamburguer" } },
);

// sintaxe default_language retirada da aula ao vivo do Marioto.