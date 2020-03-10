Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do

      # api/v1/customers/...
      resources :customers, only: [:show, :update], params: :id do

        # /customers
        # generates :index, :create
        # collection do
        # end

        # /customer/:id
        # member do
        # end
      end

      # api/v2/admins/customers/...
      namespace :admins do
        resources :customers, only: [:index], params: :id do
          collection do
            # api/v2/admins/customers/email_order
            post 'email_order'
          end

          member do
            # api/v2/admins/customers/:id/email_order
            post 'email_order'

          end

        end
      end

    end
  end
end