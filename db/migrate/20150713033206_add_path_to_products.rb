class AddPathToProducts < ActiveRecord::Migration
  def change
    add_column :shares, :path, :string
  end
end
