class ApplicationController < ActionController::Base

helper_method :logged_in?, :current_user

def current_user
  return @current_user ||= User.find(session[:user_id]) if session[:user_id]
end

def logged_in?
  return !!current_user
end

def require_user
  if not logged_in?
    redirect_to root_path
  end
end

end
