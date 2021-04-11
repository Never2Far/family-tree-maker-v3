class ChangeColumnNamesInUsers < ActiveRecord::Migration[6.0]
  def change

    
    change_table :users do |t|
      t.rename :first_name, :firstName
      t.rename :last_name, :lastName
      t.remove :full_name
      t.string :middle_name, :middleName
      t.string :nickname
      t.string :altName
      t.text :relativeId
    end

  end
end
