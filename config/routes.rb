Rails.application.routes.draw do
  resources :users
  post 'signup' => 'users#create'
  post 'login' => 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
