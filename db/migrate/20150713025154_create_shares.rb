class CreateShares < ActiveRecord::Migration
  def change
    create_table :shares do |t|
      t.string :title, null: false
      t.text :description, null: false

      t.string :link, null: false

      t.timestamps
    end
  end
end
