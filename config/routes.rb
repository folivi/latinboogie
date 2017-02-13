Rails.application.routes.draw do

  get 'tickets', to: 'tickets#index', as: :tickets
  get 'partners', to: 'partners#index', as: :partners
  get 'lineup', to: 'lineup#index', as: :lineup
  get 'venue', to: 'venue#index', as: :venue
  get '/', to:'home#index'
  root to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
