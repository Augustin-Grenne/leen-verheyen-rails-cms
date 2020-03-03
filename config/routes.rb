Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://gumides.rubyonrails.org/routing.html

  root to: "pages#home"
  get "filosofie", to:"pages#filosofie"
  get "literatuur", to:"pages#literatuur"
  get "nieuws", to:"pages#nieuws"

  scope(path_names: { new: "nieuw" }) do
    resources :news_items, path: "nieuws"
  end
  
end
