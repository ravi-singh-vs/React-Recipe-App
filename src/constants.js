export const FOOD_RESPONSES = {
    '400' : 'Bad Request',
    '401' : 'Unauthorized',
    '404' : 'Food Item Not Found',
 }
export const RECIPE_RESPONSES = {
    ... FOOD_RESPONSES,
    '404' : 'Recipe Not Found'
}