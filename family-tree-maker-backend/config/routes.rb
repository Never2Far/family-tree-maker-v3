Rails.application.routes.draw do
  resources :relatives
  resources :users

  delete 'relatives' => 'relatives#delete'
  post 'relatives' => 'relatives#create'
  post 'resolve' => 'users#create'
  # post 'signup' => 'users#create'
  post 'login' => 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
