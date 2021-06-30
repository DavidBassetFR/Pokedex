const database = require('./database');

const dataMapper = {
  getAllPokemon:function (callback) {
    const query = {
      text : `select * from pokemon`,
    };
    database.query(query, callback);

    //join pokemon_type on pokemon.numero = pokemon_type.pokemon_numero join type on pokemon_type.type_id = type.id;
},
getOnePokemon: function (id, callback) {
  const query = {
    text : `select * from pokemon join pokemon_type on pokemon.numero = pokemon_type.pokemon_numero join type on pokemon_type.type_id = type.id where pokemon.numero =$1 `,
    values: [id]
  };
  database.query(query, callback)
},
getCategoryPage:  function (callback) {
  const query = {
    text : `select * from type`,
  };
  database.query(query, callback)
},
SpecialCategoryPage: function (category, callback) {
  const query = {
    text : `select * from type join pokemon_type on type.id = pokemon_type.type_id join pokemon on pokemon_type.pokemon_numero = pokemon.numero where type.name = $1`,
    values : [category]
  };
  database.query(query, callback)
}};
module.exports = dataMapper;

