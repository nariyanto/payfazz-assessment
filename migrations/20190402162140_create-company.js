
exports.up = function(knex, Promise) {
  return knex.schema.createTable('company', (table) => {
    table.increments().unsigned().primary().unsigned();
    table.varchar('tdp').unique().comment('This is TDP company');
    table.varchar('name');
    table.text('address');
    table.varchar('phone');
    table.varchar('email');
    table.varchar('website');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('company');
};
