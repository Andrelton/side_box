class CreateShares < ActiveRecord::Migration
  def change
    create_table :shares do |t|
      t.string :title
      t.text :description
      t.string :link, null: false

      t.integer :user_id

      t.timestamps, null: false
    end
  end
end
