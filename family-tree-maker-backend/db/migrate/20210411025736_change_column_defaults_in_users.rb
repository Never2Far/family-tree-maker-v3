class ChangeColumnDefaultsInUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :age
    remove_column :users, :middle_name
    remove_column :users, :relativeId
    change_column_default :users, :firstName, ''
    change_column_default :users, :lastName, ''
    change_column_default :users, :email, ''
    change_column_default :users, :userId, ''
    change_column_default :users, :uuid, ''
    change_column_default :users, :city, ''
    change_column_default :users, :state, ''
    change_column_default :users, :zip, ''
    change_column_default :users, :birthdate, ''
    change_column_default :users, :birthplace, ''
    change_column_default :users, :phone, ''
    change_column_default :users, :address, ''
    change_column_default :users, :fullName, ''
    change_column_default :users, :middleName, ''
    change_column_default :users, :nickname, ''
    change_column_default :users, :altName, ''

    change_column_null :users, :firstName, ''
    change_column_null :users, :lastName, ''
    change_column_null :users, :email, ''
    change_column_null :users, :userId, ''
    change_column_null :users, :uuid, ''
    change_column_null :users, :city, ''
    change_column_null :users, :state, ''
    change_column_null :users, :zip, ''
    change_column_null :users, :birthdate, ''
    change_column_null :users, :birthplace, ''
    change_column_null :users, :phone, ''
    change_column_null :users, :address, ''
    change_column_null :users, :fullName, ''
    change_column_null :users, :middleName, ''
    change_column_null :users, :nickname, ''
    change_column_null :users, :altName, ''

  end
end
