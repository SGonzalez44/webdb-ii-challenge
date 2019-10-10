
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin_number: 1468972069357, make: 'Chevy', model: 'Traverse', milage: 400},
        {vin_number: 1468972029358, make: 'Chevy', model: 'Equinox', milage: 400},
        {vin_number: 1468972069800, make: 'Volkswagon', model: 'Jetta', milage: 400},
        {vin_number: 1468972069900, make: 'Chevy', milage: 400, model: 'Camaro', title_status: 'Salvage'}
      ]);
    });
};
