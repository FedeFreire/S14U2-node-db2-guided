/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("fruits", (table) => {
    table.increments("fruits_id");
    table.string('fruit_name', 200).notNullable().unique();
    table.decimal('fruit_avg_weight_oz').notNullable();
    table.boolean('fruit_delicious').defaultTo(true);
    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fruits");
};
