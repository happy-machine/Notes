# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

 
  #def new
    #super
    #@user=User.find(current_user.id)
    #puts current_user.token

    
  #end



  def create
    super
  end


  def destroy
    cookies[:notes_token] = ''
    super
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
