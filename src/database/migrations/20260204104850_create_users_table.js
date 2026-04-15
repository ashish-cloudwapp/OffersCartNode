export const up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email').unique();
    table.string('password');
    table.enum('status', ['active', 'inactive']).defaultTo('active');
    table.timestamps(true, true);
  });
};

export const down = (knex) => {
  return knex.schema.dropTable('users');
};
