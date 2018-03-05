Rails.application.routes.draw do
  root 'games#index'

  resources :games do 
    resources :characters 
  end 
  
end
