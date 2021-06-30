const { request } = require('express');
const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: (req, res) => {
    
    dataMapper.getAllPokemon((err, results) => {
      if(err) {
        console.error(err);
        return;
      } else {
  
    res.render('home', {

      cards: results.rows
    });
  }})},
  getDetail: (req, res) => {
    const id = req.params.id 
    dataMapper.getOnePokemon(id, (err, results) => {
      if(err) {
        console.error(err);
        return;
      } else {
        console.log(results.rows)
        const typeList = [];
       for (const elem of results.rows){
         typeList.push({
           name: elem.name,
         })
       }
        const pokemonFill = results.rows[0]
        delete pokemonFill.type_id, delete pokemonFill.color, delete pokemonFill.name;
       pokemonFill.typeList = typeList
       console.log(pokemonFill);
       
    res.render('detail', {
      card: pokemonFill
    });
  }})},
  getCategoryPage: (req, res) => {
    dataMapper.getCategoryPage((err, results) => {
      if(err) {
        console.error(err);
      } else {
        res.render('category', {
        category: results.rows
    });
    }})},
    SpecialCategoryPage: (req, res) => {
      const category = req.params.name;
      console.log(category);
      dataMapper.SpecialCategoryPage(category, (err, results) => {
        if(err) {
          console.error(err);
        } else {
          res.render('home', {
            cards: results.rows
      });
      }})},

      searchtypePOkemon: async (req, res, next ) =>{
    const ok =  await Type.findByPk(req.params.id , {
      include :{ 
        association : 'pokemons'

      }
    })}


  };
module.exports = mainController;