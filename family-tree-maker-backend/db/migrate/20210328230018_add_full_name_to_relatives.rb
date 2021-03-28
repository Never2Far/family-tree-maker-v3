class AddFullNameToRelatives < ActiveRecord::Migration[6.0]
  def change
    add_column :relatives, :fullName, :string
  end
end
