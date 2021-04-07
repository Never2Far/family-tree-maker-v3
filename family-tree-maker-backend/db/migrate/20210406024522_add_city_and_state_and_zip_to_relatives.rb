class AddCityAndStateAndZipToRelatives < ActiveRecord::Migration[6.0]
  def change
    add_column :relatives, :city, :string
    add_column :relatives, :state, :string
    add_column :relatives, :zip, :string
  end
end
