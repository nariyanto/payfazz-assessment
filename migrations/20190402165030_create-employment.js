
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employment', (table) => {
    table.increments();
    table.integer('employee_id').unsigned().notNullable();
    table.integer('company_id').unsigned().notNullable();
    table.varchar('position');
    table.date('start_date');
    table.date('end_date');

    table.foreign('employee_id').references('id').inTable('employee').onDelete('CASCADE');
    table.foreign('company_id').references('id').inTable('company').onDelete('CASCADE');
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employment');
};
