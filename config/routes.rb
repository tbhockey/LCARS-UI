LcarsUi::Application.routes.draw do
  get "home/index"
  
  root :to => "home#index"

  match ':controller(/:action(/:id))(.:format)'
end
