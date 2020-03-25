// o que efetivamente a migration vai fazer de mudança no banco de dados
exports.up = function(knex) {
    return knex.schema.createTable("incidents", function(table){
        table.increments();
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    })
  };
  
  // o que deve ser feito se o método up der errado, como corrigir e voltar ao estado anterior
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
  };
  