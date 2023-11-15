/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.table('fruits', (table) => {
    table.string('fruit_color', 50).defaultTo('green')
  }
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.table('fruits', (table) => {
    table.dropColumn('fruit_color');
  }
    )
};
