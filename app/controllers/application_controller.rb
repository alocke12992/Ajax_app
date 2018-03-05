class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def render_error(model)
    render json: { errors: model.errors.full_messages.join(',') }, status: 422 
  end 

end
