class CreateRelatives < ActiveRecord::Migration[6.0]
  def change
    create_table :relatives do |t|
      t.string :firstName
      t.string :middleName
      t.string :lastName
      t.string :nickname
      t.string :altName
      t.text :notes
      t.string :relationship
      t.text :relativeId
      t.text :userId
      t.integer :user_id

      t.timestamps
    end
  end
end
