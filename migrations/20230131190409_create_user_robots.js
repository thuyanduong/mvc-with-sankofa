/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user_robots', function (table) {
    table.increments('id').primary();
    table.integer('user_id').notNullable()
    table.integer('robot_id').notNullable()
    table.foreign('user_id').references('id').inTable('users');
    table.foreign('robot_id').references('id').inTable('robots');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_robots')
};
