class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :description
      t.integer :dishId
      t.string :recipeCode
      t.boolean :openSource

      t.timestamps
    end
  end
end
