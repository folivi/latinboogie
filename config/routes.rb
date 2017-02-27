Rails.application.routes.draw do

  resources :bookings
  get 'checkout', to: 'checkout#index'
  post 'checkout', to: 'checkout#index'

  get 'checkout/show'

  resources :tickets
  get 'partners', to: 'partners#index', as: :partners
  get 'lineup', to: 'lineup#index', as: :lineup
  get 'venue', to: 'venue#index', as: :venue
  get '/', to:'home#index'

  post 'bookings', to: 'bookings#create'
  root to: 'home#index'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
