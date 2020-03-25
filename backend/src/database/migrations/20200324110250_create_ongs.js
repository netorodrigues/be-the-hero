// o que efetivamente a migration vai fazer de mudança no banco de dados
exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
};

// o que deve ser feito se o método up der errado, como corrigir e voltar ao estado anterior
exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};
