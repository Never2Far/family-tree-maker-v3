class AddDetailsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :zip, :string
    add_column :users, :birthdate, :string
    add_column :users, :age, :integer
    add_column :users, :birthplace, :string
    add_column :users, :phone, :string
    add_column :users, :address, :text
    add_column :users, :fullName, :string
  end
end
