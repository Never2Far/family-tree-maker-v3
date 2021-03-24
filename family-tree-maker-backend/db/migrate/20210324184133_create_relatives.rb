class CreateRelatives < ActiveRecord::Migration[6.0]
  def change
    create_table :relatives do |t|
      t.string :first_name
      t.string :last_name
      t.string :relationship
      t.text :relativeId
      t.text :userId
      t.integer :user_id

      t.timestamps
    end
  end
end
