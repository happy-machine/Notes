Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
 
  resources :notes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'notes#index'
  get '/get_notes', to: 'notes#get_notes', as: 'get_notes'
end
