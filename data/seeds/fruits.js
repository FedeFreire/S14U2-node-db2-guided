/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("fruits").truncate();
  await knex("fruits").insert([
    { fruit_name: "apple", fruit_avg_weight_oz: 0.5, fruit_delicious: true, fruit_color: "red" },
    { fruit_name: "orange", fruit_avg_weight_oz: 0.3, fruit_delicious: true, fruit_color: "orange" },
    { fruit_name: "pear", fruit_avg_weight_oz: 0.6, fruit_delicious: true, fruit_color: "yellow" },
  ]);
};
