
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', (table) => {
    table.increments();
    table.integer('employee_id').unsigned().notNullable();
    table.integer('friend_id').unsigned().notNullable();

    table.foreign('employee_id').references('id').inTable('employee').onDelete('CASCADE');
    table.foreign('friend_id').references('id').inTable('employee').onDelete('CASCADE');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends');
};
