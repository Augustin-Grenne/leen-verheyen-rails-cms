Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://gumides.rubyonrails.org/routing.html

  root to: "pages#home"
  get "filosofie", to: "pages#filosofie"
  get "literatuur", to: "pages#literatuur"

  scope(path_names: { new: "new" }) do
    resources :news_items, path: "nieuws"
  end

  get "login", to: "sessions#new"
  get "admin", to: "sessions#new"
  post "login", to: "sessions#create"
  get "logout", to: "sessions#destroy"
  
end
