# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_11_025736) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "relatives", force: :cascade do |t|
    t.string "firstName"
    t.string "middleName"
    t.string "lastName"
    t.string "nickname"
    t.string "altName"
    t.text "notes"
    t.string "relationship"
    t.text "relativeId"
    t.text "userId"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "fullName"
    t.string "birthdate"
    t.integer "age"
    t.string "birthplace"
    t.string "email"
    t.string "phone"
    t.text "address"
    t.string "city"
    t.string "state"
    t.string "zip"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstName", default: ""
    t.string "lastName", default: ""
    t.string "email", default: ""
    t.text "userId", default: ""
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "auth_token"
    t.string "uuid", default: ""
    t.string "city", default: ""
    t.string "state", default: ""
    t.string "zip", default: ""
    t.string "birthdate", default: ""
    t.string "birthplace", default: ""
    t.string "phone", default: ""
    t.text "address", default: ""
    t.string "fullName", default: ""
    t.string "middleName", default: ""
    t.string "nickname", default: ""
    t.string "altName", default: ""
  end

end
