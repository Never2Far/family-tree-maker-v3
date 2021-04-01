class AddMoreToRelatives < ActiveRecord::Migration[6.0]
  def change
    add_column :relatives, :birthdate, :string
    add_column :relatives, :age, :integer
    add_column :relatives, :birthplace, :string
    add_column :relatives, :email, :string
    add_column :relatives, :phone, :string
    add_column :relatives, :address, :text
  end
end
