// note.model.js

const express = require('express');
const noteRoutes = express.Router();

// Require Note model in our routes module
let Note = require('./note.model');


//QUESTE SONO TUTTE LE OPERAZIONI DI CRUD


// Defined store route
noteRoutes.route('/add').post(function (req, res) {
	let note = new Note(req.body);
	note.save()
		.then(() => {
			res.status(200).json({
				'business': 'business in added successfully'
			});
		})
		.catch(() => {
			res.status(400).send("unable to save to database");
		});
});

// Defined get data(index or listing) route
noteRoutes.route('/').get(function (req, res) {
	Note.find(function (err, notes) {
		if (err) {
			res.json(err);
		} else {
			res.json(notes);
		}
	});
});

// Defined edit route
noteRoutes.route('/edit/:id').get(function (req, res) {
	let id = req.params.id;
	Note.findById(id, function (err, note) {
		if (err) {
			res.json(err);
		}
		res.json(note);
	});
});

//  Defined update route
noteRoutes.route('/update/:id').post(function (req, res) {
	Note.findById(req.params.id, function (err, note) {
		if (!note)
			res.status(404).send("data is not found");
		else {
			note.title = req.body.title;
			note.body = req.body.body;
			note.save().then(() => {
					res.json('Update complete');
				})
				.catch(() => {
					res.status(400).send("unable to update the database");
				});
		}
	});
});

// Defined delete | remove | destroy route
noteRoutes.route('/delete/:id').delete(function (req, res) {
	Note.findByIdAndRemove({
		_id: req.params.id
	}, function (err) {
		if (err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = noteRoutes;