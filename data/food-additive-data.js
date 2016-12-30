/* globals require module Promise*/
"use strict";
module.exports = function(models) {
    let { FoodAdditive } = models;
    return {
        createFoodAdditive(name, rating, category, quantity,  purpose, madeBy, image, ...ingredients) {
            if (Array.isArray(ingredients[0])) {
                ingredients = ingredients[0];
            }

            var foodAdditive = new FoodAdditive({
                name,
                rating,
                category,
                quantity,
                purpose,
                madeBy,
                image,
                ingredients
            });

            return new Promise((resolve, reject) => {
                foodAdditive.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(foodAdditive);
                });
            });
        },
        getAllFoodAdditives() {
            return new Promise((resolve, reject) => {
                FoodAdditive.find((err, foodAdditives) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(foodAdditives);
                });
            });
        },
        getFoodAdditiveById(id) {
            return new Promise((resolve, reject) => {
                FoodAdditive.find({
                    _id: {
                        $in: [id]
                    }
                }, (err, foodAdditive) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(foodAdditive);
                });
            });
        }
    };
};