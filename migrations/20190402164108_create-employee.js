
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employee', (table) => {
    table.increments().unsigned().primary();
    table.varchar('ktp').unique().comment('This is e-KTP employee');
    table.varchar('name');
    table.text('address');
    table.varchar('phone');
    table.varchar('email');
    table.varchar('website');
    table.boolean('is_wni');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employee');
};
