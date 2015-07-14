class CreateShares < ActiveRecord::Migration
  def change
    create_table :shares do |t|
      t.string :title
      t.text :description
      t.string :link

      t.integer :user_id

      t.timestamps
    end
  end
end
