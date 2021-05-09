Rails.application.routes.draw do
  resources :relatives
  # resources :users, only: :index

  delete 'relatives' => 'relatives#delete'
  post 'relatives' => 'relatives#create'
  put 'relatives' => 'relatives#update'
  get 'users' => 'users#find_or_create'
  patch 'users' => 'users#update'
  # post 'signup' => 'users#create'
  post 'login' => 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
