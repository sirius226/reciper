json.array!(@recipes) do |recipe|
  json.extract! recipe, :id, :name, :description, :dishId, :recipeCode, :openSource
  json.url recipe_url(recipe, format: :json)
end
